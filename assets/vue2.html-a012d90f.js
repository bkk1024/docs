import{_ as p,W as o,X as c,Y as a,$ as s,a1 as r,Z as e,a0 as n,C as t}from"./framework-4f54a744.js";const u={},d=n(`<h1 id="vue2" tabindex="-1"><a class="header-anchor" href="#vue2" aria-hidden="true">#</a> vue2</h1><h2 id="_1、data-为什么是一个函数" tabindex="-1"><a class="header-anchor" href="#_1、data-为什么是一个函数" aria-hidden="true">#</a> 1、data 为什么是一个函数</h2><p><code>data</code>函数如下：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vue 中的组件是用来复用的，为了防止我们多次使用同一个组件时，这个组件中的<code>data</code>被复用，即我们每次访问的都是同一个<code>data</code>，因此将其定义为一个函数。这样我们每次使用组件时，它里面的<code>data</code>数据都是相互隔离互不影响的。</p><h2 id="_2、v-if和v-show" tabindex="-1"><a class="header-anchor" href="#_2、v-if和v-show" aria-hidden="true">#</a> 2、v-if和v-show</h2><p>它们都可以控制元素的显示和隐藏</p><ul><li>v-show：使用<code>display: none</code>来让元素隐藏</li><li>v-if：将元素删除或者添加进来到文档来控制显隐</li></ul><p>v-if有一个局部编译/卸载的过程，切换这个过程中会适当的销毁和重建内部的事件监听和子组件，会触发组件的生命周期，切换效率更低。</p><p>v-show只是简单的css切换，不会触发组件的生命周期，切换效率更高。</p><h2 id="_3、v-for中的key值的作用" tabindex="-1"><a class="header-anchor" href="#_3、v-for中的key值的作用" aria-hidden="true">#</a> 3、v-for中的key值的作用</h2><p>key属性是DOM元素的唯一标识，在页面的DOM改动时，vue会根据key去判断哪些元素是新增的，哪些是不变的，这样就能更高效的改动DOM树。</p><h2 id="_4、vue的生命周期" tabindex="-1"><a class="header-anchor" href="#_4、vue的生命周期" aria-hidden="true">#</a> 4、vue的生命周期</h2><ol><li>创建： <ul><li>beforeCreate：这个阶段，属性和方法都不能使用</li><li>created：这个阶段是实例创建完成后，这里完成了数据监测，可以使用数据，修改数据，不会触发updated，也不会更新视图</li></ul></li><li>挂载 <ul><li>beforeMount：这里完成了模板的编译，虚拟DOM也完成创建，即将渲染，可以修改数据，不会触发updaed</li><li>mounted：将编译好的模板挂载到页面上，这里可以发送异步请求，也可以访问DOM节点</li></ul></li><li>更新 <ul><li>beforeUpdate：组件数据更新前使用，数据是新的，页面上的数据是旧的，组件即将更新，准备渲染，可以修改数据</li><li>updated：render重新做了渲染，这时数据和页面都是新的，避免再此更新数据</li></ul></li><li>销毁 <ul><li>beforeDestroy：实例销毁前，在这里实例还可以使用，可以清除定时器等等</li><li>destroyed：组件已经被销毁</li></ul></li><li>使用了keep-alive： <ul><li>activated：组件激活时</li><li>deactivated：组件被销毁时</li></ul></li></ol><h2 id="_5、在created和mounted去请求数据有什么区别" tabindex="-1"><a class="header-anchor" href="#_5、在created和mounted去请求数据有什么区别" aria-hidden="true">#</a> 5、在created和mounted去请求数据有什么区别</h2><p>created：在渲染前调用，通常先初始化属性，然后做渲染。在这里请求数据不会造成闪屏问题，因为此时页面还未挂载到屏幕中。</p><p>mounted：在模板渲染完成后调用，一般都是初始化页面后，再对元素节点进行操作。在这里请求数据可能会出现闪屏的问题，这是由于加载时机不对造成的。</p><p>一般在created中请求数据较多。</p><p>可以理解为：如果请求的数据对DOM有影响，则使用created，如果与DOM无关，则可以使用mounted。</p><h2 id="_6、vue中的修饰符" tabindex="-1"><a class="header-anchor" href="#_6、vue中的修饰符" aria-hidden="true">#</a> 6、vue中的修饰符</h2><ol><li>事件修饰符 <ul><li>.stop：阻止冒泡</li><li>.prevent：阻止默认行为</li><li>.capture：内部元素触发事件先在此处理</li><li>.self：只有在event.target是当前元素时触发</li><li>.once：事件只触发一次</li><li>.passive：立即触发默认行为</li><li>.native：把当前元素作为原生标签看待</li></ul></li><li>按键修饰符 <ul><li>.keyup：按键抬起</li><li>.keydown：按键按下</li></ul></li><li>系统修饰符 <ul><li>.ctrl</li><li>.alt</li><li>.meta</li></ul></li><li>鼠标修饰符 <ul><li>.left：鼠标左键</li><li>.right：鼠标右键</li><li>.middle：鼠标中间</li></ul></li><li>表单修饰符 <ul><li>.lazy：等输入完之后再显示</li><li>.trim：删除内容前后的空格</li><li>.number：输入数字，或者将输入内容转为数字</li></ul></li></ol><h2 id="_7、vue中的组件通信" tabindex="-1"><a class="header-anchor" href="#_7、vue中的组件通信" aria-hidden="true">#</a> 7、vue中的组件通信</h2><ol><li>父传子： <ul><li>props</li><li>$ref</li></ul></li><li>子传父： <ul><li>$emit</li></ul></li><li>兄弟之间： <ul><li>事件总线 bus</li></ul></li><li>vuex传值</li><li>provide/inject：允许一个祖先组件向其所有的子孙组件传递数据，不管层级多深，这个子孙组件都能直接使用祖先组件传递的数据/方法。</li></ol><h2 id="_8、keep-alive" tabindex="-1"><a class="header-anchor" href="#_8、keep-alive" aria-hidden="true">#</a> 8、keep-alive</h2><p>keep-alive是Vue的一个内置组件，包裹组件时，会缓存不活跃的组件实例，而不是直接销毁它们。</p><p>作用：把组件切换的状态保存在内存中，防止重复渲染DOM节点，减少加载时间和性能消耗，提升用户体验。</p><h2 id="_9、axios是怎么做封装的" tabindex="-1"><a class="header-anchor" href="#_9、axios是怎么做封装的" aria-hidden="true">#</a> 9、axios是怎么做封装的</h2>`,27),k=n(`<h2 id="_10、vue路由传参" tabindex="-1"><a class="header-anchor" href="#_10、vue路由传参" aria-hidden="true">#</a> 10、vue路由传参</h2><ol><li><p>params传参</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;index&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 传递参数</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$route<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id <span class="token comment">// 获取传递的参数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>路由属性传参</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/index/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 传递参数，它需要在路由配置中写上需要的参数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>query传参</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;index&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 传递参数，它的参数在url地址中，可以解决刷新页面导致参数丢失问题</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_11、hash模式和history模式的区别" tabindex="-1"><a class="header-anchor" href="#_11、hash模式和history模式的区别" aria-hidden="true">#</a> 11、hash模式和history模式的区别</h2><ol><li>hash的路由地址上有#，history没有</li><li>在做回车刷新时，hash会加载对应页面，history会报错404</li><li>hash模式支持低版本浏览器，history不支持，因为是H5新增的</li><li>hash不会重新加载页面，单页面应用必备</li><li>history有历史记录，H5新增了pushState和replaceState两个方法去修改历史记录</li><li>history模式需要后台配置</li></ol><h2 id="_12、路由拦截是怎么实现的" tabindex="-1"><a class="header-anchor" href="#_12、路由拦截是怎么实现的" aria-hidden="true">#</a> 12、路由拦截是怎么实现的</h2><p>需要在路由配置中添加一个字段，它是用于判断路由是否需要拦截的</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;index&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;/index&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">component</span><span class="token operator">:</span> Index<span class="token punctuation">,</span>
  <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">requireAuth</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 表示当前这个路由需要拦截</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 这里的代码只是一个示例</span>
router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>requireAuth<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 需要拦截</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 通过token判断是否登录了</span>
      <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 其他操作</span>
      <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_13、动态路由" tabindex="-1"><a class="header-anchor" href="#_13、动态路由" aria-hidden="true">#</a> 13、动态路由</h2><p>在路由配置中设置meta属性，扩展权限相关的字段。在路由导航守卫中通过判断这个权限标识，实现路由的动态增加和跳转。</p><p>获取到用户登录后返回的用户角色，然后根据这个角色跟路由表中的meta中相关字段进行匹配，然后将匹配到的路由形成可访问的路由。</p><h2 id="_14、如何解决刷新后二次加载路由" tabindex="-1"><a class="header-anchor" href="#_14、如何解决刷新后二次加载路由" aria-hidden="true">#</a> 14、如何解决刷新后二次加载路由</h2><ol><li><p>window.location.reload()</p></li><li><p>matcher</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">resetRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> newRouter <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  router<span class="token punctuation">.</span>matcher <span class="token operator">=</span> newRouter<span class="token punctuation">.</span>matcher
<span class="token punctuation">}</span>

<span class="token comment">// 然后在 addRouter/addRoutes 之前调用一次 resetRouter</span>
<span class="token function">resetRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">addRoutes</span><span class="token punctuation">(</span>routeMenu<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>如果需要删除添加一级路由下面的子路由时，可以通过<code>this.$router.options.routes</code>获取到路由数组，然后通过循环的方式进行push/splice，然后再用上面的方式进行全局替换即可。</p></blockquote></li></ol><h2 id="_15、vuex刷新数据会丢失吗-怎么解决" tabindex="-1"><a class="header-anchor" href="#_15、vuex刷新数据会丢失吗-怎么解决" aria-hidden="true">#</a> 15、vuex刷新数据会丢失吗，怎么解决</h2><ol><li><p>放到sessionStorage、localStorage、cookie中</p></li><li><p>页面刷新时，再次请求数据，达到可以动态更新的方法</p><ul><li><p>监听浏览器的刷新事件，在刷新前把数据保存到sessionStorage里，刷新后请求数据，请求到了用vuex，如果没有则用sessionStorage里的数据</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function-variable function">onbeforeunload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// beforeunload：当窗口、文档及其资源即将被卸载时，触发该事件。</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;刷新了页面&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ol><h2 id="_16、computed和watch的区别" tabindex="-1"><a class="header-anchor" href="#_16、computed和watch的区别" aria-hidden="true">#</a> 16、computed和watch的区别</h2><ol><li>computed是计算属性，watch是监听数据变化，监听的是data中的数据</li><li>computed支持缓存，依赖的数据发生了变化才会重新计算，而watch不支持缓存</li><li>computed不支持异步，watch支持异步操作</li><li>computed在第一次加载时就开始监听，而watch在第一次时不监听</li><li>computed函数中必须有return，而watch不需要</li></ol><h2 id="_17、vue的双向数据绑定的原理" tabindex="-1"><a class="header-anchor" href="#_17、vue的双向数据绑定的原理" aria-hidden="true">#</a> 17、vue的双向数据绑定的原理</h2><p>通过数据劫持和发布订阅者模式来实现的。</p><p>vue2利用Object.defineProperty()方法来劫持各个属性的getter和setter。vue3使用Proxy。在数据发生改变的时候发布消息给订阅者，触发对应的监听回调渲染视图。</p><p>数据和视图是同步的，一方发生变化都会引发另一方同步变化。</p><ol><li><p>对需要observer的数据对象进行递归，包括子属性对象的属性，都添加上getter、setter</p></li><li><p>compile模板解析指令，把模板中的变量替换成数据，然后初始化渲染视图，同时把每个指令对应的节点绑定上更新函数，添加订阅者，如果数据变化，收到通知，更新视图</p></li><li><p>watcher订阅者是observer和compile之间的通信桥梁</p><p>watcher的作用：</p><ul><li>在自身实例化的时候往订阅器内添加自己</li><li>自身要有一个update()方法</li><li>等待属性变动时，调用自身的update方法，触发compile中的回调</li></ul></li><li><p>MVVM作为数据绑定的入口，整合了observer、compile、watcher三者，通过observer来监听自己的数据变化，通过compile来解析模板指令，然后利用watcher把observer和compile联系起来，最终达到数据和视图的双向绑定效果。</p></li></ol><p><img src="https://img-blog.csdnimg.cn/20210108140237683.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2hvdWd1YW5nemhhbw==,size_16,color_FFFFFF,t_70" alt=""></p><h2 id="_18、diff算法和虚拟dom" tabindex="-1"><a class="header-anchor" href="#_18、diff算法和虚拟dom" aria-hidden="true">#</a> 18、diff算法和虚拟DOM</h2>`,23),v={href:"https://bkk1024.github.io/docs/vue3/vue3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.html#%E8%99%9A%E6%8B%9F-dom",target:"_blank",rel:"noopener noreferrer"},h=n(`<p>虚拟DOM：使用js对象表示真实DOM，描述元素和元素之间的关系。如果组件内有响应式数据，数据发生改变时，render函数会生成一个新的虚拟DOM，这个新的虚拟DOM会和旧的虚拟DOM进行比对，找到需要修改的虚拟DOM内容，然后去对应的真实DOM中修改。</p><p>diff算法：新的虚拟DOM和旧的虚拟DOM比对时用的，返回一个patch对象，这个对象的作用就是存储两个节点不同的地方，最后用patch里记录的信息进行更新真实DOM。</p><p>步骤：</p><ol><li>js对象表示真实的DOM结构，要生成一个虚拟DOM，再用虚拟DOM构建一个真实的DOM树，渲染到页面</li><li>状态改变生成新的虚拟DOM，这个新的虚拟DOM跟旧的虚拟DOM进行比对，这个比对就是diff算法，利用patch记录差异</li><li>将记录的差异用在第一个虚拟DOM生成的真实DOM上，然后更新视图</li></ol><h2 id="_19、vue和jquery的区别是什么" tabindex="-1"><a class="header-anchor" href="#_19、vue和jquery的区别是什么" aria-hidden="true">#</a> 19、vue和jquery的区别是什么</h2><ol><li>原理不同：vue是数据绑定视图，jquery是先获取DOM，然后处理数据与视图</li><li>着重点不同：vue着重于数据，是数据驱动视图；jquery是着重于页面</li><li>操作不同</li><li>未来发展不同</li></ol><h2 id="_20、vue中遍历全局的方法有哪些" tabindex="-1"><a class="header-anchor" href="#_20、vue中遍历全局的方法有哪些" aria-hidden="true">#</a> 20、vue中遍历全局的方法有哪些</h2><ol><li>普通遍历：forEach()</li><li>对元素统一操作：map()</li><li>查找符合条件的元素：filter()</li><li>查询符合条件的元素，返回索引：findIndex()</li><li>遇到不符合条件的对象会停止：every()</li><li>找到符合条件的元素会停止：some()</li></ol><h2 id="_21、vue的过滤器怎么使用" tabindex="-1"><a class="header-anchor" href="#_21、vue的过滤器怎么使用" aria-hidden="true">#</a> 21、vue的过滤器怎么使用</h2><p>vue的过滤器：vue的特性，用来对文本进行格式化处理</p><p>使用它的两个地方：一个是插值表达式，一个是v-bind</p><p>分类：</p><ol><li><p>全局过滤器</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Vue<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token string">&quot;add&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> v <span class="token operator">&lt;</span> <span class="token number">10</span> <span class="token operator">?</span> <span class="token string">&quot;0&quot;</span> <span class="token operator">+</span> v <span class="token operator">:</span> v
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token number">33</span> <span class="token operator">||</span> add <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>本地过滤器：与methods同级</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">filter</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">add</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> v <span class="token operator">&lt;</span> <span class="token number">10</span> <span class="token operator">?</span> <span class="token string">&quot;0&quot;</span> <span class="token operator">+</span> v <span class="token operator">:</span> v
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token number">33</span> <span class="token operator">||</span> add <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_22、vue中如何做强制刷新" tabindex="-1"><a class="header-anchor" href="#_22、vue中如何做强制刷新" aria-hidden="true">#</a> 22、vue中如何做强制刷新</h2><ol><li>location.reload()</li><li>this.$router.go(0)</li></ol><h2 id="_23、vue的性能优化" tabindex="-1"><a class="header-anchor" href="#_23、vue的性能优化" aria-hidden="true">#</a> 23、vue的性能优化</h2><ol><li>编码优化： <ul><li>不是所有的数据都需要放在data中</li><li>v-for时给每个元素绑定事件用事件代理</li><li>keep-alive缓存组件</li><li>key值要保证唯一</li><li>合理使用路由懒加载、异步组件</li><li>数据持久化存储的使用尽量用防抖节流优化</li></ul></li><li>加载优化 <ul><li>按需加载</li><li>内容懒加载</li><li>图片懒加载</li></ul></li><li>用户体验 <ul><li>骨架屏</li></ul></li><li>seo优化 <ul><li>预渲染</li><li>服务端渲染ssr</li></ul></li><li>打包优化 <ul><li>CDN形式加载第三方模块</li><li>多线程打包</li><li>抽离公共文件</li></ul></li><li>缓存和压缩 <ul><li>客户端缓存、服务端缓存</li><li>服务端gzip</li></ul></li></ol><h2 id="_24、首屏优化" tabindex="-1"><a class="header-anchor" href="#_24、首屏优化" aria-hidden="true">#</a> 24、首屏优化</h2><ol><li>使用路由懒加载</li><li>非首屏组件使用异步组件</li><li>首屏中不重要的组件延迟加载</li><li>静态资源放在CDN上</li><li>减少首屏上js、css等资源文件的大小</li><li>使用服务端渲染</li><li>尽量减少DOM的数量和层级</li><li>使用精灵图请求</li><li>做一些loading</li><li>开启gzip压缩</li><li>图片懒加载</li></ol><h2 id="_25、vue3的性能为什么比vue2好" tabindex="-1"><a class="header-anchor" href="#_25、vue3的性能为什么比vue2好" aria-hidden="true">#</a> 25、vue3的性能为什么比vue2好</h2><ol><li><p>diff算法的优化：</p><p>vue2中的diff算法是将虚拟DOM进行全量对比。</p><p>vue3中新增了静态标记，在与上次的虚拟DOM进行对比时，只对比带有静态标记的节点，并且可以通过标记的信息得知当前节点要对比的具体内容，如文本、class、style、props等。</p><p>静态标记只会标记会改变的节点，有些节点本身的内容本身就是写死的，因此就没有对比的必要。</p></li><li><p>静态提升：</p><p>vue2不论元素是否参与更新，每次都会重新创建，然后再渲染。</p><p>vue3对不参与更新的元素，只会做静态提升，它只被创建一次，在渲染时直接复用即可。</p></li><li><p>事件侦听缓存：</p><p>默认情况下，onClick会被视为动态绑定，所以每次都会去追踪它的变化。但是因为事件绑定的函数是同一个函数（同一个方法），所以没有追踪变化，直接缓存起来复用即可。</p></li><li><p>ssr优化：</p><p>传统的spa采用的是客户端渲染模式：vuejs构建应用程序 =&gt; webpack打包为一堆js、css资源文件，然后塞到index.html中 =&gt; 用户输入url访问页面 =&gt; 得到一个html模板页面 =&gt; 异步请求数据 =&gt; 得到服务端返会的数据 =&gt; 渲染局部页面 =&gt; 用户看到页面</p><p>这种方式必然演唱了首屏加载的时间。</p><p>ssr（服务端渲染）简单说就是将页面在服务端渲染完成后，将这些html字符串发送到浏览器，然后在浏览器中显示。这样无需等待所有的js都完成下载并执行后，才显示内容。所以用户就能更快速的看到完整渲染的页面。</p></li></ol><h2 id="_26、说说对组件的理解" tabindex="-1"><a class="header-anchor" href="#_26、说说对组件的理解" aria-hidden="true">#</a> 26、说说对组件的理解</h2><p>vue中的组件就是可以重复使用的vue实例，它有独一无二的组件名称。它可以抽离单独的公共模块，类似页面中的header、footer、list等这些有着高复用率的内容，将它们抽离出来形成一个单独的组件可以提高代码的复用率。</p><h2 id="_27、你是如何规划项目文件的" tabindex="-1"><a class="header-anchor" href="#_27、你是如何规划项目文件的" aria-hidden="true">#</a> 27、你是如何规划项目文件的</h2><ol><li>public <ul><li>图标、index.html、img</li></ul></li><li>src <ul><li>api</li><li>assets</li><li>components</li><li>plugins</li><li>router</li><li>static</li><li>styles</li><li>utils</li><li>views</li></ul></li><li>App.vue</li><li>main.js</li><li>package.json</li><li>vue.config.js</li><li>...</li></ol><h2 id="_28、是否使用过nuxt-js" tabindex="-1"><a class="header-anchor" href="#_28、是否使用过nuxt-js" aria-hidden="true">#</a> 28、是否使用过nuxt.js</h2><p>nuxt.js：是基于vue的应用框架，关注的是渲染，可以开发服务端渲染应用的配置。</p><p>SSR（服务端渲染）的好处：</p><ol><li>ssr生成的是有内容的html页面，有利于搜索引擎的搜索</li><li>优化了首屏加载时间</li></ol><h2 id="_29、seo如何优化" tabindex="-1"><a class="header-anchor" href="#_29、seo如何优化" aria-hidden="true">#</a> 29、seo如何优化</h2><ol><li>ssr</li><li>预渲染：prerender-spa-plugin</li></ol>`,31);function m(b,f){const i=t("RouterLink"),l=t("ExternalLinkIcon");return o(),c("div",null,[d,a("p",null,[s(i,{to:"/vue3/axios.html"},{default:r(()=>[e("axios封装")]),_:1})]),k,a("p",null,[a("a",v,[e("diff算法和虚拟DOM，这是vue3的笔记"),s(l)])]),h])}const _=p(u,[["render",m],["__file","vue2.html.vue"]]);export{_ as default};
