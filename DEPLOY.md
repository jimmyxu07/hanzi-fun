# 部署手册 · GitHub + Cloudflare Pages

目标：把 `hanzi-beasts/` 静态站推到线上，拿到可分享的 URL 和真实埋点数据。
分工：**你出授权，我出操作**。下面每一步都标了是谁做。

**当前状态（2026-09-09 更新）**

| 项 | 值 |
|---|---|
| 域名 | `hanzi.fun`，NS 已在 Cloudflare（ishaan / lily），状态 Active |
| Zone ID | `df97446ed272d4fca07f6df1dedf5422` |
| Account ID | `9d0e60120e054fd31fbaa996ebc29f9a`（Jimmy_xu07@163.com's Account） |
| GitHub repo | `jimmyxu07/hanzi-fun`（public） |
| 代码 | ✅ **已推送**（2026-09-09，main 分支 25 个文件，commit `6ebd9b9`） |
| 运行环境 | ⚠️ **Worker** `long-king-ebb2`（不是 Pages），已绑自定义域名 hanzi.fun |
| 剩余手工 | Worker → Settings → Build → **Connect to Git** 选 `hanzi-fun`（见第三节路线 E） |

---

## 一、我需要你给的三样东西

### 1. GitHub Personal Access Token（fine-grained）

**用途**：建 repo、推代码。

**生成路径**：github.com → 头像 → Settings → Developer settings → Personal access tokens → **Fine-grained tokens** → Generate new token

| 配置项 | 填什么 |
|---|---|
| Token name | `hanzi-beasts-deploy` |
| Expiration | 90 天（够跑完验证期即可，别选永久） |
| Resource owner | 你自己 |
| Repository access | **Only select repositories** → 只选 `hanzi-beasts` |
| Repository permissions | **Contents: Read and write**（就这一项） |
| 其余 | 一个都不勾 |

给我是 `github_pat_...` 开头的一串。

> ⚠️ **别给 classic token 的 `repo` 权限**——那是你所有仓库（含私有）的完整读写权。

> 🔴 **已踩的坑（2026-09-07）**：
> 1. token 从聊天里复制过来**容易截断**（第一次只有 31 字符，正常约 93），
>    表现为 `401 Bad credentials`。用页面上的复制按钮，别手动拖选。
> 2. fine-grained token **没有建仓权限**（`POST /user/repos` 返回 403），
>    所以 `hanzi-fun` 仓库由你在网页端手动创建。
> 3. token 生成时 **Repository access 必须勾选 `hanzi-fun`**，否则推代码时报
>    `403 Resource not accessible by personal access token`。
>    已生成的 token 可以在 Settings → Developer settings → 该 token → Edit 里补选，不用重建。
> 4. **空仓库上 `POST /git/blobs` 返回 409** `Git Repository is empty.`（不是权限问题）：
>    必须先用 `PUT /repos/{o}/{r}/contents/{path}` 落一个 bootstrap commit 把仓库点亮，
>    之后 blob / tree / ref 才可用。（2026-09-09 实测）
> 5. 权限在 token Edit 保存后**立即生效，token 字符串不变**——不用重新生成，原 key 沿用。

### 2. Cloudflare：Account ID + API Token

**Account ID**：CF Dashboard 首页右侧栏「Account ID」，或 Workers & Pages 页面右侧。

**API Token**：右上角头像 → My Profile → API Tokens → **Create Custom Token**

| 权限 | 值 |
|---|---|
| Account → Cloudflare Pages | Edit |
| Zone → DNS | Edit（只在你要把 NS 转到 CF 时才需要） |
| User → User Details | Read（wrangler 校验身份用） |

Account Resources / Zone Resources 都限定到这一个账号 / 这个域名。

> ⚠️ **不要用 Global API Key**——那是整个账号的最高权限，泄露等于全站沦陷。
> 自定义 token 随时可吊销，Global Key 不行。

### 3. 域名

- 已定：**`hanzi.fun`**，NS 已转 Cloudflare 并 Active。
  Pages 绑自定义域名时 CF 会自动写 DNS + 自动下证书，这步零手工操作。
- ⚠️ 原 MX / 邮箱等记录在转 NS 前要搬到 CF，转完之后旧 DNS 记录不再生效。

---

## 二、我拿到授权之后会做的事

