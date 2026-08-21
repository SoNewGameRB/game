extends Node

signal wood_changed(amount: int)
signal gold_changed(amount: int)
signal durability_changed(current: int, maximum: int)
signal axe_changed
signal stats_changed
signal combo_changed(combo: int)
signal contract_changed
signal recall_changed
signal slash_changed
signal achievement_unlocked(id: String, title: String)
signal run_finished
signal message(text: String, color: Color)

const EMERGENCY_GOLD_RATE := 0.02
const STATION_X := 210.0
const STATION_Y := 558.0
const MAX_STAT_LEVEL := 4
const MAX_MOVE_LEVEL := 100
const MOVE_STAT_BASE := 100
const MOVE_STAT_CAP := 200
const MOVE_PIXELS_PER_POINT := 2.65
const WORLD_RIGHT := 14000.0
const ZONE_WIDTH := 2300.0
const COMBO_WINDOW := 2.15
const ZONE_NAMES: PackedStringArray = ["近林", "密林", "深林", "險林", "禁林", "死域"]
const ZONE_DANGER: PackedStringArray = ["低", "中", "高", "很高", "極高", "致命"]
## 各地帶木材名稱與單價（越遠越貴）
const WOOD_TYPES: Array[Dictionary] = [
	{"name": "近林木", "price": 3},
	{"name": "密林木", "price": 5},
	{"name": "深林木", "price": 8},
	{"name": "險林木", "price": 13},
	{"name": "禁林木", "price": 20},
	{"name": "死域木", "price": 32},
]
## 中途驛站 X（主驛站另在 STATION_X）；索引 0=主驛，之後依序
const OUTPOST_XS: PackedFloat32Array = [2700.0, 5000.0, 7300.0, 9600.0, 11900.0]
const STATION_NAMES: PackedStringArray = ["主驛站", "密林客棧", "深林客棧", "險林客棧", "禁林客棧", "死域客棧"]

enum TreeKind { NORMAL, IRON, THORN, GOLDEN, BRITTLE }

const AXES: Array[Dictionary] = [
	{"name": "鈍斧", "damage": 1, "max_dur": 48, "repair": 6, "upgrade": 28},
	{"name": "利斧", "damage": 2, "max_dur": 68, "repair": 10, "upgrade": 72},
	{"name": "鋼斧", "damage": 4, "max_dur": 92, "repair": 16, "upgrade": 150},
	{"name": "巨斧", "damage": 7, "max_dur": 120, "repair": 24, "upgrade": 280},
	{"name": "魔鋼斧", "damage": 10, "max_dur": 160, "repair": 36, "upgrade": 480},
	{"name": "龍骨斧", "damage": 14, "max_dur": 210, "repair": 52, "upgrade": 780},
	{"name": "星隕斧", "damage": 19, "max_dur": 280, "repair": 74, "upgrade": 1200},
	{"name": "神伐斧", "damage": 26, "max_dur": 360, "repair": 100, "upgrade": -1},
]

const CHOP_COOLDOWNS := [0.22, 0.18, 0.15, 0.13, 0.11]
const MOVE_SPEEDS := [268.0, 332.0, 398.0, 468.0, 540.0]
const JUMP_FORCES := [-380.0, -440.0, -510.0, -580.0, -650.0]
const STAT_COSTS := [16, 32, 55, 88, 128]
const SLASH_RANGE_NEAR := 240.0
const EXIT_X := 13740.0
const ACHIEVEMENTS: Array[Dictionary] = [
	{"id": "first_tree", "title": "第一斧", "desc": "砍倒第一棵樹"},
	{"id": "trees_30", "title": "伐木工", "desc": "累積砍倒 30 棵樹"},
	{"id": "trees_100", "title": "百樹斬", "desc": "累積砍倒 100 棵樹"},
	{"id": "dead_zone", "title": "踏入死域", "desc": "走到最危險的死域"},
	{"id": "golden", "title": "金脈獵人", "desc": "砍倒金脈木"},
	{"id": "combo_10", "title": "連伐十式", "desc": "連擊達到 10"},
	{"id": "combo_20", "title": "狂伐", "desc": "連擊達到 20"},
	{"id": "rich", "title": "腰纏萬貫", "desc": "同時持有 400 金幣"},
	{"id": "god_axe", "title": "神伐在手", "desc": "升級到神伐斧"},
	{"id": "speed_50", "title": "健步如飛", "desc": "移速加值達到 +50"},
	{"id": "slash_use", "title": "林道一斬", "desc": "發動一次林道必殺"},
	{"id": "thief_5", "title": "驅賊", "desc": "打落 5 隻飛賊"},
	{"id": "contract_3", "title": "信譽伐手", "desc": "完成 3 件委託"},
	{"id": "six_woods", "title": "六林齊備", "desc": "六種木材都砍過"},
	{"id": "homebound", "title": "歸鄉", "desc": "離開樹林，回到城鎮"},
]

