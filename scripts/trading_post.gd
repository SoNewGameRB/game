extends Area2D

signal shop_requested(station_id: int)

@onready var visual: Node2D = $Visual
@onready var prompt: Label = $Prompt

var station_id: int = 0
var station_title: String = "伐木驛"
var _player_inside := false
var _glow_t := 0.0


func setup(title: String = "伐木驛", id: int = 0) -> void:
	station_title = title
	station_id = id
	if prompt:
		prompt.text = "按 E　%s" % station_title


func _ready() -> void:
	prompt.visible = false
	prompt.text = "按 E　%s" % station_title
	prompt.add_theme_font_override("font", GameState.ui_font(18))
	prompt.add_theme_font_size_override("font_size", 18)
	prompt.add_theme_color_override("font_color", Color(1, 0.93, 0.72))
	prompt.add_theme_color_override("font_outline_color", Color(0.08, 0.05, 0.03))
	prompt.add_theme_constant_override("outline_size", 6)
	body_entered.connect(_on_enter)
	body_exited.connect(_on_exit)


func _process(delta: float) -> void:
	_glow_t += delta
	if visual:
		visual.modulate = Color(1, 1, 1, 0.88 + sin(_glow_t * 2.2) * 0.12)


func _unhandled_input(event: InputEvent) -> void:
	if not _player_inside or GameState.is_busy_ui():
		return
	if event.is_echo() or not event.is_pressed():
		return
	if event is InputEventKey and event.physical_keycode in [KEY_E, KEY_F]:
		shop_requested.emit(station_id)
		get_viewport().set_input_as_handled()


func _on_enter(body: Node2D) -> void:
	if body.is_in_group("player"):
		_player_inside = true
		prompt.visible = true


func _on_exit(body: Node2D) -> void:
	if body.is_in_group("player"):
		_player_inside = false
		prompt.visible = false
