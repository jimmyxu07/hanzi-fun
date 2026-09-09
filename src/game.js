// 验证版：只载 12 只 + 14 部首（见 data.js 的 ACTIVE_IDS）
import { ACTIVE_RADICALS as RADICALS, ACTIVE_RECIPES as RECIPES, ACTIVE_RECIPE_MAP as RECIPE_MAP } from './data.js';
import { beastSVG } from './beasts.js';

const SAVE_KEY = 'hanzi-beasts-v1';
const LOG_KEY  = 'hanzi-beasts-v1-log';
const SHARE_URL = 'https://hanzi.fun';

const state = {
  unlocked: new Set(),
  slots: [],
  failStreak: 0,
  hintShown: false,
  stats: { attempts: 0, success: 0, startedAt: Date.now(), firstSuccessMs: null },
};

/* ---------------- 埋点 ---------------- */
function track(name, data = {}) {
  if (typeof window.plausible === 'function') window.plausible(name, { props: data });
  try {
    const log = JSON.parse(localStorage.getItem(LOG_KEY) || '[]');
    log.push({ name, t: Date.now(), ...data });
    localStorage.setItem(LOG_KEY, JSON.stringify(log.slice(-1000)));
  } catch (e) { /* 隐私模式下忽略 */ }
}

/* ---------------- 存档 ---------------- */
function save() {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify({
      unlocked: [...state.unlocked], stats: state.stats,
    }));
  } catch (e) {}
}
function load() {
  try {
    const raw = JSON.parse(localStorage.getItem(SAVE_KEY) || 'null');
    if (!raw) return;
    state.unlocked = new Set(raw.unlocked || []);
    Object.assign(state.stats, raw.stats || {});
  } catch (e) {}
}

/* ---------------- DOM ---------------- */
const $ = s => document.querySelector(s);
const shelfEl = $('#shelf'), slotsEl = $('#slots'), fbEl = $('#feedback');
const dexEl = $('#dex'), progEl = $('#progress'), hintEl = $('#hint');
const modalEl = $('#modal'), modalBody = $('#modalBody'), statsEl = $('#statsPanel');

/* ---------------- 渲染 ---------------- */
function renderShelf() {
  shelfEl.innerHTML = Object.entries(RADICALS).map(([id, r]) => `
    <button class="rad" data-id="${id}" style="--c:${r.color}" aria-label="${r.en}">
      <span class="rad-c">${r.c}</span>
      <span class="rad-en">${r.en}</span>
    </button>`).join('');
}

function renderSlots() {
  slotsEl.innerHTML = [0, 1, 2].map(i => {
    const id = state.slots[i];
    if (!id) return `<button class="slot empty" data-i="${i}" aria-label="empty slot ${i + 1}"><span class="slot-q">?</span></button>`;
    const r = RADICALS[id];
    return `<button class="slot filled" data-i="${i}" style="--c:${r.color}" aria-label="remove ${r.en}">
      <span class="slot-c">${r.c}</span><span class="slot-en">${r.en}</span></button>`;
  }).join('');
  $('#combine').disabled = state.slots.length < 2;
}

function renderDex() {
  dexEl.innerHTML = [[1, 'Tier 1'], [2, 'Tier 2'], [3, 'Tier 3']].map(([t, label]) => {
    const inTier = RECIPES.filter(r => r.tier === t);
    if (!inTier.length) return '';   // 验证版没有 Tier3，别渲染空分组
    const items = inTier.map(r => {
      if (!state.unlocked.has(r.out)) {
        return `<div class="cell locked"><span class="cell-q">?</span><span class="cell-en">tier ${t}</span></div>`;
      }
      return `<button class="cell got" data-id="${r.id}" style="--c:${r.pal[0]}" aria-label="${r.out} ${r.beast}">
        <span class="cell-art">${beastSVG(r)}</span>
        <span class="cell-c">${r.out}</span><span class="cell-en">${r.en}</span></button>`;
    }).join('');
    return `<div class="dex-group"><h3>${label}</h3><div class="dex-grid">${items}</div></div>`;
  }).join('');
  progEl.textContent = `${state.unlocked.size} / ${RECIPES.length}`;
}

function renderAll() { renderSlots(); renderDex(); }

