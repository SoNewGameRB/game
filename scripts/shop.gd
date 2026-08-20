extends CanvasLayer

signal closed

const C_LANTERN := Color(1.0, 0.776, 0.365)
const C_TITLE := Color(1.0, 0.9, 0.62)
const C_SUB := Color(0.82, 0.72, 0.56)
const C_BODY := Color(0.95, 0.88, 0.74)
const C_MUTED := Color(0.72, 0.64, 0.52)
const C_CAP := Color(0.68, 0.58, 0.46)
const C_GOLD := Color(1.0, 0.84, 0.32)
const C_WOOD := Color(0.82, 0.68, 0.42)
const C_SECTION := Color(0.95, 0.82, 0.5)
const C_CONTRACT := Color(0.55, 0.78, 0.92)

@onready var dim: ColorRect = $Dim
@onready var panel: Panel = $Center/Panel
@onready var banner: Control = $Center/Panel/OuterMargin/MainVBox/Banner
@onready var accent: ColorRect = $Center/Panel/OuterMargin/MainVBox/ContentMargin/ContentVBox/Scroll/VBox/Header/Accent
@onready var title: Label = $Center/Panel/OuterMargin/MainVBox/ContentMargin/ContentVBox/Scroll/VBox/Header/TitleRow/Title
@onready var zone_badge: Label = $Center/Panel/OuterMargin/MainVBox/ContentMargin/ContentVBox/Scroll/VBox/Header/TitleRow/ZoneBadge
@onready var subtitle: Label = $Center/Panel/OuterMargin/MainVBox/ContentMargin/ContentVBox/Scroll/VBox/Header/Subtitle
@onready var gold_label: Label = $Center/Panel/OuterMargin/MainVBox/ContentMargin/ContentVBox/Scroll/VBox/Wallet/GoldCard/GoldVBox/Gold
@onready var wood_label: Label = $Center/Panel/OuterMargin/MainVBox/ContentMargin/ContentVBox/Scroll/VBox/Wallet/WoodCard/WoodVBox/Wood
@onready var value_label: Label = $Center/Panel/OuterMargin/MainVBox/ContentMargin/ContentVBox/Scroll/VBox/Wallet/ValueCard/ValueVBox/Value
@onready var contract_fill: ColorRect = $Center/Panel/OuterMargin/MainVBox/ContentMargin/ContentVBox/Scroll/VBox/ContractCard/ContractVBox/ContractBar/Fill
@onready var contract_detail: Label = $Center/Panel/OuterMargin/MainVBox/ContentMargin/ContentVBox/Scroll/VBox/ContractCard/ContractVBox/ContractDetail
@onready var axe_row: Label = $Center/Panel/OuterMargin/MainVBox/ContentMargin/ContentVBox/Scroll/VBox/StatusCard/StatusVBox/AxeRow
@onready var dur_fill: ColorRect = $Center/Panel/OuterMargin/MainVBox/ContentMargin/ContentVBox/Scroll/VBox/StatusCard/StatusVBox/DurBar/Fill
@onready var dur_text: Label = $Center/Panel/OuterMargin/MainVBox/ContentMargin/ContentVBox/Scroll/VBox/StatusCard/StatusVBox/DurBar/Text
@onready var stats_row: Label = $Center/Panel/OuterMargin/MainVBox/ContentMargin/ContentVBox/Scroll/VBox/StatusCard/StatusVBox/StatsRow
@onready var footnote: Label = $Center/Panel/OuterMargin/MainVBox/ContentMargin/ContentVBox/Scroll/VBox/Footnote
@onready var hint_label: Label = $Center/Panel/OuterMargin/MainVBox/ContentMargin/ContentVBox/HintBar/Hint
@onready var sell_btn: Button = $Center/Panel/OuterMargin/MainVBox/ContentMargin/ContentVBox/Scroll/VBox/Sell
@onready var repair_btn: Button = $Center/Panel/OuterMargin/MainVBox/ContentMargin/ContentVBox/Scroll/VBox/Repair
@onready var upgrade_btn: Button = $Center/Panel/OuterMargin/MainVBox/ContentMargin/ContentVBox/Scroll/VBox/Upgrade
@onready var chop_btn: Button = $Center/Panel/OuterMargin/MainVBox/ContentMargin/ContentVBox/Scroll/VBox/UpgradeGrid/Chop
@onready var move_btn: Button = $Center/Panel/OuterMargin/MainVBox/ContentMargin/ContentVBox/Scroll/VBox/UpgradeGrid/Move
@onready var jump_btn: Button = $Center/Panel/OuterMargin/MainVBox/ContentMargin/ContentVBox/Scroll/VBox/UpgradeGrid/Jump
@onready var contract_btn: Button = $Center/Panel/OuterMargin/MainVBox/ContentMargin/ContentVBox/Scroll/VBox/Contract
@onready var recall_btn: Button = $Center/Panel/OuterMargin/MainVBox/ContentMargin/ContentVBox/Scroll/VBox/Recall
@onready var slash_btn: Button = $Center/Panel/OuterMargin/MainVBox/ContentMargin/ContentVBox/Scroll/VBox/Slash
@onready var close_btn: Button = $Center/Panel/OuterMargin/MainVBox/ContentMargin/ContentVBox/Scroll/VBox/Close

