# Vue 常见优化手段

## 使用冻结的对象

冻结的对象不会被响应化。

在 Vue 中，所有响应化的对象都会被遍历，而有些对象其中的内容我们不会去进行改变时，这个对象如果是响应式的，那么 Vue 对其进行遍历时相比遍历普通对象是非常浪费性能的，这个时候，我们就可以将这个对象冻结：`Object.freeze(obj)`，这样这个对象就不会被响应化了。

要判断一个对象是否被冻结了可以使用：`Object.isFrozen(obj)`。

例子：比如我们通过一个方法获取了一个对象，这个对象中有很多数据，然后我们将这个数据保存在 `data` 中，下面有两种写法：

- 写法一：

  ```js
  ...
  methods: {
      loadNormalDatas() {
          this.normalDatas = this.getDatas()
          ...
      }
  }
  ...
  ```

- 写法二：

  ```js
  ...
  methods: {
      loadFrozenDatas() {
          this.frozenDatas = Object.freeze(this.getDatas())
          ...
      }
  }
  ...
  ```

> 在这个例子中，我们调用写法一中的`loadNormalDatas()`方法时其渲染数据花费的时间相比调用写法二中的`loadFrozenDatas()`方法要长得多。这是因为写法一中将这个对象进行了响应化，这样 Vue 将会遍历这个对象，所以会花费很多时间。而写法二中将这个对象进行冻结之后， Vue 就不会对其进行响应化了。

## 使用函数式组件

[渲染函数 & JSX | Vue.js](https://cn.vuejs.org/guide/extras/render-function.html#functional-components)

Vue 不会对一个函数式组件创建实例，因此，当我们渲染一个函数式组件时，它所花费的时间和内存相比普通组件都要低一些。

## 使用计算属性

如果模板中某个数据会使用很多次，并且该数据是通过计算得到的，使用计算属性以缓存它们。

## 非实时绑定的表单项

当使用`v-model`绑定一个表单项时，当用户改变表单项的状态时，也会随之改变数据，从而导致`vue`发生重渲染(rerender)，这会带来一些性能的开销。

我们可以通过使用`lazy`或不使用`v-model`的方式解决该问题，但要注意，这样可能会导致在某一个时间段内数据和表单项的值是不一致的。

`v-model`监听的是`@input`事件

`v-model.lazy`监听的是`@change`事件

## 保持对象引用稳定

例子：用户新增评论。

- 写法一：

  ```js
  ...
  methods: {
      async handleAddComment() {
          await addNewComment()
          this.comments = this.getComments()
      }
  }
  ...
  ```

- 写法二：

  ```js
  ...
  methods: {
      async handleAddComment() {
          const newComment = await addNewComment()
          this.comments.unshift(newComment)
      }
  }
  ...
  ```

> 写法一和写法二的区别在于，写法一每次添加新评论后都会去后台获取所有评论的数据，写法二每次添加新评论后会在已有的评论数据最前面添加上最新的评论。
>
> 写法一的好处：能保证所有的数据都是实时的
>
> 写法一的坏处：因为每次都要重新获取数据，因此每次所有的评论都要重新渲染，哪怕其中有些评论数据并没有什么变化
>
> 写法二的好处：并没有改变原始的数据，只是在原始数据前添加了一条，因此并不会重新渲染所有的评论
>
> 写法二的坏处：评论数据并不是实时的，因为并没有重新从后台获取

## 使用 v-show 替代 v-if

对于**频繁切换显示状态**的元素，使用`v-show`可以保证虚拟 dom 树的稳定，**避免频繁的新增和删除元素**，特别是对于那些**内部包含大量 dom 元素的节点**，这一点很重要。

## 延迟装载 defer

js 传输完成后，浏览器开始执行 js 构造页面。

但可能一开始要渲染的组件太多，不仅 js 执行的时间很长，而且执行完后浏览器要渲染的元素过多，从而导致页面白屏。

一个可行的办法就是延迟装载组件，让组件按照指定的先后顺序依次一个一个的渲染出来。

> 延迟装载是一个思路，本质上就是利用`requestAnimationFrame`事件分批渲染内容，他的具体实现方式多种多样

- 定义：

  `src/mixin/defer.js`

  ```js
  export default function(maxFrameCount) {
      return {
          data() {
              return {
                  frameCount: 0
              }
          },
          mounted() {
              const refreshFrameCount = () => {
      			requestAnimationFrame(() => {
          			this.frameCount++
          			if (this.frameCount < maxFrameCount) {
              			refreshFrameCount()
          			}
      			})
  			}
              refreshFrameCount()
          },
          methods: {
              const defer = (showInFrameCount) => {
      			return this.frameCount >= showInFrameCount
  			}
          },
      }
  }
  ```

- 使用：

  这里`defer(10)`只是为了演示用，具体要经过多少次渲染完成，可自行决定。

  ```vue
  <template>
  	<div v-for="n in 10" v-if="defer(n)">
  		<div></div>
  	</div>
  </template>

  <script>
  	import defer from "./mixin/defer"

  	export default {
  		mixins: [defer(10)],
  	}
  </script>
  ```

> defer 的好处是会将页面上的元素一个一个的画出来，降低用户感知，当页面元素多的时候，不会让用户经历长时间的白屏。

##
