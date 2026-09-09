// 把每只兽的 SVG 单独导出成文件，供截图/像素检查使用。
// 用法: node tools/dump-svg.mjs <输出目录>
import { mkdirSync, writeFileSync } from 'node:fs';
import { RECIPES, ALL_HANZI } from '../src/data.js';
import { beastSVG } from '../src/beasts.js';

const out = process.argv[2] || '.tmp-art';
const size = +(process.argv[3] || 240);
mkdirSync(out, { recursive: true });

// 顺带刷新字体子集用的字符表 —— 增删兽之后跑一次这个，再重新 subset 字体
writeFileSync(new URL('../fonts/chars.txt', import.meta.url), ALL_HANZI.join(''));
console.log(`chars.txt: ${ALL_HANZI.length} 字 -> ${ALL_HANZI.join('')}`);

for (const r of RECIPES) {
  const svg = beastSVG(r).replace('<svg ', `<svg width="${size}" height="${size}" `);
  writeFileSync(`${out}/${r.id}.svg`, svg);
}
console.log(`dumped ${RECIPES.length} svgs -> ${out}/ (${size}px)`);
