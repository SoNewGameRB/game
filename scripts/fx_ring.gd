extends Node2D

var _heavy := false


func _ready() -> void:
	_heavy = get_meta("heavy", false)
	queue_redraw()


func _draw() -> void:
	var col := Color(1.0, 0.95, 0.72, 0.85) if _heavy else Color(1.0, 0.88, 0.55, 0.7)
	draw_arc(Vector2.ZERO, 18.0, 0, TAU, 32, col, 3.0 if _heavy else 2.0)
	draw_arc(Vector2.ZERO, 12.0, 0, TAU, 24, Color(1, 1, 1, 0.35), 1.5)
