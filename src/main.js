import * as THREE from 'three';
import { DOGS, makeDogModel, animateDog, assetsReady } from './dogs.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

/* =====================================================================
   捕獸大隊：吉娃娃主管別看我   (three.js, 單機, 排行榜存 localStorage)
   ===================================================================== */

// ---------------------------------------------------------------- 設定
const CFG = {
  SEEN_GRACE: 2.5,        // 被吉娃娃「看到」累積多久後出局(秒；越近累積越快)。設 0 = 一被看到立刻死亡
  CHI_BASE_COUNT: 3,      // 第 1 關吉娃娃數量
  CHI_MAX: 7,
  CHI_VISION: 14,         // 視線距離(公尺)
  CHI_FOV_HALF: 46 * Math.PI / 180,
  WALK: 3.6, RUN: 6.6,
  SNEAK_SPEED: [0, 2.0, 2.5, 3.0],
  SNEAK_NOISE: [0, 3.5, 2.5, 1.5],
  SNEAK_VIS: [1, 0.55, 0.45, 0.35],
  RADAR_R: [0, 20, 32, 50],
  RADAR_T: [0, 2.0, 1.0, 0.4],
  UP_MAX: 3,
};
const LB_KEY = 'chihuahua_hunter_lb_v1';
const NAME_KEY = 'chihuahua_hunter_name';

// 地圖常數
const W = 40, H = 30, X0 = -20, Z0 = -15, N = W * H, FH = 4;
const RAMP = { x1: 2, x2: 6, z1: 2, z2: 12 };

// ---------------------------------------------------------------- 小工具
const $ = id => document.getElementById(id);
const rand = (a, b) => a + Math.random() * (b - a);
const pick = a => a[Math.floor(Math.random() * a.length)];
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
function angDiff(a, b) { let d = b - a; while (d > Math.PI) d -= 2 * Math.PI; while (d < -Math.PI) d += 2 * Math.PI; return d; }
const matCache = {};
function M(color, opts) {
  const k = color + (opts ? JSON.stringify(opts) : '');
  return matCache[k] || (matCache[k] = new THREE.MeshLambertMaterial({ color, ...(opts || {}) }));
}
const inRamp = (x, z) => x > RAMP.x1 && x < RAMP.x2 && z > RAMP.z1 && z < RAMP.z2;
function groundY(x, z, cy) {
  if (inRamp(x, z)) return FH * (RAMP.z2 - z) / (RAMP.z2 - RAMP.z1);
  return cy >= 2.2 ? FH : 0;
}
const floorOf = y => (y >= 2 ? 1 : 0);

// ---------------------------------------------------------------- 渲染
const canvas = $('c');
const COARSE = !!(window.matchMedia && matchMedia('(pointer:coarse)').matches);
const renderer = new THREE.WebGLRenderer({ canvas, antialias: !(COARSE && window.devicePixelRatio >= 2), powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, COARSE ? 1.5 : 2));
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x10141b);
scene.fog = new THREE.Fog(0x10141b, 16, 55);
const camera = new THREE.PerspectiveCamera(75, 1, 0.05, 120);
camera.rotation.order = 'YXZ';
scene.add(camera);
const amb = new THREE.AmbientLight(0xdfe8ff, 0.8); scene.add(amb);
const hemi = new THREE.HemisphereLight(0xffffff, 0x667788, 0.55); scene.add(hemi);
const dl = new THREE.DirectionalLight(0xffffff, 0.35); dl.position.set(5, 10, 3); scene.add(dl);
const headLamp = new THREE.PointLight(0xfff0d0, 0.7, 14); camera.add(headLamp);
function resize() {
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  const asp = window.innerWidth / window.innerHeight; camera.aspect = asp;
  camera.fov = asp >= 1.4 ? 75 : Math.min(105, 2 * Math.atan(Math.tan(37.5 * Math.PI / 180) * 1.4 / asp) * 180 / Math.PI);
  camera.updateProjectionMatrix();
}
window.addEventListener('resize', resize); window.addEventListener('orientationchange', () => setTimeout(resize, 200)); resize();

// ---------------------------------------------------------------- 世界建構
const colliders = [[], []];   // 碰撞盒
const sightBoxes = [[], []];  // 擋視線
const wallRects = [[], []];   // 雷達地圖用
const worldGroup = new THREE.Group(); scene.add(worldGroup);
const hideSpots = [];
const blobList = [], glowList = [];
let glowMesh = null;

let _seed = 90210;
const srnd = () => (_seed = (_seed * 1664525 + 1013904223) >>> 0) / 4294967296;
const spick = a => a[Math.floor(srnd() * a.length)];

// ---- 程序貼圖
function cvs(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return [c, c.getContext('2d')]; }
function toTex(c, repeat) {
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}
function texNoise(base, amp, n, grid, gridCol) {
  const [c, g] = cvs(128, 128);
  g.fillStyle = `rgb(${base},${base},${base})`; g.fillRect(0, 0, 128, 128);
  for (let i = 0; i < n; i++) { const v = (base + (srnd() - 0.5) * 2 * amp) | 0; g.fillStyle = `rgb(${v},${v},${v})`; g.fillRect(srnd() * 128, srnd() * 128, 2, 2); }
  g.strokeStyle = gridCol; g.lineWidth = 2;
  for (let i = 0; i <= grid; i++) { const p = i * 128 / grid; g.beginPath(); g.moveTo(p, 0); g.lineTo(p, 128); g.moveTo(0, p); g.lineTo(128, p); g.stroke(); }
  return toTex(c, true);
}
function texTile() {
  const [c, g] = cvs(128, 128); g.fillStyle = '#a3b3b9'; g.fillRect(0, 0, 128, 128);
  for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) { const v = 236 + ((srnd() * 14) | 0); g.fillStyle = `rgb(${v},${v + 3},${v + 4})`; g.fillRect(i * 32 + 1.5, j * 32 + 1.5, 29, 29); }
  return toTex(c, true);
}
function texWood() {
  const [c, g] = cvs(256, 256);
  for (let p = 0; p < 8; p++) {
    const v = 190 + ((srnd() * 45) | 0); g.fillStyle = `rgb(${v},${v - 38},${v - 90})`; g.fillRect(0, p * 32, 256, 32);
    g.strokeStyle = 'rgba(60,30,10,.22)'; g.lineWidth = 1;
    for (let k = 0; k < 5; k++) { const y = p * 32 + 4 + srnd() * 24; g.beginPath(); g.moveTo(0, y); g.bezierCurveTo(80, y + srnd() * 4 - 2, 170, y + srnd() * 4 - 2, 256, y); g.stroke(); }
    g.fillStyle = 'rgba(40,20,5,.5)'; g.fillRect(0, p * 32, 256, 1.5); g.fillRect(srnd() * 256, p * 32, 1.5, 32);
  }
  return toTex(c, true);
}
function texCeil() {
  const [c, g] = cvs(128, 128); g.fillStyle = '#eceff2'; g.fillRect(0, 0, 128, 128);
  for (let i = 0; i < 500; i++) { const v = 200 + ((srnd() * 40) | 0); g.fillStyle = `rgb(${v},${v},${v})`; g.fillRect(srnd() * 128, srnd() * 128, 2, 1); }
  g.strokeStyle = '#98a0aa'; g.lineWidth = 3; g.strokeRect(0, 0, 128, 128);
  g.beginPath(); g.moveTo(64, 0); g.lineTo(64, 128); g.moveTo(0, 64); g.lineTo(128, 64); g.stroke();
  return toTex(c, true);
}
function texCity() {
  const [c, g] = cvs(256, 256);
  const gr = g.createLinearGradient(0, 0, 0, 256); gr.addColorStop(0, '#0d1836'); gr.addColorStop(0.6, '#2f437a'); gr.addColorStop(1, '#c9895f');
  g.fillStyle = gr; g.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 40; i++) { g.fillStyle = 'rgba(255,255,255,.7)'; g.fillRect(srnd() * 256, srnd() * 110, 1.5, 1.5); }
  for (let x = -10; x < 256;) {
    const w = 18 + srnd() * 30, h = 60 + srnd() * 110, y = 256 - h;
    g.fillStyle = `rgb(${(16 + srnd() * 14) | 0},${(20 + srnd() * 14) | 0},${(38 + srnd() * 20) | 0})`; g.fillRect(x, y, w, h);
    for (let wy = y + 6; wy < 250; wy += 9) for (let wx = x + 4; wx < x + w - 5; wx += 8) if (srnd() < 0.35) { g.fillStyle = srnd() < 0.8 ? 'rgba(255,214,120,.85)' : 'rgba(170,220,255,.8)'; g.fillRect(wx, wy, 3.5, 4.5); }
    x += w + 2 + srnd() * 6;
  }
  return toTex(c, false);
}
function texScreen(kind) {
  const [c, g] = cvs(128, 80);
  if (kind === 0) {
    g.fillStyle = '#14202e'; g.fillRect(0, 0, 128, 80); const cols = ['#6bd1ff', '#ffd479', '#9be37a', '#ff8f8f', '#c3a6ff'];
    for (let r = 0; r < 9; r++) { let x = 6 + (r % 3) * 6; const y = 7 + r * 8; for (let k = 0; k < 3 + ((srnd() * 3) | 0); k++) { const w = 10 + srnd() * 26; g.fillStyle = cols[(srnd() * 5) | 0]; g.fillRect(x, y, w, 3); x += w + 4; } }
  } else if (kind === 1) {
    g.fillStyle = '#f4f6f8'; g.fillRect(0, 0, 128, 80); g.fillStyle = '#1f7a47'; g.fillRect(0, 0, 128, 9);
    g.strokeStyle = '#c3ccd6'; g.lineWidth = 1; for (let i = 1; i < 8; i++) { g.beginPath(); g.moveTo(0, 9 + i * 9); g.lineTo(128, 9 + i * 9); g.stroke(); }
    for (let i = 1; i < 6; i++) { g.beginPath(); g.moveTo(i * 21, 0); g.lineTo(i * 21, 80); g.stroke(); }
    g.fillStyle = '#44505f'; for (let r = 0; r < 7; r++) for (let k = 0; k < 6; k++) if (srnd() < 0.7) g.fillRect(k * 21 + 4, 12 + r * 9, 8 + srnd() * 8, 3);
  } else if (kind === 2) {
    g.fillStyle = '#e7edf4'; g.fillRect(0, 0, 128, 80);
    for (let r = 0; r < 5; r++) { const right = r % 2; g.fillStyle = right ? '#7ac36a' : '#ffffff'; const w = 36 + srnd() * 40; g.fillRect(right ? 120 - w : 8, 8 + r * 14, w, 10); }
  } else {
    g.fillStyle = '#2a5ea8'; g.fillRect(0, 0, 128, 80); g.fillStyle = '#fff'; g.fillRect(10, 10, 70, 6); g.fillStyle = '#9fc6f5'; g.fillRect(10, 22, 50, 3);
    for (let i = 0; i < 5; i++) { const h = 10 + srnd() * 30; g.fillStyle = i === 4 ? '#ffd24a' : '#cfe3fb'; g.fillRect(14 + i * 20, 70 - h, 13, h); }
  }
  return toTex(c, false);
}
function texBoard(kind) {
  const [c, g] = cvs(256, 128);
  if (kind === 'white') {
    g.fillStyle = '#f7f8fa'; g.fillRect(0, 0, 256, 128);
    g.fillStyle = '#d33'; g.font = 'bold 22px sans-serif'; g.textAlign = 'left'; g.fillText('Q4 KPI 衝刺', 12, 28);
    g.strokeStyle = '#2a64c8'; g.lineWidth = 3; g.beginPath(); g.moveTo(14, 110); g.lineTo(60, 84); g.lineTo(100, 96); g.lineTo(150, 58); g.lineTo(210, 40); g.stroke();
    g.fillStyle = '#2a64c8'; g.beginPath(); g.moveTo(222, 34); g.lineTo(204, 36); g.lineTo(214, 50); g.fill();
    g.strokeStyle = '#2a8a4a'; g.lineWidth = 2; g.strokeRect(150, 70, 90, 44); g.fillStyle = '#2a8a4a'; g.font = '16px sans-serif'; g.fillText('向上管理', 160, 98);
    g.strokeStyle = '#555'; g.beginPath(); g.moveTo(12, 118); g.lineTo(246, 118); g.stroke();
  } else {
    g.fillStyle = '#b98a5a'; g.fillRect(0, 0, 256, 128);
    for (let i = 0; i < 700; i++) { const v = 150 + ((srnd() * 60) | 0); g.fillStyle = `rgb(${v},${v - 40},${v - 90})`; g.fillRect(srnd() * 256, srnd() * 128, 2, 2); }
    const cols = ['#ffe27a', '#ff9db0', '#9fe0ff', '#b8f0a0', '#fff'];
    for (let i = 0; i < 11; i++) { g.save(); g.translate(14 + (i % 6) * 40 + srnd() * 8, 14 + ((i / 6) | 0) * 56 + srnd() * 10); g.rotate((srnd() - 0.5) * 0.3); g.fillStyle = cols[i % 5]; g.fillRect(0, 0, 32, 36); g.fillStyle = '#c33'; g.fillRect(14, -2, 4, 4); g.fillStyle = '#555'; for (let l = 0; l < 4; l++) g.fillRect(4, 8 + l * 7, 18 + srnd() * 8, 2); g.restore(); }
  }
  return toTex(c, false);
}
function texArt(i) {
  const [c, g] = cvs(96, 128);
  const pal = [['#f2c14e', '#e2574c', '#3a6ea5'], ['#6bd1c0', '#f08a5d', '#2b2d42'], ['#fff1d0', '#b83b5e', '#6a2c70'], ['#d6e5fa', '#3f72af', '#112d4e']][i % 4];
  g.fillStyle = pal[0]; g.fillRect(0, 0, 96, 128);
  g.fillStyle = pal[1]; g.beginPath(); g.arc(30 + srnd() * 30, 40 + srnd() * 20, 24 + srnd() * 10, 0, 7); g.fill();
  g.fillStyle = pal[2]; g.fillRect(8 + srnd() * 20, 70 + srnd() * 20, 50 + srnd() * 20, 30 + srnd() * 10);
  g.strokeStyle = pal[2]; g.lineWidth = 3; g.beginPath(); g.moveTo(0, 100 + srnd() * 20); g.bezierCurveTo(30, 60, 60, 120, 96, 80); g.stroke();
  return toTex(c, false);
}
function texBlob(kind) {
  const [c, g] = cvs(64, 64); const gr = g.createRadialGradient(32, 32, 2, 32, 32, 31);
  if (kind === 'shadow') { gr.addColorStop(0, 'rgba(0,0,0,.55)'); gr.addColorStop(0.55, 'rgba(0,0,0,.28)'); gr.addColorStop(1, 'rgba(0,0,0,0)'); }
  else { gr.addColorStop(0, 'rgba(255,244,214,.55)'); gr.addColorStop(0.5, 'rgba(255,236,190,.2)'); gr.addColorStop(1, 'rgba(255,230,170,0)'); }
  g.fillStyle = gr; g.fillRect(0, 0, 64, 64); return toTex(c, false);
}
const TX = {
  carpet: texNoise(206, 28, 2600, 2, 'rgba(0,0,0,.2)'), vinyl: texNoise(228, 22, 900, 2, 'rgba(0,0,0,.14)'),
  tile: texTile(), wood: texWood(), ceil: texCeil(), city: texCity(),
  scr: [0, 1, 2, 3].map(texScreen), white: texBoard('white'), cork: texBoard('cork'),
};
const matT = {};
function MT(color, tex, extra) { const k = color + '|' + tex.uuid + (extra ? JSON.stringify(extra) : ''); return matT[k] || (matT[k] = new THREE.MeshLambertMaterial({ color, map: tex, ...(extra || {}) })); }
const basicCache = new Map();
function MB(tex) { let m = basicCache.get(tex); if (!m) { m = new THREE.MeshBasicMaterial({ map: tex }); basicCache.set(tex, m); } return m; }

// ---- 基本積木
const geoCache = {};
const bgeo = (w, h, d) => { const k = w + ',' + h + ',' + d; return geoCache[k] || (geoCache[k] = new THREE.BoxGeometry(w, h, d)); };
function grp(f, x, z, rotY = 0) { const g = new THREE.Group(); g.position.set(x, f * FH, z); g.rotation.y = rotY; worldGroup.add(g); return g; }
function ab(g, w, h, d, x, y, z, mat) { const m = new THREE.Mesh(bgeo(w, h, d), mat); m.position.set(x, y, z); g.add(m); return m; }
function put(g, geo, mat, x, y, z) { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); g.add(m); return m; }
const cylG = (r1, r2, h, s = 10) => { const k = `c${r1},${r2},${h},${s}`; return geoCache[k] || (geoCache[k] = new THREE.CylinderGeometry(r1, r2, h, s)); };
const icoG = (r, d = 0) => { const k = `i${r},${d}`; return geoCache[k] || (geoCache[k] = new THREE.IcosahedronGeometry(r, d)); };

function box(f, x1, z1, x2, z2, y0, y1, color, o = {}) {
  const { col = true, sight = true, wall = false, vis = true } = o;
  const b = { x1, z1, x2, z2 };
  if (col) colliders[f].push(b);
  if (sight) sightBoxes[f].push(b);
  if (wall) wallRects[f].push(b);
  if (!vis) return null;
  const w = x2 - x1, d = z2 - z1, h = y1 - y0;
  const mesh = new THREE.Mesh(bgeo(w, h, d), o.mat || M(color, o.mo));
  mesh.position.set((x1 + x2) / 2, f * FH + y0 + h / 2, (z1 + z2) / 2);
  worldGroup.add(mesh);
  return mesh;
}
const deco = (f, x1, z1, x2, z2, y0, y1, color, mat) => box(f, x1, z1, x2, z2, y0, y1, color, { col: false, sight: false, mat });
function wallSeg(f, x1, z1, x2, z2, th = 0.3, color = 0xe4e7eb) {
  const ex = z1 === z2 ? [x1 - th / 2, z1 - th / 2, x2 + th / 2, z1 + th / 2] : [x1 - th / 2, z1 - th / 2, x2 + th / 2, z2 + th / 2];
  box(f, ex[0], ex[1], ex[2], ex[3], 0, 3.8, color, { wall: true });
  const e = 0.025;
  deco(f, ex[0] - e, ex[1] - e, ex[2] + e, ex[3] + e, 0, 0.11, 0x3b4049);
  deco(f, ex[0] - e, ex[1] - e, ex[2] + e, ex[3] + e, 3.62, 3.8, 0xc3c8cf);
  if (th > 0.2) deco(f, ex[0] - 0.01, ex[1] - 0.01, ex[2] + 0.01, ex[3] + 0.01, 0.95, 1.03, 0xaeb6c2);
}
function plane(f, x1, z1, x2, z2, color, dy = 0.015, tex = null, tile = 2) {
  const w = x2 - x1, d = z2 - z1, g = new THREE.PlaneGeometry(w, d);
  if (tex) { const uv = g.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * w / tile + x1 / tile, uv.getY(i) * d / tile + z1 / tile); }
  const m = new THREE.Mesh(g, tex ? MT(color, tex) : M(color));
  m.rotation.x = -Math.PI / 2;
  m.position.set((x1 + x2) / 2, f * FH + dy, (z1 + z2) / 2);
  worldGroup.add(m);
}
function ceilPlane(y, x1, z1, x2, z2) {
  const w = x2 - x1, d = z2 - z1, g = new THREE.PlaneGeometry(w, d), tile = 1.2;
  const uv = g.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * w / tile + x1 / tile, uv.getY(i) * d / tile + z1 / tile);
  const m = new THREE.Mesh(g, MT(0xffffff, TX.ceil)); m.rotation.x = Math.PI / 2; m.position.set((x1 + x2) / 2, y, (z1 + z2) / 2); worldGroup.add(m);
}
function textTex(text, w, h, fg, bg, font) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const g = c.getContext('2d');
  if (bg) { g.fillStyle = bg; g.fillRect(0, 0, w, h); }
  g.fillStyle = fg; g.font = font; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText(text, w / 2, h / 2);
  return toTex(c, false);
}
function sign(f, text, x, y, z, rotY, w = 1.8, h = 0.5, bg = '#1d5fa8') {
  const g = grp(f, x, z, rotY);
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: textTex(text, 256, Math.round(256 * h / w), '#fff', bg, 'bold 44px sans-serif') }));
  m.position.set(0, y, 0.012); g.add(m);
  ab(g, w + 0.06, h + 0.06, 0.02, 0, y, 0, M(0x2b2f36));
}
function framed(f, tex, x, y, z, rotY, w, h) {
  const g = grp(f, x, z, rotY);
  ab(g, w + 0.1, h + 0.1, 0.04, 0, y, 0.0, M(0x2d2a28));
  const p = new THREE.Mesh(new THREE.PlaneGeometry(w, h), MB(tex)); p.position.set(0, y, 0.022); g.add(p);
}
function addBlob(f, x, z, w, d) { blobList.push({ f, x, z, w, d }); }

