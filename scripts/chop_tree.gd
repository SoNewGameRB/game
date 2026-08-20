extends StaticBody2D
class_name ChopTree

enum TreeState { FULL, FELLED, GROWING }

const RESPAWN_WAIT := 10.0
const GROWTH_TIME := 5.5

@onready var visual: Node2D = $Visual
@onready var collision: CollisionShape2D = $CollisionShape2D
@onready var hp_bg: ColorRect = $HpBar/Bg
@onready var hp_fill: ColorRect = $HpBar/Fill
@onready var hp_wrap: Node2D = $HpBar
@onready var warn_label: Label = $WarnLabel

var max_hp: int = 3
var hp: int = 3
var wood_yield: int = 1
var zone: int = 0
var kind: int = GameState.TreeKind.NORMAL
var tree_h: float = 420.0
var _state := TreeState.FULL
var _growth := 1.0
var _warn_sent := false
var _grow_tween: Tween
var _tag: Label


func _ready() -> void:
	add_to_group("chop_trees")
	warn_label.visible = false
	warn_label.add_theme_font_override("font", GameState.ui_font(15))
	warn_label.add_theme_font_size_override("font_size", 15)
	warn_label.add_theme_color_override("font_color", VisualPalette.GROW_WARN)
	warn_label.add_theme_color_override("font_outline_color", Color(0.08, 0.05, 0.03))
	warn_label.add_theme_constant_override("outline_size", 5)
	_tag = Label.new()
	_tag.visible = false
	_tag.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	_tag.add_theme_font_override("font", GameState.ui_font(14))
	_tag.add_theme_font_size_override("font_size", 14)
	_tag.add_theme_color_override("font_outline_color", Color(0.08, 0.05, 0.03))
	_tag.add_theme_constant_override("outline_size", 5)
	_tag.position = Vector2(-48, -40)
	_tag.size = Vector2(96, 22)
	add_child(_tag)


func setup(world_x: float) -> void:
	zone = GameState.zone_at(world_x)
	kind = GameState.roll_tree_kind(world_x)
	max_hp = maxi(1, int(round(float(GameState.tree_hp_at(world_x)) * GameState.tree_kind_hp_mult(kind))))
	hp = max_hp
	wood_yield = GameState.tree_yield_at(world_x)
	tree_h = VisualPalette.TREE_HEIGHTS[mini(zone, VisualPalette.TREE_HEIGHTS.size() - 1)]
	if kind == GameState.TreeKind.IRON:
		tree_h *= 1.08
	elif kind == GameState.TreeKind.BRITTLE:
		tree_h *= 0.9
	_state = TreeState.FULL
	_growth = 1.0
	_warn_sent = false
	warn_label.visible = false
	if visual.has_method("setup"):
		visual.setup(zone, tree_h)
	visual.modulate = GameState.tree_kind_tint(kind)
	_apply_growth_visual()
	_update_collision()
	_refresh_kind_tag()
	hp_wrap.position.y = -tree_h * 0.55
	warn_label.position.y = -tree_h * 0.28
	hp_wrap.visible = false


func _refresh_kind_tag() -> void:
	var nm := GameState.tree_kind_name(kind)
	if nm.is_empty() or _state != TreeState.FULL:
		_tag.visible = false
		return
	_tag.visible = true
	_tag.text = nm
	_tag.add_theme_color_override("font_color", GameState.tree_kind_tint(kind).lightened(0.15))
	# 掛在樹幹中段，避免蓋到畫面上方 HUD
	_tag.position = Vector2(-48, -tree_h * 0.42)


func block_radius() -> float:
	if _state == TreeState.FELLED:
		return 16.0
	if _state == TreeState.GROWING:
		return (tree_h * 0.10 + 14.0) * _growth
	return trunk_half_width() + 6.0


func trunk_half_width() -> float:
	return 20.0 + float(zone) * 4.0


