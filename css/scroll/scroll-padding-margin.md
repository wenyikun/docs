### 非边缘捕捉

默认情况下，设置滚动捕捉内容会吸附到容器边缘。但有时候这不是我们想要的，比如顶部有固定导航栏，这时候内容就需要吸附在导航栏下面，实现这个效果可以设置`scroll-padding`或者`scroll-margin`属性， 这两个属性的设置方式跟`padding`或者`margin`的设置方式一样。

<html>
  <iframe width="100%" height="300" src="http://code.vwantu.com/view/5eb670fd117e3a17619a9613" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
</html>

其中，`scroll-padding`设置在外层容器，`scroll-margin`设置在滚动内容上。所以，`scroll-padding`适合滚动吸附位置相同设置，而`scroll-margin`可以分别设置不同元素的不同吸附位置。

`scroll-padding`或`scroll-margin`也可以单独使用，如实现点击滚动到某个位置时，同样是到容器边缘，通过设置`scroll-padding`或`scroll-margin`就可以改变这个位置。

<html>
  <iframe width="100%" height="300" src="http://code.vwantu.com/view/5eb671b9117e3a17619a9614" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
</html>

案例中点击更多内容定位的内容区如果没有设置`scroll-padding`会到页面顶部，这样导航栏就会遮住部分内容，设置了`scroll-padding`之后就会停留在导航以下。