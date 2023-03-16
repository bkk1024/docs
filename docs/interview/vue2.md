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
