extends CharacterBody2D

const GRAVITY := 980.0
const GRAVITY_UP := 720.0
const AIR_ACCEL := 2200.0
const GROUND_ACCEL := 3400.0
const CHOP_RANGE := 130.0
const CHOP_ANIM_MIN := 0.36
const CHOP_ANIM_FLOOR := 0.14
const IMPACT_PHASE := 0.50
const TRAIL_PHASE := 0.28
const CLICK_HISTORY_SEC := 0.95
const CLICK_SAMPLE_MAX := 8

@onready var visual: Node2D = $Visual
@onready var chop_timer: Timer = $ChopTimer
@onready var hint: Label = $Hint
@onready var camera: Camera2D = $Camera2D

var _facing := 1
var _busy := false
var _trapped := false
var _cam_base := Vector2.ZERO
var _chop_time := 0.0
var _chop_dur := 0.82
var _chop_trail_done := false
var _chop_impact_done := false
var _cam_look := 80.0
var _cam_bob := 0.0
var _rmb_held := false
var _click_times: Array[float] = []
var _dashing := false
var _dash_target_x := 0.0
var _dash_dir := 1
var _slash_felled: Dictionary = {}


func _ready() -> void:
	chop_timer.one_shot = true
	_sync_chop_timer()
	GameState.stats_changed.connect(_sync_chop_timer)
	_cam_base = camera.offset
	hint.visible = false
	hint.add_theme_font_override("font", GameState.ui_font(16))
	hint.add_theme_font_size_override("font_size", 16)
	hint.add_theme_color_override("font_color", Color(1, 0.93, 0.78))
	hint.add_theme_color_override("font_outline_color", Color(0.08, 0.05, 0.03))
	hint.add_theme_constant_override("outline_size", 6)
	if visual.has_method("set_anim"):
		visual.set_anim("idle")


func _sync_chop_timer() -> void:
	chop_timer.wait_time = GameState.chop_cooldown()


func _physics_process(delta: float) -> void:
	if GameState.run_over:
		return
	if _dashing:
		_advance_dash(delta)
		move_and_slide()
		_push_out_of_trees()
		_update_camera(delta)
		return

	var held_jump := Input.is_action_pressed("jump") and not GameState.is_busy_ui()
	if not is_on_floor():
		velocity.y += (GRAVITY_UP if velocity.y < 0.0 and held_jump else GRAVITY) * delta
	else:
		if velocity.y > 0.0:
			velocity.y = 0.0

	var dir := 0.0
	if not GameState.is_busy_ui():
		dir = Input.get_axis("ui_left", "ui_right")
		if Input.is_physical_key_pressed(KEY_A):
			dir = -1.0
		elif Input.is_physical_key_pressed(KEY_D):
			dir = 1.0
		if Input.is_physical_key_pressed(KEY_LEFT):
			dir = -1.0
		elif Input.is_physical_key_pressed(KEY_RIGHT):
			dir = 1.0
		if Input.is_action_just_pressed("jump") and is_on_floor():
			velocity.y = GameState.jump_force()

	var speed := GameState.move_speed()
	var target := dir * speed
	if _busy:
		target *= 0.78
	var accel := GROUND_ACCEL if is_on_floor() else AIR_ACCEL
	velocity.x = move_toward(velocity.x, target, accel * delta)
	if dir != 0.0 and not GameState.is_busy_ui():
		_facing = 1 if dir > 0.0 else -1

	move_and_slide()
	_push_out_of_trees()
	global_position.x = clampf(global_position.x, 40.0, GameState.WORLD_RIGHT - 40.0)
	GameState.note_explore(global_position.x)
	_update_camera(delta)

	if visual.has_method("set_airborne"):
		visual.set_airborne(not is_on_floor())

	if _busy:
		_advance_chop(delta)
	else:
		_update_anim(dir)
		if visual.has_method("set_facing"):
			visual.set_facing(_facing)
		if not GameState.is_busy_ui() and _rmb_held:
			_face_toward_mouse()
			_try_chop()

	_update_trapped_hint()


func _update_camera(delta: float) -> void:
	var want := 55.0 + float(_facing) * 85.0
	_cam_look = lerpf(_cam_look, want, 1.0 - exp(-4.5 * delta))
	_cam_bob = lerpf(_cam_bob, clampf(velocity.y, -180.0, 180.0) * 0.06, 1.0 - exp(-5.0 * delta))
	camera.position.x = _cam_look
	camera.position.y = -118.0 - _cam_bob + sin(Time.get_ticks_msec() * 0.0016) * 3.0


