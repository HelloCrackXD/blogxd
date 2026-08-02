# 我的博客（Hexo）

基于 Hexo 8 的静态博客，使用 GitHub Actions 自动构建并部署到 GitHub Pages。

## 本地常用命令

```bash
npm install              # 安装依赖（首次克隆后执行）
npx hexo new "文章标题"   # 新建文章，生成到 source/_posts/
npx hexo server          # 本地预览，访问 http://localhost:4000
npm run build            # 生成静态文件到 public/
```

## 发布流程

写好文章后，推送到 GitHub 即可，剩下的自动完成：

```bash
git add .
git commit -m "发布新文章"
git push origin main
```

GitHub Actions 会在云端执行构建并部署，几分钟后访问你的域名即可看到更新。

## 自定义域名（部署前必做）

1. 在 `source/CNAME` 文件中写入你的域名（例如 `example.com`）
2. 将 `_config.yml` 中的 `url` 改为 `https://你的域名`
3. 在 GitHub 仓库 Settings → Pages 中填写同一个域名
4. 到域名服务商处配置 DNS（A 记录指向 GitHub Pages 的四个 IP，或 CNAME 指向 `你的用户名.github.io`）
