# HTML

## 1、H5C3 新特性

H5新特性

1. 新增选择器：`document.querySelector | document.querySelectorAll` 
2. 媒体播放：video、audio
3. 本地存储：sessionStorage、localStorage
4. 语义化标签：header、footer、nav、section等
5. 表单控件：calendar、date、time、email、url等
6. 全双工通信协议：websocket
7. 历史管理：history
8. canvas
9. Form Data 对象

C3新特性：

1. 新增选择器：属性选择器、伪类选择器、伪元素选择器
2. 媒体查询：@media
3. 文字阴影
4. 边框
5. 盒子模型：box-sizing
6. 渐变
7. 过渡
8. 自定义动画
9. 背景属性
10. 2D和3D

## 2、html 语义化

html 语义化即对应的标签做对应的事情，这样可以使页面有良好的结构、能够让代码有更好的阅读体验、方便开发维护、有利于 SEO 和搜索引擎建立良好的沟通、让浏览器更好的解析代码。

在写html页面结构时所用的标签是有意义的，如头部使用head，主体用main，底部用foot等。

## 3、src 和 href 的区别

src 用于 img、video、audio、script 这类元素，用于加载外部资源。当浏览器解析到这里时，会停下其他资源的下载，直到将这个资源加载、编译、执行完毕。所以我们要将 js 脚本放在页面底部。

herf 用于 link、a 这类元素，意味着超链接。当浏览器解析到这里时，不会停止其他资源的加载。

## 4、title 和 h1、strong 和 b、i 和 em 的区别

1. title和h1
   - title：概括了网站信息，可以告诉搜索引擎或者用户关于这个网站的内容主题是什么。title显示在网页标题上。
   - h1：文章主题内容，告诉spider我们的网站内容最主要是什么。h1显示在网页内容上。
2. strong和b
   - strong：一个逻辑标签，用来加强字符语气，使用阅读设备阅读时会重读，它表示标签内字符比较重要，用以强调。
   - b：是一个实体标签，用来给文字加粗，它只有加粗的样式，没有实际含义。
3. i和em：
   - i：是一个实体标签，用来做文字倾斜，没有实际含义。
   - em：是一个逻辑标签，用来强调文字内容，表示标签内字符重要，用以强调。

## 5、iframe 的作用、优缺点

iframe 用于将一个网页嵌套到另一个网页中

优点：可以用来处理加载缓慢的内容，如广告

缺点：会阻塞主页面的 Onload 事件、会和主页面共享连接池影响页面并行加载、会产生很多页面导致管理不易、浏览器的后退按钮没有作用、无法被一些搜索引擎识别

## 6、img 上的 title 和 alt

title：鼠标悬停在图片上时展示的内容。

alt：图片资源加载失败时展示的内容，是资源的平替，对用户而言更加友好。

在seo的层面上，spider抓取不到图片的内容，所以前端在写img标签时，为了增加seo效果，要加入alt属性来描述这张图是什么内容或者关键词。

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

## 13、移动端兼容问题

1. 设置`overflow: scroll/auto`时，ios上的滑动会卡顿
   - 解决方案：`-webkit-overflow-scrolling: touch`
2. 在安卓环境下，`placeholder`文字设置行高时会偏上
   - 解决方案：input有placeholder时不设置行高
3. 移动端字体小于12px时异常显示
   - 解决方案：先将整体放大一倍，然后再使用`transform`进行缩小
4. ios下input按钮设置了`disabled`属性为true时显示异常
   - 解决方案：`input[type=button]{opcity:1}`
5. 安卓手机下取消语音输入按钮
   - 解决方案：`input::-webkit-input-speech-button{display:none}`
6. ios下取消input输入框在输入英文首字母默认大写
   - 解决方案：`<input autocapitalize="off" autocorrect="off" />`
7. 禁用ios和安卓用户选中文字
   - 解决方案：`-webkit-user-select: none`
8. 禁止ios弹出各种窗口
   - 解决方案：`-webkit-touch-callout: none`
9. 禁止ios识别长串数字为电话
   - 解决方案：`<meta conten="telephone=no" name="format-detection" />`

## 14、页面导入样式时，使用link和@import有什么区别

1. link的兼容性好于@import
2. 加载顺序差别，浏览器会先加载link标签，后加载@import

## 15、png、jpg、gif这些图片格式解释以下，分别什么时候使用？

1. png：无损压缩，尺寸体积要比jpg/jpeg大，更适合做小图标。
2. jpg：采用压缩算法，有一点失真，比png体积小，适合做中大型图片。
3. gif：一般做动图。
4. webp：同时支持有损或无损压缩，相同质量的图片，webp具有更小的体积。但是兼容性不是特别好。























