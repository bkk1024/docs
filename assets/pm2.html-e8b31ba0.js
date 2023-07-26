import{_ as n,W as t,X as i,Y as e,Z as o,$ as d,a0 as a,C as r}from"./framework-4f54a744.js";const l="/docs/assets/image-20230228170620255-e6ed7a57.png",c={},p=a(`<h1 id="pm2" tabindex="-1"><a class="header-anchor" href="#pm2" aria-hidden="true">#</a> pm2</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install pm2 -g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2><h3 id="启动项目" tabindex="-1"><a class="header-anchor" href="#启动项目" aria-hidden="true">#</a> 启动项目</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pm2 start index.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动成功会看到如下信息</p><p><img src="`+l+`" alt="image-20230228170620255"></p><h3 id="停止" tabindex="-1"><a class="header-anchor" href="#停止" aria-hidden="true">#</a> 停止</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pm2 stop 1
// 这个 1 也就是上图中的 id，也可以写 all，这样就是停止所有的
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除" tabindex="-1"><a class="header-anchor" href="#删除" aria-hidden="true">#</a> 删除</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pm2 del 1
pm2 delete 1
// 这个 1 也就是上图中的 id，也可以写 all，这样就是删除所有的
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重启" tabindex="-1"><a class="header-anchor" href="#重启" aria-hidden="true">#</a> 重启</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pm2 restart 1
// 这个 1 也就是上图中的 id，也可以写 all，这样就是删除所有的
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看全部进程" tabindex="-1"><a class="header-anchor" href="#查看全部进程" aria-hidden="true">#</a> 查看全部进程</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pm2 list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="watch" tabindex="-1"><a class="header-anchor" href="#watch" aria-hidden="true">#</a> watch</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pm2 start index.js --watch
// --watch 的意思就是监控，作用是当这个文件内容改变后，会自动更新
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="负载均衡" tabindex="-1"><a class="header-anchor" href="#负载均衡" aria-hidden="true">#</a> 负载均衡</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ pm2 start app.js -i 3 // 开启三个进程
$ pm2 start app.js -i max // 根据机器CPU核数，开启对应数目的进程
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,19),u={href:"https://pm2.keymetrics.io/docs/usage/cluster-mode/#automatic-load-balancing",target:"_blank",rel:"noopener noreferrer"},m=a(`<h3 id="查看日志" tabindex="-1"><a class="header-anchor" href="#查看日志" aria-hidden="true">#</a> 查看日志</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pm2 logs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当然，也可以打开日志文件查看日志</p><h3 id="监控" tabindex="-1"><a class="header-anchor" href="#监控" aria-hidden="true">#</a> 监控</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pm2 monit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个命令可以查看当前通过 pm2 运行的进程的状态</p><h2 id="ts-相关配置" tabindex="-1"><a class="header-anchor" href="#ts-相关配置" aria-hidden="true">#</a> ts 相关配置</h2><p>如果我们是使用的 ts 编写的文件，那么就需要一些相关配置，虽然我们可以使用<code>ts-node</code>启动项目，但是<code>ts-node</code>和<code>pm2</code>并不能很好的配合，而且<code>pm2</code>也只能启动 js 文件，因此我们就需要先使用<code>tsc</code>将 ts 文件转换为 js 文件，但是每次都要手动转换确实很麻烦，因此我们就可以将其写写到命令中</p><ol><li><p><code>tsconfig.json</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es5&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 打包后的语法</span>
		<span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;commonjs&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 模块引入规范</span>
		<span class="token property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./dist&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 打包后的文件夹</span>
		<span class="token property">&quot;rootDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 参与打包的根目录</span>
		<span class="token property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 严格模式</span>
		<span class="token property">&quot;esModuleInterop&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token property">&quot;skipLibCheck&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token property">&quot;forceConsistentCasingInFileNames&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>package.json</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	<span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ts-node index.ts&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tsc &amp; pm2 start ./dist/index.js&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,9);function v(h,b){const s=r("ExternalLinkIcon");return t(),i("div",null,[p,e("p",null,[e("a",u,[o("PM2 - Cluster Mode"),d(s)])]),m])}const k=n(c,[["render",v],["__file","pm2.html.vue"]]);export{k as default};