var woods: Array[int] = []
var wood: int = 0
var gold: int = 18
var axe_level: int = 0
var durability: int = 48
var chop_level: int = 0
var move_level: int = 0
var jump_level: int = 0
var shop_open: bool = false
var menu_open: bool = false
var combo: int = 0
var combo_time_left: float = 0.0
var best_combo: int = 0
var trees_felled: int = 0
var farthest_x: float = 0.0
var contract_type: int = 0
var contract_need: int = 10
var contract_reward: int = 40
var recall_station_id: int = 0
var shop_station_id: int = 0
var slash_cd: float = 0.0
var slash_stock: int = 0
var run_over: bool = false
var play_time: float = 0.0
var harvested: Array[int] = []
var kind_felled: Array[int] = []
var chops_hit: int = 0
var repairs_done: int = 0
var slashes_used: int = 0
var thieves_downed: int = 0
var contracts_done: int = 0
var gold_earned: int = 0
var gold_spent: int = 0
var emergency_count: int = 0
var unlocked: Dictionary = {}


func _ready() -> void:
	reset_run(true)


func reset_run(first: bool = false) -> void:
	woods.resize(WOOD_TYPES.size())
	woods.fill(0)
	harvested.resize(WOOD_TYPES.size())
	harvested.fill(0)
	kind_felled.resize(5)
	kind_felled.fill(0)
	wood = 0
	gold = 18
	axe_level = 0
	chop_level = 0
	move_level = 0
	jump_level = 0
	durability = current_axe()["max_dur"]
	shop_open = false
	menu_open = false
	combo = 0
	combo_time_left = 0.0
	best_combo = 0
	trees_felled = 0
	farthest_x = 0.0
	recall_station_id = 0
	shop_station_id = 0
	slash_cd = 0.0
	slash_stock = 0
	run_over = false
	play_time = 0.0
	chops_hit = 0
	repairs_done = 0
	slashes_used = 0
	thieves_downed = 0
	contracts_done = 0
	gold_earned = 0
	gold_spent = 0
	emergency_count = 0
	roll_new_contract(true)
	if first:
		return
	wood_changed.emit(wood)
	gold_changed.emit(gold)
	durability_changed.emit(durability, max_durability())
	axe_changed.emit()
	stats_changed.emit()
	combo_changed.emit(combo)
	contract_changed.emit()
	recall_changed.emit()
	slash_changed.emit()


func restart_run() -> void:
	reset_run(false)
	var tree := get_tree()
	if tree:
		tree.paused = false
		tree.reload_current_scene()


func _process(delta: float) -> void:
	if run_over:
		return
	play_time += delta
	if combo <= 0:
		return
	combo_time_left -= delta
	if combo_time_left <= 0.0:
		var lost := combo
		_set_combo(0)
		if lost >= 5:
			notify("連擊中斷（最高 %d）" % lost, Color(0.86, 0.72, 0.55))


func current_axe() -> Dictionary:
	return AXES[axe_level]


func axe_name() -> String:
	return str(current_axe()["name"])


func axe_damage() -> int:
	return int(current_axe()["damage"])


## 每次揮砍傷害浮動，難以精算「還要幾下」
func roll_chop_damage() -> Dictionary:
	var base := axe_damage() + combo_damage_bonus()
	var roll := randf()
	var mult := 1.0
	var grade := "normal"
	# 輕／普／重／猛 分佈，讓每下都不同
	if roll < 0.14:
		mult = randf_range(0.52, 0.72)
		grade = "light"
	elif roll < 0.34:
		mult = randf_range(0.78, 0.92)
		grade = "soft"
	elif roll < 0.70:
		mult = randf_range(0.96, 1.10)
		grade = "normal"
	elif roll < 0.90:
		mult = randf_range(1.15, 1.32)
		grade = "heavy"
	else:
		mult = randf_range(1.40, 1.65)
		grade = "fierce"
	# 同檔內再抖一點整數差
	var dmg := maxi(1, int(round(float(base) * mult)))
	if base >= 3 and randf() < 0.35:
		dmg += randi_range(-1, 1)
		dmg = maxi(1, dmg)
	return {"damage": dmg, "grade": grade, "mult": mult, "base": base}


func axe_damage_range_text() -> String:
	var base := axe_damage()
	var lo := maxi(1, int(floor(float(base) * 0.52)))
	var hi := maxi(lo + 1, int(ceil(float(base) * 1.65)))
	return "%d～%d" % [lo, hi]


func max_durability() -> int:
	return int(current_axe()["max_dur"])


func repair_cost() -> int:
	return int(current_axe()["repair"])


func upgrade_cost() -> int:
	return int(current_axe()["upgrade"])


func can_upgrade_axe() -> bool:
	return upgrade_cost() > 0


func chop_cooldown() -> float:
	return CHOP_COOLDOWNS[mini(chop_level, MAX_STAT_LEVEL)]


func move_stat() -> int:
	return MOVE_STAT_BASE + move_level


func move_bonus() -> int:
	return move_level


func move_speed() -> float:
	return float(move_stat()) * MOVE_PIXELS_PER_POINT


