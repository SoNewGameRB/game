extends Node2D

const H := VisualPalette.PLAYER_HEIGHT
const TRAIL_INTERVAL := 0.04
const TRAIL_MAX := 5

var anim := "idle"
var frame := 0.0
var facing := 1
var chop_phase := 0.0
var airborne := false
var _impact := false
var _angle_history: Array[Dictionary] = []
var _trail_tick := 0.0
var _land := 0.0


func set_anim(name: String) -> void:
	if anim != name:
		anim = name
		frame = 0.0
		_angle_history.clear()
	queue_redraw()


func set_facing(dir: int) -> void:
	facing = dir
	queue_redraw()


func set_chop_phase(t: float) -> void:
	chop_phase = clampf(t, 0.0, 1.0)
	if t < 0.05:
		_angle_history.clear()
		_trail_tick = 0.0


func set_impact(v: bool) -> void:
	_impact = v
	queue_redraw()


func set_airborne(v: bool) -> void:
	if airborne and not v:
		_land = 1.0
	airborne = v
	queue_redraw()


func _process(delta: float) -> void:
	if _land > 0.0:
		_land = maxf(0.0, _land - delta * 5.5)
	if anim == "idle":
		frame += delta * 2.8
	elif anim == "walk":
		frame += delta * 13.5
	elif anim == "jump":
		frame += delta * 9.0
	elif anim == "chop":
		for entry in _angle_history:
			entry.alpha -= delta * 4.0
		while not _angle_history.is_empty() and _angle_history[0].alpha <= 0.05:
			_angle_history.pop_front()
		if chop_phase >= 0.32 and chop_phase <= 0.66:
			_trail_tick += delta
			if _trail_tick >= TRAIL_INTERVAL:
				_trail_tick = 0.0
				var pose := _compute_pose()
				_angle_history.append({"ang": pose.axe_ang, "alpha": 1.0})
				while _angle_history.size() > TRAIL_MAX:
					_angle_history.pop_front()
	queue_redraw()


func _draw() -> void:
	var sc := H / 76.0
	draw_set_transform(Vector2.ZERO, 0.0, Vector2(sc, sc))

	_draw_shadow()

	var pose := _compute_pose()
	if anim == "chop" and chop_phase >= 0.30:
		_draw_swing_arc_trail(pose)
	if anim == "walk":
		_draw_step_dust(pose)

	var lunge_x: float = pose.lunge_x
	draw_set_transform(Vector2(lunge_x, pose.bob), pose.body_rot * facing, Vector2(facing, 1.0) * pose.squash)

	_draw_back_cape(pose)
	_draw_legs(pose)
	_draw_torso(pose)
	_draw_arms_axe(pose)
	_draw_head(pose)

	draw_set_transform(Vector2.ZERO, 0.0, Vector2.ONE)


