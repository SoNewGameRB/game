#!/usr/bin/env python3
"""Punch light backgrounds, align character frames, copy into sprites/."""
from __future__ import annotations

import math
import shutil
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter

SRC = Path(r"C:\Users\01501\.cursor\projects\c-Users-01501-Desktop-code-game\assets")
DST = Path(__file__).resolve().parents[1] / "assets" / "sprites"
DST.mkdir(parents=True, exist_ok=True)

PLAYER = [
    "player_idle_0.png",
    "player_idle_1.png",
    "player_walk_0.png",
    "player_walk_1.png",
    "player_walk_2.png",
    "player_walk_3.png",
    "player_chop_0.png",
    "player_chop_1.png",
    "player_chop_2.png",
]
KEEP_BG = {"sky.png"}
PUNCH = [
    "tree_near.png",
    "tree_mid.png",
    "tree_far.png",
    "station.png",
    "stump.png",
    "hill_far.png",
    "hill_near.png",
    "ground.png",
    "grass.png",
    "rock.png",
    "sign.png",
    "icon_wood.png",
    "icon_gold.png",
    "icon_axe.png",
]


def punch_array(arr: np.ndarray, thresh: float = 40.0, also_floor: bool = False) -> np.ndarray:
    rgb = arr[:, :, :3].astype(np.float32)
    a = arr[:, :, 3].astype(np.float32)
    h, w = rgb.shape[:2]
    step = max(8, min(w, h) // 64)
    border = np.concatenate(
        [
            rgb[0, ::step],
            rgb[-1, ::step],
            rgb[::step, 0],
            rgb[::step, -1],
        ],
        axis=0,
    )
    seeds = [border[0]]
    for sample in border:
        if all(np.linalg.norm(sample - s) > 16 for s in seeds):
            seeds.append(sample)
        if len(seeds) >= 8:
            break

    dmin = np.full((h, w), 999.0, dtype=np.float32)
    for s in seeds:
        dmin = np.minimum(dmin, np.linalg.norm(rgb - s, axis=2))

    lum = 0.2126 * rgb[:, :, 0] + 0.7152 * rgb[:, :, 1] + 0.0722 * rgb[:, :, 2]
    sat = rgb.max(axis=2) - rgb.min(axis=2)
    dmin = np.where((lum > 200) & (sat < 38), np.minimum(dmin, 10.0), dmin)

    alpha = a.copy()
    alpha = np.where(dmin < 20, 0.0, alpha)
    fade = (dmin >= 20) & (dmin < thresh)
    alpha = np.where(fade, a * (dmin - 20.0) / max(1.0, thresh - 20.0), alpha)
    alpha = np.where(a < 8, 0.0, alpha)

    if also_floor:
        yy = np.arange(h)[:, None]
        dirt = (
            (yy > h * 0.52)
            & (lum > 125)
            & (rgb[:, :, 0] > 145)
            & (rgb[:, :, 1] > 115)
            & (rgb[:, :, 2] > 80)
            & ((rgb[:, :, 0] - rgb[:, :, 2]) < 88)
            & (sat < 90)
        )
        alpha = np.where(dirt, 0.0, alpha)

    out = arr.copy()
    out[:, :, 3] = np.clip(alpha, 0, 255).astype(np.uint8)
    return out


def bbox(arr: np.ndarray, alpha_min: int = 22) -> tuple[int, int, int, int] | None:
    ys, xs = np.where(arr[:, :, 3] >= alpha_min)
    if xs.size == 0:
        return None
    return int(xs.min()), int(ys.min()), int(xs.max()) + 1, int(ys.max()) + 1


def place_bottom_center(im: Image.Image, cw: int, ch: int, box: tuple[int, int, int, int]) -> Image.Image:
    cropped = im.crop(box)
    canvas = Image.new("RGBA", (cw, ch), (0, 0, 0, 0))
    x = (cw - cropped.size[0]) // 2
    y = ch - cropped.size[1] - 6
    canvas.alpha_composite(cropped, (x, max(0, y)))
    return canvas


def make_glow() -> None:
    size = 256
    yy, xx = np.mgrid[0:size, 0:size]
    t = np.hypot(xx - size / 2, yy - size / 2) / (size * 0.48)
    a = np.clip(170 * (1 - t) ** 2, 0, 255).astype(np.uint8)
    a = np.where(t >= 1, 0, a)
    arr = np.zeros((size, size, 4), dtype=np.uint8)
    arr[:, :, 0] = 255
    arr[:, :, 1] = 186
    arr[:, :, 2] = 92
    arr[:, :, 3] = a
    Image.fromarray(arr, "RGBA").save(DST / "glow.png")


def main() -> None:
    punched_players: list[tuple[str, Image.Image]] = []
    boxes = []
    for name in PLAYER:
        src = SRC / name
        arr = punch_array(np.array(Image.open(src).convert("RGBA")), thresh=42, also_floor=True)
        im = Image.fromarray(arr, "RGBA")
        box = bbox(arr)
        if box is None:
            raise RuntimeError(f"empty after punch: {name}")
        punched_players.append((name, im))
        boxes.append(box)

    max_w = max(b[2] - b[0] for b in boxes) + 28
    max_h = max(b[3] - b[1] for b in boxes) + 18
    for (name, im), box in zip(punched_players, boxes):
        place_bottom_center(im, max_w, max_h, box).save(DST / name)
        print("player", name, box)

    for name in PUNCH:
        src = SRC / name
        if not src.exists():
            print("missing", name)
            continue
        arr = punch_array(np.array(Image.open(src).convert("RGBA")), thresh=36, also_floor=False)
        box = bbox(arr)
        im = Image.fromarray(arr, "RGBA")
        if box:
            pad = 10
            x0, y0, x1, y1 = box
            x0, y0 = max(0, x0 - pad), max(0, y0 - pad)
            x1, y1 = min(im.size[0], x1 + pad), min(im.size[1], y1 + pad)
            im = im.crop((x0, y0, x1, y1))
        im.save(DST / name)
        print("asset", name, im.size)

    for name in KEEP_BG:
        src = SRC / name
        if src.exists():
            shutil.copy2(src, DST / name)

    make_glow()
    print("Wrote processed sprites to", DST)


if __name__ == "__main__":
    main()
