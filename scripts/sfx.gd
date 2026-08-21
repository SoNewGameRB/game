extends Node

var muted := false
var _players: Array[AudioStreamPlayer] = []


func _ready() -> void:
	process_mode = Node.PROCESS_MODE_ALWAYS
	for i in 6:
		var p := AudioStreamPlayer.new()
		p.bus = "Master"
		# Web Sample 模式不支援程序化 WAV，強制用 Stream（1）
		p.playback_type = 1 as AudioServer.PlaybackType
		add_child(p)
		_players.append(p)


func toggle_mute() -> bool:
	muted = not muted
	AudioServer.set_bus_mute(AudioServer.get_bus_index("Master"), muted)
	return muted


func is_muted() -> bool:
	return muted


func chop() -> void:
	_play(_noise_burst(0.07, 0.55, 140.0, 90.0))


func chop_impact() -> void:
	_play(_concat_wavs([
		_noise_burst(0.05, 0.62, 180.0, 60.0),
		_tone(92.0, 0.07, 0.42),
		_tone(140.0, 0.05, 0.28),
	]))


func tree_fall() -> void:
	_play(_noise_burst(0.22, 0.7, 80.0, 40.0))


func coin() -> void:
	_play(_concat_wavs([_tone(784.0, 0.08, 0.35), _tone(1046.0, 0.1, 0.28)]))


func ui_open() -> void:
	_play(_concat_wavs([
		_tone(392.0, 0.06, 0.22),
		_tone(523.0, 0.08, 0.2),
		_tone(659.0, 0.1, 0.16),
	]))


func repair() -> void:
	_play(_concat_wavs([_tone(330.0, 0.07, 0.3), _tone(494.0, 0.1, 0.28)]))


func deny() -> void:
	_play(_tone(164.0, 0.12, 0.35))


func steal() -> void:
	_play(_concat_wavs([_tone(220.0, 0.06, 0.32), _tone(160.0, 0.1, 0.38)]))


func slash() -> void:
	_play(_concat_wavs([
		_noise_burst(0.12, 0.7, 240.0, 70.0),
		_tone(110.0, 0.1, 0.4),
		_tone(330.0, 0.08, 0.28),
	]))


func _play(stream: AudioStreamWAV) -> void:
	if muted:
		return
	for p in _players:
		if not p.playing:
			p.stream = stream
			p.play()
			return
	_players[0].stream = stream
	_players[0].play()


func _tone(freq: float, duration: float, volume: float) -> AudioStreamWAV:
	var hz := 22050
	var n := int(duration * hz)
	var data := PackedByteArray()
	data.resize(n * 2)
	for i in n:
		var t := float(i) / hz
		var env := 1.0 - float(i) / n
		env *= env
		var s := sin(TAU * freq * t) * volume * env
		var v := clampi(int(s * 32767.0), -32767, 32767)
		data[i * 2] = v & 0xFF
		data[i * 2 + 1] = (v >> 8) & 0xFF
	return _wav(data, hz)


func _noise_burst(duration: float, volume: float, high: float, low: float) -> AudioStreamWAV:
	var hz := 22050
	var n := int(duration * hz)
	var data := PackedByteArray()
	data.resize(n * 2)
	var rng := RandomNumberGenerator.new()
	rng.randomize()
	var last := 0.0
	for i in n:
		var env := 1.0 - float(i) / n
		var noise := rng.randf_range(-1.0, 1.0)
		last = last * 0.7 + noise * 0.3
		var tone := sin(TAU * lerpf(high, low, float(i) / n) * float(i) / hz)
		var s := (last * 0.65 + tone * 0.35) * volume * env * env
		var v := clampi(int(s * 32767.0), -32767, 32767)
		data[i * 2] = v & 0xFF
		data[i * 2 + 1] = (v >> 8) & 0xFF
	return _wav(data, hz)


func _concat_wavs(streams: Array) -> AudioStreamWAV:
	var data := PackedByteArray()
	var hz := 22050
	for stream in streams:
		hz = stream.mix_rate
		data.append_array(stream.data)
	return _wav(data, hz)


func _wav(data: PackedByteArray, hz: int) -> AudioStreamWAV:
	var stream := AudioStreamWAV.new()
	stream.format = AudioStreamWAV.FORMAT_16_BITS
	stream.mix_rate = hz
	stream.stereo = false
	stream.data = data
	return stream