func _advance_chop(delta: float) -> void:
	_chop_time += delta
	var phase := clampf(_chop_time / _chop_dur, 0.0, 1.0)
	if visual.has_method("set_chop_phase"):
		visual.set_chop_phase(phase)

	if not _chop_trail_done and phase >= TRAIL_PHASE:
		_chop_trail_done = true
		var swing_dur := _chop_dur * (IMPACT_PHASE - TRAIL_PHASE)
		ChopFx.swing_trail(global_position + Vector2(_facing * 26.0, -50.0), _facing, swing_dur)

	if not _chop_impact_done and phase >= IMPACT_PHASE:
		_chop_impact_done = true
		_resolve_chop_hit()

	if phase >= 1.0:
		_finish_chop()


func _update_anim(dir: float) -> void:
	if not visual.has_method("set_anim"):
		return
	if not is_on_floor():
		visual.set_anim("jump")
	elif absf(dir) > 0.1:
		visual.set_anim("walk")
	else:
		visual.set_anim("idle")


func _unhandled_input(event: InputEvent) -> void:
	if GameState.is_busy_ui():
		if event is InputEventMouseButton and event.button_index == MOUSE_BUTTON_RIGHT:
			_rmb_held = false
		return
	if event is InputEventMouseButton:
		var mb := event as InputEventMouseButton
		if mb.button_index == MOUSE_BUTTON_RIGHT:
			if mb.pressed:
				_rmb_held = true
				_face_toward_mouse()
				_register_chop_click()
				_try_chop()
			else:
				_rmb_held = false
			get_viewport().set_input_as_handled()
			return
		if mb.button_index == MOUSE_BUTTON_LEFT and mb.pressed and not mb.is_echo():
			_face_toward_mouse()
			_register_chop_click()
			_try_chop()
			get_viewport().set_input_as_handled()
			return
	if event.is_echo() or not event.is_pressed():
		return
	if event is InputEventKey:
		var key := event as InputEventKey
		if key.physical_keycode in [KEY_J, KEY_Z]:
			_register_chop_click()
			_try_chop()
			get_viewport().set_input_as_handled()
		elif key.physical_keycode == KEY_R:
			_try_emergency_return()
			get_viewport().set_input_as_handled()
		elif key.physical_keycode == KEY_Q:
			_try_inn_slash()
			get_viewport().set_input_as_handled()


func _now_sec() -> float:
	return Time.get_ticks_msec() * 0.001


func _register_chop_click() -> void:
	var now := _now_sec()
	_click_times.append(now)
	_prune_click_times(now)


func _prune_click_times(now: float = -1.0) -> void:
	if now < 0.0:
		now = _now_sec()
	while _click_times.size() > 0 and now - _click_times[0] > CLICK_HISTORY_SEC:
		_click_times.remove_at(0)
	while _click_times.size() > CLICK_SAMPLE_MAX:
		_click_times.remove_at(0)


## 依最近點擊節奏決定揮斧時長；連點越快砍越快，按住則維持基礎速度
func _effective_chop_dur() -> float:
	var base := maxf(CHOP_ANIM_MIN, GameState.chop_cooldown())
	_prune_click_times()
	if _click_times.size() < 2:
		return base
	var total := 0.0
	for i in range(1, _click_times.size()):
		total += _click_times[i] - _click_times[i - 1]
	var avg := total / float(_click_times.size() - 1)
	# 點擊間隔直接驅動揮斧節奏，略快於手指一點讓手感跟得上
	var from_clicks := avg * 0.88
	return clampf(from_clicks, CHOP_ANIM_FLOOR, base)


func _face_toward_mouse() -> void:
	var mp := get_global_mouse_position()
	if mp.x < global_position.x - 8.0:
		_facing = -1
	elif mp.x > global_position.x + 8.0:
		_facing = 1
	if visual.has_method("set_facing"):
		visual.set_facing(_facing)


func is_blocked_by_tree() -> bool:
	if _collides_with_blocking_tree():
		return true
	return _overlaps_blocking_tree()


func _collides_with_blocking_tree() -> bool:
	for i in get_slide_collision_count():
		var body := get_slide_collision(i).get_collider()
		if body is ChopTree and (body as ChopTree).is_blocking():
			return true
	return false


func _overlaps_blocking_tree() -> bool:
	for node in get_tree().get_nodes_in_group("chop_trees"):
		var tree := node as ChopTree
		if tree == null or not tree.is_blocking():
			continue
		if global_position.distance_to(tree.global_position) <= tree.block_radius():
			return true
	return false


