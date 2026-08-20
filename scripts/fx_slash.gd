extends Node2D

var _dir := 1.0
var _heavy := false


func _ready() -> void:
	_dir = get_meta("dir", 1.0)
	_heavy = get_meta("heavy", false)
	scale.x = signf(_dir) if _dir != 0.0 else 1.0
	queue_redraw()


func _draw() -> void:
	var pts := PackedVector2Array()
	var segs := 14
	var r0 := 8.0
	var r1 := 42.0 if _heavy else 34.0
	var a0 := -1.35
	var a1 := 0.55
	for i in segs + 1:
		var t := float(i) / float(segs)
		var a := lerpf(a0, a1, t)
		var r := lerpf(r0, r1, sin(t * PI))
		pts.append(Vector2.from_angle(a) * r)
	for i in segs + 1:
		var t := 1.0 - float(i) / float(segs)
		var a := lerpf(a0, a1, t)
		var r := lerpf(r0, r1, sin(t * PI)) * 0.55
		pts.append(Vector2.from_angle(a) * r)
	var col := Color(1.0, 0.98, 0.82, 0.75) if _heavy else Color(1.0, 0.9, 0.65, 0.65)
	draw_colored_polygon(pts, col)
	draw_polyline(pts, Color(1, 1, 1, 0.5), 1.5, true)
