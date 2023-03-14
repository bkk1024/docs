import{_ as e,W as o,X as c,Y as s,Z as n,$ as p,a0 as a,C as i}from"./framework-4f54a744.js";const l={},u=a(`<h1 id="文件上传" tabindex="-1"><a class="header-anchor" href="#文件上传" aria-hidden="true">#</a> 文件上传</h1><p>文件上传实质上就是将文件内容通过<code>http</code>请求传递到服务器，至于上传类型多种多样，比如：</p><ol><li><code>FormData</code>：这种方式要设置请求头为<code>multipart/form-data</code></li><li><code>Base64</code>：这种方式要设置请求头为<code>application/json</code></li><li><code>二进制数据</code>：这种方式要设置请求头为<code>application/octet-stream</code></li></ol><p>至于其他类型，可以根据接口的具体要求来。</p><p>于前端而言，文件上传这个功能分为两部分，第一是文件上传这个组件的样式和交互，第二就是实现上传文件到服务器。我们这里不纠结样式问题，只关注上传文件这一本质的内容。</p><div class="hint-container tip"><p class="hint-container-title">注</p><p>下面实现功能是，都采用原生的<code>Ajax</code>，且都是基本的点击<code>input</code>标签实现，至于其他的接口请求方式如<code>axios | fetch</code>都大差不差。</p></div><h2 id="formdata" tabindex="-1"><a class="header-anchor" href="#formdata" aria-hidden="true">#</a> FormData</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 单个文件上传函数
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>File<span class="token punctuation">}</span></span> <span class="token parameter">file</span> 文件数据
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">onProgress</span> 上传进度处理函数
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">onFinished</span> 上传完成处理函数
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> 取消上传的方法
 */</span>
<span class="token keyword">function</span> <span class="token function">upload</span><span class="token punctuation">(</span><span class="token parameter">file<span class="token punctuation">,</span> onProgress<span class="token punctuation">,</span> onFinish</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 使用 FormData 构造函数，它就会自动设置请求头的一些配置</span>
  <span class="token keyword">const</span> form <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// 往 form 中添加字段，可以添加多个。这里是单文件，所以就一个</span>
  <span class="token comment">// 这里的 &quot;file&quot; 是上传文件的字段名，根据接口要求来</span>
  form<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;file&quot;</span><span class="token punctuation">,</span> file<span class="token punctuation">)</span>

  <span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// 监听请求完成</span>
  xhr<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 这里获取服务器返回结果</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    <span class="token comment">// 返回服务器发送过来的数据</span>
    <span class="token function">onFinish</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 监听请求进度</span>
  xhr<span class="token punctuation">.</span>upload<span class="token punctuation">.</span><span class="token function-variable function">onprogress</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 通过这个参数 e，就能拿到目前上传的一些信息，</span>
    <span class="token comment">// 如文件总大小（total）、目前已上传的大小（loaded）</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
    <span class="token comment">// 调用进度处理函数</span>
    <span class="token function">onProgress</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 请求配置：类型，路径</span>
  xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;post&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;http://test.com:8888/upload&quot;</span><span class="token punctuation">)</span>
  xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>form<span class="token punctuation">)</span>

  <span class="token comment">// 返回取消函数</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 取消请求</span>
    xhr<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="base64" tabindex="-1"><a class="header-anchor" href="#base64" aria-hidden="true">#</a> Base64</h2><p>这种方式上传一般是一个<code>json</code>类型的数据，需要告诉服务器文件的后缀名、文件的内容，这里我们规定数据格式如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;ext&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 如 .png  .jpg等</span>
    <span class="token property">&quot;file&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span> <span class="token comment">// 文件内容，base64 格式字符串</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个方式与<code>FormData</code>的区别就在于处理文件格式、请求头，其他的请求流程等都一致，如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 单个文件上传函数
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>File<span class="token punctuation">}</span></span> <span class="token parameter">file</span> 文件数据
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">onProgress</span> 上传进度处理函数
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">onFinished</span> 上传完成处理函数
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> 取消上传的方法
 */</span>
<span class="token keyword">function</span> <span class="token function">upload</span><span class="token punctuation">(</span><span class="token parameter">file<span class="token punctuation">,</span> onProgress<span class="token punctuation">,</span> onFinish</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 全局提供 xhr，以便返回取消函数</span>
  <span class="token keyword">let</span> xhr <span class="token operator">=</span> <span class="token keyword">null</span>

  <span class="token comment">// 获取文件内容的 base64 格式</span>
  <span class="token comment">// FileReader 用来读取文件</span>
  <span class="token keyword">const</span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  reader<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 获取文件后缀名</span>
    <span class="token keyword">const</span> ext <span class="token operator">=</span> <span class="token string">&quot;.&quot;</span> <span class="token operator">+</span> file<span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// e.target.result 就是文件的 base64 格式的本地路径</span>
    <span class="token comment">// 我们需要去除这个路径前面的部分，只拿 base64 格式的内容部分</span>
    <span class="token keyword">const</span> base64 <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>result<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> fileData <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">ext</span><span class="token operator">:</span> ext<span class="token punctuation">,</span>
      <span class="token literal-property property">file</span><span class="token operator">:</span> base64
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 监听请求完成</span>
    xhr<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// 这里获取服务器返回结果</span>
      <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
      <span class="token comment">// 返回服务器发送过来的数据</span>
      <span class="token function">onFinish</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 监听请求进度</span>
    xhr<span class="token punctuation">.</span>upload<span class="token punctuation">.</span><span class="token function-variable function">onprogress</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// 通过这个参数 e，就能拿到目前上传的一些信息，</span>
      <span class="token comment">// 如文件总大小（total）、目前已上传的大小（loaded）</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
      <span class="token comment">// 调用进度处理函数</span>
      <span class="token function">onProgress</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 设置请求头</span>
    xhr<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">&quot;content-type&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;application/json&quot;</span><span class="token punctuation">)</span>
    <span class="token comment">// 请求配置：类型，路径</span>
    xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;post&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;http://test.com:8888/upload&quot;</span><span class="token punctuation">)</span>
    xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>fileData<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 它是异步的方法，因此在上面使用 onload 获取完成后的文件数据并发送请求</span>
  reader<span class="token punctuation">.</span><span class="token function">readAsDataURL</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span>

  <span class="token comment">// 返回取消函数</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 取消请求</span>
    xhr<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),r={class:"hint-container tip"},d=s("p",{class:"hint-container-title"},"注",-1),k=s("code",null,"FileReader",-1),v={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader",target:"_blank",rel:"noopener noreferrer"},m=a(`<h2 id="直接发送二进制内容" tabindex="-1"><a class="header-anchor" href="#直接发送二进制内容" aria-hidden="true">#</a> 直接发送二进制内容</h2><p>这种方式与上面的方式的区别也就是请求头和文件处理格式不一致，如下</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 单个文件上传函数
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>File<span class="token punctuation">}</span></span> <span class="token parameter">file</span> 文件数据
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">onProgress</span> 上传进度处理函数
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">onFinished</span> 上传完成处理函数
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> 取消上传的方法
 */</span>