var _anim_tween: Tween
var _closing := false
var _glow_t := 0.0


func _ready() -> void:
	visible = false
	dim.modulate.a = 0.0
	panel.modulate.a = 0.0
	panel.scale = Vector2.ONE
	_apply_theme()
	_connect_buttons()


func _process(delta: float) -> void:
	if not visible or _closing:
		return
	_glow_t += delta
	var pulse := 0.78 + sin(_glow_t * 3.2) * 0.12 + sin(_glow_t * 6.7) * 0.06
	accent.color = C_LANTERN * Color(1, 1, 1, pulse)


func _connect_buttons() -> void:
	sell_btn.pressed.connect(func() -> void:
		if GameState.sell_all_wood() > 0:
			Sfx.coin()
			_pulse_btn(sell_btn)
		else:
			Sfx.deny()
		_refresh()
	)
	repair_btn.pressed.connect(func() -> void:
		if GameState.repair_axe():
			Sfx.repair()
			_pulse_btn(repair_btn)
		else:
			Sfx.deny()
		_refresh()
	)
	upgrade_btn.pressed.connect(func() -> void:
		if GameState.upgrade_axe():
			Sfx.upgrade()
			_pulse_btn(upgrade_btn)
		else:
			Sfx.deny()
		_refresh()
	)
	chop_btn.pressed.connect(func() -> void: _buy_stat("chop"))
	move_btn.pressed.connect(func() -> void: _buy_stat("move"))
	jump_btn.pressed.connect(func() -> void: _buy_stat("jump"))
	contract_btn.pressed.connect(func() -> void:
		if GameState.claim_contract():
			Sfx.coin()
			_pulse_btn(contract_btn)
		else:
			Sfx.deny()
		_refresh()
	)
	recall_btn.pressed.connect(func() -> void:
		if GameState.set_recall_station(GameState.shop_station_id):
			Sfx.coin()
			_pulse_btn(recall_btn)
		else:
			Sfx.deny()
		_refresh()
	)
	slash_btn.pressed.connect(func() -> void:
		if GameState.buy_slash_charge():
			Sfx.upgrade()
			_pulse_btn(slash_btn)
		else:
			Sfx.deny()
		_refresh()
	)
	close_btn.pressed.connect(close_shop)


func _buy_stat(stat: String) -> void:
	var btn := chop_btn if stat == "chop" else move_btn if stat == "move" else jump_btn
	if GameState.upgrade_stat(stat):
		Sfx.upgrade()
		_pulse_btn(btn)
	else:
		Sfx.deny()
	_refresh()


func open_shop(station_id: int = 0) -> void:
	if GameState.run_over or GameState.menu_open or _closing:
		return
	GameState.shop_station_id = GameState.clamp_station_id(station_id)
	_closing = false
	visible = true
	GameState.shop_open = true
	get_tree().paused = true
	_refresh()
	_play_open_anim()
	Sfx.ui_open()


func close_shop() -> void:
	if not visible or _closing:
		return
	_closing = true
	if _anim_tween:
		_anim_tween.kill()
	_anim_tween = create_tween()
	_anim_tween.set_pause_mode(Tween.TWEEN_PAUSE_PROCESS)
	_anim_tween.set_parallel(true)
	_anim_tween.tween_property(dim, "modulate:a", 0.0, 0.14)
	_anim_tween.tween_property(panel, "modulate:a", 0.0, 0.12)
	_anim_tween.tween_property(panel, "scale", Vector2(0.94, 0.94), 0.14).set_trans(Tween.TRANS_QUAD).set_ease(Tween.EASE_IN)
	_anim_tween.chain().tween_callback(_finish_close)


