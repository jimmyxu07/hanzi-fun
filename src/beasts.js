// A 字兽 · 美术层
// art:'hand' 的 5 只是手绘 SVG（明/好/森/仙/囚），其余走 auto() 程序化占位。
// 统一：viewBox 0 0 120 120 / 描边 #3B3228 / 圆角 / 大眼 / 腮红

const INK = '#3B3228';

const HAND = {
  // 明 · Lumen Moth —— 左翅太阳，右翅月亮
  ming: `
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <circle cx="60" cy="60" r="54" fill="#FFF3D6"/>
  <path d="M58 62 C 28 42 10 54 14 76 C 18 94 44 96 58 80 Z" fill="#FFD98C" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
  <path d="M62 62 C 92 42 110 54 106 76 C 102 94 76 96 62 80 Z" fill="#CDBCF2" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
  <circle cx="34" cy="70" r="9" fill="#FFB03A" stroke="${INK}" stroke-width="2.5"/>
  <g stroke="${INK}" stroke-width="2.5" stroke-linecap="round">
    <line x1="34" y1="55" x2="34" y2="50"/><line x1="34" y1="85" x2="34" y2="90"/>
    <line x1="19" y1="70" x2="14" y2="70"/><line x1="49" y1="70" x2="54" y2="70"/>
  </g>
  <path d="M88 60 a11 11 0 1 0 0 22 a9 9 0 1 1 0 -22 z" fill="#FFF0A8" stroke="${INK}" stroke-width="2.5" stroke-linejoin="round"/>
  <path d="M54 54 C 48 42 42 38 36 38" fill="none" stroke="${INK}" stroke-width="3" stroke-linecap="round"/>
  <path d="M66 54 C 72 42 78 38 84 38" fill="none" stroke="${INK}" stroke-width="3" stroke-linecap="round"/>
  <circle cx="36" cy="38" r="3.2" fill="#FFC96B" stroke="${INK}" stroke-width="2"/>
  <circle cx="84" cy="38" r="3.2" fill="#CDBCF2" stroke="${INK}" stroke-width="2"/>
  <ellipse cx="60" cy="72" rx="13" ry="19" fill="#FFC96B" stroke="${INK}" stroke-width="3"/>
  <ellipse cx="55" cy="66" rx="5" ry="6" fill="#fff" stroke="${INK}" stroke-width="2.5"/>
  <ellipse cx="65" cy="66" rx="5" ry="6" fill="#fff" stroke="${INK}" stroke-width="2.5"/>
  <circle cx="55" cy="67" r="2.4" fill="${INK}"/><circle cx="65" cy="67" r="2.4" fill="${INK}"/>
  <circle cx="53.8" cy="65" r="1" fill="#fff"/><circle cx="63.8" cy="65" r="1" fill="#fff"/>
  <ellipse cx="48" cy="77" rx="4" ry="2.6" fill="#FF9B8A" opacity="0.5"/>
  <ellipse cx="72" cy="77" rx="4" ry="2.6" fill="#FF9B8A" opacity="0.5"/>
  <path d="M58 81 q2 2.5 4 0" fill="none" stroke="${INK}" stroke-width="2" stroke-linecap="round"/>
</svg>`,

  // 森 · Elder Ent —— 背上长着整片森林的树巨人
  sen: `
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <circle cx="60" cy="60" r="54" fill="#E4F5DC"/>
  <circle cx="24" cy="54" r="10" fill="#6FBF5F" stroke="${INK}" stroke-width="2.5"/>
  <rect x="22" y="60" width="4" height="12" fill="#8B6B4E" stroke="${INK}" stroke-width="2"/>
  <circle cx="96" cy="58" r="8" fill="#7FC86B" stroke="${INK}" stroke-width="2.5"/>
  <rect x="94.4" y="64" width="3" height="10" fill="#8B6B4E" stroke="${INK}" stroke-width="2"/>
  <path d="M42 80 C 28 78 22 86 20 94" fill="none" stroke="#8B6B4E" stroke-width="6" stroke-linecap="round"/>
  <path d="M42 80 C 28 78 22 86 20 94" fill="none" stroke="${INK}" stroke-width="1.2" stroke-linecap="round" opacity=".5"/>
  <path d="M78 80 C 92 78 98 86 100 94" fill="none" stroke="#8B6B4E" stroke-width="6" stroke-linecap="round"/>
  <path d="M78 80 C 92 78 98 86 100 94" fill="none" stroke="${INK}" stroke-width="1.2" stroke-linecap="round" opacity=".5"/>
  <path d="M44 110 L42 80 Q42 64 60 62 Q78 64 78 80 L76 110 Z" fill="#8B6B4E" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
  <ellipse cx="52" cy="92" rx="6" ry="3" fill="#6FBF5F" opacity=".65"/>
  <ellipse cx="70" cy="100" rx="5" ry="2.6" fill="#6FBF5F" opacity=".65"/>
  <circle cx="60" cy="40" r="22" fill="#6FBF5F" stroke="${INK}" stroke-width="3"/>
  <circle cx="44" cy="47" r="12" fill="#7FC86B" stroke="${INK}" stroke-width="3"/>
  <circle cx="76" cy="47" r="12" fill="#7FC86B" stroke="${INK}" stroke-width="3"/>
  <circle cx="60" cy="26" r="9" fill="#8CD47A" stroke="${INK}" stroke-width="2.5"/>
  <ellipse cx="52" cy="40" rx="6" ry="7" fill="#fff" stroke="${INK}" stroke-width="2.5"/>
  <ellipse cx="68" cy="40" rx="6" ry="7" fill="#fff" stroke="${INK}" stroke-width="2.5"/>
  <circle cx="52" cy="41" r="2.6" fill="${INK}"/><circle cx="68" cy="41" r="2.6" fill="${INK}"/>
  <circle cx="50.8" cy="39" r="1" fill="#fff"/><circle cx="66.8" cy="39" r="1" fill="#fff"/>
  <path d="M54 52 q6 6 12 0" fill="none" stroke="${INK}" stroke-width="2.4" stroke-linecap="round"/>
</svg>`,

  // 仙 · Cloud Hermit —— 住在山与云之间的老仙人
  // 仙气三件套：寿眉（长垂白眉）+ 闭目含笑 + 飘带。缺眉毛只会画成"睡着的老头"。
  xian: `
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <circle cx="60" cy="60" r="54" fill="#E8F2FA"/>
  <path d="M6 104 L32 54 L58 104 Z" fill="#BCCEDC" stroke="${INK}" stroke-width="2.5" stroke-linejoin="round"/>
  <path d="M62 104 L86 62 L110 104 Z" fill="#AEC2D2" stroke="${INK}" stroke-width="2.5" stroke-linejoin="round"/>
  <path d="M18 100 q4 -12 16 -8 q4 -12 18 -6 q12 1 12 14 z" fill="#fff" stroke="${INK}" stroke-width="2.5" stroke-linejoin="round"/>
  <path d="M70 104 q4 -10 14 -7 q3 -10 14 -5 q10 1 10 12 z" fill="#fff" stroke="${INK}" stroke-width="2.5" stroke-linejoin="round"/>
  <path d="M34 110 q6 -13 18 -9 q6 -13 20 -7 q14 2 14 16 z" fill="#fff" stroke="${INK}" stroke-width="2.5" stroke-linejoin="round"/>
  <path d="M40 74 q-16 6 -21 23 q15 -6 21 -15 z" fill="#BFE0F8" stroke="${INK}" stroke-width="2.4" stroke-linejoin="round"/>
  <path d="M80 74 q16 6 21 23 q-15 -6 -21 -15 z" fill="#BFE0F8" stroke="${INK}" stroke-width="2.4" stroke-linejoin="round"/>
  <path d="M42 104 q-8 -26 18 -34 q26 8 18 34 z" fill="#A8D0F0" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
  <path d="M92 104 L92 74 q0 -8 8 -8" fill="none" stroke="#8B6B4E" stroke-width="4" stroke-linecap="round"/>
  <circle cx="104" cy="58" r="7" fill="#F0C070" stroke="${INK}" stroke-width="2.5"/>
  <circle cx="60" cy="46" r="18" fill="#FFE3C4" stroke="${INK}" stroke-width="3"/>
  <ellipse cx="42" cy="48" rx="3.2" ry="5" fill="#FFE3C4" stroke="${INK}" stroke-width="2.4"/>
  <ellipse cx="78" cy="48" rx="3.2" ry="5" fill="#FFE3C4" stroke="${INK}" stroke-width="2.4"/>
  <path d="M50 45 q5 6 10 0" fill="none" stroke="${INK}" stroke-width="2.8" stroke-linecap="round"/>
  <path d="M66 45 q5 6 10 0" fill="none" stroke="${INK}" stroke-width="2.8" stroke-linecap="round"/>
  <ellipse cx="49" cy="53" rx="3.6" ry="2.4" fill="#FF9B8A" opacity="0.4"/>
  <ellipse cx="71" cy="53" rx="3.6" ry="2.4" fill="#FF9B8A" opacity="0.4"/>
  <g fill="none" stroke-linecap="round">
    <path d="M50 37 q-9 6 -9 18" stroke="${INK}" stroke-width="7.5"/>
    <path d="M50 37 q-9 6 -9 18" stroke="#fff" stroke-width="4.5"/>
    <path d="M70 37 q9 6 9 18" stroke="${INK}" stroke-width="7.5"/>
    <path d="M70 37 q9 6 9 18" stroke="#fff" stroke-width="4.5"/>
  </g>
  <path d="M52 58 q8 16 16 0 q-2 17 -8 17 q-6 0 -8 -17 z" fill="#fff" stroke="${INK}" stroke-width="2.5" stroke-linejoin="round"/>
  <path d="M44 34 q16 -17 32 0 q-4 -12 -16 -12 q-12 0 -16 12 z" fill="#fff" stroke="${INK}" stroke-width="2.5" stroke-linejoin="round"/>
  <circle cx="60" cy="19" r="6.5" fill="#fff" stroke="${INK}" stroke-width="2.5"/>
  <path d="M50 16 L72 21" stroke="#8B6B4E" stroke-width="2.6" stroke-linecap="round"/>
</svg>`,

  // 好 · Matron Crane —— 翅膀下护着雏鸟的鹤
  hao: `
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <circle cx="60" cy="60" r="54" fill="#FFEEF4"/>
  <ellipse cx="64" cy="78" rx="28" ry="21" fill="#FFF6E8" stroke="${INK}" stroke-width="3"/>
  <path d="M40 92 L38 110" fill="none" stroke="${INK}" stroke-width="3" stroke-linecap="round"/>
  <path d="M78 92 L82 110" fill="none" stroke="${INK}" stroke-width="3" stroke-linecap="round"/>
  <path d="M42 70 C 34 54 36 42 44 34" fill="none" stroke="#FFF6E8" stroke-width="9" stroke-linecap="round"/>
  <path d="M42 70 C 34 54 36 42 44 34" fill="none" stroke="${INK}" stroke-width="2.5" stroke-linecap="round" opacity=".35"/>
  <circle cx="46" cy="30" r="11" fill="#FFF6E8" stroke="${INK}" stroke-width="3"/>
  <path d="M36 28 L22 32 L36 37 Z" fill="#F0A93C" stroke="${INK}" stroke-width="2.5" stroke-linejoin="round"/>
  <path d="M40 21 q7 -8 14 -1 q-3 -6 -7 -6 q-5 0 -7 7 z" fill="#EE7FA8" stroke="${INK}" stroke-width="2.5" stroke-linejoin="round"/>
  <circle cx="45" cy="29" r="2.8" fill="${INK}"/>
  <circle cx="43.8" cy="28" r="1" fill="#fff"/>
  <path d="M46 66 q20 -12 38 4 q-16 18 -40 12 z" fill="#FFDCE8" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
  <path d="M60 76 q10 2 16 8" fill="none" stroke="${INK}" stroke-width="2" stroke-linecap="round" opacity=".5"/>
  <circle cx="74" cy="90" r="10" fill="#FFD98C" stroke="${INK}" stroke-width="2.8"/>
  <circle cx="70" cy="88" r="2.2" fill="${INK}"/>
  <circle cx="77" cy="88" r="2.2" fill="${INK}"/>
  <path d="M80 92 l6 2 l-6 2 z" fill="#F0A93C" stroke="${INK}" stroke-width="1.8" stroke-linejoin="round"/>
  <ellipse cx="56" cy="52" rx="12" ry="5" fill="#FFC0D4" opacity="0"/>
</svg>`,

  // 囚 · Caged Imp —— 扒着栏杆的小鬼
  // 教训：爪子曾经画在 cy=64，跟眼睛 cy=54 重叠且半径相同，橙色爪把眼白整个盖住，
  // 看起来像"两只红色眼睛"。爪子必须画在头下缘（y>80）之外，并换亮一档的颜色。
  qiu: `
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <circle cx="60" cy="60" r="54" fill="#E6ECF2"/>
  <path d="M76 84 q18 6 12 22" fill="none" stroke="#F2703F" stroke-width="7" stroke-linecap="round"/>
  <path d="M76 84 q18 6 12 22" fill="none" stroke="${INK}" stroke-width="1.4" stroke-linecap="round" opacity=".45"/>
  <path d="M46 40 L39 25 L55 33 Z" fill="#F2703F" stroke="${INK}" stroke-width="2.8" stroke-linejoin="round"/>
  <path d="M74 40 L81 25 L65 33 Z" fill="#F2703F" stroke="${INK}" stroke-width="2.8" stroke-linejoin="round"/>
  <circle cx="60" cy="58" r="21" fill="#F2703F" stroke="${INK}" stroke-width="3"/>
  <ellipse cx="52" cy="54" rx="6.5" ry="7.5" fill="#fff" stroke="${INK}" stroke-width="2.5"/>
  <ellipse cx="68" cy="54" rx="6.5" ry="7.5" fill="#fff" stroke="${INK}" stroke-width="2.5"/>
  <circle cx="53" cy="55" r="3" fill="${INK}"/><circle cx="69" cy="55" r="3" fill="${INK}"/>
  <circle cx="51.6" cy="53" r="1.1" fill="#fff"/><circle cx="67.6" cy="53" r="1.1" fill="#fff"/>
  <path d="M50 68 l4 5 l4 -5 l4 5 l4 -5" fill="none" stroke="${INK}" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/>
  <ellipse cx="43" cy="64" rx="4" ry="2.6" fill="#FF9B8A" opacity="0.5"/>
  <ellipse cx="77" cy="64" rx="4" ry="2.6" fill="#FF9B8A" opacity="0.5"/>
  <g stroke="#8FA4B6" stroke-width="7" stroke-linecap="round">
    <line x1="28" y1="34" x2="28" y2="102"/><line x1="46" y1="28" x2="46" y2="104"/>
    <line x1="60" y1="26" x2="60" y2="106"/><line x1="74" y1="28" x2="74" y2="104"/>
    <line x1="92" y1="34" x2="92" y2="102"/>
  </g>
  <g stroke="#6E8496" stroke-width="8" stroke-linecap="round">
    <line x1="22" y1="46" x2="98" y2="46"/><line x1="22" y1="88" x2="98" y2="88"/>
  </g>
  <g fill="#FF9A6A" stroke="${INK}" stroke-width="2.6">
    <circle cx="46" cy="84" r="7"/><circle cx="74" cy="84" r="7"/>
  </g>
  <g stroke="${INK}" stroke-width="1.8" stroke-linecap="round" opacity=".65">
    <line x1="43" y1="81" x2="43" y2="87"/><line x1="49" y1="81" x2="49" y2="87"/>
    <line x1="71" y1="81" x2="71" y2="87"/><line x1="77" y1="81" x2="77" y2="87"/>
  </g>
</svg>`,
};