<span class="token keyword">function</span> <span class="token function">upload</span><span class="token punctuation">(</span><span class="token parameter">file<span class="token punctuation">,</span> onProgress<span class="token punctuation">,</span> onFinish</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 获取文件后缀名</span>
  <span class="token keyword">const</span> ext <span class="token operator">=</span> <span class="token string">&quot;.&quot;</span> <span class="token operator">+</span> file<span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// 监听请求完成</span>
  xhr<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 这里获取服务器返回结果</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    <span class="token comment">// 返回服务器发送过来的数据</span>
    <span class="token function">onFinish</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 监听请求进度</span>
  xhr<span class="token punctuation">.</span>upload<span class="token punctuation">.</span><span class="token function-variable function">onprogress</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 通过这个参数 e，就能拿到目前上传的一些信息，</span>
    <span class="token comment">// 如文件总大小（total）、目前已上传的大小（loaded）</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
    <span class="token comment">// 调用进度处理函数</span>
    <span class="token function">onProgress</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 设置请求头</span>
  xhr<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">&quot;content-type&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;application/octet-stream&quot;</span><span class="token punctuation">)</span>
  <span class="token comment">// 设置文件后缀名</span>
  xhr<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">&quot;x-ext&quot;</span><span class="token punctuation">,</span> ext<span class="token punctuation">)</span>
  <span class="token comment">// 请求配置：类型，路径</span>
  xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;post&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;http://test.com:8888/upload&quot;</span><span class="token punctuation">)</span>
  xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span>

  <span class="token comment">// 返回取消函数</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 取消请求</span>
    xhr<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="拓展" tabindex="-1"><a class="header-anchor" href="#拓展" aria-hidden="true">#</a> 拓展</h2><h3 id="推拽上传" tabindex="-1"><a class="header-anchor" href="#推拽上传" aria-hidden="true">#</a> 推拽上传</h3><p>拖拽上传这种方式，我们觉得没思路的地方可能就是拖拽这个方式，但其实<code>&lt;input /&gt;</code>原生就支持拖拽选择文件。因此要实现这种方式其实我们只需要将<code>input</code>的宽高设置为<code>100%</code>即可。</p><p>但是，这种方式其实也是有一点小问题的，因为可能有的浏览器不支持<code>input</code>拖拽选择文件，那么我们就可以有另一种方式：</p>`,7),b=s("code",null,"input",-1),f=s("code",null,"div",-1),h=s("code",null,"div",-1),g={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API",target:"_blank",rel:"noopener noreferrer"},q=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// 拖动进入这个元素时触发一次</span>
div<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;dragenter&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 阻止事件默认行为，因为默认情况下 div 不是一个可拖放目标</span>
  e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 拖动在这个元素上悬停时持续触发</span>
div<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;dragover&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 阻止事件默认行为，因为默认情况下 div 不是一个可拖放目标</span>
  e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 拖动在这个元素上时松开鼠标，即将内容放置在这个元素上时触发</span>
div<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;drop&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 阻止事件默认行为，因为默认情况下 div 不是一个可拖放目标</span>
  e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// 获取拖放到这个元素上的内容，这里我们获取文件</span>
  <span class="token keyword">const</span> files <span class="token operator">=</span> e<span class="token punctuation">.</span>dataTransfer<span class="token punctuation">.</span>files
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>files<span class="token punctuation">)</span>
  <span class="token comment">// 限制只能放置一个文件</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>files<span class="token punctuation">.</span>length <span class="token operator">!==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;只能放置一个文件&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 限制只能放文件，因为页面上有别的元素默认是可以拖拽的，如图片</span>
  <span class="token keyword">const</span> fileTypes <span class="token operator">=</span> e<span class="token punctuation">.</span>dataTransfer<span class="token punctuation">.</span>types
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>fileTypes<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&quot;files&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;只能放置文件&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
    
  <span class="token comment">// ... 其他的根据具体要求写，这里也要调用其他方法来触发上传文件这个操作</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function y(w,x){const t=i("ExternalLinkIcon");return o(),c("div",null,[u,s("div",r,[d,s("p",null,[n("这里使用了"),k,n("，关于它可以查看："),s("a",v,[n("FileReader - Web API 接口参考 | MDN (mozilla.org)"),p(t)]),n("。")])]),m,s("p",null,[n("假设我们的"),b,n("的父元素为一个"),f,n("，那么我们就要将"),h,n("设置为一个可拖放的元素，这就需要用到"),s("a",g,[n("HTML 拖放 API"),p(t)]),n("：")]),q])}const F=e(l,[["render",y],["__file","文件上传.html.vue"]]);export{F as default};
