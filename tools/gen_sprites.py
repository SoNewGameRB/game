#!/usr/bin/env python3
"""Generate original pixel-art sprites for the lumber demo. Public domain / original work."""
from __future__ import annotations

import struct
import zlib
from pathlib import Path

OUT = Path(__file__).resolve().parents[1] / "assets" / "sprites"
OUT.mkdir(parents=True, exist_ok=True)

# Dusk lumber-camp palette
C = {
    "x": (0, 0, 0, 0),
    "k": (24, 18, 14, 255),  # outline
    "s": (232, 196, 168, 255),
    "d": (196, 148, 120, 255),
    "h": (212, 168, 72, 255),  # straw hat
    "n": (168, 120, 44, 255),
    "o": (196, 92, 38, 255),  # burnt orange coat
    "p": (140, 58, 28, 255),
    "v": (44, 61, 79, 255),  # slate vest
    "u": (30, 42, 56, 255),
    "t": (52, 48, 64, 255),  # trousers
    "b": (58, 40, 28, 255),
    "a": (210, 220, 228, 255),  # axe head
    "z": (140, 152, 164, 255),
    "w": (139, 90, 43, 255),
    "g": (90, 143, 74, 255),
    "e": (58, 102, 52, 255),
    "f": (42, 72, 40, 255),
    "m": (61, 107, 72, 255),
    "q": (36, 72, 52, 255),
    "r": (88, 52, 108, 255),
    "i": (52, 28, 64, 255),
    "y": (168, 64, 72, 255),
    "c": (92, 58, 33, 255),
    "l": (58, 36, 20, 255),
    "j": (130, 88, 52, 255),
    "1": (176, 132, 84, 255),
    "2": (120, 84, 52, 255),
    "3": (120, 48, 40, 255),
    "4": (255, 191, 94, 255),
    "5": (74, 107, 58, 255),
    "6": (92, 64, 42, 255),
    "7": (61, 42, 28, 255),
    "8": (48, 92, 64, 255),
    "9": (28, 36, 28, 255),
}


def write_png(path: Path, w: int, h: int, pixels: list[tuple[int, int, int, int]]) -> None:
    raw = bytearray()
    for y in range(h):
        raw.append(0)
        for x in range(w):
            raw.extend(pixels[y * w + x])

    def chunk(tag: bytes, data: bytes) -> bytes:
        return struct.pack(">I", len(data)) + tag + data + struct.pack(">I", zlib.crc32(tag + data) & 0xFFFFFFFF)

    ihdr = struct.pack(">IIBBBBB", w, h, 8, 6, 0, 0, 0)
    png = b"\x89PNG\r\n\x1a\n" + chunk(b"IHDR", ihdr) + chunk(b"IDAT", zlib.compress(bytes(raw), 9)) + chunk(b"IEND", b"")
    path.write_bytes(png)


class Canvas:
    def __init__(self, w: int, h: int) -> None:
        self.w, self.h = w, h
        self.px = [(0, 0, 0, 0)] * (w * h)

    def set(self, x: int, y: int, col) -> None:
        if col == "x" or col is None:
            return
        if isinstance(col, str):
            col = C[col]
        if 0 <= x < self.w and 0 <= y < self.h and col[3] != 0:
            self.px[y * self.w + x] = col

    def rect(self, x: int, y: int, w: int, h: int, col) -> None:
        for yy in range(h):
            for xx in range(w):
                self.set(x + xx, y + yy, col)

    def ellipse(self, cx: int, cy: int, rx: int, ry: int, col) -> None:
        rr_x, rr_y = rx * rx, ry * ry
        if rr_x == 0 or rr_y == 0:
            return
        for y in range(-ry, ry + 1):
            for x in range(-rx, rx + 1):
                if x * x * rr_y + y * y * rr_x <= rr_x * rr_y:
                    self.set(cx + x, cy + y, col)

    def stamp(self, ox: int, oy: int, rows: list[str], scale: int = 2) -> None:
        for y, row in enumerate(rows):
            for x, ch in enumerate(row):
                if ch in (".", " "):
                    continue
                self.rect(ox + x * scale, oy + y * scale, scale, scale, ch)

    def save(self, name: str) -> None:
        write_png(OUT / name, self.w, self.h, self.px)


def scale_nearest(src: Canvas, n: int) -> Canvas:
    dst = Canvas(src.w * n, src.h * n)
    for y in range(src.h):
        for x in range(src.w):
            col = src.px[y * src.w + x]
            if col[3] == 0:
                continue
            dst.rect(x * n, y * n, n, n, col)
    return dst


