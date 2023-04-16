import{_ as e,M as t,p as i,q as c,R as n,t as s,N as p,W as r,S as a}from"./framework-8c007374.js";const o={},d=a('<h1 id="教育文件" tabindex="-1"><a class="header-anchor" href="#教育文件" aria-hidden="true">#</a> 教育文件</h1><p><a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0;" src="https://mirrors.creativecommons.org/presskit/buttons/80x15/svg/by-nc-sa.svg"></a></p><p><strong>教育文件</strong>（<strong>Education File</strong>）是指附加包内以<code>education.json</code>为文件名的文件，根据用途分为<strong>教育元数据文件</strong>（<strong>Education Metadata File</strong>）和<strong>教育设置文件</strong>（<strong>Education Settings File</strong>）两种。</p><div class="treeview"><ul><li><span class="sprite" style="background-image:url(https://wiki.mcbe-dev.net/w/images/9/92/FileCSS.png?format=original);background-position:-112px -128px;background-size:128px auto;height:16px;width:16px;"></span> <code>wt</code> 世界模板<ul><li><span class="sprite" style="background-image:url(https://wiki.mcbe-dev.net/w/images/9/92/FileCSS.png?format=original);background-position:-0px -80px;background-size:128px auto;height:16px;width:16px;"></span> <code>education.json</code></li></ul></li></ul></div><h2 id="教育元数据" tabindex="-1"><a class="header-anchor" href="#教育元数据" aria-hidden="true">#</a> 教育元数据</h2>',5),u=n("code",null,"has_education_metadata",-1),h=n("code",null,"true",-1),m=a(`<h3 id="模式" tabindex="-1"><a class="header-anchor" href="#模式" aria-hidden="true">#</a> 模式</h3><div class="language-schema line-numbers-mode" data-ext="schema"><pre class="language-schema"><code><span class="hljs-strong">object</span> <span class="hljs-string">&quot;edu_metadata&quot;</span> <span class="hljs-comment">// 注：根对象的键名仅在报错中出现，无需且不能在文件中填写</span>
{
    <span class="hljs-strong">enumerated_value</span> <span class="hljs-string">&quot;type&quot;</span>&lt;<span class="hljs-string">&quot;world&quot;</span>, <span class="hljs-string">&quot;non_world&quot;</span>&gt; : <span class="hljs-literal">opt</span> <span class="hljs-comment">// 该教育版包的课程类型，分为世界课程和非世界课程</span>
    <span class="hljs-strong">object</span> <span class="hljs-string">&quot;content&quot;</span>
    {
        <span class="hljs-strong">int</span> <span class="hljs-string">&quot;estimated_time&quot;</span> <span class="hljs-comment">// 预计完成该课程用时</span>
        <span class="hljs-strong">string</span> <span class="hljs-string">&quot;description&quot;</span> <span class="hljs-comment">// 该课程描述</span>
        <span class="hljs-strong">string</span>  <span class="hljs-string">&quot;goals&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// 该课程的课程目标</span>
        <span class="hljs-strong">array</span> <span class="hljs-string">&quot;tasks&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// 该课程的课程任务</span>
        {
            <span class="hljs-strong">string</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
        }
        <span class="hljs-strong">array</span> <span class="hljs-string">&quot;instructions&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// 该课程的课程指导</span>
        {
            <span class="hljs-strong">string</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
        }
        <span class="hljs-strong">string</span> <span class="hljs-string">&quot;link_to_more&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// 更多连接</span>
        <span class="hljs-strong">int</span> <span class="hljs-string">&quot;order&quot;</span> <span class="hljs-comment">// 该课程的课程顺序</span>
        <span class="hljs-strong">enumerated_value</span> <span class="hljs-string">&quot;role&quot;</span>&lt;<span class="hljs-string">&quot;student_and_teacher&quot;</span>, <span class="hljs-string">&quot;teacher&quot;</span>&gt; : <span class="hljs-literal">opt</span> <span class="hljs-comment">// 该课程的使用者身份</span>
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="教育设置" tabindex="-1"><a class="header-anchor" href="#教育设置" aria-hidden="true">#</a> 教育设置</h2><p>教育设置文件位于存档的根目录下，用于提供一些存档的额外设置。</p><h3 id="模式-1" tabindex="-1"><a class="header-anchor" href="#模式-1" aria-hidden="true">#</a> 模式</h3><div class="language-schema line-numbers-mode" data-ext="schema"><pre class="language-schema"><code><span class="hljs-strong">object</span>
{
    <span class="hljs-strong">object</span> <span class="hljs-string">&quot;codebuilder&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// 该存档中代码构建器的设置</span>
    {
        <span class="hljs-strong">string</span> <span class="hljs-string">&quot;defaulturi&quot;</span> <span class="hljs-comment">// 该存档中代码构建器展示的默认URI</span>
        <span class="hljs-strong">string</span> <span class="hljs-string">&quot;title&quot;</span> <span class="hljs-comment">// 代码构建器的标题</span>
        <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;canResize&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// 代码构建器是否可以缩放，默认为\`true\`</span>
        <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;disableLegacyTitleBar&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// 是否禁用旧版标题栏</span>
        <span class="hljs-strong">object</span> <span class="hljs-string">&quot;capabilities&quot;</span> : <span class="hljs-literal">opt</span>
        {
            <span class="hljs-strong">object</span> <span class="hljs-string">&quot;agent&quot;</span> : <span class="hljs-literal">opt</span>
            {
                <span class="hljs-strong">object</span> <span class="hljs-string">&quot;permissions&quot;</span> : <span class="hljs-literal">opt</span>
                {
                    <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;isWorldbuilder&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// 是否为世界构建者。目前已移除</span>
                    <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;canModifyBlocks&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// 是否可以修改方块</span>
                }
            }
        }
    }
    <span class="hljs-strong">object</span> <span class="hljs-string">&quot;externalLink&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// 外部链接</span>
    {
        <span class="hljs-strong">string</span> <span class="hljs-string">&quot;url&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// 该链接的URL</span>
        <span class="hljs-strong">string</span> <span class="hljs-string">&quot;displayName&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// 该链接显示的名称</span>
    }
    <span class="hljs-strong">object</span> <span class="hljs-string">&quot;camera&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// 该存档中摄像机方块的设置</span>
    {
        <span class="hljs-strong">enumerated_value</span> <span class="hljs-string">&quot;filter&quot;</span>&lt;<span class="hljs-string">&quot;grayscale&quot;</span>&gt; : <span class="hljs-literal">opt</span> <span class="hljs-comment">// 摄像机的过滤器</span>
        <span class="hljs-strong">enumerated_value</span> <span class="hljs-string">&quot;border&quot;</span>&lt;<span class="hljs-string">&quot;borderpath&quot;</span>&gt; : <span class="hljs-literal">opt</span> <span class="hljs-comment">// 摄像机的边框</span>
    }
    <span class="hljs-strong">object</span> <span class="hljs-string">&quot;commands&quot;</span> : <span class="hljs-literal">opt</span>
    {
        <span class="hljs-strong">array</span> <span class="hljs-string">&quot;hiddenFromPlayer&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// 需要将命令旗标设置为从玩家起点隐藏的命令，取并</span>
        {
            <span class="hljs-strong">string</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// 命令名，支持在命令名前使用\`!\`表示非运算，支持\`*\`代表全部命令</span>
        }
        <span class="hljs-strong">array</span> <span class="hljs-string">&quot;hiddenFromAutomation&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// 需要将命令旗标设置为从自动化起点隐藏的命令，取并</span>
        {
            <span class="hljs-strong">string</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// 命令名，支持在命令名前使用\`!\`表示非运算，支持\`*\`代表全部命令</span>
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function v(g,j){const l=t("RouterLink");return i(),c("div",null,[d,n("p",null,[s("教育元数据文件位于附加包的根目录下，在"),p(l,{to:"/data-driven/general/manifest.html"},{default:r(()=>[s("清单文件")]),_:1}),s("的"),u,s("为"),h,s("时被读取，用于展示该附加包的教育基本信息。")]),m])}const q=e(o,[["render",v],["__file","education.html.vue"]]);export{q as default};
