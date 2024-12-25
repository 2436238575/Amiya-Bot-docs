import{_ as a,o as t,c as o,S as n}from"./chunks/framework.65893c8f.js";const d=JSON.parse('{"title":"OneBot v11 Beta","description":"","frontmatter":{},"headers":[],"relativePath":"develop/adapters/onebot11.md","filePath":"develop/adapters/onebot11.md","lastUpdated":1735119419000}'),e={name:"develop/adapters/onebot11.md"};function l(p,s,r,c,y,D){return t(),o("div",null,s[0]||(s[0]=[n(`<h1 id="onebot-v11-beta" tabindex="-1">OneBot v11 <span class="beta-tag">Beta</span> <a class="header-anchor" href="#onebot-v11-beta" aria-label="Permalink to &quot;OneBot v11 &lt;span class=&quot;beta-tag&quot;&gt;Beta&lt;/span&gt;&quot;">​</a></h1><p><a href="https://github.com/botuniverse/onebot-11" target="_blank" rel="noreferrer">OneBot 11</a> 以下简称 <strong>ob11</strong>。该标准是从原 CKYU 平台的 CQHTTP 插件接口修改而来的通用聊天机器人应用接口标准。<br> 使用此适配器，可连接任何 OneBot 11 实现的机器人平台。</p><h2 id="连接-onebot11" tabindex="-1">连接 onebot11 <a class="header-anchor" href="#连接-onebot11" aria-label="Permalink to &quot;连接 onebot11&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>host</td><td>str</td><td>ob11 服务的 ip 地址</td><td></td></tr><tr><td>ws_port</td><td>int</td><td>ob11 服务的 websocket 端口</td><td></td></tr><tr><td>http_port</td><td>int</td><td>ob11 服务的 http 端口</td><td></td></tr></tbody></table><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> amiyabot</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">adapters</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">onebot</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">v11 </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> onebot11</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">appid </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">******</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;"># 机器人的账号（如需要）</span></span>
<span class="line"><span style="color:#BABED8;">token </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">******</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># access-token</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">adapter_service </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">onebot11</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">127.0.0.1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">8080</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">8060</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">bot </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">AmiyaBot</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">appid</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">appid</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#BABED8;font-style:italic;">token</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">token</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#BABED8;font-style:italic;">adapter</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">adapter_service</span><span style="color:#89DDFF;">)</span></span></code></pre></div>`,5)]))}const i=a(e,[["render",l]]);export{d as __pageData,i as default};
