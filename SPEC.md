# A 字兽 · 验证原型规格 v0.1

目标：用 3–5 天做一个**可玩、可截图、可扔 Reddit** 的最小原型，验证唯一的核心假设——
**不会中文的海外用户，愿不愿意靠"试"来玩汉字合成。**

验证阶段**不做**：账号、排行榜、养成、PWA、音效、多语言、后端。
验证阶段**必须做**：合成手感、发现的 "aha" 瞬间、埋点。

---

## 一、合成表设计原则（最重要的部分）

汉字里**会意字只占少数，形声字占 80% 以上**，而形声字（氵+青=清）对不懂中文的人完全不可推理。
这是 A 字兽最大的设计陷阱：**如果合成表用形声字，游戏立刻变成猜谜，玩家三分钟内流失。**

所以合成表只收三类可推理字：

| 类型 | 结构 | 例子 | 为什么能推理 |
|---|---|---|---|
| **叠加型** | 同一部件重复 | 木+木=林、木×3=森、日×3=晶 | 同一个东西变多 → 语义自然升级 |
| **场景型** | 两个部件摆成一个画面 | 人+木=休、手+目=看、宀+女=安 | 画面本身就是答案 |
| **叙事型** | 画面里藏着一个道理 | 女+子=好、田+力=男、人+囗=囚 | 猜中后有文化顿悟感 |

**明确排除**：形声字（清/河/妈）、字源存疑的字（"出"字源是脚出洞穴，不是两山叠加，已剔除）。

---

## 二、21 个基础部首

验证阶段**直接全部给玩家**，不做解锁。原因：这一轮要测的是"合成是否有趣"，不是"解锁节奏"。

| # | 部首 | 拼音 | 英文标签 | 视觉锚点 |
|---|---|---|---|---|
| 1 | 日 | rì | Sun | 圆日带光芒 |
| 2 | 月 | yuè | Moon | 弯月 |
| 3 | 木 | mù | Tree | 树干带两枝 |
| 4 | 火 | huǒ | Fire | 三簇火苗 |
| 5 | 水 | shuǐ | Water | 三点水流 |
| 6 | 山 | shān | Mountain | 三峰 |
| 7 | 石 | shí | Stone | 崖下石块 |
| 8 | 土 | tǔ | Earth | 地平线上的土堆 |
| 9 | 人 | rén | Person | 侧身小人 |
| 10 | 口 | kǒu | Mouth | 张开的笑嘴（暖色、圆润） |
| 11 | 目 | mù | Eye | 眼睛 |
| 12 | 手 | shǒu | Hand | 张开的手 |
| 13 | 女 | nǚ | Woman | 跪坐女子 |
| 14 | 子 | zǐ | Child | 襁褓婴儿 |
| 15 | 小 | xiǎo | Small | 三个小点 |
| 16 | 大 | dà | Big | 张臂的人 |
| 17 | 田 | tián | Field | 田字格农田 |
| 18 | 力 | lì | Power | 弯曲的手臂/犁 |
| 19 | 宀 | mián | Roof | 屋顶（宝盖头） |
| 20 | 囗 | wéi | Enclosure | 方形围栏（冷色、方正，与"口"强区分） |
| 21 | 一 | yī | Ground | 一条地平线 |

> ⚠️ **口 vs 囗 是已知可用性风险**：两个都像方框。必须靠**颜色 + 造型**强区分
> （口=暖色圆润的嘴，囗=冷色方正的围栏），并在首次出现时给一次性提示。
> 如果实测中混淆率高，验证阶段就砍掉"囗"，把 囚/困/因/回 移到完整版。

---

## 三、合成表（30 条）

### Tier 1 · 教程层（2 部件，最直观）— 12 条

| 公式 | 字 | 英文义 | 兽 | 设定一句话 |
|---|---|---|---|---|
| 日 + 月 | 明 | Bright | Lumen Moth | 左翅是太阳、右翅是月亮的蛾 |
| 木 + 木 | 林 | Forest | Sapling Deer | 鹿角上长着两棵小树 |
| 火 + 火 | 炎 | Flame | Ember Fox | 两条尾巴的火狐 |
| 小 + 大 | 尖 | Sharp | Needle Hare | 耳朵是尖锥的兔子 |
| 田 + 力 | 男 | Man | Field Ox | 背上驮着田垄的牛 |
| 女 + 子 | 好 | Good | Matron Crane | 护着雏鸟的鹤 |
| 人 + 木 | 休 | Rest | Sloth Sprite | 挂在树上打盹的树懒 |
| 手 + 目 | 看 | Look | Scout Owl | 用翅膀搭在眼上的猫头鹰 |
| 山 + 石 | 岩 | Rock | Boulder Tortoise | 背甲是整块岩石的龟 |
| 木 + 目 | 相 | Mutual | Gazer Stag | 眼睛长在鹿角上的鹿 |
| 人 + 囗 | 囚 | Prisoner | Caged Imp | 困在围栏里的小鬼 |
| 木 + 囗 | 困 | Trapped | Knotwood Troll | 被木栅栏缠住的巨怪 |

