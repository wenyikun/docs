### 滚动捕捉简单使用

CSS Scroll Snap（CSS 滚动捕捉），即在滚动时对滚动位置进行捕捉。当滚动结束时，滚动位置会停留在捕捉点设置的位置。

`scroll-snap-type`是Scroll Snap标准中的一个属性，该属性定义在滚动容器中的一个捕捉点如何被严格的执行，也就是滚动捕捉的类型，设置在滚动容器。

`scroll-snap-type`接受以下值：

- `none` 禁用滚动捕捉
- `x` 仅启用沿x轴方向捕捉
- `y` 仅启用沿y轴方向捕捉
- `block` 仅启用沿块轴方向捕捉
- `inline` 仅启用沿内联轴方向捕捉
- `both` 沿两个轴方向捕捉
- `mandatory` 精确捕捉，它告诉浏览器在没有滚动发生时始终滚到捕捉位置。
- `proximity` 非精确捕捉，如果滚动动作非常接近捕捉位置，它会告诉浏览器滚到捕捉位置。如果距离不太近，则浏览器不应该捕捉并且滚动将正常进行。

该属性需要与`scroll-snap-align`结合使用，设置在滚动容器内的元素，`scroll-snap-align`指定元素的那一部分与滚动容器的对应部分对齐。可设置值`none`、`start`、`center`、`end`，两个值分别指定两个方向上的对齐方式，当仅设定一个值时，表示两个方向都为该值。

下面是沿x轴方向捕捉，对齐方式为`start`，可以看到该方式下子元素左端始终对齐父容器的左端。延伸可以做成我们常见的幻灯片切换效果，而且带吸附效果，不用像以前需要用JavaScript写复杂的判断逻辑。

<html>
  <iframe width="100%" height="300" src="http://code.vwantu.com/view/5eb662d29bdae66963bacc63" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
</html>

#### 参考资料：

- [实战CSS Scroll Snapping](https://www.w3cplus.com/css/practical-css-scroll-snapping.html)
- [Practical CSS Scroll Snapping](https://css-tricks.com/practical-css-scroll-snapping/)
- [精准操控的滚动体验，浅谈新标准 Scroll Snap](https://juejin.im/post/5ba079e86fb9a05d1227fddb)
- [CSS Scroll Snap Module Level 1](https://www.w3.org/TR/2019/CR-css-scroll-snap-1-20190319/)