func jump_force() -> float:
	return JUMP_FORCES[mini(jump_level, MAX_STAT_LEVEL)]


func zone_at(world_x: float) -> int:
	return clampi(int(maxf(0.0, world_x - 400.0) / ZONE_WIDTH), 0, ZONE_NAMES.size() - 1)


func zone_name(world_x: float) -> String:
	return ZONE_NAMES[zone_at(world_x)]


func zone_danger(world_x: float) -> String:
	return ZONE_DANGER[zone_at(world_x)]


func tree_hp_at(world_x: float) -> int:
	var z := zone_at(world_x)
	var base := 12 + z * 10 + int(world_x / 220.0)
	# 每棵樹血量也浮動，避免同一排樹固定刀數
	var jitter := randf_range(0.82, 1.22)
	return maxi(4, int(round(float(base) * jitter)))


func tree_yield_at(world_x: float) -> int:
	var z := zone_at(world_x)
	return 1 + z * 2 + int(world_x / 1100.0)


func roll_tree_kind(world_x: float) -> int:
	var z := zone_at(world_x)
	var special_chance := 0.10 + float(z) * 0.045
	if randf() > special_chance:
		return TreeKind.NORMAL
	var roll := randf()
	# 越遠金脈越多一點
	var gold_cut := 0.12 + float(z) * 0.02
	if roll < gold_cut:
		return TreeKind.GOLDEN
	if roll < gold_cut + 0.28:
		return TreeKind.IRON
	if roll < gold_cut + 0.55:
		return TreeKind.THORN
	return TreeKind.BRITTLE


func tree_kind_name(kind: int) -> String:
	match kind:
		TreeKind.IRON:
			return "硬木"
		TreeKind.THORN:
			return "棘木"
		TreeKind.GOLDEN:
			return "金脈木"
		TreeKind.BRITTLE:
			return "脆木"
	return ""


func tree_kind_tint(kind: int) -> Color:
	match kind:
		TreeKind.IRON:
			return Color(0.72, 0.78, 0.92)
		TreeKind.THORN:
			return Color(0.95, 0.58, 0.48)
		TreeKind.GOLDEN:
			return Color(1.2, 1.05, 0.55)
		TreeKind.BRITTLE:
			return Color(0.92, 0.88, 0.68)
	return Color.WHITE


func tree_kind_hp_mult(kind: int) -> float:
	match kind:
		TreeKind.IRON:
			return 2.15
		TreeKind.THORN:
			return 1.25
		TreeKind.GOLDEN:
			return 1.55
		TreeKind.BRITTLE:
			return 0.55
	return 1.0


func tree_kind_yield_mult(kind: int) -> float:
	match kind:
		TreeKind.IRON:
			return 1.6
		TreeKind.THORN:
			return 1.15
		TreeKind.GOLDEN:
			return 1.35
		TreeKind.BRITTLE:
			return 0.85
	return 1.0


func tree_kind_extra_dur(kind: int) -> int:
	match kind:
		TreeKind.IRON:
			return 1
		TreeKind.THORN:
			return 2
		TreeKind.GOLDEN:
			return 1
	return 0


## 保底產量 + 浮動加成（至少拿到保底）；木材種類依地帶
func roll_wood_at(world_x: float, kind: int = TreeKind.NORMAL) -> Dictionary:
	var floor_amt := tree_yield_at(world_x)
	var z := zone_at(world_x)
	var bonus := 0
	var roll := randf()
	if roll < 0.50:
		bonus = randi_range(0, maxi(1, 1 + z / 2))
	elif roll < 0.85:
		bonus = randi_range(1, 2 + z)
	else:
		bonus = randi_range(2, 4 + z * 2)
	var amount := int(round(float(floor_amt + bonus) * tree_kind_yield_mult(kind) * combo_wood_mult()))
	amount = maxi(1, amount)
	return {
		"amount": amount,
		"floor": floor_amt,
		"bonus": bonus,
		"type": z,
		"type_name": wood_type_name(z),
		"kind": kind,
	}


func wood_type_name(type_id: int) -> String:
	return str(WOOD_TYPES[clampi(type_id, 0, WOOD_TYPES.size() - 1)]["name"])


func wood_type_price(type_id: int) -> int:
	return int(WOOD_TYPES[clampi(type_id, 0, WOOD_TYPES.size() - 1)]["price"])


## 高級斧頭可降低一擊耐力消耗（最低仍為 1）
func axe_dur_reduction() -> int:
	if axe_level >= 7:
		return 2
	if axe_level >= 5:
		return 1
	return 0


func chop_durability_cost(world_x: float, kind: int = TreeKind.NORMAL) -> int:
	var z := zone_at(world_x)
	var base := 1
	if z >= 2:
		base = 2
	if z >= 4:
		base = 3
	if z >= 5:
		base = 4
	return maxi(1, base - axe_dur_reduction() + tree_kind_extra_dur(kind))


func combo_wood_mult() -> float:
	return 1.0 + float(mini(combo, 20)) * 0.035


func combo_damage_bonus() -> int:
	return combo / 5