### Tier 2 · 叠加层（3 部件 / 简体会意）— 12 条

| 公式 | 字 | 英文义 | 兽 | 设定一句话 |
|---|---|---|---|---|
| 木 ×3 | 森 | Deep forest | Elder Ent | 身上长满树的森林巨人 |
| 人 ×3 | 众 | Crowd | Legion Ant | 由蚁群聚成的人形 |
| 口 ×3 | 品 | Refine | Trio Taster | 三张嘴的品鉴鸟 |
| 日 ×3 | 晶 | Crystal | Prism Beetle | 折射光的棱甲虫 |
| 石 ×3 | 磊 | Heap of stone | Cairn Golem | 石堆垒成的魔像 |
| 人 + 人 | 从 | Follow | Twin Shadow | 一前一后的双影狐 |
| 日 + 日 | 昌 | Prosper | Dawn Rooster | 对著两个太阳打鸣的公鸡 |
| 小 + 土 | 尘 | Dust | Dust Wisp | 一缕会飘的尘土精 |
| 火 + 土 | 灶 | Hearth | Hearth Cat | 蜷在灶台上的猫 |
| 水 + 目 | 泪 | Tear | River Seal | 眼睛会流出小河的海豹 |
| 人 + 山 | 仙 | Immortal | Cloud Hermit | 住在山云里的老仙人 |
| 宀 + 女 | 安 | Peace | Eave Sparrow | 屋檐下安睡的麻雀 |

> 尘、灶、泪 是**简体字特有的会意结构**（对应的繁体「塵/竈/淚」都是形声，不可推理）。
> 这是简体字的一个隐藏优势，值得在完整版里继续挖。

### Tier 3 · 彩蛋层（需要提示，文化顿悟）— 6 条

| 公式 | 字 | 英文义 | 兽 | 设定一句话 |
|---|---|---|---|---|
| 日 + 木 | 东 | East | Sunbark Elk | 太阳卡在树杈间的鹿 |
| 日 + 一 | 旦 | Dawn | Daybreak Finch | 站在地平线上的雀 |
| 一 + 火 | 灭 | Extinguish | Snuff Mouse | 用一块板压灭火苗的鼠 |
| 大 + 一 | 天 | Sky | Sky Whale | 游在头顶横线之上的鲸 |
| 囗 + 大 | 因 | Cause | Loom Spider | 在方框中央织网的蜘蛛 |
| 囗 + 口 | 回 | Return | Spiral Koi | 绕着圈游的锦鲤 |

---

## 四、字源准确性备注

以下字源可靠，可放心作为教学文案：明、林、森、炎、休（人倚树）、看（手搭目上远望）、
相（以目视木）、男（用力于田）、好（女子/母子）、囚、众、品、晶、磊、从、尖、尘、灶、泪、
仙（山中人）、安（屋下有女）、东（日在木中）、旦（日出地平线）、天（人之上）、灭、回。

以下字源有争议或为通俗说法，**文案里不要写成"古人认为"**：
- **晶**：本义与星象相关（三个"日"表星光），"三个太阳"是通俗讲法。
- **因**：本义有"席垫/依靠"等说法，"大在框中"是可接受的可视化，但别说成定论。
- **困**：本义为"废弃的房屋"，"木被困住"是后世通俗理解。

---

## 五、技术选型

