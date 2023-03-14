import{_ as t,W as p,X as o,Y as s,Z as n,$ as c,a0 as a,C as i}from"./framework-4f54a744.js";const l={},r=a(`<h1 id="类型兼容" tabindex="-1"><a class="header-anchor" href="#类型兼容" aria-hidden="true">#</a> 类型兼容</h1><p>所谓类型兼容，就是用于确定一个类型是否能赋值给其他的类型。</p><p>ts 中的类型兼容是基于结构类型的，如果 A 要兼容 B，那么 A 至少要具有和 B 相同的属性，即 A 和 B 的交集为 A（<code>A ∩ B = A</code>）。如下：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token builtin">string</span>
	age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token builtin">string</span>
	age<span class="token operator">:</span> <span class="token builtin">number</span>
	sex<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> a<span class="token operator">:</span> <span class="token constant">A</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">,</span>
	age<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> b<span class="token operator">:</span> <span class="token constant">B</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token string">&quot;lisi&quot;</span><span class="token punctuation">,</span>
	age<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
	sex<span class="token operator">:</span> <span class="token string">&quot;man&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

a <span class="token operator">=</span> b <span class="token comment">// 不报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这段代码中<code>a = b</code>不报错的原因就是接口 A 可以兼容接口 B，B 和 A 拥有相同的属性，只不过 B 比 A 还额外多了别的属性。这就叫做<strong>协变</strong>。</p><h2 id="协变" tabindex="-1"><a class="header-anchor" href="#协变" aria-hidden="true">#</a> 协变</h2>`,6),d={href:"https://baike.baidu.com/item/%E9%B8%AD%E5%AD%90%E7%B1%BB%E5%9E%8B/10845665",target:"_blank",rel:"noopener noreferrer"},u=a(`<p>上面的例子就展示了协变，A 和 B 是两个不同的接口，但是由 B 定义的变量可以赋值给由 A 定义的变量，但是反过来就不行。</p><p>兼容其他类型的这个类型，必须有和被兼容类型完全相同的属性，至于它有没有其他另外的属性无所谓，但是不能缺失被兼容类型中的任一属性。</p><h2 id="逆变" tabindex="-1"><a class="header-anchor" href="#逆变" aria-hidden="true">#</a> 逆变</h2><p>逆变一般发生在函数参数上，如：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token builtin">string</span>
	age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token builtin">string</span>
	age<span class="token operator">:</span> <span class="token builtin">number</span>
	sex<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> <span class="token function-variable function">fnA</span> <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token constant">A</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">let</span> <span class="token function-variable function">fnB</span> <span class="token operator">=</span> <span class="token punctuation">(</span>b<span class="token operator">:</span> <span class="token constant">B</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

fnA <span class="token operator">=</span> fnB <span class="token comment">// 报错</span>

fnB <span class="token operator">=</span> fnA <span class="token comment">// 不报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个代码中，我们可以看到，fnA 和 fnB 的不同点在于参数类型不同，但是与协变不一样的是，这里是 A 能赋给 B，但 B 不能赋给 A，这就是<strong>逆变</strong>。</p><h2 id="双向协变" tabindex="-1"><a class="header-anchor" href="#双向协变" aria-hidden="true">#</a> 双向协变</h2><p>即实现上面代码中<code>fnA = fnB &amp;&amp; fnB = fnA</code>都不报错，一般 ts 是禁止的，因为可能会造成一些漏洞，但是如果想使用的话就可以在<code>tsconfig.json</code>中将<code>&quot;strictFunctionTypes&quot;</code>改为<code>true</code>。</p>`,8);function k(v,m){const e=i("ExternalLinkIcon");return p(),o("div",null,[r,s("p",null,[n("协变也叫"),s("a",d,[n("鸭子类型"),c(e)]),n("：即如果有一只鸟，它走路像鸭子，游泳像鸭子、叫起来也像鸭子，那么这只鸟就可以被称为鸭子。")]),u])}const h=t(l,[["render",k],["__file","类型兼容.html.vue"]]);export{h as default};