func _update_trapped_hint() -> void:
	var trapped_now := GameState.durability <= 0 and is_blocked_by_tree()
	if trapped_now and not _trapped:
		_flash_hint("按 R 回客棧")
	_trapped = trapped_now


func _try_emergency_return() -> void:
	if not GameState.emergency_return_to_station():
		Sfx.deny()
		return
	Sfx.repair()
	global_position = GameState.station_pos()
	velocity = Vector2.ZERO
	_busy = false
	_rmb_held = false
	_trapped = false
	hint.visible = false


func _try_chop() -> void:
	if _busy or not chop_timer.is_stopped():
		return
	if GameState.durability <= 0:
		GameState.notify("斧頭鈍了！按 R 回客棧修復，或走到驛站。", Color(1.0, 0.62, 0.38))
		Sfx.deny()
		_rmb_held = false
		_flash_hint("按 R 回客棧")
		return

	_busy = true
	_chop_time = 0.0
	_chop_dur = _effective_chop_dur()
	_chop_trail_done = false
	_chop_impact_done = false

	if visual.has_method("set_anim"):
		visual.set_anim("chop")
	if visual.has_method("set_impact"):
		visual.set_impact(false)
	if visual.has_method("set_chop_phase"):
		visual.set_chop_phase(0.0)
	chop_timer.wait_time = _chop_dur
	chop_timer.start()


func _push_out_of_trees() -> void:
	var px := global_position.x
	for node in get_tree().get_nodes_in_group("chop_trees"):
		var tree := node as ChopTree
		if tree == null or not tree.is_blocking():
			continue
		if absf(tree.global_position.x - px) > 80.0:
			continue
		var half := tree.trunk_half_width() + 15.0
		var dx := px - tree.global_position.x
		if absf(dx) >= half:
			continue
		var side := signf(dx)
		if side == 0.0:
			side = -float(_facing)
		global_position.x = tree.global_position.x + side * half
		if signf(velocity.x) == -side:
			velocity.x = 0.0


func _resolve_chop_hit() -> void:
	var bird := _thief_in_range()
	if bird and bird.has_method("take_hit"):
		bird.take_hit(maxi(1, GameState.axe_damage()))
		GameState.register_hit()
		Sfx.chop_impact()
		if visual.has_method("set_impact"):
			visual.set_impact(true)
		_camera_shake(6.0, 0.1)
		return
	var tree := _tree_in_front()
	if tree == null or not tree.is_blocking():
		GameState.register_miss()
		return
	var cost := GameState.chop_durability_cost(tree.global_position.x, tree.kind)
	if GameState.durability < cost:
		GameState.notify("這片林太硬了，斧頭耐力不夠。", Color(1.0, 0.62, 0.38))
		Sfx.deny()
		return
	if not GameState.spend_durability(cost):
		return
	var rolled: Dictionary = GameState.roll_chop_damage()
	var dmg: int = int(rolled["damage"])
	var grade: String = str(rolled["grade"])
	var crit := GameState.roll_crit()
	if crit:
		dmg = maxi(dmg + 1, int(round(float(dmg) * randf_range(1.75, 2.15))))
		grade = "crit"
	var gained: int = tree.apply_chop_hit(dmg, _facing, grade)
	GameState.register_hit()
	velocity.x = -float(_facing) * GameState.move_speed() * 0.35
	global_position.x -= float(_facing) * 6.0
	_push_out_of_trees()
	if visual.has_method("set_impact"):
		visual.set_impact(true)
	var heavy := grade in ["heavy", "fierce", "crit"]
	_camera_shake(12.0 if heavy or gained > 0 else 4.0, 0.12)
	if gained > 0:
		Sfx.tree_fall()
	else:
		Sfx.chop_impact()


func _thief_in_range() -> Node:
	var best: Node = null
	var best_d := 240.0
	for node in get_tree().get_nodes_in_group("thieves"):
		if node == null or not is_instance_valid(node):
			continue
		var n2 := node as Node2D
		if n2 == null:
			continue
		var d := global_position.distance_to(n2.global_position)
		if d < best_d:
			best_d = d
			best = node
	return best