func roll_crit() -> bool:
	if combo < 6:
		return false
	return randf() < 0.10 + float(mini(combo, 20)) * 0.008


func register_hit() -> void:
	chops_hit += 1
	_set_combo(combo + 1)
	combo_time_left = COMBO_WINDOW
	if combo > best_combo:
		best_combo = combo
	if combo == 5 or combo == 10 or combo == 15 or combo == 20:
		notify("連擊 ×%d！產量提升中" % combo, Color(1.0, 0.78, 0.35))
	_check_achievements()


func register_miss() -> void:
	if combo >= 3:
		notify("揮空，連擊中斷", Color(0.9, 0.55, 0.45))
	_set_combo(0)


func register_fell(world_x: float, kind: int, wood_amount: int) -> void:
	trees_felled += 1
	farthest_x = maxf(farthest_x, world_x)
	var ki := clampi(kind, 0, 4)
	if kind_felled.size() < 5:
		kind_felled.resize(5)
	kind_felled[ki] += 1
	combo_time_left = COMBO_WINDOW + 0.35
	if kind == TreeKind.GOLDEN:
		var nugget := maxi(4, 6 + zone_at(world_x) * 3 + combo / 3)
		add_gold(nugget)
		notify("金脈爆出！+%d 金幣" % nugget, Color(1.0, 0.86, 0.28))
	if combo >= 8 and wood_amount > 0 and randf() < 0.22:
		var tip := maxi(1, wood_amount / 4)
		add_gold(tip)
		notify("華麗連伐小費 +%d 金" % tip, Color(0.95, 0.82, 0.4))
	_check_achievements()


func note_explore(world_x: float) -> void:
	farthest_x = maxf(farthest_x, world_x)
	if zone_at(world_x) >= 5:
		unlock_achievement("dead_zone")


func _set_combo(v: int) -> void:
	combo = maxi(0, v)
	if combo == 0:
		combo_time_left = 0.0
	combo_changed.emit(combo)


func roll_new_contract(silent: bool = false) -> void:
	## 只出「目前最遠地帶」附近的木材，避免跑回近林
	var z := zone_at(farthest_x)
	if z <= 0:
		contract_type = 0
	elif randf() < 0.75:
		contract_type = z
	else:
		contract_type = maxi(0, z - 1)
	contract_need = 6 + contract_type * 2 + randi_range(0, 4)
	contract_reward = wood_type_price(contract_type) * contract_need + 28 + contract_type * 16 + randi_range(0, 22)
	contract_changed.emit()
	if not silent:
		notify("新委託：繳交 %d 根%s（賞 %d 金）" % [contract_need, wood_type_name(contract_type), contract_reward], Color(0.75, 0.9, 1.0))


func contract_text() -> String:
	return "委託：%s %d／%d　賞 %d 金" % [
		wood_type_name(contract_type),
		woods[contract_type] if woods.size() > contract_type else 0,
		contract_need,
		contract_reward,
	]


func can_claim_contract() -> bool:
	if woods.size() <= contract_type:
		return false
	return woods[contract_type] >= contract_need


func claim_contract() -> bool:
	if not can_claim_contract():
		notify("委託木材不足。需要 %d 根%s。" % [contract_need, wood_type_name(contract_type)], Color(1.0, 0.55, 0.42))
		return false
	woods[contract_type] -= contract_need
	wood -= contract_need
	contracts_done += 1
	wood_changed.emit(wood)
	add_gold(contract_reward)
	notify("委託完成！+%d 金幣" % contract_reward, Color(0.55, 0.92, 0.62))
	roll_new_contract()
	_check_achievements()
	return true


func tree_respawn_wait(world_x: float) -> float:
	return maxf(4.0, 11.0 - float(zone_at(world_x)) * 1.2)


func tree_growth_time(world_x: float) -> float:
	return maxf(3.2, 5.8 - float(zone_at(world_x)) * 0.4)


func stat_level(stat: String) -> int:
	match stat:
		"chop":
			return chop_level
		"move":
			return move_level
		"jump":
			return jump_level
	return 0


func stat_maxed(stat: String) -> bool:
	if stat == "move":
		return move_level >= MAX_MOVE_LEVEL
	return stat_level(stat) >= MAX_STAT_LEVEL


func stat_upgrade_cost(stat: String) -> int:
	var lvl := stat_level(stat)
	if stat == "move":
		if lvl >= MAX_MOVE_LEVEL:
			return -1
		return 6 + lvl
	if lvl >= MAX_STAT_LEVEL:
		return -1
	return STAT_COSTS[lvl]


func stat_label(stat: String) -> String:
	match stat:
		"chop":
			return "砍樹速度 Lv.%d" % (chop_level + 1)
		"move":
			return "移動速度 %d(+%d)／%d" % [move_stat(), move_bonus(), MOVE_STAT_CAP]
		"jump":
			return "跳躍 Lv.%d" % (jump_level + 1)
	return ""