// ---- 家具
function chair(f, x, z, rotY = 0, col = 0x3d6fa8) {
  const g = grp(f, x, z, rotY), dark = M(0x2b3038), seat = M(col);
  put(g, cylG(0.03, 0.03, 0.4, 6), dark, 0, 0.23, 0);
  ab(g, 0.52, 0.035, 0.06, 0, 0.05, 0, dark); ab(g, 0.06, 0.035, 0.52, 0, 0.05, 0, dark);
  ab(g, 0.5, 0.08, 0.48, 0, 0.45, 0, seat);
  ab(g, 0.46, 0.5, 0.06, 0, 0.78, 0.23, seat);
  ab(g, 0.05, 0.04, 0.34, -0.27, 0.62, 0.02, dark); ab(g, 0.05, 0.04, 0.34, 0.27, 0.62, 0.02, dark);
  ab(g, 0.04, 0.17, 0.04, -0.27, 0.54, 0.02, dark); ab(g, 0.04, 0.17, 0.04, 0.27, 0.54, 0.02, dark);
  addBlob(f, x, z, 0.95, 0.95);
}
const CHAIRC = [0x3d6fa8, 0x2f8f83, 0xd9803a, 0x7a5aa6, 0x4a4f5a];
function desk(f, x, z, withChair = true) {
  hideSpots.push({ f, x, z, type: 'desk' });
  box(f, x - 0.8, z - 0.4, x + 0.8, z + 0.4, 0, 0.75, 0, { sight: false, vis: false });
  const g = grp(f, x, z), wood = M(0xc09462), dk = M(0x6d5846), metal = M(0x20252c);
  ab(g, 1.6, 0.05, 0.8, 0, 0.745, 0, wood);
  ab(g, 0.05, 0.72, 0.76, -0.76, 0.36, 0, dk); ab(g, 0.05, 0.72, 0.76, 0.76, 0.36, 0, dk);
  ab(g, 1.48, 0.42, 0.03, 0, 0.5, -0.36, dk);
  const side = srnd() < 0.5 ? -1 : 1;
  ab(g, 0.42, 0.62, 0.7, side * 0.52, 0.36, 0.0, M(0x8d7358));
  for (let i = 0; i < 3; i++) ab(g, 0.18, 0.025, 0.02, side * 0.52, 0.2 + i * 0.2, 0.36, M(0xcfd3d9));
  // 螢幕
  const k = (srnd() * 4) | 0;
  ab(g, 0.2, 0.012, 0.14, 0, 0.776, -0.12, metal); ab(g, 0.04, 0.17, 0.03, 0, 0.86, -0.14, metal); ab(g, 0.58, 0.35, 0.035, 0, 1.08, -0.15, metal);
  const scr = new THREE.Mesh(new THREE.PlaneGeometry(0.52, 0.3), MB(TX.scr[k])); scr.position.set(0, 1.08, -0.15 + 0.019); g.add(scr);
  ab(g, 0.42, 0.015, 0.14, -0.05, 0.785, 0.12, M(0xdadde2)); ab(g, 0.06, 0.02, 0.1, 0.3, 0.787, 0.13, M(0x30343b));
  if (srnd() < 0.6) put(g, cylG(0.036, 0.032, 0.09, 8), M(spick([0xe8e8e8, 0xd9503a, 0x3a8fd9, 0xf2c14e])), -0.55 * side * -1, 0.82, 0.02);
  if (srnd() < 0.55) { const p = ab(g, 0.21, 0.025, 0.3, -side * 0.5, 0.79, 0.1, M(0xf4f4f0)); p.rotation.y = (srnd() - 0.5) * 0.7; }
  if (srnd() < 0.3) { put(g, cylG(0.05, 0.04, 0.07, 8), M(0xe9e5dc), side * 0.55, 0.81, -0.2); put(g, icoG(0.07, 0), M(0x3f9a55), side * 0.55, 0.9, -0.2); }
  addBlob(f, x, z, 2.1, 1.3);
  if (withChair) chair(f, x + (srnd() - 0.5) * 0.3, z + 0.75 + srnd() * 0.12, (srnd() - 0.5) * 0.7, spick(CHAIRC));
}
function cabinet(f, x, z, w = 1.2, d = 0.6, color = 0x8c96a4) {
  box(f, x - w / 2, z - d / 2, x + w / 2, z + d / 2, 0, 2.0, 0, { vis: false });
  const g = grp(f, x, z);
  if (srnd() < 0.5) {  // 檔案櫃
    ab(g, w, 2.0, d, 0, 1.0, 0, M(color));
    ab(g, w + 0.03, 0.04, d + 0.03, 0, 2.01, 0, M(0xa7b0bd));
    for (const s of [-1, 1]) for (let i = 0; i < 4; i++) { ab(g, w - 0.08, 0.012, 0.01, 0, 0.45 + i * 0.45, s * (d / 2 + 0.005), M(0x3a414b)); ab(g, 0.16, 0.025, 0.02, 0, 0.62 + i * 0.45, s * (d / 2 + 0.01), M(0xd5d9df)); }
  } else {             // 書櫃
    const wd = M(0x9a7a56);
    ab(g, w, 2.0, 0.03, 0, 1.0, 0, wd); ab(g, 0.04, 2.0, d, -w / 2 + 0.02, 1.0, 0, wd); ab(g, 0.04, 2.0, d, w / 2 - 0.02, 1.0, 0, wd);
    for (let i = 0; i < 5; i++) ab(g, w, 0.035, d, 0, 0.03 + i * 0.49, 0, wd);
    for (const s of [-1, 1]) for (let i = 0; i < 4; i++) { let bx = -w / 2 + 0.08; while (bx < w / 2 - 0.1) { const bw = 0.04 + srnd() * 0.05, bh = 0.28 + srnd() * 0.12; ab(g, bw, bh, d * 0.38, bx + bw / 2, 0.05 + i * 0.49 + bh / 2, s * d * 0.22, M(spick([0xd9503a, 0x3a6ea5, 0xf2c14e, 0x4a9a6a, 0xe8e8e8, 0x7a5aa6]))); bx += bw + 0.012; } }
  }
  addBlob(f, x, z, w + 0.9, d + 0.9);
}
function plant(f, x, z, big = true) {
  box(f, x - 0.3, z - 0.3, x + 0.3, z + 0.3, 0, 0.45, 0, { sight: false, vis: false });
  const g = grp(f, x, z);
  put(g, cylG(0.26, 0.19, 0.45, 10), M(spick([0xb4693f, 0xe6e1d6, 0x3b4252])), 0, 0.225, 0);
  put(g, cylG(0.25, 0.25, 0.02, 10), M(0x3a2a1c), 0, 0.45, 0);
  put(g, cylG(0.03, 0.04, 0.5, 5), M(0x6b4a2a), 0, 0.7, 0);
  const gc = [0x2f8f4a, 0x3fa65a, 0x277a3f];
  put(g, icoG(0.34, 0), M(gc[0], { flatShading: true }), 0, 0.85, 0);
  put(g, icoG(0.27, 0), M(gc[1], { flatShading: true }), 0.12, 1.15, 0.05);
  put(g, icoG(0.24, 0), M(gc[2], { flatShading: true }), -0.12, 1.3, -0.04);
  if (big) put(g, icoG(0.2, 0), M(gc[1], { flatShading: true }), 0.05, 1.5, 0.05);
  addBlob(f, x, z, 1.1, 1.1);
}
const LAMP_MAT = new THREE.MeshBasicMaterial({ color: 0xfffbe6 });
function lamp(f, x, z) {
  const g = grp(f, x, z);
  ab(g, 1.72, 0.06, 0.72, 0, 3.77, 0, M(0xcfd4da));
  const p = new THREE.Mesh(bgeo(1.54, 0.02, 0.54), LAMP_MAT); p.position.set(0, 3.735, 0); g.add(p);
}
function doorway(f, axis, c, a, b) {
  const th = 0.34, wood = M(0x7a6552), wall = M(0xe4e7eb);
  if (axis === 'x') {
    deco(f, a, c - th / 2, b, c + th / 2, 2.55, 3.8, 0, wall);
    deco(f, a - 0.05, c - th / 2 - 0.02, a + 0.04, c + th / 2 + 0.02, 0, 2.55, 0, wood);
    deco(f, b - 0.04, c - th / 2 - 0.02, b + 0.05, c + th / 2 + 0.02, 0, 2.55, 0, wood);
    deco(f, a - 0.05, c - th / 2 - 0.02, b + 0.05, c + th / 2 + 0.02, 2.47, 2.57, 0, wood);
  }
}
function windowAt(f, wall, c, w = 2.0) {
  const cfg = { N: [c, -14.835, 0], S: [c, 14.835, Math.PI], W: [-19.835, c, Math.PI / 2], E: [19.835, c, -Math.PI / 2] }[wall];
  const g = grp(f, cfg[0], cfg[1], cfg[2]), h = 2.0, y = 2.05, white = M(0xf1f3f5);
  const geo = new THREE.PlaneGeometry(w, h), uv = geo.attributes.uv, u0 = srnd() * 0.5;
  for (let i = 0; i < uv.count; i++) uv.setX(i, u0 + uv.getX(i) * 0.5);
  const p = new THREE.Mesh(geo, MB(TX.city)); p.position.set(0, y, 0.004); g.add(p);
  ab(g, w + 0.16, 0.08, 0.06, 0, y + h / 2 + 0.04, 0.02, white); ab(g, w + 0.16, 0.08, 0.06, 0, y - h / 2 - 0.04, 0.02, white);
  ab(g, 0.08, h, 0.06, -w / 2 - 0.04, y, 0.02, white); ab(g, 0.08, h, 0.06, w / 2 + 0.04, y, 0.02, white);
  ab(g, 0.05, h, 0.05, 0, y, 0.02, white); ab(g, w, 0.05, 0.05, 0, y + 0.1, 0.02, white);
  ab(g, w + 0.3, 0.05, 0.16, 0, y - h / 2 - 0.09, 0.08, white);
}

function buildWorld() {
  const FLOORCOL = { A: 0x6d7e9e, B: 0x6f8f72, K: 0xd9dde2, C: 0xffffff, D: 0x6b7ea3, S: 0xc8c2b4 };
  // 1F 地板 / 2F 樓板(中間挖樓梯洞)
  const g0 = new THREE.Mesh(new THREE.PlaneGeometry(W, H), M(0x2b3038)); g0.rotation.x = -Math.PI / 2; worldGroup.add(g0);
  const slab = [[-20, -15, 2, 15], [6, -15, 20, 15], [2, -15, 6, 2], [2, 12, 6, 15]];
  for (const s of slab) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(s[2] - s[0], 0.2, s[3] - s[1]), M(0x9aa1ab));
    m.position.set((s[0] + s[2]) / 2, FH - 0.1, (s[1] + s[3]) / 2); worldGroup.add(m);
    ceilPlane(FH - 0.205, s[0], s[1], s[2], s[3]);
  }
  ceilPlane(FH * 2 - 0.205, -20, -15, 20, 15);
  const roof = new THREE.Mesh(new THREE.PlaneGeometry(W, H), M(0xcdd2d8));
  roof.rotation.x = Math.PI / 2; roof.position.y = FH * 2 - 0.2; worldGroup.add(roof);

  for (let f = 0; f < 2; f++) {
    const dy = f === 0 ? 0.015 : 0.02;
    plane(f, -20, -2, 20, 2, FLOORCOL.K, dy, TX.vinyl);
    plane(f, -20, -15, -4, -2, FLOORCOL.A, dy, TX.carpet);
    plane(f, -4, -15, 8, -2, 0xffffff, dy, TX.tile, 1);
    plane(f, 8, -15, 20, -2, FLOORCOL.B, dy, TX.carpet);
    plane(f, -20, 2, -6, 15, FLOORCOL.C, dy, TX.wood);
    plane(f, 6, 2, 20, 15, FLOORCOL.D, dy, TX.carpet);
    if (f === 0) plane(f, -6, 2, 6, 15, FLOORCOL.S, dy, TX.vinyl);
    else { plane(f, -6, 2, 2, 15, FLOORCOL.S, dy, TX.vinyl); plane(f, 2, 12, 6, 15, FLOORCOL.S, dy, TX.vinyl); }
    // 地毯
    plane(f, -17.8, 5.7, -9.2, 11.0, 0x3d4a66, dy + 0.01, TX.carpet);
    plane(f, -13.5, -1.0, -6.5, 1.0, 0x8a3b3b, dy + 0.01, TX.carpet);

    // 外牆
    wallSeg(f, -20, -15, 20, -15, 0.3, 0xdfe3e8); wallSeg(f, -20, 15, 20, 15, 0.3, 0xdfe3e8);
    wallSeg(f, -20, -15, -20, 15, 0.3, 0xdfe3e8); wallSeg(f, 20, -15, 20, 15, 0.3, 0xdfe3e8);
    // 走廊北牆(門: -14~-11 辦公室A, 5~7.5 廁所, 12~15 辦公室B)
    for (const s of [[-20, -14], [-11, 5], [7.5, 12], [15, 20]]) wallSeg(f, s[0], -2, s[1], -2);
    for (const d of [[-14, -11], [5, 7.5], [12, 15]]) doorway(f, 'x', -2, d[0], d[1]);
    // 走廊南牆(門: -14~-11 C, 12~15 D; -6~6 樓梯間敞開)
    for (const s of [[-20, -14], [-11, -6], [6, 12], [15, 20]]) wallSeg(f, s[0], 2, s[1], 2);
    for (const d of [[-14, -11], [12, 15]]) doorway(f, 'x', 2, d[0], d[1]);
    // 隔間牆
    wallSeg(f, -4, -15, -4, -2); wallSeg(f, 8, -15, 8, -2);
    wallSeg(f, -6, 2, -6, 15); wallSeg(f, 6, 2, 6, 15);
    // 樓梯欄杆
    wallSeg(f, 2, 2, 2, 12, 0.3, 0xcdb48c);
    if (f === 0) wallSeg(f, 2, 2, 6, 2, 0.3, 0xcdb48c);
    else wallSeg(f, 2, 12, 6, 12, 0.3, 0xcdb48c);

    // ---- 廁所
    for (const x of [-2, 0, 2, 4]) wallSeg(f, x, -15, x, -9, 0.12, 0x8fb8cc);
    const porc = M(0xf6f8fa), seatM = M(0xe2e6ea);
    for (const x of [-3, -1, 1, 3]) {
      box(f, x - 0.25, -14.9, x + 0.25, -14.4, 0, 0.45, 0, { sight: false, vis: false });
      const g = grp(f, x, -14.2);
      ab(g, 0.46, 0.5, 0.2, 0, 0.62, -0.62, porc);                       // 水箱
      put(g, cylG(0.22, 0.16, 0.4, 12), porc, 0, 0.2, -0.28).scale.set(1, 1, 1.35);   // 馬桶座底
      put(g, cylG(0.24, 0.24, 0.05, 14), seatM, 0, 0.42, -0.26).scale.set(1, 1, 1.3);
      addBlob(f, x, -14.2, 1.2, 1.3);
    }
    for (const x of [-2, 0, 2, 4]) { const g = grp(f, x + 0.12, -8.55, -0.2); ab(g, 0.04, 1.75, 0.92, 0, 0.95, 0.0, M(0x7fb2c8)); }  // 半開的隔間門
    for (const x of [-3, -1, 1, 3]) hideSpots.push({ f, x, z: -12.6, type: 'stall' });
    for (const z of [-12, -10, -8]) {
      box(f, 7.2, z - 0.35, 7.8, z + 0.35, 0.7, 0.95, 0, { sight: false, vis: false });
      const g = grp(f, 7.55, z, 0);
      ab(g, 0.5, 0.06, 0.62, 0, 0.9, 0, porc); ab(g, 0.34, 0.025, 0.46, 0.0, 0.93, 0, M(0xc9d6de));
      ab(g, 0.14, 0.7, 0.14, 0.12, 0.35, 0, porc);
      ab(g, 0.03, 0.12, 0.03, 0.2, 1.02, 0, M(0xb9c0c8)); ab(g, 0.1, 0.025, 0.025, 0.16, 1.07, 0, M(0xb9c0c8));
      ab(g, 0.03, 0.96, 0.7, 0.3, 1.58, 0, M(0x2b2f36));
      ab(g, 0.012, 0.9, 0.64, 0.28, 1.58, 0, M(0xa9d4ec));
      addBlob(f, 7.5, z, 1.2, 1.1);
    }
    deco(f, 7.55, -14.5, 7.95, -14.1, 0, 0.5, 0xb8c0c8);  // 垃圾桶
    sign(f, '廁所 WC', 6.25, 2.9, -1.83, 0, 1.6, 0.45, '#1d8a6a');
    sign(f, f === 0 ? '1F' : '2F', 0, 3.1, -1.83, 0, 1.0, 0.5, '#b03a2e');
    sign(f, '樓梯 ' + (f === 0 ? '↑' : '↓'), -1, 2.9, 1.83, Math.PI, 1.6, 0.45, '#c9811e');
    sign(f, '主管出沒注意', 17.5, 2.6, 1.83, Math.PI, 2.0, 0.45, '#8a1c1c');
    sign(f, '辦公室 A', -12.5, 2.9, -1.83, 0, 1.6, 0.4, '#36506e'); sign(f, '辦公室 B', 13.5, 2.9, -1.83, 0, 1.6, 0.4, '#36506e');
    sign(f, '會議室', -12.5, 2.9, 1.83, Math.PI, 1.6, 0.4, '#6e3650'); sign(f, '辦公室 D', 13.5, 2.9, 1.83, Math.PI, 1.6, 0.4, '#36506e');

    // ---- 辦公室 A
    for (const z of [-13, -9]) for (const x of [-18.5, -15.5, -12.5, -9.5, -6.5]) desk(f, x, z);
    cabinet(f, -19.5, -6.5); cabinet(f, -19.5, -5.2); cabinet(f, -4.7, -14.5); plant(f, -5, -3.2);
    framed(f, TX.cork, -19.835, 1.7, -3.2, Math.PI / 2, 2.2, 1.1);
    sign(f, '本月業績 120%', -14.5, 2.5, -14.83, 0, 1.8, 0.5, '#8a1c1c'); sign(f, '加班是福報', -9.5, 2.5, -14.83, 0, 1.5, 0.5, '#2f6f4f');
    for (const x of [-17, -12, -7]) windowAt(f, 'N', x);
    windowAt(f, 'W', -11); windowAt(f, 'W', -8);
    // ---- 辦公室 B
    for (const z of [-12, -8]) for (const x of [10.5, 13.5, 16.5]) desk(f, x, z);
    cabinet(f, 19.5, -10); cabinet(f, 19.5, -8.7); cabinet(f, 9, -14.5, 1.4); plant(f, 19, -3.3);
    for (const x of [11.5, 16.5]) windowAt(f, 'N', x);
    windowAt(f, 'E', -11.5); windowAt(f, 'E', -6);
    framed(f, TX.white, 8.17, 1.7, -4.2, Math.PI / 2, 2.0, 1.0);
    // ---- 辦公室 C (會議室)
    box(f, -15.2, 7.6, -11.8, 9.0, 0, 0.78, 0, { sight: false, vis: false });
    { const g = grp(f, -13.5, 8.3), wd = M(0x6b4a32);
      ab(g, 3.4, 0.07, 1.4, 0, 0.745, 0, wd); ab(g, 0.18, 0.72, 1.0, -1.1, 0.36, 0, M(0x3a3f4b)); ab(g, 0.18, 0.72, 1.0, 1.1, 0.36, 0, M(0x3a3f4b));
      ab(g, 0.34, 0.015, 0.24, -0.6, 0.79, 0.15, M(0xcfd3d9)); ab(g, 0.34, 0.2, 0.01, -0.6, 0.89, 0.03, M(0x20252c)); ab(g, 0.3, 0.17, 0.004, -0.6, 0.89, 0.036, MB(TX.scr[3]));
      const p = ab(g, 0.22, 0.015, 0.3, 0.7, 0.785, -0.2, M(0xf4f4f0)); p.rotation.y = 0.4;
      put(g, cylG(0.04, 0.035, 0.1, 8), M(0xd9503a), 0.2, 0.83, 0.2);
      addBlob(f, -13.5, 8.3, 4.3, 2.4); }
    [-14.8, -13.5, -12.2].forEach((x, i) => { chair(f, x, 6.95, Math.PI, CHAIRC[i % 5]); chair(f, x, 9.65, 0, CHAIRC[(i + 2) % 5]); });
    cabinet(f, -18, 14.5); cabinet(f, -16.5, 14.5); cabinet(f, -8, 14.5, 1.4); plant(f, -19, 3.4); plant(f, -7, 3.4);
    framed(f, TX.white, -19.835, 1.65, 8.5, Math.PI / 2, 3.2, 1.6);
    windowAt(f, 'W', 4.4); windowAt(f, 'W', 12.6); windowAt(f, 'S', -13); windowAt(f, 'S', -10.5);
    { const g = grp(f, -6.18, 5.2, -Math.PI / 2); ab(g, 1.5, 0.9, 0.05, 0, 1.75, 0, M(0x15181d)); const s = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 0.8), MB(TX.scr[3])); s.position.set(0, 1.75, 0.03); g.add(s); }
    // ---- 辦公室 D
    for (const z of [8, 12.3]) for (const x of [9.5, 12.5, 15.5, 18.5]) desk(f, x, z);
    cabinet(f, 19.5, 5); cabinet(f, 7, 14.5, 1.0);
    for (const x of [10.5, 14.5, 18.5]) windowAt(f, 'S', x);
    windowAt(f, 'E', 8.5); windowAt(f, 'E', 3.6);
    framed(f, TX.cork, 6.17, 1.7, 5.0, Math.PI / 2, 1.8, 1.0);
    // ---- 樓梯間西側 + 走廊
    plant(f, -5, 14); cabinet(f, -1, 14.5, 1.6);
    windowAt(f, 'S', 3.4); windowAt(f, 'S', -3.4);
    box(f, -19.2, 0.9, -18.2, 1.6, 0, 1.1, 0, { sight: false, vis: false });   // 飲水機
    { const g = grp(f, -18.7, 1.25), wh = M(0xe8ecf0); ab(g, 0.9, 1.05, 0.6, 0, 0.5, 0, wh); put(g, cylG(0.19, 0.19, 0.45, 12), new THREE.MeshLambertMaterial({ color: 0x7ec8ff, transparent: true, opacity: 0.7 }), 0, 1.27, 0); ab(g, 0.12, 0.05, 0.05, -0.2, 0.75, 0.31, M(0x3a8fd9)); ab(g, 0.12, 0.05, 0.05, 0.2, 0.75, 0.31, M(0xd9503a)); addBlob(f, -18.7, 1.25, 1.8, 1.5); }
    box(f, 16.6, 1.0, 17.8, 1.7, 0, 1.0, 0, { sight: false, vis: false });      // 影印機
    { const g = grp(f, 17.2, 1.35), wh = M(0xdfe3e8); ab(g, 1.2, 0.9, 0.7, 0, 0.45, 0, wh); ab(g, 1.2, 0.12, 0.7, 0, 0.96, 0, M(0x6b7380)); ab(g, 0.5, 0.05, 0.25, 0.3, 1.04, 0.1, M(0x2b3038)).rotation.x = -0.4; ab(g, 0.9, 0.04, 0.02, 0, 0.35, 0.36, M(0x3a414b)); addBlob(f, 17.2, 1.35, 2.2, 1.7); }
    plant(f, 19, -1.2); plant(f, -19, -1.2);
    // 走廊裝飾
    framed(f, texArt(0), -8, 1.8, -1.84, 0, 0.9, 1.2); framed(f, texArt(1), -4.5, 1.8, -1.84, 0, 0.9, 1.2);
    framed(f, texArt(2), 10, 1.8, 1.84, Math.PI, 0.9, 1.2); framed(f, texArt(3), 8, 1.8, -1.84, 0, 0.9, 1.2);
    framed(f, texArt(f + 1), -16, 1.8, 1.84, Math.PI, 0.9, 1.2);
    { const g = grp(f, -10, 1.8, Math.PI); put(g, cylG(0.08, 0.08, 0.45, 8), M(0xc4382e), 0, 0.55, 0.02); ab(g, 0.1, 0.1, 0.08, 0, 0.88, 0.02, M(0x222222)); sign(f, '滅火器', -10, 1.2, 1.84, Math.PI, 0.4, 0.2, '#c4382e'); }
    sign(f, '緊急出口', -19.82, 3.45, 0, Math.PI / 2, 1.0, 0.3, '#1f8f4a'); sign(f, '緊急出口', 19.82, 3.45, 0, -Math.PI / 2, 1.0, 0.3, '#1f8f4a');
    windowAt(f, 'W', 0, 2.4); windowAt(f, 'E', 0, 2.4);
    // 天花板燈
    for (const x of [-16, -8, 0, 8, 16]) for (const z of [-10, 0, 10]) {
      if (x === 0 && z === 10) continue;
      lamp(f, x, z);
      const r = 3.4;
      const overHole = f === 1 && x + r > 2 && x - r < 6 && z + r > 2 && z - r < 12;
      if (!overHole) glowList.push({ f, x, z, r });
    }
  }
  // ---- 真樓梯(視覺用台階；碰撞仍是平滑斜坡)
  const steps = 20, stepD = 10 / steps, stepM = M(0x8d7e6c), capM = M(0xbfae96), noseM = M(0xe0b84a);
  for (let i = 0; i < steps; i++) {
    const zb = RAMP.z2 - stepD * (i + 1), zf = RAMP.z2 - stepD * i, h = FH * (i + 0.5) / steps;
    const m = new THREE.Mesh(bgeo(3.7, h, stepD), stepM); m.position.set(4, h / 2, (zb + zf) / 2); worldGroup.add(m);
    const c = new THREE.Mesh(bgeo(3.7, 0.025, stepD), capM); c.position.set(4, h + 0.0125, (zb + zf) / 2); worldGroup.add(c);
    const n = new THREE.Mesh(bgeo(3.7, 0.03, 0.06), noseM); n.position.set(4, h + 0.03, zf - 0.03); worldGroup.add(n);
  }
  const L = Math.hypot(10, FH), ang = Math.atan2(FH, 10);
  for (const rx of [2.25, 5.75]) {
    const rail = new THREE.Mesh(cylG(0.035, 0.035, L, 6), M(0x9aa3ae)); rail.rotation.x = Math.PI / 2 + ang; rail.position.set(rx, FH / 2 + 0.95, 7); worldGroup.add(rail);
  }
  // 假陰影與光暈 (一次畫完的合併面)
  buildDecals();
  mergeWorld();
}