func _finish_close() -> void:
	visible = false
	_closing = false
	GameState.shop_open = false
	panel.scale = Vector2.ONE
	panel.modulate.a = 1.0
	dim.modulate.a = 1.0
	if not GameState.run_over and not GameState.menu_open:
		get_tree().paused = false
	closed.emit()


func _play_open_anim() -> void:
	if _anim_tween:
		_anim_tween.kill()
	panel.scale = Vector2(0.9, 0.9)
	panel.modulate.a = 0.0
	dim.modulate.a = 0.0
	_anim_tween = create_tween()
	_anim_tween.set_pause_mode(Tween.TWEEN_PAUSE_PROCESS)
	_anim_tween.set_parallel(true)
	_anim_tween.tween_property(dim, "modulate:a", 1.0, 0.22)
	_anim_tween.tween_property(panel, "modulate:a", 1.0, 0.2)
	_anim_tween.tween_property(panel, "scale", Vector2.ONE, 0.32).set_trans(Tween.TRANS_BACK).set_ease(Tween.EASE_OUT)


func _unhandled_input(event: InputEvent) -> void:
	if not visible or _closing:
		return
	if event.is_echo() or not event.is_pressed():
		return
	if event is InputEventKey:
		match event.physical_keycode:
			KEY_ESCAPE, KEY_E:
				close_shop()
				get_viewport().set_input_as_handled()
			KEY_1:
				sell_btn.pressed.emit()
			KEY_2:
				repair_btn.pressed.emit()
			KEY_3:
				upgrade_btn.pressed.emit()
			KEY_4:
				chop_btn.pressed.emit()
			KEY_5:
				move_btn.pressed.emit()
			KEY_6:
				jump_btn.pressed.emit()
			KEY_7:
				contract_btn.pressed.emit()
			KEY_8:
				recall_btn.pressed.emit()
			KEY_9:
				slash_btn.pressed.emit()


func _refresh() -> void:
	var sid := GameState.shop_station_id
	if banner.has_method("set_station"):
		banner.set_station(sid)
	title.text = GameState.station_name(sid)
	zone_badge.text = "  %s  " % _zone_label(sid)
	subtitle.text = _station_tagline(sid)
	gold_label.text = str(GameState.gold)
	wood_label.text = GameState.wood_inventory_text()
	value_label.text = "%d 金" % GameState.wood_value()
	_update_contract_bar()
	var axe_line := "%s　%s" % [GameState.axe_name(), GameState.axe_damage_range_text()]
	if GameState.slash_stock > 0:
		axe_line += "　必殺 ×%d" % GameState.slash_stock
	axe_row.text = axe_line
	var ratio := 0.0
	if GameState.max_durability() > 0:
		ratio = float(GameState.durability) / float(GameState.max_durability())
	call_deferred("_update_dur_bar", ratio)
	dur_text.text = "耐力  %d / %d" % [GameState.durability, GameState.max_durability()]
	dur_fill.color = _dur_color(ratio)
	stats_row.text = (
		"移速 %d(+%d)　砍 Lv.%d　跳 Lv.%d\n"
		+ "砍樹 %.2fs　移速 %.0f　跳躍 %.0f"
	) % [
		GameState.move_stat(), GameState.move_bonus(), GameState.chop_level + 1, GameState.jump_level + 1,
		GameState.chop_cooldown(), GameState.move_speed(), absf(GameState.jump_force()),
	]
	footnote.text = (
		"已伐 %d 棵　最遠 %d 步　最佳連擊 %d\n"
		+ "%s\n"
		+ "按 R 回程估價：修復 %d + 路程 %d = %d 金"
	) % [
		GameState.trees_felled, int(GameState.farthest_x / 10.0), GameState.best_combo,
		GameState.recall_text(),
		GameState.partial_repair_cost(), GameState.emergency_fee(), GameState.emergency_return_cost(),
	]
	hint_label.text = "1–9 快捷購買　E / Esc 離開　R 回程　Q 林道必殺（客棧外）"

	sell_btn.text = _btn_line("1", "出售全部木材", "+%d 金" % GameState.wood_value())
	repair_btn.text = _btn_line("2", "修理斧頭", "-%d 金" % GameState.repair_cost())
	if GameState.can_upgrade_axe():
		upgrade_btn.text = _btn_line(
			"3",
			"升級→%s" % str(GameState.AXES[GameState.axe_level + 1]["name"]),
			"-%d 金" % GameState.upgrade_cost(),
		)
	else:
		upgrade_btn.text = _btn_line("3", "斧頭已是最高級", "")
	chop_btn.text = _compact_stat_btn("chop", "4")
	move_btn.text = _compact_stat_btn("move", "5")
	jump_btn.text = _compact_stat_btn("jump", "6")
	if GameState.can_claim_contract():
		contract_btn.text = _btn_line("7", "繳交委託", "+%d 金" % GameState.contract_reward)
	else:
		contract_btn.text = _btn_line(
			"7",
			"委託 %s" % GameState.wood_type_name(GameState.contract_type),
			"%d/%d" % [_contract_have(), GameState.contract_need],
		)
	if GameState.recall_station_id == sid:
		recall_btn.text = _btn_line("8", "已是 R 回程客棧", "")
	else:
		recall_btn.text = _btn_line("8", "設為 R 回程", "-%d 金" % GameState.recall_bind_cost(sid))
	slash_btn.text = _btn_line(
		"9",
		"林道必殺",
		"-%d 金 ×%d" % [GameState.slash_buy_cost(), GameState.slash_stock],
	)
	close_btn.text = "離開客棧（E / Esc）"
	_apply_afford_states(sid)