func stat_detail(stat: String) -> String:
	match stat:
		"chop":
			return "間隔 %.2fs" % chop_cooldown()
		"move":
			return "實際 %.0f（基礎 %d 加值 +%d）" % [move_speed(), MOVE_STAT_BASE, move_bonus()]
		"jump":
			return "高度 %.0f" % absf(jump_force())
	return ""


func is_busy_ui() -> bool:
	return shop_open or menu_open or run_over


func controls_text() -> String:
	return "\n".join(PackedStringArray([
		"A／D 或方向鍵　左右移動",
		"空白鍵／W　跳躍",
		"滑鼠右鍵按住　連砍（連點更快）",
		"滑鼠左鍵／J／Z　揮斧",
		"E　客棧交易　或　林盡頭回城",
		"R　付費回程到已登記客棧",
		"Q　林道必殺（須先在客棧購買）",
		"Esc　打開／關閉選單",
	]))


func menu_status_text() -> String:
	var have := 0
	if woods.size() > contract_type:
		have = woods[contract_type]
	return "\n".join(PackedStringArray([
		"%s　傷害 %s　耐力 %d／%d" % [axe_name(), axe_damage_range_text(), durability, max_durability()],
		"移速 %d（+%d）／%d　砍速 Lv.%d　跳躍 Lv.%d" % [
			move_stat(), move_bonus(), MOVE_STAT_CAP, chop_level + 1, jump_level + 1
		],
		"林道必殺 ×%d　%s" % [slash_stock, recall_text()],
		"委託　%s %d／%d　賞 %d 金" % [wood_type_name(contract_type), have, contract_need, contract_reward],
		achievement_progress_text(),
	]))


func status_text() -> String:
	return "移速 %d　必殺 %d" % [move_stat(), slash_stock]


func upgrade_stat(stat: String) -> bool:
	if stat_maxed(stat):
		notify("%s 已滿級。" % stat_label(stat), Color(0.86, 0.78, 0.62))
		return false
	var cost := stat_upgrade_cost(stat)
	if gold < cost:
		notify("金幣不足，升級需要 %d。" % cost, Color(1.0, 0.45, 0.38))
		return false
	_spend_gold(cost)
	match stat:
		"chop":
			chop_level += 1
		"move":
			move_level += 1
		"jump":
			jump_level += 1
	stats_changed.emit()
	notify("%s → %s" % [stat_label(stat), stat_detail(stat)], Color(0.62, 0.86, 0.52))
	_check_achievements()
	return true


func add_wood(amount: int, type_id: int = 0) -> void:
	var tid := clampi(type_id, 0, WOOD_TYPES.size() - 1)
	if woods.size() != WOOD_TYPES.size():
		woods.resize(WOOD_TYPES.size())
		woods.fill(0)
	woods[tid] += amount
	harvested[tid] += amount
	wood += amount
	wood_changed.emit(wood)
	_check_achievements()


func wood_inventory_text() -> String:
	var parts: PackedStringArray = []
	for i in WOOD_TYPES.size():
		if woods[i] > 0:
			parts.append("%s×%d（%d金）" % [wood_type_name(i), woods[i], wood_type_price(i)])
	if parts.is_empty():
		return "（空）"
	return "　".join(parts)


func spend_durability(amount: int = 1) -> bool:
	if durability <= 0:
		return false
	durability = max(0, durability - amount)
	durability_changed.emit(durability, max_durability())
	if durability == 0:
		notify("斧頭鈍了！按 R 回客棧修復（依缺耐力收費）。", Color(1.0, 0.62, 0.38))
	return true


func sell_all_wood() -> int:
	if wood <= 0:
		notify("沒有木材可賣。", Color(0.86, 0.78, 0.62))
		return 0
	var earned := wood_value()
	var sold_count := wood
	for i in woods.size():
		woods[i] = 0
	wood = 0
	wood_changed.emit(wood)
	add_gold(earned)
	notify("賣出 %d 木材，獲得 %d 金幣。" % [sold_count, earned], Color(0.91, 0.78, 0.28))
	return earned


func repair_axe() -> bool:
	if durability >= max_durability():
		notify("斧頭還很利，不必修。", Color(0.86, 0.78, 0.62))
		return false
	var cost := repair_cost()
	if gold < cost:
		notify("金幣不足，修理需要 %d。" % cost, Color(1.0, 0.45, 0.38))
		return false
	_spend_gold(cost)
	durability = max_durability()
	repairs_done += 1
	durability_changed.emit(durability, max_durability())
	notify("斧頭已修復。", Color(0.62, 0.86, 0.52))
	return true


func upgrade_axe() -> bool:
	if not can_upgrade_axe():
		notify("斧頭已是最高級。", Color(0.86, 0.78, 0.62))
		return false
	var cost := upgrade_cost()
	if gold < cost:
		notify("金幣不足，升級需要 %d。" % cost, Color(1.0, 0.45, 0.38))
		return false
	_spend_gold(cost)
	axe_level += 1
	durability = max_durability()
	durability_changed.emit(durability, max_durability())
	axe_changed.emit()
	notify("升級為%s！傷害 %d。" % [axe_name(), axe_damage()], Color(0.62, 0.86, 0.52))
	_check_achievements()
	return true


