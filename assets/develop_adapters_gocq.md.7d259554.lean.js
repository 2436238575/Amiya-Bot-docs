import{_ as a,o as t,c as n,S as o}from"./chunks/framework.65893c8f.js";const F=JSON.parse('{"title":"go-cqhttp","description":"","frontmatter":{},"headers":[],"relativePath":"develop/adapters/gocq.md","filePath":"develop/adapters/gocq.md","lastUpdated":1735119419000}'),l={name:"develop/adapters/gocq.md"};function p(e,s,c,r,y,i){return t(),n("div",null,s[0]||(s[0]=[o(`<h1 id="go-cqhttp" tabindex="-1">go-cqhttp <a class="header-anchor" href="#go-cqhttp" aria-label="Permalink to &quot;go-cqhttp&quot;">​</a></h1><p><a href="https://docs.go-cqhttp.org/" target="_blank" rel="noreferrer">go-cqhttp</a> 以下简称 <strong>gocq</strong>。它是基于 Mirai 以及 MiraiGo 的 OneBot Golang 原生实现。</p><div class="danger custom-block"><p class="custom-block-title">注意<br></p><p>go-cq 的配置中，<code>post-format</code> 需更改为 <code>array</code>。</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># config.yml</span></span>
<span class="line"><span style="color:#F07178;">message</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;"># 上报数据类型</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;"># 可选: string, array</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">post-format</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">array</span></span></code></pre></div></div><h2 id="连接-gocq" tabindex="-1">连接 gocq <a class="header-anchor" href="#连接-gocq" aria-label="Permalink to &quot;连接 gocq&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>host</td><td>str</td><td>gocq 服务的 ip 地址</td><td></td></tr><tr><td>ws_port</td><td>int</td><td>gocq 服务的 websocket 端口</td><td></td></tr><tr><td>http_port</td><td>int</td><td>gocq 服务的 http 端口</td><td></td></tr></tbody></table><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> amiyabot</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">adapters</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">cqhttp </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> cq_http</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">qq </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">******</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;"># 机器人的 QQ 号</span></span>
<span class="line"><span style="color:#BABED8;">token </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">******</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># gocq 的 access-token</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">adapter_service </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">cq_http</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">127.0.0.1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">8080</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">5700</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">bot </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">AmiyaBot</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">appid</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">qq</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#BABED8;font-style:italic;">token</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">token</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#BABED8;font-style:italic;">adapter</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">adapter_service</span><span style="color:#89DDFF;">)</span></span></code></pre></div>`,6)]))}const d=a(l,[["render",p]]);export{F as __pageData,d as default};
