---
title: 测试-文章中插入视频
date: 1970-01-01 19:33:50
tags: [Test]
category: [Test]
---
XD  
<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=974500732&bvid=BV1844y117ZA&cid=379927877&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>  

插入的是一条B站的视频，我自己制作的第一条视频  
不出意外是能够显示的，点进去就会跳转到B站的具体视频页面  
但目前排版有点问题：  
![](样式截图.webp)  
就像这样，视频莫名跑到了tag这一行旁边，试着加了换行也没用  

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=974500732&bvid=BV1844y117ZA&cid=379927877&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>    
  
我又加了一条新的视频在文章中，能正常显示在正确位置  
然后我试了在第一条视频前加了一行空格，并没有用  
现在加了个“XD”当占位符，能在正确位置了  
现在插入的视频会打开页面后自动播放，查了一下，要在复制链接cid后加入autoplay=0就好了，我已经在上面的视频链接里加入了，现在再试已经不会自动播放了  