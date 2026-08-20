extends Area2D
## 區域飛賊：近林偷金、中段偷耐力、後段偷必殺。

var kind: String = "gold"
var hp: int = 1
var _t := 0.0
var _base_y := 320.0
var _dir := 1.0
var _phase := "cruise"
var _phase_t := 0.0
var _stolen_gold := 0
var _stolen_dur := 0
var _stolen_slash := 0
var _alive := true
var _grace := 2.2


func setup(start: Vector2, dir: float, p_kind: String = "gold") -> void:
	global_position = start
	_base_y = start.y
	_dir = dir
	kind = p_kind
	hp = 1
	queue_redraw()


func _ready() -> void:
	add_to_group("thieves")
	z_index = 12
	monitoring = true
	monitorable = true
	collision_layer = 16
	collision_mask = 4
	var shape := CollisionShape2D.new()
	var circ := CircleShape2D.new()
	circ.radius = 28.0
	shape.shape = circ
	add_child(shape)
	body_entered.connect(_on_body)
	queue_redraw()


func _process(delta: float) -> void:
	if not _alive or GameState.is_busy_ui():
		return
	_t += delta
	_phase_t += delta
	_grace = maxf(0.0, _grace - delta)
	var player := get_tree().get_first_node_in_group("player") as Node2D
	if player == null:
		return
	match _phase:
		"cruise":
			global_position.x += _dir * 55.0 * delta
			global_position.y = _base_y + sin(_t * 1.6) * 14.0
			var dx := player.global_position.x - global_position.x
			if _grace <= 0.0 and absf(dx) < 260.0:
				_phase = "warn"
				_phase_t = 0.0
				GameState.notify("%s盯上你了！快揮斧！" % GameState.thief_kind_name(kind), Color(1.0, 0.55, 0.35))
				queue_redraw()
		"warn":
			global_position.x += _dir * 18.0 * delta
			global_position.y = _base_y + sin(_t * 8.0) * 6.0
			if _phase_t >= 2.4:
				_phase = "dive"
				_phase_t = 0.0
				queue_redraw()
		"dive":
			var dest := player.global_position + Vector2(0, -70)
			global_position = global_position.move_toward(dest, 95.0 * delta)
			if global_position.distance_to(player.global_position) < 36.0 and _phase_t > 0.45:
				_try_steal()
		"flee":
			global_position.x += _dir * 160.0 * delta
			global_position.y = move_toward(global_position.y, _base_y - 40.0, 80.0 * delta)
			if _phase_t > 3.5:
				_phase = "cruise"
				_phase_t = 0.0
				_grace = 4.0
				queue_redraw()
	if global_position.x < 40.0 or global_position.x > GameState.WORLD_RIGHT - 40.0:
		_dir *= -1.0
	if _phase == "warn" or _phase == "dive":
		queue_redraw()


func take_hit(_damage: int = 1) -> bool:
	if not _alive:
		return false
	hp -= 1
	ChopFx.crescent_slash(global_position, 1 if _dir > 0 else -1, true)
	_die()
	return true


func _try_steal() -> void:
	if _grace > 0.0:
		return
	_phase = "flee"
	_phase_t = 0.0
	_dir = 1.0 if global_position.x < GameState.WORLD_RIGHT * 0.5 else -1.0
	var z := GameState.zone_at(global_position.x)
	match kind:
		"dur":
			_stolen_dur += GameState.steal_durability(4 + z * 2)
			if _stolen_dur > 0:
				GameState.notify("蝕刃蝠偷走 %d 耐力！" % _stolen_dur, Color(1.0, 0.55, 0.32))
			else:
				_stolen_gold += GameState.steal_gold(2)
		"slash":
			_stolen_slash += GameState.steal_slash(1)
			if _stolen_slash > 0:
				GameState.notify("奪技鴉偷走林道必殺 ×%d！" % _stolen_slash, Color(0.55, 0.82, 1.0))
			else:
				_stolen_dur += GameState.steal_durability(6)
				if _stolen_dur > 0:
					GameState.notify("沒有必殺可偷，改偷 %d 耐力。" % _stolen_dur, Color(1.0, 0.6, 0.4))
				else:
					_stolen_gold += GameState.steal_gold(3 + z)
		"mix":
			_stolen_gold += GameState.steal_gold(3 + z)
			_stolen_dur += GameState.steal_durability(5 + z)
			_stolen_slash += GameState.steal_slash(1)
			GameState.notify("死域劫匪下手了！金／耐力／必殺都可能被偷。", Color(1.0, 0.35, 0.32))
		_:
			_stolen_gold += GameState.steal_gold(1 + z / 2)
			if _stolen_gold > 0:
				GameState.notify("偷金庫偷走 %d 金！" % _stolen_gold, Color(1.0, 0.45, 0.42))
	if _stolen_gold + _stolen_dur + _stolen_slash > 0:
		Sfx.steal()


func _on_body(body: Node2D) -> void:
	if body.is_in_group("player") and _phase == "dive" and _phase_t > 0.45:
		_try_steal()


func _die() -> void:
	_alive = false
	if _stolen_gold + _stolen_dur + _stolen_slash > 0:
		GameState.restore_loot(_stolen_gold, _stolen_dur, _stolen_slash)
		GameState.notify("打落%s，贓物追回。" % GameState.thief_kind_name(kind), Color(0.7, 0.92, 0.55))
	else:
		GameState.add_gold(2)
		GameState.notify("打落%s。" % GameState.thief_kind_name(kind), Color(0.8, 0.9, 0.6))
	GameState.note_thief_down()
	Sfx.chop_impact()
	queue_free()


func _body_col() -> Color:
	match kind:
		"dur":
			return Color(0.82, 0.42, 0.16)
		"slash":
			return Color(0.22, 0.48, 0.78)
		"mix":
			return Color(0.55, 0.08, 0.12)
	return Color(0.22, 0.1, 0.16)


func _draw() -> void:
	var flap := sin(_t * (18.0 if _phase == "warn" else 8.0)) * 12.0
	var body_col := _body_col()
	if _phase == "warn":
		body_col = Color(0.95, 0.25, 0.18).lerp(body_col, 0.45 + sin(_t * 14.0) * 0.45)
	elif _phase == "dive":
		body_col = body_col.lightened(0.12)
	draw_colored_polygon(PackedVector2Array([
		Vector2(-32, -6 + flap), Vector2(-8, -10), Vector2(0, 6), Vector2(-10, 8),
	]), body_col)
	draw_colored_polygon(PackedVector2Array([
		Vector2(32, -6 + flap), Vector2(8, -10), Vector2(0, 6), Vector2(10, 8),
	]), body_col)
	draw_circle(Vector2(0, 0), 12.0, body_col.lightened(0.12))
	draw_circle(Vector2(-4, -3), 2.6, Color(1.0, 0.82, 0.25))
	draw_circle(Vector2(4, -3), 2.6, Color(1.0, 0.82, 0.25))
	if _phase == "warn":
		draw_circle(Vector2(0, -28), 5.0, Color(1.0, 0.25, 0.18, 0.9))
	if _stolen_gold + _stolen_dur + _stolen_slash > 0:
		draw_circle(Vector2(0, 14), 6.0, Color(0.92, 0.74, 0.22))
