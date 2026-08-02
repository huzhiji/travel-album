# 🚀 部署指南：GitHub Pages + alist + 百度网盘

## 总费用：0 元/月

---

## 第一步：GitHub Pages 部署网站代码

### 1.1 创建 GitHub 仓库
1. 打开 https://github.com/new
2. 仓库名填 `travel-album`（或任意名称）
3. 选 **Public**（公开）
4. 不要勾选 Initialize this repository
5. 点 **Create repository**

### 1.2 推送代码
在终端中执行（把 `你的GitHub用户名` 替换成实际的）：

```bash
cd "C:\Users\a1206\WorkBuddy\2026-08-02-11-16-23\photo-gallery"

git add .
git commit -m "旅行手札第一版"

git remote add origin https://github.com/你的GitHub用户名/travel-album.git
git branch -M main
git push -u origin main
```

### 1.3 开启 GitHub Pages
1. 进入仓库 → Settings → Pages
2. Source 选 **Deploy from a branch**
3. Branch 选 **main**，目录选 **/ (root)**
4. 点 Save
5. 等待 1-2 分钟，访问：`https://你的用户名.github.io/travel-album`

---

## 第二步：部署 alist 桥接百度网盘

### 2.1 一键部署到 Vercel（推荐）
1. 注册 Vercel：https://vercel.com（用 GitHub 登录）
2. 打开一键部署链接：https://github.com/alist-org/alist-render
3. 点击 README 中的 **Deploy to Vercel** 按钮
4. 按提示完成部署
5. 记下你的 alist 地址，格式：`https://xxx.vercel.app`

### 2.2 配置 alist 连接百度网盘
1. 访问你的 alist 地址
2. 初始密码：在 Vercel 环境变量 `ALIST_PASSWORD` 中查看
3. 登录后 → 管理 → 存储 → 添加
4. 驱动选 **百度网盘**
5. 填写以下信息：
   - 挂载路径：`/baidu`
   - 刷新令牌：从百度网盘获取（见下方说明）
   - WebDAV 策略：选「本地代理」
   - 下载代理：选「本地代理」
6. 保存 → 主页应该能看到百度网盘文件了

### 2.3 获取百度网盘刷新令牌
1. 打开 https://alist.nn.ci/zh/guide/drivers/baidu.html
2. 按页面说明获取 refresh_token
3. 填入 alist 的百度网盘配置中

### 2.4 开启免签名直链（关键！）
alist 管理后台 → 设置 → 全局：
- **签名所有**：关闭（两个都关）
- **私有仓库密码保护**：关闭

这样照片 URL 就不需要签名参数了。

### 2.5 整理百度网盘中的照片
在百度网盘里创建文件夹结构：
```
我的网盘/
  └── travel-photos/
      ├── our-story/
      │   ├── 01.jpg
      │   ├── 02.jpg
      │   └── ...
      ├── seaside/
      │   └── ...
      ├── city-walk/
      │   └── ...
      └── daily/
          └── ...
```

---

## 第三步：对接网站和 alist

### 3.1 修改 config.js
编辑 `js/config.js` 顶部这一行：

```javascript
// 改成你的 alist 地址
const PHOTO_BASE_URL = 'https://你的alist.vercel.app/d/baidu/travel-photos';
```

### 3.2 重新推送
```bash
git add js/config.js
git commit -m "对接 alist"
git push
```

GitHub Pages 自动更新，等 1 分钟刷新即可。

---

## 完成！🎉

你的网站上线后的完整链路：

```
用户访问 → https://你的用户名.github.io/travel-album
          ↓
         网站代码（GitHub Pages 托管，免费）
          ↓
         照片请求 → alist（Vercel 免费部署）
          ↓
         alist 转直链 → 百度网盘（免费存储）
          ↓
         照片返回到浏览器展示
```

全部免费，支持任意数量的照片（百度网盘能存多少就存多少）。