func station_count() -> int:
	return 1 + OUTPOST_XS.size()


func clamp_station_id(id: int) -> int:
	return clampi(id, 0, station_count() - 1)


func station_x(id: int = -1) -> float:
	var sid := recall_station_id if id < 0 else clamp_station_id(id)
	if sid <= 0:
		return STATION_X
	return OUTPOST_XS[sid - 1]


func station_pos(id: int = -1) -> Vector2:
	return Vector2(station_x(id), STATION_Y)


func station_name(id: int = -1) -> String:
	var sid := recall_station_id if id < 0 else clamp_station_id(id)
	if sid < STATION_NAMES.size():
		return STATION_NAMES[sid]
	return "客棧%d" % sid


## 把此客棧設成 R 回程點的費用（越遠越貴；已登記則 0）
func recall_bind_cost(station_id: int) -> int:
	var sid := clamp_station_id(station_id)
	if sid == recall_station_id:
		return 0
	if sid == 0:
		return 8
	return 18 + sid * 22


func recall_text() -> String:
	return "R 回程：%s" % station_name(recall_station_id)


func set_recall_station(station_id: int) -> bool:
	var sid := clamp_station_id(station_id)
	if sid == recall_station_id:
		notify("這裡已是 R 鍵回程客棧。", Color(0.86, 0.78, 0.62))
		return false
	var cost := recall_bind_cost(sid)
	if gold < cost:
		notify("金幣不足，登記回程客棧需要 %d。" % cost, Color(1.0, 0.45, 0.38))
		return false
	_spend_gold(cost)
	recall_station_id = sid
	recall_changed.emit()
	notify("已登記「%s」為 R 鍵回程點（-%d 金）。" % [station_name(sid), cost], Color(0.62, 0.86, 0.92))
	return true


func player_x() -> float:
	var p := get_tree().get_first_node_in_group("player") as Node2D
	if p:
		return p.global_position.x
	return STATION_X


func recall_distance(from_x: float = -1.0) -> float:
	var x := player_x() if from_x < 0.0 else from_x
	return absf(x - station_x(recall_station_id))


## 離客棧越遠，修復越貴（0 距離=原價，一個地帶約 ×1.55）
func distance_cost_mult(from_x: float = -1.0) -> float:
	return 1.0 + recall_distance(from_x) / ZONE_WIDTH * 0.55


## 依損失耐力 × 距離客棧比例
func partial_repair_cost(from_x: float = -1.0) -> int:
	var mx := max_durability()
	if mx <= 0 or durability >= mx:
		return 0
	var missing := mx - durability
	var full := repair_cost()
	var base := maxi(1, int(ceil(float(full) * float(missing) / float(mx))))
	return maxi(1, int(ceil(float(base) * distance_cost_mult(from_x))))


## 路程手續費：距離越遠越貴
func emergency_fee(from_x: float = -1.0) -> int:
	var dist := recall_distance(from_x)
	var steps := dist / 10.0
	var road := int(ceil(steps * 0.045))
	var tax := maxi(1, int(ceil(float(maxi(gold, 1)) * EMERGENCY_GOLD_RATE * 0.4)))
	return maxi(1, road + tax)


func emergency_return_cost(from_x: float = -1.0) -> int:
	return partial_repair_cost(from_x) + emergency_fee(from_x)


func wood_value() -> int:
	var total := 0
	for i in woods.size():
		total += woods[i] * wood_type_price(i)
	return total


func can_afford_with_wood(cost: int) -> bool:
	return gold + wood_value() >= cost


## 不夠金幣時，從最便宜的木材開始自動變賣補足
func _auto_sell_wood_for(cost: int) -> int:
	if gold >= cost:
		return 0
	var sold_units := 0
	for i in woods.size():
		if gold >= cost:
			break
		var price := wood_type_price(i)
		if price <= 0 or woods[i] <= 0:
			continue
		while woods[i] > 0 and gold < cost:
			woods[i] -= 1
			wood -= 1
			add_gold(price)
			sold_units += 1
	if sold_units > 0:
		wood_changed.emit(wood)
	return sold_units


## 隨時可按 R：回已登記客棧，修復費=缺耐力比例 × 離客棧距離
func emergency_return_to_station() -> bool:
	var from_x := player_x()
	var repair_part := partial_repair_cost(from_x)
	var fee := emergency_fee(from_x)
	var cost := repair_part + fee
	var sold := 0
	if gold < cost:
		sold = _auto_sell_wood_for(cost)
	if gold < cost:
		notify(
			"資源不足！回「%s」需 %d 金（修復 %d + 路程 %d）。離棧越遠越貴。" % [
				station_name(recall_station_id), cost, repair_part, fee
			],
			Color(1.0, 0.45, 0.38)
		)
		return false
	_spend_gold(cost)
	var was_missing := max_durability() - durability
	durability = max_durability()
	repairs_done += 1
	emergency_count += 1
	durability_changed.emit(durability, max_durability())
	var dest := station_name(recall_station_id)
	notify(
		"回程「%s」　修復缺 %d 耐力 %d + 路程 %d = %d 金%s" % [
			dest, was_missing, repair_part, fee, cost,
			"（含變賣木材）" if sold > 0 else "",
		],
		Color(0.91, 0.72, 0.42)
	)
	return true


