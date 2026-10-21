import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils.js';
import { MarchingCubes } from 'three/examples/jsm/objects/MarchingCubes.js';
import { mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
export const assetsReady = Promise.resolve();
const pugAsset = null;
/* =====================================================================
   程式建模的三種狗：吉娃娃 / 小型貴賓(泰迪造型) / 八哥犬
   單位：公尺(未縮放)。狗面向 +z，腳底 y = 0。
   ===================================================================== */

export const DOGS = {
  chi: { name: '吉娃娃主管', s: 2.1 },
  poo: { name: '小型貴賓狗', s: 1.9 },
  pug: { name: '八哥犬', s: 1.75 },
};

// ---------------------------------------------------------------- 材質 / 幾何快取
const matCache = new Map();
function hash3(x, y, z) { const h = Math.sin(x * 127.1 + y * 311.7 + z * 74.7) * 43758.5453; return h - Math.floor(h); }
function vnoise(x, y, z) {
  const xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z), xf = x - xi, yf = y - yi, zf = z - zi;
  const s = t => t * t * (3 - 2 * t), u = s(xf), v = s(yf), w = s(zf);
  const L = (a, b, t) => a + (b - a) * t;
  const c = (dx, dy, dz) => hash3(xi + dx, yi + dy, zi + dz);
  return L(L(L(c(0, 0, 0), c(1, 0, 0), u), L(c(0, 1, 0), c(1, 1, 0), u), v), L(L(c(0, 0, 1), c(1, 0, 1), u), L(c(0, 1, 1), c(1, 1, 1), u), v), w);
}
function furTexture(hex, kind) {
  const key = 'tex' + hex + kind;
  if (matCache.has(key)) return matCache.get(key);
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d'); const col = new THREE.Color(hex);
  g.fillStyle = '#' + col.getHexString(); g.fillRect(0, 0, 128, 128);
  const shade = k => { const t = col.clone().multiplyScalar(k); return `rgba(${(Math.min(1, t.r) * 255) | 0},${(Math.min(1, t.g) * 255) | 0},${(Math.min(1, t.b) * 255) | 0},0.55)`; };
  if (kind === 'curly') {
    for (let i = 0; i < 520; i++) {
      g.strokeStyle = shade(0.7 + Math.random() * 0.55); g.lineWidth = 1.6;
      const x = Math.random() * 128, y = Math.random() * 128, r = 2 + Math.random() * 3;
      g.beginPath(); g.arc(x, y, r, Math.random() * 6, Math.random() * 6 + 3.5); g.stroke();
    }
  } else {
    for (let i = 0; i < 1400; i++) {
      g.strokeStyle = shade(0.9 + Math.random() * 0.2); g.lineWidth = 0.8;
      const x = Math.random() * 128, y = Math.random() * 128, a = Math.PI / 2 + (Math.random() - 0.5) * 0.5, l = 3 + Math.random() * 4;
      g.beginPath(); g.moveTo(x, y); g.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l); g.stroke();
    }
  }
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(kind === 'curly' ? 2 : 5, kind === 'curly' ? 2 : 5);
  t.colorSpace = THREE.SRGBColorSpace;
  matCache.set(key, t); return t;
}
function mat(hex, o = {}) {
  const { rough = 0.85, kind = null, metal = 0, emissive = 0x000000 } = o;
  const key = [hex, rough, kind, metal, emissive].join('|');
  if (matCache.has(key)) return matCache.get(key);
  const m = new THREE.MeshStandardMaterial({ color: kind ? 0xffffff : hex, roughness: rough, metalness: metal, emissive });
  if (kind) m.map = furTexture(hex, kind);
  matCache.set(key, m); return m;
}
const geoCache = new Map();
function sphere() { if (!geoCache.has('s')) geoCache.set('s', new THREE.SphereGeometry(1, 24, 18)); return geoCache.get('s'); }
function fluffy(seed = 0, amp = 0.14) {
  const key = 'f' + seed + amp;
  if (geoCache.has(key)) return geoCache.get(key);
  const g = new THREE.SphereGeometry(1, 30, 22), p = g.attributes.position, v = new THREE.Vector3();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    const n = vnoise(v.x * 5 + seed, v.y * 5, v.z * 5) * 0.65 + vnoise(v.x * 11, v.y * 11 + seed, v.z * 11) * 0.35;
    v.multiplyScalar(1 + amp * (n - 0.5) * 2); p.setXYZ(i, v.x, v.y, v.z);
  }
  g.computeVertexNormals(); geoCache.set(key, g); return g;
}
function E(parent, rx, ry, rz, material, x = 0, y = 0, z = 0, geo = null) {
  const m = new THREE.Mesh(geo || sphere(), material); m.scale.set(rx, ry, rz); m.position.set(x, y, z); parent.add(m); return m;
}
function G(parent, x = 0, y = 0, z = 0) { const g = new THREE.Group(); g.position.set(x, y, z); parent.add(g); return g; }
function tube(parent, pts, r, material) {
  const curve = new THREE.CatmullRomCurve3(pts.map(p => new THREE.Vector3(...p)));
  const m = new THREE.Mesh(new THREE.TubeGeometry(curve, 24, r, 8, false), material); parent.add(m);
  const tip = new THREE.Mesh(sphere(), material); tip.scale.setScalar(r); tip.position.copy(curve.getPoint(1)); parent.add(tip);
  return m;
}
// 一顆有虹膜、瞳孔、反光、眼線的眼睛
function eyeBall(parent, x, y, z, r, iris, o = {}) {
  const g = G(parent, x, y, z); g.rotation.y = o.yaw || 0;
  if (o.sclera) E(g, r * 1.02, r * 1.02, r * 0.9, mat(0xf4efe6, { rough: 0.3 }), 0, 0, -r * 0.1);
  E(g, r * (o.sclera ? 0.86 : 1), r * (o.sclera ? 0.86 : 1), r * 0.9, mat(iris, { rough: 0.15 }), 0, 0, o.sclera ? r * 0.12 : 0);
  E(g, r * 0.55, r * 0.55, r * 0.4, mat(0x050404, { rough: 0.1 }), 0, 0, r * 0.62);
  E(g, r * 0.22, r * 0.22, r * 0.12, mat(0xffffff, { rough: 0.1, emissive: 0x777777 }), r * 0.32, r * 0.35, r * 0.88);
  E(g, r * 0.1, r * 0.1, r * 0.06, mat(0xffffff, { rough: 0.1, emissive: 0x777777 }), -r * 0.3, -r * 0.3, r * 0.9);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(r * 0.98, r * 0.16, 8, 20), mat(o.rim || 0x2a1d14, { rough: 0.6 }));
  rim.position.z = r * 0.25; g.add(rim);
  return g;
}
function earShape(w, h, bulge = 0.25) {
  const s = new THREE.Shape();
  s.moveTo(-w / 2, 0);
  s.quadraticCurveTo(-w * (0.5 + bulge), h * 0.55, -w * 0.02, h);
  s.quadraticCurveTo(w * 0.05, h * 1.02, w * 0.04, h * 0.98);
  s.quadraticCurveTo(w * (0.5 + bulge), h * 0.5, w / 2, 0);
  s.quadraticCurveTo(0, -h * 0.08, -w / 2, 0);
  return s;
}
function ear(parent, x, y, z, w, h, outer, inner, tilt, side) {
  const g = G(parent, x, y, z); g.rotation.set(-0.15, side * 0.35, -side * tilt);
  const o = new THREE.Mesh(new THREE.ExtrudeGeometry(earShape(w, h), { depth: w * 0.06, bevelEnabled: true, bevelThickness: w * 0.03, bevelSize: w * 0.03, bevelSegments: 2, curveSegments: 10 }), outer);
  o.position.z = -w * 0.06; g.add(o);
  const i = new THREE.Mesh(new THREE.ShapeGeometry(earShape(w * 0.7, h * 0.78)), inner);
  i.position.set(0, h * 0.08, w * 0.035); g.add(i);
  return g;
}
// 兩節腿：hip(大腿) -> knee(小腿) -> 腳掌
function leg(bp, x, z, hd, u, l, r1, r2, furM, pawM, o = {}) {
  const hip = G(bp, x, -hd, z);
  const geo = o.fluffy ? fluffy(x * 10 + z * 7, 0.18) : null;
  E(hip, r1 * (o.thigh || 1.3), u * 0.62, r1 * (o.thigh || 1.3) * 1.15, furM, 0, -u * 0.38, 0, geo);
  const knee = G(hip, 0, -u, 0);
  E(knee, r2, l * 0.56, r2 * 1.05, furM, 0, -l * 0.48, 0, geo);
  const paw = E(knee, r2 * 1.35, r2 * 0.75, r2 * 1.75, pawM, 0, -l + r2 * 0.6, r2 * 0.55, geo);
  if (!o.fluffy) for (const tx of [-0.5, 0, 0.5]) E(knee, r2 * 0.4, r2 * 0.35, r2 * 0.45, pawM, tx * r2 * 1.1, -l + r2 * 0.45, r2 * 1.9);
  return { hip, knee, paw };
}