function hashOf(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

// 程序化占位兽：靠 id 哈希在「耳朵 / 尾巴 / 纹样」三维上取变体，保证 25 只各不相同
function auto(r) {
  const [c1, c2] = r.pal;
  const h = hashOf(r.id);
  const ear = h % 4;
  const tail = (h >> 2) % 3;
  const mark = (h >> 4) % 3;
  const tilt = ((h >> 6) % 5) - 2;

  const ears = [
    `<circle cx="42" cy="40" r="9" fill="${c1}" stroke="${INK}" stroke-width="3"/><circle cx="78" cy="40" r="9" fill="${c1}" stroke="${INK}" stroke-width="3"/>`,
    `<path d="M40 46 L36 26 L54 38 Z" fill="${c1}" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/><path d="M80 46 L84 26 L66 38 Z" fill="${c1}" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>`,
    `<ellipse cx="40" cy="34" rx="6" ry="14" fill="${c1}" stroke="${INK}" stroke-width="3"/><ellipse cx="80" cy="34" rx="6" ry="14" fill="${c1}" stroke="${INK}" stroke-width="3"/>`,
    `<path d="M44 42 q-6 -14 2 -18 q4 8 6 16 z" fill="${c2}" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/><path d="M76 42 q6 -14 -2 -18 q-4 8 -6 16 z" fill="${c2}" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>`,
  ][ear];

  const tails = [
    '',
    `<path d="M86 78 q16 2 12 18" fill="none" stroke="${c1}" stroke-width="7" stroke-linecap="round"/><path d="M86 78 q16 2 12 18" fill="none" stroke="${INK}" stroke-width="1.3" stroke-linecap="round" opacity=".4"/>`,
    `<circle cx="92" cy="84" r="10" fill="${c2}" stroke="${INK}" stroke-width="3"/>`,
  ][tail];

  const marks = [
    '',
    `<circle cx="46" cy="72" r="4" fill="${c2}" opacity=".55"/><circle cx="60" cy="80" r="3" fill="${c2}" opacity=".55"/><circle cx="74" cy="70" r="3.4" fill="${c2}" opacity=".55"/>`,
    `<ellipse cx="60" cy="80" rx="15" ry="11" fill="#FFF6E8" stroke="${INK}" stroke-width="2.4" opacity=".9"/>`,
  ][mark];

  const halo = r.tier === 3
    ? `<circle cx="60" cy="20" r="7" fill="#FFE07A" stroke="${INK}" stroke-width="2.6"/>
       <path d="M60 6 l2 4 l4 -1 l-2 4" fill="none" stroke="${INK}" stroke-width="2" stroke-linecap="round"/>` : '';

  return `
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <circle cx="60" cy="60" r="54" fill="${c2}" opacity="0.16"/>
  ${halo}
  ${tails}
  ${ears}
  <ellipse cx="60" cy="70" rx="27" ry="25" fill="${c1}" stroke="${INK}" stroke-width="3" transform="rotate(${tilt} 60 70)"/>
  ${marks}
  <ellipse cx="51" cy="64" rx="6.5" ry="7.5" fill="#fff" stroke="${INK}" stroke-width="2.5"/>
  <ellipse cx="69" cy="64" rx="6.5" ry="7.5" fill="#fff" stroke="${INK}" stroke-width="2.5"/>
  <circle cx="51" cy="65" r="2.8" fill="${INK}"/><circle cx="69" cy="65" r="2.8" fill="${INK}"/>
  <circle cx="49.7" cy="63" r="1" fill="#fff"/><circle cx="67.7" cy="63" r="1" fill="#fff"/>
  <ellipse cx="42" cy="76" rx="4.5" ry="2.8" fill="#FF8A7A" opacity="0.5"/>
  <ellipse cx="78" cy="76" rx="4.5" ry="2.8" fill="#FF8A7A" opacity="0.5"/>
  <path d="M56 80 q4 4 8 0" fill="none" stroke="${INK}" stroke-width="2.4" stroke-linecap="round"/>
  <ellipse cx="46" cy="94" rx="7" ry="4.5" fill="${c1}" stroke="${INK}" stroke-width="2.6"/>
  <ellipse cx="74" cy="94" rx="7" ry="4.5" fill="${c1}" stroke="${INK}" stroke-width="2.6"/>
</svg>`;
}

export function beastSVG(r) {
  return r.art === 'hand' ? HAND[r.id] : auto(r);
}