# --- player (logical 22x28, drawn at 2x = 44x56) ---
HAT = [
    "....nnnnnn....",
    "...nhhhhhhn...",
    "..nhhhhhhhn...",
    "..nnnnnnnnn...",
]
FACE = [
    "..kkkkkkk...",
    "..ksssssk...",
    "..kss.ssk...",
    "..ksssdsk...",
    "...ksssk....",
]
BODY_IDLE = [
    ".kppooooopk.",
    "kpoovvvvopk",
    "kpoovvvvopk",
    ".kpooooopk..",
    "..ktttttk...",
    "..ktk.ktk...",
    "..ktk.ktk...",
    "..kbk.kbk...",
    "..kkk.kkk...",
]
AXE_IDLE = [
    "..aa",
    ".azza",
    "..ww",
    "..ww",
    "..ww",
    "..ww",
]


def player_base(leg_shift: int = 0, body_bob: int = 0, axe_pose: str = "idle") -> Canvas:
    c = Canvas(44, 56)
    c.stamp(6, 0 + body_bob, HAT, 2)
    c.stamp(8, 8 + body_bob, FACE, 2)
    rows = BODY_IDLE[:]
    # simple walk: swap / shift boots
    if leg_shift == 1:
        rows[-4] = "..ktk.ktk..."
        rows[-3] = ".ktk...ktk.."
        rows[-2] = ".kbk...kbk.."
        rows[-1] = ".kkk...kkk.."
    elif leg_shift == 2:
        rows[-4] = "..ktk.ktk..."
        rows[-3] = "..ktk.ktk..."
        rows[-2] = "..kbk.kbk..."
        rows[-1] = "..kkk.kkk..."
    elif leg_shift == 3:
        rows[-4] = "..ktk.ktk..."
        rows[-3] = "...ktk.ktk."
        rows[-2] = "...kbk.kbk."
        rows[-1] = "...kkk.kkk."
    c.stamp(8, 18 + body_bob, rows, 2)

    if axe_pose == "idle":
        # handle + head at right shoulder
        c.rect(36, 16 + body_bob, 4, 4, "a")
        c.rect(34, 18 + body_bob, 8, 3, "a")
        c.rect(36, 20 + body_bob, 4, 2, "z")
        c.rect(37, 22 + body_bob, 2, 16, "w")
        c.rect(36, 36 + body_bob, 4, 2, "n")
    elif axe_pose == "up":
        c.rect(30, 4 + body_bob, 10, 4, "a")
        c.rect(32, 2 + body_bob, 6, 8, "a")
        c.rect(34, 8 + body_bob, 2, 18, "w")
    elif axe_pose == "mid":
        c.rect(34, 20 + body_bob, 8, 6, "a")
        c.rect(32, 22 + body_bob, 10, 3, "z")
        c.rect(28, 24 + body_bob, 8, 2, "w")
    elif axe_pose == "down":
        c.rect(28, 34 + body_bob, 12, 5, "a")
        c.rect(30, 32 + body_bob, 8, 8, "z")
        c.rect(24, 28 + body_bob, 8, 2, "w")
        c.rect(32, 30 + body_bob, 2, 6, "w")
    return c


def make_player() -> None:
    player_base(0, 0, "idle").save("player_idle_0.png")
    player_base(0, 2, "idle").save("player_idle_1.png")
    player_base(1, 0, "idle").save("player_walk_0.png")
    player_base(2, 2, "idle").save("player_walk_1.png")
    player_base(3, 0, "idle").save("player_walk_2.png")
    player_base(2, 2, "idle").save("player_walk_3.png")
    player_base(0, 0, "up").save("player_chop_0.png")
    player_base(0, 0, "mid").save("player_chop_1.png")
    player_base(0, 2, "down").save("player_chop_2.png")


def outline_ellipse(c: Canvas, cx: int, cy: int, rx: int, ry: int, fill: str, edge: str) -> None:
    c.ellipse(cx, cy, rx + 1, ry + 1, edge)
    c.ellipse(cx, cy, rx, ry, fill)


def draw_trunk(c: Canvas, x: int, y: int, w: int, h: int) -> None:
    c.rect(x - 1, y, w + 2, h, "k")
    c.rect(x, y, w, h, "c")
    c.rect(x + 1, y, 2, h, "j")
    c.rect(x + w - 2, y, 1, h, "l")
    for i in range(2, h, 7):
        c.rect(x, y + i, w, 1, "l")


