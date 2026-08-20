extends Node2D

var zone: int = 0
var tree_h: float = 420.0
var growth: float = 1.0
var _felled := false
var _hit_flash := 0.0
var _wobble := 0.0
var _wobble_decay := 0.0
var _chop_marks: Array[float] = []
var _wind := 0.0
var _wind_speed := 1.0
var _wind_acc := 0.0
var _on_screen := true


func setup(p_zone: int, p_height: float) -> void:
	zone = p_zone
	tree_h = p_height
	growth = 1.0
	_felled = false
	_chop_marks.clear()
	_wind = randf() * TAU
	_wind_speed = randf_range(0.7, 1.35)
	queue_redraw()


func set_felled(v: bool) -> void:
	_felled = v
	growth = 1.0 if not v else 0.0
	queue_redraw()


func set_growth(g: float) -> void:
	growth = clampf(g, 0.0, 1.0)
	_felled = false
	queue_redraw()


func play_hit(from_dir: int) -> void:
	_hit_flash = 1.0
	_wobble = float(from_dir) * 0.08
	_wobble_decay = 1.0
	var mark_y := -tree_h * 0.38 + randf_range(-8, 8)
	_chop_marks.append(mark_y)
	if _chop_marks.size() > 6:
		_chop_marks.pop_front()
	queue_redraw()


func _process(delta: float) -> void:
	var cam := get_viewport().get_camera_2d()
	if cam:
		_on_screen = absf(global_position.x - cam.get_screen_center_position().x) < 980.0
	if not _on_screen:
		return
	_wind += delta * _wind_speed
	var dirty := false
	if _hit_flash > 0.0:
		_hit_flash = maxf(0.0, _hit_flash - delta * 4.5)
		dirty = true
	if _wobble_decay > 0.0:
		_wobble_decay = maxf(0.0, _wobble_decay - delta * 5.0)
		_wobble = sin(_wobble_decay * 28.0) * _wobble_decay * 0.12 * sign(_wobble)
		dirty = true
	_wind_acc += delta
	if _wind_acc >= 0.08:
		_wind_acc = 0.0
		dirty = true
	if dirty:
		queue_redraw()


func _draw() -> void:
	if not _on_screen and not _felled:
		return
	if _felled:
		_draw_stump()
		return

	var g := growth
	var h := tree_h * g
	if h < 8.0:
		return

	var sx := g
	var wind_rot := sin(_wind) * 0.045 * (0.4 + g)
	var wind_x := sin(_wind * 0.85) * 6.0 * g
	draw_set_transform(Vector2(_wobble * tree_h * 0.04 + wind_x, 0), wind_rot, Vector2(sx, sx))

	if _hit_flash > 0.0:
		pass  # flash applied via _flash_col in draw calls

	draw_colored_polygon(
		PackedVector2Array([
			Vector2(-tree_h * 0.16, 2 / sx), Vector2(tree_h * 0.16, 2 / sx),
			Vector2(tree_h * 0.12, 12 / sx), Vector2(-tree_h * 0.12, 12 / sx),
		]),
		VisualPalette.SHADOW
	)

	if g < 0.22:
		_draw_sprout(h / sx)
		draw_set_transform(Vector2.ZERO, 0.0, Vector2.ONE)
		return

	var trunk_w := 18.0 + zone * 4.0
	var trunk_h := tree_h * 0.48
	_draw_trunk(trunk_w, trunk_h)

	for mark_y in _chop_marks:
		_draw_chop_mark(trunk_w, mark_y)

	var hi: Color
	var lo: Color
	var sh: Color
	match zone:
		0:
			hi = VisualPalette.LEAF_NEAR_HI
			lo = VisualPalette.LEAF_NEAR
			sh = VisualPalette.LEAF_NEAR_SHADOW
		1:
			hi = VisualPalette.LEAF_MID_HI
			lo = VisualPalette.LEAF_MID
			sh = VisualPalette.LEAF_MID_SHADOW
		2:
			hi = VisualPalette.LEAF_FAR_HI
			lo = VisualPalette.LEAF_FAR
			sh = VisualPalette.LEAF_FAR_SHADOW
		3, 4:
			hi = VisualPalette.LEAF_DANGER_HI
			lo = VisualPalette.LEAF_DANGER
			sh = VisualPalette.LEAF_DANGER_SHADOW
		_:
			hi = VisualPalette.LEAF_DEAD_HI
			lo = VisualPalette.LEAF_DEAD
			sh = VisualPalette.LEAF_DEAD_SHADOW

	var canopy_base := -trunk_h
	var cr := tree_h * 0.22 + zone * 10.0
	_draw_canopy(0, canopy_base - cr * 0.35, cr * 1.15, cr, hi, lo, sh)
	_draw_canopy(-cr * 0.55, canopy_base - cr * 0.05, cr * 0.95, cr * 0.82, lo, sh, sh.darkened(0.08))
	_draw_canopy(cr * 0.52, canopy_base - cr * 0.02, cr * 0.88, cr * 0.78, lo.darkened(0.04), sh, sh)
	_draw_canopy(0, canopy_base - cr * 0.72, cr * 0.72, cr * 0.62, hi.lightened(0.04), hi, lo)

	draw_set_transform(Vector2.ZERO, 0.0, Vector2.ONE)