func thief_kind_for_zone(z: int) -> String:
	match clampi(z, 0, 5):
		0:
			return "gold"
		1:
			return "gold" if randf() < 0.7 else "dur"
		2:
			return "dur" if randf() < 0.6 else "gold"
		3:
			return ["dur", "gold", "slash"][randi() % 3]
		4:
			return "slash" if randf() < 0.45 else "dur"
		_:
			return "mix"


func thief_kind_name(kind: String) -> String:
	match kind:
		"dur":
			return "蝕刃蝠"
		"slash":
			return "奪技鴉"
		"mix":
			return "死域劫匪"
	return "偷金庫"


func steal_gold(amount: int) -> int:
	var taken := mini(gold, maxi(0, amount))
	if taken <= 0:
		return 0
	gold -= taken
	gold_changed.emit(gold)
	return taken


func steal_durability(amount: int) -> int:
	var taken := mini(durability, maxi(0, amount))
	if taken <= 0:
		return 0
	durability -= taken
	durability_changed.emit(durability, max_durability())
	return taken


func steal_slash(amount: int = 1) -> int:
	var taken := mini(slash_stock, maxi(0, amount))
	if taken <= 0:
		return 0
	slash_stock -= taken
	slash_changed.emit()
	return taken


func restore_loot(gold_amt: int, dur_amt: int, slash_amt: int) -> void:
	if gold_amt > 0:
		add_gold(gold_amt, false)
	if dur_amt > 0:
		durability = mini(max_durability(), durability + dur_amt)
		durability_changed.emit(durability, max_durability())
	if slash_amt > 0:
		slash_stock += slash_amt
		slash_changed.emit()


func add_gold(amount: int, count_earned: bool = true) -> void:
	if amount <= 0:
		return
	gold += amount
	if count_earned:
		gold_earned += amount
	gold_changed.emit(gold)
	_check_achievements()


func _spend_gold(amount: int) -> void:
	if amount <= 0:
		return
	gold -= amount
	gold_spent += amount
	gold_changed.emit(gold)


func adjacent_station_id(from_x: float, facing: int) -> int:
	var best := -1
	var best_d := 999999.0
	for i in station_count():
		var sx := station_x(i)
		var dx := sx - from_x
		if facing > 0 and dx < 80.0:
			continue
		if facing < 0 and dx > -80.0:
			continue
		var d := absf(dx)
		if d < best_d:
			best_d = d
			best = i
	return best


func nearest_station_id(from_x: float) -> int:
	var best := 0
	var best_d := absf(from_x - station_x(0))
	for i in range(1, station_count()):
		var d := absf(from_x - station_x(i))
		if d < best_d:
			best_d = d
			best = i
	return best


func can_start_inn_slash(from_x: float) -> bool:
	return absf(from_x - station_x(nearest_station_id(from_x))) <= SLASH_RANGE_NEAR


func slash_buy_cost() -> int:
	var z := zone_at(farthest_x)
	return 320 + shop_station_id * 140 + axe_level * 85 + z * 60


func buy_slash_charge() -> bool:
	if slash_stock >= 2:
		notify("必殺最多囤 2 次。先用掉再買。", Color(0.86, 0.78, 0.62))
		return false
	var cost := slash_buy_cost()
	if gold < cost:
		notify("金幣不足，林道必殺需要 %d。" % cost, Color(1.0, 0.45, 0.38))
		return false
	_spend_gold(cost)
	slash_stock += 1
	slash_changed.emit()
	notify("買下 1 次林道必殺（很貴）。出客棧後面向下一棧按 Q，會耗盡耐力。", Color(1.0, 0.82, 0.4))
	return true


func slash_ready() -> bool:
	return slash_stock > 0


func slash_text() -> String:
	if slash_stock <= 0:
		return "林道必殺　客棧購買後按 Q"
	return "林道必殺 ×%d　客棧旁按 Q（耗盡耐力）" % slash_stock


func begin_inn_slash() -> bool:
	if slash_stock <= 0:
		return false
	slash_stock -= 1
	slashes_used += 1
	durability = 0
	durability_changed.emit(durability, max_durability())
	slash_changed.emit()
	unlock_achievement("slash_use")
	return true


func notify(text: String, color: Color = Color.WHITE) -> void:
	message.emit(text, color)


func note_thief_down() -> void:
	thieves_downed += 1
	_check_achievements()


func unlock_achievement(id: String) -> void:
	if unlocked.has(id):
		return
	var title := id
	var desc := ""
	for a in ACHIEVEMENTS:
		if str(a["id"]) == id:
			title = str(a["title"])
			desc = str(a["desc"])
			break
	unlocked[id] = true
	achievement_unlocked.emit(id, title)
	notify("成就解鎖：%s　%s" % [title, desc], Color(1.0, 0.86, 0.42))


