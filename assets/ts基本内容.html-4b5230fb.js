import{_ as p,W as o,X as c,Y as n,Z as a,$ as e,a0 as t,C as l}from"./framework-4f54a744.js";const i={},u=t(`<h1 id="ts-基本内容" tabindex="-1"><a class="header-anchor" href="#ts-基本内容" aria-hidden="true">#</a> TS 基本内容</h1><h2 id="ts-声明类型" tabindex="-1"><a class="header-anchor" href="#ts-声明类型" aria-hidden="true">#</a> TS 声明类型</h2><h3 id="给变量声明类型" tabindex="-1"><a class="header-anchor" href="#给变量声明类型" aria-hidden="true">#</a> 给变量声明类型</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 声明一个变量，同时指定它的类型为 number</span>
<span class="token keyword">let</span> num<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">12</span>
<span class="token comment">// num 的类型设置为了 number，在以后的使用过程中无法将其赋值为其他类型，只能为数字，否则会报错</span>
num <span class="token operator">=</span> <span class="token number">10</span>
num <span class="token operator">=</span> <span class="token number">23</span>
num <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span> <span class="token comment">// 此处报错</span>

<span class="token comment">// 如果变量的声明和赋值是同时进行的，TS可以自动对变量进行类型检测</span>
<span class="token keyword">let</span> bool <span class="token operator">=</span> <span class="token boolean">false</span> <span class="token comment">// 这里TS自动检测到变量 bool 为 boolean</span>
bool <span class="token operator">=</span> <span class="token number">12</span> <span class="token comment">// 这里报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="给函数的入参声明类型" tabindex="-1"><a class="header-anchor" href="#给函数的入参声明类型" aria-hidden="true">#</a> 给函数的入参声明类型</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
	<span class="token comment">// 最后在函数声明末尾声明的类型表示这个函数 return 出去的值的类型</span>
	<span class="token keyword">return</span> a <span class="token operator">+</span> b
<span class="token punctuation">}</span>

<span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">,</span> <span class="token number">456</span><span class="token punctuation">)</span>
<span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">,</span> <span class="token string">&quot;456&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 此处会报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用字面量进行类型声明" tabindex="-1"><a class="header-anchor" href="#使用字面量进行类型声明" aria-hidden="true">#</a> 使用字面量进行类型声明</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> a<span class="token operator">:</span> <span class="token number">10</span> <span class="token comment">// 这里使用 10 作为类型给a，即规定了a只能等于10，相当于声明了一个常量</span>
a <span class="token operator">=</span> <span class="token number">11</span> <span class="token comment">// 报错</span>

<span class="token comment">// 使用：可以使用 | 来连接多个类型，这种连接方式不止于字面量，正常的类型也可以连接</span>
<span class="token keyword">let</span> sex<span class="token operator">:</span> <span class="token string">&quot;male&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;female&quot;</span>
sex <span class="token operator">=</span> <span class="token string">&quot;male&quot;</span>
sex <span class="token operator">=</span> <span class="token string">&quot;female&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他类型" tabindex="-1"><a class="header-anchor" href="#其他类型" aria-hidden="true">#</a> 其他类型</h3><ol><li><p><code>any</code>：表示声明了一个任意类型，则此变量不会被 TS 的类型检测，同 JS 的变量声明一样。</p></li><li><p><code>unknown</code>：表示位置类型的值，其效果类似于 any，但是区别在于 any 类型的变量可以赋值给其他类型的变量，但是 unknown 只能赋值给自身。</p></li><li><p><code>void</code>：用来表示为空值，以函数为例，即表示函数没有返回值。</p></li><li><p><code>never</code>：表示永远不会返回值，如一个用来抛出错误的函数，其不会返回任何值，即为 never。</p></li><li><p><code>object</code>：表示一个 JS 对象。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token comment">// ?表示这个属性是可选的</span>
  <span class="token punctuation">[</span>propName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token comment">// 表示任意属性任意类型</span>
<span class="token punctuation">}</span>

a <span class="token operator">=</span> <span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">}</span>
a <span class="token operator">=</span> <span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> sex<span class="token operator">:</span> <span class="token string">&#39;male&#39;</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">}</span>
a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 会报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>array</code>：表示一个数组。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> numArr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 表示一个数字数组，写法1</span>
<span class="token keyword">let</span> strArr<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 表示一个字符串数组</span>
<span class="token keyword">let</span> NumArr<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token comment">// 表示一个数字数组，写法2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>tuple</code>：表示一个元组，即一个固定长度的数组。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> tup<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">]</span> <span class="token comment">// 表示一个长度为2的字符串数组</span>
<span class="token keyword">let</span> tup1<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">boolean</span><span class="token punctuation">]</span> <span class="token comment">// 表示一个长度为3的数组</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>enum</code>：表示一个枚举。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> Gender <span class="token punctuation">{</span> <span class="token comment">// 声明了一个枚举</span>
	Male <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 也可以不写等于多少，写了就是自己规定了</span>
	Female <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> person<span class="token operator">:</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token string">&quot;张三&quot;</span>
	gender<span class="token operator">:</span> Gender<span class="token punctuation">.</span>Male
<span class="token punctuation">}</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>gender <span class="token operator">===</span> Gender<span class="token punctuation">.</span>Male<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>类型的别名：即可以自己规定一个类型。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">myType</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token number">2</span> <span class="token operator">|</span> <span class="token number">3</span> <span class="token comment">// 给 1 | 2 | 3 这个类型起了一个名字</span>
<span class="token keyword">let</span> num<span class="token operator">:</span> myType <span class="token comment">// 使用这个类型</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="类型断言" tabindex="-1"><a class="header-anchor" href="#类型断言" aria-hidden="true">#</a> 类型断言</h3><p>类型断言：可以用来告诉解析器变量的实际类型，其写法有两种</p><ol><li>使用 as 关键字：<code>s = e as string</code></li><li>使用&lt;&gt;包含类型：<code>s = &lt;string&gt;e</code></li></ol><blockquote><p>类型断言虽然可以通过编译，但是并不会有什么影响，因为编译过程中会删除类型断言。</p></blockquote><h3 id="交叉类型" tabindex="-1"><a class="header-anchor" href="#交叉类型" aria-hidden="true">#</a> 交叉类型</h3><p>多种类型的集合，联合对象将具有所联合类型的所有成员，即具有联合类型的并集。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token builtin">string</span>
	height<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Person1</span> <span class="token punctuation">{</span>
	age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Person2</span> <span class="token punctuation">{</span>
	height<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> man<span class="token operator">:</span> Person <span class="token operator">&amp;</span> Person1 <span class="token operator">&amp;</span> Person2 <span class="token operator">=</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">,</span>
	age<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
	height<span class="token operator">:</span> <span class="token string">&quot;180&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ts-的编译选项" tabindex="-1"><a class="header-anchor" href="#ts-的编译选项" aria-hidden="true">#</a> TS 的编译选项</h2><ol><li><p>创建一个<code>tsconfig.json</code>这个文件</p></li><li><p>进行配置：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// 这里只是写出了部分配置</span>
<span class="token punctuation">{</span>
	<span class="token comment">// 本文件是ts编译器的配置文件，ts编译器可以根据它的信息来对代码进行编译</span>
	<span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token comment">// 用来指定哪些ts文件需要被编译</span>
		<span class="token comment">// ** 表示任意目录</span>
		<span class="token comment">// * 表示任意文件</span>
		<span class="token string">&quot;./src/**/*&quot;</span>
	<span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token comment">// 编译选项是配置文件中非常重要和复杂的配置选项</span>
		<span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ES5&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 指定TS被编译为的JS版本</span>
		<span class="token comment">// &quot;module&quot;: &quot;ES6&quot;, // 指定要使用的模块化的规范</span>
		<span class="token comment">// &quot;lib&quot;: [] // 用来指定项目中要使用的库</span>
		<span class="token property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./dist&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 用来指定编译后文件所在的目录</span>
		<span class="token property">&quot;outFile&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./dist/app.js&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 输出的文件，将所有的文件合并成一个文件</span>
		<span class="token property">&quot;allowJs&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 是否对js文件进行编译，默认false</span>
		<span class="token property">&quot;checkJs&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 是否对js文件进行检测语法，默认false</span>
		<span class="token property">&quot;removeComments&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 是否移除注释，默认false</span>
		<span class="token property">&quot;noEmit&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 是否生成编译后的文件，默认false</span>
		<span class="token property">&quot;noEmitOnError&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 当有错误时是否生成编译文件，默认false</span>
		<span class="token property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 所有严格检查的总开关，默认false</span>
		<span class="token property">&quot;alwaysStrict&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 编译后的文件是否开启严格模式，默认false</span>
		<span class="token property">&quot;noImplicitAny&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 是否不允许隐式的any类型，默认false</span>
		<span class="token property">&quot;noImplicitThis&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 是否不允许明确类型的this，默认false</span>
		<span class="token property">&quot;strictNullChecks&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">// 是否严格的检查空值，默认false</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// &quot;exclude&quot;: [</span>
	<span class="token comment">// 	// 用来指定哪些ts文件不需要被编译</span>
	<span class="token comment">// 	// 默认值：[&quot;node_modules&quot;, &quot;bower_components&quot;, &quot;jspm_packages&quot;]</span>
	<span class="token comment">// 	&quot;./src/hhh/**/*&quot;</span>
	<span class="token comment">// ]</span>
	<span class="token comment">// &quot;extends&quot;: &quot;&quot;, // 定义被继承的配置文件</span>
	<span class="token comment">// &quot;files&quot;: [], // 指定被编译的文件列表，与include类似，但是include是指定文件夹，files是指定确定的文件</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用<code>tsc</code>命令即可直接通过配置文件进行编译，使用<code>tsc -w</code>即可对所有进行编译的 ts 文件进行检测改动并自动编译</p></li></ol><h2 id="使用-webpack-打包-ts-代码" tabindex="-1"><a class="header-anchor" href="#使用-webpack-打包-ts-代码" aria-hidden="true">#</a> 使用 webpack 打包 TS 代码</h2>`,20),r={href:"https://github.com/JasonkayZK/typescript-learn/tree/3-webpack",target:"_blank",rel:"noopener noreferrer"},d={href:"https://github.com/Nliver/Typescript_study/blob/main/chapter01/part03/",target:"_blank",rel:"noopener noreferrer"},k=t(`<h2 id="面向对象" tabindex="-1"><a class="header-anchor" href="#面向对象" aria-hidden="true">#</a> 面向对象</h2><p>面向对象简而言之就是程序之中所有的操作都需要的通过对象来完成。</p><p>在程序中所有的对象都分为两部分：数据(属性)、功能(方法)。如身高体重是数据，吃喝拉撒睡是功能。</p><h3 id="class-类" tabindex="-1"><a class="header-anchor" href="#class-类" aria-hidden="true">#</a> class 类</h3><p>要创建对象需要先定义一个类，所谓的类可以理解为对象的模型，程序中可以根据类创建指定类型的对象。</p><p>使用<code>class</code> 关键字定义一个类</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 定义一个类</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
	<span class="token comment">// 构造函数，在对象被创建时调用</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
		<span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
	<span class="token punctuation">}</span>
	<span class="token comment">// 实例属性，需要 new 一个实例才能读取</span>
	name<span class="token operator">:</span> <span class="token builtin">string</span>
	age<span class="token operator">:</span> <span class="token builtin">number</span>
	<span class="token comment">// 在属性Or方法前使用 static 关键字可以定义类属性(静态属性)，不需要 new 实例就能读取Or使用</span>
    <span class="token comment">// static 定义的属性或方法直接通过类本身就可以调用，如 Person.gender</span>
	<span class="token keyword">static</span> gender<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;male&quot;</span>
	<span class="token comment">// 在属性前使用 readnoly 关键字可以定义一个只读属性，无法对其进行修改</span>
	<span class="token keyword">readonly</span> height<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">185</span>
	<span class="token comment">// 两个关键字一起使用，创建了一个静态只读属性</span>
	<span class="token keyword">static</span> <span class="token keyword">readonly</span> weight<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">110</span>

	<span class="token comment">// 定义方法</span>
	<span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用 new 关键字创建一个类的实例</span>
<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;person&quot;</span><span class="token punctuation">,</span> person<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h3><h4 id="继承与重写" tabindex="-1"><a class="header-anchor" href="#继承与重写" aria-hidden="true">#</a> 继承与重写</h4><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 定义一个父类</span>
<span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token builtin">string</span>
	age<span class="token operator">:</span> <span class="token builtin">number</span>

	<span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
		<span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
	<span class="token punctuation">}</span>

	<span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;父类Animal的say()&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 定义子类Dog，继承父类Animal</span>
<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
	<span class="token comment">// 当子类中有个和父类中相同的属性或方法时，这个子类中的属性或方法会覆盖掉父类中相同的这个方法(只是在这个子类中覆盖了，并没有修改原先父类中的属性或方法)</span>
	<span class="token comment">// 这种子类覆盖父类的形式称为 重写</span>
	<span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">子类Dog</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">的say()</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 在子类中也可以定义其他的属性或方法</span>
	<span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">子类Dog</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">的run()</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> dog <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token string">&quot;旺财&quot;</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;dog&quot;</span><span class="token punctuation">,</span> dog<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="super-关键字" tabindex="-1"><a class="header-anchor" href="#super-关键字" aria-hidden="true">#</a> super 关键字</h4><p>在类的方法中，<code>super</code>就表示当前类的父类</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 定义一个父类</span>
<span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token builtin">string</span>
	age<span class="token operator">:</span> <span class="token builtin">number</span>

	<span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
		<span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
	<span class="token punctuation">}</span>

	<span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;父类Animal的say()&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 定义子类Dog，继承父类Animal</span>
<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
	age<span class="token operator">:</span> <span class="token builtin">string</span>

	<span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 如果在子类中写了构造函数，在其中必须对父类的构造函数进行调用</span>
		<span class="token keyword">super</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span> <span class="token comment">// 调用父类的构造函数</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
	<span class="token punctuation">}</span>

	<span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 在类的方法中，super就表示当前类的父类</span>
		<span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> dog <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token string">&quot;旺财&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;4&quot;</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;dog&quot;</span><span class="token punctuation">,</span> dog<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="抽象类-abstract" tabindex="-1"><a class="header-anchor" href="#抽象类-abstract" aria-hidden="true">#</a> 抽象类 abstract</h4><p>以<code>abstract</code>开头的类是抽象类，抽象类与其他类区别不大，只是不能用来创建对象，抽象类生来就是给其他类继承的。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 这个类是抽象类，只能用来给其他对象继承，无法直接它来创建对象</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token comment">// 定义一个抽象方法，使用abstract开头，没有方法体，只能定义在抽象类中，子类必须对抽象方法进行重写</span>
  <span class="token keyword">abstract</span> <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="接口-interface" tabindex="-1"><a class="header-anchor" href="#接口-interface" aria-hidden="true">#</a> 接口 interface</h4><p>接口就是用来定义一个类的结构，用来定义一个类中应该包含哪些属性和方法。同时，接口也可以当成类型声明去使用。</p><p>使用<code>interface</code>关键字来定义接口。接口可以重复定义，同名的接口的结构为所有同名加起来的结构。使用 <code>implements</code> 关键字来实现一个接口。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 定义一个接口</span>
<span class="token keyword">interface</span> <span class="token class-name">myInterface</span> <span class="token punctuation">{</span>
	<span class="token comment">// 接口中所有的属性都不能有实际的值</span>
	name<span class="token operator">:</span> <span class="token builtin">string</span>
	age<span class="token operator">:</span> <span class="token builtin">number</span>
	<span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token comment">// 接口中定义的所有方法都是抽象方法</span>
<span class="token punctuation">}</span>

<span class="token comment">// 定义类，去实现一个接口，使用implements关键字</span>
<span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token keyword">implements</span> <span class="token class-name">myInterface</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token builtin">string</span>
	age<span class="token operator">:</span> <span class="token builtin">number</span>

	<span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
		<span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
	<span class="token punctuation">}</span>

	<span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="属性的封装" tabindex="-1"><a class="header-anchor" href="#属性的封装" aria-hidden="true">#</a> 属性的封装</h4><p>在定义对象时，属性是在对象中设置的，属性可以任意的被修改，这会导致对象中的数据变得非常不安全。</p><ol><li><p>public 修饰符：公共属性，使用<code>public</code>修饰的属性可以在任意位置访问修改</p></li><li><p>private 修饰符：私有属性，使用<code>private</code>修饰的属性只能在当前类的内部进行访问修改，在其子类中都无法访问和修改</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 方式1</span>
<span class="token keyword">class</span> <span class="token class-name">Person1</span> <span class="token punctuation">{</span>
	<span class="token keyword">private</span> name<span class="token operator">:</span> <span class="token builtin">string</span>
	<span class="token keyword">private</span> age<span class="token operator">:</span> <span class="token builtin">number</span>

	<span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
		<span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
	<span class="token punctuation">}</span>

	<span class="token function">setName</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
	<span class="token punctuation">}</span>
	<span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
	<span class="token punctuation">}</span>
	<span class="token function">setAge</span><span class="token punctuation">(</span>age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> age
	<span class="token punctuation">}</span>
	<span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> per1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person1</span><span class="token punctuation">(</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;per1&quot;</span><span class="token punctuation">,</span> per1<span class="token punctuation">)</span>
per1<span class="token punctuation">.</span>setName <span class="token operator">=</span> <span class="token string">&quot;李四&quot;</span>
per1<span class="token punctuation">.</span>setAge <span class="token operator">=</span> <span class="token number">16</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;per1&quot;</span><span class="token punctuation">,</span> per1<span class="token punctuation">)</span>

<span class="token comment">// 方式2</span>
<span class="token keyword">class</span> <span class="token class-name">Person2</span> <span class="token punctuation">{</span>
	<span class="token keyword">private</span> name<span class="token operator">:</span> <span class="token builtin">string</span>
	<span class="token keyword">private</span> age<span class="token operator">:</span> <span class="token builtin">number</span>

	<span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
		<span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
	<span class="token punctuation">}</span>

	<span class="token comment">// 这里的get和set是TS官方提供的，这样子的好处在于，后面对这些属性进行修改和访问时可以像原先一样直接用&#39;.&#39;操作</span>
	<span class="token keyword">set</span> <span class="token function">name</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
	<span class="token punctuation">}</span>
	<span class="token keyword">get</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
	<span class="token punctuation">}</span>
	<span class="token keyword">set</span> <span class="token function">age</span><span class="token punctuation">(</span>age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> age
	<span class="token punctuation">}</span>
	<span class="token keyword">get</span> <span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> per2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person2</span><span class="token punctuation">(</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;per2&quot;</span><span class="token punctuation">,</span> per2<span class="token punctuation">)</span>
per2<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;李四&quot;</span>
per2<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">16</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;per2&quot;</span><span class="token punctuation">,</span> per2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h5 id="提示" tabindex="-1"><a class="header-anchor" href="#提示" aria-hidden="true">#</a> 提示</h5><p>本身使用<code>private</code>修饰符后，在外部使用&#39;.&#39;操作符访问和修改类的私有属性会报错，但是 TS 的编译器是可以编译成功的，因此，如果想要达到出错就无法编译的效果，建议在 TS 的配置文件中将添加上<code>&quot;noEmitOnError&quot;: true</code>。</p></blockquote></li><li><p>protected 修饰符：被保护的属性，只能在当前类和其子类中进行访问或修改。它的效果与私有属性类似，只不过私有属性无法在子类中访问或修改。</p></li></ol><blockquote><p>属性可以直接定义在构造函数中，可以简化代码。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person1</span> <span class="token punctuation">{</span>
	<span class="token keyword">private</span> name<span class="token operator">:</span> <span class="token builtin">string</span>
	<span class="token keyword">private</span> age<span class="token operator">:</span> <span class="token builtin">number</span>

	<span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
		<span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Person2</span> <span class="token punctuation">{</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token keyword">private</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 以上两种写法效果一样</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="泛型" tabindex="-1"><a class="header-anchor" href="#泛型" aria-hidden="true">#</a> 泛型</h2><p>在定义函数或类时，如果遇到类型不明确时就可以使用泛型。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">/** 定义泛型的名称可以随便写，不一定只能用T
    使用泛型而不使用any的好处是不会跳过类型检测 **/</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">fn</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> a
<span class="token punctuation">}</span>

<span class="token comment">// 调用方式一</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token comment">// 不指定泛型，TS可以对类型进行推断，但是不是所有都行</span>

<span class="token comment">// 调用方式二</span>
<span class="token generic-function"><span class="token function">fn</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&#39;10&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 指定泛型</span>


<span class="token comment">/** 泛型也可以定义多个 **/</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">fn1</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">K</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token constant">K</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">K</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a<span class="token punctuation">,</span> b
<span class="token punctuation">}</span>


<span class="token comment">/** 泛型也可以规定范围 **/</span>
<span class="token keyword">interface</span> <span class="token class-name">Inter</span> <span class="token punctuation">{</span>
  length<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token comment">/** 这里表示的意思是泛型T必须是Inter的一个实现类(子类) **/</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">fn2</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> Inter<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> a<span class="token punctuation">.</span>length
<span class="token punctuation">}</span>

<span class="token function">fn2</span><span class="token punctuation">(</span><span class="token string">&#39;asdfasdf&#39;</span><span class="token punctuation">)</span>


<span class="token comment">/** 定义类时也可以使用泛型 **/</span>
<span class="token keyword">class</span> <span class="token class-name">MyClass<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token constant">T</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> mc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyClass<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数重载" tabindex="-1"><a class="header-anchor" href="#函数重载" aria-hidden="true">#</a> 函数重载</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 定义函数签名，</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span>params1<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span>params1<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> params2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>

<span class="token comment">// 函数实现</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span>params1<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> params2<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
	<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>params1<span class="token punctuation">,</span> params2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 1 undefined  这个执行的是第一个函数签名</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// 1 2  这个执行的是第二个函数签名</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29);function m(v,b){const s=l("ExternalLinkIcon");return o(),c("div",null,[u,n("p",null,[n("a",r,[a("webpack 打包 TS 笔记"),e(s)])]),n("p",null,[n("a",d,[a("tsconfig.json 和 webpack.config.js 两个配置文件内容"),e(s)])]),k])}const h=p(i,[["render",m],["__file","ts基本内容.html.vue"]]);export{h as default};
