# vue2

## 1、data 为什么是一个函数

`data`函数如下：

```vue
<script>
  module.exports = {
    data() {
      return {
        text: 123;
      }
    }
  }
</script>
```

vue 中的组件是用来复用的，为了防止我们多次使用同一个组件时，这个组件中的`data`被复用，即我们每次访问的都是同一个`data`，因此将其定义为一个函数。这样我们每次使用组件时，它里面的`data`数据都是相互隔离互不影响的。

## 2、v-if和v-show

它们都可以控制元素的显示和隐藏

- v-show：使用`display: none`来让元素隐藏
- v-if：将元素删除或者添加进来到文档来控制显隐

v-if有一个局部编译/卸载的过程，切换这个过程中会适当的销毁和重建内部的事件监听和子组件，会触发组件的生命周期，切换效率更低。

v-show只是简单的css切换，不会触发组件的生命周期，切换效率更高。

## 3、v-for中的key值的作用

key属性是DOM元素的唯一标识，在页面的DOM改动时，vue会根据key去判断哪些元素是新增的，哪些是不变的，这样就能更高效的改动DOM树。

## 4、vue的生命周期

1. 创建：
   - beforeCreate：这个阶段，属性和方法都不能使用
   - created：这个阶段是实例创建完成后，这里完成了数据监测，可以使用数据，修改数据，不会触发updated，也不会更新视图
2. 挂载
   - beforeMount：这里完成了模板的编译，虚拟DOM也完成创建，即将渲染，可以修改数据，不会触发updaed
   - mounted：将编译好的模板挂载到页面上，这里可以发送异步请求，也可以访问DOM节点
3. 更新
   - beforeUpdate：组件数据更新前使用，数据是新的，页面上的数据是旧的，组件即将更新，准备渲染，可以修改数据
   - updated：render重新做了渲染，这时数据和页面都是新的，避免再此更新数据
4. 销毁
   - beforeDestroy：实例销毁前，在这里实例还可以使用，可以清除定时器等等
   - destroyed：组件已经被销毁
5. 使用了keep-alive：
   - activated：组件激活时
   - deactivated：组件被销毁时

## 5、在created和mounted去请求数据有什么区别

created：在渲染前调用，通常先初始化属性，然后做渲染。在这里请求数据不会造成闪屏问题，因为此时页面还未挂载到屏幕中。

mounted：在模板渲染完成后调用，一般都是初始化页面后，再对元素节点进行操作。在这里请求数据可能会出现闪屏的问题，这是由于加载时机不对造成的。

一般在created中请求数据较多。

可以理解为：如果请求的数据对DOM有影响，则使用created，如果与DOM无关，则可以使用mounted。

## 6、vue中的修饰符

1. 事件修饰符
   - .stop：阻止冒泡
   - .prevent：阻止默认行为
   - .capture：内部元素触发事件先在此处理
   - .self：只有在event.target是当前元素时触发
   - .once：事件只触发一次
   - .passive：立即触发默认行为
   - .native：把当前元素作为原生标签看待
2. 按键修饰符
   - .keyup：按键抬起
   - .keydown：按键按下
3. 系统修饰符
   - .ctrl
   - .alt
   - .meta
4. 鼠标修饰符
   - .left：鼠标左键
   - .right：鼠标右键
   - .middle：鼠标中间
5. 表单修饰符
   - .lazy：等输入完之后再显示
   - .trim：删除内容前后的空格
   - .number：输入数字，或者将输入内容转为数字

## 7、vue中的组件通信

1. 父传子：
   - props
   - $ref
2. 子传父：
   - $emit
3. 兄弟之间：
   - 事件总线 bus
4. vuex传值
5. provide/inject：允许一个祖先组件向其所有的子孙组件传递数据，不管层级多深，这个子孙组件都能直接使用祖先组件传递的数据/方法。

## 8、keep-alive

keep-alive是Vue的一个内置组件，包裹组件时，会缓存不活跃的组件实例，而不是直接销毁它们。

作用：把组件切换的状态保存在内存中，防止重复渲染DOM节点，减少加载时间和性能消耗，提升用户体验。

## 9、axios是怎么做封装的

[axios封装](../vue3/axios.md) 

## 10、vue路由传参

1. params传参

   ```js
   this.$router.push({name: "index", params: {id: 123}}) // 传递参数
   this.$route.params.id // 获取传递的参数
   ```

2. 路由属性传参

   ```js
   this.$router.push({name: `/index/${id}`}) // 传递参数，它需要在路由配置中写上需要的参数
   ```

3. query传参

   ```js
   this.$router.push({
     name: "index",
     query: {id: 123}
   }) // 传递参数，它的参数在url地址中，可以解决刷新页面导致参数丢失问题
   ```

## 11、hash模式和history模式的区别

1. hash的路由地址上有#，history没有
2. 在做回车刷新时，hash会加载对应页面，history会报错404
3. hash模式支持低版本浏览器，history不支持，因为是H5新增的
4. hash不会重新加载页面，单页面应用必备
5. history有历史记录，H5新增了pushState和replaceState两个方法去修改历史记录
6. history模式需要后台配置