func _update_contract_bar() -> void:
	var have := _contract_have()
	var need := maxi(1, GameState.contract_need)
	var ratio := clampf(float(have) / float(need), 0.0, 1.0)
	call_deferred("_update_bar_fill", contract_fill, ratio)
	contract_detail.text = GameState.contract_text()
	if GameState.can_claim_contract():
		contract_fill.color = C_CONTRACT.lightened(0.15)
	else:
		contract_fill.color = C_CONTRACT.darkened(0.12)


func _contract_have() -> int:
	if GameState.woods.size() <= GameState.contract_type:
		return 0
	return GameState.woods[GameState.contract_type]


func _update_bar_fill(fill: ColorRect, ratio: float) -> void:
	var bar := fill.get_parent() as Control
	var bar_w := bar.size.x
	if bar_w <= 1.0:
		bar_w = 500.0
	fill.size = Vector2(bar_w * ratio, bar.size.y)


func _update_dur_bar(ratio: float) -> void:
	_update_bar_fill(dur_fill, ratio)


func _apply_afford_states(sid: int) -> void:
	sell_btn.disabled = GameState.wood <= 0
	repair_btn.disabled = GameState.durability >= GameState.max_durability() or GameState.gold < GameState.repair_cost()
	upgrade_btn.disabled = not GameState.can_upgrade_axe() or GameState.gold < GameState.upgrade_cost()
	chop_btn.disabled = GameState.stat_maxed("chop") or GameState.gold < GameState.stat_upgrade_cost("chop")
	move_btn.disabled = GameState.stat_maxed("move") or GameState.gold < GameState.stat_upgrade_cost("move")
	jump_btn.disabled = GameState.stat_maxed("jump") or GameState.gold < GameState.stat_upgrade_cost("jump")
	contract_btn.disabled = not GameState.can_claim_contract()
	recall_btn.disabled = sid == GameState.recall_station_id or GameState.gold < GameState.recall_bind_cost(sid)
	slash_btn.disabled = GameState.slash_stock >= 2 or GameState.gold < GameState.slash_buy_cost()


func _zone_label(sid: int) -> String:
	if sid < GameState.ZONE_NAMES.size():
		return GameState.ZONE_NAMES[sid]
	return "林道"


func _station_tagline(sid: int) -> String:
	match sid:
		0:
			return "起點驛站 · 補給與整備"
		1:
			return "密林深處 · 第一座中途棧"
		2:
			return "樹影漸暗 · 斧刃需常磨"
		3:
			return "險木環伺 · 謹慎交易"
		4:
			return "禁區邊境 · 最後補給點"
		5:
			return "死域前哨 · 孤燈客棧"
	return "櫃檯 · 交易與補給"


func _dur_color(ratio: float) -> Color:
	if ratio <= 0.0:
		return Color(0.45, 0.22, 0.18)
	if ratio < 0.25:
		return Color(0.86, 0.32, 0.24)
	if ratio < 0.5:
		return Color(0.91, 0.62, 0.28)
	return Color(0.78, 0.55, 0.22)


func _pulse_btn(btn: Button) -> void:
	var tw := create_tween()
	tw.set_pause_mode(Tween.TWEEN_PAUSE_PROCESS)
	tw.tween_property(btn, "scale", Vector2(1.04, 1.04), 0.06)
	tw.tween_property(btn, "scale", Vector2.ONE, 0.1)


