extends Node2D
## Red crescent slash — 半月斬擊光效

var _dir := 1.0
var _heavy := false


func _ready() -> void:
	_dir = get_meta("dir", 1.0)
	_heavy = get_meta("heavy", false)
	scale = Vector2(sign(_dir) * 0.35, 0.35)
	modulate.a = 0.0
	z_index = 35
	queue_redraw()

	var tw := create_tween()
	tw.tween_property(self, "modulate:a", 1.0, 0.05).set_ease(Tween.EASE_OUT)
	tw.parallel().tween_property(self, "scale", Vector2(sign(_dir) * 1.35, 1.35) if _heavy else Vector2(sign(_dir) * 1.15, 1.15), 0.14).set_ease(Tween.EASE_OUT).set_trans(Tween.TRANS_BACK)
	tw.tween_property(self, "modulate:a", 0.0, 0.32).set_delay(0.06).set_ease(Tween.EASE_IN)
	tw.parallel().tween_property(self, "scale", Vector2(sign(_dir) * 1.55, 1.55) if _heavy else Vector2(sign(_dir) * 1.28, 1.28), 0.32).set_delay(0.06)
	tw.tween_callback(queue_free)


func _draw() -> void:
	var inner_r := 22.0
	var outer_r := 78.0 if _heavy else 62.0
	var a0 := -2.35
	var a1 := 0.55
	var segs := 28

	# Dark red body
	var band := _arc_band(a0, a1, inner_r, outer_r, segs)
	draw_colored_polygon(band, Color(0.72, 0.04, 0.06, 0.88))

	# Bright red inner crescent
	var band2 := _arc_band(a0 + 0.05, a1 - 0.05, inner_r + 6.0, outer_r - 8.0, segs)
	draw_colored_polygon(band2, Color(0.95, 0.15, 0.08, 0.75))

	# Hot core arc
	var mid_r := (inner_r + outer_r) * 0.52
	draw_arc(Vector2.ZERO, mid_r, a0 + 0.08, a1 - 0.08, 36, Color(1.0, 0.45, 0.18, 0.95), 5.0 if _heavy else 4.0)
	draw_arc(Vector2.ZERO, outer_r - 2.0, a0, a1, 36, Color(1.0, 0.65, 0.35, 0.85), 2.5)

	# White hot edge streak
	draw_arc(Vector2.ZERO, outer_r + 2.0, a0 + 0.15, a1 - 0.2, 24, Color(1.0, 0.92, 0.82, 0.55), 1.2)


func _arc_band(a0: float, a1: float, r_in: float, r_out: float, segs: int) -> PackedVector2Array:
	var pts := PackedVector2Array()
	for i in segs + 1:
		var t := float(i) / float(segs)
		pts.append(Vector2.from_angle(lerpf(a0, a1, t)) * r_out)
	for i in segs + 1:
		var t := 1.0 - float(i) / float(segs)
		pts.append(Vector2.from_angle(lerpf(a0, a1, t)) * r_in)
	return pts
