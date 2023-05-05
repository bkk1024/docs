# CSS

## 1、flex布局的一些属性

这些东西虽然很基础，但是时间长了，被问时一紧张还是容易说不上来，虽然写的时候可能很流畅，因此还是记录下，常温习比较好。

```less
.father {
  // 设定盒子为弹性盒子
  display: flex;
  // 设定主轴方向
  flex-direction: row | row-reverse | column | column-reverse;
  // 设定换行
  flex-wrap: wrap | nowrap | wrap-reverse;
  // flex-direction 和 flex-wrap 的简写
  flex-flow: row nowrap;
  // 设定主轴的对齐方式
  justify-content: flex-start | flex-end | center | space-between | space-around;
  // 设定副轴的对齐方式，如主轴为 x，则副轴为 y
  align-items: flex-start | flex-end | center | baseline | stretch;
  // 定义多根轴线的对齐方式，如果只有一个轴线，不起作用
  align-content: flex-start | flex-end | center | space-between | space-around | strecth;
  
  .son {
    // 定义排列顺序，数值越小越靠前，默认0
    order: 0;
    // 定义放大比例，默认为0
    flex-grow: 0;
    // 定义虽小比例，默认为1
    flex-shrink: 1;
    // 定义在分配多余空间前，这个元素占据的主轴空间，默认 auto
    flex-basis: auto;
    // flex-grow flex-shrink flex-basis 的简写，auto => 1 1 auto; none => 0 0 auto;
    flex: 0 1 auto;
    // 语序这个子元素有与其他子元素不同的对齐方式
    align-self: auto;
  }
}
```

## 2、水平垂直居中方式

这个就不写代码了，比较简单，应该不会忘记：

1. display: flex + justify-content: center + align-items: center
2. position: absolute + left + right + top + bottom + transform: translate()
3. position: absolute + left + right + top + bottom + margin: auto

一般就这三种常用

## 3、position 的属性

这个虽然之前用得多，但是有些还是容易一时脑抽就忘记，真见鬼了😒，看来还是记得不牢。

1. static：默认值
2. initial：设置该属性为默认值
3. relative：相对定位
4. absolute：绝对定位
5. fixed：固定定位
6. sticky：粘性定位
7. inherit：规定应该从父元素继承 position 的值

