### fliter设置渐变背景

利用css滤镜可以实现很多神奇的特效，hue-rotate + animation可以很简单的实现颜色的渐变动效。

<!-- ![色相](https://res.vwantu.com/uploads/color_wheel_hsl.png) -->
<html>
  <img src="https://res.vwantu.com/uploads/color_wheel_hsl.png" width="300">
</html>

hue-rotate旋转色相时，就是围绕这个色环旋转。因此，您可以看到红色在色环上为0度。如果图像包含红色，并且旋240deg，则该图像的该部分将变为蓝色；旋转360度，就回到原来的红色。animation动画就是通过角度旋转实现颜色的渐变。

<html>
  <iframe width="100%" height="300" src="http://code.vwantu.com/view/5eb65c3a9bdae66963bacc61" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
</html>

也可以实现渐变文字动效。

<html>
  <iframe width="100%" height="200" src="http://code.vwantu.com/view/5eb662409bdae66963bacc62" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
</html>
