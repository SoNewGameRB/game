extends Area2D

@onready var prompt: Label = $Prompt

var _player_inside := false
var _glow_t := 0.0


func _ready() -> void:
	prompt.visible = false
	prompt.text = "按 E　離開樹林，回到城鎮"
	prompt.add_theme_font_override("font", GameState.ui_font(18))
	prompt.add_theme_font_size_override("font_size", 18)
	prompt.add_theme_color_override("font_color", Color(0.92, 0.96, 0.72))
	prompt.add_theme_color_override("font_outline_color", Color(0.08, 0.05, 0.03))
	prompt.add_theme_constant_override("outline_size", 6)
	body_entered.connect(_on_enter)
	body_exited.connect(_on_exit)


func _process(delta: float) -> void:
	_glow_t += delta
	modulate = Color(1, 1, 1, 0.9 + sin(_glow_t * 2.0) * 0.1)


func _unhandled_input(event: InputEvent) -> void:
	if not _player_inside or GameState.is_busy_ui():
		return
	if event.is_echo() or not event.is_pressed():
		return
	if event is InputEventKey and event.physical_keycode in [KEY_E, KEY_F]:
		GameState.finish_run()
		get_viewport().set_input_as_handled()


func _on_enter(body: Node2D) -> void:
	if body.is_in_group("player"):
		_player_inside = true
		prompt.visible = true


func _on_exit(body: Node2D) -> void:
	if body.is_in_group("player"):
		_player_inside = false
		prompt.visible = false
