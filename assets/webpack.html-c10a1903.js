import{_ as e,W as a,X as c,a0 as r}from"./framework-4f54a744.js";const p={},t=r('<h1 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack" aria-hidden="true">#</a> webpack</h1><h2 id="_1、webpack打包和不打包的区别" tabindex="-1"><a class="header-anchor" href="#_1、webpack打包和不打包的区别" aria-hidden="true">#</a> 1、webpack打包和不打包的区别</h2><ol><li>运行效率</li><li>对技术的支持不够：将一些浏览器不支持、无法识别的语法编译为浏览器可以识别的语法，如es6 =&gt; es5</li></ol><h2 id="_2、webpack是怎么打包的-babel是做什么的" tabindex="-1"><a class="header-anchor" href="#_2、webpack是怎么打包的-babel是做什么的" aria-hidden="true">#</a> 2、webpack是怎么打包的，babel是做什么的</h2><p>webpack会将js、css、image看作一个模块，用import/require引入。</p><p>打包时，先找到入口文件，通过入口文件找到关联的依赖文件，然后将它们打包到一起。将bundle文件，拆分为多个小文件，异步按需加载所需要的文件。</p><p>如果一个文件被多个文件引用，打包时只会生成一个文件。</p><p>如果引用的文件没有调用，不会打包，如果引入的变量和方法都没有调用也不会打包。</p><p>对于多个入口文件，假如引入了相同的代码，可以用插件将其抽离到公共的文件中。</p><p>babel：将一些高级语法转换为低级语法。</p>',10),i=[t];function s(b,d){return a(),c("div",null,i)}const l=e(p,[["render",s],["__file","webpack.html.vue"]]);export{l as default};