func is_felled() -> bool:
	return _state != TreeState.FULL


func is_blocking() -> bool:
	return _state == TreeState.FULL


func is_growing() -> bool:
	return _state == TreeState.GROWING


func hit(damage: int) -> int:
	if _state != TreeState.FULL:
		return 0
	hp = max(0, hp - damage)
	_update_hp()
	if hp <= 0:
		return _fell()
	return 0


func apply_chop_hit(damage: int, from_dir: int, grade: String = "normal") -> int:
	if _state != TreeState.FULL:
		return 0
	_play_impact_vfx(from_dir, damage, grade)
	return hit(damage)


func force_fell(from_dir: int = 1) -> int:
	if _state != TreeState.FULL:
		return 0
	hp = 0
	_play_impact_vfx(from_dir, max_hp, "fierce")
	_update_hp()
	return _fell()


func _play_impact_vfx(from_dir: int, damage: int, grade: String) -> void:
	if visual.has_method("play_hit"):
		visual.play_hit(from_dir)
	var will_fell := hp - damage <= 0
	var heavy := grade in ["heavy", "fierce", "crit"]
	ChopFx.chop_impact(global_position, from_dir, tree_h, will_fell or heavy)
	match grade:
		"light", "soft":
			_float_text("輕 -%d" % damage, Color(0.82, 0.88, 0.95))
		"heavy":
			_float_text("重擊 -%d" % damage, Color(1.0, 0.78, 0.42))
		"fierce":
			_float_text("猛砍 -%d" % damage, Color(1.0, 0.55, 0.28))
		"crit":
			_float_text("暴擊 -%d" % damage, Color(1.0, 0.42, 0.22))
		_:
			_float_text("-%d" % damage, Color(1, 0.92, 0.78))


func _fell() -> int:
	_state = TreeState.FELLED
	_growth = 0.0
	hp_wrap.visible = false
	warn_label.visible = false
	if _tag:
		_tag.visible = false
	_update_collision()
	visual.rotation = 0.0
	visual.modulate = Color.WHITE
	if visual.has_method("set_felled"):
		visual.set_felled(true)
	var roll: Dictionary = GameState.roll_wood_at(global_position.x, kind)
	var gained: int = int(roll["amount"])
	var bonus: int = int(roll["bonus"])
	var wtype: int = int(roll["type"])
	var wname: String = str(roll["type_name"])
	var kn := GameState.tree_kind_name(kind)
	wood_yield = gained
	GameState.add_wood(gained, wtype)
	GameState.register_fell(global_position.x, kind, gained)
	ChopFx.tree_fell(global_position, tree_h, zone)
	if kn != "":
		_float_text("%s倒！+%d %s" % [kn, gained, wname], Color(1.0, 0.88, 0.4))
	elif bonus > 0:
		_float_text("+%d %s（保底 %d +%d）" % [gained, wname, int(roll["floor"]), bonus], Color(1.0, 0.86, 0.35))
	else:
		_float_text("+%d %s" % [gained, wname], Color(0.91, 0.78, 0.45))
	get_tree().create_timer(GameState.tree_respawn_wait(global_position.x)).timeout.connect(_begin_growth)
	return gained


func _begin_growth() -> void:
	if not is_inside_tree():
		return
	_state = TreeState.GROWING
	_growth = 0.0
	hp = max_hp
	_warn_sent = false
	hp_wrap.visible = false
	if _tag:
		_tag.visible = false
	warn_label.text = "樹苗長大中…"
	warn_label.visible = true
	warn_label.modulate.a = 0.0
	if visual.has_method("set_growth"):
		visual.set_growth(0.0)
	visual.modulate = Color.WHITE
	_update_collision()
	_float_text("樹苗萌芽", VisualPalette.GROW_WARN)
	if _grow_tween:
		_grow_tween.kill()
	_grow_tween = create_tween()
	_grow_tween.tween_property(warn_label, "modulate:a", 1.0, 0.35)
	_grow_tween.parallel().tween_method(_set_growth, 0.0, 1.0, GameState.tree_growth_time(global_position.x)).set_ease(Tween.EASE_IN).set_trans(Tween.TRANS_CUBIC)
	_grow_tween.tween_callback(_finish_growth)