// ---------------------------------------------------------------- 吉娃娃主管(原創公仔風：胖胖、愛擺架子、愛吠)
function badgeTex() {
  const c = document.createElement('canvas'); c.width = 128; c.height = 160; const g = c.getContext('2d');
  g.fillStyle = '#ffffff'; g.fillRect(0, 0, 128, 160);
  g.fillStyle = '#2f6fd6'; g.fillRect(0, 0, 128, 40);
  g.fillStyle = '#e8c9a0'; g.beginPath(); g.arc(64, 82, 24, 0, 7); g.fill();
  g.fillStyle = '#1b2333'; g.font = 'bold 34px sans-serif'; g.textAlign = 'center'; g.fillText('主管', 64, 145);
  g.fillStyle = '#fff'; g.font = 'bold 22px sans-serif'; g.fillText('BOSS', 64, 29);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
// ---- 平滑一體成形：SDF 平滑聯集 + Marching Cubes + 自動綁骨 ----
const sdEll = (x, y, z, c, r) => {
  const a = (x - c[0]) / r[0], b = (y - c[1]) / r[1], d = (z - c[2]) / r[2];
  const k0 = Math.hypot(a, b, d), k1 = Math.hypot(a / r[0], b / r[1], d / r[2]);
  return k1 > 1e-9 ? k0 * (k0 - 1) / k1 : -Math.min(r[0], r[1], r[2]);
};
const sdCap = (x, y, z, a, b, ra, rb) => {
  const bx = b[0] - a[0], by = b[1] - a[1], bz = b[2] - a[2], px = x - a[0], py = y - a[1], pz = z - a[2];
  let t = (px * bx + py * by + pz * bz) / (bx * bx + by * by + bz * bz); t = Math.max(0, Math.min(1, t));
  return Math.hypot(px - bx * t, py - by * t, pz - bz * t) - (ra + (rb - ra) * t);
};
const smin = (a, b, k) => { const h = Math.max(k - Math.abs(a - b), 0) / k; return Math.min(a, b) - h * h * k * 0.25; };
function buildSmoothGeometry(parts, boneCount, colors, box) {
  const RES = 64, [cx, cy, cz, side] = box, half = side / 2;
  const sdf = (x, y, z) => { let d = 1e9; for (const p of parts) d = smin(d, p.f(x, y, z), p.k); return d; };
  const mc = new MarchingCubes(RES, new THREE.MeshBasicMaterial(), false, false, 120000);
  const hs = RES / 2;
  for (let zi = 0; zi < RES; zi++) for (let yi = 0; yi < RES; yi++) for (let xi = 0; xi < RES; xi++)
    mc.field[zi * RES * RES + yi * RES + xi] = -sdf(cx + (xi - hs) / hs * half, cy + (yi - hs) / hs * half, cz + (zi - hs) / hs * half);
  mc.isolation = 0; mc.update();
  const n = mc.count, pos = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { pos[i * 3] = cx + mc.positionArray[i * 3] * half; pos[i * 3 + 1] = cy + mc.positionArray[i * 3 + 1] * half; pos[i * 3 + 2] = cz + mc.positionArray[i * 3 + 2] * half; }
  let g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g = mergeVertices(g, 1e-6);
  const P = g.attributes.position, N = new Float32Array(P.count * 3), C = new Float32Array(P.count * 3);
  const SI = new Uint16Array(P.count * 4), SW = new Float32Array(P.count * 4), e = 0.0015, sig = 0.007;
  const ca = new THREE.Color(colors[0]), cb = new THREE.Color(colors[1]);
  const bd = new Float32Array(boneCount);
  for (let i = 0; i < P.count; i++) {
    const x = P.getX(i), y = P.getY(i), z = P.getZ(i);
    let nx = sdf(x + e, y, z) - sdf(x - e, y, z), ny = sdf(x, y + e, z) - sdf(x, y - e, z), nz = sdf(x, y, z + e) - sdf(x, y, z - e);
    const l = Math.hypot(nx, ny, nz) || 1; N[i * 3] = nx / l; N[i * 3 + 1] = ny / l; N[i * 3 + 2] = nz / l;
    bd.fill(1e9); let dA = 1e9, dB = 1e9;
    for (const p of parts) { const d = p.f(x, y, z); if (d < bd[p.bone]) bd[p.bone] = d; if (p.col) dB = Math.min(dB, d); else dA = Math.min(dA, d); }
    const t = 1 / (1 + Math.exp(-(dA - dB) / 0.003)); const c = ca.clone().lerp(cb, t);
    C[i * 3] = c.r; C[i * 3 + 1] = c.g; C[i * 3 + 2] = c.b;
    const dmin = Math.min(...bd), w = [];
    for (let b = 0; b < boneCount; b++) w.push([b, Math.exp(-(bd[b] - dmin) / sig)]);
    w.sort((a, b) => b[1] - a[1]); const top = w.slice(0, 4), sum = top.reduce((a, b) => a + b[1], 0);
    top.forEach(([b, v], k) => { SI[i * 4 + k] = b; SW[i * 4 + k] = v / sum; });
  }
  g.setAttribute('normal', new THREE.BufferAttribute(N, 3));
  g.setAttribute('color', new THREE.BufferAttribute(C, 3));
  g.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(SI, 4));
  g.setAttribute('skinWeight', new THREE.BufferAttribute(SW, 4));
  return g;
}
const smoothGeo = {};
function buildChi(bp, model) {
  const vinyl = o => mat(o, { rough: 0.5 });
  const body = vinyl(0xe0a052), cream = vinyl(0xfbe9cc), dark = vinyl(0x4a2a14), inner = vinyl(0xf3b49a), white = mat(0xffffff, { rough: 0.25 });
  const D = { hd: 0.03, u: 0.05, l: 0.05, zf: 0.07, zr: -0.072 };
  const Y0 = D.hd + D.u + D.l + 0.008; bp.position.set(0, Y0, 0);
  const HO = [0, 0.105, 0.11];                                  // 頭的位置(bp 座標)
  const LEG = [[-0.047, D.zf, 1.2], [0.047, D.zf, 1.2], [-0.05, D.zr, 1.55], [0.05, D.zr, 1.55]];
  // 骨架
  const head = new THREE.Bone(); head.position.set(...HO); bp.add(head);
  const jaw = new THREE.Bone(); jaw.position.set(0, -0.036, 0.05); head.add(jaw);
  const tail = new THREE.Bone(); tail.position.set(0, 0.045, -0.105); bp.add(tail);
  const legs = LEG.map(([x, z]) => {
    const hip = new THREE.Bone(); hip.position.set(x, -D.hd, z); bp.add(hip);
    const knee = new THREE.Bone(); knee.position.set(0, -D.u, 0); hip.add(knee);
    return { hip, knee };
  });
  const bones = [bp, head, jaw, tail, ...legs.flatMap(l => [l.hip, l.knee])];
  // 平滑身體(一次建好，所有吉娃娃共用)
  if (!smoothGeo.chi) {
    const M = (x, y, z) => [x, y + Y0, z], H = (x, y, z) => [x + HO[0], y + HO[1] + Y0, z + HO[2]];
    const parts = [];
    const ell = (c, r, bone, col = 0, k = 0.03) => parts.push({ f: (x, y, z) => sdEll(x, y, z, c, r), bone, col, k });
    const cap = (a, b, ra, rb, bone, col = 0, k = 0.03) => parts.push({ f: (x, y, z) => sdCap(x, y, z, a, b, ra, rb), bone, col, k });
    ell(M(0, 0.006, -0.005), [0.09, 0.083, 0.1], 0);             // 圓滾滾身體
    ell(M(0, 0.014, 0.058), [0.08, 0.08, 0.066], 0);
    ell(M(0, 0.012, -0.066), [0.074, 0.072, 0.062], 0);
    ell(M(0, -0.03, 0.025), [0.066, 0.058, 0.078], 0, 1);        // 奶油色大肚
    ell(M(0, 0.015, 0.1), [0.054, 0.06, 0.04], 0, 1);            // 挺胸
    cap(M(0, 0.04, 0.07), H(0, -0.01, -0.01), 0.058, 0.055, 0); // 粗脖子
    ell(H(0, 0, 0), [0.076, 0.07, 0.068], 1);                   // 頭
    ell(H(-0.037, -0.03, 0.03), [0.035, 0.029, 0.03], 1, 1, 0.02);  // 肥臉頰
    ell(H(0.037, -0.03, 0.03), [0.035, 0.029, 0.03], 1, 1, 0.02);
    ell(H(0, -0.022, 0.056), [0.029, 0.021, 0.028], 1, 1, 0.02);    // 短嘴
    ell(H(0, 0.032, 0.05), [0.03, 0.022, 0.02], 1, 1, 0.02);        // 額頭亮色
    cap(M(0, 0.045, -0.105), M(0, 0.085, -0.12), 0.018, 0.012, 3, 0, 0.02); // 尾巴根
    LEG.forEach(([x, z, th], i) => {
      const hp = M(x, -D.hd, z), kn = [hp[0], hp[1] - D.u, hp[2]], ft = [kn[0], kn[1] - D.l, kn[2]];
      cap([hp[0], hp[1] + 0.03, hp[2]], kn, 0.024 * th, 0.02, 4 + i * 2, 0, 0.035);
      cap(kn, [ft[0], ft[1] + 0.012, ft[2]], 0.02, 0.018, 5 + i * 2, 0, 0.02);
      ell([ft[0], ft[1] + 0.011, ft[2] + 0.01], [0.023, 0.013, 0.029], 5 + i * 2, 1, 0.018);
    });
    smoothGeo.chi = buildSmoothGeometry(parts, bones.length, [0xe0a052, 0xfbe9cc], [0, 0.17, 0.01, 0.46]);
  }
  const skinMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.5 });
  const mesh = new THREE.SkinnedMesh(smoothGeo.chi, skinMat); mesh.frustumCulled = false;
  model.add(mesh); model.add(bp);
  model.updateMatrixWorld(true);
  mesh.bind(new THREE.Skeleton(bones));
  // 臉部 & 配件(剛體掛在骨頭上)
  E(head, 0.012, 0.009, 0.008, dark, 0, -0.013, 0.084);         // 鼻子
  for (const sx of [-1, 1]) {
    const eg = G(head, sx * 0.032, 0.013, 0.056); eg.rotation.y = sx * 0.3;
    E(eg, 0.018, 0.018, 0.012, white, 0, 0, 0);
    E(eg, 0.009, 0.01, 0.006, dark, sx * 0.004, -0.003, 0.009);
    E(eg, 0.003, 0.003, 0.002, white, sx * 0.004 + 0.003, 0.001, 0.014);
    const lid = E(eg, 0.0195, 0.011, 0.0135, body, 0, 0.008, 0.001); lid.rotation.x = -0.15;
    const brow = new THREE.Mesh(new THREE.BoxGeometry(0.034, 0.008, 0.008), dark);
    brow.position.set(sx * 0.03, 0.038, 0.06); brow.rotation.z = sx * 0.32; head.add(brow);
  }
  const pout = new THREE.Mesh(new THREE.TorusGeometry(0.01, 0.0025, 5, 10, Math.PI), dark);
  pout.position.set(0, -0.044, 0.07); pout.rotation.set(-0.3, 0, 0); head.add(pout);
  ear(head, -0.05, 0.045, -0.012, 0.095, 0.125, body, inner, 0.72, -1);
  ear(head, 0.05, 0.045, -0.012, 0.095, 0.125, body, inner, 0.72, 1);
  E(jaw, 0.022, 0.009, 0.024, cream, 0, -0.004, 0.008);
  E(jaw, 0.015, 0.005, 0.017, vinyl(0xd9545a), 0, 0.002, 0.01);
  for (const sx of [-1, 1]) { const f = new THREE.Mesh(new THREE.ConeGeometry(0.003, 0.008, 5), white); f.position.set(sx * 0.012, 0.006, 0.028); jaw.add(f); }
  tube(tail, [[0, 0.02, -0.01], [0, 0.05, -0.02], [0, 0.072, 0.005], [0, 0.062, 0.03]], 0.012, body);
  const tie = new THREE.Mesh(new THREE.BoxGeometry(0.026, 0.07, 0.008), vinyl(0xc0392b)); tie.position.set(0.008, -0.025, 0.145); tie.rotation.set(-0.35, 0, 0.18); bp.add(tie);
  const knot = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.018, 0.016), vinyl(0x8e2a20)); knot.position.set(0.004, 0.02, 0.14); knot.rotation.z = 0.15; bp.add(knot);
  const collar = new THREE.Mesh(new THREE.TorusGeometry(0.06, 0.006, 6, 24), vinyl(0x2f6fd6)); collar.position.set(0, 0.058, 0.098); collar.rotation.x = 1.2; bp.add(collar);
  const badge = new THREE.Mesh(new THREE.BoxGeometry(0.036, 0.046, 0.004), [white, white, white, white, new THREE.MeshStandardMaterial({ map: badgeTex(), roughness: 0.4 }), white]);
  badge.position.set(-0.03, -0.035, 0.14); badge.rotation.set(-0.3, -0.25, -0.12); bp.add(badge);
  return { head, jaw, tail, legs, D, top: 0.105 + 0.12 + Y0, pout };
}