/* ---------------- 反馈 ---------------- */
function multiset(parts) {
  const m = new Map();
  for (const p of parts) m.set(p, (m.get(p) || 0) + 1);
  return m;
}

// 分级反馈：完全无关 / 部分对 / 差一点
function feedback(parts) {
  const pc = multiset(parts);
  let best = 0;
  for (const rec of RECIPES) {
    const rc = multiset(rec.parts);
    let m = 0;
    for (const [k, v] of pc) m += Math.min(v, rc.get(k) || 0);
    if (m > best) best = m;
  }
  if (best === 0) return { level: 0, msg: "Nothing happens. These two have never met." };
  if (best >= parts.length) return { level: 2, msg: "So close — the shape is right, but something is missing." };
  return { level: 1, msg: "Something stirs… at least one of these belongs." };
}

function showFeedback(msg, level) {
  fbEl.textContent = msg;
  fbEl.className = 'feedback show lv' + level;
  if (level === 0) {
    slotsEl.classList.remove('shake');
    void slotsEl.offsetWidth;
    slotsEl.classList.add('shake');
  }
}

function clearFeedback() { fbEl.className = 'feedback'; fbEl.textContent = ''; }

/* ---------------- 提示 ---------------- */
function showHint(auto) {
  const rest = RECIPES.filter(r => !state.unlocked.has(r.out)).sort((a, b) => a.tier - b.tier);
  if (!rest.length) { hintEl.textContent = "You found all 30."; hintEl.classList.add('show'); return; }
  const target = rest[0];
  const first = RADICALS[target.parts[0]];
  hintEl.innerHTML = `Hint: a ${target.parts.length}-part recipe you haven't found uses
    <b style="color:${first.color}">${first.c} ${first.en}</b>.`;
  hintEl.classList.add('show');
  if (auto) track('hint_auto', { target: target.id });
}

/* ---------------- 合成 ---------------- */
function addPart(id) {
  if (state.slots.length >= 3) return;
  state.slots.push(id);
  clearFeedback();
  renderSlots();
  track('radical_pick', { id });
}

function removeSlot(i) {
  state.slots.splice(i, 1);
  clearFeedback();
  renderSlots();
}

function doCombine() {
  if (state.slots.length < 2) return;
  const parts = [...state.slots];
  const k = [...parts].sort().join('+');
  const rec = RECIPE_MAP.get(k);
  state.stats.attempts++;

  if (rec) {
    if (state.unlocked.has(rec.out)) {
      showFeedback(`You already have ${rec.out} (${rec.en}).`, 1);
    } else {
      state.unlocked.add(rec.out);
      state.stats.success++;
      state.failStreak = 0;
      if (state.stats.firstSuccessMs === null) {
        state.stats.firstSuccessMs = Date.now() - state.stats.startedAt;
      }
      track('combine_success', { out: rec.out, id: rec.id, tier: rec.tier });
      save(); renderAll();
      openBeast(rec, true);
      state.slots = [];
      renderSlots();
      hintEl.classList.remove('show');
      return;
    }
  } else {
    state.failStreak++;
    const fb = feedback(parts);
    showFeedback(fb.msg, fb.level);
    track('combine_fail', { parts: k, level: fb.level, streak: state.failStreak });
    if (state.failStreak >= 5 && !state.hintShown) { state.hintShown = true; showHint(true); }
  }
  save();
}

/* ---------------- 兽卡片 ---------------- */
function openBeast(rec, isNew) {
  const formula = rec.parts.map(p => `<span class="chip" style="--c:${RADICALS[p].color}">${RADICALS[p].c}</span>`).join('<span class="plus">+</span>');
  modalBody.innerHTML = `
    <div class="beast-art">${beastSVG(rec)}</div>
    ${isNew ? '<div class="newtag">New beast</div>' : ''}
    <div class="beast-meta">
      <div class="beast-hz">${rec.out}</div>
      <div class="beast-py">${rec.py}</div>
      <div class="beast-en">${rec.en}</div>
      <div class="beast-name">${rec.beast}</div>
      <p class="beast-blurb">${rec.blurb}</p>
      <div class="beast-formula">${formula}</div>
      <div class="beast-actions">
        <button id="shareBtn">Copy share text</button>
        <button id="closeBtn" class="ghost">Close</button>
      </div>
    </div>`;
  modalEl.classList.add('show');

  const text = `I summoned ${rec.beast} — ${rec.out} (${rec.py}) "${rec.en}" — from ${rec.parts.map(p => RADICALS[p].c).join(' + ')}.\n${rec.blurb}\n${SHARE_URL}`;
  $('#shareBtn').onclick = async () => {
    try {
      await navigator.clipboard.writeText(text);
      $('#shareBtn').textContent = 'Copied';
      track('share_copy', { id: rec.id });
    } catch (e) { $('#shareBtn').textContent = 'Copy failed'; }
  };
  $('#closeBtn').onclick = closeModal;
}

