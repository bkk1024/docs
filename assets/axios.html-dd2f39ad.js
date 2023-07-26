import{_ as n,W as s,X as a,a0 as e}from"./framework-4f54a744.js";const t={},p=e(`<h1 id="axios" tabindex="-1"><a class="header-anchor" href="#axios" aria-hidden="true">#</a> axios</h1><h2 id="配置-axios" tabindex="-1"><a class="header-anchor" href="#配置-axios" aria-hidden="true">#</a> 配置 axios</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 配置 axios</span>

<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&quot;axios&quot;</span>

<span class="token keyword">const</span> request <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token comment">// baseURL: &quot;http://127.0.0.1:5000&quot;,</span>
	<span class="token comment">// 如果配置了代理跨域，其 target 与 baseURL 重复，就不需要重复配置</span>
	<span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">5000</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 请求拦截器</span>
request<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;config&quot;</span><span class="token punctuation">,</span> config<span class="token punctuation">)</span>
	<span class="token keyword">return</span> config
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 响应拦截器</span>
request<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
	<span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token comment">//</span>
		<span class="token keyword">return</span> res
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token comment">//</span>
		<span class="token keyword">return</span> error
	<span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> request
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","axios.html.vue"]]);export{r as default};
