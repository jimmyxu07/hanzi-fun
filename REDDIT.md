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

### 🔄 2026-09-13 复盘：为什么第一条帖子被全站 spam filter 吃掉

9/12 首发帖被 Reddit 的**全站垃圾过滤**自动移除（不是版主手动删）。已知诱因是「**新账号 + 全新域名 + 外链**」这个组合，三者同时出现时过滤器几乎必然命中。

**新变量：把外链换成 itch.io 页面。** 项目已上架 itch.io：
- 项目页：`https://hanzifun.itch.io/hanzi-beasts`
- Devlog：`https://hanzifun.itch.io/hanzi-beasts/devlog/1662254/12-beasts-in-40-to-go-which-pair-should-become-beast-13`

`itch.io` 在 Reddit 眼里是有高信誉历史的老域名，而 `hanzi.fun` 是刚注册几天的新域名——**同样的文案，换掉这个链接就有机会过检**。取舍：
- r/WebGames 的规则 2 要"直链单个游戏"，itch 项目页本身就是一个单游戏页（页内可直接玩），**满足规则**，所以换链接不违规。
- 但代价是流量落在 itch 而不是自有站，Plausible 统计不到。**建议做法**：Modmail 里先问版主"用 itch 页面链接是否可接受"，得到许可再发；如果版主坚持直链自有域，那就先按养号路线（评论区活跃 3-5 天）再发一次。

> 无论走哪条，**先 Modmail 报备再发**，不要直接重发。3 个月禁重发规则仍然有效，所以第二次机会必须一次过。

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

## 六、Modmail 文案（2026-09-13）

### 先看前置动作（顺序不能反）

1. **今天先别发 Modmail。** 先在 r/WebGames 里**认真评论 3-5 条别人的帖子**（要带具体内容的评论，不是 "cool game"），隔一天再发。零 karma 新号的 modmail，版主大概率直接跳过——**这封信的内容没问题，但发信人的账号状态决定它会不会被读**。
2. 从 sub 页面 About / 侧栏的 **`Message the mods`** 按钮进（最可靠）。URL 形式约为 `https://www.reddit.com/message/compose?to=/r/WebGames`，**这条我没法验证**（本机访问不了 reddit.com），以按钮为准。
3. 发完**等 48-72 小时**。版主不回是常态，不是被拒绝。

### Subject（收件人：r/WebGames mods）

```
Post removed by spam filter — Hanzi Beasts, browser puzzle
```

### 正文（整段复制）

```
Hi mods,

On Sep 12 I posted a free browser puzzle called Hanzi Beasts here. It looks like
the site-wide spam filter caught it before it ever reached the queue.

I'd rather ask than guess, so two quick questions:

1. Would you be open to approving that original post, or to me reposting it?
2. The game is live on my own domain (hanzi.fun — registered a couple of weeks
   ago) and also on itch.io. I'm not asking you to whitelist a new domain — if
   linking the itch.io project page instead is easier on the filter, I'll do that.

What it is, in one line: you drag two Chinese radicals together and the beast
hiding inside the resulting character shows up. Free, no signup, no download,
plays in the browser. No Chinese knowledge required — working out what combines
is the entire game.

No rush, and no problem if the answer is no. I'd just rather not burn the one
post I get.

Thanks for reading.
```

### 三条分支怎么接

| 版主回什么 | 你做什么 |
|---|---|
| 「approve 了 / 直接发吧」 | **优先让他 approve 原帖**（这样不占重发次数）。他若让你重发，就用 itch 链接发新帖，标题照 §三 |
| 「用 itch 链接可以」 | 用 itch 链接发，正文里**不重复贴 hanzi.fun**（一个链接就够，两个像导流） |
| 「必须直链自有域 / 不允许自推」 | 别争。放弃 r/WebGames 这条线，转 **r/incremental_games 的 Feedback Friday**（见下方） |

> ⚠️ 一个必须说清的风险：**这封信本身也可能没回音**。所以不要把它当成唯一通路，48 小时没回就走下面这条。

### 备用主线：r/incremental_games 的 Feedback Friday

**这条比 r/WebGames 更值得先做，而且不需要求人。** Feedback Friday 是版务**主动开设**的开发者自推专栏——在专栏里发自己的游戏是规则内行为，不触发 spam filter 的"未报备自推"逻辑。

- 找当周置顶/侧栏的 Feedback Friday 帖，**用评论形式发**，不是新帖
- 内容用 §四 的收集/图鉴角度改写（12 只兽 + 图鉴完成度），链接用 itch 页面
- 硬性礼貌：**先给帖子里另外 2-3 个人的游戏留具体反馈**再发自己的，这是这个专栏的默认规矩
- 一周一次，可以持续做——**这是唯一可以反复用的合规渠道**

### 备用 Modmail：r/ChineseLanguage（姿态完全不同）

这个 sub 默认禁自推，且**最忌讳装路人**。不要以"我做了个游戏"开场，改成资源角度 + 明确开发者身份：

```
Hi mods,

Quick question before I post anything.

I built a small free browser toy for practicing radical recognition — you drag
two radicals together and see what character they form. No signup, no ads.

I'm the developer, and I know self-promotion is restricted here, so I wanted to
ask first: would a post framed as "a resource for learners, feedback welcome" be
acceptable, or is there a weekly thread I should use instead?

Happy to skip it entirely if it doesn't fit the sub.

Thanks.
```

---

## 七、发完之后看什么（别看点赞）

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

## 八、明确别做的事

- ❌ 同一天把同一段文案发到多个 sub（垃圾过滤会抓）
- ❌ 用新号 / 零 karma 号直接发外链
- ❌ 正文里写 "follow me"、"coming soon"、"wishlist"（营销腔 = 被踩）
- ❌ 评论区为自己的设计辩护（采纳或沉默，二选一）
- ❌ 为了数据好看让朋友刷（我们的判据看的是首次成功耗时，刷出来的数据会骗我们自己）
