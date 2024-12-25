import{_ as a,o as e,c as s,S as d}from"./chunks/framework.65893c8f.js";const m=JSON.parse('{"title":"启动参数","description":"","frontmatter":{},"headers":[],"relativePath":"develop/advanced/startupParameter.md","filePath":"develop/advanced/startupParameter.md","lastUpdated":1735119419000}'),r={name:"develop/advanced/startupParameter.md"};function o(n,t,l,p,c,i){return e(),s("div",null,t[0]||(t[0]=[d('<h1 id="启动参数" tabindex="-1">启动参数 <a class="header-anchor" href="#启动参数" aria-label="Permalink to &quot;启动参数&quot;">​</a></h1><p>使用启动参数修改一些内置变量</p><table><thead><tr><th>参数</th><th>是否需要值</th><th>默认值</th><th>释义</th></tr></thead><tbody><tr><td>--debug</td><td>否</td><td></td><td>以 DEBUG 模式启动程序</td></tr><tr><td>--browser-width</td><td>是</td><td>1280</td><td>浏览器视窗默认宽度（px）</td></tr><tr><td>--browser-height</td><td>是</td><td>720</td><td>浏览器视窗默认高度（px）</td></tr><tr><td>--browser-render-time</td><td>是</td><td>200</td><td>浏览器默认渲染时间（ms）</td></tr><tr><td>--text-max-length</td><td>是</td><td>100</td><td>Chain 对象转换文字图片的文字长度最大值</td></tr><tr><td>--browser-page-not-close</td><td>否</td><td></td><td>取消自动关闭 playwright 的网页窗口</td></tr></tbody></table><h2 id="在-兔兔-v6-下使用" tabindex="-1">在 兔兔-v6 下使用 <a class="header-anchor" href="#在-兔兔-v6-下使用" aria-label="Permalink to &quot;在 兔兔-v6 下使用&quot;">​</a></h2><p>代码部署</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">python</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">amiya.py</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--text-max-length</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">200</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--browser-render-time</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1000</span></span></code></pre></div><p>可执行文件部署</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">AmiyaBot-v6.x.x-master.exe</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--debug</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--browser-page-not-close</span></span></code></pre></div>',8)]))}const y=a(r,[["render",o]]);export{m as __pageData,y as default};
