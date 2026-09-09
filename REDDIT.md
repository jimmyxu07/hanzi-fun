# Reddit 投放包 · Hanzi Beasts

> 目标：拿到**第一批陌生人的真实行为数据**（不是点赞，是"他能不能自己玩明白"）。
> 生成日期：2026-09-09

---

## 一、发在哪：按"规则匹配度 × 流量"排序

| 排序 | 社区 | 成员量级 | 为什么 | 风险 / 前置条件 |
|---|---|---|---|---|
| **1** | **r/WebGames** | ~139k | 明确允许开发者发浏览器游戏；要求"直链单个游戏、免下载、免注册"——我们三条全满足 | 见下方"三条硬规则" |
| 2 | **r/incremental_games** | ~200k+ | 收集/图鉴机制对味；有 **Feedback Friday** 专栏，发在那最稳 | 平时直接发主贴可能被删，**优先找 FF 帖** |
| 3 | **r/playmygame** | 中等 | 这就是给开发者发自己游戏的地方 | 规矩是**先给别人反馈**，你发了就跑会被记恨 |
| 4 | **r/DestroyMyGame** | 中等 | 明说是"求骂"，自推完全合规 | 要真能接受批评；措辞得改成"请喷" |
| 5 | r/ChineseLanguage | 大 | 人群最精准 | **默认禁自推**。要先 **Modmail 申请**），或走它的资源分享帖 |
| 6 | r/IndieGaming | 大 | 流量大 | 自推限制较严，通常有指定日（Self-Promo 类），需查当期置顶 |

**一句话建议**：**先 r/WebGames**，24–48 小时后看数据再决定第二个。不要同一天把同一段文案丢进 5 个 sub——Reddit 的垃圾过滤是按"短时间内重复内容"抓的，一次被标记，后面都难。

### r/WebGames 的三条硬规则（必须照做，否则秒删）

1. **标题必须以游戏名开头** → 我们的帖子标题必须一上来就是 `Hanzi Beasts`，标签如 `[HTML5]` 可前置。
2. **必须直链到单个游戏**，不能链合集/目录 → 链接填 `https://hanzi.fun`，正文里也别塞一堆别的链接。
3. **3 个月内不得重复发同一款游戏** → 这是首次发布，OK；但**发完一次就别再发第二次**，有重大更新要先 Modmail 报备。

> ⚠️ 一条我们可能踩到的：该 sub 规则 P6 提到"需要非标准设备（如智能手机）的游戏不允许"。我们是桌面优先，**手机上能打开但手感一般**。建议正文里如实写 `Best on desktop`，不要假装移动完美——被拆穿比承认缺点严重得多。

### 发之前的账号体检（比文案重要）

- 新号 / karma 极低的号发外链，**大概率被自动删或秒被 mod 移除**。
- 建议：发布前 1–2 天在目标 sub 里**认真评论 3–5 条别人的帖子**（不是"cool"这种），让账号看起来是活人。
- 发完**必须回评论区**：有人提 bug 就谢 + 记下，别争辩。Reddit 对"发完就消失的开发者"零容忍。

---

## 二、配图：要，第一张最关键

| 顺序 | 文件 | 用途 |
|---|---|---|
| 1 | `og-image.png`（1200×630） | 卡片主图，标题 + 5 只兽，**决定别人点不点** |
| 2 | `shot-beast-s.png` | 合成成功的"开箱瞬间"：日 + 月 = 明 → Lumen Moth |
| 3 | `shot-board-s.png` | 实际玩法界面（部首架 + 工作台） |
| 4 | `shot-dex-s.png` | 图鉴/收集感（12 只兽全解锁的样子） |

**发成 gallery（多图）而不是单图**——Reddit 的 gallery 在信息流里占位更大。顺序就是上面这个。

> 我没法用鼠标录屏，所以**没有 GIF**。GIF 在 Reddit 上通常比静态图强一档；如果你之后想补，用 QuickTime 录 10 秒"点日→点月→Combine→弹出兽"再转 GIF 就行。没有 GIF 也能发，别为这个卡住。

---

## 三、主文案（r/WebGames 版）

**标题**（必须游戏名开头，三选一）：

```
Hanzi Beasts — combine Chinese radicals and summon the beast hiding inside each character
```

```
[HTML5] Hanzi Beasts — a tiny discovery game where 日 + 月 = 明, and 明 is a moth
```

```
Hanzi Beasts — 14 radicals, 12 beasts, no Chinese required
```