func _check_achievements() -> void:
	if trees_felled >= 1:
		unlock_achievement("first_tree")
	if trees_felled >= 30:
		unlock_achievement("trees_30")
	if trees_felled >= 100:
		unlock_achievement("trees_100")
	if kind_felled.size() > TreeKind.GOLDEN and kind_felled[TreeKind.GOLDEN] > 0:
		unlock_achievement("golden")
	if best_combo >= 10:
		unlock_achievement("combo_10")
	if best_combo >= 20:
		unlock_achievement("combo_20")
	if gold >= 400:
		unlock_achievement("rich")
	if axe_level >= AXES.size() - 1:
		unlock_achievement("god_axe")
	if move_level >= 50:
		unlock_achievement("speed_50")
	if thieves_downed >= 5:
		unlock_achievement("thief_5")
	if contracts_done >= 3:
		unlock_achievement("contract_3")
	if harvested.size() >= WOOD_TYPES.size():
		var all_woods := true
		for i in WOOD_TYPES.size():
			if harvested[i] <= 0:
				all_woods = false
				break
		if all_woods:
			unlock_achievement("six_woods")


func play_time_text() -> String:
	var t := maxi(0, int(play_time))
	return "%d:%02d" % [t / 60, t % 60]


func achievement_progress_text() -> String:
	return "成就 %d／%d" % [unlocked.size(), ACHIEVEMENTS.size()]


func achievement_list_text() -> String:
	var lines: PackedStringArray = ["成就"]
	for a in ACHIEVEMENTS:
		var aid := str(a["id"])
		var mark := "★" if unlocked.has(aid) else "□"
		lines.append("%s %s　%s" % [mark, str(a["title"]), str(a["desc"])])
	return "\n".join(lines)


func kind_name_full(kind: int) -> String:
	var extra := tree_kind_name(kind)
	if extra == "":
		return "普通樹"
	return extra


func ending_summary() -> String:
	var wood_lines: PackedStringArray = []
	for i in WOOD_TYPES.size():
		var n: int = harvested[i] if i < harvested.size() else 0
		wood_lines.append("%s %d" % [wood_type_name(i), n])
	var kind_lines: PackedStringArray = []
	for k in 5:
		var n: int = kind_felled[k] if k < kind_felled.size() else 0
		kind_lines.append("%s %d" % [kind_name_full(k), n])
	var ach_lines: PackedStringArray = []
	for a in ACHIEVEMENTS:
		var aid := str(a["id"])
		var mark := "★" if unlocked.has(aid) else "·"
		ach_lines.append("%s %s　%s" % [mark, str(a["title"]), str(a["desc"])])
	return "\n".join(PackedStringArray([
		"你離開樹林，回到城鎮。",
		"這趟 Demo 到此結束。",
		"",
		"—— 你用了什麼 ——",
		"斧頭　%s　傷害 %s" % [axe_name(), axe_damage_range_text()],
		"移速　%d（+%d）／%d" % [move_stat(), move_bonus(), MOVE_STAT_CAP],
		"砍速 Lv.%d　跳躍 Lv.%d" % [chop_level + 1, jump_level + 1],
		"揮斧 %d 下　修斧 %d 次　必殺 %d 次　緊急回程 %d 次" % [chops_hit, repairs_done, slashes_used, emergency_count],
		"",
		"—— 你砍了什麼 ——",
		"伐倒 %d 棵　最遠 %s　連擊最高 ×%d" % [trees_felled, zone_name(farthest_x), best_combo],
		"木材　" + "　".join(wood_lines),
		"樹種　" + "　".join(kind_lines),
		"打落飛賊 %d　完成委託 %d" % [thieves_downed, contracts_done],
		"金幣　現有 %d　賺進 %d　花掉 %d" % [gold, gold_earned, gold_spent],
		"歷時　%s" % play_time_text(),
		"",
		"—— 成就 %d／%d ——" % [unlocked.size(), ACHIEVEMENTS.size()],
		"\n".join(ach_lines),
	]))


func finish_run() -> void:
	if run_over:
		return
	run_over = true
	shop_open = false
	menu_open = false
	unlock_achievement("homebound")
	var tree := get_tree()
	if tree:
		tree.paused = true
	run_finished.emit()
	notify("離開樹林，回到城鎮。", Color(0.86, 0.92, 0.62))


var _ui_font: Font


func ui_font(_size: int) -> Font:
	if _ui_font == null:
		# 內嵌字型：Web 無法依賴系統中文字型
		const FONT_PATH := "res://assets/fonts/NotoSansCJKtc-Bold.otf"
		if ResourceLoader.exists(FONT_PATH):
			_ui_font = load(FONT_PATH) as Font
		if _ui_font == null:
			var font := SystemFont.new()
			font.font_names = PackedStringArray(["Noto Sans TC", "Microsoft JhengHei", "Microsoft YaHei", "Noto Sans CJK TC"])
			font.font_weight = 700
			_ui_font = font
	return _ui_font
