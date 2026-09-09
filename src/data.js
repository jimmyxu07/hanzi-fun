// A 字兽 · 验证原型数据层
// 21 部首 / 30 配方。art:'hand' = 手绘 SVG，art:'auto' = 程序化几何占位。

export const RADICALS = {
  ri:    { c: '日', en: 'Sun',       p: 'rì',   color: '#F0A93C' },
  yue:   { c: '月', en: 'Moon',      p: 'yuè',  color: '#9E8AD8' },
  mu:    { c: '木', en: 'Tree',      p: 'mù',   color: '#5FB55A' },
  huo:   { c: '火', en: 'Fire',      p: 'huǒ',  color: '#F2703F' },
  shui:  { c: '水', en: 'Water',     p: 'shuǐ', color: '#4FA3E0' },
  shan:  { c: '山', en: 'Mountain',  p: 'shān', color: '#8C9AA8' },
  shi:   { c: '石', en: 'Stone',     p: 'shí',  color: '#9C9384' },
  tu:    { c: '土', en: 'Earth',     p: 'tǔ',   color: '#C4884C' },
  ren:   { c: '人', en: 'Person',    p: 'rén',  color: '#F0A07A' },
  kou:   { c: '口', en: 'Mouth',     p: 'kǒu',  color: '#F0708C' },
  muEye: { c: '目', en: 'Eye',       p: 'mù',   color: '#4FBFA8' },
  shou:  { c: '手', en: 'Hand',      p: 'shǒu', color: '#E8B84C' },
  nv:    { c: '女', en: 'Woman',     p: 'nǚ',   color: '#EE7FA8' },
  zi:    { c: '子', en: 'Child',     p: 'zǐ',   color: '#F0C070' },
  xiao:  { c: '小', en: 'Small',     p: 'xiǎo', color: '#A896E0' },
  da:    { c: '大', en: 'Big',       p: 'dà',   color: '#7CC45C' },
  tian:  { c: '田', en: 'Field',     p: 'tián', color: '#C4B052' },
  li:    { c: '力', en: 'Power',     p: 'lì',   color: '#E07050' },
  mian:  { c: '宀', en: 'Roof',      p: 'mián', color: '#88AEDC' },
  wei:   { c: '囗', en: 'Enclosure', p: 'wéi',  color: '#6E8496' },
  yi:    { c: '一', en: 'Ground',    p: 'yī',   color: '#B0A48C' },
};