// ---------------------------------------------------------------- 八哥犬
function buildPug(bp, model) {
  const vinyl = o => mat(o, { rough: 0.5 });
  const fur = vinyl(0xdcb57c), black = vinyl(0x2a2420), wr = vinyl(0x8a6440), skin = vinyl(0xd9545a);
  const D = { hd: 0.03, u: 0.045, l: 0.046, zf: 0.072, zr: -0.078 };
  const Y0 = D.hd + D.u + D.l + 0.008; bp.position.set(0, Y0, 0);
  const HO = [0, 0.075, 0.125];
  const LEG = [[-0.055, D.zf, 1.25], [0.055, D.zf, 1.25], [-0.058, D.zr, 1.5], [0.058, D.zr, 1.5]];
  const head = new THREE.Bone(); head.position.set(...HO); bp.add(head);
  const jaw = new THREE.Bone(); jaw.position.set(0, -0.046, 0.05); head.add(jaw);
  const tail = new THREE.Bone(); tail.position.set(0, 0.06, -0.11); bp.add(tail);
  const legs = LEG.map(([x, z]) => {
    const hip = new THREE.Bone(); hip.position.set(x, -D.hd, z); bp.add(hip);
    const knee = new THREE.Bone(); knee.position.set(0, -D.u, 0); hip.add(knee);
    return { hip, knee };
  });
  const bones = [bp, head, jaw, tail, ...legs.flatMap(l => [l.hip, l.knee])];
  if (!smoothGeo.pug) {
    const M = (x, y, z) => [x, y + Y0, z], H = (x, y, z) => [x + HO[0], y + HO[1] + Y0, z + HO[2]];
    const parts = [];
    const ell = (c, r, bone, col = 0, k = 0.03) => parts.push({ f: (x, y, z) => sdEll(x, y, z, c, r), bone, col, k });
    const cap = (a, b, ra, rb, bone, col = 0, k = 0.03) => parts.push({ f: (x, y, z) => sdCap(x, y, z, a, b, ra, rb), bone, col, k });
    ell(M(0, 0.004, -0.005), [0.092, 0.086, 0.1], 0);            // 桶狀胖身體
    ell(M(0, 0.01, 0.06), [0.088, 0.086, 0.066], 0);             // 厚胸
    ell(M(0, 0.01, -0.072), [0.08, 0.078, 0.062], 0);            // 圓屁股
    cap(M(0, 0.035, 0.075), H(0, -0.012, -0.025), 0.068, 0.064, 0); // 粗短脖子
    ell(H(0, 0, 0), [0.08, 0.074, 0.07], 1);                    // 大圓頭
    ell(H(0, 0.028, 0.018), [0.064, 0.042, 0.05], 1, 0, 0.025);  // 額頭
    ell(H(-0.034, -0.03, 0.045), [0.035, 0.031, 0.028], 1, 1, 0.02); // 黑色垂肉
    ell(H(0.034, -0.03, 0.045), [0.035, 0.031, 0.028], 1, 1, 0.02);
    ell(H(0, -0.016, 0.06), [0.044, 0.032, 0.02], 1, 1, 0.018);  // 黑色扁臉
    LEG.forEach(([x, z, th], i) => {
      const hp = M(x, -D.hd, z), kn = [hp[0], hp[1] - D.u, hp[2]], ft = [kn[0], kn[1] - D.l, kn[2]];
      cap([hp[0], hp[1] + 0.03, hp[2]], kn, 0.026 * th, 0.023, 4 + i * 2, 0, 0.035);
      cap(kn, [ft[0], ft[1] + 0.013, ft[2]], 0.023, 0.021, 5 + i * 2, 0, 0.02);
      ell([ft[0], ft[1] + 0.012, ft[2] + 0.01], [0.026, 0.014, 0.031], 5 + i * 2, 0, 0.018);
    });
    smoothGeo.pug = buildSmoothGeometry(parts, bones.length, [0xdcb57c, 0x2a2420], [0, 0.16, 0.03, 0.48]);
  }
  const mesh = new THREE.SkinnedMesh(smoothGeo.pug, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.5 })); mesh.frustumCulled = false;
  model.add(mesh); model.add(bp); model.updateMatrixWorld(true); mesh.bind(new THREE.Skeleton(bones));
  // 臉部細節
  E(head, 0.019, 0.012, 0.01, mat(0x0d0b0a, { rough: 0.3 }), 0, -0.002, 0.081);     // 鼻子
  const roll = new THREE.Mesh(new THREE.TorusGeometry(0.026, 0.006, 6, 16, Math.PI), black); roll.position.set(0, 0.008, 0.074); roll.rotation.set(-0.3, 0, 0); head.add(roll); // 鼻上皺褶
  for (let i = 0; i < 2; i++) {
    const w = new THREE.Mesh(new THREE.TorusGeometry(0.022 - i * 0.003, 0.0035, 5, 16, Math.PI * 0.8), wr);
    w.position.set(0, 0.048 + i * 0.011, 0.058 - i * 0.01); w.rotation.set(-0.95, 0, Math.PI * 1.1); head.add(w);
  }
  eyeBall(head, -0.038, 0.016, 0.054, 0.022, 0x1c120c, { yaw: -0.4, sclera: true, rim: 0x16110e });
  eyeBall(head, 0.038, 0.016, 0.054, 0.022, 0x1c120c, { yaw: 0.4, sclera: true, rim: 0x16110e });
  for (const sx of [-1, 1]) { const e = E(head, 0.024, 0.028, 0.008, black, sx * 0.068, 0.034, 0.022); e.rotation.set(0.9, sx * 0.5, sx * 1.2); }
  E(jaw, 0.024, 0.008, 0.02, black, 0, 0, 0.012); E(jaw, 0.015, 0.004, 0.015, skin, 0, 0.004, 0.014);
  const pts = []; for (let i = 0; i <= 16; i++) { const a = i / 16 * Math.PI * 3.2, r = 0.034 * (1 - i / 22); pts.push([Math.sin(a) * r * 0.6, 0.02 + (1 - Math.cos(a)) * r * 0.6, -Math.cos(a) * r + r * 0.3 + i * 0.002]); }
  tube(tail, pts, 0.013, fur);
  return { head, jaw, tail, legs, D, top: HO[1] + 0.08 + Y0 };
}