function quadGeo(list, yOf) {
  const pos = [], uv = [], idx = [];
  list.forEach((q, i) => {
    const y = yOf(q), x1 = q.x - q.w / 2, x2 = q.x + q.w / 2, z1 = q.z - q.d / 2, z2 = q.z + q.d / 2;
    pos.push(x1, y, z2, x2, y, z2, x2, y, z1, x1, y, z1); uv.push(0, 0, 1, 0, 1, 1, 0, 1);
    idx.push(i * 4, i * 4 + 1, i * 4 + 2, i * 4, i * 4 + 2, i * 4 + 3);
  });
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(idx);
  return g;
}
function buildDecals() {
  const sh = new THREE.Mesh(quadGeo(blobList, q => q.f * FH + 0.04),
    new THREE.MeshBasicMaterial({ map: texBlob('shadow'), transparent: true, depthWrite: false, opacity: 0.8 }));
  sh.renderOrder = 2; worldGroup.add(sh);
  const gl = glowList.map(q => ({ f: q.f, x: q.x, z: q.z, w: q.r * 2, d: q.r * 2 }));
  const gm = new THREE.Mesh(quadGeo(gl, q => q.f * FH + 0.05),
    new THREE.MeshBasicMaterial({ map: texBlob('glow'), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0.55 }));
  gm.renderOrder = 3; worldGroup.add(gm); glowMesh = gm;
}
// 把靜態物件依「材質 + 樓層 + 區段」合併，大幅減少 draw call (手機友善)
function mergeWorld() {
  worldGroup.updateMatrixWorld(true);
  const buckets = new Map(), olds = [];
  worldGroup.traverse(o => {
    if (!o.isMesh || o.material.transparent) return;
    olds.push(o);
    const e = o.matrixWorld.elements, key = `${o.material.uuid}|${e[13] >= FH - 0.5 ? 1 : 0}|${e[12] < -7 ? 0 : e[12] < 7 ? 1 : 2}`;
    let b = buckets.get(key); if (!b) buckets.set(key, b = { mat: o.material, geos: [] });
    const g = (o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone());
    for (const n of Object.keys(g.attributes)) if (n !== 'position' && n !== 'normal' && n !== 'uv') g.deleteAttribute(n);
    g.applyMatrix4(o.matrixWorld); b.geos.push(g);
  });
  const keep = [];
  worldGroup.traverse(o => { if (o.isMesh && o.material.transparent && o.parent !== worldGroup) keep.push(o); });
  for (const o of keep) worldGroup.attach(o);
  for (const o of olds) o.parent.remove(o);
  for (const g of worldGroup.children.filter(c => c.isGroup)) worldGroup.remove(g);
  for (const b of buckets.values()) {
    const merged = mergeGeometries(b.geos, false);
    for (const g of b.geos) g.dispose();
    if (!merged) continue;
    merged.computeBoundingSphere();
    const m = new THREE.Mesh(merged, b.mat); m.matrixAutoUpdate = false; worldGroup.add(m);
  }
}
buildWorld();

// ---------------------------------------------------------------- 碰撞 & 視線
function collide(f, pos, r) {
  for (let it = 0; it < 3; it++) {
    for (const b of colliders[f]) {
      const cx = clamp(pos.x, b.x1, b.x2), cz = clamp(pos.z, b.z1, b.z2);
      const dx = pos.x - cx, dz = pos.z - cz, d2 = dx * dx + dz * dz;
      if (d2 < r * r) {
        if (d2 > 1e-8) { const d = Math.sqrt(d2); pos.x = cx + dx / d * r; pos.z = cz + dz / d * r; }
        else {
          const l = pos.x - b.x1, rr = b.x2 - pos.x, t = pos.z - b.z1, bt = b.z2 - pos.z, m = Math.min(l, rr, t, bt);
          if (m === l) pos.x = b.x1 - r; else if (m === rr) pos.x = b.x2 + r; else if (m === t) pos.z = b.z1 - r; else pos.z = b.z2 + r;
        }
      }
    }
  }
}
function segHitsBox(ax, az, bx, bz, b) {
  let t0 = 0, t1 = 1; const dx = bx - ax, dz = bz - az;
  const p = [-dx, dx, -dz, dz], q = [ax - b.x1, b.x2 - ax, az - b.z1, b.z2 - az];
  for (let i = 0; i < 4; i++) {
    if (p[i] === 0) { if (q[i] < 0) return false; }
    else { const t = q[i] / p[i]; if (p[i] < 0) { if (t > t1) return false; if (t > t0) t0 = t; } else { if (t < t0) return false; if (t < t1) t1 = t; } }
  }
  return true;
}
function hasLOS(f, ax, az, bx, bz) {
  for (const b of sightBoxes[f]) if (segHitsBox(ax, az, bx, bz, b)) return false;
  return true;
}

// ---------------------------------------------------------------- 導航格 + A*
const layerOf = (x, z, y) => (inRamp(x, z) ? 2 : (y >= 2.2 ? 1 : 0));
const cellIx = x => clamp(Math.floor(x - X0), 0, W - 1);
const cellIz = z => clamp(Math.floor(z - Z0), 0, H - 1);
const cellX = ix => ix + X0 + 0.5, cellZ = iz => iz + Z0 + 0.5;
const free = [new Uint8Array(N), new Uint8Array(N), new Uint8Array(N)];
function buildNav() {
  for (let l = 0; l < 2; l++) {
    for (let iz = 0; iz < H; iz++) for (let ix = 0; ix < W; ix++) {
      const x = cellX(ix), z = cellZ(iz);
      let ok = ix > 0 && ix < W - 1 && iz > 0 && iz < H - 1;
      if (ok && x > 2 && x < 6 && z > 2 && z < 12) ok = false;
      if (ok) for (const b of colliders[l]) {
        const cx = clamp(x, b.x1, b.x2), cz = clamp(z, b.z1, b.z2);
        if ((x - cx) ** 2 + (z - cz) ** 2 < 0.45 * 0.45) { ok = false; break; }
      }
      free[l][iz * W + ix] = ok ? 1 : 0;
    }
  }
  for (let iz = 17; iz <= 26; iz++) for (const ix of [23, 24]) free[2][iz * W + ix] = 1;
}
buildNav();
const DIRS = [[1, 0, 1], [-1, 0, 1], [0, 1, 1], [0, -1, 1], [1, 1, 1.414], [1, -1, 1.414], [-1, 1, 1.414], [-1, -1, 1.414]];
function neighbors(id, out) {
  out.length = 0;
  const l = (id / N) | 0, r = id % N, iz = (r / W) | 0, ix = r % W, fr = free[l];
  for (const [dx, dz, c] of DIRS) {
    const nx = ix + dx, nz = iz + dz;
    if (nx < 0 || nz < 0 || nx >= W || nz >= H) continue;
    if (!fr[nz * W + nx]) continue;
    if (dx !== 0 && dz !== 0 && (!fr[iz * W + nx] || !fr[nz * W + ix])) continue;
    out.push(l * N + nz * W + nx, c);
  }
  if (l === 0 && iz === 27 && (ix === 23 || ix === 24)) out.push(2 * N + 26 * W + ix, 1);
  if (l === 1 && iz === 16 && (ix === 23 || ix === 24)) out.push(2 * N + 17 * W + ix, 1);
  if (l === 2 && iz === 26) out.push(0 * N + 27 * W + ix, 1);
  if (l === 2 && iz === 17) out.push(1 * N + 16 * W + ix, 1);
}
function nearestFree(l, ix, iz) {
  if (free[l][iz * W + ix]) return l * N + iz * W + ix;
  for (let r = 1; r < 8; r++) for (let dz = -r; dz <= r; dz++) for (let dx = -r; dx <= r; dx++) {
    if (Math.max(Math.abs(dx), Math.abs(dz)) !== r) continue;
    const nx = ix + dx, nz = iz + dz;
    if (nx < 0 || nz < 0 || nx >= W || nz >= H) continue;
    if (free[l][nz * W + nx]) return l * N + nz * W + nx;
  }
  return -1;
}
const _nb = [];
function findPath(sx, sz, sl, tx, tz, tl) {
  const s = nearestFree(sl, cellIx(sx), cellIz(sz)), t = nearestFree(tl, cellIx(tx), cellIz(tz));
  if (s < 0 || t < 0) return null;
  const tr = t % N, tix = tr % W, tiz = (tr / W) | 0;
  const g = new Map(), from = new Map(), closed = new Set();
  const heap = [];
  const push = (f, id) => { heap.push([f, id]); let i = heap.length - 1; while (i > 0) { const p = (i - 1) >> 1; if (heap[p][0] <= heap[i][0]) break; [heap[p], heap[i]] = [heap[i], heap[p]]; i = p; } };
  const pop = () => { const top = heap[0], last = heap.pop(); if (heap.length) { heap[0] = last; let i = 0; for (;;) { let l = 2 * i + 1, r = l + 1, m = i; if (l < heap.length && heap[l][0] < heap[m][0]) m = l; if (r < heap.length && heap[r][0] < heap[m][0]) m = r; if (m === i) break; [heap[m], heap[i]] = [heap[i], heap[m]]; i = m; } } return top; };
  const hf = id => { const r = id % N; return Math.hypot((r % W) - tix, ((r / W) | 0) - tiz); };
  g.set(s, 0); push(hf(s), s);
  let found = false;
  while (heap.length) {
    const [, cur] = pop();
    if (closed.has(cur)) continue;
    if (cur === t) { found = true; break; }
    closed.add(cur);
    neighbors(cur, _nb);
    for (let i = 0; i < _nb.length; i += 2) {
      const nid = _nb[i], ng = g.get(cur) + _nb[i + 1];
      if (closed.has(nid)) continue;
      if (!g.has(nid) || ng < g.get(nid)) { g.set(nid, ng); from.set(nid, cur); push(ng + hf(nid), nid); }
    }
  }
  if (!found) return null;
  const path = []; let c = t;
  while (c !== s) { const r = c % N; path.push({ x: cellX(r % W), z: cellZ((r / W) | 0), l: (c / N) | 0 }); c = from.get(c); }
  return path.reverse();
}
// 可用格子(從玩家出生點可達)
const cellsMain = [], nooks = [];
(function () {
  const start = nearestFree(0, cellIx(-18.5), cellIz(0.5));
  const seen = new Set([start]), q = [start], nb = [];
  while (q.length) {
    const c = q.pop(); neighbors(c, nb);
    for (let i = 0; i < nb.length; i += 2) if (!seen.has(nb[i])) { seen.add(nb[i]); q.push(nb[i]); }
  }
  for (const id of seen) {
    const l = (id / N) | 0; if (l === 2) continue;
    const r = id % N, ix = r % W, iz = (r / W) | 0, x = cellX(ix), z = cellZ(iz);
    const c = { l, ix, iz, x, z };
    cellsMain.push(c);
    if (z < -2.5 || z > 2.5) {
      let blocked = 0;
      for (const [dx, dz] of DIRS) { const nx = ix + dx, nz = iz + dz; if (nx < 0 || nz < 0 || nx >= W || nz >= H || !free[l][nz * W + nx]) blocked++; }
      if (blocked >= 3) nooks.push(c);
    }
  }
})();

// ---------------------------------------------------------------- 音效
let AC = null;
function ac() { if (!AC) { try { AC = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { return null; } } if (AC.state === 'suspended') AC.resume(); return AC; }
function tone(freq, dur, type = 'square', vol = 0.15, slide = 0.5, delay = 0) {
  const a = ac(); if (!a || vol <= 0.002) return;
  const t = a.currentTime + delay, o = a.createOscillator(), g = a.createGain();
  o.type = type; o.frequency.setValueAtTime(freq, t); o.frequency.exponentialRampToValueAtTime(Math.max(30, freq * slide), t + dur);
  g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
  o.connect(g).connect(a.destination); o.start(t); o.stop(t + dur + 0.02);
}
function sndBark(type, vol) {
  const p = type === 'chi' ? 1.9 : type === 'poo' ? 1.3 : 0.9;
  tone(520 * p, 0.12, 'sawtooth', 0.18 * vol, 0.45); tone(480 * p, 0.1, 'square', 0.1 * vol, 0.5, 0.0);
}
const sndAlert = () => { tone(900, 0.12, 'square', 0.2, 1); tone(1300, 0.25, 'square', 0.2, 0.8, 0.12); };
const sndWarp = v => { tone(1400, 0.35, 'sine', 0.18 * v, 0.1); tone(300, 0.3, 'triangle', 0.12 * v, 3, 0.05); };
const sndNet = () => tone(700, 0.25, 'sawtooth', 0.1, 0.25);
const sndCatch = () => { tone(660, 0.12, 'square', 0.15, 1); tone(880, 0.12, 'square', 0.15, 1, 0.1); tone(1320, 0.25, 'square', 0.15, 1, 0.2); };
const sndDie = () => { tone(300, 0.6, 'sawtooth', 0.25, 0.2); };
let settings = { voice: true };
function say(text, vol = 1) {
  if (!settings.voice || !('speechSynthesis' in window) || vol < 0.15) return;
  try {
    const u = new SpeechSynthesisUtterance(text); u.lang = 'zh-TW'; u.pitch = 1.9; u.rate = 1.15; u.volume = clamp(vol, 0, 1);
    speechSynthesis.cancel(); speechSynthesis.speak(u);
  } catch (e) { /* ignore */ }
}

function makeSprite(text, color, size = 0.6) {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d'); g.font = 'bold 110px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.lineWidth = 10; g.strokeStyle = '#000'; g.strokeText(text, 64, 70); g.fillStyle = color; g.fillText(text, 64, 70);
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), transparent: true, depthTest: false }));
  sp.scale.set(size, size, size); return sp;
}
const SPR_ALERT = {}; // 共用貼圖
function nameSprite(text, color) {
  const c = document.createElement('canvas'); c.width = 512; c.height = 128;
  const g = c.getContext('2d'); g.font = 'bold 72px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.lineWidth = 12; g.strokeStyle = '#000'; g.strokeText(text, 256, 68); g.fillStyle = color; g.fillText(text, 256, 68);
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), transparent: true }));
  sp.scale.set(1.0, 0.25, 1); return sp;
}
function alertSprite() {
  const sp = makeSprite('!', '#ff3b30', 0.7); sp.visible = false; sp.renderOrder = 10; return sp;
}

// ---------------------------------------------------------------- 遊戲狀態
let state = 'menu'; // menu playing paused upgrade clear dead
let debugNoLock = false;
const player = { pos: new THREE.Vector3(-18.5, 0, 0.5), yaw: -Math.PI / 2, pitch: 0, eye: 1.6, noise: 0, moving: false, running: false, sneaking: false, netCd: 0, bob: 0, stamina: 100, tired: false, hidden: null, hideFrom: null, treats: 2, baton: 3, batonCd: 0, shake: 0 };
const up = { sneak: 0, net: 0, radar: 0 };
let stage = 1, score = 0, stageTime = 0, seen = 0, playerName = '捕獸員', radarSnap = [], radarT = 0, pendingClear = false, lastRank = -1;
let poops = [], dogs = [], nets = [], fxs = [], treatsFly = [], lures = [], pickups = [], stageSeen = false, hbT = 0;
const keys = {};

const CHI_Q = ['這點小事不用問我', '你們要懂向上管理', '送請購單阿', '你沒備註誰看得懂?', '你在幹什麼，主管都看在眼裡', '我都不知道你們在幹什麼'];
const POO_Q = ['汪～我只是來泡咖啡的', '別抓我！我還沒領薪水'];
const PUG_Q = ['呼嚕…（午休中）', '汪？我在開會啦'];


