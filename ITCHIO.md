# itch.io 上架包 — Hanzi Beasts

## 上线状态（2026-09-13）

- 项目页：**https://hanzifun.itch.io/hanzi-beasts** ✅ 已保存成功，游戏在页面内可正常打开
- 已确认：embed 报错已解决（`You've selected a HTML5 game but haven't configured how your project is embedded` → 见下方排查节）；3 张图片已随项目上传（`Added hanzi-fun-itch.zip, 3 images`）；Description 渲染正常（列表 / 引用块 / 斜体 / 链接全部生效）；Comments 已开启
- ✅ **已确认真实公开（09-13 16:52 无痕验证）**：未登录访客视角下，右上角出现 `Follow HanziFun` / `Add To Collection`，评论区显示 `Log in with itch.io to leave a comment`，游戏在页内正常加载 —— 这就是对外可见的状态。
  > ⚠️ 更正：我此前从 16:46 作者视角截图里的绿色 `Publish` 按钮推断"可能仍是草稿"，**这个推断是错的**。作者视角的工具栏按钮不能用来判断发布状态，**唯一可靠的验证是无痕/未登录访问**。
- ❓ **待核对：那 3 张截图的画廊在无痕页面里没看到。** 需要确认是"窗口窄/移动布局把画廊藏了"还是"图上传了但没挂成项目截图"。检查法：无痕窗口拉宽到全屏看游戏下方有没有图；或在 Edit game → Screenshots 确认里面确实有 3 张。
- ❓ 页面底部出现 `View all 1 devlog` —— 若这是用户刚发的 devlog 则正常；否则需查这 1 篇是什么。
- ✅ **Devlog 首帖已发布（09-13 17:12）**：https://hanzifun.itch.io/hanzi-beasts/devlog/1662254/12-beasts-in-40-to-go-which-pair-should-become-beast-13
  页面核对通过：标题 / 正文（列表 + 引用块 + 斜体 + 链接全渲染）/ 3 张附件图 / `Files: hanzi-fun-itch.zip · Play in browser` 可玩 / Comments 开放 / 侧栏 Status=In development、Author=HanziFun。
  侧栏 Genre 显示 `Puzzle, Educational`、Tags 显示 `browser, chinese, language, short` —— 说明 `puzzle` 与 `educational` 被 itch 归到 **Genre** 而非 Tags，其余 4 个进了 Tags。总曝光面没损失，不用改。
- 🟡 **待你自己瞄一眼**：侧栏简介显示成 `... A bite-sized browser puzzle.no Chinese required.`，`puzzle` 与 `no` 之间那个 `—` 疑似丢失或粘连（正文里的破折号渲染正常，所以更可能是这一处粘贴时字符出了问题）。确认后在 Edit game 把 short description 改成用逗号或普通短横的写法，例如 `A bite-sized browser puzzle, no Chinese required.` —— 这段文字会出现在**每一次链接预览**和站内搜索结果里，值得 20 秒修掉。
- ⬜ 待做：核对 3 张截图内容（不能混入 `shot-*-s.png` 重复项或 `mobile-check.png` 调试图）；确认游戏页截图画廊在宽窗口/未登录状态下正常显示；发 Reddit Modmail（素材见 `REDDIT.md`）

## 交付物（本目录）
| 文件 | 用途 |
|---|---|
| `hanzi-fun-itch.zip` (**27.7 KB**) | HTML5 上传包，index.html 已在根目录，/privacy 与 art gallery 链接已改为指向 hanzi.fun 的新窗口外链。（注意与 `../hanzi-fun-upload.zip` 140.4 KB 区分 —— 那个是给 Cloudflare 用的，没有外链修正，**别传它**） |
| `itch-cover.png` (630×500) | 封面图，**专用排版渲染**（不是裁切），源文件 `cover-itch.html`，见文末说明 |
| `shot-board.png` / `shot-beast.png` / `shot-dex.png` | 三张桌面截图（1120 宽） |
| `shot-mobile.png` (780×1688) | 手机版截图（390×844 @2x），**可作第 4 张** |
| `shot-mobile-card.png` (780×1688) | 手机版兽卡片截图，背景带 55% 暗化遮罩，风格与桌面卡片图一致 |