// ---------------------------------------------------------------- 小型貴賓(泰迪熊造型，紅棕捲毛)
function buildPoo(bp, model) {
  const vinyl = o => mat(o, { rough: 0.7 });
  const fur = vinyl(0xb36a32), light = vinyl(0xd39a62), skin = vinyl(0xd9545a);
  const D = { hd: 0.03, u: 0.055, l: 0.055, zf: 0.075, zr: -0.08 };
  const Y0 = D.hd + D.u + D.l + 0.008; bp.position.set(0, Y0, 0);
  const HO = [0, 0.112, 0.118];
  const LEG = [[-0.046, D.zf, 1.15], [0.046, D.zf, 1.15], [-0.05, D.zr, 1.35], [0.05, D.zr, 1.35]];
  const head = new THREE.Bone(); head.position.set(...HO); bp.add(head);
  const jaw = new THREE.Bone(); jaw.position.set(0, -0.045, 0.055); head.add(jaw);
  const tail = new THREE.Bone(); tail.position.set(0, 0.05, -0.11); bp.add(tail);
  const legs = LEG.map(([x, z]) => {
    const hip = new THREE.Bone(); hip.position.set(x, -D.hd, z); bp.add(hip);
    const knee = new THREE.Bone(); knee.position.set(0, -D.u, 0); hip.add(knee);
    return { hip, knee };
  });
  const bones = [bp, head, jaw, tail, ...legs.flatMap(l => [l.hip, l.knee])];
  if (!smoothGeo.poo) {
    const M = (x, y, z) => [x, y + Y0, z], H = (x, y, z) => [x + HO[0], y + HO[1] + Y0, z + HO[2]];
    const parts = [];
    const ell = (c, r, bone, col = 0, k = 0.03) => parts.push({ f: (x, y, z) => sdEll(x, y, z, c, r), bone, col, k });
    const cap = (a, b, ra, rb, bone, col = 0, k = 0.03) => parts.push({ f: (x, y, z) => sdCap(x, y, z, a, b, ra, rb), bone, col, k });
    ell(M(0, 0, -0.01), [0.08, 0.078, 0.105], 0);               // 蓬蓬身體
    ell(M(0, 0.008, 0.06), [0.076, 0.08, 0.066], 0);
    ell(M(0, 0.008, -0.072), [0.073, 0.072, 0.06], 0);
    cap(M(0, 0.04, 0.072), H(0, -0.015, -0.022), 0.056, 0.054, 0); // 脖子
    ell(H(0, 0, 0), [0.076, 0.072, 0.07], 1);                   // 泰迪圓頭
    ell(H(0, 0.046, -0.006), [0.062, 0.04, 0.056], 1, 0, 0.03);  // 頭頂蓬毛
    ell(H(0, -0.026, 0.062), [0.036, 0.031, 0.036], 1, 1, 0.022); // 圓圓淺色嘴
    ell(H(-0.07, -0.04, -0.004), [0.03, 0.066, 0.036], 1, 0, 0.02); // 長垂耳
    ell(H(0.07, -0.04, -0.004), [0.03, 0.066, 0.036], 1, 0, 0.02);
    cap(M(0, 0.05, -0.105), M(0, 0.085, -0.12), 0.016, 0.014, 3, 0, 0.015); // 尾巴
    ell(M(0, 0.1, -0.128), [0.036, 0.036, 0.036], 3, 0, 0.015);   // 尾巴毛球
    LEG.forEach(([x, z, th], i) => {
      const hp = M(x, -D.hd, z), kn = [hp[0], hp[1] - D.u, hp[2]], ft = [kn[0], kn[1] - D.l, kn[2]];
      cap([hp[0], hp[1] + 0.03, hp[2]], kn, 0.029 * th, 0.027, 4 + i * 2, 0, 0.035);
      cap(kn, [ft[0], ft[1] + 0.014, ft[2]], 0.027, 0.027, 5 + i * 2, 0, 0.02);
      ell([ft[0], ft[1] + 0.013, ft[2] + 0.008], [0.031, 0.016, 0.034], 5 + i * 2, 0, 0.02);
    });
    smoothGeo.poo = buildSmoothGeometry(parts, bones.length, [0xb36a32, 0xd39a62], [0, 0.18, 0.0, 0.5]);
  }
  const mesh = new THREE.SkinnedMesh(smoothGeo.poo, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.75 })); mesh.frustumCulled = false;
  model.add(mesh); model.add(bp); model.updateMatrixWorld(true); mesh.bind(new THREE.Skeleton(bones));
  E(head, 0.015, 0.011, 0.01, mat(0x111111, { rough: 0.3 }), 0, -0.012, 0.098);   // 大黑鼻
  eyeBall(head, -0.027, 0.012, 0.064, 0.013, 0x0c0806, { yaw: -0.2, rim: 0x3a1c0c });
  eyeBall(head, 0.027, 0.012, 0.064, 0.013, 0x0c0806, { yaw: 0.2, rim: 0x3a1c0c });
  E(jaw, 0.022, 0.008, 0.022, light, 0, 0, 0.012); E(jaw, 0.014, 0.004, 0.015, skin, 0, 0.004, 0.014);
  return { head, jaw, tail, legs, D, top: HO[1] + 0.09 + Y0 };
}

