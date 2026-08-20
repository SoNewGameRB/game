extends Node2D


func _ready() -> void:
	queue_redraw()


func _draw() -> void:
	draw_colored_polygon(
		PackedVector2Array([
			Vector2(-180, 8), Vector2(220, 8), Vector2(190, 22), Vector2(-160, 22),
		]),
		VisualPalette.SHADOW
	)
	_house(Vector2(-90, 0), 88, 72, Color(0.55, 0.38, 0.28), Color(0.42, 0.22, 0.18))
	_house(Vector2(20, 0), 110, 96, Color(0.48, 0.42, 0.36), Color(0.28, 0.32, 0.38))
	_house(Vector2(130, 0), 76, 64, Color(0.62, 0.46, 0.32), Color(0.5, 0.28, 0.2))
	draw_rect(Rect2(-24, -118, 18, 28), Color(0.35, 0.28, 0.24))
	draw_circle(Vector2(-15, -128), 10, Color(1.0, 0.78, 0.32, 0.35))
	draw_rect(Rect2(-70, -8, 240, 10), Color(0.38, 0.32, 0.26))
	var lab_pos := Vector2(-70, -168)
	draw_rect(Rect2(lab_pos.x, lab_pos.y, 168, 28), Color(0.18, 0.12, 0.08, 0.82))


func _house(origin: Vector2, w: float, h: float, wall: Color, roof: Color) -> void:
	draw_rect(Rect2(origin.x - w * 0.5, origin.y - h, w, h), wall)
	draw_colored_polygon(
		PackedVector2Array([
			Vector2(origin.x - w * 0.58, origin.y - h + 4),
			Vector2(origin.x + w * 0.58, origin.y - h + 4),
			Vector2(origin.x, origin.y - h - 28),
		]),
		roof
	)
	draw_rect(Rect2(origin.x - 10, origin.y - 36, 20, 36), wall.darkened(0.25))
	draw_rect(Rect2(origin.x - w * 0.28, origin.y - h + 18, 16, 16), Color(0.75, 0.82, 0.55, 0.7))
