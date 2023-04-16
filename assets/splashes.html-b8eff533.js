import{_ as l,M as e,p as i,q as t,R as s,t as n,N as r,S as c}from"./framework-8c007374.js";const p={},o=c(`<h1 id="闪烁标语文件" tabindex="-1"><a class="header-anchor" href="#闪烁标语文件" aria-hidden="true">#</a> 闪烁标语文件</h1><p><a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0;" src="https://mirrors.creativecommons.org/presskit/buttons/80x15/svg/by-nc-sa.svg"></a></p><p><strong>闪烁标语</strong>（<strong>Splash</strong>）文件位于资源包根目录下，文件名硬编码为<code>splashes.json</code>。</p><div class="treeview"><ul><li><span class="sprite" style="background-image:url(https://wiki.mcbe-dev.net/w/images/9/92/FileCSS.png?format=original);background-position:-112px -128px;background-size:128px auto;height:16px;width:16px;"></span> <code>rp</code> 资源包<ul><li><span class="sprite" style="background-image:url(https://wiki.mcbe-dev.net/w/images/9/92/FileCSS.png?format=original);background-position:-0px -80px;background-size:128px auto;height:16px;width:16px;"></span> <code>splashes.json</code></li></ul></li></ul></div><h2 id="模式" tabindex="-1"><a class="header-anchor" href="#模式" aria-hidden="true">#</a> 模式</h2><div class="language-schema line-numbers-mode" data-ext="schema"><pre class="language-schema"><code><span class="hljs-strong">object</span>
{
    <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;canMerge&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// 该闪烁标语文件是否可以与各版本的闪烁标语文件合并，例如父包和子包的闪烁标语合并</span>
    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;splashes&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// 无条件显示的闪烁标语列表</span>
    {
        <span class="hljs-strong">string</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// 闪烁标语文本，支持i18n</span>
    }
    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;conditional&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// 需要满足条件才可以显示的闪烁标语列表</span>
    {
        <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// 一组需要满足特定条件的闪烁标语</span>
        {
            <span class="hljs-strong">object</span> <span class="hljs-string">&quot;requires&quot;</span> <span class="hljs-comment">// 需要满足的条件</span>
            {
                <span class="hljs-strong">array</span> <span class="hljs-string">&quot;platforms&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// 需要满足的平台</span>
                {
                    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                }
                <span class="hljs-strong">array</span> <span class="hljs-string">&quot;treatments&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// 需要满足的处理包</span>
                {
                    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                }
                <span class="hljs-strong">array</span> <span class="hljs-string">&quot;stores&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// 需要满足的商店</span>
                {
                    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                }
            }
            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;splashes&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// 满足条件后显示的闪烁标语列表</span>
            {
                <span class="hljs-strong">string</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// 闪烁标语文本，支持i18n</span>
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="外部链接" tabindex="-1"><a class="header-anchor" href="#外部链接" aria-hidden="true">#</a> 外部链接</h2>`,7),d={href:"https://minecraft.fandom.com/zh/wiki/%E9%97%AA%E7%83%81%E6%A0%87%E8%AF%AD",target:"_blank",rel:"noopener noreferrer"};function h(m,u){const a=e("ExternalLinkIcon");return i(),t("div",null,[o,s("ul",null,[s("li",null,[s("a",d,[n("闪烁标语"),r(a)]),n(" - Minecraft Wiki")])])])}const g=l(p,[["render",h],["__file","splashes.html.vue"]]);export{g as default};