### 截图上传清单（09-13 核对）

**只传这 4 张（itch 建议 3-5 张）：** `shot-board.png`、`shot-beast.png`、`shot-dex.png`、`shot-mobile.png`（第 4 张可选）

**不要传：**
- ❌ `shot-*-s.png`（三张）—— **09-22 实测定性：不是"小图"，是原图的裁剪版**。裁到同尺寸后与原图 **100.0% 像素完全一致**，只是切掉了底部（board/beast 矮 21px、dex 矮 93px）。两套都传 = 同一画面出现两次
- ❌ `mobile-check.png` —— **调试截图**。像素分析：深色占比 **99.5%**、仅 481 种颜色，而真实游戏画面是 54–80% 奶油底色（`shot-board.png` 79.8%、`shot-dex.png` 60.8%、`shot-mobile.png` 54.2%）。它根本不是游戏画面，不能对外
- ❌ `preview.png` / `gallery-preview.png` / `dex-preview.png` —— 开发期的长图预览，非最终素材
- ❌ `shot-mobile-card.png` —— 与 `shot-mobile.png` 同为手机版，**二选一**，别都传

### 截图核对的操作步骤（09-22 补）

**要核的是两件事**：① 已上传的缩略图内容对不对；② 它们有没有真的显示在项目页上（**上传成功 ≠ 页面能看到**，这是两个独立环节）。

itch 的 Screenshots 区**只显示缩略图、不显示文件名**，所以只能靠画面比对。用本地生成的对照图：

```bash
# 对照图已生成（本地文件，依赖 .gitignore 掉的 shot-*.png，故不入仓库）
open /Users/jimmyxu/WorkBuddy/2026-09-06-17-15-17/hanzi-beasts/itch-shots-review.png
```

1. 登录 itch → **Dashboard → Hanzi Beasts → Edit game** → 滚到 **Screenshots** 区
2. 数一遍缩略图张数，逐张与对照图比对：出现**画面重复的两张**，删掉较矮的那张（文件名以 `-s` 结尾）；出现**纯暗色**的一张，删掉它
3. 如需补传，`Add screenshots` 上传对照图里标「该传」的三张（想展示手机端再加 `shot-mobile.png`）
4. 点 **Save**
5. **验证画廊真的显示**：开无痕窗口（未登录）访问 https://hanzifun.itch.io/hanzi-beasts → 把窗口**拉宽到全屏** → 确认描述与评论区之间有截图画廊
   （09-13 那次窄窗口下画廊不可见，未能区分"布局藏了"还是"没挂上"，所以这次务必用宽窗口确认）

## Tagline（Short description or tagline 字段填这个）

推荐（121 字符，含可搜索词，不重复标题）：

```
Combine Chinese radicals to summon the beast hiding inside each character. A 10-minute browser puzzle — no Chinese required.
```

短版备选（80 字符，预览位窄时更稳）：

```
A bite-sized browser puzzle: combine Chinese radicals, summon the beast inside.
```

> **09-13 实际采用**（上线版本，已确认完整无误，别再改）：
> `Combine Chinese radicals. Summon the beast hiding inside the character. A bite-sized browser puzzle — no Chinese required.`
> 这是 09-12 写的初版，113 字符。与推荐版差异只在「A bite-sized」vs「A 10-minute」的措辞，信息量等价，**保持现状即可**，不要为了对齐推荐版再去改线上字段。

这个字段的实际作用：itch 站内跳转的链接预览 + 站内搜索摘要 + Google 索引的 snippet。所以别写「A fun game!」这种没信息量的，要把 "Chinese radicals / browser puzzle / no Chinese required" 这三个能被搜到的词放进去。itch 的提示是「别重复标题」，两版都没重复。


## 账号与地址（已核对）

- 用户名：**HanziFun** → 主页 **https://hanzifun.itch.io/**（不是 hanziun，我之前猜错了）
- 项目 URL：**https://hanzifun.itch.io/hanzi-beasts** ← 截图里已自动生成，保持不动

