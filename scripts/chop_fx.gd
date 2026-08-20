extends Node
## Spawns chop / fall particle effects in world space.


func swing_trail(world_pos: Vector2, from_dir: int, duration: float = 0.32) -> void:
	var root := _fx_root()
	if root == null:
		return
	var trail := Node2D.new()
	trail.set_script(load("res://scripts/fx_swing_trail.gd"))
	trail.set_meta("dir", float(from_dir))
	trail.set_meta("dur", duration)
	trail.position = world_pos
	trail.rotation = -0.18 * float(from_dir)
	root.add_child(trail)


func crescent_slash(world_pos: Vector2, from_dir: int, heavy: bool = false) -> void:
	var root := _fx_root()
	if root == null:
		return
	var dir := float(from_dir)
	var slash := Node2D.new()
	slash.set_script(load("res://scripts/fx_crescent_slash.gd"))
	slash.set_meta("dir", dir)
	slash.set_meta("heavy", heavy)
	slash.position = world_pos + Vector2(dir * 18.0, 0.0)
	slash.rotation = -0.15 * dir
	root.add_child(slash)


func chop_impact(world_pos: Vector2, from_dir: int, tree_h: float, heavy: bool = false) -> void:
	var root := _fx_root()
	if root == null:
		return
	var dir := float(from_dir)
	var hit_y := world_pos.y - tree_h * 0.38

	crescent_slash(Vector2(world_pos.x + dir * 30.0, hit_y - 12.0), from_dir, heavy)
	_spawn_ring(root, Vector2(world_pos.x + dir * 18.0, hit_y), heavy)
	_spawn_wood_chips(root, Vector2(world_pos.x + dir * 24.0, hit_y), dir, 10 if heavy else 16)
	_spawn_sparks(root, Vector2(world_pos.x + dir * 20.0, hit_y), dir, heavy)
	_spawn_dust(root, Vector2(world_pos.x + dir * 12.0, world_pos.y - 4.0))
	if heavy:
		_spawn_leaf_burst(root, Vector2(world_pos.x, hit_y - tree_h * 0.15), 14)


func tree_fell(world_pos: Vector2, tree_h: float, _zone: int) -> void:
	var root := _fx_root()
	if root == null:
		return
	_spawn_leaf_burst(root, Vector2(world_pos.x, world_pos.y - tree_h * 0.5), 28)
	_spawn_wood_chips(root, Vector2(world_pos.x, world_pos.y - tree_h * 0.35), 0.0, 22)
	_spawn_dust(root, Vector2(world_pos.x, world_pos.y - 2.0), 1.6)
	_spawn_shockwave(root, world_pos + Vector2(0, -tree_h * 0.2))
	_fall_chip_rain(world_pos, tree_h)


func axe_whoosh(world_pos: Vector2, from_dir: int) -> void:
	var root := _fx_root()
	if root == null:
		return
	var dir := float(from_dir)
	for i in 4:
		var line := Line2D.new()
		line.width = 2.5 - i * 0.4
		line.default_color = Color(1, 1, 1, 0.35 - i * 0.06)
		line.points = PackedVector2Array([
			Vector2(-dir * 8, -6 + i * 3),
			Vector2(-dir * 38, 12 - i * 4),
		])
		line.position = world_pos + Vector2(dir * 10, -48)
		line.z_index = 15
		root.add_child(line)
		var tw := line.create_tween()
		tw.tween_property(line, "modulate:a", 0.0, 0.12)
		tw.tween_callback(line.queue_free)


func _fall_chip_rain(world_pos: Vector2, tree_h: float) -> void:
	for i in 4:
		var delay := 0.06 * float(i)
		get_tree().create_timer(delay).timeout.connect(func() -> void:
			var root := _fx_root()
			if root:
				_spawn_wood_chips(root, world_pos + Vector2(randf_range(-30, 30), -tree_h * 0.15), sign(randf_range(-1, 1)), 4)
		)


func _fx_root() -> Node2D:
	var scene := get_tree().current_scene
	if scene == null:
		return null
	var layer := scene.get_node_or_null("FxLayer") as Node2D
	if layer == null:
		layer = Node2D.new()
		layer.name = "FxLayer"
		layer.z_index = 30
		scene.add_child(layer)
	return layer


func _spawn_ring(parent: Node2D, pos: Vector2, heavy: bool) -> void:
	var ring := Node2D.new()
	ring.set_script(load("res://scripts/fx_ring.gd"))
	ring.set_meta("heavy", heavy)
	ring.position = pos
	ring.z_index = 25
	parent.add_child(ring)
	var tw := ring.create_tween()
	ring.scale = Vector2(0.3, 0.3)
	tw.tween_property(ring, "scale", Vector2(1.8 if heavy else 1.3, 1.8 if heavy else 1.3), 0.1)
	tw.parallel().tween_property(ring, "modulate:a", 0.0, 0.14)
	tw.tween_callback(ring.queue_free)


func _spawn_slash(parent: Node2D, pos: Vector2, dir: float, heavy: bool) -> void:
	var arc := Node2D.new()
	arc.set_script(load("res://scripts/fx_slash.gd"))
	arc.set_meta("dir", dir)
	arc.set_meta("heavy", heavy)
	arc.position = pos
	arc.z_index = 24
	parent.add_child(arc)
	var tw := arc.create_tween()
	arc.modulate.a = 0.95
	tw.tween_property(arc, "modulate:a", 0.0, 0.14)
	tw.parallel().tween_property(arc, "scale", Vector2(1.25, 1.25), 0.14)
	tw.tween_callback(arc.queue_free)