function makePugGLB() {
  const root = new THREE.Group(), model = SkeletonUtils.clone(pugAsset.scene);
  const SC = 0.7; model.scale.setScalar(SC); root.add(model);
  const mixer = new THREE.AnimationMixer(model), act = {};
  for (const a of pugAsset.animations) act[a.name.split('|').pop()] = mixer.clipAction(a);
  return { root, model, glb: { mixer, act, cur: null }, height: 0.75 * SC, bp0: 0, pose: {} };
}
export function makeDogModel(type) {
  const info = DOGS[type];
  const root = new THREE.Group(), model = new THREE.Group(); root.add(model); model.scale.setScalar(info.s);
  const smooth = true;
  const bp = smooth ? new THREE.Bone() : new THREE.Group(); if (!smooth) model.add(bp);
  const parts = type === 'chi' ? buildChi(bp, model) : type === 'pug' ? buildPug(bp, model) : buildPoo(bp, model);
  const { D } = parts;
  const L = D.u + D.l, paw = 0.008;
  const bp0 = D.hd + L + paw;
  // 坐下：後腿關節貼地的身體高度
  const p = -0.75, rearY = -D.hd * Math.cos(p) - D.zr * Math.sin(p);
  const sitY = 0.03 - rearY;
  bp.position.y = bp0;
  root.traverse(o => { if (o.isMesh) o.castShadow = false; });
  return {
    root, model, bp, head: parts.head, jaw: parts.jaw, tail: parts.tail, legs: parts.legs, bp0, L, sitY, lieY: D.hd + 0.045, sitPitch: p,
    height: parts.top * info.s, pout: parts.pout || null, pose: { y: bp0, pitch: 0, head: 0, jaw: 0, hip: [0, 0, 0, 0], knee: [0, 0, 0, 0], tail: 0 },
  };
}

