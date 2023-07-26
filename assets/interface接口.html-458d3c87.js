import{_ as n,W as s,X as a,a0 as e}from"./framework-4f54a744.js";const t={},p=e(`<h1 id="interface-接口" tabindex="-1"><a class="header-anchor" href="#interface-接口" aria-hidden="true">#</a> interface 接口</h1><h2 id="interface-定义约束" tabindex="-1"><a class="header-anchor" href="#interface-定义约束" aria-hidden="true">#</a> interface 定义约束</h2><p>在 ts 中，可以使用<code>interface</code>来定义一个类的结构，它规定了这个类中应该包含哪些属性和方法。同时，接口也可以当成类型声明去使用。接口可以重复定义，同名的接口的结构为所有同名加起来的结构。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token builtin">string</span>
	age<span class="token operator">:</span> <span class="token builtin">number</span>
	children<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// ? 表示这个属性或方法可选</span>
<span class="token punctuation">}</span>

<span class="token comment">// 重复定义</span>
<span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
	<span class="token comment">// say: () =&gt; void</span>
	say<span class="token operator">:</span> <span class="token builtin">Function</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> zhangsan<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">,</span>
	age<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
	<span class="token function-variable function">say</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

zhangsan<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// zhangsan</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="任意属性" tabindex="-1"><a class="header-anchor" href="#任意属性" aria-hidden="true">#</a> 任意属性</h2><p><code>[propName: string]</code>用来表示这个属性名称不固定</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token builtin">string</span>
	age<span class="token operator">:</span> <span class="token builtin">number</span>
	children<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// ? 表示这个属性或方法可选</span>
	<span class="token punctuation">[</span>propName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> zhangsan<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">,</span>
	age<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
	weight<span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
	height<span class="token operator">:</span> <span class="token number">180</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个方法的使用场景为：后端接口返回了大量的数据，但是其中只有部分数据是我们需要的。</p><h2 id="readonly" tabindex="-1"><a class="header-anchor" href="#readonly" aria-hidden="true">#</a> readonly</h2><p><code>readonly</code>表示只读属性，用这个声明的属性只能被读取，无法被赋值。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token builtin">string</span>
	age<span class="token operator">:</span> <span class="token builtin">number</span>
	children<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// ? 表示这个属性或方法可选</span>
	<span class="token punctuation">[</span>propName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span>
	<span class="token keyword">readonly</span> idCard<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> zhangsan<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">,</span>
	age<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
	weight<span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
	height<span class="token operator">:</span> <span class="token number">180</span><span class="token punctuation">,</span>
	idCard<span class="token operator">:</span> <span class="token string">&quot;42098119981010xxxx&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

zhangsan<span class="token punctuation">.</span>idCard <span class="token operator">=</span> <span class="token string">&quot;42098119981010xxx1&quot;</span> <span class="token comment">// 报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="extends-继承" tabindex="-1"><a class="header-anchor" href="#extends-继承" aria-hidden="true">#</a> extends 继承</h2><p><code>extends</code>可以让一个接口继承另一个接口的属性和方法，同时添加新的属性或方法。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token builtin">string</span>
	age<span class="token operator">:</span> <span class="token builtin">number</span>
	children<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// ? 表示这个属性或方法可选</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Father</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
	son<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> lisi<span class="token operator">:</span> Father <span class="token operator">=</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token string">&quot;lisi&quot;</span><span class="token punctuation">,</span>
	age<span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
	son<span class="token operator">:</span> <span class="token string">&quot;lidabao&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="implements" tabindex="-1"><a class="header-anchor" href="#implements" aria-hidden="true">#</a> implements</h2><p><code>implements</code>与<code>extends</code>功能类似，但是有如下区别：</p><ol><li><code>implements</code>继承时，定义的只能是类(<code>class</code>)，不能是接口(<code>interface</code>)</li><li><code>extends</code>继承时，定义的可以是类(<code>class</code>)，也可以是接口(<code>interface</code>)</li></ol><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Father</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
	<span class="token function-variable function">say</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span> <span class="token comment">// 可以重写方法，但是不能重写属性</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Son</span> <span class="token keyword">implements</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token builtin">string</span>
	age<span class="token operator">:</span> <span class="token builtin">number</span>
	<span class="token function-variable function">say</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span> <span class="token comment">// 可以重写方法，但是不能重写属性</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),o=[p];function i(c,l){return s(),a("div",null,o)}const d=n(t,[["render",i],["__file","interface接口.html.vue"]]);export{d as default};
