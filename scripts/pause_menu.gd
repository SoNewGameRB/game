extends CanvasLayer

@onready var title: Label = $Root/Panel/Margin/MainVBox/Title
@onready var help_title: Label = $Root/Panel/Margin/MainVBox/Scroll/VBox/HelpTitle
@onready var help_label: Label = $Root/Panel/Margin/MainVBox/Scroll/VBox/Help
@onready var status_title: Label = $Root/Panel/Margin/MainVBox/Scroll/VBox/StatusTitle
@onready var status_label: Label = $Root/Panel/Margin/MainVBox/Scroll/VBox/Status
@onready var ach_title: Label = $Root/Panel/Margin/MainVBox/Scroll/VBox/AchTitle
@onready var ach_label: Label = $Root/Panel/Margin/MainVBox/Scroll/VBox/Ach
@onready var resume_btn: Button = $Root/Panel/Margin/MainVBox/Resume
@onready var mute_btn: Button = $Root/Panel/Margin/MainVBox/Mute
@onready var quit_btn: Button = $Root/Panel/Margin/MainVBox/Quit


func _ready() -> void:
	visible = false
	process_mode = Node.PROCESS_MODE_ALWAYS
	_style()
	resume_btn.pressed.connect(close_menu)
	mute_btn.pressed.connect(_toggle_mute)
	quit_btn.pressed.connect(_quit_game)


func _unhandled_input(event: InputEvent) -> void:
	if GameState.run_over or GameState.shop_open:
		return
	if event.is_echo() or not event.is_pressed():
		return
	if event is InputEventKey and event.physical_keycode == KEY_ESCAPE:
		if visible:
			close_menu()
		else:
			open_menu()
		get_viewport().set_input_as_handled()


func open_menu() -> void:
	if GameState.run_over or GameState.shop_open or GameState.menu_open:
		return
	visible = true
	GameState.menu_open = true
	get_tree().paused = true
	_refresh()


func close_menu() -> void:
	visible = false
	GameState.menu_open = false
	if not GameState.shop_open and not GameState.run_over:
		get_tree().paused = false


func _toggle_mute() -> void:
	Sfx.toggle_mute()
	_refresh()


func _quit_game() -> void:
	if OS.has_feature("web"):
		GameState.notify("可以關閉這個分頁結束遊戲。", Color(0.9, 0.82, 0.55))
		visible = false
		GameState.menu_open = false
		return
	get_tree().quit()


func _refresh() -> void:
	mute_btn.text = "音效　關閉" if Sfx.is_muted() else "音效　開啟"
	quit_btn.text = "離開遊戲"
	help_label.text = GameState.controls_text()
	status_label.text = GameState.menu_status_text()
	var lines: PackedStringArray = []
	for a in GameState.ACHIEVEMENTS:
		var aid := str(a["id"])
		var mark := "★" if GameState.unlocked.has(aid) else "□"
		lines.append("%s %s　%s" % [mark, str(a["title"]), str(a["desc"])])
	ach_label.text = "\n".join(lines)
	ach_title.text = GameState.achievement_progress_text()


func _style() -> void:
	var panel := $Root/Panel as Panel
	var box := StyleBoxFlat.new()
	box.bg_color = Color(0.1, 0.07, 0.05, 0.97)
	box.set_corner_radius_all(10)
	box.set_border_width_all(2)
	box.border_color = Color(0.72, 0.55, 0.28, 0.9)
	panel.add_theme_stylebox_override("panel", box)
	_style_label(title, 28, Color(1.0, 0.9, 0.62))
	_style_label(help_title, 18, Color(0.95, 0.82, 0.5))
	_style_label(help_label, 16, Color(1, 0.93, 0.78))
	_style_label(status_title, 18, Color(0.95, 0.82, 0.5))
	_style_label(status_label, 16, Color(1, 0.93, 0.78))
	_style_label(ach_title, 18, Color(0.95, 0.82, 0.5))
	_style_label(ach_label, 15, Color(0.92, 0.86, 0.72))
	_style_button(resume_btn, Color(0.28, 0.18, 0.12, 0.95), Color(0.4, 0.26, 0.16, 0.98))
	_style_button(mute_btn, Color(0.28, 0.18, 0.12, 0.95), Color(0.4, 0.26, 0.16, 0.98))
	_style_button(quit_btn, Color(0.42, 0.16, 0.14, 0.96), Color(0.55, 0.22, 0.18, 0.98))


func _style_label(lab: Label, size: int, color: Color) -> void:
	lab.add_theme_font_override("font", GameState.ui_font(size))
	lab.add_theme_font_size_override("font_size", size)
	lab.add_theme_color_override("font_color", color)


func _style_button(btn: Button, bg: Color, hover: Color) -> void:
	btn.add_theme_font_override("font", GameState.ui_font(18))
	btn.add_theme_font_size_override("font_size", 18)
	var normal := StyleBoxFlat.new()
	normal.bg_color = bg
	normal.set_corner_radius_all(6)
	normal.content_margin_left = 16
	normal.content_margin_right = 16
	normal.content_margin_top = 10
	normal.content_margin_bottom = 10
	var hov := normal.duplicate()
	hov.bg_color = hover
	btn.add_theme_stylebox_override("normal", normal)
	btn.add_theme_stylebox_override("hover", hov)
	btn.add_theme_stylebox_override("pressed", hov)
	btn.add_theme_color_override("font_color", Color(1, 0.93, 0.78))
	btn.custom_minimum_size = Vector2(0, 44)
