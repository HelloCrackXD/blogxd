---
title: 尝试汉化Codex页面
date: 2026-08-04 18:11:02
tags: [Codex,Code]
category: [Code]
---

昨天下好了Codex，但桌面端一直有问题，比如登录登不上去，明明设置页面选了简体中文然而没用  
所以今天来研究下如何汉化Codex  
我这边选择直接问deepseek如何汉化，让他帮我找方案，很快就找到了两个方案  
第一个是[shibaweidu/codex-desktop-zh](https://github.com/shibaweidu/codex-desktop-zh)  
第二个是[xqnode/codex-zh-CN](https://github.com/xqnode/codex-zh-CN) 

## shibaweidu/codex-desktop-zh
试了下，要安装一个启动器，然后通过启动器来启动codex，然后汉化还是失败的  
关于失败的原因，deepseek查询后告诉我：
>这个版本的前端用 getLayer 取开关，启动器补的是 getDynamicConfig，两者对不上，所以白跑。  

得了，还好我记得告诉他要备份一份，方便回退

## xqnode/codex-zh-CN
于是我又去试了这个方案，deepseek一顿操作后给我生成了一个脚本，让我每次启动前用这个脚本启动codex。我试了，这个是能用的。但我觉得不好，启动个codex还这么麻烦，要不还是看英文界面算了，就当练英语了  
然后话又说回来了，我去github给这两个项目都看了一遍，这第二个方案还是很有前景的：  
>5.Microsoft Store 版：日常使用请在与 install-windows.bat 同一目录双击 「Codex 汉化版.bat」（无 cmd 黑窗；不要用开始菜单里的 Store 原版快捷方式）  

这是github上README写的，所以我怀疑我这个版本启动前要靠一个bat是因为我下的是商店版chatgpt，要是安装版可能就没这个问题了，然后我又问了deepseek:  
>**目前 Windows 的官方渠道就是 *Microsoft Store***  
>独立安装版的 Electron 通常把 app.asar 的完整性哈希嵌在 Codex.exe 里，只换 asar 不同步哈希，应用会直接拒绝启动  

总之失败了，就这样吧