// ---------------------------------------------------------------- 金幣 / 商店 / 關卡事件
const META_KEY = 'chihuahua_hunter_meta_v1';
function loadMeta() { try { const m = JSON.parse(localStorage.getItem(META_KEY)); if (m) return { coins: m.coins | 0, lv: m.lv || {}, best: m.best | 0 }; } catch (e) { /* ignore */ } return { coins: 0, lv: {}, best: 0 }; }
const meta = loadMeta();
function saveMeta() { try { localStorage.setItem(META_KEY, JSON.stringify(meta)); } catch (e) { /* ignore */ } }
const shopLv = k => meta.lv[k] || 0;
let runCoins = 0;
function addCoins(n) { n = Math.max(1, Math.round(n * (1 + 0.25 * shopLv('magnet')))); meta.coins += n; runCoins += n; return n; }
function addScore(pts) { score += pts; addCoins(pts / 10); }
const SHOP = {
  baton: { name: '電擊棒電池', icon: '⚡', max: 4, cost: l => 300 + l * 350, desc: l => `每關電擊次數 ${3 + l} → ${4 + l}` },
  stun: { name: '高壓電流', icon: '💫', max: 3, cost: l => 350 + l * 400, desc: l => `暈眩時間 ${4 + l} 秒 → ${5 + l} 秒` },
  reach: { name: '加長電擊棒', icon: '📏', max: 3, cost: l => 300 + l * 300, desc: l => `揮擊距離 ${(2.2 + 0.4 * l).toFixed(1)}m → ${(2.6 + 0.4 * l).toFixed(1)}m` },
  grace: { name: '請假條', icon: '📝', max: 3, cost: l => 400 + l * 450, desc: l => `被主管盯上的容忍時間 +${(0.5 * l).toFixed(1)} → +${(0.5 * l + 0.5).toFixed(1)} 秒` },
  treat: { name: '肉乾存量', icon: '🥩', max: 3, cost: l => 250 + l * 250, desc: l => `每關起始肉乾 ${2 + l} → ${3 + l}` },
  stam: { name: '運動鞋', icon: '👟', max: 3, cost: l => 300 + l * 300, desc: l => `衝刺體力恢復 +${l * 30}% → +${l * 30 + 30}%` },
  magnet: { name: '財神爺', icon: '💰', max: 3, cost: l => 500 + l * 500, desc: l => `金幣收入 +${l * 25}% → +${l * 25 + 25}%` },
  sSneak: { name: '起始裝備：靜悄悄', icon: '🐾', max: 1, cost: () => 1200, desc: () => '每次開局直接擁有「靜悄悄」Lv1' },
  sNet: { name: '起始裝備：捕獸網', icon: '🥅', max: 1, cost: () => 1200, desc: () => '每次開局直接擁有「捕獸網」Lv1' },
  sRadar: { name: '起始裝備：雷達', icon: '📡', max: 1, cost: () => 1500, desc: () => '每次開局直接擁有「雷達」Lv1' },
};
const SHOP_KEYS = Object.keys(SHOP);
let shopFrom = 'menu';
function renderShop() {
  $('shopCoins').textContent = meta.coins;
  const box = $('shopGrid'); box.innerHTML = '';
  for (const k of SHOP_KEYS) {
    const it = SHOP[k], lv = shopLv(k), maxed = lv >= it.max, cost = maxed ? 0 : it.cost(lv), can = !maxed && meta.coins >= cost;
    const el = document.createElement('div'); el.className = 'sitem' + (maxed ? ' maxed' : '');
    el.innerHTML = `<div class="sh"><span class="si">${it.icon}</span><b>${it.name}</b></div><div class="pips">${Array.from({ length: it.max }, (_, i) => `<i class="${i < lv ? 'on' : ''}"></i>`).join('')}</div><p>${maxed ? '已升至最高等級' : it.desc(lv)}</p>`;
    const b = document.createElement('button'); b.className = can ? '' : 'alt'; b.disabled = maxed;
    b.textContent = maxed ? '已滿' : `購買  💰 ${cost}`;
    b.onclick = () => buyShop(k);
    el.appendChild(b); box.appendChild(el);
  }
}
function buyShop(k) {
  const it = SHOP[k], lv = shopLv(k); if (lv >= it.max) return;
  const cost = it.cost(lv); if (meta.coins < cost) { showToast('金幣不夠！', 900); tone(200, 0.15, 'square', 0.1, 0.6); return; }
  meta.coins -= cost; meta.lv[k] = lv + 1; saveMeta(); tone(880, 0.1, 'triangle', 0.15, 1.2); tone(1320, 0.2, 'triangle', 0.15, 1.2, 0.08); renderShop();
}
function openShop(from) { shopFrom = from; hide(from); renderShop(); show('shop'); }
const MODS = {
  none: { name: '', desc: '抓到貴賓狗和八哥犬！', bonus: 1 },
  raid: { name: '突擊檢查', desc: '總部來視察，吉娃娃多了 2 隻、視線更遠！', vis: 1.15, extraChi: 2, bonus: 1.4 },
  nap: { name: '午休時間', desc: '主管昏昏欲睡，動作變慢，獎勵略少。', chiSpeed: 0.78, bonus: 0.9 },
  dark: { name: '停電', desc: '燈全滅了！只剩手電筒，主管視線也縮短。', vis: 0.8, dark: true, bonus: 1.5 },
  party: { name: '狗狗派對', desc: '貴賓狗和八哥犬各 2 隻，全部抓光才過關！', crit: 2, bonus: 1.3 },
  payday: { name: '發薪日', desc: '地上到處都是金幣，金幣收入 ×2！', coinMul: 2, coins: 12, bonus: 1 },
};
let mod = MODS.none;
function pickMod(n) { if (n <= 1 || Math.random() < 0.2) return MODS.none; return MODS[pick(['raid', 'nap', 'dark', 'party', 'payday'])]; }
function applyMod() {
  const dk = !!mod.dark;
  amb.intensity = dk ? 0.14 : 0.8; hemi.intensity = dk ? 0.1 : 0.55; dl.intensity = dk ? 0.04 : 0.35;
  headLamp.intensity = dk ? 2.1 : 0.7; headLamp.distance = dk ? 20 : 14;
  scene.fog.near = dk ? 6 : 16; scene.fog.far = dk ? 30 : 55;
  LAMP_MAT.color.setHex(dk ? 0x2b2f36 : 0xfffbe6); if (glowMesh) glowMesh.visible = !dk;
}


// ---------------------------------------------------------------- 狗狗事件：大便 / 睡覺 / 吃大便變胖
const sndSplat = () => { tone(180, 0.15, 'sawtooth', 0.2, 0.4); tone(120, 0.2, 'square', 0.14, 0.5, 0.06); };
const sndBurp = () => { tone(140, 0.35, 'sawtooth', 0.18, 0.5); tone(90, 0.3, 'square', 0.12, 0.6, 0.12); };
const sndMunch = () => { tone(260, 0.07, 'square', 0.1, 0.6); tone(220, 0.07, 'square', 0.1, 0.6, 0.12); tone(240, 0.07, 'square', 0.1, 0.6, 0.24); };
function spawnPoop(x, z, f) {
  const g = new THREE.Group(), m1 = M(0x6a4326, { flatShading: true }), m2 = M(0x7b5030, { flatShading: true });
  const a = new THREE.Mesh(new THREE.SphereGeometry(0.17, 8, 6), m1); a.scale.y = 0.45; a.position.y = 0.06; g.add(a);
  const b = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 6), m2); b.scale.y = 0.55; b.position.y = 0.16; g.add(b);
  const c = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.14, 7), m1); c.position.y = 0.27; g.add(c);
  const st = makeSprite('~', '#9acd32', 0.32); st.position.y = 0.6; g.add(st);
  g.position.set(x, f * FH + 0.01, z); scene.add(g);
  poops.push({ mesh: g, x, z, f, t: Math.random() * 6, stink: st });
}
function findPoop(d) {
  let best = null, bd = 11;
  for (const p of poops) {
    if (Math.abs(p.f * FH - d.pos.y) > 1.5 || (p.claimed && p.claimed !== d && !p.claimed.captured)) continue;
    const dist = Math.hypot(p.x - d.pos.x, p.z - d.pos.z);
    if (dist < bd && hasLOS(p.f, d.pos.x, d.pos.z, p.x, p.z)) { bd = dist; best = p; }
  }
  return best;
}
function removePoop(p) { scene.remove(p.mesh); const i = poops.indexOf(p); if (i >= 0) poops.splice(i, 1); }
function eatPoop(d) {
  const p = d.poop; if (p) removePoop(p); d.poop = null;
  d.fat++; d.size = 1 + 0.3 * d.fat; d.speedMul = 1 / (1 + 0.55 * d.fat); sndMunch(); sndBurp();
  burst(d.pos.x, d.pos.y + 0.4, d.pos.z, 0x9acd32, 14, 2, 0.6, 0.15, 1);
  if (d.fat >= 3) { d.stuck = true; d.state = 'stuck'; d.path = []; dogSpeak(d, '我…卡住了…這點小事不用問我', true); if (Math.hypot(d.pos.x - player.pos.x, d.pos.z - player.pos.z) < 18) showToast('吉娃娃吃太撐，卡住動不了了！', 1600); }
  else { d.state = 'patrol'; d.waiting = false; d.path = []; showToast(d.fat === 1 ? '吉娃娃吃了大便，變胖了！' : '吉娃娃又胖了一圈，越來越慢…', 1300); }
}
function startDigest(d) {
  d.digT = 1.2; d.stunT = 0; d.size = 1; d.stuck = false; d.path = []; sndBurp(); sndZap(); player.shake = 0.7;
  addScore(400); showToast('主管消化了！噗～牠要被傳送走了', 1400);
  burst(d.pos.x, d.pos.y + 0.5, d.pos.z, 0xb8e04a, 26, 3.6, 0.8, 0.2, 2); burst(d.pos.x, d.pos.y + 0.4, d.pos.z, 0x7fd0ff, 16, 3, 0.5, 0.16, 1);
  dogSpeak(d, '噗…', true);
}
function finishDigest(d) {
  ringFx(d.pos.x, d.pos.y, d.pos.z); const c = randomCell(cellsMain, 18, player.pos, 50);
  d.pos.set(c.x, c.l * FH, c.z); ringFx(d.pos.x, d.pos.y, d.pos.z); sndWarp(0.6);
  d.fat = 0; d.size = 1; d.sizeV = 1; d.speedMul = 1; d.stuck = false; d.state = 'patrol'; d.path = []; d.waiting = false; d.pop = 0.1; d.teleT = rand(8, 12);
}
function sleepTick(d, dt, time) {
  d.act = 'lie'; d.path = []; d.sleepT -= dt;
  const dxp = player.pos.x - d.pos.x, dzp = player.pos.z - d.pos.z, dist = Math.hypot(dxp, dzp), same = Math.abs(player.pos.y - d.pos.y) < 2.3;
  if (!d.zzz) { d.zzz = makeSprite('Z', '#9fd3ff', 0.2); d.zzz.renderOrder = 11; d.model.root.add(d.zzz); }
  const ph = (time * 0.7) % 1; d.zzz.visible = true; d.zzz.position.set(0.12 * Math.sin(time * 2), d.model.height + 0.12 + ph * 0.4, 0); d.zzz.material.opacity = 1 - ph;
  const noisy = same && (dist < 1.3 || (player.noise > 0 && dist < player.noise * 0.35));
  if (noisy || d.sleepT <= 0) { d.zzz.visible = false; d.state = 'hide'; d.actT = 0; d.fleeCd = 0; d.sleepCd = rand(12, 24); if (noisy) dogSpeak(d, '汪！？', true); }
}

// ---- 暈眩 / 電擊棒
function stunTick(d, dt, time) {
  if (d.digT > 0) {
    d.digT -= dt; d.act = 'sit'; d.path = []; d.seesPlayer = false; if (d.sprite) d.sprite.visible = false;
    if (d.digT <= 0) finishDigest(d);
    return true;
  }
  if (!(d.stunT > 0)) return false;
  d.stunT -= dt; d.act = 'lie'; d.path = []; d.seesPlayer = false; d.hop = 0; d.waiting = false;
  if (!d.stars) d.stars = [0, 1, 2].map(() => { const sp = makeSprite('★', '#ffd24a', 0.13); sp.renderOrder = 11; d.model.root.add(sp); return sp; });
  d.stars.forEach((sp, i) => { const a = time * 5 + i * 2.1; sp.visible = true; sp.position.set(Math.cos(a) * 0.16, d.model.height + 0.2, Math.sin(a) * 0.16); });
  if (d.sprite) d.sprite.visible = false;
  if (d.stunT <= 0) {
    d.stars.forEach(sp => { sp.visible = false; });
    if (d.type === 'chi') {
      d.state = 'investigate'; d.lostT = 0; const l = layerOf(player.pos.x, player.pos.z, player.pos.y);
      d.lastSeen = { x: player.pos.x, z: player.pos.z, l }; d.target = d.lastSeen; setPath(d, player.pos.x, player.pos.z, l); d.wait = 0;
      dogSpeak(d, pick(['剛剛是誰電我？', '你沒備註誰看得懂?']), true);
    } else { d.state = 'hide'; d.actT = 0; d.fleeCd = 0; }
  }
  return true;
}
const sndZap = () => { tone(1800, 0.12, 'sawtooth', 0.16, 0.2); tone(300, 0.2, 'square', 0.14, 0.4, 0.04); tone(2400, 0.08, 'square', 0.1, 0.3, 0.1); };
const sndSwing = () => tone(500, 0.12, 'triangle', 0.08, 0.3);
function zapDog(d) {
  const was = d.stunT > 0, dur = 4 + shopLv('stun');
  sndZap(); player.shake = 0.9;
  burst(d.pos.x, d.pos.y + 0.35, d.pos.z, 0x7fd0ff, 28, 4.2, 0.65, 0.22, 2); burst(d.pos.x, d.pos.y + 0.35, d.pos.z, 0xffffff, 12, 2.2, 0.4, 0.14, 0);
  if (d.type === 'chi' && d.fat > 0) { startDigest(d); }
  else if (d.type === 'chi') {
    d.stunT = dur + (was ? 2 : 0); addScore(was ? 200 : 300);
    showToast(was ? '連續電擊！主管暈更久了' : '電暈主管！快溜！', 1200);
  } else if (was) {
    capture(d); d.stunT = 0;
  } else {
    d.stunT = dur; addScore(100); d.fleeCd = 99;
    showToast(`${DOGS[d.type].name}暈了！再電一次或用網就能抓`, 1500);
  }
}
function swingBaton() {
  if (state !== 'playing' || player.hidden || player.batonCd > 0) return;
  if (player.baton <= 0) { showToast('電擊棒沒電了！下一關充電', 1000); player.batonCd = 0.5; tone(200, 0.1, 'square', 0.1, 0.5); return; }
  player.batonCd = 0.6; launcher.swing = 1; sndSwing();
  const reach = 2.2 + 0.4 * shopLv('reach'), fx = -Math.sin(player.yaw), fz = -Math.cos(player.yaw);
  let best = null, bd = 1e9;
  for (const d of dogs) {
    if (d.captured || Math.abs(d.pos.y - player.pos.y) > 1.6) continue;
    const dx = d.pos.x - player.pos.x, dz = d.pos.z - player.pos.z, dist = Math.hypot(dx, dz);
    if (dist > reach + 0.3) continue;
    if (dist > 0.8 && (dx * fx + dz * fz) / dist < 0.5) continue;
    if (!hasLOS(floorOf(player.pos.y), player.pos.x, player.pos.z, d.pos.x, d.pos.z)) continue;
    if (dist < bd) { bd = dist; best = d; }
  }
  if (!best) return;
  player.baton--; zapDog(best);
}
function spawnCoin(c) {
  const mesh = new THREE.Group();
  const coin = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.035, 18), new THREE.MeshBasicMaterial({ color: 0xffc928 })); coin.rotation.x = Math.PI / 2; mesh.add(coin);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(0.15, 0.02, 6, 18), new THREE.MeshBasicMaterial({ color: 0xfff0a0 })); mesh.add(rim);
  mesh.position.set(c.x, c.l * FH + 0.5, c.z); scene.add(mesh);
  pickups.push({ mesh, x: c.x, z: c.z, f: c.l, t: Math.random() * 6, kind: 'coin' });
}

function spawnDog(type, cell) {
  const model = makeDogModel(type);
  const d = {
    type, model, pos: new THREE.Vector3(cell.x, cell.l === 1 ? FH : 0, cell.z), heading: rand(0, Math.PI * 2), state: type === 'chi' ? 'patrol' : 'hide',
    path: [], act: 'idle', phase: Math.random() * 6, seed: Math.random() * 10, barkT: 0, hop: 0, hopMax: 0.6, wait: rand(0.5, 3), quoteT: rand(4, 10),
    teleT: rand(8, 14), lostT: 0, fat: 0, size: 1, sizeV: 1, pop: 1, speedMul: 1, stuck: false, poopT: rand(6, 13), sleepCd: rand(7, 15), dirtyT: 0, repathT: 0, hopT: rand(5, 12), fleeCd: 0, captured: false, capT: 0, actT: 0, lastSeen: null, scaleBase: 1, sprite: null,
  };
  d.model.root.position.copy(d.pos);
  scene.add(d.model.root);
  if (type === 'chi') { d.sprite = alertSprite(); d.sprite.position.y = model.height + 0.38; d.model.root.add(d.sprite); d.cone = makeCone(); }
  { const ns = nameSprite(DOGS[type].name, type === 'chi' ? '#ff6b4a' : '#ffffff'); ns.position.y = model.height + 0.12; d.model.root.add(ns); }
  dogs.push(d);
  return d;
}
function clearDogs() { for (const d of dogs) { scene.remove(d.model.root); if (d.cone) { scene.remove(d.cone); scene.remove(d.cone.userData.curtain); } } dogs = [];
  for (const p of poops) scene.remove(p.mesh); poops = [];
  for (const o of [...treatsFly, ...lures, ...pickups]) scene.remove(o.mesh); treatsFly = []; lures = []; pickups = []; clearNetFx(); for (const f of fxs) scene.remove(f.mesh); fxs = []; }
function randomCell(pool, minDist, from, tries = 60) {
  for (let i = 0; i < tries; i++) {
    const c = pick(pool); if (!from) return c;
    const dy = (c.l * FH) - from.y;
    if (Math.hypot(c.x - from.x, c.z - from.z) + Math.abs(dy) * 2 >= minDist) return c;
  }
  return pick(pool);
}

function startStage(n) {
  stage = n; stageTime = 0; seen = 0; pendingClear = false;
  clearDogs();
  mod = pickMod(n); if (window.__forceMod) mod = MODS[window.__forceMod]; applyMod();
  player.pos.set(-18.5, 0, 0.5); player.yaw = -Math.PI / 2; player.pitch = 0; player.netCd = 0;
  player.hidden = null; player.stamina = 100; player.tired = false; player.slipT = 0; player.treats = 2 + shopLv('treat'); player.baton = 3 + shopLv('baton'); player.batonCd = 0; stageSeen = false;
  const start = { x: -18.5, z: 0.5, y: 0 };
  const nChi = Math.min(CFG.CHI_MAX, CFG.CHI_BASE_COUNT + n - 1) + (mod.extraChi || 0);
  for (let i = 0; i < nChi; i++) spawnDog('chi', randomCell(cellsMain, 22, start));
  for (let i = 0; i < (mod.crit || 1); i++) { spawnDog('poo', randomCell(nooks, 9, start)); spawnDog('pug', randomCell(nooks, 9, start)); }
  const side = cellsMain.filter(c => c.z < -2.5 || c.z > 2.5);
  for (let i = 0; i < 4; i++) spawnPickup(randomCell(side, 8, start));
  for (let i = 0; i < (mod.coins || 6); i++) spawnCoin(randomCell(side, 4, start));
  radarSnap = []; radarT = 0;
  showToast(`第 ${n} 關${mod.name ? '〔' + mod.name + '〕' : ''}\n${mod.desc}小心 ${nChi} 隻吉娃娃主管`, 3600);
  updateUpsHud();
}

function resetRun() { stage = 1; score = 0; runCoins = 0; up.sneak = shopLv('sSneak'); up.net = shopLv('sNet'); up.radar = shopLv('sRadar'); CFG.SEEN_GRACE = 2.5 + 0.5 * shopLv('grace'); }

// ---------------------------------------------------------------- 視覺特效 / 提示
function showToast(msg, ms = 2000) {
  const t = $('toast'); t.textContent = msg; t.style.opacity = 1;
  clearTimeout(showToast._t); showToast._t = setTimeout(() => (t.style.opacity = 0), ms);
}
function subtitle(d, text) {
  const dx = d.pos.x - player.pos.x, dz = d.pos.z - player.pos.z, dist = Math.hypot(dx, dz);
  const dy = d.pos.y - player.pos.y;
  if (dist > 32) return 0;
  const fx = -Math.sin(player.yaw), fz = -Math.cos(player.yaw), rx = Math.cos(player.yaw), rz = -Math.sin(player.yaw);
  const ang = Math.atan2(dx * rx + dz * rz, dx * fx + dz * fz);
  const arrows = ['↑', '↗', '→', '↘', '↓', '↙', '←', '↖'];
  const arrow = arrows[((Math.round(ang / (Math.PI / 4)) % 8) + 8) % 8];
  const fl = Math.abs(dy) > 2 ? (dy > 0 ? '(樓上)' : '(樓下)') : '';
  const el = $('sub'); el.textContent = `${DOGS[d.type].name} ${arrow} ${Math.round(dist)}m${fl}：「${text}」`;
  el.style.opacity = 1; clearTimeout(subtitle._t); subtitle._t = setTimeout(() => (el.style.opacity = 0), 2300);
  return clamp(1 - dist / 28, 0, 1) * (Math.abs(dy) > 2 ? 0.5 : 1);
}
function dogSpeak(d, text, bark = true) {
  if (bark) { d.barkT = 0.9; }
  const v = subtitle(d, text);
  if (bark) sndBark(d.type, v);
  if (d.type === 'chi') say(text, v);
}
function ringFx(x, y, z, color = 0xb36bff) {
  const mesh = new THREE.Mesh(new THREE.RingGeometry(0.2, 0.35, 24), new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide, transparent: true, opacity: 0.9, depthWrite: false }));
  mesh.rotation.x = -Math.PI / 2; mesh.position.set(x, y + 0.05, z); scene.add(mesh);
  const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 2.2, 12, 1, true), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.4, side: THREE.DoubleSide, depthWrite: false }));
  beam.position.set(x, y + 1.1, z); scene.add(beam);
  fxs.push({ mesh, beam, t: 0 });
}

