extends Control
## 客棧櫃檯頂部插畫：依驛站地帶著色，燈籠微光脈動。

var station_id: int = 0
var _t: float = 0.0


func _ready() -> void:
	custom_minimum_size = Vector2(0, 108)
	mouse_filter = Control.MOUSE_FILTER_IGNORE


func _process(delta: float) -> void:
	if is_visible_in_tree():
		_t += delta
		queue_redraw()


func set_station(id: int) -> void:
	station_id = clampi(id, 0, GameState.STATION_NAMES.size() - 1)
	queue_redraw()


func _draw() -> void:
	var w := size.x
	var h := size.y
	if w < 40.0 or h < 20.0:
		return

	var sky_top := VisualPalette.SKY_TOP.darkened(0.08)
	var sky_bot := _zone_sky(station_id)
	draw_rect(Rect2(0, 0, w, h), Color(0.06, 0.04, 0.03, 0.55))
	for i in 8:
		var t := float(i) / 7.0
		draw_rect(Rect2(0, h * t * 0.72, w, h * 0.15), sky_top.lerp(sky_bot, t))

	# 遠樹剪影
	for i in 5:
		var tx := w * (0.08 + float(i) * 0.19)
		var th := 18.0 + float(i % 3) * 8.0
		draw_colored_polygon(
			PackedVector2Array([
				Vector2(tx, h - 14), Vector2(tx + 14, h - 14 - th), Vector2(tx + 28, h - 14),
			]),
			Color(0.08, 0.12, 0.08, 0.55)
		)

	var cx := w * 0.5
	var base_y := h - 10.0
	var flicker := 0.82 + sin(_t * 3.4) * 0.1 + sin(_t * 7.1) * 0.05
	var glow := VisualPalette.LANTERN * Color(1, 1, 1, 0.14 * flicker)
	draw_circle(Vector2(cx - 72, base_y - 58), 28, glow)
	draw_circle(Vector2(cx + 78, base_y - 52), 24, glow * Color(1, 1, 1, 0.85))

	# 客棧本體（縮小版 station_visual）
	var s := 0.52
	draw_set_transform(Vector2(cx, base_y), 0.0, Vector2(s, s))

	draw_colored_polygon(
		PackedVector2Array([
			Vector2(-110, 2), Vector2(110, 2), Vector2(92, 12), Vector2(-92, 12),
		]),
		VisualPalette.SHADOW
	)
	draw_rect(Rect2(-98, -6, 196, 12), VisualPalette.STATION_TRIM)
	draw_rect(Rect2(-92, -10, 184, 8), VisualPalette.STATION_WOOD.darkened(0.1))
	draw_rect(Rect2(-72, -128, 144, 118), VisualPalette.STATION_WALL)
	draw_rect(Rect2(-68, -124, 136, 110), VisualPalette.STATION_WALL.lightened(0.05))
	draw_colored_polygon(
		PackedVector2Array([
			Vector2(-82, -128), Vector2(82, -128), Vector2(66, -156), Vector2(-66, -156),
		]),
		_zone_roof(station_id)
	)
	draw_colored_polygon(
		PackedVector2Array([
			Vector2(-66, -156), Vector2(66, -156), Vector2(0, -168),
		]),
		_zone_roof(station_id).lightened(0.08)
	)
	draw_rect(Rect2(-18, -72, 36, 62), VisualPalette.STATION_TRIM)
	draw_rect(Rect2(-14, -68, 28, 58), VisualPalette.STATION_WOOD.darkened(0.12))
	draw_rect(Rect2(52, -58, 44, 50), VisualPalette.STATION_WOOD)
	draw_rect(Rect2(50, -64, 48, 8), VisualPalette.STATION_ROOF.darkened(0.08))

	# 燈籠
	var lamp := VisualPalette.LANTERN * Color(1, 1, 1, flicker)
	draw_circle(Vector2(-58, -92), 16, lamp * Color(1, 1, 1, 0.25))
	draw_circle(Vector2(-58, -92), 9, lamp * Color(1, 1, 1, 0.55))
	draw_rect(Rect2(-62, -88, 8, 12), VisualPalette.STATION_TRIM)
	draw_circle(Vector2(-58, -86), 5, lamp)
	draw_circle(Vector2(64, -78), 12, lamp * Color(1, 1, 1, 0.22))
	draw_circle(Vector2(64, -78), 7, lamp * Color(1, 1, 1, 0.48))

	draw_set_transform(Vector2.ZERO, 0.0, Vector2.ONE)

	# 前景櫃檯檯面
	draw_rect(Rect2(0, h - 8, w, 8), VisualPalette.STATION_WOOD.darkened(0.15))
	draw_line(Vector2(0, h - 8), Vector2(w, h - 8), VisualPalette.LANTERN * Color(1, 1, 1, 0.35 * flicker), 2.0)


func _zone_sky(sid: int) -> Color:
	match sid:
		0:
			return VisualPalette.SKY_HORIZON
		1:
			return VisualPalette.LEAF_MID_HI.darkened(0.35)
		2:
			return VisualPalette.LEAF_MID.darkened(0.45)
		3:
			return VisualPalette.LEAF_FAR_HI.darkened(0.5)
		4:
			return VisualPalette.LEAF_DANGER_HI.darkened(0.55)
		5:
			return VisualPalette.LEAF_DEAD_HI.darkened(0.6)
	return VisualPalette.SKY_HORIZON


func _zone_roof(sid: int) -> Color:
	match sid:
		1:
			return VisualPalette.STATION_ROOF.lightened(0.04)
		2:
			return VisualPalette.STATION_ROOF.darkened(0.06)
		3:
			return VisualPalette.LEAF_FAR.darkened(0.2)
		4:
			return VisualPalette.LEAF_DANGER.darkened(0.15)
		5:
			return VisualPalette.LEAF_DEAD.darkened(0.1)
	return VisualPalette.STATION_ROOF