## 12、路由拦截是怎么实现的

需要在路由配置中添加一个字段，它是用于判断路由是否需要拦截的

```js
{
  name: "index",
  path: "/index",
  component: Index,
  meta: {
    requireAuth: true, // 表示当前这个路由需要拦截
  }
}

// 这里的代码只是一个示例
router.beforeEach((to, from, next) => {
  if(to.meta.requireAuth) {
    // 需要拦截
    if(store.state.token) {
      // 通过token判断是否登录了
      next()
    } else {
      // 其他操作
      // ...
    }
  }
})
```

## 13、动态路由

在路由配置中设置meta属性，扩展权限相关的字段。在路由导航守卫中通过判断这个权限标识，实现路由的动态增加和跳转。

获取到用户登录后返回的用户角色，然后根据这个角色跟路由表中的meta中相关字段进行匹配，然后将匹配到的路由形成可访问的路由。

## 14、如何解决刷新后二次加载路由

1. window.location.reload()

2. matcher

   ```js
   const router = createRouter()
   export function resetRouter() {
     const newRouter = createRouter()
     router.matcher = newRouter.matcher
   }
   
   // 然后在 addRouter/addRoutes 之前调用一次 resetRouter
   resetRouter()
   this.$router.addRoutes(routeMenu)
   ```

   > 如果需要删除添加一级路由下面的子路由时，可以通过`this.$router.options.routes`获取到路由数组，然后通过循环的方式进行push/splice，然后再用上面的方式进行全局替换即可。

## 15、vuex刷新数据会丢失吗，怎么解决

1. 放到sessionStorage、localStorage、cookie中

2. 页面刷新时，再次请求数据，达到可以动态更新的方法

   - 监听浏览器的刷新事件，在刷新前把数据保存到sessionStorage里，刷新后请求数据，请求到了用vuex，如果没有则用sessionStorage里的数据

     ```js
     window.onbeforeunload = function() {
       // beforeunload：当窗口、文档及其资源即将被卸载时，触发该事件。
       console.log("刷新了页面")
     }
     ```

## 16、computed和watch的区别

1. computed是计算属性，watch是监听数据变化，监听的是data中的数据
2. computed支持缓存，依赖的数据发生了变化才会重新计算，而watch不支持缓存
3. computed不支持异步，watch支持异步操作
4. computed在第一次加载时就开始监听，而watch在第一次时不监听
5. computed函数中必须有return，而watch不需要

## 17、vue的双向数据绑定的原理

通过数据劫持和发布订阅者模式来实现的。

vue2利用Object.defineProperty()方法来劫持各个属性的getter和setter。vue3使用Proxy。在数据发生改变的时候发布消息给订阅者，触发对应的监听回调渲染视图。

数据和视图是同步的，一方发生变化都会引发另一方同步变化。

1. 对需要observer的数据对象进行递归，包括子属性对象的属性，都添加上getter、setter

2. compile模板解析指令，把模板中的变量替换成数据，然后初始化渲染视图，同时把每个指令对应的节点绑定上更新函数，添加订阅者，如果数据变化，收到通知，更新视图

3. watcher订阅者是observer和compile之间的通信桥梁

   watcher的作用：

   - 在自身实例化的时候往订阅器内添加自己
   - 自身要有一个update()方法
   - 等待属性变动时，调用自身的update方法，触发compile中的回调

4. MVVM作为数据绑定的入口，整合了observer、compile、watcher三者，通过observer来监听自己的数据变化，通过compile来解析模板指令，然后利用watcher把observer和compile联系起来，最终达到数据和视图的双向绑定效果。