func _draw_chop_mark(trunk_w: float, y: float) -> void:
	draw_line(Vector2(-trunk_w * 0.42, y), Vector2(trunk_w * 0.42, y), VisualPalette.TRUNK_DARK, 3.0)
	draw_line(Vector2(-trunk_w * 0.25, y + 2), Vector2(trunk_w * 0.1, y + 2), VisualPalette.WOOD_RING, 1.5)


func _draw_trunk(w: float, h: float) -> void:
	draw_rect(Rect2(-w * 0.5, -h, w, h), VisualPalette.TRUNK)
	draw_rect(Rect2(-w * 0.5 + 2, -h, w * 0.22, h), VisualPalette.TRUNK_LIGHT)
	draw_rect(Rect2(w * 0.5 - 4, -h, 3, h), VisualPalette.TRUNK_DARK)
	for i in 4:
		var ly := -h + 18.0 + i * (h - 24.0) / 4.0
		draw_line(Vector2(-w * 0.35, ly), Vector2(w * 0.35, ly), VisualPalette.TRUNK_DARK, 1.5)
	draw_colored_polygon(PackedVector2Array([
		Vector2(-w * 0.7, 0), Vector2(-w * 0.35, -6), Vector2(-w * 0.1, 0),
	]), VisualPalette.TRUNK_DARK)
	draw_colored_polygon(PackedVector2Array([
		Vector2(w * 0.7, 0), Vector2(w * 0.35, -6), Vector2(w * 0.1, 0),
	]), VisualPalette.TRUNK_DARK)


func _draw_canopy(cx: float, cy: float, rx: float, ry: float, fill: Color, hi: Color, sh: Color) -> void:
	_draw_blob(Vector2(cx, cy + ry * 0.15), rx, ry * 0.88, sh)
	_draw_blob(Vector2(cx, cy), rx * 0.92, ry * 0.82, fill)
	_draw_blob(Vector2(cx - rx * 0.18, cy - ry * 0.12), rx * 0.42, ry * 0.38, hi)


func _draw_sprout(h: float) -> void:
	draw_line(Vector2(0, 0), Vector2(0, -h), VisualPalette.SPROUT.darkened(0.12), 3.0)
	_draw_blob(Vector2(-7, -h * 0.55), 9, 6, VisualPalette.SPROUT)
	_draw_blob(Vector2(8, -h * 0.62), 8, 5, VisualPalette.SPROUT.lightened(0.06))


func _draw_stump() -> void:
	draw_colored_polygon(PackedVector2Array([
		Vector2(-26, 2), Vector2(26, 2), Vector2(20, 12), Vector2(-20, 12),
	]), VisualPalette.SHADOW)
	draw_rect(Rect2(-20, -26, 40, 28), VisualPalette.TRUNK)
	_draw_blob(Vector2(0, -26), 18, 7, VisualPalette.WOOD_RING)
	_draw_blob(Vector2(0, -26), 10, 4, VisualPalette.TRUNK_DARK)
	for i in 5:
		draw_arc(Vector2(0, -26), 4.0 + i * 2.5, 0, TAU, 16, VisualPalette.WOOD_RING.darkened(0.08), 1.0)


func _draw_blob(center: Vector2, rx: float, ry: float, col: Color) -> void:
	var pts := PackedVector2Array()
	var steps := 20
	for i in steps:
		var a := TAU * float(i) / float(steps)
		pts.append(center + Vector2(cos(a) * rx, sin(a) * ry))
	draw_colored_polygon(pts, col)