1. 建 repo、写 `.gitignore`、推代码（含 `_headers` 缓存规则）
2. 用 CF API 建 Pages 项目，绑 `hanzi.games`
3. 换掉 `src/game.js` 里的 `SHARE_URL`（现在是占位的 `hanzi-beasts.example.com`）
4. 接 Plausible：在 `index.html` 挂 `<script defer data-domain="..." src="...">`
5. 跑一遍线上冒烟：`curl -I` 看缓存头、headless Chrome 看 JS 是否执行

---

## 三、两条部署路线（取决于 git 通不通）

### 路线 A：GitHub 联动（首选）

1. 你在 GitHub 建一个**空** repo（不要勾 README / .gitignore）
2. 我推代码
3. CF Pages → Create → **Connect to Git** → 选这个 repo
4. Build settings：
   - Framework preset: **None**
   - Build command: **留空**
   - Build output directory: **`/`** ← 关键。我们不是 dist 项目，`index.html` 就在根目录
5. 之后每次 push 到 main 自动部署

### 路线 B：Upload assets（当前最快，不需要任何 token）

CF Pages 支持直接上传，完全不需要 git：

1. 打开 CF Dashboard → **Workers & Pages** → **Create** → **Pages** → **Upload assets**
2. 项目名填 `hanzi-fun`
3. 拖入 `hanzi-fun-upload.zip`（或直接拖整个目录）
4. Deploy → 拿到 `https://hanzi-fun.pages.dev`
5. 项目页 → **Custom domains** → Set up a custom domain → `hanzi.fun`（CF 自动加 DNS + 证书）

命令行等价（需要带 Pages:Edit 的 token）：

```bash
cd hanzi-beasts
CLOUDFLARE_API_TOKEN=xxx npx wrangler pages deploy . --project-name=hanzi-fun
```

缺点：每次更新要手动重传；优点：绕开所有 git 网络问题。

### 路线 C：Connect to Git（token 授权修好之后用它）

1. CF Dashboard → Workers & Pages → Create → Pages → **Connect to Git**
2. 选 `jimmyxu07/hanzi-fun`
3. Build settings：
   - Framework preset: **None**
   - Build command: **留空**
   - Build output directory: **`/`** ← 关键。我们不是 dist 项目，`index.html` 就在根目录
4. 之后每次 push 到 main 自动部署

### 路线 E：Worker + Connect to Git（**当前推荐，差最后一步**）

现在线上跑的是 **Worker `long-king-ebb2`**（手工 Upload assets 建的），不是 Pages。
所以它**不受 Pages 权限管**，也不该再走手动传 zip。

1. CF Dashboard → **Workers & Pages** → 点开 `long-king-ebb2`
2. **Settings** 标签 → **Build** 区 → **Connect to Git**
3. 授权 GitHub（若之前没授权过，会跳一次 OAuth）→ 选 `jimmyxu07/hanzi-fun`
4. Build settings：
   - Framework preset: **None**
   - Build command: **留空**
   - Build output directory: **`/`**（`index.html` 在根目录）
5. Save → 之后每次 push 到 main 自动部署，手动传 zip 成为历史

⚠️ 注意：Connect 之后**第一次会自动触发一次构建部署**，会覆盖你现在手传的版本。
内容一致（同一份代码），所以没有风险；只是部署来源从"上传"变成"git"。

### 路线 D：我直接调 CF API（需要一个带 Pages:Edit 的 token）

现在给的 CF token（53 位，`cfut_` 开头）有效但**只有 Zone DNS 权限**——
`/accounts` 返回空、`/memberships` 认证失败，建不了 Pages 项目。
要让我从命令行一手搞定，token 需要再加 **Account → Cloudflare Pages: Edit**。

---

## 四、安全注意（我这边会遵守，也请你确认）

- token 只写在**本地** `.env` 或 shell 环境变量里，**不进 repo**；`.gitignore` 已排除 `.env`
- 不在聊天里回显 token 全文
- 验证期结束（或你随时要求）后，请在 GitHub / CF 后台吊销这两个 token

---

## 五、上线前我还要补的东西（不依赖你的授权，可以先做）

- [ ] OG 分享图（1200×630）— Reddit / Twitter 缩略图，没图基本等于没发
- [ ] `_headers` 缓存规则（字体长缓存，HTML 不缓存）
- [ ] Plausible 的 site 与自定义事件：需要你的 Plausible 里新建一个 site，把 domain 给我
- [ ] favicon + apple-touch-icon
- [ ] `robots.txt` / `sitemap.xml`（为后面的内容页 SEO 铺路）