## 第一屏「Create a new project」逐字段核对

依据 2026-09-13 的建站页截图，**有 4 处要改，1 处必须改**：

| 字段 | 截图里的值 | 改成 | 说明 |
|---|---|---|---|
| Title | `hanzi-beasts` | **`Hanzi Beasts`** | Title 是显示名，改它不会动已生成的 slug（截图里 09-13 15:06 时还是小写连字符，未改） |
| Project URL | `https://hanzifun.itch.io/hanzi-beasts` | 不动 ✅ | 正好是我们想要的 |
| Short description | 空 | 填 tagline（见下方 Tagline 区） | 会被 itch 的链接预览和搜索结果用到 |
| Classification | Games ✅ | 不动 | 正确 |
| **Kind of project** | `HTML` ✅ | 已改对，不动 | 09-13 15:06 截图已确认是 `HTML — You have a ZIP or HTML file that will be played in the browser` |
| Release status | `In development` ✅ | 已改对，不动 | — |
| Pricing | `No payments` ✅ | 已改对，不动 | 09-13 15:06 截图已确认勾选，页面提示 "files will be freely available and no donations can be made" |
| Cover image | 已传（但是旧的那张裁切版，副标题两头被切） | **重新传新的 `itch-cover.png`** | ⚠️ 见文末「封面返工记录」 |
| Gameplay video | 空 | 跳过 | 没有视频不扣分 |
| Screenshots | 还显示 `Add screenshots` | 加 3 张 `shot-board/beast/dex.png` | itch 建议 3-5 张 |

## 第二屏（Uploads / Details / Visibility）逐字段核对

09-13 15:06 的截图没包含这一屏，以下都还没做，按表操作：

| 字段 | 截图里的值 | 改成 |
|---|---|---|
| Uploads | 未传 | 传 `hanzi-fun-itch.zip`，然后**勾上 `This file will be played in the browser`** |
| Embed 选项 | 未出现（传完文件才出现） | viewport `960 × 720`、勾 `Mobile friendly`、勾 `Fullscreen button` |
| Description | 空 | **点工具栏最左的 `<>` 进 HTML 源码视图，粘 HTML 版长文案**（见下方「Long description (HTML 版)」） | ⚠️ itch 编辑器没有 Markdown 模式，直接粘 Markdown 会原样显示 `**粗体**` 和 `-` |
| Genre | `No genre` | **`Puzzle`** |
| Tags | 空 | `puzzle`, `chinese`, `language`, `educational`, `short`, `browser`（最多 10 个，别填满，精准比数量重要） |
| **AI generation disclosure** | 选 `Yes`，然后在展开的「What kind of AI generated content is used?」里勾 **Graphics + Text & Dialog + Code 三项** | 见下方「AI 披露勾选依据」 |
| Download & install instructions | 保持**空白** | HTML 项目在浏览器里直接玩，没有安装步骤；这段文字只在「有人下载文件」时显示 |
| App store links | 空 | 跳过 |
| Custom noun | 空 | 跳过（默认 "game" 就对） |
| Community | `Comments` ✅ | 不动 —— 这是我们要的第一批定性反馈来源 |
| Visibility | `Draft` ✅ | 先存草稿 → `Save & view page` → 试玩 → 再改成 `Public` |

**关于 AI 披露那一条，说清楚**：itch 这个字段是 2025 年新加的，问的是「项目里有没有生成式 AI 的产出」。我们这个项目的代码、5 只兽的 SVG、页面文案全部是 AI 产出（字体是 Google 的 Noto Sans SC，属人类作品，但整体答案是 Yes）。选 No 是虚假陈述，被发现轻则项目被标记、重则封号 —— 而且对一个已经在页脚写明「no accounts, no ads」的项目来说，在这种事上撒谎毫无必要。选 Yes 不影响上架，也不影响曝光。

**AI 披露勾选依据**（`Yes` 之后展开的四项，itch 写明 classification 是 mandatory，不能不勾）：

