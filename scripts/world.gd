extends Node2D

const GROUND_Y := 560.0

@onready var player: CharacterBody2D = $Player
@onready var trading_post: Area2D = $TradingPost
@onready var trees_root: Node2D = $Trees
@onready var shop: CanvasLayer = $Shop
@onready var camera: Camera2D = $Player/Camera2D
@onready var canvas_mod: CanvasModulate = $CanvasModulate
@onready var tree_scene: PackedScene = load("res://scenes/chop_tree.tscn")
@onready var station_scene: PackedScene = load("res://scenes/trading_post.tscn")
@onready var thief_scene: PackedScene = load("res://scenes/thief_bird.tscn")

var _last_zone := -1
var _thief_cd := 8.0


func _ready() -> void:
	_spawn_trees()
	_spawn_outposts()
	_spawn_zone_signs()
	_spawn_town_exit()
	if trading_post.has_method("setup"):
		trading_post.setup(GameState.station_name(0), 0)
	trading_post.shop_requested.connect(shop.open_shop)
	player.global_position = Vector2(GameState.STATION_X, GameState.STATION_Y)
	camera.limit_left = 0
	camera.limit_right = int(GameState.WORLD_RIGHT)
	camera.limit_top = 0
	camera.limit_bottom = 720
	camera.position_smoothing_enabled = true
	camera.position_smoothing_speed = 3.2
	camera.drag_left_margin = 0.18
	camera.drag_right_margin = 0.18
	camera.drag_top_margin = 0.22
	camera.drag_bottom_margin = 0.12
	camera.drag_horizontal_enabled = true
	camera.drag_vertical_enabled = true
	GameState.notify("按 Esc 打開選單。往最右走出樹林，按 E 回城鎮。", Color(1, 0.9, 0.7))


func _process(_delta: float) -> void:
	var x := player.global_position.x
	var z := GameState.zone_at(x)
	var t := clampf(float(z) / 5.0, 0.0, 1.0)
	canvas_mod.color = Color(0.92, 0.88, 0.82, 1).lerp(Color(0.72, 0.55, 0.58, 1), t)
	if z != _last_zone:
		_last_zone = z
		if z > 0:
			GameState.notify(
				"進入%s　危險：%s　一擊消耗 %d 耐力　木材：%s（%d金）" % [
					GameState.zone_name(x),
					GameState.zone_danger(x),
					GameState.chop_durability_cost(x),
					GameState.wood_type_name(z),
					GameState.wood_type_price(z),
				],
				Color(1.0, 0.55, 0.42) if z >= 3 else Color(1.0, 0.82, 0.52)
			)
	if GameState.is_busy_ui():
		return
	_thief_cd -= _delta
	if _thief_cd <= 0.0:
		_spawn_thief()
		_thief_cd = randf_range(12.0, 20.0)


func _spawn_trees() -> void:
	var rng := RandomNumberGenerator.new()
	rng.seed = 20260820
	var x := 480.0
	while x < GameState.EXIT_X - 260.0:
		if _near_any_station(x, 160.0):
			x += 90.0
			continue
		var z := GameState.zone_at(x)
		var cluster := 1
		if rng.randf() < 0.18 + float(z) * 0.06:
			cluster = rng.randi_range(2, 3)
		for c in cluster:
			var tree := tree_scene.instantiate()
			var ox := x + rng.randf_range(-42.0, 42.0) + float(c) * rng.randf_range(28.0, 70.0)
			if _near_any_station(ox, 140.0):
				continue
			tree.position = Vector2(ox, GROUND_Y)
			trees_root.add_child(tree)
			tree.setup(ox)
		x += rng.randf_range(280.0, 480.0) - float(z) * rng.randf_range(6.0, 18.0)


func _near_any_station(x: float, radius: float) -> bool:
	if absf(x - GameState.STATION_X) < radius:
		return true
	for ox in GameState.OUTPOST_XS:
		if absf(x - ox) < radius:
			return true
	if absf(x - GameState.EXIT_X) < radius + 80.0:
		return true
	return false


func _spawn_outposts() -> void:
	for i in GameState.OUTPOST_XS.size():
		var ox: float = GameState.OUTPOST_XS[i]
		var post: Area2D = station_scene.instantiate()
		post.position = Vector2(ox, GameState.STATION_Y)
		add_child(post)
		var sid := i + 1
		var title := GameState.station_name(sid)
		if post.has_method("setup"):
			post.setup(title, sid)
		post.shop_requested.connect(shop.open_shop)


func _spawn_zone_signs() -> void:
	for z in GameState.ZONE_NAMES.size():
		var mark := 400.0 + float(z) * GameState.ZONE_WIDTH
		if z == 0:
			mark = 900.0
		var lab := Label.new()
		var wood_line := "%s %d金／根" % [GameState.wood_type_name(z), GameState.wood_type_price(z)]
		lab.text = "%s　危險 %s\n%s\n←→ 找中途驛站" % [
			GameState.ZONE_NAMES[z], GameState.ZONE_DANGER[z], wood_line
		]
		lab.position = Vector2(mark - 40, GROUND_Y - 158)
		lab.add_theme_font_override("font", GameState.ui_font(16))
		lab.add_theme_font_size_override("font_size", 16)
		var col := Color(1, 0.93, 0.78)
		if z >= 3:
			col = Color(1.0, 0.55, 0.42)
		if z >= 5:
			col = Color(0.92, 0.32, 0.32)
		lab.add_theme_color_override("font_color", col)
		lab.add_theme_color_override("font_outline_color", Color(0.08, 0.05, 0.03))
		lab.add_theme_constant_override("outline_size", 6)
		$Decor.add_child(lab)

	var town_lab := Label.new()
	town_lab.text = "城鎮出口\n按 E 離開樹林"
	town_lab.position = Vector2(GameState.EXIT_X - 70, GROUND_Y - 210)
	town_lab.add_theme_font_override("font", GameState.ui_font(16))
	town_lab.add_theme_font_size_override("font_size", 16)
	town_lab.add_theme_color_override("font_color", Color(0.86, 0.94, 0.62))
	town_lab.add_theme_color_override("font_outline_color", Color(0.08, 0.05, 0.03))
	town_lab.add_theme_constant_override("outline_size", 6)
	$Decor.add_child(town_lab)


func _spawn_town_exit() -> void:
	var gate: Area2D = load("res://scenes/town_exit.tscn").instantiate()
	gate.position = Vector2(GameState.EXIT_X, GROUND_Y)
	add_child(gate)


func _spawn_thief() -> void:
	if player == null or GameState.is_busy_ui():
		return
	var existing := get_tree().get_nodes_in_group("thieves")
	if existing.size() >= 2:
		return
	var z := GameState.zone_at(player.global_position.x)
	var bird: Area2D = thief_scene.instantiate()
	var dir := 1.0 if randf() < 0.5 else -1.0
	var sx := player.global_position.x + dir * randf_range(520.0, 860.0)
	sx = clampf(sx, 80.0, GameState.WORLD_RIGHT - 80.0)
	add_child(bird)
	bird.setup(Vector2(sx, randf_range(300.0, 380.0)), -dir, GameState.thief_kind_for_zone(z))