func _btn_line(key: String, action: String, price: String) -> String:
	if price.is_empty():
		return "[%s]  %s" % [key, action]
	return "[%s]  %s　　%s" % [key, action, price]


func _compact_stat_btn(stat: String, key: String) -> String:
	if GameState.stat_maxed(stat):
		return "[%s] %s\n滿級" % [key, _stat_short(stat)]
	return "[%s] %s\n-%d 金" % [key, _stat_short(stat), GameState.stat_upgrade_cost(stat)]


func _stat_short(stat: String) -> String:
	match stat:
		"chop":
			return "砍樹"
		"move":
			return "移速"
		"jump":
			return "跳躍"
	return GameState.stat_label(stat)


func _apply_theme() -> void:
	var panel_sb := StyleBoxFlat.new()
	panel_sb.bg_color = Color(0.1, 0.068, 0.042, 0.98)
	panel_sb.border_color = Color(0.62, 0.46, 0.26, 0.85)
	panel_sb.set_border_width_all(2)
	panel_sb.set_corner_radius_all(10)
	panel_sb.shadow_color = Color(0, 0, 0, 0.5)
	panel_sb.shadow_size = 16
	panel.add_theme_stylebox_override("panel", panel_sb)

	_style_label(title, 30, C_TITLE)
	_style_badge(zone_badge)
	_style_label(subtitle, 15, C_SUB)
	_style_label(gold_label, 22, C_GOLD)
	_style_label(wood_label, 14, C_WOOD)
	_style_label(value_label, 20, C_BODY)
	for cap in [
		$Center/Panel/OuterMargin/MainVBox/ContentMargin/ContentVBox/Scroll/VBox/Wallet/GoldCard/GoldVBox/GoldCap,
		$Center/Panel/OuterMargin/MainVBox/ContentMargin/ContentVBox/Scroll/VBox/Wallet/WoodCard/WoodVBox/WoodCap,
		$Center/Panel/OuterMargin/MainVBox/ContentMargin/ContentVBox/Scroll/VBox/Wallet/ValueCard/ValueVBox/ValueCap,
		$Center/Panel/OuterMargin/MainVBox/ContentMargin/ContentVBox/Scroll/VBox/ContractCard/ContractVBox/ContractHeader,
		$Center/Panel/OuterMargin/MainVBox/ContentMargin/ContentVBox/Scroll/VBox/StatusCard/StatusVBox/StatusHeader,
	]:
		_style_label(cap, 13, C_CAP)
	_style_card($Center/Panel/OuterMargin/MainVBox/ContentMargin/ContentVBox/Scroll/VBox/Wallet/GoldCard, Color(0.19, 0.13, 0.07, 0.94))
	_style_card($Center/Panel/OuterMargin/MainVBox/ContentMargin/ContentVBox/Scroll/VBox/Wallet/WoodCard, Color(0.16, 0.11, 0.07, 0.94))
	_style_card($Center/Panel/OuterMargin/MainVBox/ContentMargin/ContentVBox/Scroll/VBox/Wallet/ValueCard, Color(0.16, 0.11, 0.07, 0.94))
	_style_card($Center/Panel/OuterMargin/MainVBox/ContentMargin/ContentVBox/Scroll/VBox/ContractCard, Color(0.13, 0.1, 0.08, 0.96), C_CONTRACT.darkened(0.35))
	_style_card($Center/Panel/OuterMargin/MainVBox/ContentMargin/ContentVBox/Scroll/VBox/StatusCard, Color(0.14, 0.095, 0.06, 0.95))
	_style_label(contract_detail, 14, C_BODY)
	_style_label(axe_row, 18, C_BODY)
	_style_label(dur_text, 15, C_BODY)
	_style_label(stats_row, 14, C_MUTED)
	_style_label(footnote, 14, C_MUTED)
	_style_label(hint_label, 13, C_MUTED)
	_style_card($Center/Panel/OuterMargin/MainVBox/ContentMargin/ContentVBox/HintBar, Color(0.08, 0.055, 0.035, 0.92), Color(0.45, 0.34, 0.2, 0.4))
	for lab in [
		$Center/Panel/OuterMargin/MainVBox/ContentMargin/ContentVBox/Scroll/VBox/TradeTitle,
		$Center/Panel/OuterMargin/MainVBox/ContentMargin/ContentVBox/Scroll/VBox/GearTitle,
		$Center/Panel/OuterMargin/MainVBox/ContentMargin/ContentVBox/Scroll/VBox/TravelTitle,
	]:
		_style_label(lab, 17, C_SECTION)
	for sep in [
		$Center/Panel/OuterMargin/MainVBox/ContentMargin/ContentVBox/Scroll/VBox/SepTrade,
		$Center/Panel/OuterMargin/MainVBox/ContentMargin/ContentVBox/Scroll/VBox/SepGear,
		$Center/Panel/OuterMargin/MainVBox/ContentMargin/ContentVBox/Scroll/VBox/SepTravel,
	]:
		_style_separator(sep)

	for btn in [sell_btn, contract_btn]:
		_style_button(btn, Color(0.22, 0.32, 0.18), Color(0.34, 0.48, 0.26))
	for btn in [repair_btn, upgrade_btn, chop_btn, move_btn, jump_btn]:
		_style_button(btn, Color(0.34, 0.22, 0.12), Color(0.5, 0.34, 0.17))
	for btn in [recall_btn, slash_btn]:
		_style_button(btn, Color(0.18, 0.24, 0.32), Color(0.28, 0.38, 0.48))
	_style_button(close_btn, Color(0.16, 0.11, 0.08), Color(0.26, 0.17, 0.11), false)


