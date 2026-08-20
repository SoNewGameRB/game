extends Node2D

const SCALE := 1.35


func _ready() -> void:
	scale = Vector2(SCALE, SCALE)
	queue_redraw()


func _draw() -> void:
	var s := SCALE
	draw_set_transform(Vector2.ZERO, 0.0, Vector2(1.0 / s, 1.0 / s))

	draw_colored_polygon(
		PackedVector2Array([
			Vector2(-110, 2), Vector2(110, 2), Vector2(92, 12), Vector2(-92, 12),
		]),
		VisualPalette.SHADOW
	)

	# Stone foundation
	draw_rect(Rect2(-98, -6, 196, 12), VisualPalette.STATION_TRIM)
	draw_rect(Rect2(-94, -4, 188, 8), VisualPalette.GROUND_DARK)

	# Porch deck
	draw_rect(Rect2(-92, -10, 184, 8), VisualPalette.STATION_WOOD.darkened(0.1))
	for i in 7:
		draw_line(Vector2(-88 + i * 26, -10), Vector2(-88 + i * 26, -2), VisualPalette.STATION_TRIM, 2.0)

	# Main hall
	draw_rect(Rect2(-72, -128, 144, 118), VisualPalette.STATION_WALL)
	draw_rect(Rect2(-68, -124, 136, 110), VisualPalette.STATION_WALL.lightened(0.05))
	draw_rect(Rect2(-68, -124, 12, 110), VisualPalette.STATION_TRIM)
	draw_rect(Rect2(56, -124, 12, 110), VisualPalette.STATION_TRIM)

	# Roof
	draw_colored_polygon(
		PackedVector2Array([
			Vector2(-82, -128), Vector2(82, -128), Vector2(66, -156), Vector2(-66, -156),
		]),
		VisualPalette.STATION_ROOF
	)
	draw_colored_polygon(
		PackedVector2Array([
			Vector2(-66, -156), Vector2(66, -156), Vector2(0, -168),
		]),
		VisualPalette.STATION_ROOF.lightened(0.06)
	)

	# Door
	draw_rect(Rect2(-18, -72, 36, 62), VisualPalette.STATION_TRIM)
	draw_rect(Rect2(-14, -68, 28, 58), VisualPalette.STATION_WOOD.darkened(0.12))
	draw_circle(Vector2(10, -38), 3, VisualPalette.LANTERN)

	# Window
	draw_rect(Rect2(28, -98, 28, 28), VisualPalette.STATION_TRIM)
	draw_rect(Rect2(31, -95, 22, 22), VisualPalette.LANTERN.darkened(0.25))
	draw_line(Vector2(42, -95), Vector2(42, -73), VisualPalette.STATION_TRIM, 2.0)
	draw_line(Vector2(31, -84), Vector2(53, -84), VisualPalette.STATION_TRIM, 2.0)

	# Trade counter
	draw_rect(Rect2(52, -58, 44, 50), VisualPalette.STATION_WOOD)
	draw_rect(Rect2(50, -64, 48, 8), VisualPalette.STATION_ROOF.darkened(0.08))
	draw_rect(Rect2(56, -48, 16, 12), VisualPalette.LANTERN.darkened(0.45))

	# Chimney
	draw_rect(Rect2(42, -168, 18, 24), VisualPalette.STATION_TRIM)
	draw_rect(Rect2(44, -188, 14, 22), VisualPalette.TRUNK_DARK)

	# Lantern
	draw_circle(Vector2(-58, -92), 18, Color(1.0, 0.776, 0.365, 0.22))
	draw_circle(Vector2(-58, -92), 12, Color(1.0, 0.776, 0.365, 0.38))
	draw_rect(Rect2(-62, -88, 8, 12), VisualPalette.STATION_TRIM)
	draw_circle(Vector2(-58, -86), 5, VisualPalette.LANTERN)

	draw_set_transform(Vector2.ZERO, 0.0, Vector2.ONE)
