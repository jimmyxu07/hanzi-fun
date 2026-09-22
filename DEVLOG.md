# itch.io Devlog 首帖（第 1 篇）

**为什么发这篇**：itch 的项目页右侧在提示 `Consider posting a devlog to notify followers of the updates`。Devlog 会进关注者时间线，并且被 tag 浏览页捞到 —— 这是 itch 官方渠道里唯一带自然流量的动作，比项目页本身重要。首发内容别写"我们上线了"，要**给一个能回复的钩子**，评论数是 itch 排版的隐性权重。

**标题**：
```
12 beasts in, 40 to go — which pair should become beast #13?
```

**发布路径**：项目页右侧 `New devlog` → 或 Dashboard → Devlogs → New post。正文编辑器与 Description 同一个（**没有 Markdown 模式**），点工具栏最左的 `<>` 进 HTML 源码视图，把下面整段粘进去，再切回可视化确认排版。

## 发布页字段怎么填（2026-09-13 实测）

| 字段 | 填什么 | 理由 |
|---|---|---|
| **Post type** | **`Major update or Launch`**（Updates, announcements, or changelogs 分组下；**另一组 `Long-form discussion` 整栏留空**） | 这是**必填项**，且 itch 明确写了"请准确选择，否则帖子可能被拒"。它不是两组并列字段，而是同一个 `Select a post type` 的候选分组、**只能选一个**。本篇正文首句就是"First public build is up"，是首次公开发布，选 Launch 才属实。**不要为了蹭曝光去选讨论类**（Game Design / Tech discussion）——选择与内容不符正是被拒的理由 |
| Tags | `chinese` · `radicals` · `puzzle` · `prototype`（每输一个按回车保存） | 3-4 个精准标签即可，堆满不加分 |
| Languages | **English** | 帖子正文是英文。该字段影响推给谁看，填对没坏处 |
| Original publish date | **留空** | 只有从别处转载/迁移文章才填 |
| **Cover image** | 上传 `og-image.png`（1200×630，本目录已有） | 字段要求 16:9、最小宽 500px，OG 图正好。**这张图决定 devlog 卡片在 itch 信息流里的观感**，不传就是纯文字卡片，白丢一次曝光 |
| Comments | 保持 `Enable comments` ✅ | 首帖要的就是评论 |
| Visibility | 保持 `Public` ✅ | — |
| Attachments | itch 已自动挂上 zip + 3 张图，**保留不用动** | 图会显示在帖子里，等于多一次素材曝光 |

> 注意：`Post type` 不选的话点 Save 会报错卡住；其余字段都可留空。

## 正文（HTML 版，直接粘 `<>` 源码视图）

```html
<p>First public build is up. <strong>Hanzi Beasts</strong> is a small browser puzzle about how Chinese characters are actually built — you drag radicals into the slots, hit Combine, and find out what character they make and what beast is hiding inside it.</p>

<p>No Chinese knowledge needed. Trial and error <em>is</em> the game.</p>

<p>Right now there are <strong>14 radicals and 12 beasts</strong>, split into 3 tiers. A full run takes about 10 minutes.</p>

<p>Two things I'd love your take on:</p>

<ul>
<li><strong>Did the "aha" land?</strong> The first combination you'll probably find is 日 (sun) + 月 (moon) = 明 (bright). Did that feel like a discovery, or did it feel arbitrary? If it felt arbitrary, that's a design problem I want to fix.</li>
<li><strong>Which pair should become beast #13?</strong> Some candidates I'm weighing:</li>
</ul>

<blockquote>
<p>小 (small) on top of 大 (big) = 尖 (pointy) — a tiny imp sitting on a giant's shoulders</p>
<p>水 (water) + 目 (eye) = 泪 (tears) — easier to read without any explanation</p>
<p>three 人 (person) = 众 (crowd) — a mob, but what does a crowd-beast even look like?</p>
</blockquote>

<p>Reply with a pair (or a character you think deserves a beast) and I'll draw it into the next build.</p>

<p><em>Heads up on how this is made: the code and the creature art are AI-generated, and I'm directing it. The project page carries the itch AI disclosure. I'd rather say that plainly than have you guess.</em></p>

<p>Play it here, or on the web version at <a href="https://hanzi.fun">hanzi.fun</a>.</p>
```

## 发布后

- 评论回复要**当天回**。itch 的早期评论者是最可能帮你传播的人，回慢了就凉了。
- 如果同一篇 devlog 拿到的评论 > 3，说明选题方向对，下一篇就写评论里呼声最高的那只兽（配图 + 拆字解释）。
- 别把 itch 当主渠道：它的真实作用是「可索引的落地页 + 一批真实反馈」，量还得靠 Reddit / 社媒往 hanzi.fun 导。
