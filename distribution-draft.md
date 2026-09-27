# Hanzi Beasts · 分发验证文案（2026-09-27 起草）

> 用途：拿**第一批陌生人的真实行为数据**，验证「不识中文的人能否无引导自己玩明白」。
> 判定线（见 `REDDIT.md` §七）：`combine_success 事件数 / UV > 1.5`、`first_success 中位耗时 < 90s`、`fail:success < 8:1`。
> 今天已上线的新东西：**首屏引导卡 + 脉冲跟随提示目标**（已 md5 验收 live）。下面文案已把这点写进去。

---

## 发之前先确认（避免白发）

- [ ] 在目标 sub 认真评论 3–5 条别人的帖（带具体内容，非 "cool"），隔 1–2 天再发。零 karma 新号发外链大概率被自动删。
- [ ] 链接用 **hanzi.fun**（我们的验证指标在自有站 Plausible 上看；itch 流量统计不到，见下方链接取舍）。
- [ ] 发完**立刻占楼**（首条评论），之后回评论区答疑、不争辩。
- [ ] 不要同一天同一段文案发多个 sub（垃圾过滤按重复内容抓）。

---

## A. Reddit 首帖（r/WebGames，主战场）

**三条硬规则**（否则秒删）：① 标题以游戏名开头；② 直链单个游戏；③ 3 个月内不重发。

**标题（三选一）：**

```
Hanzi Beasts — combine Chinese radicals and summon the beast hiding inside each character
```

```
[HTML5] Hanzi Beasts — a tiny discovery game where 日 + 月 = 明, and 明 is a moth
```

```
Hanzi Beasts — 14 radicals, 12 beasts, no Chinese required
```

**正文（整段复制）：**

```
I built a small browser game around something I always thought looked like
puzzle pieces: Chinese radicals.

**How it works:** you get a shelf of 14 radicals. Drag two or three together
and see what character they build. If it's a real one, the beast hiding inside
it shows up and goes into your dex. No Chinese knowledge needed — that's the
whole point. 日 (sun) + 月 (moon) = 明 (bright), and the beast that comes out is
a moth with a sun wing and a moon wing.

I shipped a quiet first version a few weeks ago and watched the analytics: most
people opened it, stared at the radicals, and left without touching anything.
So this week I added a first-screen hint — a one-line "how to play" card plus the
starting tile gently pulsing — so you're not dropped in cold. Same game, just
less of a blank wall.

- 14 radicals, 12 beasts to find across 3 tiers
- No signup, no download, no ads, no tracking cookies (self-hosted analytics only)
- Best on desktop
- ~5–10 minutes to see everything

It's a prototype — I'm mostly trying to answer one question: **can someone who
doesn't read Chinese figure this out without instructions?** So if you get stuck,
I genuinely want to know where.

Play: https://hanzi.fun

(Progress saves in your browser's localStorage. Nothing leaves your device except
anonymous play events.)
```

**首条评论（发完自己立刻占楼，别留空）：**

```
Dev here — happy to answer anything.

Two things I'm actually trying to figure out:
1. Did you find your first beast without looking anything up? How long did it take?
2. Did the "these two don't combine" feedback make sense, or did it feel random?

Also: if a beast looks off to you, tell me which one. I drew these by hand as
SVG and I have no idea what I'm doing.
```

### 链接取舍（重要，别跳过）

