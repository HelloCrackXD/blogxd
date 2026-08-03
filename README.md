# BlogXD 个人博客

基于 [Hexo](https://hexo.io/) 的个人静态博客，通过 GitHub Actions 自动构建并部署到 GitHub Pages，绑定自定义域名 [blogxd.site](https://blogxd.site)。

## 技术栈

- Hexo 8.1（静态站点生成器）
- 主题：hexo-theme-landscape
- 持续部署：GitHub Actions + GitHub Pages（Node.js 24）

## 目录结构

```text
.
├── _config.yml            # 站点主配置（标题、URL、主题等）
├── _config.landscape.yml  # 主题配置
├── package.json           # 依赖与 npm 脚本
├── scaffolds/             # 新建文章/页面时的模板
├── source/
│   ├── _posts/            # 博客文章（Markdown）
│   └── CNAME              # 自定义域名
├── themes/                # 主题目录
├── .github/workflows/     # GitHub Actions 部署流程
└── public/                # 构建产物（由 git 忽略，不提交）
```

## 本地开发

前置要求：Node.js（建议 18 或更高版本）。

```bash
npm install              # 安装依赖（首次克隆后执行）
npx hexo new "文章标题"   # 新建文章，生成到 source/_posts/
npx hexo server          # 本地预览，访问 http://localhost:4000
npm run build            # 生成静态文件到 public/
npm run clean            # 清理 public/ 缓存
```

## 写作

文章保存在 `source/_posts/`，使用 Markdown 编写，开头需要 Front-matter：

```markdown
---
title: 文章标题
date: 2026-08-03 12:00:00
tags:
  - 示例
---

这里是正文。
```

## 发布流程

写好文章或修改后，推送到 GitHub 即可，其余由 GitHub Actions 自动完成：

```bash
git status               # 查看当前改动
git add .                # 暂存所有改动（也可指定文件，如 git add README.md）
git commit -m "更新内容"  # 提交
git push origin main     # 推送到 GitHub
```

推送成功后，Actions 会在云端执行 `npm install` 和 `npm run build`，并部署到 GitHub Pages。几分钟后访问 https://blogxd.site 即可看到更新，可在仓库的 Actions 页面查看构建进度。

## 自定义域名

当前域名：`blogxd.site`（已写入 `source/CNAME` 和 `_config.yml` 的 `url`）

1. 在 GitHub 仓库 Settings → Pages 的 Custom domain 中填写 `blogxd.site`
2. 到域名服务商处配置 DNS（A 记录指向 GitHub Pages 的四个 IP，或 CNAME 指向 `hellocrackxd.github.io`）
3. DNS 生效后在 Settings → Pages 中勾选 Enforce HTTPS

以上内容由AI生成