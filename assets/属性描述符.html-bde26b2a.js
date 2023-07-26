import{_ as n,W as s,X as a,a0 as e}from"./framework-4f54a744.js";const t={},p=e(`<h1 id="属性描述符" tabindex="-1"><a class="header-anchor" href="#属性描述符" aria-hidden="true">#</a> 属性描述符</h1><h2 id="获取和设置属性描述符" tabindex="-1"><a class="header-anchor" href="#获取和设置属性描述符" aria-hidden="true">#</a> 获取和设置属性描述符</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span>

<span class="token comment">// 获取属性描述符</span>
<span class="token keyword">const</span> desc <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 这里获取 obj 的 a 属性的属性描述符</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>desc<span class="token punctuation">)</span> <span class="token comment">// {value: 1, writable: true, enumerable: true, configurable: true}</span>
<span class="token comment">/*
	value: 属性的值
	writable: 属性是否可以重写
	enumerable: 属性是否可以遍历得到
	configurable: 属性描述符本身是否可以修改
*/</span>

<span class="token comment">// 设置属性描述符</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
obj<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">20</span> <span class="token comment">// 不生效，因为上面设置了这个属性不能被重写</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token comment">// 这里不会输出 a ，因为设置了这个属性无法通过遍历得到</span>
<span class="token punctuation">}</span>

Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 不生效，因为上面设置了属性描述符本身无法被修改了</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="读取器-getter-和设置器-setter" tabindex="-1"><a class="header-anchor" href="#读取器-getter-和设置器-setter" aria-hidden="true">#</a> 读取器(getter) 和设置器(setter)</h2><p>属性描述符中有另外两个配置：<code>get() 和 set()</code> ，这两个配置就是读取器和设置器，他们的作用分别是读取属性的值和设置属性的值。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">var</span> interanlValue <span class="token operator">=</span> <span class="token keyword">undefined</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> interanlValue
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        interanlValue <span class="token operator">=</span> val
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>a<span class="token punctuation">)</span> <span class="token comment">// undefined</span>
obj<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>a<span class="token punctuation">)</span> <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 getter 和 setter 编写一个更加牢固的构造函数：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token keyword">undefined</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">NewObj</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token string">&#39;data&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> obj
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;data 属性是只读的，无法进行修改&#39;</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> interanlText <span class="token operator">=</span> <span class="token keyword">undefined</span> <span class="token comment">// text 属性赋值时的暂存变量</span>
        Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token string">&#39;text&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> interanlText
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 这里也可以写一些限定条件（if判断）来限制该属性只能赋值为什么</span>
                interanlText <span class="token operator">=</span> val
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> obj1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NewObj</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;obj1.data&#39;</span><span class="token punctuation">,</span> obj1<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token comment">// obj1.data { a: undefined, b: undefined }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;obj1.text&#39;</span><span class="token punctuation">,</span> obj1<span class="token punctuation">.</span>text<span class="token punctuation">)</span> <span class="token comment">// obj1.text undefined</span>
obj1<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token number">123</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;obj1.text&#39;</span><span class="token punctuation">,</span> obj1<span class="token punctuation">.</span>text<span class="token punctuation">)</span> <span class="token comment">// obj1.text 123</span>
obj1<span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token number">123</span> <span class="token comment">// Error: data 属性是只读的，无法进行修改</span>

<span class="token comment">/*
	上面这种写法虽然比较牢固，但是还是有其他的问题，如：
		1、通过修改原始数据来修改：obj1.data.a = 123
			防止的方法：使用 Object.freeze(obj) 来冻结数据，但是为了防止以后原始数据可能会有修改的需求，因此我们应该先将原始数据克隆，然后冻结克隆后的数据，如：\`obj = { ...obj }; Object.freeze(obj)\` 
		2、可以给 obj1 添加属性：如直接使用 obj1.newData = &#39;hhh&#39; 
			防止的方法：在所有操作完成后，对自身进行冻结，Object.freeze(this)
		3、在第二个问题的操作后，我们不光不能给 obj1 添加属性了，当 obj1 中有其他的属性时，其他属性也无法修改了
			防止的方法：为了防止其他属性以后有修改的可能，我们可以将 Object.freeze(this) 替换为 Object.seal(this)，对自身进行密封
		4、通过原型修改数据：NewObj.prototype.haha = &#39;haha&#39;
			防止的方法：对原型进行冻结，Object.freeze(NewObj.prototype)
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[p];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","属性描述符.html.vue"]]);export{r as default};
