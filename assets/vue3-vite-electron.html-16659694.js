import{_ as n,W as s,X as a,a0 as t}from"./framework-4f54a744.js";const e="/docs/assets/image-20230227235000910-6b204aa5.png",o={},p=t(`<h1 id="vue-vite-electron" tabindex="-1"><a class="header-anchor" href="#vue-vite-electron" aria-hidden="true">#</a> vue+vite+electron</h1><h2 id="安装插件" tabindex="-1"><a class="header-anchor" href="#安装插件" aria-hidden="true">#</a> 安装插件</h2><ol><li><p><code>electron</code>：<code>npm install electron -D</code>。</p><p>这个安装时可能会有安装不上的问题，大部分都是因为网络问题，可以先执行以下命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm config set ELECTRON_MIRROR https://npmmirror.com/mirrors/electron/
// 这是单独设置了 electron 的下载源，这是国内的非 cdn 源
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>vite-plugin-electron</code>：<code>npm install vite-plugin-electron -D</code>。</p><p>这是将 vite 和 electron 结合在一起的，可以让我们非常方便的结合 electron 和 vue，需要做一些指定的配置：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/* vite.config.js */</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vite&quot;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&quot;@vitejs/plugin-vue&quot;</span>
<span class="token keyword">import</span> electron <span class="token keyword">from</span> <span class="token string">&quot;vite-plugin-electron&quot;</span>

<span class="token comment">// https://vitejs.dev/config/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token function">electron</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			<span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&quot;electron/index.ts&quot;</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>electron-builder</code>：<code>npm install electron-builder -D</code></p><p>electron 打包工具。</p></li></ol><blockquote><p>文档书写时各个插件的版本如下：</p><ol><li><code>electron</code>：23.1.1</li><li><code>vite-plugin-electron</code>：0.11.1</li><li><code>electron-builder</code>：23.6.0</li></ol></blockquote><h2 id="第一步配置-vite" tabindex="-1"><a class="header-anchor" href="#第一步配置-vite" aria-hidden="true">#</a> 第一步配置 vite</h2><p>这一步在上面安装插件<code>vite-plugin-electron</code>时已经写了。</p><h2 id="第二步书写-electron-中的-index-文件" tabindex="-1"><a class="header-anchor" href="#第二步书写-electron-中的-index-文件" aria-hidden="true">#</a> 第二步书写 electron 中的 index 文件</h2><p><code>electron</code>文件夹与<code>src</code>文件夹同级，文件结构如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├─electron
├─public
└─src
    ├─assets
    └─components
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">/* electron/index.ts */</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> app<span class="token punctuation">,</span> BrowserWindow <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;electron&quot;</span>
<span class="token comment">/**
 * app：控制应用程序的时间生命周期
 * BrowserWindow：创建并控制浏览器窗口
 */</span>
<span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">&quot;path&quot;</span>

<span class="token keyword">let</span> win<span class="token operator">:</span> BrowserWindow <span class="token operator">|</span> <span class="token keyword">null</span>
<span class="token comment">// 定义全局变量获取窗口实例</span>

<span class="token keyword">const</span> <span class="token function-variable function">createWindow</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	win <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BrowserWindow</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
		width<span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token comment">// 应用打开时的宽度</span>
		height<span class="token operator">:</span> <span class="token number">700</span><span class="token punctuation">,</span> <span class="token comment">// 应用打开时的高度</span>
		minWidth<span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span> <span class="token comment">// 最小高度</span>
		minHeight<span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span> <span class="token comment">// 最小高度</span>
		<span class="token comment">/**
		 * 由于桌面应用窗体有边框和 title 区域、menu 区域等，这一部分也是算入宽高的，因此这个参数就用来控制这些不显示 html 的部分是否算入上面写的宽高中
		 * true：配置的宽高就是整个显示 html 区域的宽高
		 * false：配置的宽高为整个应用的整体宽高
		 */</span>
		useContentSize<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
		<span class="token comment">// frame: false, // 默认 true，false 为去掉顶部导航，即包含最小化、最大化和关闭按钮的区域，去掉工具栏</span>
		<span class="token comment">// minimizable: false, // 是否禁用最小化按钮，默认true，即不禁用</span>
		<span class="token comment">// maximizable: false, // 是否禁用最大化按钮，默认true，即不禁用</span>
		<span class="token comment">// resizable: false, // 是否可以改变应用窗体大小，默认true，可以改变</span>
		webPreferences<span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token comment">// devTools: false, // 是否开启开发者工具，默认true</span>
			contextIsolation<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
			nodeIntegration<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
			<span class="token comment">// 允许 html 页面上的 JavaScript 代码访问 nodejs 环境 api 代码的能力，即与 node 集成的意思</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token comment">// 配置窗口图标核心代码</span>
		icon<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;../public/icon.ico&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token comment">// if (app.isPackaged) {</span>
	<span class="token comment">// 	win.loadFile(path.join(__dirname, &quot;../index.html&quot;))</span>
	<span class="token comment">// } else {</span>
	<span class="token comment">// 	win.loadURL(p<wbr>rocess.env.VITE_DEV_SERVER_URL as string)</span>
	<span class="token comment">// }</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		win<span class="token punctuation">.</span><span class="token function">setMenu</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">// 隐藏顶部工具栏，或者说顶部菜单</span>
		win<span class="token punctuation">.</span><span class="token function">loadFile</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;../dist/index.html&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		<span class="token comment">// VITE_DEV_SERVER_HOST 如果是undefined 换成  VITE_DEV_SERVER_HOSTNAME</span>
		<span class="token comment">// 当前 vite-plugin-electron@0.11.1，上面两个都是 undefined，现在直接使用 p<wbr>rocess.env.VITE_DEV_SERVER_URL 就能获取完整的开发环境路径</span>

		win<span class="token punctuation">.</span><span class="token function">loadURL</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_DEV_SERVER_URL</span> <span class="token keyword">as</span> <span class="token builtin">string</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 在 electron 完成初始化时被触发</span>
app<span class="token punctuation">.</span><span class="token function">whenReady</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>createWindow<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>上面代码中的注释提到<code>app.isPackaged</code>可能有问题，因此使用了<code>cross-env</code>插件来判断当前是为生产环境还是开发环境。</p><ol><li><p>安装插件：<code>npm install cross-env -D</code></p></li><li><p>修改<code>package.json</code>文件中<code>dev</code>的配置语句</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cross-env NODE_ENV=development vite&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-tsc --noEmit &amp;&amp; vite build&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;preview&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vite preview&quot;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>上面给开发环境的命令添加了<code>NODE_ENV</code>变量，这样在<code>js | ts</code>文件中即可使用<code>p<wbr>rocess.env.NODE_ENV</code>获取传入进来的值，以便判断当前环境。</p></blockquote><h2 id="第三步修改-package-json-文件" tabindex="-1"><a class="header-anchor" href="#第三步修改-package-json-文件" aria-hidden="true">#</a> 第三步修改 package.json 文件</h2><ol><li><p>目前，<code>electron</code>尚未支持 <code>&quot;type&quot;: &quot;module&quot;</code>，因此要删除<code>package.json</code>中的相关配置，并将其更改为<code>&quot;main&quot;: &quot;dist-electron/index.js&quot;</code>，因此我们在运行了<code>npm run dev</code>命令后，会生成<code>dist-electron</code>文件夹（<code>vite-plugin-electron@0.11.1</code>插件版本生成的文件夹），其中的<code>index.js</code>文件是<code>electron</code>应用的入口文件。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vite-electron&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;private&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.0.0&quot;</span><span class="token punctuation">,</span>
	<span class="token comment">// &quot;type&quot;: &quot;module&quot;, // 删除这句话</span>
	<span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist-electron/index.js&quot;</span> <span class="token comment">// 添加这句话，记得删除注释</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>上面安装了<code>electron-builder</code>插件，因此先修改<code>build</code>命令语句</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cross-env NODE_ENV=development vite&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-tsc --noEmit &amp;&amp; vite build  &amp;&amp;  electron-builder&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;preview&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vite preview&quot;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>electron-builder</code>有很多打包配置，如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;appId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;com.electron.desktop&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;productName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;electron&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;asar&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token property">&quot;copyright&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Copyright © 2022 electron&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;directories&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;output&quot;</span><span class="token operator">:</span> <span class="token string">&quot;release/&quot;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;files&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
			<span class="token string">&quot;dist&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;dist-electron&quot;</span>
			<span class="token comment">// 因为 vite-plugin-electron@0.11.1 版本的插件生成的入口文件在这个文件夹下，因此要将其添加上去</span>
		<span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">&quot;mac&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;artifactName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${productName}_\${version}.\${ext}&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;dmg&quot;</span><span class="token punctuation">]</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;win&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
				<span class="token punctuation">{</span>
					<span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nsis&quot;</span><span class="token punctuation">,</span>
					<span class="token property">&quot;arch&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;x64&quot;</span><span class="token punctuation">]</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">]</span><span class="token punctuation">,</span>
			<span class="token property">&quot;artifactName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${productName}_\${version}.\${ext}&quot;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;nsis&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;oneClick&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
			<span class="token property">&quot;perMachine&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
			<span class="token property">&quot;allowToChangeInstallationDirectory&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
			<span class="token property">&quot;deleteAppDataOnUninstall&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;publish&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
			<span class="token punctuation">{</span>
				<span class="token property">&quot;provider&quot;</span><span class="token operator">:</span> <span class="token string">&quot;generic&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://127.0.0.1:8080&quot;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">&quot;releaseInfo&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;releaseNotes&quot;</span><span class="token operator">:</span> <span class="token string">&quot;版本更新的具体内容&quot;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="配置窗口标题和应用图标" tabindex="-1"><a class="header-anchor" href="#配置窗口标题和应用图标" aria-hidden="true">#</a> 配置窗口标题和应用图标</h2><ol><li><p>窗口标题修改<code>index.html</code>中的 title 即可。</p></li><li><p>首先应用图标要为<code>.ico</code>格式，其次，图标大小最小不能小于<code>256 * 256</code>。获取到图标后将其放在根目录下的其中一个文件夹中即可，这里我放在<code>public</code>文件夹下</p></li><li><p>修改<code>package.json</code>配置</p><img src="`+e+`" alt="image-20230227235000910" style="zoom:50%;"></li><li><p>在<code>electron/index.ts</code>中添加一行代码：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> app<span class="token punctuation">,</span> BrowserWindow <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;electron&quot;</span>
<span class="token comment">/**
 * app：控制应用程序的时间生命周期
 * BrowserWindow：创建并控制浏览器窗口
 */</span>
<span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">&quot;path&quot;</span>

<span class="token keyword">let</span> win<span class="token operator">:</span> BrowserWindow <span class="token operator">|</span> <span class="token keyword">null</span>
<span class="token comment">// 定义全局变量获取窗口实例</span>

<span class="token keyword">const</span> <span class="token function-variable function">createWindow</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	win <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BrowserWindow</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
		<span class="token comment">// ... 其他配置</span>

		<span class="token comment">// 配置窗口图标核心代码</span>
		icon<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;../public/icon.ico&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token comment">// ... 其他代码</span>
<span class="token punctuation">}</span>

<span class="token comment">// 在 electron 完成初始化时被触发</span>
app<span class="token punctuation">.</span><span class="token function">whenReady</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>createWindow<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,15),c=[p];function i(l,u){return s(),a("div",null,c)}const d=n(o,[["render",i],["__file","vue3-vite-electron.html.vue"]]);export{d as default};