def make_tree(name: str, w: int, h: int, canopy: str) -> None:
    c = Canvas(w, h)
    base = h - 4
    tw = 8 if w < 70 else 10
    th = int(h * 0.38)
    tx = w // 2 - tw // 2
    draw_trunk(c, tx, base - th, tw, th)

    if canopy == "near":
        outline_ellipse(c, w // 2, int(h * 0.38), int(w * 0.38), int(h * 0.28), "g", "k")
        outline_ellipse(c, w // 2 - 10, int(h * 0.46), int(w * 0.28), int(h * 0.20), "e", "k")
        outline_ellipse(c, w // 2 + 12, int(h * 0.44), int(w * 0.26), int(h * 0.18), "g", "k")
        c.ellipse(w // 2 - 6, int(h * 0.32), 8, 6, "5")
    elif canopy == "mid":
        outline_ellipse(c, w // 2, int(h * 0.34), int(w * 0.36), int(h * 0.30), "m", "k")
        outline_ellipse(c, w // 2 - 14, int(h * 0.48), int(w * 0.30), int(h * 0.22), "q", "k")
        outline_ellipse(c, w // 2 + 14, int(h * 0.50), int(w * 0.28), int(h * 0.20), "e", "k")
        outline_ellipse(c, w // 2, int(h * 0.22), int(w * 0.22), int(h * 0.16), "e", "k")
        c.ellipse(w // 2 + 8, int(h * 0.30), 4, 4, "n")
        c.ellipse(w // 2 - 10, int(h * 0.40), 3, 3, "o")
    else:
        outline_ellipse(c, w // 2, int(h * 0.32), int(w * 0.40), int(h * 0.32), "r", "k")
        outline_ellipse(c, w // 2 - 16, int(h * 0.48), int(w * 0.32), int(h * 0.24), "i", "k")
        outline_ellipse(c, w // 2 + 16, int(h * 0.46), int(w * 0.30), int(h * 0.22), "r", "k")
        c.ellipse(w // 2, int(h * 0.24), int(w * 0.18), int(h * 0.12), "y")
        c.ellipse(w // 2 - 12, int(h * 0.36), 5, 4, "y")
        c.ellipse(w // 2 + 14, int(h * 0.40), 4, 4, "o")
        # thorns
        for ox, oy in ((-22, 28), (24, 34), (-8, 18), (10, 16)):
            c.rect(w // 2 + ox, int(h * 0.28) + oy // 3, 2, 6, "k")
            c.rect(w // 2 + ox - 2, int(h * 0.28) + oy // 3, 6, 2, "k")
    c.save(name)


def make_stump() -> None:
    c = Canvas(40, 20)
    c.rect(8, 8, 24, 10, "k")
    c.rect(9, 9, 22, 8, "c")
    c.rect(12, 9, 16, 3, "j")
    c.ellipse(20, 9, 10, 4, "n")
    c.ellipse(20, 9, 7, 2, "1")
    c.rect(10, 16, 20, 3, "l")
    c.save("stump.png")


def make_station() -> None:
    c = Canvas(96, 88)
    # porch floor
    c.rect(4, 72, 88, 10, "k")
    c.rect(5, 73, 86, 8, "2")
    for x in range(8, 90, 8):
        c.rect(x, 73, 1, 8, "l")
    # cabin body
    c.rect(18, 28, 60, 46, "k")
    c.rect(20, 30, 56, 44, "1")
    c.rect(22, 32, 8, 40, "2")
    # roof
    for i in range(18):
        y = 28 - i
        x = 12 + i
        w = 72 - i * 2
        c.rect(x, y, w, 2, "k")
        c.rect(x + 1, y, w - 2, 2, "3")
    c.rect(14, 26, 68, 3, "p")
    # door
    c.rect(40, 48, 16, 26, "k")
    c.rect(42, 50, 12, 24, "l")
    c.set(51, 62, C["4"])
    c.set(52, 62, C["n"])
    # window
    c.rect(60, 42, 12, 12, "k")
    c.rect(62, 44, 8, 8, "4")
    c.rect(65, 44, 2, 8, "n")
    c.rect(62, 47, 8, 2, "n")
    # lantern
    c.rect(10, 40, 4, 10, "w")
    c.rect(8, 36, 8, 8, "k")
    c.rect(9, 37, 6, 6, "4")
    c.rect(11, 34, 2, 4, "k")
    # sign
    c.rect(70, 50, 22, 14, "k")
    c.rect(71, 51, 20, 12, "n")
    c.rect(74, 54, 3, 6, "k")
    c.rect(80, 54, 3, 6, "k")
    c.rect(86, 54, 2, 6, "k")
    c.save("station.png")


def make_ground() -> None:
    c = Canvas(32, 32)
    c.rect(0, 0, 32, 8, "5")
    c.rect(0, 8, 32, 24, "6")
    for x, y in ((3, 2), (12, 1), (20, 3), (27, 2), (8, 4), (18, 5)):
        c.set(x, y, C["e"])
    for y in range(10, 32, 5):
        c.rect(0, y, 32, 1, "7")
    c.rect(0, 8, 32, 1, "e")
    c.save("ground.png")


def make_grass() -> None:
    c = Canvas(16, 12)
    for x, h in ((2, 8), (5, 10), (8, 7), (11, 9), (13, 6)):
        c.rect(x, 12 - h, 1, h, "e")
        c.rect(x, 12 - h, 1, 2, "g")
    c.save("grass.png")


def make_rock() -> None:
    c = Canvas(20, 12)
    c.ellipse(10, 8, 9, 5, "k")
    c.ellipse(10, 8, 8, 4, "z")
    c.ellipse(8, 7, 3, 2, "a")
    c.save("rock.png")


def make_icons() -> None:
    wood = Canvas(16, 16)
    wood.rect(3, 4, 10, 8, "k")
    wood.rect(4, 5, 8, 6, "1")
    wood.rect(5, 5, 2, 6, "n")
    wood.rect(4, 7, 8, 1, "2")
    wood.save("icon_wood.png")

    coin = Canvas(16, 16)
    coin.ellipse(8, 8, 6, 6, "k")
    coin.ellipse(8, 8, 5, 5, "h")
    coin.ellipse(8, 8, 3, 3, "n")
    coin.save("icon_gold.png")

    axe = Canvas(16, 16)
    axe.rect(10, 2, 4, 6, "a")
    axe.rect(9, 3, 6, 3, "z")
    axe.rect(4, 6, 8, 2, "w")
    axe.rect(2, 12, 5, 2, "n")
    axe.rect(3, 8, 2, 6, "w")
    axe.save("icon_axe.png")


def make_bg_hill(name: str, col_fill: str, col_edge: str) -> None:
    c = Canvas(160, 48)
    c.ellipse(40, 40, 50, 28, col_edge)
    c.ellipse(40, 42, 46, 24, col_fill)
    c.ellipse(100, 38, 58, 30, col_edge)
    c.ellipse(100, 40, 54, 26, col_fill)
    c.ellipse(150, 44, 40, 22, col_edge)
    c.ellipse(150, 46, 36, 18, col_fill)
    c.save(name)


def make_lantern_glow() -> None:
    c = Canvas(48, 48)
    for r, a in ((22, 40), (16, 70), (10, 110), (5, 180)):
        col = (255, 191, 94, a)
        c.ellipse(24, 24, r, r, col)
    c.save("glow.png")


def make_sky() -> None:
    w, h = 64, 90
    c = Canvas(w, h)
    top = (22, 34, 58, 255)
    mid = (58, 62, 92, 255)
    hor = (232, 168, 124, 255)
    for y in range(h):
        t = y / (h - 1)
        if t < 0.55:
            u = t / 0.55
            col = tuple(int(top[i] + (mid[i] - top[i]) * u) for i in range(4))
        else:
            u = (t - 0.55) / 0.45
            col = tuple(int(mid[i] + (hor[i] - mid[i]) * u) for i in range(4))
        c.rect(0, y, w, 1, col)
    c.save("sky.png")


def make_sign() -> None:
    c = Canvas(12, 28)
    c.rect(5, 8, 2, 20, "c")
    c.rect(1, 2, 10, 12, "k")
    c.rect(2, 3, 8, 10, "1")
    c.save("sign.png")


if __name__ == "__main__":
    make_player()
    make_tree("tree_near.png", 72, 96, "near")
    make_tree("tree_mid.png", 80, 112, "mid")
    make_tree("tree_far.png", 88, 128, "far")
    make_stump()
    make_station()
    make_ground()
    make_grass()
    make_rock()
    make_icons()
    make_bg_hill("hill_far.png", "9", "k")
    make_bg_hill("hill_near.png", "f", "k")
    make_lantern_glow()
    make_sky()
    make_sign()
    print(f"Wrote sprites to {OUT}")