// ---------------------------------------------------------------- 視線 & 聽覺
function playerVis() { return player.sneaking ? CFG.SNEAK_VIS[up.sneak] : player.running ? 1.3 : 1; }
function canSee(d) {
  const dx = player.pos.x - d.pos.x, dz = player.pos.z - d.pos.z, dy = player.pos.y - d.pos.y;
  if (Math.abs(dy) > 2.3) return false;
  const dist = Math.hypot(dx, dz);
  if (player.hidden) return dist < 1.5 && hasLOS(floorOf(d.pos.y), d.pos.x, d.pos.z, player.pos.x, player.pos.z);
  const range = CFG.CHI_VISION * (mod.vis || 1) * playerVis() * (d.state === 'eat' || d.state === 'munch' ? 0.55 : 1);
  if (dist > range) return false;
  if (dist > 1.6) {
    const a = Math.atan2(dx, dz);
    if (Math.abs(angDiff(d.heading, a)) > CFG.CHI_FOV_HALF) return false;
  }
  return hasLOS(floorOf(Math.max(d.pos.y, player.pos.y)), d.pos.x, d.pos.z, player.pos.x, player.pos.z);
}
function setPath(d, tx, tz, tl) {
  const p = findPath(d.pos.x, d.pos.z, layerOf(d.pos.x, d.pos.z, d.pos.y), tx, tz, tl);
  d.path = p || []; return !!p;
}
function followPath(d, dt, speed) {
  if (d.type === 'chi') speed *= (mod.chiSpeed || 1) * d.speedMul;
  let moved = false;
  if (d.path.length) {
    const n = d.path[0], dx = n.x - d.pos.x, dz = n.z - d.pos.z, dist = Math.hypot(dx, dz);
    if (dist < 0.22) d.path.shift();
    else {
      const step = Math.min(dist, speed * dt);
      d.pos.x += dx / dist * step; d.pos.z += dz / dist * step;
      const want = Math.atan2(dx, dz);
      d.heading += angDiff(d.heading, want) * Math.min(1, dt * 10);
      moved = true;
    }
  }
  const gy = groundY(d.pos.x, d.pos.z, d.pos.y);
  d.pos.y = inRamp(d.pos.x, d.pos.z) ? gy : lerp(d.pos.y, gy, Math.min(1, dt * 12));
  return moved;
}
function pickDestination(d, minFromPlayer = 6) {
  for (let i = 0; i < 8; i++) {
    const c = randomCell(cellsMain, minFromPlayer, player.pos, 20);
    if (setPath(d, c.x, c.z, c.l)) return true;
  }
  return false;
}

// ---------------------------------------------------------------- 吉娃娃 AI
function updateChi(d, dt, time) {
  if (stunTick(d, dt, time)) return;
  const see = canSee(d);
  d.teleT -= dt; d.quoteT -= dt;
  const chaseSpeed = 4.4 + 0.25 * (stage - 1);

  if (see && d.stuck) { if (d.quoteT <= 0) { d.quoteT = rand(2, 4); dogSpeak(d, pick(CHI_Q)); } }
  else if (see) {
    if (d.poop) { d.poop.claimed = null; d.poop = null; }
    if (d.state !== 'chase') { sndAlert(); dogSpeak(d, pick(CHI_Q)); d.quoteT = rand(2, 4); }
    d.state = 'chase'; d.lostT = 0; d.lastSeen = { x: player.pos.x, z: player.pos.z, l: layerOf(player.pos.x, player.pos.z, player.pos.y) };
  }
  d.seesPlayer = see;
  if (see) { const dd = Math.hypot(player.pos.x - d.pos.x, player.pos.z - d.pos.z); d.seeRate = lerp(1.8, 0.6, clamp(dd / (CFG.CHI_VISION * playerVis()), 0, 1)); }

  // 聽覺
  if (!see && (d.state === 'patrol' || d.state === 'investigate' || d.state === 'lured') && player.noise > 0) {
    const dist = Math.hypot(player.pos.x - d.pos.x, player.pos.z - d.pos.z) + Math.abs(player.pos.y - d.pos.y) * 3;
    if (dist < player.noise && d.state !== 'investigate') {
      d.state = 'investigate'; d.target = { x: player.pos.x, z: player.pos.z, l: layerOf(player.pos.x, player.pos.z, player.pos.y) }; setPath(d, d.target.x, d.target.z, d.target.l); d.wait = 0;
    }
  }

  // 看到髒東西
  d.dirtyT -= dt;
  if (d.dirtyT <= 0) {
    d.dirtyT = 0.6;
    if ((d.state === 'patrol' || d.state === 'investigate') && !d.stuck) {
      const p = findPoop(d);
      if (p && setPath(d, p.x, p.z, p.f)) { d.state = 'clean'; d.poop = p; p.claimed = d; dogSpeak(d, pick(['哪裡這麼臭？', '誰在我的辦公室亂拉？']), false); }
    }
  }
  // 順移
  if (d.teleT <= 0 && d.state !== 'eat' && d.state !== 'lured' && !d.stuck && d.fat < 1 && d.state !== 'clean' && d.state !== 'munch') {
    d.teleT = Math.max(5, rand(9, 16) - stage);
    const pl = layerOf(player.pos.x, player.pos.z, player.pos.y);
    let dest = null;
    if (d.state === 'chase' && Math.hypot(player.pos.x - d.pos.x, player.pos.z - d.pos.z) > 16) {
      for (let i = 0; i < 40 && !dest; i++) {
        const c = pick(cellsMain);
        if (c.l !== Math.min(pl, 1)) continue;
        const dd = Math.hypot(c.x - player.pos.x, c.z - player.pos.z);
        if (dd > 7 && dd < 13 && !hasLOS(c.l, c.x, c.z, player.pos.x, player.pos.z)) dest = c;
      }
    } else if (d.state !== 'chase') dest = randomCell(cellsMain, 12, player.pos, 40);
    if (dest) {
      const vol = clamp(1 - Math.hypot(d.pos.x - player.pos.x, d.pos.z - player.pos.z) / 30, 0, 1);
      ringFx(d.pos.x, d.pos.y, d.pos.z); ringFx(dest.x, dest.l * FH, dest.z); sndWarp(vol);
      d.pos.set(dest.x, dest.l * FH, dest.z); d.path = []; d.repathT = 0;
      if (d.state !== 'chase') { d.state = 'patrol'; d.wait = rand(0.5, 1.5); }
      d.pop = 0.1;
    }
  }

  // 碰到玩家
  if (Math.abs(d.pos.y - player.pos.y) < 1.5 && Math.hypot(d.pos.x - player.pos.x, d.pos.z - player.pos.z) < 0.9 * d.sizeV && d.state === 'chase') { die('caught'); return; }

  if (d.state === 'chase') {
    d.repathT -= dt;
    if (d.repathT <= 0) {
      d.repathT = 0.4;
      const tx = see ? player.pos.x : d.lastSeen.x, tz = see ? player.pos.z : d.lastSeen.z, tl = see ? layerOf(player.pos.x, player.pos.z, player.pos.y) : d.lastSeen.l;
      setPath(d, tx, tz, tl);
    }
    followPath(d, dt, chaseSpeed); d.act = 'run';
    if (!see) {
      d.lostT += dt;
      if (d.lostT > 4.5) { d.state = 'investigate'; d.target = d.lastSeen; setPath(d, d.target.x, d.target.z, d.target.l); d.wait = 0; }
    }
    if (d.quoteT <= 0) { d.quoteT = rand(3, 5); dogSpeak(d, pick(CHI_Q)); }
  } else if (d.state === 'stuck') {
    d.act = 'idle'; d.heading += Math.sin(time * 0.6 + d.seed) * dt * 1.1;
    if (d.quoteT <= 0) { d.quoteT = rand(6, 10); dogSpeak(d, pick(['我…卡住了', '你們還不快來幫我？', '這點小事不用問我…'])); }
  } else if (d.state === 'clean') {
    if (!d.poop || !poops.includes(d.poop)) { d.state = 'patrol'; d.poop = null; d.path = []; d.waiting = false; }
    else if (d.path.length) { followPath(d, dt, 3.0); d.act = 'walk'; }
    else {
      const dd = Math.hypot(d.poop.x - d.pos.x, d.poop.z - d.pos.z);
      if (dd < 1.1) { d.state = 'munch'; d.munchT = 2.8; d.heading = Math.atan2(d.poop.x - d.pos.x, d.poop.z - d.pos.z); dogSpeak(d, '你們沒有我不行，還不感謝我。', true); }
      else if (!setPath(d, d.poop.x, d.poop.z, d.poop.f)) { d.state = 'patrol'; d.poop.claimed = null; d.poop = null; }
    }
  } else if (d.state === 'munch') {
    d.act = 'eat'; d.munchT -= dt; d.munchSnd = (d.munchSnd || 0) - dt; if (d.munchSnd <= 0) { d.munchSnd = 0.5; sndMunch(); }
    if (d.munchT <= 0) eatPoop(d);
  } else if (d.state === 'investigate') {
    if (d.path.length) { followPath(d, dt, 3.4); d.act = 'walk'; }
    else {
      d.act = 'idle'; d.wait += dt; d.heading += Math.sin(time * 2 + d.seed) * dt * 1.5;
      if (d.wait > 2.5) { d.state = 'patrol'; d.wait = 0; d.actT = 0; }
    }
  } else if (d.state === 'lured') {
    if (!d.lure || d.lure.gone) { d.state = 'patrol'; d.path = []; d.waiting = false; }
    else if (d.path.length) { followPath(d, dt, 3.2); d.act = 'walk'; }
    else { d.state = 'eat'; d.eatT = 5.5; d.heading = Math.atan2(d.lure.x - d.pos.x, d.lure.z - d.pos.z); if (Math.random() < 0.5) dogSpeak(d, pick(['先吃再說，這點小事不用問我', '這肉乾誰的？沒備註喔']), false); }
  } else if (d.state === 'eat') {
    d.act = 'eat'; d.eatT -= dt;
    if (d.eatT <= 0 || !d.lure || d.lure.gone) { if (d.lure) consumeLure(d.lure); d.state = 'patrol'; d.waiting = false; d.path = []; }
  } else { // patrol
    if (d.path.length) { followPath(d, dt, 2.0); d.act = 'walk'; d.waiting = false; }
    else {
      if (!d.waiting) { d.waiting = true; d.waitLeft = rand(2, 5); const r = Math.random(); d.pose = r < 0.4 ? 'sit' : r < 0.55 ? 'lie' : 'idle'; }
      d.act = d.pose; d.waitLeft -= dt;
      if (d.pose === 'idle') d.heading += Math.sin(time * 1.3 + d.seed) * dt * 1.2;
      if (d.waitLeft <= 0) { d.waiting = false; pickDestination(d, 5); }
    }
    if (d.quoteT <= 0) { d.quoteT = rand(5, 9); dogSpeak(d, pick(CHI_Q)); }
    d.yapT = (d.yapT ?? rand(1, 3)) - dt;
    if (d.yapT <= 0) { d.yapT = rand(1.8, 4); d.barkT = 0.45; const dd = Math.hypot(d.pos.x - player.pos.x, d.pos.z - player.pos.z); sndBark('chi', clamp(1 - dd / 26, 0, 1) * (Math.abs(d.pos.y - player.pos.y) > 2 ? 0.4 : 1)); }
  }
  if (d.sprite) {
    d.sprite.visible = d.state === 'chase' || d.state === 'investigate' || d.state === 'lured';
    d.sprite.material.map = d.state === 'chase' ? alertTex.bang : alertTex.q;
  }
}
const alertTex = (() => {
  const mk = (t, c) => { const s = makeSprite(t, c); const m = s.material.map; return m; };
  return { bang: mk('!', '#ff3b30'), q: mk('?', '#ffd24a') };
})();

// ---------------------------------------------------------------- 貴賓 / 八哥 AI
function updateCritter(d, dt, time) {
  if (stunTick(d, dt, time)) return;
  if (d.state === 'sleep') { sleepTick(d, dt, time); return; }
  const dxp = player.pos.x - d.pos.x, dzp = player.pos.z - d.pos.z, dyp = Math.abs(player.pos.y - d.pos.y);
  const dist = Math.hypot(dxp, dzp);
  d.fleeCd -= dt; d.hopT -= dt; d.quoteT -= dt;
  const fleeSpeed = d.type === 'poo' ? 5.4 : 4.2;
  if (d.hop > 0) {
    d.hop -= dt;
    const t = 1 - d.hop / d.hopMax;
    d.model.root.position.y = d.pos.y + Math.sin(Math.PI * clamp(t, 0, 1)) * 0.55;
  }
  let threatened = dyp < 2.3 && ((dist < 7 && hasLOS(floorOf(d.pos.y), d.pos.x, d.pos.z, player.pos.x, player.pos.z)) || dist < 3.2 || (player.noise > 0 && dist < player.noise * 0.6));
  if (d.state === 'eat' || d.state === 'lured') threatened = dyp < 2.3 && dist < (player.running ? 4 : 1.6);
  if (player.hidden) threatened = threatened && dist < 2;
  if (threatened && d.state !== 'flee' && d.fleeCd <= 0) {
    d.state = 'flee'; d.fleeCd = 1.5;
    for (let i = 0; i < 6; i++) { const c = randomCell(nooks, 14, player.pos, 30); if (setPath(d, c.x, c.z, c.l)) break; }
    if (Math.random() < 0.6) dogSpeak(d, pick(d.type === 'poo' ? POO_Q : PUG_Q));
    d.hop = d.hopMax;
  }
  if (d.state === 'lured') {
    if (!d.lure || d.lure.gone) { d.state = 'hide'; d.path = []; }
    else if (d.path.length) { followPath(d, dt, d.type === 'pug' ? 3.0 : 3.6); d.act = 'walk'; }
    else { d.state = 'eat'; d.eatT = d.type === 'pug' ? 8 : 5; d.heading = Math.atan2(d.lure.x - d.pos.x, d.lure.z - d.pos.z); }
  } else if (d.state === 'eat') {
    d.act = 'eat'; d.eatT -= dt;
    if (d.eatT <= 0 || !d.lure || d.lure.gone) { if (d.lure) consumeLure(d.lure); d.state = 'hide'; d.actT = 0; }
  } else if (d.state === 'poop') {
    d.act = 'sit'; d.pooT -= dt; d.heading += Math.sin(time * 25) * dt * 0.6;
    if (d.pooT <= 0) {
      spawnPoop(d.pos.x - Math.sin(d.heading) * 0.45, d.pos.z - Math.cos(d.heading) * 0.45, floorOf(d.pos.y)); d.state = 'hide'; d.actT = 0; d.poopT = rand(12, 24);
      if (dist < 14 && dyp < 2.3) showToast('八哥犬在地上留下了一坨…', 1300);
    }
  } else if (d.state === 'flee') {
    followPath(d, dt, fleeSpeed); d.act = 'run';
    if (!d.path.length) { d.state = 'hide'; d.actT = 0; d.fleeCd = 0.8; }
    if (d.hopT <= 0 && d.hop <= 0) { d.hopT = rand(2, 4); d.hop = d.hopMax; }
  } else {
    d.actT -= dt;
    if (d.type === 'poo' && d.state === 'hide') { d.sleepCd -= dt; if (d.sleepCd <= 0 && dist > 5) { d.state = 'sleep'; d.sleepT = rand(9, 17); if (dist < 14 && dyp < 2.3) showToast('小型貴賓狗睡著了…靜悄悄靠近牠！', 1500); } }
    if (d.type === 'pug' && d.state === 'hide') { d.poopT -= dt; if (d.poopT <= 0 && dist > 4) { d.state = 'poop'; d.pooT = 2.4; } }
    if (d.actT <= 0) { d.actT = rand(3, 7); d.act = pick(['sit', 'lie', 'idle', 'sit']); }
    if (d.hopT <= 0 && d.hop <= 0) { d.hopT = rand(6, 12); d.hop = d.hopMax; }
    if (d.quoteT <= 0) { d.quoteT = rand(6, 12); dogSpeak(d, pick(d.type === 'poo' ? POO_Q : PUG_Q)); }
    if (d.act === 'idle') d.heading += Math.sin(time + d.seed) * dt * 0.8;
  }
  if (d.hop <= 0) d.model.root.position.y = d.pos.y;
}

