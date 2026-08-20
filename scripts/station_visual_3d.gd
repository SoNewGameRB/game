extends Node3D


func _ready() -> void:
	_build()


func _build() -> void:
	Proc3D.add_mesh(self, Proc3D.box_mesh(Vector3(4.2, 2.6, 3.2)), Proc3D.mat(VisualPalette.STATION_WALL), Vector3(0, 1.3, 0))
	Proc3D.add_mesh(self, Proc3D.box_mesh(Vector3(4.6, 0.35, 3.6)), Proc3D.mat(VisualPalette.STATION_TRIM), Vector3(0, 0.18, 0))
	Proc3D.add_mesh(self, Proc3D.box_mesh(Vector3(5.0, 1.4, 4.0)), Proc3D.mat(VisualPalette.STATION_ROOF), Vector3(0, 3.2, 0), Vector3(0.12, 0, 0))
	Proc3D.add_mesh(self, Proc3D.box_mesh(Vector3(0.9, 1.6, 0.12)), Proc3D.mat(VisualPalette.STATION_WOOD), Vector3(0, 0.9, 1.65))
	Proc3D.add_mesh(self, Proc3D.sphere_mesh(0.22), Proc3D.mat(Color.WHITE, 0.3, VisualPalette.LANTERN), Vector3(1.4, 2.2, 1.7))