- **首选 hanzi.fun**：我们的验证指标（`combine_success / UV`、`first_success` 耗时）只在自有站 Plausible 上看得见。itch 的 iframe 流量不进我们的统计。
- **风险**：hanzi.fun 是 9 月初才注册的新域名，Reddit 全站垃圾过滤对「新账号 + 新域名 + 外链」组合几乎必然命中（9/12 首帖就是这么被吃掉的）。
- **兜底**：如果发完被自动移除 / 看不到，先走 `REDDIT.md` §六 的 Modmail 报备，问版主「用 itch 页面链接是否可接受」；得到许可就换成 `https://hanzifun.itch.io/hanzi-beasts`（itch 是高信誉老域名，过检概率高）。**换链接不违规**——itch 项目页本身就是单游戏页、页内可直接玩，满足规则②。
- ⚠️ 换 itch 链接的代价：那批流量我们统计不到，验证指标会失真。所以**优先争取版主批准直链 hanzi.fun**，itch 仅作兜底。
- 正文里 `Best on desktop` 要如实写（手机能开但手感一般），被拆穿比承认缺点严重。

---

## B. itch.io 跟进 Devlog（项目页 → Devlog → New post）

> 首发 devlog（09-13「12 beasts, 40 to go」）已发布。这是**第二篇**，讲这次 onboarding 修复——真实故事，比硬广更有传播性。

**标题：**

```
I was wrong about the onboarding — added a first-screen hint
```

**正文（粘进 Devlog 编辑器，支持 Markdown）：**

```
When I put Hanzi Beasts out a few weeks ago, I was pretty proud of the "no
instructions" idea. The game is about discovering how Chinese characters are
built by combining radicals — so I figured: drop people in front of the shelf
and let them poke at it.

The analytics were brutal. Most sessions loaded the page, looked at the 14
radicals, and left without ever tapping one. My "elegant minimalism" was just a
blank wall.

So this week I caved (in a good way). New players now get:
- a one-line **How to play** card above the shelf (tap a radical → it drops
  into a slot → tap a second → hit Combine)
- the **starting tile gently pulsing** so it's obvious where to begin
- the first hint **auto-fires** on load, instead of waiting for you to fail 5 times

It vanishes the moment you pick your first radical, so it never gets in the way
of someone who's already got it.

Same 12 beasts, same 14 radicals. I just stopped pretending "figure it out" is
fun when there's literally zero signal about what to do.

**What I'm actually curious about:** if you don't read Chinese, how long did it
take you to get your first beast? And did any of the "these don't combine"
feedback make sense? Tell me in the comments — this is a prototype and the next
40 beasts depend on whether the core loop works for people like you.

Play the web version: https://hanzi.fun
```

---

## C. 朋友种子（成本最低，Reddit 之前先做）

发给 3–5 个**不懂中文**的朋友，一句话，**别解释玩法**（你一解释测的就不是陌生人了）：

```
Hey — I made a tiny browser game, takes ~5 min.
No instructions on purpose: just click two radicals and hit Combine.
https://hanzi.fun

Only thing I need from you: how long until you got your first one, and where you got stuck.
```

**观察（比评价重要）：** 有没有人没问你就自己合出第一只？卡住时是继续试还是关掉？有没有人问「这字怎么读」——这是最强正面信号，说明被勾住了。

---

## 发完回填到 Plausible 看什么（别看点赞）

| 指标 | 判据 | 说明 |
|---|---|---|
| Source = reddit / direct 的 UV | 有就行 | 先确认链接真被点了 |
| `combine_success` / UV | > 1.5 | 平均每人至少合出 1 只，玩法跑通 |
| `first_success` 中位耗时 | < 90s | 引导是否真的起效 |
| `combine_fail` : `combine_success` | < 8:1 | 太高说明反馈引导没用 |
| `hint_auto` 触发率 | 越低越好 | 高说明太多人卡住才弹提示 |

一周后按这些出第一份验证报告。若 `combine_success / UV` 仍 < 0.5，再考虑砍方向。

---

## 明确别做

- ❌ 同一天把同一段文案发多个 sub
- ❌ 用零 karma 新号直接发外链（先养号）
- ❌ 正文写 "follow me" / "wishlist" / "coming soon"（营销腔=被踩）
- ❌ 评论区为设计辩护（采纳或沉默）
- ❌ 让朋友刷量（判据看首次成功耗时，刷出来的数据骗自己）
