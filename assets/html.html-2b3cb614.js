import{_ as a,W as n,X as t,a0 as s}from"./framework-4f54a744.js";const e={},l=s(`<h1 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> HTML</h1><h2 id="_1、h5c3-新特性" tabindex="-1"><a class="header-anchor" href="#_1、h5c3-新特性" aria-hidden="true">#</a> 1、H5C3 新特性</h2><p>H5新特性</p><ol><li>新增选择器：<code>document.querySelector | document.querySelectorAll</code></li><li>媒体播放：video、audio</li><li>本地存储：sessionStorage、localStorage</li><li>语义化标签：header、footer、nav、section等</li><li>表单控件：calendar、date、time、email、url等</li><li>全双工通信协议：websocket</li><li>历史管理：history</li><li>canvas</li><li>Form Data 对象</li></ol><p>C3新特性：</p><ol><li>新增选择器：属性选择器、伪类选择器、伪元素选择器</li><li>媒体查询：@media</li><li>文字阴影</li><li>边框</li><li>盒子模型：box-sizing</li><li>渐变</li><li>过渡</li><li>自定义动画</li><li>背景属性</li><li>2D和3D</li></ol><h2 id="_2、html-语义化" tabindex="-1"><a class="header-anchor" href="#_2、html-语义化" aria-hidden="true">#</a> 2、html 语义化</h2><p>html 语义化即对应的标签做对应的事情，这样可以使页面有良好的结构、能够让代码有更好的阅读体验、方便开发维护、有利于 SEO 和搜索引擎建立良好的沟通、让浏览器更好的解析代码。</p><p>在写html页面结构时所用的标签是有意义的，如头部使用head，主体用main，底部用foot等。</p><h2 id="_3、src-和-href-的区别" tabindex="-1"><a class="header-anchor" href="#_3、src-和-href-的区别" aria-hidden="true">#</a> 3、src 和 href 的区别</h2><p>src 用于 img、video、audio、script 这类元素，用于加载外部资源。当浏览器解析到这里时，会停下其他资源的下载，直到将这个资源加载、编译、执行完毕。所以我们要将 js 脚本放在页面底部。</p><p>herf 用于 link、a 这类元素，意味着超链接。当浏览器解析到这里时，不会停止其他资源的加载。</p><h2 id="_4、title-和-h1、strong-和-b、i-和-em-的区别" tabindex="-1"><a class="header-anchor" href="#_4、title-和-h1、strong-和-b、i-和-em-的区别" aria-hidden="true">#</a> 4、title 和 h1、strong 和 b、i 和 em 的区别</h2><ol><li>title和h1 <ul><li>title：概括了网站信息，可以告诉搜索引擎或者用户关于这个网站的内容主题是什么。title显示在网页标题上。</li><li>h1：文章主题内容，告诉spider我们的网站内容最主要是什么。h1显示在网页内容上。</li></ul></li><li>strong和b <ul><li>strong：一个逻辑标签，用来加强字符语气，使用阅读设备阅读时会重读，它表示标签内字符比较重要，用以强调。</li><li>b：是一个实体标签，用来给文字加粗，它只有加粗的样式，没有实际含义。</li></ul></li><li>i和em： <ul><li>i：是一个实体标签，用来做文字倾斜，没有实际含义。</li><li>em：是一个逻辑标签，用来强调文字内容，表示标签内字符重要，用以强调。</li></ul></li></ol><h2 id="_5、iframe-的作用、优缺点" tabindex="-1"><a class="header-anchor" href="#_5、iframe-的作用、优缺点" aria-hidden="true">#</a> 5、iframe 的作用、优缺点</h2><p>iframe 用于将一个网页嵌套到另一个网页中</p><p>优点：可以用来处理加载缓慢的内容，如广告</p><p>缺点：会阻塞主页面的 Onload 事件、会和主页面共享连接池影响页面并行加载、会产生很多页面导致管理不易、浏览器的后退按钮没有作用、无法被一些搜索引擎识别</p><h2 id="_6、img-上的-title-和-alt" tabindex="-1"><a class="header-anchor" href="#_6、img-上的-title-和-alt" aria-hidden="true">#</a> 6、img 上的 title 和 alt</h2><p>title：鼠标悬停在图片上时展示的内容。</p><p>alt：图片资源加载失败时展示的内容，是资源的平替，对用户而言更加友好。</p><p>在seo的层面上，spider抓取不到图片的内容，所以前端在写img标签时，为了增加seo效果，要加入alt属性来描述这张图是什么内容或者关键词。</p><h2 id="_7、常见块元素、行内元素、区别、转换" tabindex="-1"><a class="header-anchor" href="#_7、常见块元素、行内元素、区别、转换" aria-hidden="true">#</a> 7、常见块元素、行内元素、区别、转换</h2><p>块元素：div、p、form、ul、li、ol、table、h[1-6]、dl、dt、dd</p><p>行内元素：span、a、img、button、input、select</p><p>区别：</p><p>块元素默认独占一行，从上到下排列，未设置 width 时默认为 100%，宽高、行高、内外边距都可以设置，可以容纳其他块元素和行内元素</p><p>行内元素默认在同一行排列，从左到右，宽高由内容决定，不能设置宽高，可以设置 line-height、内外边距只能设置左右</p><p>转换：</p><p>display: block</p><p>display: inline</p><p>display: inline-block</p><h2 id="_8、label-的作用" tabindex="-1"><a class="header-anchor" href="#_8、label-的作用" aria-hidden="true">#</a> 8、label 的作用</h2><p>简单说就是它划定了一块区域，这里面的元素的点击效果都一样，例如一个单选框，使用 label 后，点击圆圈可以选中，点击文本也可以选中。</p><p>label 的 for 属性应当与相关元素的 id 属性相同</p><h2 id="_9、quirks-怪癖-模式是什么-和-standards-标准-模式的区别" tabindex="-1"><a class="header-anchor" href="#_9、quirks-怪癖-模式是什么-和-standards-标准-模式的区别" aria-hidden="true">#</a> 9、Quirks（怪癖）模式是什么，和 Standards（标准）模式的区别</h2><p>页面如果写了DTD，就意味着这个页面采用对CSS支持更好的布局，而如果没有，则采用兼容之前的布局方式，这就是Quirks模式，有时候也叫怪癖模式、诡异模式、怪异模式。</p><p>区别：总体会有布局、样式解析、脚本执行三个方面区别，这里列举一些比较常见的区别：</p><ul><li><code>盒模型</code>：在W3C标准中，如果设置一个元素的宽度和高度，指的是元素内容的宽度和高度，然而在Quirks模式下，IE的宽度和高度还包含了padding和border</li><li><code>设置行内元素的高宽</code>：在Standards模式下，给行内元素设置width和height都不会生效，而在Quriks模式下会生效</li><li><code>用margin：0 auto设置水平居中</code>:在Standards模式下，设置margin：0 auto；可以使元素水平居中，但是在Quriks模式下失效</li><li><code>设置百分比高度</code>:在Standards模式下，元素的高度是由包含的内容决定的，如果父元素没有设置百分比的高度，子元素设置百分比的高度是无效的</li></ul><h2 id="_10、怎么处理-html5-新标签兼容问题" tabindex="-1"><a class="header-anchor" href="#_10、怎么处理-html5-新标签兼容问题" aria-hidden="true">#</a> 10、怎么处理 HTML5 新标签兼容问题</h2><ol><li><p>实现标签被识别：</p><p>通过<code>document.createElement(tagName)</code>方法可以让浏览器识别新的标签，浏览器支持新标签后，还可以为新标签添加 css 样式</p></li><li><p>使用 js 解决：</p><p>使用 HTML5 的 shim 框架，在<code>head</code>标签中调用以下代码</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--[if lt IE 9]&gt;
	&lt;script&gt; src=&quot;http://html5shim.googlecode.com/svn/trunk/html5.js&quot; &lt;/script&gt;
&lt;![endif]--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_11、如何实现在一张图片上的某个区域做到点击事件" tabindex="-1"><a class="header-anchor" href="#_11、如何实现在一张图片上的某个区域做到点击事件" aria-hidden="true">#</a> 11、如何实现在一张图片上的某个区域做到点击事件</h2><p>使用图片热区技术：</p><ol><li>插入一张图片，并设置好图像的有关参数，在<code>&lt;img&gt;</code>标记中设置参数<code>usemap=&quot;#Map&quot;</code>，以表示对图像地图的引用。</li><li>用<code>&lt;map&gt;</code>标记设定图像地图的作用区域，并取名：Map；</li><li>分别用<code>&lt;area&gt;</code>标记针对相应位置互粉出多个矩形作用区域，并设定好链接参数<code>href</code></li></ol><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./image.jpg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">usemap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#Map<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
 　　<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>map</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Map<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Map<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>area</span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> 
           <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> 
           <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span> 
           <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>poly<span class="token punctuation">&quot;</span></span>
           <span class="token attr-name">coords</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>65,71,98,58,114,90,108,112,79,130,56,116,
                   38,100,41,76,52,53,83,34,110,33,139,46,141,
                   75,145,101,127,115,113,133,85,132,82,131,159,117<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>area</span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>poly<span class="token punctuation">&quot;</span></span> <span class="token attr-name">coords</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>28,22,57,20,36,39,27,61<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>map</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_12、a-标签除了用来跳转链接-还能干嘛" tabindex="-1"><a class="header-anchor" href="#_12、a-标签除了用来跳转链接-还能干嘛" aria-hidden="true">#</a> 12、a 标签除了用来跳转链接，还能干嘛</h2><ol><li>手机拨号：<code>&lt;a href=&quot;tel:110&quot;&gt; 110 &lt;/a&gt;</code></li><li>发短信：<code>&lt;a href=&quot;sms:110&quot;&gt; 110 &lt;/a&gt;</code></li><li>发邮件等</li><li>锚点跳转</li><li>下载文件</li></ol><h2 id="_13、移动端兼容问题" tabindex="-1"><a class="header-anchor" href="#_13、移动端兼容问题" aria-hidden="true">#</a> 13、移动端兼容问题</h2><ol><li>设置<code>overflow: scroll/auto</code>时，ios上的滑动会卡顿 <ul><li>解决方案：<code>-webkit-overflow-scrolling: touch</code></li></ul></li><li>在安卓环境下，<code>placeholder</code>文字设置行高时会偏上 <ul><li>解决方案：input有placeholder时不设置行高</li></ul></li><li>移动端字体小于12px时异常显示 <ul><li>解决方案：先将整体放大一倍，然后再使用<code>transform</code>进行缩小</li></ul></li><li>ios下input按钮设置了<code>disabled</code>属性为true时显示异常 <ul><li>解决方案：<code>input[type=button]{opcity:1}</code></li></ul></li><li>安卓手机下取消语音输入按钮 <ul><li>解决方案：<code>input::-webkit-input-speech-button{display:none}</code></li></ul></li><li>ios下取消input输入框在输入英文首字母默认大写 <ul><li>解决方案：<code>&lt;input autocapitalize=&quot;off&quot; autocorrect=&quot;off&quot; /&gt;</code></li></ul></li><li>禁用ios和安卓用户选中文字 <ul><li>解决方案：<code>-webkit-user-select: none</code></li></ul></li><li>禁止ios弹出各种窗口 <ul><li>解决方案：<code>-webkit-touch-callout: none</code></li></ul></li><li>禁止ios识别长串数字为电话 <ul><li>解决方案：<code>&lt;meta conten=&quot;telephone=no&quot; name=&quot;format-detection&quot; /&gt;</code></li></ul></li></ol><h2 id="_14、页面导入样式时-使用link和-import有什么区别" tabindex="-1"><a class="header-anchor" href="#_14、页面导入样式时-使用link和-import有什么区别" aria-hidden="true">#</a> 14、页面导入样式时，使用link和@import有什么区别</h2><ol><li>link的兼容性好于@import</li><li>加载顺序差别，浏览器会先加载link标签，后加载@import</li></ol><h2 id="_15、png、jpg、gif这些图片格式解释以下-分别什么时候使用" tabindex="-1"><a class="header-anchor" href="#_15、png、jpg、gif这些图片格式解释以下-分别什么时候使用" aria-hidden="true">#</a> 15、png、jpg、gif这些图片格式解释以下，分别什么时候使用？</h2><ol><li>png：无损压缩，尺寸体积要比jpg/jpeg大，更适合做小图标。</li><li>jpg：采用压缩算法，有一点失真，比png体积小，适合做中大型图片。</li><li>gif：一般做动图。</li><li>webp：同时支持有损或无损压缩，相同质量的图片，webp具有更小的体积。但是兼容性不是特别好。</li></ol>`,53),i=[l];function o(p,c){return n(),t("div",null,i)}const r=a(e,[["render",o],["__file","html.html.vue"]]);export{r as default};
