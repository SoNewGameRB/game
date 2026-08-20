extends Node2D


func burst(at: Vector2, dir: int, color: Color = Color(1.0, 0.85, 0.45)) -> void:
	position = at
	z_index = 20
	for i in 8:
		var ang := lerpf(-0.8, 0.8, float(i) / 7.0) + float(dir) * 0.2
		var dist := randf_range(18.0, 42.0)
		var p := Polygon2D.new()
		p.polygon = PackedVector2Array([Vector2.ZERO, Vector2(4, -2), Vector2(10, 0), Vector2(4, 2)])
		p.color = color
		p.rotation = ang
		add_child(p)
		var tw := create_tween()
		tw.tween_property(p, "position", Vector2.from_angle(ang) * dist, 0.16).set_trans(Tween.TRANS_QUAD).set_ease(Tween.EASE_OUT)
		tw.parallel().tween_property(p, "modulate:a", 0.0, 0.16)
		tw.tween_callback(p.queue_free)
	get_tree().create_timer(0.2).timeout.connect(queue_free)