func _compute_pose() -> Dictionary:
	var bob := 0.0
	var body_rot := 0.0
	var squash := Vector2.ONE
	var leg_l := 0.0
	var leg_r := 0.0
	var arm_raise := 0.0
	var axe_ang := -0.4
	var lunge_x := 0.0
	var cape_flutter := 0.0
	var head_tilt := 0.0
	var hat_tilt := 0.0

	if anim == "idle":
		bob = sin(frame) * 2.2
		squash = Vector2(1.03 + sin(frame) * 0.025, 0.97 - sin(frame) * 0.025)
		axe_ang = -0.38 + sin(frame * 0.65) * 0.18
		arm_raise = sin(frame * 0.65) * 3.0
		cape_flutter = sin(frame * 2.4) * 0.12
		head_tilt = sin(frame * 0.45) * 0.08
		hat_tilt = sin(frame * 0.45) * 0.04
		leg_l = sin(frame * 0.5) * 1.5
		leg_r = -sin(frame * 0.5) * 1.5
	elif anim == "walk":
		var s := sin(frame * 2.0)
		var a := absf(s)
		bob = a * 3.4
		body_rot = s * 0.12
		leg_l = s * 18.0
		leg_r = -s * 18.0
		axe_ang = -0.45 + s * 0.32
		arm_raise = s * 8.0
		cape_flutter = 0.22 + s * 0.18
		head_tilt = s * 0.1
		hat_tilt = s * 0.08
		squash = Vector2(1.0 + a * 0.06, 1.0 - a * 0.07)
		lunge_x = s * 1.5
	elif anim == "jump":
		bob = -4.0 + sin(frame) * 1.5
		body_rot = 0.12
		squash = Vector2(0.84, 1.18)
		leg_l = 18.0
		leg_r = -10.0
		axe_ang = -1.35
		arm_raise = -16.0
		cape_flutter = 0.42
		head_tilt = -0.12
		hat_tilt = -0.08
		lunge_x = 2.0
	elif anim == "chop":
		var t := chop_phase
		if t < 0.32:
			var w := t / 0.32
			axe_ang = lerpf(-0.2, -3.15, w)
			body_rot = lerpf(0.0, -0.42, w)
			arm_raise = lerpf(0.0, -28.0, w)
			bob = lerpf(0.0, -6.0, w)
			lunge_x = lerpf(0.0, -6.0 * facing, w)
			leg_l = lerpf(0.0, -10.0, w)
			leg_r = lerpf(0.0, 8.0, w)
			head_tilt = lerpf(0.0, -0.28, w)
			hat_tilt = lerpf(0.0, -0.18, w)
			cape_flutter = lerpf(0.1, 0.45, w)
			squash = Vector2(lerpf(1.0, 1.08, w), lerpf(1.0, 0.92, w))
		elif t < 0.58:
			var s2 := (t - 0.32) / 0.26
			axe_ang = lerpf(-3.15, 1.25, s2)
			body_rot = lerpf(-0.42, 0.38, s2)
			arm_raise = lerpf(-28.0, 14.0, s2)
			bob = lerpf(-6.0, 8.0, s2)
			lunge_x = lerpf(-6.0 * facing, 14.0 * facing, s2)
			squash = Vector2(lerpf(1.08, 0.82, s2), lerpf(0.92, 1.18, s2))
			leg_l = lerpf(-10.0, 12.0, s2)
			leg_r = lerpf(8.0, -8.0, s2)
			head_tilt = lerpf(-0.28, 0.32, s2)
			hat_tilt = lerpf(-0.18, 0.22, s2)
			cape_flutter = lerpf(0.45, -0.2, s2)
		elif t < 0.72:
			axe_ang = 1.25
			body_rot = 0.38
			arm_raise = 14.0
			bob = 8.0 if _impact else 5.0
			lunge_x = 14.0 * facing
			squash = Vector2(1.15, 0.82) if _impact else Vector2(0.92, 1.08)
			leg_l = 12.0
			leg_r = -8.0
			head_tilt = 0.32
			hat_tilt = 0.22
			cape_flutter = -0.15
		else:
			var r := (t - 0.72) / 0.28
			axe_ang = lerpf(1.25, -0.2, r)
			body_rot = lerpf(0.38, 0.0, r)
			arm_raise = lerpf(14.0, 0.0, r)
			bob = lerpf(5.0, 0.0, r)
			lunge_x = lerpf(14.0 * facing, 0.0, r)
			squash = Vector2.ONE
			leg_l = lerpf(12.0, 0.0, r)
			leg_r = lerpf(-8.0, 0.0, r)
			head_tilt = lerpf(0.32, 0.0, r)
			hat_tilt = lerpf(0.22, 0.0, r)
			cape_flutter = lerpf(-0.15, 0.08, r)

	if _land > 0.0:
		bob += 5.0 * _land
		squash = Vector2(squash.x + 0.16 * _land, squash.y - 0.16 * _land)

	return {
		"bob": bob, "body_rot": body_rot, "squash": squash,
		"leg_l": leg_l, "leg_r": leg_r, "arm_raise": arm_raise,
		"axe_ang": axe_ang, "cape_flutter": cape_flutter, "lunge_x": lunge_x,
		"head_tilt": head_tilt, "hat_tilt": hat_tilt,
	}


func _draw_step_dust(pose: Dictionary) -> void:
	if absf(sin(frame * 2.0)) < 0.82:
		return
	var side := 1.0 if sin(frame * 2.0) > 0.0 else -1.0
	draw_circle(Vector2(side * 8.0, 4.0), 4.0 + absf(sin(frame)) * 2.0, Color(0.55, 0.45, 0.32, 0.28))


