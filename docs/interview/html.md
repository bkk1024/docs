# HTML

## 1、H5 新特性

1. 新增选择器：`document.querySelector | document.querySelectorAll` 
2. 媒体播放：video、audio
3. 本地存储：sessionStorage、localStorage
4. 语义化标签：header、footer、nav、section等
5. 表单控件：calendar、date、time、email、url等
6. 全双工通信协议：websocket
7. 历史管理：history
8. canvas
9. Form Data 对象

## 2、html 语义化

html 语义化即对应的标签做对应的事情，这样可以使页面有良好的结构、能够让代码有更好的阅读体验、方便开发维护、有利于 SEO 和搜索引擎建立良好的沟通。

## 3、src 和 href 的区别

src 用于 img、video、audio、script 这类元素，用于加载外部资源。当浏览器解析到这里时，会停下其他资源的下载，直到将这个资源加载、编译、执行完毕。所以我们要将 js 脚本放在页面底部。

herf 用于 link、a 这类元素，意味着超链接。当浏览器解析到这里时，不会停止其他资源的加载。

## 4、title 和 h1、strong 和 b、i 和 em 的区别

title 表示整个网页的标题，展示在标签页上面

h1 表示页面中内容的标题

strong 表示是重点内容，有语气加强的含义，使用阅读设备阅读时会重读

b 表示强调内容

i 是早期的斜体元素，表示内容展示为斜体

em 表示强调文本，内容也是斜体

## 5、iframe 的作用、优缺点

iframe 用于将一个网页嵌套到另一个网页中

优点：可以用来处理加载缓慢的内容，如广告

缺点：会阻塞主页面的 Onload 事件、会和主页面共享连接池影响页面并行加载、会产生很多页面导致管理不易、浏览器的后退按钮没有作用、无法被一些搜索引擎识别

## 6、img 上的 title 和 alt

title：鼠标悬浮时展示的内容

alt：图片资源加载失败时加载的内容，是资源的平替，对用户而言更加友好

## 7、常见块元素、行内元素、区别、转换

块元素：div、p、form、ul、li、ol、table、h[1-6]、dl、dt、dd

行内元素：span、a、img、button、input、select

区别：

块元素默认独占一行，从上到下排列，未设置 width 时默认为 100%，宽高、行高、内外边距都可以设置，可以容纳其他块元素和行内元素

行内元素默认在同一行排列，从左到右，宽高由内容决定，不能设置宽高，可以设置 line-height、内外边距只能设置左右

转换：

display: block

display: inline

display: inline-block

## 8、label 的作用

简单说就是它划定了一块区域，这里面的元素的点击效果都一样，例如一个单选框，使用 label 后，点击圆圈可以选中，点击文本也可以选中。

label 的 for 属性应当与相关元素的 id 属性相同

## 9、Quirks（怪癖）模式是什么，和 Standards（标准）模式的区别

页面如果写了DTD，就意味着这个页面采用对CSS支持更好的布局，而如果没有，则采用兼容之前的布局方式，这就是Quirks模式，有时候也叫怪癖模式、诡异模式、怪异模式。

区别：总体会有布局、样式解析、脚本执行三个方面区别，这里列举一些比较常见的区别：

- `盒模型`：在W3C标准中，如果设置一个元素的宽度和高度，指的是元素内容的宽度和高度，然而在Quirks模式下，IE的宽度和高度还包含了padding和border
- `设置行内元素的高宽`：在Standards模式下，给行内元素设置width和height都不会生效，而在Quriks模式下会生效
- `用margin：0 auto设置水平居中`:在Standards模式下，设置margin：0 auto；可以使元素水平居中，但是在Quriks模式下失效
- `设置百分比高度`:在Standards模式下，元素的高度是由包含的内容决定的，如果父元素没有设置百分比的高度，子元素设置百分比的高度是无效的

## 10、怎么处理 HTML5 新标签兼容问题

1. 实现标签被识别：

   通过`document.createElement(tagName)`方法可以让浏览器识别新的标签，浏览器支持新标签后，还可以为新标签添加 css 样式

2. 使用 js 解决：

   使用 HTML5 的 shim 框架，在`head`标签中调用以下代码

   ```html
   <!--[if lt IE 9]>
   	<script> src="http://html5shim.googlecode.com/svn/trunk/html5.js" </script>
   <![endif]-->
   ```

## 11、如何实现在一张图片上的某个区域做到点击事件

使用图片热区技术：

1. 插入一张图片，并设置好图像的有关参数，在`<img>`标记中设置参数`usemap="#Map"`，以表示对图像地图的引用。
2. 用`<map>`标记设定图像地图的作用区域，并取名：Map；
3. 分别用`<area>`标记针对相应位置互粉出多个矩形作用区域，并设定好链接参数`href`

```html
<body>
 <img src="./image.jpg" alt="" usemap="#Map" />
 　　<map name="Map" id="Map">
     <area alt="" 
           title="" 
           href="#" 
           shape="poly"
           coords="65,71,98,58,114,90,108,112,79,130,56,116,
                   38,100,41,76,52,53,83,34,110,33,139,46,141,
                   75,145,101,127,115,113,133,85,132,82,131,159,117" />
     <area alt="" title="" href="#" shape="poly" coords="28,22,57,20,36,39,27,61" />
 </map>
</body>
```

## 12、a 标签除了用来跳转链接，还能干嘛

1. 手机拨号：`<a href="tel:110"> 110 </a>`
2. 发短信：`<a href="sms:110"> 110 </a>`
3. 发邮件等
4. 锚点跳转
5. 下载文件