export const RECIPES = [
  // ---- Tier 1 · 教程层 ----
  { id:'ming',  parts:['ri','yue'],       out:'明', py:'míng',  en:'Bright',     beast:'Lumen Moth',      tier:1, art:'hand',
    blurb:'A moth with the sun on one wing and the moon on the other.', pal:['#FFC96B','#B8A5E8'] },
  { id:'lin',   parts:['mu','mu'],        out:'林', py:'lín',   en:'Forest',     beast:'Sapling Deer',    tier:1, art:'auto',
    blurb:'A young deer whose antlers are two small trees.',              pal:['#A8DC7C','#5FB55A'] },
  { id:'yan1',  parts:['huo','huo'],      out:'炎', py:'yán',   en:'Flame',      beast:'Ember Fox',       tier:1, art:'auto',
    blurb:'A fox with two tails, both of them burning.',                  pal:['#FF9B6A','#E2542C'] },
  { id:'jian',  parts:['xiao','da'],      out:'尖', py:'jiān',  en:'Sharp',      beast:'Needle Hare',     tier:1, art:'auto',
    blurb:'A hare whose ears taper into needles.',                        pal:['#C0AEF0','#7CC45C'] },
  { id:'nan',   parts:['tian','li'],      out:'男', py:'nán',   en:'Man',        beast:'Field Ox',        tier:1, art:'auto',
    blurb:'An ox carrying a ploughed field on its back.',                 pal:['#D4B86A','#C4884C'] },
  { id:'hao',   parts:['nv','zi'],        out:'好', py:'hǎo',   en:'Good',       beast:'Matron Crane',    tier:1, art:'hand',
    blurb:'A crane sheltering her chick beneath one wing.',              pal:['#FFA8C0','#FFE7B8'] },
  { id:'xiu',   parts:['ren','mu'],       out:'休', py:'xiū',   en:'Rest',       beast:'Sloth Sprite',    tier:1, art:'auto',
    blurb:'A tiny sloth that refuses to let go of its branch.',          pal:['#C8A882','#5FB55A'] },
  { id:'kan',   parts:['shou','muEye'],   out:'看', py:'kàn',   en:'Look',       beast:'Scout Owl',       tier:1, art:'auto',
    blurb:'An owl that shields its eyes with one wing to see further.',  pal:['#D9A860','#4FBFA8'] },
  { id:'yan2',  parts:['shan','shi'],     out:'岩', py:'yán',   en:'Rock',       beast:'Boulder Tortoise',tier:1, art:'auto',
    blurb:'A tortoise whose shell is one unbroken rock.',                pal:['#A8B4C4','#9C9384'] },
  { id:'xiang', parts:['mu','muEye'],     out:'相', py:'xiàng', en:'Mutual',     beast:'Gazer Stag',      tier:1, art:'auto',
    blurb:'A stag with eyes set into its antlers.',                      pal:['#8CC47A','#4FBFA8'] },
  { id:'qiu',   parts:['ren','wei'],      out:'囚', py:'qiú',   en:'Prisoner',   beast:'Caged Imp',       tier:1, art:'hand',
    blurb:'A small imp that rattles the fence it is sealed inside.',     pal:['#9AAEC0','#F2703F'] },
  { id:'kun',   parts:['mu','wei'],       out:'困', py:'kùn',   en:'Trapped',    beast:'Knotwood Troll',  tier:1, art:'auto',
    blurb:'A troll slowly wrapped in the fence it tried to break.',      pal:['#B0A0C4','#6E8496'] },

  // ---- Tier 2 · 叠加层 ----
  { id:'sen',   parts:['mu','mu','mu'],       out:'森', py:'sēn',  en:'Deep forest', beast:'Elder Ent',    tier:2, art:'hand',
    blurb:'A giant of bark with a whole forest growing on its back.',    pal:['#7FC86B','#3E7A46'] },
  { id:'zhong', parts:['ren','ren','ren'],    out:'众', py:'zhòng',en:'Crowd',        beast:'Legion Ant',   tier:2, art:'auto',
    blurb:'One body, assembled from a thousand ants.',                   pal:['#E8A87C','#8C6A4E'] },
  { id:'pin',   parts:['kou','kou','kou'],    out:'品', py:'pǐn',  en:'Refine',       beast:'Trio Taster',  tier:2, art:'auto',
    blurb:'A bird with three mouths, each tasting something else.',      pal:['#FF9EAE','#FFD6DE'] },
  { id:'jing',  parts:['ri','ri','ri'],       out:'晶', py:'jīng', en:'Crystal',      beast:'Prism Beetle', tier:2, art:'auto',
    blurb:'A beetle whose shell splits light into colours.',             pal:['#8FD4F0','#B8A5E8'] },
  { id:'lei',   parts:['shi','shi','shi'],    out:'磊', py:'lěi',  en:'Stone heap',   beast:'Cairn Golem',  tier:2, art:'auto',
    blurb:'A golem built by stacking stone on stone on stone.',          pal:['#A8A090','#6E6878'] },
  { id:'cong',  parts:['ren','ren'],          out:'从', py:'cóng', en:'Follow',       beast:'Twin Shadow',  tier:2, art:'auto',
    blurb:'Two foxes that only ever move in single file.',              pal:['#D89A7C','#9E7A9E'] },
  { id:'chang', parts:['ri','ri'],            out:'昌', py:'chāng',en:'Prosper',      beast:'Dawn Rooster', tier:2, art:'auto',
    blurb:'A rooster that crows at two suns at once.',                  pal:['#FFC46B','#F2703F'] },
  { id:'chen',  parts:['xiao','tu'],          out:'尘', py:'chén', en:'Dust',         beast:'Dust Wisp',    tier:2, art:'auto',
    blurb:'A mote of dust that learned to float on purpose.',           pal:['#D8C8A8','#A89678'] },
  { id:'zao',   parts:['huo','tu'],           out:'灶', py:'zào',  en:'Hearth',       beast:'Hearth Cat',   tier:2, art:'auto',
    blurb:'A cat that sleeps on the stove and refuses to move.',        pal:['#F2A05C','#C4884C'] },
  { id:'lei2',  parts:['shui','muEye'],       out:'泪', py:'lèi',  en:'Tear',         beast:'River Seal',   tier:2, art:'auto',
    blurb:'A seal whose eyes never stop making small rivers.',          pal:['#7FC4E8','#4FBFA8'] },
  { id:'xian',  parts:['ren','shan'],         out:'仙', py:'xiān', en:'Immortal',     beast:'Cloud Hermit', tier:2, art:'hand',
    blurb:'An old hermit who lives where the mountain meets the cloud.',pal:['#A8D0F0','#F0F0E0'] },
  { id:'an',    parts:['mian','nv'],          out:'安', py:'ān',   en:'Peace',        beast:'Eave Sparrow', tier:2, art:'auto',
    blurb:'A sparrow asleep under the eaves, safe from the rain.',      pal:['#B8C8E0','#EE7FA8'] },

  // ---- Tier 3 · 彩蛋层 ----
  { id:'dong',  parts:['ri','mu'],       out:'东', py:'dōng', en:'East',        beast:'Sunbark Elk',   tier:3, art:'auto',
    blurb:'An elk with the sunrise caught in its antlers.',             pal:['#FFB84D','#8C6A4E'] },
  { id:'dan',   parts:['ri','yi'],       out:'旦', py:'dàn',  en:'Dawn',        beast:'Daybreak Finch',tier:3, art:'auto',
    blurb:'A finch standing exactly where the sun will appear.',        pal:['#FFD98C','#F0A93C'] },
  { id:'mie',   parts:['yi','huo'],      out:'灭', py:'miè',  en:'Extinguish',  beast:'Snuff Mouse',  tier:3, art:'auto',
    blurb:'A mouse who presses a lid onto every flame it finds.',      pal:['#B0A48C','#6E8496'] },
  { id:'tian',  parts:['da','yi'],       out:'天', py:'tiān', en:'Sky',         beast:'Sky Whale',    tier:3, art:'auto',
    blurb:'A whale swimming above the line that holds the sky.',       pal:['#8FD0F0','#A8B8E0'] },
  { id:'yin',   parts:['wei','da'],      out:'因', py:'yīn',  en:'Cause',       beast:'Loom Spider',  tier:3, art:'auto',
    blurb:'A spider weaving at the centre of its own frame.',         pal:['#9AAEC0','#7CC45C'] },
  { id:'hui',   parts:['wei','kou'],     out:'回', py:'huí',  en:'Return',      beast:'Spiral Koi',   tier:3, art:'auto',
    blurb:'A koi that only swims in circles, always coming back.',    pal:['#F0907C','#FFD6DE'] },
];