![](https://img-blog.csdnimg.cn/20210108140237683.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2hvdWd1YW5nemhhbw==,size_16,color_FFFFFF,t_70)

## 18、diff算法和虚拟DOM

[diff算法和虚拟DOM，这是vue3的笔记](https://bkk1024.github.io/docs/vue3/vue3学习笔记.html#虚拟-dom)

虚拟DOM：使用js对象表示真实DOM，描述元素和元素之间的关系。如果组件内有响应式数据，数据发生改变时，render函数会生成一个新的虚拟DOM，这个新的虚拟DOM会和旧的虚拟DOM进行比对，找到需要修改的虚拟DOM内容，然后去对应的真实DOM中修改。

diff算法：新的虚拟DOM和旧的虚拟DOM比对时用的，返回一个patch对象，这个对象的作用就是存储两个节点不同的地方，最后用patch里记录的信息进行更新真实DOM。

步骤：

1. js对象表示真实的DOM结构，要生成一个虚拟DOM，再用虚拟DOM构建一个真实的DOM树，渲染到页面
2. 状态改变生成新的虚拟DOM，这个新的虚拟DOM跟旧的虚拟DOM进行比对，这个比对就是diff算法，利用patch记录差异
3. 将记录的差异用在第一个虚拟DOM生成的真实DOM上，然后更新视图

## 19、vue和jquery的区别是什么

1. 原理不同：vue是数据绑定视图，jquery是先获取DOM，然后处理数据与视图
2. 着重点不同：vue着重于数据，是数据驱动视图；jquery是着重于页面
3. 操作不同
4. 未来发展不同

## 20、vue中遍历全局的方法有哪些

1. 普通遍历：forEach()
2. 对元素统一操作：map()
3. 查找符合条件的元素：filter()
4. 查询符合条件的元素，返回索引：findIndex()
5. 遇到不符合条件的对象会停止：every()
6. 找到符合条件的元素会停止：some()

## 21、vue的过滤器怎么使用

vue的过滤器：vue的特性，用来对文本进行格式化处理

使用它的两个地方：一个是插值表达式，一个是v-bind

分类：

1. 全局过滤器

   ```js
   Vue.filter("add", function(v) {
     return v < 10 ? "0" + v : v
   })
   
   <div>{{ 33 || add }}</div>
   ```

2. 本地过滤器：与methods同级

   ```js
   filter: {
     add: function(v) {
       return v < 10 ? "0" + v : v
     }
   }
   
   <div>{{ 33 || add }}</div>
   ```

## 22、vue中如何做强制刷新

1. location.reload()
2. this.$router.go(0)

## 23、vue的性能优化

1. 编码优化：
   - 不是所有的数据都需要放在data中
   - v-for时给每个元素绑定事件用事件代理
   - keep-alive缓存组件
   - key值要保证唯一
   - 合理使用路由懒加载、异步组件
   - 数据持久化存储的使用尽量用防抖节流优化
2. 加载优化
   - 按需加载
   - 内容懒加载
   - 图片懒加载
3. 用户体验
   - 骨架屏
4. seo优化
   - 预渲染
   - 服务端渲染ssr
5. 打包优化
   - CDN形式加载第三方模块
   - 多线程打包
   - 抽离公共文件
6. 缓存和压缩
   - 客户端缓存、服务端缓存
   - 服务端gzip

## 24、首屏优化

1. 使用路由懒加载
2. 非首屏组件使用异步组件
3. 首屏中不重要的组件延迟加载
4. 静态资源放在CDN上
5. 减少首屏上js、css等资源文件的大小
6. 使用服务端渲染
7. 尽量减少DOM的数量和层级
8. 使用精灵图请求
9. 做一些loading
10. 开启gzip压缩
11. 图片懒加载

## 25、vue3的性能为什么比vue2好

1. diff算法的优化：

   vue2中的diff算法是将虚拟DOM进行全量对比。

   vue3中新增了静态标记，在与上次的虚拟DOM进行对比时，只对比带有静态标记的节点，并且可以通过标记的信息得知当前节点要对比的具体内容，如文本、class、style、props等。

   静态标记只会标记会改变的节点，有些节点本身的内容本身就是写死的，因此就没有对比的必要。

2. 静态提升：

   vue2不论元素是否参与更新，每次都会重新创建，然后再渲染。

   vue3对不参与更新的元素，只会做静态提升，它只被创建一次，在渲染时直接复用即可。

3. 事件侦听缓存：

   默认情况下，onClick会被视为动态绑定，所以每次都会去追踪它的变化。但是因为事件绑定的函数是同一个函数（同一个方法），所以没有追踪变化，直接缓存起来复用即可。

4. ssr优化：

   传统的spa采用的是客户端渲染模式：vuejs构建应用程序 => webpack打包为一堆js、css资源文件，然后塞到index.html中 => 用户输入url访问页面 => 得到一个html模板页面 => 异步请求数据 => 得到服务端返会的数据 => 渲染局部页面 => 用户看到页面

   这种方式必然演唱了首屏加载的时间。

   ssr（服务端渲染）简单说就是将页面在服务端渲染完成后，将这些html字符串发送到浏览器，然后在浏览器中显示。这样无需等待所有的js都完成下载并执行后，才显示内容。所以用户就能更快速的看到完整渲染的页面。

## 26、说说对组件的理解

vue中的组件就是可以重复使用的vue实例，它有独一无二的组件名称。它可以抽离单独的公共模块，类似页面中的header、footer、list等这些有着高复用率的内容，将它们抽离出来形成一个单独的组件可以提高代码的复用率。

## 27、你是如何规划项目文件的

1. public
   - 图标、index.html、img
2. src
   - api
   - assets
   - components
   - plugins
   - router
   - static
   - styles
   - utils
   - views
3. App.vue
4. main.js
5. package.json
6. vue.config.js
7. ...

## 28、是否使用过nuxt.js

nuxt.js：是基于vue的应用框架，关注的是渲染，可以开发服务端渲染应用的配置。

SSR（服务端渲染）的好处：

1. ssr生成的是有内容的html页面，有利于搜索引擎的搜索
2. 优化了首屏加载时间

## 29、seo如何优化

1. ssr
2. 预渲染：prerender-spa-plugin







