| 层 | 选择 | 理由 | 明确不用 |
|---|---|---|---|
| **框架** | 原生 ES modules，**零构建** | 3–5 天验证期，构建链纯属浪费 | React / Vue / Vite |
| **渲染** | DOM + CSS transform | 汉字是矢量文本，DOM 清晰、可动画、可选中 | Canvas / WebGL |
| **交互** | 原生 Pointer Events | 一套代码同时覆盖鼠标与触屏，记得 `touch-action: none` | SortableJS / GSAP |
| **状态** | 单个 JS 对象 + localStorage | 状态量极小 | Redux / Zustand |
| **字体** | **自托管 woff2 子集（51 字形）** | 见下方「最大的坑」 | 系统字体 / Google Fonts CDN |
| **美术** | Tier 1 手绘 5 只，其余程序化几何 + CSS | 30 只手绘是完整版工作，不该在验证期做 | 全部手绘 |
| **托管** | Cloudflare Pages | 免费、全球 CDN、直连 GitHub | Vercel / Netlify |
| **埋点** | 自托管 Plausible 自定义事件 | 你已有基础设施，零额外成本 | GA / 自建后端 |
| **音效** | 不做 | 验证期无收益 | — |

### 最大的坑：字体

海外设备（尤其 Windows）不保证有中文字体，字形也可能与日文字体混淆（直、骨、户 等字形差异）。
**不能依赖系统字体。**

```bash
pip install fonttools brotli
pyftsubset NotoSansSC-Regular.ttf \
  --text-file=chars.txt \
  --flavor=woff2 \
  --output-file=hanzi-subset.woff2
```

`chars.txt` 放 21 部首 + 30 汉字 = 51 个字形，子集后约 **15–25 KB**。
UI 文案用英文系统字体，不进子集。

---

## 六、验证范围（3–5 天做什么）

**做**：21 部首全开 → 30 字合成 → 图鉴页（30 格，未解锁置灰）→ 失败反馈 → 提示系统 → 英文 UI → 埋点 → 分享卡片（OG 图）

**不做**：账号、排行榜、养成、PWA、音效、多语言、后端

**失败反馈的关键设计**：合成失败**不能只弹"不行"**。
要分级反馈：完全无关 → 抖动；差一个部件 → "something's missing"；部件对但位置不对 → "closer…"。
这一条决定了玩家是继续试还是关页面。

---

## 七、埋点与验证判据（提前定死）

用 Plausible 自定义事件：`radical_drag`、`combine_fail`、`combine_success`、`dex_open`、`share_click`。

| 指标 | 通过线 | 不达标意味着什么 |
|---|---|---|
| 平均游玩时长 | **> 3 分钟** | < 90 秒 → 钩子不成立，玩法本身没吸引力 |
| 合成 ≥ 3 字的人数占比 | **> 30%** | < 15% → 上手门槛太高，外国人推不出来 |
| 首次成功合成中位耗时 | **< 90 秒** | > 3 分钟 → 引导失败 |
| 合成失败后继续尝试率 | **> 50%** | 低 → 失败反馈没做好 |
| 评论区出现"怎么读 / 什么意思" | **≥ 1 条** | 全程沉默 → 没有激起好奇 |
| 24h 回访率 | **> 10%** | < 5% → 无留存预期，别投完整版 |

**判据必须现在定死。** 一周后拿到数据时，人会很自然地为"还行吧"找理由——提前写下来才拦得住。

---

## 八、可直接用的数据结构

