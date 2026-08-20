extends Node3D

var zone := 0
var tree_h := 8.0
var growth := 1.0
var felled := false

var _trunk: MeshInstance3D
var _crown: MeshInstance3D
var _stump: MeshInstance3D


func setup(p_zone: int, p_height: float) -> void:
	zone = p_zone
	tree_h = p_height
	_rebuild()


func set_growth(g: float) -> void:
	growth = g
	_apply_scale()


func set_felled(v: bool) -> void:
	felled = v
	if _trunk:
		_trunk.visible = not v
	if _crown:
		_crown.visible = not v and growth > 0.15
	if _stump:
		_stump.visible = v


func _ready() -> void:
	if _trunk == null:
		_rebuild()


func _rebuild() -> void:
	for c in get_children():
		c.queue_free()
	_trunk = Proc3D.add_mesh(self, Proc3D.cyl_mesh(0.35, 0.5, tree_h * 0.55), Proc3D.mat(VisualPalette.TRUNK), Vector3(0, tree_h * 0.28, 0))
	var leaf := VisualPalette.LEAF_NEAR
	var leaf_hi := VisualPalette.LEAF_NEAR_HI
	if zone == 1:
		leaf = VisualPalette.LEAF_MID
		leaf_hi = VisualPalette.LEAF_MID_HI
	elif zone == 2:
		leaf = VisualPalette.LEAF_FAR
		leaf_hi = VisualPalette.LEAF_FAR_HI
	_crown = Proc3D.add_mesh(self, Proc3D.sphere_mesh(tree_h * 0.28), Proc3D.mat(leaf), Vector3(0, tree_h * 0.72, 0))
	Proc3D.add_mesh(_crown, Proc3D.sphere_mesh(tree_h * 0.18), Proc3D.mat(leaf_hi), Vector3(-0.35, 0.25, 0.2))
	_stump = Proc3D.add_mesh(self, Proc3D.cyl_mesh(0.55, 0.65, 0.35), Proc3D.mat(VisualPalette.WOOD_RING), Vector3(0, 0.18, 0))
	_stump.visible = false
	_apply_scale()


func _apply_scale() -> void:
	if felled:
		scale = Vector3.ONE
		return
	var g := clampf(growth, 0.05, 1.0)
	scale = Vector3(g, g, g)
