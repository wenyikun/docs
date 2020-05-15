### fliter是什么

filter CSS属性将模糊或颜色偏移等图形效果应用于元素。滤镜通常用于调整图像，背景和边框的渲染。

<html>
  <iframe
    width="100%"
    height="400"
    src="http://code.vwantu.com/view/5eb65bbb9bdae66963bacc60"
    allowfullscreen="allowfullscreen"
    frameborder="0"
  ></iframe>
</html>

| Filter | 描述 | 默认值 |
| ---- | ---- | ---- |
| none | 默认值，没有效果。 | - |
| blur(px) | 给图像设置高斯模糊。"radius"一值设定高斯函数的标准差，或者是屏幕上以多少像素融在一起， 所以值越大越模糊。| 0 |
| brightness(%) | 给图片应用一种线性乘法，使其看起来更亮或更暗。值小于100%，图像会比原来更暗；值也可以大于100%，图像会比原来更亮。| 1 |
| contrast(%) | 调整图像的对比度。值越大，对比度更低。| 1 |
| drop-shadow(h-shadow v-shadow blur spread color) | 给图像设置一个阴影效果。与box-shadow属性设置方式相同。| - |
| grayscale(%) | 将图像转换为灰度图像。取值0到100%。| 0 |
| hue-rotate(deg) | 给图像应用色相旋转。"angle"一值设定图像会被调整的色环角度值。该值虽然没有最大值，超过360deg的值相当于又绕一圈。| 0 |
| invert(%) | 反转输入图像。值定义转换的比例。取值0到100%。| 1 |
| opacity(%) | 转化图像的透明程度。值定义转换的比例。取值0到100%。| 1 |
| saturate(%) | 转换图像饱和度。值定义转换的比例。取值0到100%。| 1 |
| sepia(%) | 将图像转换为深褐色。值定义转换的比例。取值0到100%。| 0 |