// ---------------------------------------------------------------- 捕獸網
let webTex = null, wrapTex = null;
function getWebTex() {
  if (webTex) return webTex;
  const [c, g] = cvs(256, 256);
  g.fillStyle = 'rgba(255,240,200,.15)'; g.beginPath(); g.arc(128, 128, 122, 0, 7); g.fill();
  g.save(); g.beginPath(); g.arc(128, 128, 121, 0, 7); g.clip();
  g.strokeStyle = 'rgba(255,248,228,.95)'; g.lineWidth = 2.4;
  for (let i = -256; i <= 512; i += 26) { g.beginPath(); g.moveTo(i, 0); g.lineTo(i + 256, 256); g.stroke(); g.beginPath(); g.moveTo(i, 256); g.lineTo(i + 256, 0); g.stroke(); }
  g.restore();
  g.strokeStyle = '#ffb43a'; g.lineWidth = 8; g.beginPath(); g.arc(128, 128, 121, 0, 7); g.stroke();
  return (webTex = toTex(c, false));
}
function getWrapTex() {
  if (wrapTex) return wrapTex;
  const [c, g] = cvs(64, 64);
  g.fillStyle = 'rgba(255,236,190,.16)'; g.fillRect(0, 0, 64, 64);
  g.strokeStyle = 'rgba(255,248,230,.98)'; g.lineWidth = 3.2;
  g.beginPath(); g.moveTo(0, 0); g.lineTo(64, 64); g.moveTo(0, 64); g.lineTo(64, 0); g.stroke();
  wrapTex = toTex(c, true); wrapTex.repeat.set(5, 3); return wrapTex;
}
const particleTex = (() => { const [c, g] = cvs(32, 32); const gr = g.createRadialGradient(16, 16, 0, 16, 16, 16); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.4, 'rgba(255,255,255,.7)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, 32, 32); return toTex(c, false); })();
const bursts = [], wraps = [];
function burst(x, y, z, color, n = 24, speed = 3.5, life = 0.8, size = 0.18, grav = 4) {
  const pos = new Float32Array(n * 3), vel = [];
  for (let i = 0; i < n; i++) {
    pos[i * 3] = x; pos[i * 3 + 1] = y; pos[i * 3 + 2] = z;
    const a = Math.random() * 6.283, e = Math.random() * 1.3 - 0.2, sp = speed * (0.4 + Math.random() * 0.8);
    vel.push(Math.cos(a) * Math.cos(e) * sp, Math.sin(e) * sp + 1, Math.sin(a) * Math.cos(e) * sp);
  }
  const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const mat = new THREE.PointsMaterial({ map: particleTex, color, size, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });
  const pts = new THREE.Points(geo, mat); pts.frustumCulled = false; scene.add(pts);
  bursts.push({ pts, pos, vel, t: 0, life, grav, n, mat, geo });
}
function updateBursts(dt) {
  for (let i = bursts.length - 1; i >= 0; i--) {
    const b = bursts[i]; b.t += dt;
    for (let j = 0; j < b.n; j++) { b.vel[j * 3 + 1] -= b.grav * dt; b.pos[j * 3] += b.vel[j * 3] * dt; b.pos[j * 3 + 1] += b.vel[j * 3 + 1] * dt; b.pos[j * 3 + 2] += b.vel[j * 3 + 2] * dt; }
    b.geo.attributes.position.needsUpdate = true; b.mat.opacity = Math.max(0, 1 - b.t / b.life);
    if (b.t >= b.life) { scene.remove(b.pts); b.geo.dispose(); b.mat.dispose(); bursts.splice(i, 1); }
  }
}
function clearNetFx() {
  for (const n of nets) { scene.remove(n.mesh); n.web.material.dispose(); } nets = [];
  for (const b of bursts) { scene.remove(b.pts); b.geo.dispose(); b.mat.dispose(); } bursts.length = 0;
  for (const w of wraps) { scene.remove(w.mesh); w.mesh.material.dispose(); } wraps.length = 0;
}
const webGeo = new THREE.CircleGeometry(1, 28), weightGeo = new THREE.SphereGeometry(0.075, 8, 6), ballGeo = new THREE.SphereGeometry(0.1, 10, 8), wrapGeo = new THREE.SphereGeometry(1, 18, 12);
const weightMat = M(0xffb43a), ballMat = M(0xe6d6a8);
function makeNet() {
  const grp = new THREE.Group();
  const web = new THREE.Mesh(webGeo, new THREE.MeshBasicMaterial({ map: getWebTex(), transparent: true, side: THREE.DoubleSide, depthWrite: false }));
  for (let i = 0; i < 8; i++) { const a = i / 8 * Math.PI * 2, w = new THREE.Mesh(weightGeo, weightMat); w.position.set(Math.cos(a), Math.sin(a), 0); web.add(w); }
  const ball = new THREE.Mesh(ballGeo, ballMat);
  grp.add(web, ball); web.scale.setScalar(0.12);
  return { grp, web, ball };
}
const NET_G = 3.5;
// 輔助瞄準：視角 ~26° 內最近的貴賓/八哥
function aimInfo() {
  const lvl = up.net;
  const eye = new THREE.Vector3(player.pos.x, player.pos.y + player.eye, player.pos.z);
  const dir = new THREE.Vector3(0, 0, -1).applyEuler(new THREE.Euler(player.pitch, player.yaw, 0, 'YXZ'));
  let best = null, bd = 1e9;
  for (const d of dogs) {
    if (d.captured || d.type === 'chi') continue;
    const tgt = new THREE.Vector3(d.pos.x, d.pos.y + 0.3, d.pos.z).sub(eye), dd = tgt.length();
    if (dd > 10 + 2 * lvl || dd < 0.3) continue;
    if (tgt.clone().normalize().angleTo(dir) > 0.45) continue;
    if (Math.abs(d.pos.y - player.pos.y) > 2.3 || !hasLOS(floorOf(player.pos.y), player.pos.x, player.pos.z, d.pos.x, d.pos.z)) continue;
    if (dd < bd) { bd = dd; best = d; }
  }
  return { eye, dir, target: best, dist: bd };
}
function throwNet() {
  if (player.netCd > 0 || state !== 'playing' || player.hidden) return;
  const lvl = up.net;
  player.netCd = Math.max(0.7, 1.8 - 0.4 * lvl);
  sndNet(); launcher.kick = 1;
  const a = aimInfo(), speed = 15 + 2 * lvl;
  const right = new THREE.Vector3(Math.cos(player.yaw), 0, -Math.sin(player.yaw));
  const origin = a.eye.clone().addScaledVector(right, 0.2).addScaledVector(a.dir, 0.55); origin.y -= 0.18;
  let aimPt;
  if (a.target) { aimPt = new THREE.Vector3(a.target.pos.x, a.target.pos.y + 0.3, a.target.pos.z); aimPt.y += 0.5 * NET_G * (a.dist / speed) ** 2; }
  else aimPt = a.eye.clone().addScaledVector(a.dir, 20);
  const dir = aimPt.sub(origin).normalize();
  const net = makeNet(); net.grp.position.copy(origin); scene.add(net.grp);
  nets.push({ mesh: net.grp, web: net.web, ball: net.ball, pos: net.grp.position, vel: dir.multiplyScalar(speed), range: 9 + 2.5 * lvl, dist: 0, landed: false, t: 0, f: floorOf(player.pos.y), landR: 1.5 + 0.35 * lvl, s: 0.12, s0: 0.12, endS: 1, trailT: 0 });
  burst(origin.x, origin.y, origin.z, 0xfff0c0, 10, 2.4, 0.35, 0.13, 0);
}
function netTryCatch(n, radius, ground) {
  for (const d of dogs) {
    if (d.captured) continue;
    if (Math.abs(d.pos.y - (ground ? n.pos.y : d.pos.y)) > 2.5) continue;
    const dx = d.pos.x - n.pos.x, dz = d.pos.z - n.pos.z, dy = (d.pos.y + 0.3) - n.pos.y;
    const dist = ground ? Math.hypot(dx, dz) : Math.sqrt(dx * dx + dz * dz + dy * dy);
    if (ground && Math.abs(d.pos.y - n.pos.y) > 1.2) continue;
    if (dist < radius) {
      if (d.type === 'chi') { // 網到主管 = 激怒
        d.state = 'chase'; d.lostT = 0; d.lastSeen = { x: player.pos.x, z: player.pos.z, l: layerOf(player.pos.x, player.pos.z, player.pos.y) };
        seen = Math.min(CFG.SEEN_GRACE * 0.9, seen + CFG.SEEN_GRACE * 0.6); dogSpeak(d, '送請購單阿！'); sndAlert();
        showToast('你把網丟到主管身上了！！', 1500);
      } else { capture(d); }
      return d;
    }
  }
  return null;
}
const CAP_T = 1.05;
function capture(d) {
  const sneak = d.state === 'hide' || d.state === 'eat' || d.state === 'lured' || d.state === 'sleep' || d.stunT > 0;
  d.captured = true; d.capT = CAP_T; d.popped = false; sndCatch();
  const bb = new THREE.Box3().setFromObject(d.model.root), sz = bb.getSize(new THREE.Vector3()), c = bb.getCenter(new THREE.Vector3());
  const r = Math.max(0.3, Math.max(sz.x, sz.z) * 0.6, sz.y * 0.56);
  const mesh = new THREE.Mesh(wrapGeo, new THREE.MeshBasicMaterial({ map: getWrapTex(), transparent: true, side: THREE.DoubleSide, depthWrite: false }));
  mesh.position.copy(c); mesh.scale.setScalar(r * 2.6); scene.add(mesh);
  d.wrap = { mesh, r, cy: c.y - d.pos.y };
  wraps.push(d.wrap);
  const pts = 1000 * stage + (sneak ? 500 : 0);
  addScore(pts); if (d.stars) d.stars.forEach(sp => { sp.visible = false; }); if (d.zzz) d.zzz.visible = false;
  showToast(`捕獲 ${DOGS[d.type].name}！ +${pts}${sneak ? '\n偷襲成功 +500' : ''}`, 1900);
}
function updateCaptured(d, dt) {
  d.capT -= dt;
  const k = 1 - d.capT / CAP_T, w = d.wrap, root = d.model.root;
  if (k < 0.45) {                      // 網罩下來、掙扎
    const e = k / 0.45;
    w.mesh.scale.setScalar(w.r * lerp(2.6, 1.15, 1 - (1 - e) * (1 - e)));
    w.mesh.position.set(d.pos.x, d.pos.y + w.cy, d.pos.z);
    root.rotation.z = Math.sin(k * 70) * 0.22 * e; root.position.y = d.pos.y + Math.abs(Math.sin(k * 40)) * 0.05 * e;
  } else {                             // 收網、縮小飛走
    if (!d.popped) { d.popped = true; burst(d.pos.x, d.pos.y + w.cy, d.pos.z, 0xffd24a, 30, 4.2, 0.95, 0.24, 3); burst(d.pos.x, d.pos.y + w.cy, d.pos.z, 0xffffff, 14, 2.4, 0.7, 0.16, 1); tone(1000, 0.18, 'triangle', 0.15, 1.8); }
    const kk = (k - 0.45) / 0.55, s = Math.max(0.01, 1 - kk * kk);
    root.scale.setScalar(s); root.rotation.y += dt * 14; root.rotation.z = 0; root.position.y = d.pos.y + kk * 1.2;
    w.mesh.scale.setScalar(w.r * 1.15 * s); w.mesh.position.set(d.pos.x, d.pos.y + w.cy + kk * 1.2, d.pos.z); w.mesh.material.opacity = 1 - kk;
  }
  if (d.capT <= 0) { scene.remove(w.mesh); w.mesh.material.dispose(); const i = wraps.indexOf(w); if (i >= 0) wraps.splice(i, 1); }
}

// ---- 手上的捕獸網發射器 (第一人稱)
const launcher = new THREE.Group(); launcher.kick = 0;
const launcherBall = (() => {
  const mk = (c) => { const m = new THREE.MeshLambertMaterial({ color: c, depthTest: false }); return m; };
  const dark = mk(0x353c47), orange = mk(0xff7a2f), steel = mk(0xb4bdc9), cream = mk(0xe6d6a8);
  const parts = [];
  const add = (geo, mat, x, y, z, rx = 0, rz = 0) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.rotation.x = rx; m.rotation.z = rz; m.renderOrder = 999; launcher.add(m); parts.push(m); return m; };
  add(new THREE.CylinderGeometry(0.04, 0.046, 0.46, 12), dark, 0, 0, 0, Math.PI / 2);
  add(new THREE.CylinderGeometry(0.085, 0.052, 0.14, 14, 1, true), steel, 0, 0, -0.29, Math.PI / 2).material.side = THREE.DoubleSide;
  add(new THREE.TorusGeometry(0.052, 0.013, 6, 16), orange, 0, 0, -0.13);
  add(new THREE.TorusGeometry(0.05, 0.011, 6, 16), orange, 0, 0, 0.1);
  add(new THREE.BoxGeometry(0.045, 0.13, 0.055), dark, 0, -0.1, 0.06, 0.25);
  add(new THREE.BoxGeometry(0.03, 0.05, 0.09), steel, 0, 0.055, 0.0);
  const ball = add(new THREE.SphereGeometry(0.058, 10, 8), cream, 0, 0, -0.28);
  launcher.position.set(0.27, -0.25, -0.55); launcher.rotation.y = 0.1;
  camera.add(launcher);
  return ball;
})();
const batonG = new THREE.Group(); batonG.visible = false;
(function () {
  const mk = c => new THREE.MeshLambertMaterial({ color: c, depthTest: false }), mb = c => new THREE.MeshBasicMaterial({ color: c, depthTest: false });
  const add = (geo, mat, y) => { const m = new THREE.Mesh(geo, mat); m.position.y = y; m.renderOrder = 999; batonG.add(m); return m; };
  add(new THREE.CylinderGeometry(0.022, 0.026, 0.3, 10), mk(0x2f353f), 0);
  add(new THREE.CylinderGeometry(0.028, 0.028, 0.08, 10), mk(0xff7a2f), -0.06);
  add(new THREE.CylinderGeometry(0.034, 0.034, 0.22, 10), mb(0x7fd0ff), 0.25);
  add(new THREE.SphereGeometry(0.04, 10, 8), mb(0xe6fbff), 0.37);
  camera.add(batonG);
})();
function updateLauncher(dt) {
  launcher.swing = Math.max(0, (launcher.swing || 0) - dt * 3.2);
  const sw = launcher.swing, t = 1 - sw;
  batonG.visible = sw > 0 && state === 'playing';
  if (batonG.visible) { batonG.position.set(0.5 - t * 0.85, -0.3 + Math.sin(t * Math.PI) * 0.1, -0.5 - Math.sin(t * Math.PI) * 0.2); batonG.rotation.set(-1.25, 0, -1.0 + t * 2.1); }
  launcher.visible = state === 'playing' && !player.hidden && sw <= 0;
  launcher.kick = Math.max(0, launcher.kick - dt * 5);
  const sway = player.moving ? Math.sin(player.bob) * 0.012 : 0;
  launcher.position.set(0.27 + sway * 0.5, -0.25 + Math.abs(sway), -0.55 + launcher.kick * 0.12);
  launcher.rotation.x = launcher.kick * 0.3; launcherBall.visible = player.netCd <= 0.05;
}

// ---------------------------------------------------------------- 肉乾誘餌
function jerkyMesh() {
  const g = new THREE.Group();
  const m = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.05, 0.09), M(0x8a3f1c)); m.rotation.y = 0.4; g.add(m);
  const m2 = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.04, 0.07), M(0xa5532a)); m2.position.set(0.03, 0.04, 0.02); m2.rotation.y = -0.3; g.add(m2);
  return g;
}
function spawnPickup(c) {
  const mesh = new THREE.Group();
  const bag = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.4, 0.14), new THREE.MeshBasicMaterial({ color: 0xffa53a })); mesh.add(bag);
  const lab = new THREE.Mesh(new THREE.PlaneGeometry(0.28, 0.16), new THREE.MeshBasicMaterial({ map: textTex('肉乾', 128, 72, '#fff', '#b03a1a', 'bold 46px sans-serif') }));
  lab.position.z = 0.071; mesh.add(lab);
  mesh.position.set(c.x, c.l * FH + 0.45, c.z); scene.add(mesh);
  pickups.push({ mesh, x: c.x, z: c.z, f: c.l, t: Math.random() * 6 });
}
function throwTreat() {
  if (state !== 'playing' || player.hidden) return;
  if (player.treats <= 0) { showToast('沒有肉乾了！去辦公室找橘色袋子', 1300); return; }
  player.treats--;
  const origin = new THREE.Vector3(player.pos.x, player.pos.y + player.eye - 0.2, player.pos.z);
  const dir = new THREE.Vector3(0, 0, -1).applyEuler(new THREE.Euler(player.pitch, player.yaw, 0, 'YXZ'));
  const mesh = jerkyMesh(); mesh.position.copy(origin).addScaledVector(dir, 0.5); scene.add(mesh);
  treatsFly.push({ mesh, pos: mesh.position, vel: dir.multiplyScalar(10).add(new THREE.Vector3(0, 3, 0)), f: floorOf(player.pos.y) });
  tone(500, 0.15, 'triangle', 0.12, 1.6);
}
function landTreat(t) {
  const L = { mesh: t.mesh, x: t.pos.x, z: t.pos.z, y: t.pos.y, f: t.f, life: 14, gone: false };
  lures.push(L); tone(260, 0.12, 'square', 0.1, 0.6);
  for (const d of dogs) {
    if (d.captured || Math.abs(d.pos.y - L.y) > 2.3) continue;
    const dist = Math.hypot(d.pos.x - L.x, d.pos.z - L.z);
    const ok = d.type === 'chi' ? (dist < 14 && d.state !== 'chase' && d.state !== 'eat') :
      d.type === 'pug' ? (dist < 18 && d.state !== 'eat') : (dist < 10 && d.state === 'hide' && Math.random() < 0.7);
    if (!ok) continue;
    if (setPath(d, L.x, L.z, layerOf(L.x, L.z, L.y))) { d.state = 'lured'; d.lure = L; }
  }
}
function consumeLure(L) { if (L.gone) return; L.gone = true; scene.remove(L.mesh); lures = lures.filter(x => x !== L); }
function updateTreats(dt, time) {
  for (let i = treatsFly.length - 1; i >= 0; i--) {
    const t = treatsFly[i];
    t.vel.y -= 9 * dt; t.pos.addScaledVector(t.vel, dt); t.mesh.rotation.x += dt * 9;
    const gy = groundY(t.pos.x, t.pos.z, t.f * FH);
    let wall = false; for (const b of sightBoxes[t.f]) if (t.pos.x > b.x1 && t.pos.x < b.x2 && t.pos.z > b.z1 && t.pos.z < b.z2) { wall = true; break; }
    if (wall) { t.pos.addScaledVector(t.vel, -dt * 1.5); t.vel.x *= -0.2; t.vel.z *= -0.2; }
    if (t.pos.y <= gy + 0.03) { t.pos.y = gy + 0.03; t.mesh.rotation.set(0, Math.random() * 6, 0); treatsFly.splice(i, 1); landTreat(t); }
  }
  for (const L of [...lures]) { L.life -= dt; if (L.life <= 0) consumeLure(L); }
  for (let i = pickups.length - 1; i >= 0; i--) {
    const p = pickups[i]; p.t += dt; p.mesh.rotation.y += dt * 1.5; p.mesh.position.y = p.f * FH + (p.kind === 'coin' ? 0.55 : 0.45) + Math.sin(p.t * 3) * 0.08;
    if (Math.abs(player.pos.y - p.f * FH) < 1.5 && Math.hypot(player.pos.x - p.x, player.pos.z - p.z) < 1.0) {
      scene.remove(p.mesh); pickups.splice(i, 1);
      if (p.kind === 'coin') { const n = addCoins((40 + 10 * stage) * (mod.coinMul || 1)); tone(1200, 0.08, 'square', 0.1, 1.4); tone(1700, 0.12, 'square', 0.1, 1.2, 0.07); showToast(`+${n} 金幣`, 700); }
      else { player.treats++; tone(880, 0.1, 'triangle', 0.12, 1.3); showToast('撿到肉乾！(按 Q 丟出去引開狗)', 1300); }
    }
  }
}

// ---------------------------------------------------------------- 躲藏
function nearestHide() {
  let best = null, bd = 1.5;
  for (const h of hideSpots) {
    if (Math.abs(h.f * FH - player.pos.y) > 1) continue;
    const dd = Math.hypot(h.x - player.pos.x, h.z - player.pos.z);
    if (dd < bd) { bd = dd; best = h; }
  }
  return best;
}
function toggleHide() {
  if (state !== 'playing') return;
  if (player.hidden) { player.pos.copy(player.hideFrom); player.hidden = null; return; }
  const h = nearestHide(); if (!h) return;
  player.hideFrom = player.pos.clone(); player.hidden = h; player.pos.set(h.x, h.f * FH, h.z);
  showToast(h.type === 'desk' ? '躲到桌子底下…別出聲' : '躲進廁所隔間…', 1100);
}

// ---------------------------------------------------------------- 視線扇形(畫在地上)
const CONE_N = 24;
const curtainTex = (() => { const [c, g] = cvs(4, 64); const gr = g.createLinearGradient(0, 64, 0, 0); gr.addColorStop(0, 'rgba(255,255,255,.95)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, 4, 64); return toTex(c, false); })();
function makeCone() {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(new Float32Array((CONE_N + 2) * 3), 3));
  const idx = []; for (let i = 0; i < CONE_N; i++) idx.push(0, i + 1, i + 2); g.setIndex(idx);
  const m = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ color: 0xff8a3a, transparent: true, opacity: 0.14, depthWrite: false, side: THREE.DoubleSide }));
  m.frustumCulled = false; m.renderOrder = 2; scene.add(m);
  // 垂直光幕：站著也看得清楚視線範圍
  const cols = CONE_N + 3, cg = new THREE.BufferGeometry(), uv = [], ci = [];
  cg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(cols * 2 * 3), 3));
  for (let c = 0; c < cols; c++) uv.push(c / (cols - 1), 0, c / (cols - 1), 1);
  for (let c = 0; c < cols - 1; c++) { const a = c * 2, b = a + 1, a2 = a + 2, b2 = a + 3; ci.push(a, a2, b, b, a2, b2); }
  cg.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); cg.setIndex(ci);
  const cm = new THREE.Mesh(cg, new THREE.MeshBasicMaterial({ map: curtainTex, color: 0xff8a3a, transparent: true, opacity: 0.5, depthWrite: false, side: THREE.DoubleSide }));
  cm.frustumCulled = false; cm.renderOrder = 2; scene.add(cm); m.userData.curtain = cm;
  return m;
}
function rayDist(f, ox, oz, dx, dz, maxD) {
  let best = maxD;
  for (const b of sightBoxes[f]) {
    let t0 = 0, t1 = best;
    if (Math.abs(dx) < 1e-9) { if (ox < b.x1 || ox > b.x2) continue; }
    else { let a = (b.x1 - ox) / dx, c = (b.x2 - ox) / dx; if (a > c) [a, c] = [c, a]; t0 = Math.max(t0, a); t1 = Math.min(t1, c); if (t0 > t1) continue; }
    if (Math.abs(dz) < 1e-9) { if (oz < b.z1 || oz > b.z2) continue; }
    else { let a = (b.z1 - oz) / dz, c = (b.z2 - oz) / dz; if (a > c) [a, c] = [c, a]; t0 = Math.max(t0, a); t1 = Math.min(t1, c); if (t0 > t1) continue; }
    if (t0 < best) best = t0;
  }
  return best;
}
function updateCone(d) {
  const m = d.cone; if (!m) return;
  const show = Math.abs(d.pos.y - player.pos.y) < 2.3 && Math.hypot(d.pos.x - player.pos.x, d.pos.z - player.pos.z) < 34;
  const blind = d.stunT > 0 || d.digT > 0, cm = m.userData.curtain;
  m.visible = show && !blind; cm.visible = m.visible; if (!m.visible) return;
  const f = floorOf(d.pos.y), R = CFG.CHI_VISION * (player.hidden ? 1 : playerVis()) * (d.state === 'eat' || d.state === 'munch' ? 0.55 : 1) * (mod.vis || 1);
  const a = m.geometry.attributes.position.array, y = d.pos.y + 0.035;
  a[0] = d.pos.x; a[1] = y; a[2] = d.pos.z;
  for (let i = 0; i <= CONE_N; i++) {
    const ang = d.heading - CFG.CHI_FOV_HALF + 2 * CFG.CHI_FOV_HALF * i / CONE_N, dx = Math.sin(ang), dz = Math.cos(ang);
    const t = rayDist(f, d.pos.x, d.pos.z, dx, dz, R);
    a[(i + 1) * 3] = d.pos.x + dx * t; a[(i + 1) * 3 + 1] = y; a[(i + 1) * 3 + 2] = d.pos.z + dz * t;
  }
  m.geometry.attributes.position.needsUpdate = true;
  const ca = cm.geometry.attributes.position.array, CH = 1.15; let k = 0;
  const put2 = (x, z) => { ca[k++] = x; ca[k++] = y; ca[k++] = z; ca[k++] = x; ca[k++] = y + CH; ca[k++] = z; };
  put2(d.pos.x, d.pos.z);
  for (let i = 0; i <= CONE_N; i++) put2(a[(i + 1) * 3], a[(i + 1) * 3 + 2]);
  put2(d.pos.x, d.pos.z);
  cm.geometry.attributes.position.needsUpdate = true;
  const mm = m.material;
  if (d.state === 'chase') { mm.color.setHex(0xff2a1a); mm.opacity = 0.38; }
  else if (d.state === 'investigate' || d.state === 'lured') { mm.color.setHex(0xffd24a); mm.opacity = 0.28; }
  else if (d.state === 'eat') { mm.color.setHex(0x7ad0ff); mm.opacity = 0.12; }
  else if (d.state === 'stuck') { mm.color.setHex(0xff4a8a); mm.opacity = 0.3; }
  else { mm.color.setHex(0xff9a3a); mm.opacity = 0.24; }
  cm.material.color.copy(mm.color); cm.material.opacity = d.state === 'chase' ? 0.62 : d.state === 'eat' || d.state === 'munch' ? 0.22 : 0.42;
}

