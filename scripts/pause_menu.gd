extends CanvasLayer

@onready var title: Label = $Root/Panel/Margin/Scroll/VBox/Title
@onready var help_title: Label = $Root/Panel/Margin/Scroll/VBox/HelpTitle
@onready var help_label: Label = $Root/Panel/Margin/Scroll/VBox/Help
@onready var status_title: Label = $Root/Panel/Margin/Scroll/VBox/StatusTitle
@onready var status_label: Label = $Root/Panel/Margin/Scroll/VBox/Status
@onready var ach_title: Label = $Root/Panel/Margin/Scroll/VBox/AchTitle
@onready var ach_label: Label = $Root/Panel/Margin/Scroll/VBox/Ach
@onready var resume_btn: Button = $Root/Panel/Margin/Scroll/VBox/Resume
@onready var mute_btn: Button = $Root/Panel/Margin/Scroll/VBox/Mute
@onready var quit_btn: Button = $Root/Panel/Margin/Scroll/VBox/Quit


func _ready() -> void:
	visible = false
	process_mode = Node.PROCESS_MODE_ALWAYS
	_style()
	resume_btn.pressed.connect(close_menu)
	mute_btn.pressed.connect(_toggle_mute)
	quit_btn.pressed.connect(func() -> void: get_tree().quit())


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


func _refresh() -> void:
	mute_btn.text = "音效　關閉" if Sfx.is_muted() else "音效　開啟"
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
	for btn in [resume_btn, mute_btn, quit_btn]:
		_style_button(btn)


func _style_label(lab: Label, size: int, color: Color) -> void:
	lab.add_theme_font_override("font", GameState.ui_font(size))
	lab.add_theme_font_size_override("font_size", size)
	lab.add_theme_color_override("font_color", color)


func _style_button(btn: Button) -> void:
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