const key = parts => [...parts].sort().join('+');
export const RECIPE_MAP = new Map(RECIPES.map(r => [key(r.parts), r]));

/* ---------------- 验证版名单（v1）：12 只 ----------------
   不是「Tier1 前 12 只」那种机械砍法 —— 森(tier2) 和 仙(tier2) 是手绘兽，
   按 tier 砍会把刚画好的两张图一起砍掉。这里是手工挑的，原则：
   1) 5 只手绘（明/好/囚/森/仙）必须全在，否则美术白画
   2) 其余挑「一眼能猜中」的会意字，保证非中文用户靠试也能成一次
   3) 部首尽量共用（14 个部首养 12 个配方），把随机命中率维持在 ~11%
   扩容回 30 只：把 ACTIVE_IDS 换成 RECIPES.map(r => r.id) 即可。      */
export const ACTIVE_IDS = [
  'ming', 'hao', 'qiu', 'sen', 'xian',        // 手绘 5 只
  'lin', 'xiu', 'kan', 'xiang', 'jian', 'yan1', 'yan2',
];

export const ACTIVE_RECIPES = RECIPES.filter(r => ACTIVE_IDS.includes(r.id));
export const ACTIVE_RECIPE_MAP = new Map(ACTIVE_RECIPES.map(r => [key(r.parts), r]));

export const ACTIVE_RADICALS = Object.fromEntries(
  Object.entries(RADICALS).filter(([id]) => ACTIVE_RECIPES.some(r => r.parts.includes(id)))
);

// 供子集化脚本与图鉴使用
export const ALL_HANZI = [...new Set([
  ...Object.values(ACTIVE_RADICALS).map(r => r.c),
  ...ACTIVE_RECIPES.map(r => r.out),
])];
