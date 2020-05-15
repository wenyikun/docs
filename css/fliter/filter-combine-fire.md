### fliter融合技-燃烧的火焰

通过滤镜的属性组合可以生成神奇的特效。

<html>
  <iframe width="100%" height="300" src="http://code.vwantu.com/view/5eb663df9bdae66963bacc66" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
</html>

这个效果的实现就是，外层盒子添加对比度设置`filter: contrast(20);`,内层黄色小球设置高斯模糊`filter: blur(6px);`, 可以看到对比度与高斯模糊的共同作用下黑色与黄色相交的边缘变成了红色。另外一个黑色小球经过黄色小球能看到边缘在变化。

利用这个融合效果，就可以实现一个火焰的效果。

<html>
  <iframe width="100%" height="300" src="http://code.vwantu.com/view/5eb664279bdae66963bacc67" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
</html>

如上，通过多个不同的黑色小球穿过黄色三角形，黑色与黄色边缘不断变换，就可以实现类似火焰的效果，这个效果使用scss、less等预编译语言随机部分参数实现效果会更好。

#### 参考资料：

- [你所不知道的 CSS 滤镜技巧与细节](https://www.cnblogs.com/coco1s/p/7519460.html)