| 选项 | 勾不勾 | 依据 |
|---|---|---|
| **Graphics** | ✅ 勾 | 5 只兽的 SVG（明/好/囚/森/仙）和 favicon 都是生成式 AI 产出，其余 7 只是程序化占位 SVG，同样由 AI 写的代码生成 |
| **Sounds** | ❌ 不勾 | 已 `grep -rniE "audio\|mp3\|ogg\|wav\|sound\|music\|speechSynthesis"` 全量扫过 `src/`、`index.html`、`styles.css`，**零匹配** —— 游戏完全没有音频。勾了会给项目挂上不存在的「AI 音效」过滤标签，属反向不准确 |
| **Text & Dialog** | ✅ 勾 | 游戏内全部文字都是 AI 产出：UI 标签（Combine / Clear / Hint / Beast dex）、提示语、12 只兽的名称与解说、页面文案 |
| **Code** | ✅ 勾 | 全部 JS / HTML / CSS 由 AI 编写（`src/game.js`、`src/data.js`、`src/beasts.js`、样式与页面） |

勾完后 itch 会给项目挂上对应的过滤标签 —— 这是它设计的目的（让人能按需过滤），不是惩罚。别为了"少挂标签"少勾，那就是虚假陈述。

## 保存后

1. 页面顶部如显示 `Draft`，点 **Publish** 才对外可见（未点 = 只有你能看）
2. 自己点一遍 Combine 流程，确认 iframe 里能玩
3. 把 https://hanzifun.itch.io/hanzi-beasts 发我，我核对配置

## 上架后的分发动作（零成本，别只上传不吆喝）

- **Devlog 首帖**：项目页 → Devlog → New post，标题 `12 beasts, 40 planned — what should I build next?`，正文放三张截图 + 问一句想要什么兽。Devlog 会出现在关注者时间线，也能被 tag 浏览页捞到
- **Tag 浏览页**：itch 的 https://itch.io/games/tag-puzzle 等是按 tag 排的，我们填的 6 个 tag 就是入口，别乱填
- **不要停在这一步**：itch 自带流量很薄，主要价值是「可索引的落地页 + 评论反馈」，真正的量还得靠 Reddit/社媒往 hanzi.fun 导

## 页面文案（直接粘贴）

**Title**: Hanzi Beasts

**Short description / tagline**（300 字内）:
```
Combine Chinese radicals. Summon the beast hiding inside the character. A bite-sized browser puzzle — no Chinese required.
```

**Long description (HTML 版 — 用这个粘贴)**:

操作：Description 输入框上方工具栏 → **点最左边的 `<>` 按钮**（红框里第一个，就是 HTML 源码开关）→ 把下面整段粘进源码视图 → 再点一次 `<>` 回到可视化视图确认排版正常。

```html
<p><strong>Hanzi Beasts</strong> is a tiny browser puzzle about how Chinese characters are built.</p>

<p>Chinese characters aren't random drawings — most of them are built from a small set of <strong>radicals</strong>, the LEGO bricks of the writing system. You already know some of them without realizing it: 人 is a person, 木 is a tree, 口 is a mouth.</p>

<p>You don't need to know any Chinese to play. Drag radicals into the slots, press <strong>Combine</strong>, and find out what they build — and meet the <strong>beast</strong> hiding inside the character you just made.</p>

<ul>
<li>🐾 <strong>12 beasts to discover</strong> across 3 tiers, each one drawn from the meaning of its character</li>
<li>🧩 <strong>14 radicals</strong> on the shelf — trial and error is the whole game</li>
<li>⏱️ <strong>~10 minutes</strong> for a full run, perfect for a coffee break</li>
<li>📱 Plays on <strong>desktop and phone</strong>, nothing to install</li>
<li>🔤 Zero Chinese knowledge required — the game teaches you as you play</li>
</ul>

<p>Some combinations make sense the moment you see them:</p>

<blockquote><p>日 (sun) + 月 (moon) = 明 (bright)</p></blockquote>

<p>Others will surprise you. Finding out <em>why</em> is half the fun.</p>

<p><em>Prototype v0.2 — 12 of ~40 planned beasts are in. Feedback welcome in the comments.</em></p>

<p>Play the web version and follow development at <a href="https://hanzi.fun">hanzi.fun</a>.</p>
```