// ---------------------------------------------------------------- 動作：idle walk run sit lie jump eat (+ bark 疊加)
const lerp = (a, b, t) => a + (b - a) * t;
const GLB_CLIP = { walk: 'Walk', run: 'Run', jump: 'Run_Jump', sit: 'Idle_2', lie: 'Idle_2_HeadLow', eat: 'Eating', idle: 'Idle' };
function animateGLB(d, dt) {
  const g = d.model.glb;
  let want = GLB_CLIP[d.hop > 0 ? 'jump' : d.act] || 'Idle';
  if (d.barkT > 0) { d.barkT -= dt; want = 'Attack'; }
  if (!g.act[want]) want = 'Idle';
  if (want !== g.cur) {
    const n = g.act[want]; n.reset(); n.setLoop(want === 'Attack' || want === 'Run_Jump' ? THREE.LoopOnce : THREE.LoopRepeat, Infinity); n.clampWhenFinished = true; n.fadeIn(0.15).play();
    if (g.cur && g.act[g.cur]) g.act[g.cur].fadeOut(0.15);
    g.cur = want;
  }
  g.mixer.update(dt);
}
export function animateDog(d, dt, time) {
  const m = d.model;
  if (m.glb) return animateGLB(d, dt);
  const P = m.pose;
  const k = 1 - Math.exp(-dt * 16);
  const T = { y: m.bp0, pitch: 0, head: 0, jaw: 0, hip: [0, 0, -0.3, -0.3], knee: [0, 0, 0.55, 0.55], tail: 0 };
  const act = d.hop > 0 ? 'jump' : d.act;
  if (act === 'walk' || act === 'run') d.phase += dt * (act === 'run' ? 16 : 9);
  const ph = d.phase;
  if (act === 'walk') {
    const phs = [ph, ph + Math.PI, ph + Math.PI, ph];
    for (let i = 0; i < 4; i++) {
      const s = Math.sin(phs[i]), c = Math.cos(phs[i]), lift = Math.max(0, -c);
      if (i < 2) { T.hip[i] = s * 0.45; T.knee[i] = lift * 0.9; }
      else { T.hip[i] = -0.3 + s * 0.4; T.knee[i] = 0.55 + lift * 0.6; }
    }
    T.y += Math.abs(Math.sin(ph)) * 0.004; T.head = Math.sin(ph * 2) * 0.04; T.tail = Math.sin(time * 7) * 0.35;
  } else if (act === 'run') {
    const f = Math.sin(ph), b = Math.sin(ph + 1.7);
    T.hip = [f * 0.9 - 0.1, Math.sin(ph + 0.35) * 0.9 - 0.1, -0.3 + b * 0.8, -0.3 + Math.sin(ph + 2.05) * 0.8];
    T.knee = [Math.max(0, -Math.cos(ph)) * 1.2, Math.max(0, -Math.cos(ph + 0.35)) * 1.2, 0.55 + Math.max(0, -Math.cos(ph + 1.7)) * 0.7, 0.55 + Math.max(0, -Math.cos(ph + 2.05)) * 0.7];
    T.y += Math.abs(Math.sin(ph)) * 0.025; T.pitch = Math.sin(ph) * 0.12; T.head = -Math.sin(ph) * 0.12; T.tail = Math.sin(time * 14) * 0.4;
  } else if (act === 'sit') {
    T.y = m.sitY; T.pitch = m.sitPitch; T.head = 0.65; T.hip = [0, 0, -1.55, -1.55]; T.knee = [0, 0, 2.7, 2.7]; T.tail = Math.sin(time * 4) * 0.3;
  } else if (act === 'lie' || act === 'eat') {
    T.y = m.lieY; T.pitch = 0; T.head = act === 'eat' ? 0.55 : 0.08; T.hip = [-1.45, -1.45, -1.3, -1.3]; T.knee = [0.15, 0.15, 2.5, 2.5]; T.tail = Math.sin(time * 2) * 0.15;
    if (act === 'eat') T.jaw = 0.3 * (0.5 + 0.5 * Math.sin(time * 18));
  } else if (act === 'jump') {
    T.pitch = -0.25; T.head = -0.1; T.hip = [-1.0, -1.0, 0.8, 0.8]; T.knee = [1.1, 1.1, 0.2, 0.2]; T.tail = 0.4;
  } else { // idle 呼吸 + 東張西望
    T.y += Math.sin(time * 2.2 + d.seed) * 0.0025; T.tail = Math.sin(time * 5 + d.seed) * 0.25; T.head = Math.sin(time * 0.7 + d.seed) * 0.08;
  }
  if (d.type === 'chi' && d.state === 'chase') T.tail = Math.sin(time * 40) * 0.5;
  let roll = 0;
  if (d.type === 'chi') {
    if (act === 'idle' || act === 'walk' || act === 'sit') T.head -= 0.28;           // 抬高下巴
    if (act === 'walk') roll = Math.sin(ph) * 0.09; else if (act === 'run') roll = Math.sin(ph) * 0.05;  // 胖胖左右搖
    if (act === 'idle') T.y += Math.sin(time * 1.6 + d.seed) * 0.004;                 // 挺胸呼吸
  }
  if (d.barkT > 0) {
    d.barkT -= dt;
    T.head -= 0.5; T.jaw = 0.6 * (0.5 + 0.5 * Math.sin(time * 34)); T.pitch -= 0.08; T.y += 0.006;
  }
  P.y = lerp(P.y, T.y, k); P.pitch = lerp(P.pitch, T.pitch, k); P.head = lerp(P.head, T.head, k); P.jaw = lerp(P.jaw, T.jaw, k); P.tail = lerp(P.tail, T.tail, k);
  for (let i = 0; i < 4; i++) { P.hip[i] = lerp(P.hip[i], T.hip[i], k); P.knee[i] = lerp(P.knee[i], T.knee[i], k); }
  m.bp.position.y = P.y; m.bp.rotation.x = P.pitch; m.bp.rotation.z = lerp(m.bp.rotation.z, roll, k); if (m.pout) m.pout.visible = P.jaw < 0.12; m.head.rotation.x = P.head; m.jaw.rotation.x = P.jaw; m.tail.rotation.y = P.tail;
  for (let i = 0; i < 4; i++) { m.legs[i].hip.rotation.x = P.hip[i] - P.pitch; m.legs[i].knee.rotation.x = P.knee[i]; }
}
