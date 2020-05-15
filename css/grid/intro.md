### Grid布局介绍（1）

Grid是最强大的CSS布局方案。通常我们所使用的布局是只考虑行或者列，而Grid需要指定某一行、某一列，所以布局是二维的。

#### Grid容器设置

`display: grid;`设置Grid容器，然后进行网格划分，分别使用`grid-template-rows`和`grid-template-columns`，`grid-template-rows: 100px 100px;`设置两行且每行高度100px，`grid-template-columns: 150px 150px;`设置两列且每列宽度150px。如：

<html>
  <iframe width="100%" height="200" src="http://code.vwantu.com/view/5ebd50ce514e87555491a38b" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
</html>

网格除常见的设置宽高方式外，还有以下方式：

1. **repeat()**

如果设置多行、多列时，一个个写就太麻烦了，所以可以使用repeat()。

```css
grid-template-rows: repeat(2, 100px);
grid-template-columns: repeat(2, 150px);
```

repeat()第一个参数是重复次数。也可以是`auto-fill`自动填充，当超过容器大小时自动换行或列。第二个参数是重复的值，可以是一组数值。

2. **fr**

设置比例关系，如两列宽度都为1fr表示容器宽度分为相等的两份。有固定值的话，除掉固定值剩下的进行比例划分。

```css
grid-template-rows: 1fr 1fr;
grid-template-columns: 150px 1fr 1fr;
```

3. **minmax()**

minmax()设置一个范围，两个参数表示最小值和最大值。

单元格划分还可以加上网格线的名称，如：

```css
grid-template-rows: [r1] 100px [r2] 100px [r3];
grid-template-columns: [c1] 150px [c2] 150px [c3];
```

后面子元素进行区域划分的时候就可以指定名称了。