**Markdown 原始版（仅留档参考，不要直接粘进 itch）**:

<details>
<summary>点开看 Markdown 原文</summary>

```markdown
**Hanzi Beasts** is a tiny browser puzzle about how Chinese characters are built.

Chinese characters aren't random drawings — most of them are built from a small
set of **radicals**, the LEGO bricks of the writing system. You already know some
of them without realizing it: 人 is a person, 木 is a tree, 口 is a mouth.

You don't need to know any Chinese to play. Drag radicals into the slots, press
**Combine**, and find out what they build — and meet the **beast** hiding inside
the character you just made.

- 🐾 **12 beasts to discover** across 3 tiers, each one drawn from the meaning of its character
- 🧩 **14 radicals** on the shelf — trial and error is the whole game
- ⏱️ **~10 minutes** for a full run, perfect for a coffee break
- 📱 Plays on **desktop and phone**, nothing to install
- 🔤 Zero Chinese knowledge required — the game teaches you as you play

Some combinations make sense the moment you see them:
> 日 (sun) + 月 (moon) = 明 (bright)
Others will surprise you. Finding out *why* is half the fun.

*Prototype v0.2 — 12 of ~40 planned beasts are in. Feedback welcome in the comments.*

Play the web version and follow development at [hanzi.fun](https://hanzi.fun)
```

</details>

**工具条按钮对照**（截图红框从左到右）: `<>` HTML 源码开关 · ¶ 段落样式 · B 粗体 · I 斜体 · S 删除线 · 有序/无序列表 · 引用 · 链接 · 分隔线 ｜ 🔗 视频 · 图片。可视化视图里手打 `**粗体**` 不会自动变粗，所以必须走 `<>` 源码视图，或者进可视化后用 B/I 按钮手动加格式。

- **Community options**: 就选 Comments ✅（第一屏截图里已选中，不动）
- **AI 披露**: 选 `Yes`（理由见上，这是诚实问题不是策略问题）

### ⛔ 保存报错：「You've selected a HTML5 game but haven't configured how your project is embedded」

**含义**：Embed options 没配置 —— 「游戏在页面里怎么跑」那组单选（`Embed in page` / `Click to launch`）一个都没选中，itch 就拒绝保存。跟 zip、Description、AI 披露都无关。

**排查顺序（从便宜到贵）**：

1. 回 Uploads 区，看文件行上的 `This file will be played in the browser` **是否还勾着** —— 重传文件或改过字段后它可能被重置，未勾选时 Embed options 面板不出现，保存就报这个错。没勾 → 重新勾上，面板会回来。
2. 在 Uploads 下方找 **Embed options**，**显式点选 `Embed in page`**（想"大封面 + 播放按钮"的观感就选 `Click to launch`）→ 确认 `Manually set size` + `960 × 720` → `Mobile friendly` ✅ → `Fullscreen button` ✅。
3. 再点 Save。
4. 若那一段不出现、或点了不生效：**`Delete file` → 重新上传 `hanzi-fun-itch.zip` → 勾 `This file will be played in the browser` → 立刻配 Embed options → Save**。重传会重置整段 embed 配置，是最可靠的一招（文件只有 27.7KB，重传无成本）。

> 这是 itch HTML5 项目的高频坑：**Embed 配置是挂在「被标记为在浏览器播放的那个文件」上的**，文件一重传/替换，配置就回默认未选状态。

## 上架状态核对（2026-09-13 15:48 截图）

### ✅ 已确认正确（不用再动）

