extends Node2D
## Layered arc streaks that sweep downward — sword-trail style swing VFX.

var _dir := 1.0
var _t := 0.0
var _dur := 0.32
var _history: Array[Dictionary] = []


func _ready() -> void:
	_dir = get_meta("dir", 1.0)
	_dur = get_meta("dur", 0.32)
	z_index = 36
	scale.x = sign(_dir) if _dir != 0.0 else 1.0


func _process(delta: float) -> void:
	_t += delta
	var prog := clampf(_t / _dur, 0.0, 1.0)

	if prog < 1.0:
		var ang_center := lerpf(-2.35, 0.65, prog)
		var span := lerpf(0.55, 1.15, prog)
		_history.append({
			"a0": ang_center - span * 0.55,
			"a1": ang_center + span * 0.42,
			"alpha": 1.0,
			"layer": _history.size(),
		})

	for entry in _history:
		entry.alpha -= delta * 2.6
	while not _history.is_empty() and _history[0].alpha <= 0.04:
		_history.pop_front()

	queue_redraw()
	if _t > _dur + 0.45:
		queue_free()


func _draw() -> void:
	for entry in _history:
		_draw_slash_layers(entry.a0, entry.a1, entry.alpha, entry.layer)


func _draw_slash_layers(a0: float, a1: float, alpha: float, layer: int) -> void:
	var streaks := 14
	for i in streaks:
		var fi := float(i)
		var center := (float(streaks) - 1.0) * 0.5
		var off := (fi - center) * 3.2
		var inner_r := 18.0 + off + layer * 1.5
		var outer_r := 58.0 + off + layer * 2.2
		var peak := 1.0 - abs(fi - center) / center
		var col := Color(
			1.0,
			lerpf(0.12, 0.55, peak),
			lerpf(0.04, 0.22, peak),
			alpha * lerpf(0.12, 0.72, peak)
		)
		_draw_arc_band(a0, a1, inner_r, outer_r, 18, col)

	var mid := 36.0 + layer * 1.8
	draw_arc(Vector2.ZERO, mid, a0 + 0.04, a1 - 0.04, 28, Color(1.0, 0.42, 0.12, alpha * 0.92), 4.5)
	draw_arc(Vector2.ZERO, mid + 14.0, a0, a1, 28, Color(1.0, 0.72, 0.32, alpha * 0.65), 2.0)
	draw_arc(Vector2.ZERO, mid + 20.0, a0 + 0.08, a1 - 0.1, 20, Color(1.0, 0.92, 0.75, alpha * 0.35), 1.0)


func _draw_arc_band(a0: float, a1: float, r_in: float, r_out: float, segs: int, col: Color) -> void:
	var pts := PackedVector2Array()
	for i in segs + 1:
		var t := float(i) / float(segs)
		pts.append(Vector2.from_angle(lerpf(a0, a1, t)) * r_out)
	for i in segs + 1:
		var t := 1.0 - float(i) / float(segs)
		pts.append(Vector2.from_angle(lerpf(a0, a1, t)) * r_in)
	draw_colored_polygon(pts, col)
