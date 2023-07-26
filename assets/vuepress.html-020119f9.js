import{_ as v,W as m,X as k,Y as n,Z as s,$ as a,a1 as e,a0 as t,C as c}from"./framework-4f54a744.js";const b="/docs/assets/image-20230302214838530-1c0a3358.png",h="/docs/assets/image-20230302215034321-681b5177.png",g="/docs/assets/image-20230302220135751-41b82fb4.png",y="/docs/assets/image-20230302221343958-93c92f9e.png",_="/docs/assets/image-20230302221504640-85196e86.png",f="/docs/assets/image-20230302222026486-1af07ca2.png",q="/docs/assets/image-20230302222402201-ffb38596.png",x="/docs/assets/image-20230302222426208-c91b3b1d.png",w="/docs/assets/image-20230302235414699-5e50ea7d.png",j="/docs/assets/image-20230302235527856-7485f70b.png",E="/docs/assets/image-20230302235646953-6e910b19.png",T="/docs/assets/image-20230302235753921-84857a34.png",A="/docs/assets/image-20230302235818950-ab8f2b9f.png",V="/docs/assets/image-20230302235838983-96d71127.png",P="/docs/assets/image-20230303182024162-bbcf1849.png",z={},C=t('<h1 id="vuepress" tabindex="-1"><a class="header-anchor" href="#vuepress" aria-hidden="true">#</a> VuePress</h1><h2 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> 创建项目</h2><ol><li><p>在<code>github</code>上创建一个项目</p><p><img src="'+b+'" alt="image-20230302214838530"></p><p><img src="'+h+`" alt="image-20230302215034321"></p></li><li><p><code>git clone 项目地址</code></p></li><li><p>编辑器打开项目，在终端输入如下命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 这里使用 pnpm 管理包，使用 yarn 或者 npm 都一样
pnpm init
pnpm add -D vuepress@next @vuepress/client@next vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在<code>package.json</code>文件中添加如下命令</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token comment">// 官方是这么写的</span>
		<span class="token comment">// &quot;docs:dev&quot;: &quot;vuepress dev docs&quot;,</span>
		<span class="token comment">// &quot;docs:build&quot;: &quot;vuepress build docs&quot;</span>
		<span class="token comment">// 我不想敲 docs:</span>
		<span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>向<code>.gitignnore</code>文件添加如下两个文件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.cache
.temp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>根目录创建目录：<code>docs</code>，然后在其中创建<code>.vuepress</code>目录，这个目录中要包含<code>config.js</code>用来书写<code>VuePress</code>的配置；<code>public</code>文件用来存放静态文件，一般是文档的图标，如<code>icon.png</code>；最后是<code>README.md</code>文件，这是文档的首页。</p></li><li><p>现在使用<code>pnpm dev</code>就能看到文档了。</p></li></ol><h2 id="添加内容" tabindex="-1"><a class="header-anchor" href="#添加内容" aria-hidden="true">#</a> 添加内容</h2><p>在<code>docs</code>文件夹下添加目录来存放<code>.md</code>文件，或者直接创建<code>.md</code>文件也行，随自己开心，如下：</p><img src="`+g+`" alt="image-20230302220135751" style="zoom:50%;"><h2 id="编写配置" tabindex="-1"><a class="header-anchor" href="#编写配置" aria-hidden="true">#</a> 编写配置</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig<span class="token punctuation">,</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token comment">// 这是后续将文档部署到 github 的免费服务器上是的路径，一般就填写项目的名称，如我这个项目的名称就叫 docs</span>
	<span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&quot;/docs/&quot;</span><span class="token punctuation">,</span>
	<span class="token comment">// 语言</span>
	<span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">&quot;zh-CN&quot;</span><span class="token punctuation">,</span>
	<span class="token comment">// 网站title</span>
	<span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;二师弟的学习笔记&quot;</span><span class="token punctuation">,</span>
	<span class="token comment">// 描述</span>
	<span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&quot;二师弟的学习笔记&quot;</span><span class="token punctuation">,</span>
	<span class="token comment">// 这是往 index.html 文件的头部添加的内容，我这里添加了网站的图标，也就是存放在 public 中的 icon 图片</span>
	<span class="token literal-property property">head</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;link&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">rel</span><span class="token operator">:</span> <span class="token string">&quot;icon&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">&quot;/icon.png&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token comment">// 这里使用的是官方默认主题</span>
	<span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
		<span class="token comment">// 这是侧边栏标题的图标</span>
		<span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&quot;/icon.png&quot;</span><span class="token punctuation">,</span>
		<span class="token comment">// 顶部导航栏，这里只展示了部分配置，具体配置可以参考官方内容</span>
		<span class="token literal-property property">navbar</span><span class="token operator">:</span> <span class="token punctuation">[</span>
			<span class="token punctuation">{</span>
				<span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;JavaScript&quot;</span><span class="token punctuation">,</span>
				<span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;/js/js方法.md&quot;</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">{</span>
				<span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;打包工具&quot;</span><span class="token punctuation">,</span>
				<span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
					<span class="token punctuation">{</span>
						<span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;vite3&quot;</span><span class="token punctuation">,</span>
						<span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;/build-tools/vite3.md&quot;</span><span class="token punctuation">,</span>
					<span class="token punctuation">}</span><span class="token punctuation">,</span>
					<span class="token punctuation">{</span>
						<span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;webpack5&quot;</span><span class="token punctuation">,</span>
						<span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;/build-tools/webpack5.md&quot;</span><span class="token punctuation">,</span>
					<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token punctuation">]</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token comment">// 侧边栏，这里只展示了部分配置，具体配置可以参考官方内容</span>
		<span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token string-property property">&quot;/js/&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
				<span class="token punctuation">{</span>
					<span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span>
					<span class="token literal-property property">collapsible</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
					<span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;js方法&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;js知识要点&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;浏览器渲染原理&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;事件循环&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;属性描述符&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">]</span><span class="token punctuation">,</span>
			<span class="token string-property property">&quot;/build-tools/&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
				<span class="token punctuation">{</span>
					<span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;vite&quot;</span><span class="token punctuation">,</span>
					<span class="token literal-property property">collapsible</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
					<span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;vite3&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token punctuation">{</span>
					<span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;webpack&quot;</span><span class="token punctuation">,</span>
					<span class="token literal-property property">collapsible</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
					<span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;webpack5&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token comment">// 侧边栏展示的层级深度</span>
		<span class="token literal-property property">sidebarDepth</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),D={href:"https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#navbar",target:"_blank",rel:"noopener noreferrer"},B={href:"https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#sidebar",target:"_blank",rel:"noopener noreferrer"},N={href:"https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html",target:"_blank",rel:"noopener noreferrer"},U=t(`<h2 id="创建工作流文件-这里参考的是官方-github-pages-的配置" tabindex="-1"><a class="header-anchor" href="#创建工作流文件-这里参考的是官方-github-pages-的配置" aria-hidden="true">#</a> 创建工作流文件，这里参考的是官方 github pages 的配置</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> docs

<span class="token key atrule">on</span><span class="token punctuation">:</span>
 <span class="token comment"># 每当 push 到 main 分支时触发部署</span>
 <span class="token key atrule">push</span><span class="token punctuation">:</span>
  <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>main<span class="token punctuation">]</span>
 <span class="token comment"># 手动触发部署</span>
 <span class="token key atrule">workflow_dispatch</span><span class="token punctuation">:</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
 <span class="token key atrule">docs</span><span class="token punctuation">:</span>
  <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest

  <span class="token key atrule">steps</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
     <span class="token key atrule">with</span><span class="token punctuation">:</span>
      <span class="token comment"># “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录</span>
      <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span>

   <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup pnpm
     <span class="token key atrule">uses</span><span class="token punctuation">:</span> pnpm/action<span class="token punctuation">-</span>setup@v2
     <span class="token key atrule">with</span><span class="token punctuation">:</span>
      <span class="token comment"># 选择要使用的 pnpm 版本</span>
      <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token number">7</span>
      <span class="token comment"># 使用 pnpm 安装依赖</span>
      <span class="token key atrule">run_install</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

   <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup Node.js
     <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3
     <span class="token key atrule">with</span><span class="token punctuation">:</span>
      <span class="token comment"># 选择要使用的 node 版本</span>
      <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token number">18</span>
      <span class="token comment"># 缓存 pnpm 依赖</span>
      <span class="token key atrule">cache</span><span class="token punctuation">:</span> pnpm

   <span class="token comment"># 运行构建脚本</span>
   <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build VuePress site
     <span class="token key atrule">run</span><span class="token punctuation">:</span> pnpm docs<span class="token punctuation">:</span>build

   <span class="token comment"># 查看 workflow 的文档来获取更多信息</span>
   <span class="token comment"># @see https://github.com/crazy-max/ghaction-github-pages</span>
   <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy to GitHub Pages
     <span class="token key atrule">uses</span><span class="token punctuation">:</span> crazy<span class="token punctuation">-</span>max/ghaction<span class="token punctuation">-</span>github<span class="token punctuation">-</span>pages@v2
     <span class="token key atrule">with</span><span class="token punctuation">:</span>
      <span class="token comment"># 部署到 gh-pages 分支</span>
      <span class="token key atrule">target_branch</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages
      <span class="token comment"># 部署目录为 VuePress 的默认输出目录</span>
      <span class="token key atrule">build_dir</span><span class="token punctuation">:</span> docs/.vuepress/dist
     <span class="token key atrule">env</span><span class="token punctuation">:</span>
      <span class="token comment"># @see https://docs.github.com/cn/actions/reference/authentication-in-a-workflow#about-the-github_token-secret</span>
      <span class="token key atrule">GITHUB_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITHUB_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),I={href:"https://v2.vuepress.vuejs.org/zh/guide/deployment.html",target:"_blank",rel:"noopener noreferrer"},L=t('<h2 id="最后就可以上传到-github-中去了" tabindex="-1"><a class="header-anchor" href="#最后就可以上传到-github-中去了" aria-hidden="true">#</a> 最后就可以上传到 github 中去了</h2><p>上传完成后，我们可以在<code>actions</code>中查看站点是否部署成功</p><p><img src="'+y+'" alt="image-20230302221343958"></p><h2 id="修改仓库配置" tabindex="-1"><a class="header-anchor" href="#修改仓库配置" aria-hidden="true">#</a> 修改仓库配置</h2><p>这里修改部署到<code>github</code>服务器上的是仓库中的哪个分支，因为我们上面的<code>docs.yml</code>中配置了当我们<code>git push</code>后，它自动将执行<code>pnpm build</code>命令将文件打包并保存到<code>gh-pages</code>分支中，因此这里要进行更改。</p><p><img src="'+_+'" alt="image-20230302221504640"></p><h2 id="部分踩坑" tabindex="-1"><a class="header-anchor" href="#部分踩坑" aria-hidden="true">#</a> 部分踩坑</h2><ol><li><p>与我们平时书写<code>md</code>文件不同，<code>VuePress</code>默认主题的侧边栏只会展示<strong>一个一级标题，从第二个一级标题开始都不会在侧边栏展示</strong>，因此我们书写要在<code>VuePress</code>中展示的内容最好只有一个一级标题，当然如果你不介意写了也不展示，就当没看见这个。</p></li><li><p>关于图片引入，最好都使用相对路径引入，如下：</p><p><img src="'+f+'" alt="image-20230302222026486"></p><p>这个<code>./</code>不要掉了，否则会导致在<code>github</code>的<code>actions</code>中部署时报错。</p></li><li><p>如果<code>actions</code>中报如下错误：<span style="color:red;">The process &#39;/usr/bin/git&#39; failed with exit code <strong>128</strong></span> 。出现上面的报错是因为**<em>默认情况下，新存储库没有适当的工作流权限。</em>** 可进行如下操作：</p><p><img src="'+q+'" alt="image-20230302222402201"></p><p><img src="'+x+'" alt="image-20230302222426208"></p></li><li><p>在<code>md</code>文件中书写时，尽量不要书写没有闭合的标签元素，可能会导致报错。</p></li></ol><h2 id="vuepress-theme-hope" tabindex="-1"><a class="header-anchor" href="#vuepress-theme-hope" aria-hidden="true">#</a> vuepress-theme-hope</h2><p>这个文档我换了一个主题<code>vuepress-theme-hope</code>，但是这个<strong>侧边栏</strong>似乎有点问题，如下：</p><ol><li><p><span style="color:red;">自动将字母转换为大写</span></p><p><img src="'+w+'" alt="image-20230302235414699"></p><p>配置如下：</p><p><img src="'+j+'" alt="image-20230302235527856"></p></li><li><p><span style="color:red;">自动添加路径前缀</span></p><p><img src="'+E+'" alt="image-20230302235646953"></p><p><img src="'+T+'" alt="image-20230302235753921"></p><p>配置如下</p><p><img src="'+A+'" alt="image-20230302235818950"></p><p><img src="'+V+`" alt="image-20230302235838983"></p></li></ol><blockquote><p><strong>上述问题复现：</strong></p><ul><li><p>配置如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> hopeTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-theme-hope&quot;</span>
 
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
		<span class="token literal-property property">navbar</span><span class="token operator">:</span> <span class="token punctuation">[</span>
			<span class="token punctuation">{</span>
				<span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;demo&quot;</span><span class="token punctuation">,</span>
				<span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;/demo/demo1.md&quot;</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token string-property property">&quot;/demo/&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
				<span class="token punctuation">{</span>
					<span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;DEMO&quot;</span><span class="token punctuation">,</span>
					<span class="token literal-property property">collapsible</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
					<span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;demo1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;demo2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;demo3&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>当<code>md</code>文件中有一级标题，不会出现路径前缀问题</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">##</span> demo1.md</span>

<span class="token title important"><span class="token punctuation">#</span> demo1</span>

这个文件有一级标题，因此在侧边栏中展示为 demo1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当<code>md</code>文件中没有一级标题，则侧边栏会使用<code>/路径/children名称</code>开头</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">##</span> demo2.md</span>

<span class="token title important"><span class="token punctuation">##</span> demo2</span>

这个文件以二级标题开头，在侧边栏中展示即为 /demo/demo2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面能看出这个主题生成文档的侧边栏是以文档中的一级标题为准的，如果没有一级标题，那么就会出现上述问题，<em>字母大写也是因为我文档中的标题是大写</em>🤣。</p><p>不知道这算不算 bug，也许是我书写文档的习惯有问题。</p></blockquote><h2 id="vuepress-theme-hope-一些用法示例" tabindex="-1"><a class="header-anchor" href="#vuepress-theme-hope-一些用法示例" aria-hidden="true">#</a> vuepress-theme-hope 一些用法示例</h2><h3 id="从文件中导入代码块" tabindex="-1"><a class="header-anchor" href="#从文件中导入代码块" aria-hidden="true">#</a> 从文件中导入代码块</h3><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Directive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> vFocus<span class="token operator">:</span> Directive <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token function-variable function">mounted</span><span class="token operator">:</span> <span class="token punctuation">(</span>el<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		el<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div></div></div><div class="hint-container tip"><p class="hint-container-title">语法详解</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@[code{3-10} ts{3-7}:no-line-numbers](../foo.ts)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这句话的意思是从<code>../foo.ts</code>文件中导入第<code>3-10</code>行的代码，语言为<code>ts</code>，并且高亮<code>3-7</code>行，且代码块不显示行号。</p></div><h3 id="文档内部跳转" tabindex="-1"><a class="header-anchor" href="#文档内部跳转" aria-hidden="true">#</a> 文档内部跳转</h3>`,17),S=n("p",null,[s("代码如下："),n("code",null,"[点击这里跳转到首页](../readme.md)"),s("，这里就引用的是内部页面的相对路径。")],-1),G=n("h3",{id:"跳转到某个锚点",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#跳转到某个锚点","aria-hidden":"true"},"#"),s(" 跳转到某个锚点")],-1),H=n("p",null,"通俗点说就是跳转到某个页面的某个标题处，示例如下：",-1),O=t('<p>代码如下：<code>[点击这里跳转到本页面的自定义容器](./vuepress.md#自定义容器)</code>。可以看到，这里就是在文件后面添加了<code>#标题</code>，因为每个标题都被设定为了<code>&lt;a href=&quot;#标题名称&quot;&gt;&lt;/a&gt;</code>标签的锚点模式，如下图：</p><p><img src="'+P+'" alt="image-20230303182024162"></p><h2 id="vuepress-theme-hope-语法增强" tabindex="-1"><a class="header-anchor" href="#vuepress-theme-hope-语法增强" aria-hidden="true">#</a> vuepress-theme-hope 语法增强</h2><p>这个功能要依靠一个插件<code>vuepress-plugin-md-enhance</code>。</p>',4),R=n("p",null,"安装",-1),K=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` vuepress-theme-hope
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),M=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(" i "),n("span",{class:"token parameter variable"},"-D"),s(` vuepress-plugin-md-enhance
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),$={href:"https://plugin-md-enhance.vuejs.press/zh/guide/",target:"_blank",rel:"noopener noreferrer"},F=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/* ./vuepress/config.js */</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> hopeTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-theme-hope&quot;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> mdEnhancePlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-plugin-md-enhance&quot;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
   <span class="token comment">// ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">mdEnhancePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">tabs</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 开启选项卡</span>
      <span class="token literal-property property">container</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 开启自定义容器</span>
      <span class="token literal-property property">codetabs</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 开启代码分组</span>
      <span class="token literal-property property">align</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 段落对齐方式</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),J=t(`<h3 id="自定义容器" tabindex="-1"><a class="header-anchor" href="#自定义容器" aria-hidden="true">#</a> 自定义容器</h3><p>示例：</p><div class="hint-container note"><p class="hint-container-title">自定义标题</p><p>信息容器</p></div><div class="hint-container info"><p class="hint-container-title">自定义标题</p><p>信息容器</p></div><div class="hint-container tip"><p class="hint-container-title">自定义标题</p><p>提示容器</p></div><div class="hint-container warning"><p class="hint-container-title">自定义标题</p><p>警告容器</p></div><div class="hint-container danger"><p class="hint-container-title">自定义标题</p><p>危险容器</p></div><details class="hint-container details"><summary>自定义标题</summary><p>这是上面这些容器的代码，如果要用这个容器包裹一些<code>markdown</code>增强的功能的代码，如这里的效果，则可以将其<code>:::</code>改为<code>::::</code>。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>::: note 自定义标题
白色
:::

::: info 自定义标题
蓝色
:::

::: tip 自定义标题
绿色
:::

::: warning 自定义标题
黄色
:::

::: danger 自定义标题
红色
:::

::: details 自定义标题
白色，可折叠
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="选项卡" tabindex="-1"><a class="header-anchor" href="#选项卡" aria-hidden="true">#</a> 选项卡</h3><p>示例：</p>`,10),W=n("p",null,"标题 1 内容",-1),X=n("p",null,"标题 2 内容",-1),Y=n("p",null,"标题 3 内容",-1),Z={href:"https://plugin-md-enhance.vuejs.press/zh/guide/tabs.html",target:"_blank",rel:"noopener noreferrer"},Q=t(`<details class="hint-container details"><summary>代码</summary><div class="language-\\ line-numbers-mode" data-ext="\\"><pre class="language-\\"><code>::: tabs

@tab 标题 1

&lt;!-- tab 1 内容 --&gt;

@tab 标题 2

&lt;!-- tab 2 内容 --&gt;

@tab:active 标题 3

&lt;!-- tab 3 将会被默认激活 --&gt;

&lt;!-- tab 3 内容 --&gt;

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="代码分组" tabindex="-1"><a class="header-anchor" href="#代码分组" aria-hidden="true">#</a> 代码分组</h3><p>示例：</p>`,3),nn=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[s("console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'js'"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),sn=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'ts'"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),an={href:"https://plugin-md-enhance.vuejs.press/zh/guide/code-tabs.html",target:"_blank",rel:"noopener noreferrer"},en=t(`<details class="hint-container details"><summary>代码</summary><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>::: code-tabs

@tab js

\`\`\`js
console.log(&#39;js&#39;)
\`\`\`

@tab ts

\`\`\`ts
console.log(&#39;ts&#39;)
\`\`\`

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="对齐方式" tabindex="-1"><a class="header-anchor" href="#对齐方式" aria-hidden="true">#</a> 对齐方式</h3><div style="text-align:center;"><p>居中对齐示例</p></div>`,3),tn={href:"https://plugin-md-enhance.vuejs.press/zh/guide/align.html",target:"_blank",rel:"noopener noreferrer"},pn=t(`<details class="hint-container details"><summary>代码</summary><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>::: center
居中对齐示例
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1);function on(ln,cn){const p=c("ExternalLinkIcon"),r=c("RouterLink"),u=c("CodeTabs"),d=c("Tabs");return m(),k("div",null,[C,n("p",null,[n("a",D,[s("narbar | VuePress"),a(p)])]),n("p",null,[n("a",B,[s("sidebar | VuePress"),a(p)])]),n("p",null,[n("a",N,[s("默认主题完整配置 | VuePress"),a(p)])]),U,n("p",null,[n("a",I,[s("完整的部署配置，如果你想部署到别的平台可以参考这里 | VuePress"),a(p)])]),L,n("p",null,[a(r,{to:"/"},{default:e(()=>[s("点击这里跳转到首页")]),_:1})]),S,G,H,n("p",null,[a(r,{to:"/vue3/vuepress.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AE%B9%E5%99%A8"},{default:e(()=>[s("点击这里跳转到本页面的自定义容器")]),_:1})]),O,n("ol",null,[n("li",null,[R,a(u,{id:"251",data:[{title:"pnpm"},{title:"npm"}]},{tab0:e(({title:i,value:o,isActive:l})=>[K]),tab1:e(({title:i,value:o,isActive:l})=>[M]),_:1})]),n("li",null,[n("p",null,[s("配置："),n("a",$,[s("完整的配置请看这里"),a(p)])]),F])]),J,a(d,{id:"310",data:[{title:"标题 1"},{title:"标题 2"},{title:"标题 3"}],active:0},{tab0:e(({title:i,value:o,isActive:l})=>[W]),tab1:e(({title:i,value:o,isActive:l})=>[X]),tab2:e(({title:i,value:o,isActive:l})=>[Y]),_:1}),n("p",null,[s("代码如下："),n("a",Z,[s("完整用法请看这里"),a(p)])]),Q,a(u,{id:"339",data:[{title:"js"},{title:"ts"}]},{tab0:e(({title:i,value:o,isActive:l})=>[nn]),tab1:e(({title:i,value:o,isActive:l})=>[sn]),_:1}),n("p",null,[s("代码如下："),n("a",an,[s("完整用法请看这里"),a(p)])]),en,n("p",null,[s("代码如下："),n("a",tn,[s("完整用法请看这里"),a(p)])]),pn])}const un=v(z,[["render",on],["__file","vuepress.html.vue"]]);export{un as default};
