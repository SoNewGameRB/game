extends Node3D

var anim := "idle"
var chop_phase := 0.0
var _impact := false

var body: Node3D
var axe: Node3D


func set_anim(name: String) -> void:
	anim = name


func set_chop_phase(t: float) -> void:
	chop_phase = t


func set_impact(v: bool) -> void:
	_impact = v


func _ready() -> void:
	body = Node3D.new()
	body.name = "Body"
	add_child(body)
	axe = Node3D.new()
	axe.name = "AxePivot"
	axe.position = Vector3(0, 0.85, 0)
	body.add_child(axe)
	_build()


func _process(_delta: float) -> void:
	if anim == "chop":
		var ang := lerpf(-2.1, 0.85, chop_phase)
		axe.rotation.x = ang
		if _impact:
			body.scale = Vector3(1.06, 0.94, 1.06)
		elif chop_phase > 0.75:
			body.scale = Vector3(0.96, 1.04, 0.96)
		else:
			body.scale = Vector3.ONE
	else:
		axe.rotation.x = -0.35
		body.scale = Vector3.ONE
		if anim == "walk":
			body.position.y = absf(sin(Time.get_ticks_msec() * 0.012)) * 0.05
		else:
			body.position.y = 0.0


func _build() -> void:
	Proc3D.add_mesh(body, Proc3D.box_mesh(Vector3(0.22, 0.38, 0.22)), Proc3D.mat(VisualPalette.PLAYER_PANTS), Vector3(-0.14, 0.19, 0))
	Proc3D.add_mesh(body, Proc3D.box_mesh(Vector3(0.22, 0.38, 0.22)), Proc3D.mat(VisualPalette.PLAYER_PANTS), Vector3(0.14, 0.19, 0))
	Proc3D.add_mesh(body, Proc3D.box_mesh(Vector3(0.24, 0.1, 0.28)), Proc3D.mat(VisualPalette.PLAYER_BOOT), Vector3(-0.14, 0.05, 0.02))
	Proc3D.add_mesh(body, Proc3D.box_mesh(Vector3(0.24, 0.1, 0.28)), Proc3D.mat(VisualPalette.PLAYER_BOOT), Vector3(0.14, 0.05, 0.02))
	Proc3D.add_mesh(body, Proc3D.box_mesh(Vector3(0.52, 0.62, 0.3)), Proc3D.mat(VisualPalette.PLAYER_COAT), Vector3(0, 0.72, 0))
	Proc3D.add_mesh(body, Proc3D.box_mesh(Vector3(0.38, 0.42, 0.22)), Proc3D.mat(VisualPalette.PLAYER_VEST), Vector3(0, 0.72, 0.04))
	Proc3D.add_mesh(body, Proc3D.sphere_mesh(0.18), Proc3D.mat(VisualPalette.PLAYER_SKIN), Vector3(0, 1.12, 0))
	Proc3D.add_mesh(body, Proc3D.box_mesh(Vector3(0.42, 0.12, 0.34)), Proc3D.mat(VisualPalette.PLAYER_HAT), Vector3(0, 1.28, 0))
	Proc3D.add_mesh(axe, Proc3D.cyl_mesh(0.025, 0.025, 0.55), Proc3D.mat(VisualPalette.AXE_WOOD), Vector3(0.28, 0.05, 0), Vector3(0, 0, -0.4))
	Proc3D.add_mesh(axe, Proc3D.box_mesh(Vector3(0.22, 0.08, 0.06)), Proc3D.mat(VisualPalette.AXE_METAL), Vector3(0.46, 0.05, 0), Vector3(0, 0, -0.4))