// ---------------------------------------------------------------- 升級
const UPG = {
  sneak: { name: '靜悄悄地走', icon: '🐾', desc: l => ['解鎖 C 鍵潛行：走路聲極小、吉娃娃視線距離縮短至 55%', '潛行更快、聲音更小、視線距離 45%', '潛行接近正常速度、幾乎無聲、視線距離 35%'][l] },
  net: { name: '捕獸網', icon: '🥅', desc: l => ['射程 +2.5m、冷卻 -0.4 秒、網更大更快', '射程再 +2.5m、冷卻更短', '最大射程與落地範圍、冷卻 0.7 秒'][l] },
  radar: { name: '雷達', icon: '📡', desc: l => ['顯示 20m 內吉娃娃位置(每 2 秒更新)', '範圍 32m、每 1 秒更新', '範圍 50m、每 0.4 秒更新，幾乎即時'][l] },
};
const UPK = ['sneak', 'net', 'radar'];
function openUpgrade() {
  if (UPK.every(k => up[k] >= CFG.UP_MAX)) { addScore(500); showToast('已全部升滿！額外 +500', 1500); afterUpgrade(); return; }
  state = 'upgrade'; exitLock(); saveMeta(); resetTouch();
  const box = $('upCards'); box.innerHTML = '';
  UPK.forEach((k, i) => {
    const u = UPG[k], lv = up[k], max = lv >= CFG.UP_MAX;
    const el = document.createElement('div'); el.className = 'card' + (max ? ' max' : '');
    el.innerHTML = `<h3>${i + 1}. ${u.icon} ${u.name}</h3><div class="lv">Lv ${lv} ${max ? '(已滿)' : '→ Lv ' + (lv + 1)}</div><p>${max ? '已升至最高等級' : u.desc(lv)}</p>`;
    el.onclick = () => chooseUpgrade(k);
    box.appendChild(el);
  });
  show('upgrade');
}
function chooseUpgrade(k) {
  if (state !== 'upgrade' || up[k] >= CFG.UP_MAX) return;
  up[k]++; hide('upgrade'); updateUpsHud(); showToast(`${UPG[k].name} 升到 Lv ${up[k]}`, 1500);
  afterUpgrade();
}
function afterUpgrade() {
  const left = dogs.filter(d => d.type !== 'chi' && !d.captured).length;
  if (left === 0) stageClear(); else resume();
}
function updateUpsHud() {
  $('ups').innerHTML = UPK.map(k => `${UPG[k].icon} ${UPG[k].name} Lv${up[k]}`).join('<br>');
  $('radarTxt').textContent = up.radar ? `雷達 Lv${up.radar}　範圍 ${CFG.RADAR_R[up.radar]}m` : '雷達：未取得';
}

// ---------------------------------------------------------------- 流程 (開始/死亡/過關)
function exitLock() { try { if (document.exitPointerLock) document.exitPointerLock(); } catch (e) { /* iOS Safari 沒有 Pointer Lock */ } }
const show = id => $(id).classList.add('show'), hide = id => $(id).classList.remove('show');
function lockPointer() { if (debugNoLock || touchMode) return; try { const p = canvas.requestPointerLock(); if (p && p.catch) p.catch(() => {}); } catch (e) { /* ignore */ } }
function resume() { state = 'playing'; hide('pause'); $('hud').classList.add('show'); lockPointer(); }
function startGame(noLock) {
  debugNoLock = !!noLock; resetTouch();
  playerName = ($('nameIn').value || '').trim() || '捕獸員';
  try { localStorage.setItem(NAME_KEY, playerName); } catch (e) { /* ignore */ }
  settings.voice = $('voiceCk').checked;
  ac(); resetRun(); hide('menu'); hide('dead'); hide('clear'); hide('lbOv');
  startStage(1); resume();
}
function stageClear() {
  state = 'clear'; exitLock(); resetTouch();
  const timeBonus = Math.max(0, Math.round((240 - stageTime) * 10)), base = 2000 * stage;
  const perfect = !stageSeen, total = Math.round((base + timeBonus) * (perfect ? 1.5 : 1) * (mod.bonus || 1));
  addScore(total); if (score > meta.best) meta.best = score; saveMeta();
  $('clearTxt').textContent = `過關獎勵 +${base}　速度獎勵 +${timeBonus}（用時 ${stageTime.toFixed(0)} 秒）${perfect ? '　完美潛行 ×1.5！' : ''}　${mod.name ? `　〔${mod.name}〕×${mod.bonus}` : ''}　本關 +${total}　目前分數 ${score}`;
  $('clearCoins').textContent = `本次累計金幣 ${runCoins}　（持有 ${meta.coins}）`;
  show('clear');
}
const DEAD_Q = {
  seen: ['你在幹什麼，主管都看在眼裡', '我都不知道你們在幹什麼', '你沒備註誰看得懂?'],
  caught: ['送請購單阿！', '你們要懂向上管理', '這點小事不用問我'],
};
function die(reason) {
  if (state !== 'playing') return;
  state = 'dead'; show('dead');
  try { exitLock(); sndDie(); resetTouch(); } catch (e) { reportErr(e + '', 'die'); }
  $('vig').style.opacity = 0;
  $('deadQuote').textContent = '吉娃娃主管：「' + pick(DEAD_Q[reason] || DEAD_Q.seen) + '」';
  try { saveScore(); if (score > meta.best) meta.best = score; saveMeta(); } catch (e) { reportErr(e + '', 'save'); }
  $('deadCoins').textContent = `本局賺到 ${runCoins} 金幣（持有 ${meta.coins}）`;
  $('deadScore').textContent = `${playerName}　抵達第 ${stage} 關　總分 ${score}`;
  show('dead');
  try { showLb($('deadLb'), playerName, { name: playerName, score, stage }); } catch (e) { reportErr(e + '', 'lb'); }
  try { const q = $('deadQuote').textContent; say(q.replace(/^.*「|」$/g, ''), 1); } catch (e) { reportErr(e + '', 'say'); }
}
// ---------------------------------------------------------------- 排行榜
function loadLb() { try { return JSON.parse(localStorage.getItem(LB_KEY)) || []; } catch (e) { return []; } }
function saveScore() {
  const lb = loadLb(), entry = { name: playerName, score, stage, t: Date.now() };
  lb.push(entry); lb.sort((a, b) => b.score - a.score || a.t - b.t);
  const top = lb.slice(0, 50);
  try { localStorage.setItem(LB_KEY, JSON.stringify(top)); } catch (e) { /* ignore */ }
  lastRank = top.findIndex(e => e.t === entry.t);
}
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
let netLb = null, netLbOk = false;
function lbTable(hl = -1, list = null) {
  const lb = (list || loadLb()).slice(0, 10), tag = list ? '🌐 全公司排行榜' : '📱 本機排行榜（連線失敗，僅顯示這台裝置的紀錄）';
  if (!lb.length) return '<p class="sub">還沒有紀錄，快去抓狗！</p>';
  return `<p class="sub" style="margin:0 0 6px">${tag}</p><table><tr><th>#</th><th>名字</th><th>分數</th><th>關卡</th><th>日期</th></tr>` + lb.map((e, i) =>
    `<tr class="${i === hl ? 'me' : ''}"><td>${i + 1}</td><td>${esc(e.name)}</td><td>${e.score}</td><td>${e.stage}</td><td>${new Date(e.t).toLocaleDateString()}</td></tr>`).join('') + '</table>';
}
// 共用排行榜（Netlify Function /api/scores）；失敗時退回本機榜
async function fetchNetLb(post) {
  const ctl = new AbortController(), to = setTimeout(() => ctl.abort(), 6000);
  try {
    const r = await fetch('/api/scores', post ? { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(post), signal: ctl.signal } : { signal: ctl.signal });
    if (!r.ok) throw new Error(r.status);
    const j = await r.json(); netLb = j.top; netLbOk = true; return j;
  } catch (e) { netLbOk = false; return null; } finally { clearTimeout(to); }
}
async function showLb(el, hlName = null, post = null) {
  el.innerHTML = lbTable(-1) + '<p class="sub">連線中…</p>';
  const j = await fetchNetLb(post);
  if (!j) { el.innerHTML = lbTable(post ? lastRank : -1); return; }
  const hl = hlName ? j.top.findIndex(e => e.name === hlName && e.score === post.score) : -1;
  el.innerHTML = lbTable(hl, j.top) + (post && j.rank > 10 ? `<p class="sub">你的最佳名次：第 ${j.rank} 名</p>` : '');
}

// ---------------------------------------------------------------- 玩家更新
function roomName(x, z, f) {
  if (inRamp(x, z)) return '樓梯';
  let n;
  if (z > -2 && z < 2) n = '走廊';
  else if (z < -2) n = x < -4 ? '辦公室 A' : x < 8 ? '廁所' : '辦公室 B';
  else n = x < -6 ? '會議室' : x < 6 ? '樓梯間' : '辦公室 D';
  return (f === 0 ? '1F ' : '2F ') + n;
}
function updatePlayer(dt) {
  if (player.hidden) {
    player.moving = player.running = player.sneaking = false; player.noise = 0;
    player.stamina = Math.min(100, player.stamina + dt * 20);
    player.eye = lerp(player.eye, player.hidden.type === 'desk' ? 0.5 : 1.0, Math.min(1, dt * 10));
  } else {
    let fwd = (keys.KeyW || keys.ArrowUp ? 1 : 0) - (keys.KeyS || keys.ArrowDown ? 1 : 0);
    let str = (keys.KeyD || keys.ArrowRight ? 1 : 0) - (keys.KeyA || keys.ArrowLeft ? 1 : 0);
    if (touchMode) { fwd += TS.y; str += TS.x; const l = Math.hypot(fwd, str); if (l > 1) { fwd /= l; str /= l; } }
    player.moving = fwd !== 0 || str !== 0;
    player.sneaking = !!(keys.KeyC || keys.ControlLeft || TS.sneak) && up.sneak > 0;
    if (player.stamina <= 0) player.tired = true; else if (player.stamina > 35) player.tired = false;
    player.running = !!(keys.ShiftLeft || keys.ShiftRight || TS.run || TS.mag > 0.93) && !player.sneaking && player.moving && !player.tired;
    player.stamina = clamp(player.stamina + (player.running ? -22 : 14 * (1 + 0.3 * shopLv('stam'))) * dt, 0, 100);
    const speed = (player.sneaking ? CFG.SNEAK_SPEED[up.sneak] : player.running ? CFG.RUN : CFG.WALK) * (touchMode && !player.running ? 0.65 + 0.35 * Math.min(1, TS.mag / 0.8) : 1);
    if (player.moving) {
      const fx = -Math.sin(player.yaw), fz = -Math.cos(player.yaw), rx = Math.cos(player.yaw), rz = -Math.sin(player.yaw);
      const mx = fx * fwd + rx * str, mz = fz * fwd + rz * str, l = Math.hypot(mx, mz) || 1;
      player.pos.x += mx / l * speed * dt; player.pos.z += mz / l * speed * dt;
      player.bob += dt * speed * 2.4;
    }
    collide(floorOf(player.pos.y), player.pos, 0.35);
    const gy = groundY(player.pos.x, player.pos.z, player.pos.y);
    player.pos.y = inRamp(player.pos.x, player.pos.z) ? gy : lerp(player.pos.y, gy, Math.min(1, dt * 15));
    if (player.slipT > 0) player.slipT -= dt;
    player.noise = !player.moving ? 0 : player.sneaking ? CFG.SNEAK_NOISE[up.sneak] : player.running ? 14 : 7;
    player.eye = lerp(player.eye, player.sneaking ? 1.1 : 1.6, Math.min(1, dt * 10));
    if (player.slipT > 0) player.noise = Math.max(player.noise, 14);
  }
  player.netCd = Math.max(0, player.netCd - dt); player.batonCd = Math.max(0, player.batonCd - dt);
  const bob = player.moving ? Math.sin(player.bob) * 0.035 * (player.running ? 1.6 : 1) : 0;
  camera.position.set(player.pos.x, player.pos.y + player.eye + bob, player.pos.z);
  if (player.shake > 0) { player.shake = Math.max(0, player.shake - dt * 3); camera.position.x += (Math.random() - 0.5) * player.shake * 0.12; camera.position.y += (Math.random() - 0.5) * player.shake * 0.12; }
  camera.rotation.set(player.pitch, player.yaw, 0);
  updateLauncher(dt);
}

// ---------------------------------------------------------------- 更新迴圈
function updateGame(dt, time) {
  stageTime += dt;
  updatePlayer(dt);
  let anySee = false, seeRate = 0;
  for (const d of dogs) {
    if (d.captured) { updateCaptured(d, dt); continue; }
    if (d.type === 'chi') updateChi(d, dt, time); else updateCritter(d, dt, time);
    if (state !== 'playing') return;
    if (d.type === 'chi' && d.seesPlayer) { anySee = true; seeRate = Math.max(seeRate, d.seeRate || 1); }
    d.model.root.position.x = d.pos.x; d.model.root.position.z = d.pos.z;
    if (d.hop <= 0) d.model.root.position.y = d.pos.y;
    d.model.root.rotation.y = d.heading;
    if (d.type === 'chi') { d.sizeV = lerp(d.sizeV, d.size, Math.min(1, dt * 3)); d.pop = Math.min(1, d.pop + dt * 4); d.model.root.scale.setScalar(d.pop * d.sizeV * (d.digT > 0 ? 1 + Math.sin(time * 40) * 0.06 : 1)); }
    animateDog(d, dt, time);
    if (d.cone) updateCone(d);
  }
  let removed = false;
  for (let i = dogs.length - 1; i >= 0; i--) if (dogs[i].captured && dogs[i].capT <= 0) { scene.remove(dogs[i].model.root); dogs.splice(i, 1); removed = true; }
  if (removed) { openUpgrade(); return; }
  if (anySee) stageSeen = true;
  if (anySee) seen += dt * seeRate; else seen = Math.max(0, seen - dt * 1.5);
  if (CFG.SEEN_GRACE <= 0 ? anySee : seen >= CFG.SEEN_GRACE) { die('seen'); return; }

  updateTreats(dt, time);
  for (let i = poops.length - 1; i >= 0; i--) {
    const p = poops[i]; p.t += dt; p.stink.position.y = 0.55 + Math.sin(p.t * 3) * 0.06;
    if (!player.hidden && Math.abs(player.pos.y - p.f * FH) < 1 && Math.hypot(player.pos.x - p.x, player.pos.z - p.z) < 0.5) {
      removePoop(p); player.slipT = 1.3; sndSplat(); showToast('踩到大便了！聲音超大…', 1300); burst(p.x, p.f * FH + 0.1, p.z, 0x7b5030, 12, 2, 0.5, 0.14, 4);
    }
  }
  // 心跳：主管靠近
  let near = 1e9; for (const d of dogs) if (d.type === 'chi' && Math.abs(d.pos.y - player.pos.y) < 2.3) near = Math.min(near, Math.hypot(d.pos.x - player.pos.x, d.pos.z - player.pos.z));
  hbT -= dt;
  if (near < 9 && hbT <= 0) { hbT = lerp(0.38, 1.1, near / 9); tone(68, 0.12, 'sine', 0.4, 0.6); tone(58, 0.12, 'sine', 0.32, 0.6, 0.17); }
  // 網
  for (let i = nets.length - 1; i >= 0; i--) {
    const n = nets[i]; n.t += dt;
    let kill = false;
    if (!n.landed) {
      n.vel.y -= NET_G * dt;
      const step = n.vel.clone().multiplyScalar(dt); n.pos.add(step); n.dist += step.length();
      const p = Math.min(1, n.dist / n.range), q = clamp((p - 0.06) / 0.5, 0, 1), o = q * q * (3 - 2 * q);
      n.s = lerp(0.12, 1.25, o); n.web.scale.setScalar(n.s); n.ball.visible = o < 0.55; n.ball.scale.setScalar(Math.max(0.01, 1 - o * 1.7));
      n.mesh.lookAt(n.pos.x + n.vel.x, n.pos.y + n.vel.y, n.pos.z + n.vel.z); n.web.rotation.z += dt * 7;
      n.trailT -= dt; if (n.trailT <= 0) { n.trailT = 0.04; burst(n.pos.x, n.pos.y, n.pos.z, 0xfff0c8, 1, 0.1, 0.35, 0.16, 0); }
      const hit = netTryCatch(n, 0.4 + 0.95 * n.s, false);
      const gy = groundY(n.pos.x, n.pos.z, n.f * FH);
      let wallHit = false;
      if (n.pos.y < n.f * FH + 2.2) for (const b of sightBoxes[n.f]) if (n.pos.x > b.x1 && n.pos.x < b.x2 && n.pos.z > b.z1 && n.pos.z < b.z2) { wallHit = true; break; }
      if (hit) { if (hit.type !== 'chi') kill = true; else { n.landed = true; n.t = 0; n.s0 = n.s; n.endS = n.s; n.ball.visible = false; } }
      else if (n.pos.y <= gy + 0.05 || n.dist >= n.range || wallHit) {
        n.landed = true; n.pos.y = Math.max(n.pos.y, gy + 0.04); n.mesh.rotation.set(-Math.PI / 2, 0, 0); n.t = 0; n.s0 = n.s; n.endS = n.landR; n.ball.visible = false;
        if (!wallHit) { if (netTryCatch(n, n.landR, true)) kill = true; }
      }
    } else {
      const k = Math.min(1, n.t / 0.18); n.web.scale.setScalar(lerp(n.s0, n.endS, k));
      const fd = clamp((n.t - 0.6) / 0.6, 0, 1); n.web.material.opacity = 1 - fd; for (const c of n.web.children) c.visible = fd < 0.4;
      if (n.t > 1.25) kill = true;
    }
    if (kill) { scene.remove(n.mesh); n.web.material.dispose(); nets.splice(i, 1); }
  }
  updateBursts(dt);
  // 特效
  for (let i = fxs.length - 1; i >= 0; i--) {
    const f = fxs[i]; f.t += dt; const k = f.t / 0.7;
    f.mesh.scale.setScalar(1 + k * 5); f.mesh.material.opacity = Math.max(0, 0.9 * (1 - k)); f.beam.material.opacity = Math.max(0, 0.4 * (1 - k));
    if (k >= 1) { scene.remove(f.mesh); scene.remove(f.beam); fxs.splice(i, 1); }
  }
  // 雷達快照
  if (up.radar > 0) {
    radarT -= dt;
    if (radarT <= 0) { radarT = CFG.RADAR_T[up.radar]; radarSnap = dogs.filter(d => d.type === 'chi' && !d.captured).map(d => ({ x: d.pos.x, z: d.pos.z, y: d.pos.y, st: d.state })); }
  }
  updateHud(dt, time);
}