func _draw_swing_arc_trail(pose: Dictionary) -> void:
	var dir := float(facing)
	var pivot := Vector2(dir * 14.0 + pose.lunge_x, -44.0)

	for hi in _angle_history.size():
		var entry: Dictionary = _angle_history[hi]
		var ang: float = entry.ang
		var alpha: float = entry.alpha
		var age := float(_angle_history.size() - hi)
		var a0: float = ang - 0.55
		var a1: float = ang + 0.35
		var off := pivot + Vector2(dir * age * 2.0, age * 1.2)
		draw_set_transform(off, 0.0, Vector2(dir, 1.0))
		_draw_trail_streaks(a0, a1, alpha * 0.85, age)

	if chop_phase >= 0.32 and chop_phase <= 0.62:
		var lead_a0: float = pose.axe_ang - 0.55
		var lead_a1: float = pose.axe_ang + 0.38
		draw_set_transform(pivot, 0.0, Vector2(dir, 1.0))
		_draw_trail_streaks(lead_a0, lead_a1, 1.0, 0.0)
		draw_arc(Vector2.ZERO, 42.0, lead_a0, lead_a1, 26, Color(1.0, 0.45, 0.12, 0.95), 5.0)
		draw_arc(Vector2.ZERO, 54.0, lead_a0 + 0.05, lead_a1 - 0.05, 22, Color(1.0, 0.82, 0.4, 0.55), 2.0)

	draw_set_transform(Vector2.ZERO, 0.0, Vector2.ONE)


func _draw_trail_streaks(a0: float, a1: float, alpha: float, layer: float) -> void:
	var streaks := 10
	for i in streaks:
		var fi := float(i)
		var center := (float(streaks) - 1.0) * 0.5
		var off := (fi - center) * 2.8
		var inner_r := 14.0 + off + layer * 1.2
		var outer_r := 42.0 + off + layer * 1.8
		var peak: float = 1.0 - abs(fi - center) / max(center, 1.0)
		var col := Color(
			1.0,
			lerpf(0.1, 0.5, peak),
			lerpf(0.05, 0.2, peak),
			alpha * lerpf(0.1, 0.65, peak)
		)
		_draw_arc_band(a0, a1, inner_r, outer_r, 14, col)


func _draw_arc_band(a0: float, a1: float, r_in: float, r_out: float, segs: int, col: Color) -> void:
	var pts := PackedVector2Array()
	for i in segs + 1:
		var t := float(i) / float(segs)
		pts.append(Vector2.from_angle(lerpf(a0, a1, t)) * r_out)
	for i in segs + 1:
		var t := 1.0 - float(i) / float(segs)
		pts.append(Vector2.from_angle(lerpf(a0, a1, t)) * r_in)
	draw_colored_polygon(pts, col)


func _draw_shadow() -> void:
	var w := 22.0 if anim != "jump" else 14.0
	draw_colored_polygon(
		PackedVector2Array([
			Vector2(-w, 2), Vector2(w, 2), Vector2(w - 4, 8), Vector2(-w + 4, 8),
		]),
		VisualPalette.SHADOW
	)


func _draw_back_cape(pose: Dictionary) -> void:
	var flutter: float = pose.cape_flutter
	draw_colored_polygon(
		PackedVector2Array([
			Vector2(-10, -54), Vector2(10, -54),
			Vector2(16 + flutter * 22, -16), Vector2(-16 - flutter * 22, -16),
		]),
		VisualPalette.PLAYER_CAPE
	)
	draw_colored_polygon(
		PackedVector2Array([
			Vector2(-8, -52), Vector2(8, -52),
			Vector2(12 + flutter * 16, -20), Vector2(-12 - flutter * 16, -20),
		]),
		VisualPalette.PLAYER_CAPE_HI
	)


func _draw_legs(pose: Dictionary) -> void:
	_draw_boot_leg(-6, -20, pose.leg_l)
	_draw_boot_leg(0, -20, pose.leg_r)


func _draw_boot_leg(x: float, y: float, swing: float) -> void:
	var sh := swing * 0.08
	var kick := swing * 0.12
	draw_rect(Rect2(x + sh, y, 8, 18), VisualPalette.PLAYER_PANTS)
	draw_rect(Rect2(x + sh - 1 + kick, y + 14, 11, 8), VisualPalette.PLAYER_BOOT)
	draw_rect(Rect2(x + sh + 1 + kick, y + 20, 8, 4), VisualPalette.PLAYER_BOOT.darkened(0.15))


