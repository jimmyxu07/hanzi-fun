#!/usr/bin/env python3
"""
美术自检：我看不到渲染结果，所以让像素替我看。

核心检查 —— "眼睛没被别的图层盖住":
  兽的 SVG 是分层画的，后画的图层会盖住先画的。手绘时很容易把爪子/角/装饰
  画到眼睛坐标上（真出过：囚的爪子 cy=64 与眼睛 cy=62 重合，橙色圆盖住眼白，
  看起来像"两只红色眼睛"）。这个脚本采样眼睛坐标的实际颜色来抓这类错误。

用法:
  python3 tools/artcheck.py
退出码 0 = 全部通过。
"""
import subprocess, sys, os, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
TMP = ROOT / '.tmp-art'
SCALE = 2                      # 240px / viewBox 120
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

# 眼睛采样点（viewBox 120 坐标系）
# white = 眼白区域，必须接近白色；dark = 瞳孔中心，必须接近黑色
EYES = {
    'ming': dict(white=[(55, 63), (65, 63)], dark=[(55, 67), (65, 67)]),
    'sen':  dict(white=[(52, 37), (68, 37)], dark=[(52, 41), (68, 41)]),
    'hao':  dict(dark=[(45, 29)]),           # 侧面视图，眼就是一个黑点，没有眼白
    'qiu':  dict(white=[(52, 51), (68, 51)], dark=[(52, 55), (68, 55)]),
    'xian': dict(skin=[(60, 52)]),           # 闭目，无眼白；改查脸颊是肤色
}

# 附加点检查：坐标 + 期望颜色 + 容差（验证关键元素真的画出来了）
SPOTS = {
    # 囚的爪子应抓在头下方 y=84，不能回到眼睛高度
    'qiu':  [((46, 84), (255, 154, 106), 60, 'claw L on bar'),
             ((74, 84), (255, 154, 106), 60, 'claw R on bar')],
    # 仙的寿眉：必须是一条看得出宽度的白眉（细月牙会被描边吃光，等于没画）
    'xian': [((43, 45), (255, 255, 255), 40, 'left long eyebrow'),
             ((77, 45), (255, 255, 255), 40, 'right long eyebrow')],
}


def px(img, x, y):
    return img.getpixel((int(x * SCALE), int(y * SCALE)))[:3]


def near(c, target, tol):
    return all(abs(a - b) <= tol for a, b in zip(c, target))


def shoot(svg_path, png_path):
    subprocess.run([
        CHROME, '--headless=new', '--disable-gpu', '--no-sandbox',
        f'--window-size={120 * SCALE},{120 * SCALE}',
        '--virtual-time-budget=3000',
        f'--screenshot={png_path}', f'file://{svg_path}',
    ], capture_output=True, timeout=60)


def main():
    from PIL import Image

    subprocess.run(['node', str(ROOT / 'tools/dump-svg.mjs'),
                    str(TMP), str(120 * SCALE)],
                   check=True, capture_output=True)

    fails = 0
    for bid, spec in EYES.items():
        shoot(TMP / f'{bid}.svg', TMP / f'{bid}.png')
        img = Image.open(TMP / f'{bid}.png').convert('RGB')
        notes = []

        for x, y in spec.get('white', []):
            c = px(img, x, y)
            ok = min(c) > 180
            notes.append(f"eye-white({x},{y})={c} {'ok' if ok else 'FAIL'}")
            fails += 0 if ok else 1

        for x, y in spec.get('dark', []):
            c = px(img, x, y)
            ok = max(c) < 110
            notes.append(f"pupil({x},{y})={c} {'ok' if ok else 'FAIL'}")
            fails += 0 if ok else 1

        for x, y in spec.get('skin', []):
            c = px(img, x, y)
            ok = c[0] > 200 and c[1] > 170 and c[2] > 140 and c[0] - c[2] > 15
            notes.append(f"face({x},{y})={c} {'ok' if ok else 'FAIL'}")
            fails += 0 if ok else 1

        for (x, y), target, tol, label in SPOTS.get(bid, []):
            c = px(img, x, y)
            ok = near(c, target, tol)
            notes.append(f"{label}({x},{y})={c} {'ok' if ok else 'FAIL'}")
            fails += 0 if ok else 1

        print(f"  {bid:6s} " + ' | '.join(notes))

    print('\nARTCHECK ' + ('PASS' if fails == 0 else f'FAIL ({fails} spots)'))
    return 1 if fails else 0


if __name__ == '__main__':
    sys.exit(main())