**正文**：

```
I've been playing with Chinese characters for years and always thought the
radicals looked like puzzle pieces — so I built a small game around that.

**How it works:** you get a shelf of 14 radicals. Drag two or three together
and see what character they build. If it's a real character, the beast hiding
inside it shows up and goes into your dex.

No Chinese knowledge needed — that's the whole point. 日 (sun) + 月 (moon) = 明
(bright), and the beast that comes out is a moth with a sun wing and a moon
wing. You're not being quizzed; you're just supposed to poke at it until
something happens.

- 14 radicals, 12 beasts to find
- No signup, no download, no ads, no tracking cookies (self-hosted analytics only)
- Best on desktop
- Takes about 5 minutes to see everything

It's a prototype — I'm mostly trying to answer one question: **can someone who
doesn't read Chinese figure this out without instructions?** So if you get
stuck, I genuinely want to know where.

Play: https://hanzi.fun

(Progress saves in your browser's localStorage. Nothing leaves your device
except anonymous play events.)
```

**首条评论（发完自己立刻占楼，别留空）**：

```
Dev here — happy to answer anything.

Two things I'm actually trying to figure out:
1. Did you find your first beast without looking anything up? How long did it take?
2. Did any of the "these two don't combine" feedback make sense, or did it feel random?

Also: if a beast looks off to you, tell me which one. I drew these by hand as
SVG and I have no idea what I'm doing.
```

---

## 四、变体文案（换 sub 时改角度，别照抄）

### r/incremental_games（收集/图鉴角度）

标题：`Hanzi Beasts — a 5-minute collection game: combine Chinese radicals, fill the dex`

正文重点换成：**12 只兽的收集感 + 图鉴完成度**，少讲文化，多讲"把格子填满"的爽点。末尾一句 `Happy to take feedback — this is a prototype`。

### r/DestroyMyGame（求骂角度）

标题：`[HTML5] Hanzi Beasts — rip it apart. Discovery game where you combine Chinese radicals`

正文：**诚实列缺点**（只有 12 只兽、5 只手绘其余占位、字体子集导致某些字形偏细、手机上手感一般），然后问 `What would make you keep playing past 5 minutes?`

### r/ChineseLanguage（**先 Modmail**）

不要以"我做了个游戏"的姿态发。改成资源角度：
`A free browser toy I made for radical recognition — feedback from learners welcome`
并且**明确说"我是开发者"**。装成路人是 Reddit 最忌讳的事，被抓到直接封。

---

## 五、发给朋友的版本（先做这个，成本最低）

Reddit 之前**先发给 3–5 个不懂中文的朋友**，一句话就够，**别解释玩法**——
你一解释，测的就不是"陌生人能不能自己搞懂"了。

```
Hey — I made a tiny browser game, takes ~5 min.
No instructions on purpose: just click two radicals and hit Combine.
https://hanzi.fun

Only thing I need from you: how long until you got your first one, and where you got stuck.
```

**你要观察的是**（比他们的评价重要）：
- 有没有人在没问你的情况下自己合出第一只？
- 卡住时是继续试还是关掉？
- 有没有人问"这字怎么读/这是什么意思"——**这是最强的正面信号**，说明他们被勾住了。

---

## 六、发完之后看什么（别看点赞）

Plausible 里看这几个，而不是 pageview：

| 指标 | 判据 | 说明 |
|---|---|---|
| Source = reddit 的 UV | 有就行 | 先确认链接真被点了 |
| `combine_success` 事件数 / UV | > 1.5 | 平均每人至少合出 1 只，说明玩法跑通 |
| `first_success` 中位耗时 | **< 90 秒** | SPEC 里写死的判据 |
| `combine_fail` 与 `combine_success` 的比值 | < 8:1 | 太高说明反馈引导没起作用 |
| `hint_auto` 触发率 | 越低越好 | 高说明太多人在 5 次失败后还没头绪 |

一周后我按这些出第一份报告。

---

## 七、明确别做的事

- ❌ 同一天把同一段文案发到多个 sub（垃圾过滤会抓）
- ❌ 用新号 / 零 karma 号直接发外链
- ❌ 正文里写 "follow me"、"coming soon"、"wishlist"（营销腔 = 被踩）
- ❌ 评论区为自己的设计辩护（采纳或沉默，二选一）
- ❌ 为了数据好看让朋友刷（我们的判据看的是首次成功耗时，刷出来的数据会骗我们自己）