func _set_growth(g: float) -> void:
	_growth = g
	_apply_growth_visual()
	_update_collision()
	if g >= 0.18 and g < 0.95:
		warn_label.text = "快離開！樹在長高"
		warn_label.visible = true
		_pulse_warn()
	if g >= 0.35 and not _warn_sent:
		_warn_sent = true
		_notify_nearby_player()


func _apply_growth_visual() -> void:
	if visual.has_method("set_growth"):
		visual.set_growth(_growth)
	elif visual.has_method("set_felled"):
		visual.set_felled(_state == TreeState.FELLED)


func _finish_growth() -> void:
	setup(global_position.x)
	_float_text("樹已長成", Color(0.75, 0.9, 0.65))
	call_deferred("_notify_if_blocking_player")


func _pulse_warn() -> void:
	var tw := create_tween()
	tw.tween_property(warn_label, "modulate:a", 0.45, 0.35)
	tw.tween_property(warn_label, "modulate:a", 1.0, 0.35)


func _notify_nearby_player() -> void:
	var player := get_tree().get_first_node_in_group("player") as Node2D
	if player and player.global_position.distance_to(global_position) < tree_h * 0.55:
		GameState.notify("注意！附近有樹正在長回來，快換位置。", VisualPalette.GROW_WARN)


func _notify_if_blocking_player() -> void:
	var player := get_tree().get_first_node_in_group("player") as CharacterBody2D
	if player == null or not player.has_method("is_blocked_by_tree"):
		return
	if player.is_blocked_by_tree() and GameState.durability <= 0:
		GameState.notify("樹已長回！斧頭也鈍了，按 R 可緊急回驛。", Color(1.0, 0.62, 0.38))


func _update_collision() -> void:
	if _state == TreeState.FELLED:
		collision.disabled = true
		return
	if _state == TreeState.GROWING:
		collision.disabled = _growth < 0.92
	else:
		collision.disabled = false
	var shape := collision.shape as RectangleShape2D
	if shape == null:
		return
	var scale := 1.0 if _state == TreeState.FULL else _growth
	shape.size = Vector2((40.0 + zone * 8.0) * scale, tree_h * 0.48 * scale)
	collision.position = Vector2(0, -shape.size.y * 0.5)


func _update_hp() -> void:
	hp_wrap.visible = hp < max_hp and hp > 0 and _state == TreeState.FULL
	var ratio := float(hp) / float(max_hp)
	hp_fill.size.x = hp_bg.size.x * ratio
	if ratio > 0.5:
		hp_fill.color = Color(0.45, 0.78, 0.38)
	elif ratio > 0.25:
		hp_fill.color = Color(0.91, 0.72, 0.28)
	else:
		hp_fill.color = Color(0.86, 0.32, 0.24)


func _float_text(text: String, color: Color) -> void:
	var lab := Label.new()
	lab.text = text
	lab.add_theme_font_override("font", GameState.ui_font(18))
	lab.add_theme_font_size_override("font_size", 18)
	lab.add_theme_color_override("font_color", color)
	lab.add_theme_color_override("font_outline_color", Color(0.08, 0.05, 0.03, 0.9))
	lab.add_theme_constant_override("outline_size", 5)
	lab.position = Vector2(-30, -tree_h * maxf(_growth, 0.2) - 28.0)
	add_child(lab)
	var tw := create_tween()
	tw.tween_property(lab, "position:y", lab.position.y - 40.0, 0.85)
	tw.parallel().tween_property(lab, "modulate:a", 0.0, 0.85)
	tw.tween_callback(lab.queue_free)
