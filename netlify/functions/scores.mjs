// 全公司共用排行榜：GET 取得前 50 名；POST {name, score, stage} 上傳成績（每個名字只保留最高分）
import { getStore } from '@netlify/blobs';

const KEY = 'top';
const MAX_SCORE = 3_000_000, MAX_STAGE = 60, KEEP = 100, MIN_GAP_MS = 8000;
const json = (o, status = 200) => new Response(JSON.stringify(o), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });

export default async (req, context) => {
  const store = getStore('leaderboard');
  let top = (await store.get(KEY, { type: 'json' })) || [];
  if (req.method === 'GET') return json({ top: top.slice(0, 50) });
  if (req.method !== 'POST') return json({ error: 'method' }, 405);

  let b; try { b = await req.json(); } catch { return json({ error: 'bad json' }, 400); }
  const name = String(b.name ?? '').replace(/[\u0000-\u001f<>]/g, '').trim().slice(0, 10) || '捕獸員';
  const score = Math.floor(Number(b.score)), stage = Math.floor(Number(b.stage));
  if (!Number.isFinite(score) || !Number.isFinite(stage) || score < 0 || score > MAX_SCORE || stage < 1 || stage > MAX_STAGE) return json({ error: 'invalid' }, 400);
  // 粗略防洗榜：同一 IP 兩次上傳至少間隔數秒；每關最多合理分數
  if (score > stage * 120000 + 20000) return json({ error: 'invalid' }, 400);
  const ip = context?.ip || req.headers.get('x-nf-client-connection-ip') || 'x';
  const rl = await store.get('rl:' + ip, { type: 'json' }).catch(() => null);
  const now = Date.now();
  if (rl && now - rl < MIN_GAP_MS) return json({ error: 'slow down', top: top.slice(0, 50) }, 429);
  await store.setJSON('rl:' + ip, now);

  const i = top.findIndex(e => e.name === name);
  if (i < 0) top.push({ name, score, stage, t: now });
  else if (score > top[i].score) top[i] = { name, score, stage, t: now };
  top.sort((a, c) => c.score - a.score || a.t - c.t);
  top = top.slice(0, KEEP);
  await store.setJSON(KEY, top);
  const rank = top.findIndex(e => e.name === name) + 1;
  return json({ top: top.slice(0, 50), rank });
};

export const config = { path: '/api/scores' };