func _style_badge(lab: Label) -> void:
	_style_label(lab, 14, C_LANTERN)
	lab.add_theme_color_override("font_outline_color", Color(0.12, 0.08, 0.04, 0.9))
	lab.add_theme_constant_override("outline_size", 3)


func _style_card(card: PanelContainer, bg: Color, border: Color = Color(0.55, 0.4, 0.24, 0.45)) -> void:
	var sb := StyleBoxFlat.new()
	sb.bg_color = bg
	sb.set_corner_radius_all(6)
	sb.set_border_width_all(1)
	sb.border_color = border
	sb.content_margin_left = 12
	sb.content_margin_right = 12
	sb.content_margin_top = 10
	sb.content_margin_bottom = 10
	card.add_theme_stylebox_override("panel", sb)


func _style_separator(sep: HSeparator) -> void:
	var sb := StyleBoxLine.new()
	sb.color = Color(0.55, 0.4, 0.24, 0.35)
	sb.thickness = 1
	sep.add_theme_stylebox_override("separator", sb)


func _style_label(lab: Label, size: int, color: Color) -> void:
	lab.add_theme_font_override("font", GameState.ui_font(size))
	lab.add_theme_font_size_override("font_size", size)
	lab.add_theme_color_override("font_color", color)
	if size >= 24:
		lab.add_theme_color_override("font_outline_color", Color(0.08, 0.05, 0.03, 0.85))
		lab.add_theme_constant_override("outline_size", 4)


func _style_button(btn: Button, bg: Color, hover: Color, tall: bool = true) -> void:
	var normal := StyleBoxFlat.new()
	normal.bg_color = bg
	normal.set_corner_radius_all(5)
	normal.set_border_width_all(1)
	normal.border_color = Color(0.65, 0.48, 0.28, 0.35)
	normal.content_margin_left = 14
	normal.content_margin_right = 14
	normal.content_margin_top = 9
	normal.content_margin_bottom = 9
	var hov := normal.duplicate()
	hov.bg_color = hover
	hov.border_color = Color(0.85, 0.65, 0.38, 0.55)
	var press := normal.duplicate()
	press.bg_color = bg.darkened(0.14)
	var dis := normal.duplicate()
	dis.bg_color = bg.darkened(0.28)
	dis.border_color = Color(0.35, 0.28, 0.2, 0.2)
	btn.add_theme_stylebox_override("normal", normal)
	btn.add_theme_stylebox_override("hover", hov)
	btn.add_theme_stylebox_override("pressed", press)
	btn.add_theme_stylebox_override("disabled", dis)
	btn.add_theme_stylebox_override("focus", hov)
	btn.add_theme_font_override("font", GameState.ui_font(16))
	btn.add_theme_font_size_override("font_size", 16)
	btn.add_theme_color_override("font_color", Color(1, 0.93, 0.78))
	btn.add_theme_color_override("font_disabled_color", Color(0.55, 0.48, 0.4))
	btn.alignment = HORIZONTAL_ALIGNMENT_LEFT
	btn.custom_minimum_size = Vector2(0, 48 if tall else 44)
