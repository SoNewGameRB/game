extends CanvasLayer

@onready var title: Label = $Root/Panel/Margin/VBox/Title
@onready var congrats: Label = $Root/Panel/Margin/VBox/Congrats
@onready var summary: Label = $Root/Panel/Margin/VBox/Scroll/Summary
@onready var replay_btn: Button = $Root/Panel/Margin/VBox/Buttons/Replay
@onready var quit_btn: Button = $Root/Panel/Margin/VBox/Buttons/Quit


func _ready() -> void:
	visible = false
	process_mode = Node.PROCESS_MODE_ALWAYS
	_style()
	replay_btn.pressed.connect(_replay)
	quit_btn.pressed.connect(_quit)
	GameState.run_finished.connect(_show)


func _show() -> void:
	title.text = "伐木驛　Demo 結束"
	congrats.text = "恭喜你離開樹林，回到城鎮。"
	summary.text = GameState.ending_summary()
	visible = true


func _unhandled_input(event: InputEvent) -> void:
	if not visible:
		return
	if event.is_echo() or not event.is_pressed():
		return
	if event is InputEventKey:
		match event.physical_keycode:
			KEY_ENTER, KEY_KP_ENTER, KEY_R:
				_replay()
				get_viewport().set_input_as_handled()
			KEY_ESCAPE:
				_quit()
				get_viewport().set_input_as_handled()


func _replay() -> void:
	visible = false
	GameState.restart_run()


func _quit() -> void:
	if OS.has_feature("web"):
		GameState.notify("可以關閉這個分頁結束遊戲。", Color(0.9, 0.82, 0.55))
		return
	get_tree().quit()


func _style() -> void:
	var panel := $Root/Panel as Panel
	var box := StyleBoxFlat.new()
	box.bg_color = Color(0.1, 0.07, 0.05, 0.97)
	box.set_corner_radius_all(10)
	box.set_border_width_all(2)
	box.border_color = Color(0.72, 0.55, 0.28, 0.9)
	panel.add_theme_stylebox_override("panel", box)
	title.add_theme_font_override("font", GameState.ui_font(32))
	title.add_theme_font_size_override("font_size", 32)
	title.add_theme_color_override("font_color", Color(1.0, 0.9, 0.62))
	congrats.add_theme_font_override("font", GameState.ui_font(22))
	congrats.add_theme_font_size_override("font_size", 22)
	congrats.add_theme_color_override("font_color", Color(0.82, 0.94, 0.62))
	summary.add_theme_font_override("font", GameState.ui_font(16))
	summary.add_theme_font_size_override("font_size", 16)
	summary.add_theme_color_override("font_color", Color(1, 0.93, 0.78))
	for btn in [replay_btn, quit_btn]:
		btn.add_theme_font_override("font", GameState.ui_font(18))
		btn.add_theme_font_size_override("font_size", 18)
		var normal := StyleBoxFlat.new()
		normal.bg_color = Color(0.28, 0.18, 0.12, 0.95)
		normal.set_corner_radius_all(6)
		normal.content_margin_left = 16
		normal.content_margin_right = 16
		normal.content_margin_top = 8
		normal.content_margin_bottom = 8
		var hover := normal.duplicate()
		hover.bg_color = Color(0.4, 0.26, 0.16, 0.98)
		btn.add_theme_stylebox_override("normal", normal)
		btn.add_theme_stylebox_override("hover", hover)
		btn.add_theme_stylebox_override("pressed", hover)
		btn.add_theme_color_override("font_color", Color(1, 0.93, 0.78))