func _spawn_wood_chips(parent: Node2D, pos: Vector2, dir: float, count: int) -> void:
	for i in count:
		var chip := Polygon2D.new()
		var w := randf_range(3.0, 9.0)
		var h := randf_range(2.0, 5.0)
		chip.polygon = PackedVector2Array([
			Vector2.ZERO, Vector2(w, 0), Vector2(w * 0.8, h), Vector2(h * 0.3, h * 1.1),
		])
		chip.color = Color(0.55, 0.36, 0.18).lerp(Color(0.78, 0.58, 0.32), randf())
		chip.rotation = randf_range(-PI, PI)
		chip.position = pos + Vector2(randf_range(-8, 8), randf_range(-8, 8))
		chip.z_index = 22
		parent.add_child(chip)
		var ang := randf_range(-1.2, 1.2) + dir * 0.35
		var dist := randf_range(28.0, 72.0)
		var g := randf_range(40.0, 90.0)
		var tw := chip.create_tween()
		tw.set_parallel(true)
		tw.tween_property(chip, "position", chip.position + Vector2.from_angle(ang) * dist, 0.32).set_ease(Tween.EASE_OUT).set_trans(Tween.TRANS_QUAD)
		tw.tween_property(chip, "position:y", chip.position.y + g, 0.32).set_ease(Tween.EASE_IN).set_trans(Tween.TRANS_QUAD)
		tw.tween_property(chip, "rotation", chip.rotation + randf_range(-4, 4), 0.32)
		tw.chain().tween_property(chip, "modulate:a", 0.0, 0.18)
		tw.tween_callback(chip.queue_free)


func _spawn_sparks(parent: Node2D, pos: Vector2, dir: float, heavy: bool) -> void:
	var n := 12 if heavy else 8
	for i in n:
		var s := Polygon2D.new()
		s.polygon = PackedVector2Array([Vector2.ZERO, Vector2(3, -1), Vector2(8, 0), Vector2(3, 1)])
		s.color = Color(1.0, 0.92, 0.55) if i % 2 == 0 else Color(1.0, 0.72, 0.28)
		var ang := lerpf(-1.0, 1.0, float(i) / float(max(n - 1, 1))) + dir * 0.25
		s.rotation = ang
		s.position = pos
		s.z_index = 26
		parent.add_child(s)
		var tw := s.create_tween()
		tw.tween_property(s, "position", pos + Vector2.from_angle(ang) * randf_range(22, 52), 0.14).set_ease(Tween.EASE_OUT)
		tw.parallel().tween_property(s, "modulate:a", 0.0, 0.14)
		tw.tween_callback(s.queue_free)


func _spawn_dust(parent: Node2D, pos: Vector2, scale_mult: float = 1.0) -> void:
	for i in 5:
		var d := Node2D.new()
		d.set_script(load("res://scripts/fx_dust.gd"))
		d.position = pos + Vector2(randf_range(-16, 16), randf_range(-4, 4))
		d.scale = Vector2.ONE * scale_mult * randf_range(0.7, 1.2)
		d.z_index = 18
		d.modulate.a = 0.55
		parent.add_child(d)
		var tw := d.create_tween()
		tw.tween_property(d, "position", d.position + Vector2(randf_range(-20, 20), randf_range(-18, -6)), 0.35).set_ease(Tween.EASE_OUT)
		tw.parallel().tween_property(d, "modulate:a", 0.0, 0.35)
		tw.parallel().tween_property(d, "scale", d.scale * 1.6, 0.35)
		tw.tween_callback(d.queue_free)


func _spawn_leaf_burst(parent: Node2D, pos: Vector2, count: int) -> void:
	for i in count:
		var leaf := Polygon2D.new()
		leaf.polygon = PackedVector2Array([
			Vector2(0, 0), Vector2(5, -2), Vector2(10, 0), Vector2(5, 3),
		])
		leaf.color = Color(0.35, 0.62, 0.28).lerp(Color(0.55, 0.78, 0.32), randf())
		leaf.rotation = randf_range(-PI, PI)
		leaf.position = pos + Vector2(randf_range(-20, 20), randf_range(-20, 20))
		leaf.z_index = 20
		parent.add_child(leaf)
		var tw := leaf.create_tween()
		tw.set_parallel(true)
		tw.tween_property(leaf, "position", leaf.position + Vector2(randf_range(-50, 50), randf_range(-70, -20)), 0.65).set_ease(Tween.EASE_OUT)
		tw.tween_property(leaf, "rotation", leaf.rotation + randf_range(-6, 6), 0.65)
		tw.chain().tween_property(leaf, "modulate:a", 0.0, 0.25)
		tw.tween_callback(leaf.queue_free)


func _spawn_shockwave(parent: Node2D, pos: Vector2) -> void:
	var wave := Node2D.new()
	wave.set_script(load("res://scripts/fx_ring.gd"))
	wave.set_meta("heavy", true)
	wave.position = pos
	wave.z_index = 19
	wave.modulate = Color(1, 0.9, 0.7, 0.5)
	parent.add_child(wave)
	var tw := wave.create_tween()
	wave.scale = Vector2(0.2, 0.2)
	tw.tween_property(wave, "scale", Vector2(3.5, 1.2), 0.45).set_ease(Tween.EASE_OUT)
	tw.parallel().tween_property(wave, "modulate:a", 0.0, 0.45)
	tw.tween_callback(wave.queue_free)