```js
export const RADICALS = {
  ri:   { c: '日', en: 'Sun',       p: 'rì'   },
  yue:  { c: '月', en: 'Moon',      p: 'yuè'  },
  mu:   { c: '木', en: 'Tree',      p: 'mù'   },
  huo:  { c: '火', en: 'Fire',      p: 'huǒ'  },
  shui: { c: '水', en: 'Water',     p: 'shuǐ' },
  shan: { c: '山', en: 'Mountain',  p: 'shān' },
  shi:  { c: '石', en: 'Stone',     p: 'shí'  },
  tu:   { c: '土', en: 'Earth',     p: 'tǔ'   },
  ren:  { c: '人', en: 'Person',    p: 'rén'  },
  kou:  { c: '口', en: 'Mouth',     p: 'kǒu'  },
  muEye:{ c: '目', en: 'Eye',       p: 'mù'   },
  shou: { c: '手', en: 'Hand',      p: 'shǒu' },
  nv:   { c: '女', en: 'Woman',     p: 'nǚ'   },
  zi:   { c: '子', en: 'Child',     p: 'zǐ'   },
  xiao: { c: '小', en: 'Small',     p: 'xiǎo' },
  da:   { c: '大', en: 'Big',       p: 'dà'   },
  tian: { c: '田', en: 'Field',     p: 'tián' },
  li:   { c: '力', en: 'Power',     p: 'lì'   },
  mian: { c: '宀', en: 'Roof',      p: 'mián' },
  wei:  { c: '囗', en: 'Enclosure', p: 'wéi'  },
  yi:   { c: '一', en: 'Ground',    p: 'yī'   },
};

// 顺序无关的 key：配方排序后 join，用于 O(1) 查表
export const RECIPES = [
  { parts: ['ri','yue'],   out: '明', en: 'Bright',      beast: 'Lumen Moth',     tier: 1 },
  { parts: ['mu','mu'],    out: '林', en: 'Forest',      beast: 'Sapling Deer',   tier: 1 },
  { parts: ['huo','huo'],  out: '炎', en: 'Flame',       beast: 'Ember Fox',      tier: 1 },
  { parts: ['xiao','da'],  out: '尖', en: 'Sharp',       beast: 'Needle Hare',    tier: 1 },
  { parts: ['tian','li'],  out: '男', en: 'Man',         beast: 'Field Ox',       tier: 1 },
  { parts: ['nv','zi'],    out: '好', en: 'Good',        beast: 'Matron Crane',   tier: 1 },
  { parts: ['ren','mu'],   out: '休', en: 'Rest',        beast: 'Sloth Sprite',   tier: 1 },
  { parts: ['shou','muEye'], out: '看', en: 'Look',      beast: 'Scout Owl',      tier: 1 },
  { parts: ['shan','shi'], out: '岩', en: 'Rock',        beast: 'Boulder Tortoise', tier: 1 },
  { parts: ['mu','muEye'], out: '相', en: 'Mutual',      beast: 'Gazer Stag',     tier: 1 },
  { parts: ['ren','wei'],  out: '囚', en: 'Prisoner',    beast: 'Caged Imp',      tier: 1 },
  { parts: ['mu','wei'],   out: '困', en: 'Trapped',     beast: 'Knotwood Troll', tier: 1 },
  { parts: ['mu','mu','mu'],    out: '森', en: 'Deep forest', beast: 'Elder Ent',     tier: 2 },
  { parts: ['ren','ren','ren'], out: '众', en: 'Crowd',   beast: 'Legion Ant',     tier: 2 },
  { parts: ['kou','kou','kou'], out: '品', en: 'Refine',  beast: 'Trio Taster',    tier: 2 },
  { parts: ['ri','ri','ri'],    out: '晶', en: 'Crystal', beast: 'Prism Beetle',   tier: 2 },
  { parts: ['shi','shi','shi'], out: '磊', en: 'Stone heap', beast: 'Cairn Golem', tier: 2 },
  { parts: ['ren','ren'],  out: '从', en: 'Follow',      beast: 'Twin Shadow',    tier: 2 },
  { parts: ['ri','ri'],    out: '昌', en: 'Prosper',     beast: 'Dawn Rooster',   tier: 2 },
  { parts: ['xiao','tu'],  out: '尘', en: 'Dust',        beast: 'Dust Wisp',      tier: 2 },
  { parts: ['huo','tu'],   out: '灶', en: 'Hearth',      beast: 'Hearth Cat',     tier: 2 },
  { parts: ['shui','muEye'], out: '泪', en: 'Tear',      beast: 'River Seal',     tier: 2 },
  { parts: ['ren','shan'], out: '仙', en: 'Immortal',    beast: 'Cloud Hermit',   tier: 2 },
  { parts: ['mian','nv'],  out: '安', en: 'Peace',       beast: 'Eave Sparrow',   tier: 2 },
  { parts: ['ri','mu'],    out: '东', en: 'East',        beast: 'Sunbark Elk',    tier: 3 },
  { parts: ['ri','yi'],    out: '旦', en: 'Dawn',        beast: 'Daybreak Finch', tier: 3 },
  { parts: ['yi','huo'],   out: '灭', en: 'Extinguish',  beast: 'Snuff Mouse',    tier: 3 },
  { parts: ['da','yi'],    out: '天', en: 'Sky',         beast: 'Sky Whale',      tier: 3 },
  { parts: ['wei','da'],   out: '因', en: 'Cause',       beast: 'Loom Spider',    tier: 3 },
  { parts: ['wei','kou'],  out: '回', en: 'Return',      beast: 'Spiral Koi',     tier: 3 },
];

const key = parts => [...parts].sort().join('+');
export const RECIPE_MAP = new Map(RECIPES.map(r => [key(r.parts), r]));
```

---

## 九、验证通过后，完整版才做这些

部首扩到 100+ → 合成表扩到 300 字 → 4 模式（主线 / 每日一字 / 限时 / 图鉴）→
一只"兽"的养成线 → 排行榜 + 反刷 → 30 只兽手绘完成。

**现在一项都别碰。**
