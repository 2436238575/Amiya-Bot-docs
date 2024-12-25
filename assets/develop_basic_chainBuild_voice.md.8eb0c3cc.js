import{_ as a,o as t,c as o,S as n}from"./chunks/framework.65893c8f.js";const y=JSON.parse('{"title":"语音","description":"","frontmatter":{},"headers":[],"relativePath":"develop/basic/chainBuild/voice.md","filePath":"develop/basic/chainBuild/voice.md","lastUpdated":1735119419000}'),l={name:"develop/basic/chainBuild/voice.md"};function e(p,s,c,r,i,d){return t(),o("div",null,s[0]||(s[0]=[n(`<h1 id="语音" tabindex="-1">语音 <a class="header-anchor" href="#语音" aria-label="Permalink to &quot;语音&quot;">​</a></h1><p>发送一段 <strong>wav</strong> 格式的音频</p><div class="danger custom-block"><p class="custom-block-title">注意<br></p><p>QQ 频道机器人暂时不支持发送语音，目前仅支持官方 QQ 群、 <code>mirai-api-http</code> 和 <code>cq-http</code>。</p></div><h2 id="chain-voice" tabindex="-1">Chain().voice() <a class="header-anchor" href="#chain-voice" aria-label="Permalink to &quot;Chain().voice()&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>file</td><td>str</td><td>语音 wav 文件路径</td><td></td></tr><tr><td>title</td><td>str</td><td>语音标题</td><td>voice</td></tr></tbody></table><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">Chain</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">voice</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">file</span><span style="color:#89DDFF;">)</span></span></code></pre></div><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">bot</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on_message</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">keywords</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">def</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">_</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">data</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> Message</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">Chain</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">voice</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">阿米娅_问候.wav</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span></code></pre></div>`,7)]))}const D=a(l,[["render",e]]);export{y as __pageData,D as default};
