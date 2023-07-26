import{_ as t,W as e,X as p,Y as n,Z as o,$ as i,a0 as s,C as l}from"./framework-4f54a744.js";const c={},u=s(`<h1 id="fastapi" tabindex="-1"><a class="header-anchor" href="#fastapi" aria-hidden="true">#</a> FastAPI</h1><h2 id="安装fastapi" tabindex="-1"><a class="header-anchor" href="#安装fastapi" aria-hidden="true">#</a> 安装fastapi</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装fastapi</span>
pip <span class="token function">install</span> fastapi
<span class="token comment"># 安装服务器，用来启动 fastapi 项目</span>
pip <span class="token function">install</span> uvicorn

<span class="token comment"># 或者可以直接，这个安装包括了 uvicorn</span>
<span class="token comment"># pip install fastapi[all]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),r={href:"https://fastapi.tiangolo.com/zh/tutorial/",target:"_blank",rel:"noopener noreferrer"},d=s(`<h2 id="简单起个服务" tabindex="-1"><a class="header-anchor" href="#简单起个服务" aria-hidden="true">#</a> 简单起个服务</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot; 文件：main.py &quot;&quot;&quot;</span>
<span class="token keyword">from</span> fastapi <span class="token keyword">import</span> FastAPI
<span class="token keyword">import</span> uvicorn

app <span class="token operator">=</span> FastAPI<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">&quot;/{msg}&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">root</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token string">&quot;message&quot;</span><span class="token punctuation">:</span> msg<span class="token punctuation">}</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
  uvicorn<span class="token punctuation">.</span>run<span class="token punctuation">(</span>
    app<span class="token operator">=</span><span class="token string">&quot;main:app&quot;</span><span class="token punctuation">,</span>
    host<span class="token operator">=</span><span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
    port<span class="token operator">=</span><span class="token number">8000</span><span class="token punctuation">,</span>
    <span class="token builtin">reload</span><span class="token operator">=</span><span class="token boolean">True</span>
  <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后运行这个<code>main.py</code>文件，在浏览器输入<code>http://127.0.0.1/hi</code>，可以看到浏览器页面上有个<code>hi</code>。</p><h2 id="获取请求头-header" tabindex="-1"><a class="header-anchor" href="#获取请求头-header" aria-hidden="true">#</a> 获取请求头 header</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> fastapi <span class="token keyword">import</span> FastAPI<span class="token punctuation">,</span> Header
<span class="token keyword">import</span> uvicorn

app <span class="token operator">=</span> FastAPI<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">&quot;/{msg}&quot;</span><span class="token punctuation">)</span>
<span class="token comment"># 这里演示的是获取 token</span>
<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">root</span><span class="token punctuation">(</span>msg<span class="token punctuation">,</span> token <span class="token operator">=</span> Header<span class="token punctuation">(</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token comment"># 如果请求头里面没有 token，则返回的是 null</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token string">&quot;msg&quot;</span><span class="token punctuation">:</span> msg<span class="token punctuation">,</span> <span class="token string">&quot;token&quot;</span><span class="token punctuation">:</span> token<span class="token punctuation">}</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
  uvicorn<span class="token punctuation">.</span>run<span class="token punctuation">(</span>
    app<span class="token operator">=</span><span class="token string">&quot;main:app&quot;</span><span class="token punctuation">,</span>
    host<span class="token operator">=</span><span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
    port<span class="token operator">=</span><span class="token number">8000</span><span class="token punctuation">,</span>
    <span class="token builtin">reload</span><span class="token operator">=</span><span class="token boolean">True</span>
  <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取psot请求参数" tabindex="-1"><a class="header-anchor" href="#获取psot请求参数" aria-hidden="true">#</a> 获取psot请求参数</h2><h3 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> json</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> fastapi <span class="token keyword">import</span> FastAPI<span class="token punctuation">,</span> Body
<span class="token keyword">import</span> uvicorn

app <span class="token operator">=</span> FastAPI<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>post</span><span class="token punctuation">(</span><span class="token string">&quot;/login&quot;</span><span class="token punctuation">)</span>
<span class="token comment"># data 就是接口传递的 json 数据</span>
<span class="token keyword">def</span> <span class="token function">login</span><span class="token punctuation">(</span>data <span class="token operator">=</span> Body<span class="token punctuation">(</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">return</span> data

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
  uvicorn<span class="token punctuation">.</span>run<span class="token punctuation">(</span>
    app<span class="token operator">=</span><span class="token string">&quot;main:app&quot;</span><span class="token punctuation">,</span>
    host<span class="token operator">=</span><span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
    port<span class="token operator">=</span><span class="token number">8000</span><span class="token punctuation">,</span>
    <span class="token builtin">reload</span><span class="token operator">=</span><span class="token boolean">True</span>
  <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="form表单格式数据-form-data" tabindex="-1"><a class="header-anchor" href="#form表单格式数据-form-data" aria-hidden="true">#</a> form表单格式数据(form-data)</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> fastapi <span class="token keyword">import</span> FastAPI<span class="token punctuation">,</span> Form
<span class="token keyword">import</span> uvicorn

app <span class="token operator">=</span> FastAPI<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>post</span><span class="token punctuation">(</span><span class="token string">&quot;/login&quot;</span><span class="token punctuation">)</span>
<span class="token comment"># data 就是接口传递的 json 数据</span>
<span class="token keyword">def</span> <span class="token function">login</span><span class="token punctuation">(</span>username <span class="token operator">=</span> Form<span class="token punctuation">(</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">,</span> password <span class="token operator">=</span> Form<span class="token punctuation">(</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;username&quot;</span><span class="token punctuation">:</span> username<span class="token punctuation">,</span>
    <span class="token string">&quot;password&quot;</span><span class="token punctuation">:</span> password
  <span class="token punctuation">}</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
  uvicorn<span class="token punctuation">.</span>run<span class="token punctuation">(</span>
    app<span class="token operator">=</span><span class="token string">&quot;main:app&quot;</span><span class="token punctuation">,</span>
    host<span class="token operator">=</span><span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
    port<span class="token operator">=</span><span class="token number">8000</span><span class="token punctuation">,</span>
    <span class="token builtin">reload</span><span class="token operator">=</span><span class="token boolean">True</span>
  <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完成上面的步骤后，我们会发现它提示：<code>Form data requires &quot;python-multipart&quot; to be installed.</code>，即我们需要<code>pip install python-multipart</code>安装这个模块后 ，python 才有处理 form 表单数据的能力。</p><p>等待安装完成后，再次运行程序，就可以看到返回结果了。</p><h2 id="返回自定义信息、html、文件" tabindex="-1"><a class="header-anchor" href="#返回自定义信息、html、文件" aria-hidden="true">#</a> 返回自定义信息、html、文件</h2><h3 id="返回定制信息" tabindex="-1"><a class="header-anchor" href="#返回定制信息" aria-hidden="true">#</a> 返回定制信息</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> fastapi <span class="token keyword">import</span> FastAPI
<span class="token comment"># 导入定制返回信息的方法</span>
<span class="token keyword">from</span> fastapi<span class="token punctuation">.</span>responses <span class="token keyword">import</span> JSONResponse
<span class="token keyword">import</span> uvicorn

app <span class="token operator">=</span> FastAPI<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">&quot;/user&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token triple-quoted-string string">&quot;&quot;&quot;
    JSONResponse(): 定制返回信息
    content: 返回的数据信息
    status_code: 状态码
    headers: 请求头
  &quot;&quot;&quot;</span>
  <span class="token keyword">return</span> JSONResponse<span class="token punctuation">(</span>content<span class="token operator">=</span><span class="token punctuation">{</span>
      <span class="token string">&quot;msg&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;this is message&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    status_code<span class="token operator">=</span><span class="token number">202</span><span class="token punctuation">,</span>
    headers<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;A&quot;</span><span class="token punctuation">}</span>
  <span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
  uvicorn<span class="token punctuation">.</span>run<span class="token punctuation">(</span>
    app<span class="token operator">=</span><span class="token string">&quot;main:app&quot;</span><span class="token punctuation">,</span>
    host<span class="token operator">=</span><span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
    port<span class="token operator">=</span><span class="token number">8000</span><span class="token punctuation">,</span>
    <span class="token builtin">reload</span><span class="token operator">=</span><span class="token boolean">True</span>
  <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="返回html片段" tabindex="-1"><a class="header-anchor" href="#返回html片段" aria-hidden="true">#</a> 返回html片段</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> fastapi <span class="token keyword">import</span> FastAPI
<span class="token comment"># 导入定制返回html的方法</span>
<span class="token keyword">from</span> fastapi<span class="token punctuation">.</span>responses <span class="token keyword">import</span> HTMLResponse
<span class="token keyword">import</span> uvicorn

app <span class="token operator">=</span> FastAPI<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">&quot;/user&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  html_content <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;
    &lt;html&gt;
      &lt;body&gt;
        &lt;div&gt; 这是一个 html 片段 &lt;/div&gt;
      &lt;/body&gt;
    &lt;/html&gt;
  &quot;&quot;&quot;</span>
  <span class="token keyword">return</span> HTMLResponse<span class="token punctuation">(</span>content<span class="token operator">=</span>html_content<span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
  uvicorn<span class="token punctuation">.</span>run<span class="token punctuation">(</span>
    app<span class="token operator">=</span><span class="token string">&quot;main:app&quot;</span><span class="token punctuation">,</span>
    host<span class="token operator">=</span><span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
    port<span class="token operator">=</span><span class="token number">8000</span><span class="token punctuation">,</span>
    <span class="token builtin">reload</span><span class="token operator">=</span><span class="token boolean">True</span>
  <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="返回文件" tabindex="-1"><a class="header-anchor" href="#返回文件" aria-hidden="true">#</a> 返回文件</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> fastapi <span class="token keyword">import</span> FastAPI
<span class="token comment"># 导入定制返回文件的方法</span>
<span class="token keyword">from</span> fastapi<span class="token punctuation">.</span>responses <span class="token keyword">import</span> FileResponse
<span class="token keyword">import</span> uvicorn

app <span class="token operator">=</span> FastAPI<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">&quot;/user&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  file_path <span class="token operator">=</span> <span class="token string">&quot;seleniumDemo/codeimgs/fullbg.jpg&quot;</span>
  <span class="token comment"># 如果不填写 filename 字段，则不会弹出下载按钮，而是直接访问</span>
  <span class="token keyword">return</span> FileResponse<span class="token punctuation">(</span>file_path<span class="token punctuation">,</span> filename<span class="token operator">=</span><span class="token string">&quot;test.jpg&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
  uvicorn<span class="token punctuation">.</span>run<span class="token punctuation">(</span>
    app<span class="token operator">=</span><span class="token string">&quot;main:app&quot;</span><span class="token punctuation">,</span>
    host<span class="token operator">=</span><span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
    port<span class="token operator">=</span><span class="token number">8000</span><span class="token punctuation">,</span>
    <span class="token builtin">reload</span><span class="token operator">=</span><span class="token boolean">True</span>
  <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jinja2模板返回html页面" tabindex="-1"><a class="header-anchor" href="#jinja2模板返回html页面" aria-hidden="true">#</a> jinja2模板返回html页面</h2><p>需要安装模块<code>pip install jinja2</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> fastapi <span class="token keyword">import</span> FastAPI<span class="token punctuation">,</span> Request
<span class="token keyword">from</span> fastapi<span class="token punctuation">.</span>responses <span class="token keyword">import</span> FileResponse
<span class="token keyword">from</span> fastapi<span class="token punctuation">.</span>templating <span class="token keyword">import</span> Jinja2Templates
<span class="token keyword">import</span> uvicorn

app <span class="token operator">=</span> FastAPI<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 实例化模板，告诉解析器html文件在哪个文件夹</span>
template <span class="token operator">=</span> Jinja2Templates<span class="token punctuation">(</span><span class="token string">&quot;file&quot;</span><span class="token punctuation">)</span>

<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span>
<span class="token comment"># 这个 username 表示 query 参数</span>
<span class="token keyword">def</span> <span class="token function">user</span><span class="token punctuation">(</span>username<span class="token punctuation">,</span> req<span class="token punctuation">:</span> Request<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token comment"># 不填写 content={&quot;request&quot;: req}会报错：Internal Server Error</span>
  <span class="token comment"># index.html 表示要解析的文件名</span>
  <span class="token comment"># 这个 name 表示 username 在前端页面中的映射名称，在标签中书写{{name}}即可使用</span>
  <span class="token keyword">return</span> template<span class="token punctuation">.</span>TemplateResponse<span class="token punctuation">(</span><span class="token string">&quot;index.html&quot;</span><span class="token punctuation">,</span> context<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;request&quot;</span><span class="token punctuation">:</span> req<span class="token punctuation">,</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> username<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
  uvicorn<span class="token punctuation">.</span>run<span class="token punctuation">(</span>
    app<span class="token operator">=</span><span class="token string">&quot;main:app&quot;</span><span class="token punctuation">,</span>
    host<span class="token operator">=</span><span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
    port<span class="token operator">=</span><span class="token number">8000</span><span class="token punctuation">,</span>
    <span class="token builtin">reload</span><span class="token operator">=</span><span class="token boolean">True</span>
  <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22);function k(v,m){const a=l("ExternalLinkIcon");return e(),p("div",null,[u,n("p",null,[n("a",r,[o("教程 - 用户指南 - 简介 - FastAPI (tiangolo.com)"),i(a)])]),d])}const h=t(c,[["render",k],["__file","FastAPI.html.vue"]]);export{h as default};