// ---------------------------------------------------------------- HUD / 雷達
let mapCanvas = [null, null];
function buildMapCanvas() {
  for (let f = 0; f < 2; f++) {
    const c = document.createElement('canvas'); c.width = W * 8; c.height = H * 8; const g = c.getContext('2d');
    g.fillStyle = 'rgba(60,200,110,.55)';
    for (const b of wallRects[f]) g.fillRect((b.x1 - X0) * 8, (b.z1 - Z0) * 8, (b.x2 - b.x1) * 8, (b.z2 - b.z1) * 8);
    g.fillStyle = 'rgba(60,200,110,.18)';
    for (const b of colliders[f]) if (!wallRects[f].includes(b)) g.fillRect((b.x1 - X0) * 8, (b.z1 - Z0) * 8, (b.x2 - b.x1) * 8, (b.z2 - b.z1) * 8);
    mapCanvas[f] = c;
  }
}
buildMapCanvas();
const rctx = $('radar').getContext('2d');
function drawRadar(time) {
  const g = rctx; g.clearRect(0, 0, 200, 200);
  if (!up.radar) { g.fillStyle = 'rgba(160,200,170,.6)'; g.font = '14px sans-serif'; g.textAlign = 'center'; g.fillText('抓到動物後可升級雷達', 100, 104); return; }
  const R = CFG.RADAR_R[up.radar], s = 96 / R, f = floorOf(player.pos.y);
  g.save(); g.beginPath(); g.arc(100, 100, 98, 0, 7); g.clip();
  g.translate(100, 100); g.rotate(player.yaw); g.scale(s, s); g.translate(-player.pos.x, -player.pos.z);
  g.imageSmoothingEnabled = false;
  g.drawImage(mapCanvas[f], X0, Z0, W, H);
  const pulse = (time % 1.6) / 1.6;
  for (const d of radarSnap) {
    const same = Math.abs(d.y - player.pos.y) < 2.3;
    g.save(); g.translate(d.x, d.z); g.rotate(-player.yaw);
    g.fillStyle = d.st === 'chase' ? '#ff3b30' : '#ff8a3a'; g.strokeStyle = '#ff3b30'; g.lineWidth = 1.5 / s;
    g.beginPath(); g.arc(0, 0, (same ? 5 : 4) / s, 0, 7);
    if (same) g.fill(); else g.stroke();
    if (!same) { g.fillStyle = '#ff8a3a'; g.font = `${11 / s}px sans-serif`; g.textAlign = 'center'; g.fillText(d.y > player.pos.y ? '▲' : '▼', 0, -7 / s); }
    g.restore();
  }
  g.restore();
  g.strokeStyle = 'rgba(80,220,130,.35)'; g.lineWidth = 1;
  for (const r of [32, 64, 96]) { g.beginPath(); g.arc(100, 100, r, 0, 7); g.stroke(); }
  g.beginPath(); g.arc(100, 100, 96 * pulse, 0, 7); g.strokeStyle = `rgba(80,255,150,${0.5 * (1 - pulse)})`; g.stroke();
  g.fillStyle = '#4aa8ff'; g.beginPath(); g.moveTo(100, 92); g.lineTo(95, 106); g.lineTo(105, 106); g.closePath(); g.fill();
}
const hudCache = {};
function setTxt(id, v) { if (hudCache[id] !== v) { hudCache[id] = v; $(id).textContent = v; } }
function updateHud(dt, time) {
  setTxt('hStage', stage); setTxt('hScore', score);
  const poo = dogs.some(d => d.type === 'poo' && !d.captured), pug = dogs.some(d => d.type === 'pug' && !d.captured);
  const nP = dogs.filter(d => d.type === 'poo' && !d.captured).length, nG = dogs.filter(d => d.type === 'pug' && !d.captured).length;
  setTxt('hLeft', [nP ? '小型貴賓狗' + (nP > 1 ? '×' + nP : '') : '', nG ? '八哥犬' + (nG > 1 ? '×' + nG : '') : ''].filter(Boolean).join('、') || '全部捕獲');
  setTxt('hLoc', roomName(player.pos.x, player.pos.z, floorOf(player.pos.y)));
  $('noiseF').style.width = Math.min(100, player.noise / 14 * 100) + '%';
  $('stamF').style.width = player.stamina + '%'; $('stamF').style.background = player.tired ? '#ff8a3a' : '#5fd38a';
  setTxt('hTreat', player.treats); setTxt('hBaton', player.baton); setTxt('hCoin', meta.coins); setTxt('hMod', mod.name ? '〔' + mod.name + '〕' : '');
  const hs = player.hidden ? null : nearestHide();
  setTxt('prompt', player.hidden ? '按 E 離開藏身處' : hs ? (hs.type === 'desk' ? '按 E 躲到桌子底下' : '按 E 躲進廁所隔間') : '');
  $('seenF').style.width = Math.min(100, seen / Math.max(0.01, CFG.SEEN_GRACE) * 100) + '%';
  $('netF').style.width = (player.netCd > 0 ? (1 - player.netCd / Math.max(0.7, 1.8 - 0.4 * up.net)) : 1) * 100 + '%';
  $('vig').style.opacity = clamp(seen / Math.max(0.01, CFG.SEEN_GRACE), 0, 1) * 0.95;
  const lk = !player.hidden && !!aimInfo().target; if (hudCache._lk !== lk) { hudCache._lk = lk; $('cross').classList.toggle('lock', lk); }
  if (touchMode) {
    setTxt('tTreat', player.treats); setTxt('tBaton', player.baton);
    const hv = player.hidden || hs ? 'flex' : 'none'; if (hudCache._hv !== hv) { hudCache._hv = hv; $('bHide').style.display = hv; $('bHide').textContent = player.hidden ? '離開' : '躲藏'; }
    const sv = up.sneak > 0 ? 'flex' : 'none'; if (hudCache._sv !== sv) { hudCache._sv = sv; $('bSneak').style.display = sv; }
    $('bNet').lastElementChild.style.height = (player.netCd > 0 ? player.netCd / Math.max(0.7, 1.8 - 0.4 * up.net) * 100 : 0) + '%';
  }
  drawRadar(time);
}

// ---------------------------------------------------------------- 輸入
window.addEventListener('keydown', e => {
  keys[e.code] = true;
  if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) e.preventDefault();
  if (state === 'upgrade') { const i = ['Digit1', 'Digit2', 'Digit3'].indexOf(e.code); if (i >= 0) chooseUpgrade(UPK[i]); }
  if (state === 'playing' && !e.repeat) { if (e.code === 'KeyE') toggleHide(); if (e.code === 'KeyQ') throwTreat(); if (e.code === 'KeyF') swingBaton(); }
  if (state === 'playing' && e.code === 'Escape' && debugNoLock) { state = 'paused'; show('pause'); }
});
window.addEventListener('keyup', e => { keys[e.code] = false; });
window.addEventListener('blur', () => { for (const k in keys) keys[k] = false; });
document.addEventListener('mousemove', e => {
  if (state !== 'playing' || (!debugNoLock && document.pointerLockElement !== canvas)) return;
  player.yaw -= e.movementX * 0.0022; player.pitch = clamp(player.pitch - e.movementY * 0.0022, -1.45, 1.45);
});
canvas.addEventListener('mousedown', e => { if (state === 'playing' && e.button === 0) { if (!debugNoLock && document.pointerLockElement !== canvas) lockPointer(); else if (!player.hidden) throwNet(); } });
canvas.addEventListener('mousedown', e => { if (state === 'playing' && e.button === 2 && (debugNoLock || document.pointerLockElement === canvas)) swingBaton(); });
canvas.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('pointerlockchange', () => {
  if (document.pointerLockElement !== canvas && state === 'playing' && !debugNoLock && !touchMode) { state = 'paused'; show('pause'); }
});
document.addEventListener('pointerlockerror', () => { if (state === 'playing' && !touchMode) { state = 'paused'; show('pause'); } });

// ---- 手機觸控
let touchMode = false;
const TS = { x: 0, y: 0, mag: 0, run: false, sneak: false, sens: 0.0045 };
const tstate = { stick: null, look: null, btns: new Map() };
function enableTouch() { if (touchMode) return; touchMode = true; document.body.classList.add('touch'); }
if (COARSE || new URLSearchParams(location.search).has('touch')) enableTouch();
window.addEventListener('touchstart', enableTouch, { passive: true });
try { const v = parseFloat(localStorage.getItem('chihuahua_hunter_sens')); if (v) { TS.sens = v / 1000; $('sens').value = v; } } catch (e) { /* ignore */ }
$('sens').oninput = () => { TS.sens = parseFloat($('sens').value) / 1000; try { localStorage.setItem('chihuahua_hunter_sens', $('sens').value); } catch (e) { /* ignore */ } };
function pauseGame() { if (state !== 'playing') return; state = 'paused'; show('pause'); releaseTouch(); }
function releaseTouch() { tstate.stick = tstate.look = null; tstate.btns.clear(); TS.x = TS.y = TS.mag = 0; TS.run = TS.run && false; $('stickBase').style.display = 'none'; $('stickKnob').style.display = 'none'; for (const b of document.querySelectorAll('.tb.hold')) b.classList.remove('hold'); }
const SR = 56;
function btnAct(act, down) {
  if (act === 'net') { if (down) throwNet(); }
  else if (act === 'treat') { if (down) throwTreat(); }
  else if (act === 'hit') { if (down) swingBaton(); }
  else if (act === 'hide') { if (down) toggleHide(); }
  else if (act === 'pause') { if (down) pauseGame(); }
  else if (act === 'run') TS.run = down;
  else if (act === 'sneak') { if (down) { if (up.sneak <= 0) return; TS.sneak = !TS.sneak; $('bSneak').classList.toggle('on', TS.sneak); } }
}
const tl = $('touch');
const resetTouch = () => releaseTouch();
// 清掉已經不存在的手指（死亡/暫停/切換畫面時 touchend 可能漏掉，會讓搖桿或視角永遠被佔住）
function pruneTouches(list) {
  const live = new Set(); for (const t of list) live.add(t.identifier);
  if (tstate.stick && !live.has(tstate.stick.id)) { tstate.stick = null; TS.x = TS.y = TS.mag = 0; $('stickBase').style.display = 'none'; $('stickKnob').style.display = 'none'; }
  if (tstate.look && !live.has(tstate.look.id)) tstate.look = null;
  for (const [id, a] of [...tstate.btns]) if (!live.has(id)) { tstate.btns.delete(id); btnAct(a, false); document.querySelectorAll(`.tb[data-act="${a}"]`).forEach(b => b.classList.remove('hold')); }
}
tl.addEventListener('touchstart', e => {
  if (state !== 'playing') { resetTouch(); return; } e.preventDefault();
  pruneTouches([...e.touches].filter(t => ![...e.changedTouches].some(c => c.identifier === t.identifier)));
  for (const t of e.changedTouches) {
    const el = t.target.closest ? t.target.closest('[data-act]') : null;
    if (el) { tstate.btns.set(t.identifier, el.dataset.act); el.classList.add('hold'); btnAct(el.dataset.act, true); continue; }
    if (t.clientX < window.innerWidth * 0.45 && !tstate.stick) {
      tstate.stick = { id: t.identifier, ox: t.clientX, oy: t.clientY };
      const b = $('stickBase'), k = $('stickKnob'); b.style.display = k.style.display = 'block';
      b.style.left = k.style.left = t.clientX + 'px'; b.style.top = k.style.top = t.clientY + 'px';
    } else if (!tstate.look) tstate.look = { id: t.identifier, x: t.clientX, y: t.clientY };
  }
}, { passive: false });
tl.addEventListener('touchmove', e => {
  if (state !== 'playing') return; e.preventDefault();
  for (const t of e.changedTouches) {
    const st = tstate.stick, lk = tstate.look;
    if (st && t.identifier === st.id) {
      let dx = t.clientX - st.ox, dy = t.clientY - st.oy; const l = Math.hypot(dx, dy);
      if (l > SR) { dx = dx / l * SR; dy = dy / l * SR; }
      const m = Math.min(1, l / SR); TS.mag = m < 0.12 ? 0 : m;
      TS.x = TS.mag ? dx / SR : 0; TS.y = TS.mag ? -dy / SR : 0;
      const k = $('stickKnob'); k.style.left = (st.ox + dx) + 'px'; k.style.top = (st.oy + dy) + 'px';
    } else if (lk && t.identifier === lk.id) {
      player.yaw -= (t.clientX - lk.x) * TS.sens; player.pitch = clamp(player.pitch - (t.clientY - lk.y) * TS.sens, -1.45, 1.45);
      lk.x = t.clientX; lk.y = t.clientY;
    }
  }
}, { passive: false });
function touchEnd(e) {
  for (const t of e.changedTouches) {
    if (tstate.stick && t.identifier === tstate.stick.id) { tstate.stick = null; TS.x = TS.y = TS.mag = 0; $('stickBase').style.display = 'none'; $('stickKnob').style.display = 'none'; }
    else if (tstate.look && t.identifier === tstate.look.id) tstate.look = null;
    else if (tstate.btns.has(t.identifier)) { const a = tstate.btns.get(t.identifier); tstate.btns.delete(t.identifier); btnAct(a, false); document.querySelectorAll(`.tb[data-act="${a}"]`).forEach(b => b.classList.remove('hold')); }
  }
  if (e.cancelable && state === 'playing') e.preventDefault();
}
tl.addEventListener('touchend', touchEnd, { passive: false }); tl.addEventListener('touchcancel', touchEnd, { passive: false });
document.addEventListener('visibilitychange', () => { if (document.hidden) pauseGame(); });
async function touchStartFx() {
  if (!touchMode) return;
  try { const el = document.documentElement; if (!document.fullscreenElement && el.requestFullscreen) await el.requestFullscreen({ navigationUI: 'hide' }); } catch (e) { /* ignore */ }
  try { if (screen.orientation && screen.orientation.lock) await screen.orientation.lock('landscape'); } catch (e) { /* ignore */ }
  try { if (navigator.wakeLock) navigator.wakeLock.request('screen').catch(() => {}); } catch (e) { /* ignore */ }
}

$('shopBtn').onclick = () => openShop('menu');
$('clearShop').onclick = () => openShop('clear');
$('deadShop').onclick = () => openShop('dead');
$('shopClose').onclick = () => { hide('shop'); show(shopFrom); };
$('helpBtn').onclick = () => show('help');
$('helpClose').onclick = () => hide('help');
$('startBtn').onclick = () => { playerName = ($('nameIn').value || '').trim() || '捕獸員'; hide('menu'); show('brief'); state = 'brief'; };
$('againBtn').onclick = () => startGame(debugNoLock);
$('menuBtn').onclick = () => { hide('dead'); show('menu'); $('hud').classList.remove('show'); state = 'menu'; clearDogs(); };
$('lbBtn').onclick = () => { show('lbOv'); showLb($('lbBody')); };
$('lbClose').onclick = () => hide('lbOv');
$('resumeBtn').onclick = () => { if (state === 'paused') resume(); };
$('quitBtn').onclick = () => { hide('pause'); $('hud').classList.remove('show'); show('menu'); state = 'menu'; clearDogs(); };
$('nextBtn').onclick = () => { hide('clear'); startStage(stage + 1); resume(); };
try { $('nameIn').value = localStorage.getItem(NAME_KEY) || ''; } catch (e) { /* ignore */ }

// ---------------------------------------------------------------- 角色展示台(選單/任務簡報)
const showcase = [], showCam = { x: 0, y: 0.8, z: 82.7, p: -0.16 };
function initShowcase() {
  const g = new THREE.Group(); g.position.set(0, 0, 80); scene.add(g);
  const fl = new THREE.Mesh(new THREE.CircleGeometry(5, 32), M(0x39414f)); fl.rotation.x = -Math.PI / 2; g.add(fl);
  const ground = new THREE.Mesh(new THREE.CircleGeometry(40, 32), M(0x131820)); ground.rotation.x = -Math.PI / 2; ground.position.y = -0.01; g.add(ground);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(4.7, 0.035, 6, 64), new THREE.MeshBasicMaterial({ color: 0xff6b4a })); ring.rotation.x = Math.PI / 2; ring.position.y = 0.02; g.add(ring);
  const city = new THREE.Mesh(new THREE.PlaneGeometry(34, 13), MB(TX.city)); city.position.set(0, 6.4, -6); g.add(city);
  for (let i = -3; i <= 3; i++) { const bar = new THREE.Mesh(new THREE.BoxGeometry(0.12, 13, 0.1), M(0x1a1f29)); bar.position.set(i * 4.2, 6.4, -5.95); g.add(bar); }
  const sill = new THREE.Mesh(new THREE.BoxGeometry(34, 0.2, 0.3), M(0x1a1f29)); sill.position.set(0, 0.3, -5.9); g.add(sill);
  const sp = new THREE.PointLight(0xffffff, 1.4, 16); sp.position.set(0, 4, 3); g.add(sp);
  const sp2 = new THREE.PointLight(0xff6b4a, 1.1, 14); sp2.position.set(-4.5, 2.5, 1.5); g.add(sp2);
  const sp3 = new THREE.PointLight(0x4aa8ff, 1.0, 14); sp3.position.set(4.5, 2.5, 1.5); g.add(sp3);
  [['chi', -1.9], ['poo', 0], ['pug', 1.9]].forEach(([t, x]) => {
    const model = makeDogModel(t); model.root.position.set(x, 0, 0); g.add(model.root);
    showcase.push({ type: t, model, act: 'idle', phase: 0, seed: Math.random() * 5, barkT: 0, hop: 0, state: 'show', baseX: x });
  });
}
assetsReady.then(initShowcase);
const SHOW_ACTS = ['idle', 'walk', 'sit', 'bark', 'lie', 'run'];
function updateShowcase(dt, time) {
  launcher.visible = false;
  const asp = window.innerWidth / window.innerHeight, portrait = asp < 1, short = window.innerHeight < 480 || portrait, menu = state === 'menu';
  const hf = Math.tan(camera.fov * Math.PI / 360) * asp;
  let D, tx, ty, pitch;
  if (!menu) { D = 2.7 * Math.max(1, 1.1 / asp); tx = 0; ty = short ? 1.25 : 0.8; pitch = short ? -0.3 : -0.16; }
  else if (portrait) { D = Math.max(3.6, 3.0 / hf); tx = 0; ty = 1.9; pitch = -0.74; }
  else { D = window.innerHeight < 480 ? 3.4 : 3.9; tx = -1.52 - 0.24 * D * hf; ty = window.innerHeight < 480 ? 1.0 : 0.8; pitch = window.innerHeight < 480 ? -0.12 : -0.16; }
  if (!showCam.init) { showCam.init = true; showCam.x = tx; showCam.y = ty; showCam.z = 80 + D; showCam.p = pitch; }
  showCam.x = lerp(showCam.x, tx, Math.min(1, dt * 3)); showCam.z = lerp(showCam.z, 80 + D, Math.min(1, dt * 3)); showCam.y = lerp(showCam.y, ty, Math.min(1, dt * 3)); showCam.p = lerp(showCam.p, pitch, Math.min(1, dt * 3));
  camera.position.set(showCam.x, showCam.y, showCam.z); camera.rotation.set(showCam.p, 0, 0);
  showcase.forEach((d, i) => {
    const k = Math.floor(time / 2.2 + i * 1.3) % SHOW_ACTS.length, a = SHOW_ACTS[k];
    d.act = a === 'bark' ? 'sit' : a;
    if (a === 'bark' && d.barkT <= 0 && ((time * 10) | 0) % 9 === 0) d.barkT = 0.5;
    d.model.root.position.x = lerp(d.model.root.position.x, d.baseX * (state === 'menu' ? 0.8 : 1), Math.min(1, dt * 3));
    d.model.root.rotation.y = Math.sin(time * 0.5 + i) * 0.5;
    animateDog(d, dt, time);
  });
}
$('briefBtn').onclick = () => { hide('menu'); show('brief'); state = 'brief'; };
$('briefTxt').onclick = () => document.body.classList.toggle('bt');
$('briefBack').onclick = () => { hide('brief'); show('menu'); state = 'menu'; };
$('briefGo').onclick = () => { hide('brief'); touchStartFx(); startGame(false); };

// ---------------------------------------------------------------- 主迴圈

// 除錯：任何錯誤都顯示在畫面上（方便回報），不讓遊戲無聲卡死
let errBox = null, errN = 0;
function reportErr(msg, where) {
  try {
    console.error('[game]', where, msg);
    if (errN++ > 3) return;
    if (!errBox) { errBox = document.createElement('div'); errBox.style.cssText = 'position:fixed;left:6px;right:6px;bottom:6px;z-index:99999;background:rgba(120,0,0,.92);color:#fff;font:12px/1.4 monospace;padding:8px 10px;border-radius:8px;white-space:pre-wrap;word-break:break-all;max-height:40vh;overflow:auto;user-select:text'; errBox.onclick = () => { errBox.style.display = 'none'; }; document.body.appendChild(errBox); }
    errBox.style.display = 'block'; errBox.textContent = '⚠ 發生錯誤（點一下關閉，請截圖回報）\n[' + where + '] ' + msg;
  } catch (e) { /* ignore */ }
}
window.addEventListener('error', e => reportErr((e.message || '') + ' @' + (e.filename || '').split('/').pop() + ':' + e.lineno + ':' + e.colno, 'error'));
window.addEventListener('unhandledrejection', e => reportErr(String(e.reason && (e.reason.stack || e.reason.message) || e.reason).slice(0, 300), 'promise'));
const clock = new THREE.Clock(); let T = 0, bubbleT = 0;
function frame() {
  requestAnimationFrame(frame);
  const dt = Math.min(0.05, clock.getDelta()); T += dt;
  { const inMenu = state === 'menu' || state === 'brief'; if (worldGroup.visible === inMenu) worldGroup.visible = !inMenu; }
  { const sh = state === 'playing'; if (hudCache._tl !== sh) { hudCache._tl = sh; $('touch').classList.toggle('show', sh); if (!sh) releaseTouch(); } }
  if (state === 'playing') { try { updateGame(dt, T); } catch (e) { reportErr((e && e.stack || e) + '', 'update'); } }
  else if (state === 'menu' || state === 'brief') { if (mod !== MODS.none) { mod = MODS.none; applyMod(); } setTxt('mCoins', meta.coins); setTxt('mBest', meta.best); bubbleT -= dt; if (bubbleT <= 0) { bubbleT = 3.4; const bb = $('bubble'); bb.style.opacity = 0; setTimeout(() => { bb.textContent = pick(CHI_Q); bb.style.opacity = 1; }, 250); } updateShowcase(dt, T); }
  renderer.render(scene, camera);
}
frame();

// 除錯/測試接口
window.__game = {
  start: noLock => startGame(noLock !== false),
  step: (dt = 0.05, n = 1) => { for (let i = 0; i < n; i++) { T += dt; if (state === 'playing') updateGame(dt, T); } renderer.render(scene, camera); },
  get state() { return state; }, player, TS, enableTouch, aimInfo, meta, spawnPoop, poops: () => poops, swing: swingBaton, zap: zapDog, buy: buyShop, MODS, shopLv, dogs: () => dogs, up, keys,
  setPlayer: (x, y, z) => player.pos.set(x, y, z),
  net: throwNet, cfg: CFG, capture: d => capture(d), openUpgrade, stage: () => stage, score: () => score,
  render: () => renderer.render(scene, camera),
  spawnDog, animateDog, camera, scene, findPath, cellsMain, nooks, toggleHide, throwTreat, hideSpots,
};

window.addEventListener('pagehide', saveMeta);