func _try_inn_slash() -> void:
	if _dashing or _busy:
		return
	if not GameState.slash_ready():
		GameState.notify("林道必殺要先在客棧購買。", Color(1.0, 0.72, 0.42))
		Sfx.deny()
		return
	if not GameState.can_start_inn_slash(global_position.x):
		GameState.notify("要在客棧附近、面向下一座客棧才能發動。", Color(1.0, 0.72, 0.42))
		Sfx.deny()
		return
	var dest_id := GameState.adjacent_station_id(global_position.x, _facing)
	if dest_id < 0:
		GameState.notify("這個方向沒有下一座客棧。", Color(1.0, 0.62, 0.42))
		Sfx.deny()
		return
	if GameState.durability <= 0:
		GameState.notify("沒有耐力，無法發動必殺。", Color(1.0, 0.5, 0.4))
		Sfx.deny()
		return
	if not GameState.begin_inn_slash():
		Sfx.deny()
		return
	_dashing = true
	_busy = true
	_rmb_held = false
	_dash_dir = _facing
	_dash_target_x = GameState.station_x(dest_id)
	_slash_felled.clear()
	Sfx.slash()
	GameState.notify(
		"林道必殺！耐力耗盡，斬向「%s」" % GameState.station_name(dest_id),
		Color(1.0, 0.82, 0.35)
	)
	if visual.has_method("set_anim"):
		visual.set_anim("chop")
	ChopFx.crescent_slash(global_position + Vector2(_facing * 40, -50), _facing, true)


func _advance_dash(delta: float) -> void:
	var speed := 980.0
	var to_go := _dash_target_x - global_position.x
	if signf(to_go) != float(_dash_dir) or absf(to_go) < 12.0:
		global_position.x = _dash_target_x
		_finish_dash()
		return
	global_position.x += float(_dash_dir) * speed * delta
	velocity.y = 0.0
	_fell_along_slash()
	if visual.has_method("set_chop_phase"):
		visual.set_chop_phase(0.5)


func _fell_along_slash() -> void:
	for node in get_tree().get_nodes_in_group("chop_trees"):
		var tree := node as ChopTree
		if tree == null or not tree.is_blocking():
			continue
		if absf(tree.global_position.x - global_position.x) > 90.0:
			continue
		var id := tree.get_instance_id()
		if _slash_felled.has(id):
			continue
		_slash_felled[id] = true
		tree.force_fell(_dash_dir)
	for node in get_tree().get_nodes_in_group("thieves"):
		if node and is_instance_valid(node) and node.has_method("take_hit"):
			var n2 := node as Node2D
			if n2 and absf(n2.global_position.x - global_position.x) < 80.0:
				node.take_hit(99)


func _finish_dash() -> void:
	_dashing = false
	_busy = false
	_slash_felled.clear()
	_push_out_of_trees()
	if visual.has_method("set_anim"):
		visual.set_anim("idle")
	if visual.has_method("set_chop_phase"):
		visual.set_chop_phase(0.0)
	GameState.notify("林道必殺結束。", Color(0.85, 0.9, 0.7))


func _finish_chop() -> void:
	_busy = false
	if visual.has_method("set_anim"):
		visual.set_anim("idle")
	if visual.has_method("set_chop_phase"):
		visual.set_chop_phase(0.0)
	if visual.has_method("set_impact"):
		visual.set_impact(false)


func _camera_shake(amount: float, duration: float) -> void:
	var tw := create_tween()
	tw.set_ignore_time_scale(true)
	var steps := 4
	for i in steps:
		var falloff := 1.0 - float(i) / float(steps)
		var off := Vector2(
			randf_range(-amount, amount) * falloff,
			randf_range(-amount * 0.35, amount * 0.35) * falloff
		)
		tw.tween_property(camera, "offset", _cam_base + off, duration / float(steps))
	tw.tween_property(camera, "offset", _cam_base, duration / float(steps))


func _tree_in_front() -> ChopTree:
	var best: ChopTree = null
	var best_d := CHOP_RANGE
	for node in get_tree().get_nodes_in_group("chop_trees"):
		var tree := node as ChopTree
		if tree == null or not is_instance_valid(tree) or not tree.is_blocking():
			continue
		var dx := tree.global_position.x - global_position.x
		# 只打揮砍朝向那一側；樹心必須在面前
		if dx * float(_facing) < 18.0:
			continue
		var d := absf(dx)
		if d < best_d:
			best_d = d
			best = tree
	return best


func _flash_hint(text: String) -> void:
	hint.text = text
	hint.visible = true
	hint.modulate.a = 1.0
	var tw := create_tween()
	tw.tween_interval(0.9)
	tw.tween_property(hint, "modulate:a", 0.0, 0.35)
	tw.tween_callback(func() -> void: hint.visible = false)
