import{_ as n,W as s,X as a,a0 as e}from"./framework-4f54a744.js";const t={},p=e(`<h1 id="nodejs-express-history模式" tabindex="-1"><a class="header-anchor" href="#nodejs-express-history模式" aria-hidden="true">#</a> nodejs + express + history模式</h1><h2 id="前提" tabindex="-1"><a class="header-anchor" href="#前提" aria-hidden="true">#</a> 前提</h2><p>这里有个前提，即前端页面路由开启了<code>history</code>模式。</p><h2 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖" aria-hidden="true">#</a> 安装依赖</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> express <span class="token parameter variable">-S</span>
<span class="token function">npm</span> <span class="token function">install</span> connect-history-api-fallback <span class="token parameter variable">-S</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置如下" tabindex="-1"><a class="header-anchor" href="#配置如下" aria-hidden="true">#</a> 配置如下</h2><p>这里的代码中，我们的代码结构如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├──index.js
├──package.json
│
├─dist
│  │──index.html
│  │──vite.svg
│  │
│  └─assets
│       └─静态资源如js、css
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;express&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> history <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;connect-history-api-fallback&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token constant">HTML_PATH</span> <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname <span class="token operator">+</span> <span class="token string">&quot;/dist/index.html&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// 这是静态资源的目录，即前端打包后的文件的目录</span>
<span class="token keyword">const</span> staticFileMiddleware <span class="token operator">=</span> express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span>
	path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname <span class="token operator">+</span> <span class="token string">&quot;/dist&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>staticFileMiddleware<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
	<span class="token function">history</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
		<span class="token literal-property property">disableDotRule</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token literal-property property">verbose</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>staticFileMiddleware<span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">sendFile</span><span class="token punctuation">(</span><span class="token constant">HTML_PATH</span><span class="token punctuation">)</span>
  <span class="token comment">// 下面这个代码也行</span>
	<span class="token comment">// return res.render(HTML_PATH)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">5001</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>
		<span class="token string">&quot;服务器启动成功，地址：http://127.0.0.1:5001&quot;</span>
	<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),o=[p];function i(c,l){return s(),a("div",null,o)}const r=n(t,[["render",i],["__file","nodejs和express配合前端history模式.html.vue"]]);export{r as default};