function closeModal() { modalEl.classList.remove('show'); }

/* ---------------- 统计面板 ---------------- */
function toggleStats() {
  if (statsEl.classList.contains('show')) { statsEl.classList.remove('show'); return; }
  let log = [];
  try { log = JSON.parse(localStorage.getItem(LOG_KEY) || '[]'); } catch (e) {}
  const byName = log.reduce((a, r) => (a[r.name] = (a[r.name] || 0) + 1, a), {});
  const fs = state.stats.firstSuccessMs;
  statsEl.innerHTML = `
    <h3>Local stats <span class="muted">(press S to close)</span></h3>
    <div class="srow"><span>Unlocked</span><b>${state.unlocked.size} / ${RECIPES.length}</b></div>
    <div class="srow"><span>Attempts / success</span><b>${state.stats.attempts} / ${state.stats.success}</b></div>
    <div class="srow"><span>First success</span><b>${fs === null ? '—' : (fs / 1000).toFixed(1) + 's'}</b></div>
    <div class="srow"><span>Session</span><b>${((Date.now() - state.stats.startedAt) / 60000).toFixed(1)} min</b></div>
    <h4>Events</h4>
    <div class="srow"><span>${Object.entries(byName).map(([k, v]) => `${k}:${v}`).join('  ') || '—'}</span></div>
    <button id="resetBtn" class="ghost">Reset progress</button>`;
  statsEl.classList.add('show');
  $('#resetBtn').onclick = () => {
    state.unlocked.clear(); state.slots = []; state.stats = { attempts: 0, success: 0, startedAt: Date.now(), firstSuccessMs: null };
    localStorage.removeItem(SAVE_KEY); localStorage.removeItem(LOG_KEY);
    renderAll(); statsEl.classList.remove('show');
  };
}

/* ---------------- 事件 ---------------- */
shelfEl.addEventListener('click', e => {
  const b = e.target.closest('.rad');
  if (b) addPart(b.dataset.id);
});
slotsEl.addEventListener('click', e => {
  const b = e.target.closest('.slot');
  if (!b) return;
  const i = +b.dataset.i;
  if (state.slots[i]) removeSlot(i);
});
$('#combine').addEventListener('click', doCombine);
$('#clear').addEventListener('click', () => { state.slots = []; renderSlots(); clearFeedback(); });
$('#hintBtn').addEventListener('click', () => showHint(false));
dexEl.addEventListener('click', e => {
  const b = e.target.closest('.cell.got');
  if (!b) return;
  const rec = RECIPES.find(r => r.id === b.dataset.id);
  if (rec) openBeast(rec, false);
});
modalEl.addEventListener('click', e => { if (e.target === modalEl) closeModal(); });
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
  if (e.key === 'Enter') doCombine();
  if (e.key === 'Backspace') { state.slots.pop(); renderSlots(); }
  if (e.key.toLowerCase() === 's' && !e.metaKey && !e.ctrlKey) toggleStats();
});

/* ---------------- 启动 ---------------- */
load();
// ?all=1 —— 解锁全部，仅用于美术评审 / 截图，不写存档
if (new URLSearchParams(location.search).has('all')) {
  RECIPES.forEach(r => state.unlocked.add(r.out));
}
renderShelf();
renderAll();
if (state.unlocked.size === 0) track('session_start', { fresh: true });

// ?demo=<recipeId> —— 直接展开某只兽的卡片，用于宣传图/截图，不写存档、不触发埋点
const demoId = new URLSearchParams(location.search).get('demo');
if (demoId) {
  const rec = RECIPES.find(r => r.id === demoId);
  if (rec) { state.slots = [...rec.parts]; renderSlots(); openBeast(rec, false); }
}
