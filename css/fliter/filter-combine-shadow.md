### fliter融合技-图片阴影

通常，我们生成阴影都是单色的，可以使用`box-shadow`、`text-shadow`、`filter: drop-shadow()`，而使用fliter属性组合，可以生成渐变或者说颜色丰富的阴影。

下面是由fliter属性模拟的渐变背景：

<html>
  <iframe width="100%" height="300" src="http://code.vwantu.com/view/5eb663359bdae66963bacc64" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
</html>

当然可以把渐变背景换成图片：

<html>
  <iframe width="100%" height="300" src="http://code.vwantu.com/view/5eb663789bdae66963bacc65" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
</html>

可以看到生成了图片的影子效果，其实就是使用伪元素在底部叠加一层背景，偏移一定像素，然后使用filter中的亮度、对比度、模糊、透明度等滤镜模拟生成阴影效果。