func _draw_torso(_pose: Dictionary) -> void:
	draw_rect(Rect2(-14, -58, 28, 40), VisualPalette.PLAYER_COAT)
	draw_rect(Rect2(-11, -54, 22, 32), VisualPalette.PLAYER_VEST)
	draw_colored_polygon(
		PackedVector2Array([
			Vector2(-14, -56), Vector2(14, -56), Vector2(10, -48), Vector2(-10, -48),
		]),
		VisualPalette.PLAYER_FUR
	)
	draw_line(Vector2(-14, -46), Vector2(14, -46), VisualPalette.PLAYER_COAT_SHADOW, 1.5)
	draw_rect(Rect2(-12, -22, 24, 4), VisualPalette.PLAYER_BELT)
	draw_circle(Vector2(0, -20), 3, VisualPalette.AXE_GLOW)


func _draw_arms_axe(pose: Dictionary) -> void:
	var ax_p := Vector2(10, -44 + pose.arm_raise * 0.15)
	var back_arm := Vector2(-8, -46 + pose.arm_raise * -0.08)
	draw_line(Vector2(-6, -50), back_arm, VisualPalette.PLAYER_COAT_SHADOW, 4.0)
	draw_circle(back_arm, 3.2, VisualPalette.PLAYER_GLOVE)
	draw_line(Vector2(4, -50), ax_p + Vector2(-4, 2), VisualPalette.PLAYER_SKIN_SHADOW, 4.2)
	draw_line(Vector2(-2, -48), ax_p + Vector2(-8, 0), VisualPalette.PLAYER_GLOVE, 3.5)
	draw_circle(ax_p + Vector2(-2, 1), 3.4, VisualPalette.PLAYER_GLOVE)
	draw_line(ax_p, ax_p + Vector2.from_angle(pose.axe_ang) * 36, VisualPalette.AXE_WOOD, 4.0)
	draw_line(ax_p, ax_p + Vector2.from_angle(pose.axe_ang) * 36, VisualPalette.AXE_WOOD.darkened(0.2), 1.5)
	var head_p := ax_p + Vector2.from_angle(pose.axe_ang) * 30
	draw_colored_polygon(
		PackedVector2Array([
			head_p,
			head_p + Vector2.from_angle(pose.axe_ang + 0.62) * 18,
			head_p + Vector2.from_angle(pose.axe_ang + 0.05) * 22,
		]),
		VisualPalette.AXE_METAL
	)
	draw_colored_polygon(
		PackedVector2Array([
			head_p,
			head_p + Vector2.from_angle(pose.axe_ang - 0.62) * 16,
			head_p + Vector2.from_angle(pose.axe_ang - 0.05) * 20,
		]),
		VisualPalette.AXE_METAL.darkened(0.12)
	)
	if anim == "chop" and chop_phase > 0.28 and chop_phase < 0.68:
		draw_line(head_p, head_p + Vector2.from_angle(pose.axe_ang + 0.3) * 16, VisualPalette.AXE_GLOW, 3.5)


func _draw_head(pose: Dictionary) -> void:
	var tilt: float = pose.head_tilt
	var hat: float = pose.hat_tilt
	var hx := tilt * 10.0
	var hy := -70.0 + hat * 2.0
	draw_circle(Vector2(hx, hy), 11, VisualPalette.PLAYER_SKIN)
	draw_arc(Vector2(hx, hy + 1), 5, 0, PI, 10, VisualPalette.PLAYER_SKIN_SHADOW, 1.5)
	draw_circle(Vector2(hx + 4, hy - 1), 1.8, Color(0.12, 0.08, 0.06))
	draw_colored_polygon(
		PackedVector2Array([
			Vector2(hx - 14, hy - 4), Vector2(hx + 14, hy - 4),
			Vector2(hx + 16, hy + 2), Vector2(hx - 16, hy + 2),
		]),
		VisualPalette.PLAYER_BANDANA
	)
	draw_line(Vector2(hx - 16, hy + 3), Vector2(hx + 16, hy + 3), VisualPalette.PLAYER_BANDANA.darkened(0.2), 2.0)
	var hat_y := hy - 6.0 + hat * 4.0
	draw_colored_polygon(
		PackedVector2Array([
			Vector2(hx - 20, hat_y), Vector2(hx + 20, hat_y),
			Vector2(hx + 16, hat_y - 8), Vector2(hx - 16, hat_y - 8),
		]),
		VisualPalette.PLAYER_HAT
	)
	draw_rect(Rect2(hx - 22, hat_y, 44, 4), VisualPalette.PLAYER_HAT.darkened(0.15))
