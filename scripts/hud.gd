extends CanvasLayer

@onready var wood_label: Label = $Root/Wood
@onready var gold_label: Label = $Root/Gold
@onready var axe_label: Label = $Root/Axe
@onready var dur_fill: ColorRect = $Root/DurBar/Fill
@onready var dur_text: Label = $Root/DurBar/Text
@onready var toast: Label = $Root/Toast
@onready var combo_label: Label = $Root/Combo
@onready var zone_label: Label = $Root/Zone

var _toast_tween: Tween


func _ready() -> void:
	_style_label(gold_label, 26)
	gold_label.add_theme_color_override("font_color", Color(1.0, 0.84, 0.32))
	_style_label(wood_label, 18)
	_style_label(axe_label, 16)
	_style_label(dur_text, 16)
	_style_label(toast, 22)
	_style_label(combo_label, 20)
	combo_label.add_theme_color_override("font_color", Color(1.0, 0.78, 0.35))
	_style_label(zone_label, 18)
	toast.modulate.a = 0.0
	GameState.wood_changed.connect(func(_v: int) -> void: _refresh())
	GameState.gold_changed.connect(func(_v: int) -> void: _refresh())
	GameState.durability_changed.connect(func(_a: int, _b: int) -> void: _refresh())
	GameState.axe_changed.connect(_refresh)
	GameState.stats_changed.connect(_refresh)
	GameState.combo_changed.connect(func(_c: int) -> void: _refresh())
	GameState.slash_changed.connect(_refresh)
	GameState.message.connect(_on_message)
	_refresh()


func _process(_delta: float) -> void:
	var player := get_tree().get_first_node_in_group("player") as Node2D
	if player:
		zone_label.text = GameState.zone_name(player.global_position.x)
	if GameState.combo > 0:
		combo_label.text = "連擊 ×%d" % GameState.combo
		combo_label.modulate.a = 1.0
	else:
		combo_label.text = ""


func _refresh() -> void:
	gold_label.text = "金幣  %d" % GameState.gold
	wood_label.text = "木材  %d" % GameState.wood
	var axe_line := "%s　%s" % [GameState.axe_name(), GameState.axe_damage_range_text()]
	if GameState.slash_stock > 0:
		axe_line += "　必殺×%d" % GameState.slash_stock
	axe_label.text = axe_line
	var ratio := 0.0
	if GameState.max_durability() > 0:
		ratio = float(GameState.durability) / float(GameState.max_durability())
	var bar_w: float = $Root/DurBar.size.x
	dur_fill.size = Vector2(bar_w * ratio, $Root/DurBar.size.y)
	dur_text.text = "耐力  %d / %d" % [GameState.durability, GameState.max_durability()]
	if ratio <= 0.0:
		dur_fill.color = Color(0.45, 0.22, 0.18)
	elif ratio < 0.25:
		dur_fill.color = Color(0.86, 0.32, 0.24)
	elif ratio < 0.5:
		dur_fill.color = Color(0.91, 0.62, 0.28)
	else:
		dur_fill.color = Color(0.78, 0.55, 0.22)


func _on_message(text: String, color: Color) -> void:
	toast.text = text
	toast.add_theme_color_override("font_color", color)
	toast.modulate.a = 1.0
	if _toast_tween:
		_toast_tween.kill()
	_toast_tween = create_tween()
	_toast_tween.tween_interval(1.8)
	_toast_tween.tween_property(toast, "modulate:a", 0.0, 0.45)


func _style_label(lab: Label, size: int) -> void:
	lab.add_theme_font_override("font", GameState.ui_font(size))
	lab.add_theme_font_size_override("font_size", size)
	lab.add_theme_color_override("font_color", Color(1, 0.93, 0.78))
	lab.add_theme_color_override("font_outline_color", Color(0.1, 0.06, 0.04, 0.92))
	lab.add_theme_constant_override("outline_size", 7)