| 项 | 值 |
|---|---|
| Title | `Hanzi Beasts` |
| Project URL | `https://hanzifun.itch.io/hanzi-beasts` |
| Classification | Games |
| Kind of project | HTML |
| Release status | In development |
| Pricing | No payments |
| Cover image | 新版封面（无裁字）已上传 |
| Embed / size | Embed in page + Manually set size，960 × 720 |
| Frame options | Mobile friendly ✅ · Fullscreen button ✅ · 自动播放 ☐（正确，不留勾） |
| Genre | Puzzle |
| Tags | puzzle / chinese / language / educational / short / browser |
| AI 披露 | Yes + Graphics ✅ / Sounds ☐ / Text & Dialog ✅ / Code ✅ —— 完全按依据勾选 |
| Description | 已粘入 HTML（处于源码视图） |
| Community | Comments |
| Download & install instructions | 空白（正确） |
| Visibility | Draft（正确，先别急） |

### ⚠️ 待处理（按优先级）

1. ~~🔴 邮箱未验证~~ —— **09-13 已完成验证**（用户确认）。
2. ~~🟡 文件行大小核对~~ —— **已确认无误**：`hanzi-fun-itch.zip · Success · 28kb · Today at 3:26 PM`，且 `This file will be played in the browser` 已勾选。截图缩略图糊，我此前把 "28kb" 误读成 "286"，是我的误判，包没错。
3. **🟡 截图数量/内容核对。** 右侧缩略图看着多于 3 张。按上面「截图上传清单」只留 4 张（或精简的 3 张桌面图）：删掉 `shot-*-s.png` 重复项，**绝对不要保留 `mobile-check.png` 那张调试图**（证据：深色像素 99.5%，非游戏画面）。
4. ~~🟢 Short description 补全检查~~ —— **已确认完整**。实际填的是 09-12 初版：`Combine Chinese radicals. Summon the beast hiding inside the character. A bite-sized browser puzzle — no Chinese required.`（113 字符，第二句是 `A bite-sized...` 不是推荐版的 `A 10-minute...`，两者信息量等价，保持现状）。
5. ~~🟢 切回可视化视图确认 Description 排版~~ —— **已确认正常**：段落成型、5 条 bullet 成列表、`日 (sun) + 月 (moon) = 明 (bright)` 落在引用块里、emoji 与斜体都渲染正确。
6. 以上清了之后：Visibility 改 `Public` → `Save & view page`。

## 封面返工记录（2026-09-13）

**问题**：第一版 `itch-cover.png` 是从 `og-image.png`（1200×630）居中裁到 630:500 比例得到的，裁掉了左右各约 200px。og-image 的副标题是 1200px 宽排版，因此裁完副标题两头断字（截图里显示 "ombine Chinese radicals... the charact"）。**裁切前只算了比例、没算文字宽度，是我的失误。**

**修法**：不再裁切，改为**专用排版渲染**一张 630×500 的封面：
- 源文件 `cover-itch.html`（已进仓库，可随时重渲）
- 渲染命令（本机 Chrome headless，ES module 需经 http 服务，不能用 file://）：
  ```
  cd hanzi-beasts && python3 -m http.server 8899 --bind 127.0.0.1
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu \
    --hide-scrollbars --force-device-scale-factor=2 --window-size=630,500 \
    --screenshot=itch-cover-2x.png "http://127.0.0.1:8899/cover-itch.html"
  # 再用 PIL 降到 630×500 存为 itch-cover.png
  ```
- 自检结果：1260×1000 渲染图中深色元素包围盒 (244,159)-(1016,864)，四边留白 244/243/159/135 px（2x 下），**无裁切、垂直居中**。检查脚本逻辑：扫描深色像素（亮度<150，即文字/兽/胶囊）求包围盒，任一边距 <20px 即判 FAIL。
- 排版差异：标题 54px、副标题强制两行（`<br>`）、三只兽（明/好/囚）、保留 日+月=明 公式与 hanzi.fun 胶囊。

## 已知小事项（不阻塞上架）

- zip 里保留了 Plausible 埋点 script，但在 itch 的 iframe 域名下不会上报（Plausible 按 hostname 过滤），不会污染 hanzi.fun 的数据，无需处理
- itch 页面的流量不会进 hanzi.fun 的 Plausible；想看的话用 itch 后台自带的 analytics（Views / Plays）
- 如果之后游戏内容更新：先更新 hanzi.fun（push 自动部署），再在 itch 项目页 Edit → Uploads 重新传一份新 zip
