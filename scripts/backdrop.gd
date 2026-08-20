extends Node2D

const WORLD_W := GameState.WORLD_RIGHT
const GROUND_Y := 560.0


func _ready() -> void:
	queue_redraw()


func _draw() -> void:
	var bands := 10
	for i in bands:
		var t := float(i) / float(bands)
		var t2 := float(i + 1) / float(bands)
		var c1 := VisualPalette.SKY_TOP.lerp(VisualPalette.SKY_MID, t)
		var c2 := VisualPalette.SKY_TOP.lerp(VisualPalette.SKY_MID, t2)
		if t > 0.55:
			c1 = VisualPalette.SKY_MID.lerp(VisualPalette.SKY_HORIZON, (t - 0.55) / 0.45)
			c2 = VisualPalette.SKY_MID.lerp(VisualPalette.SKY_HORIZON, (t2 - 0.55) / 0.45)
		var y0 := 720.0 * t
		var y1 := 720.0 * t2
		draw_rect(Rect2(0, y0, WORLD_W, y1 - y0 + 1), c1.lerp(c2, 0.5))

	draw_rect(Rect2(WORLD_W * 0.35, 0, WORLD_W * 0.65, 720), Color(0.12, 0.04, 0.06, 0.12))
	draw_rect(Rect2(WORLD_W * 0.62, 0, WORLD_W * 0.38, 720), Color(0.08, 0.02, 0.04, 0.18))

	var far_pts := PackedVector2Array()
	far_pts.append(Vector2(-40, GROUND_Y - 20))
	for x in range(-40, int(WORLD_W) + 200, 280):
		far_pts.append(Vector2(x, GROUND_Y - 80 - sin(x * 0.004) * 28))
	far_pts.append(Vector2(WORLD_W + 200, GROUND_Y - 20))
	far_pts.append(Vector2(-40, GROUND_Y - 20))
	draw_colored_polygon(far_pts, VisualPalette.HILL_FAR)

	var near_pts := PackedVector2Array()
	near_pts.append(Vector2(-40, GROUND_Y + 4))
	for x in range(-40, int(WORLD_W) + 200, 220):
		near_pts.append(Vector2(x, GROUND_Y - 36 - sin(x * 0.006 + 1.2) * 18))
	near_pts.append(Vector2(WORLD_W + 200, GROUND_Y + 4))
	near_pts.append(Vector2(-40, GROUND_Y + 4))
	draw_colored_polygon(near_pts, VisualPalette.HILL_NEAR)

	draw_rect(Rect2(-20, GROUND_Y, WORLD_W + 40, 18), VisualPalette.GROUND_GRASS)
	draw_rect(Rect2(-20, GROUND_Y + 18, WORLD_W + 40, 42), VisualPalette.GROUND_DIRT)
	draw_rect(Rect2(-20, GROUND_Y + 60, WORLD_W + 40, 80), VisualPalette.GROUND_DARK)

	var rng := RandomNumberGenerator.new()
	rng.seed = 404
	for _i in 48:
		var tx := rng.randf_range(0, WORLD_W)
		var th := rng.randf_range(120, 240)
		var tx_w := 8.0 + rng.randf() * 6.0
		var a := 0.28 + clampf(tx / WORLD_W, 0.0, 1.0) * 0.18
		draw_rect(Rect2(tx - tx_w * 0.5, GROUND_Y - th, tx_w, th), Color(0.12, 0.18, 0.14, a))
		draw_circle(Vector2(tx, GROUND_Y - th - 8), th * 0.28, Color(0.14, 0.22, 0.16, a * 0.8))
