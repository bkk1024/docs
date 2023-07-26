import{_ as s,W as e,X as c,Y as a,Z as o,$ as t,a0 as r,C as p}from"./framework-4f54a744.js";const i={},l=r(`<h1 id="craco" tabindex="-1"><a class="header-anchor" href="#craco" aria-hidden="true">#</a> craco</h1><p>在使用<code>npx create-react-app 项目名</code>创建 react 项目后，它默认会将 webpack 的配置给隐藏，我们需要使用其<code>eject</code>命令才能查看和编辑 webpack 配置，这很麻烦，且其自己生成的 webpack 配置也很繁琐。</p><p>因此，我们可以使用<code>craco</code>，它让我们无需使用<code>eject</code>显示 webpack，也可以去编辑 webpack 配置。</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p><code>npm i @craco/craco --save</code></p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><ol><li><p>首先在项目根目录创建一个配置文件<code>craco.config.js</code>，并导出一个默认配置</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/* craco.config.js */</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 这里书写一些要添加的配置</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>修改<code>package.json</code>中的<code>scripts</code></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// 这里是将原来的 react-scripts 改为了 craco</span>
<span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	<span class="token property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;craco start&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;craco build&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;craco test&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;eject&quot;</span><span class="token operator">:</span> <span class="token string">&quot;craco eject&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,7),d={href:"https://craco.js.org/docs/category/configuration/",target:"_blank",rel:"noopener noreferrer"};function u(k,v){const n=p("ExternalLinkIcon");return e(),c("div",null,[l,a("p",null,[a("a",d,[o("配置 | CRACO"),t(n)])])])}const b=s(i,[["render",u],["__file","craco.html.vue"]]);export{b as default};
