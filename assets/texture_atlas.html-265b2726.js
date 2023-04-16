import{_ as l,M as e,p as t,q as i,R as s,t as n,N as c,S as o}from"./framework-8c007374.js";const p={},r=o(`<h1 id="图集定义文件" tabindex="-1"><a class="header-anchor" href="#图集定义文件" aria-hidden="true">#</a> 图集定义文件</h1><p><a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0;" src="https://mirrors.creativecommons.org/presskit/buttons/80x15/svg/by-nc-sa.svg"></a></p><p><strong>图集定义文件</strong>（<strong>Atlas Definition File</strong>）用于定义一个图集，位于资源包的<code>textures</code>文件夹内，共有两个文件，分别定义物品图集和地形图集，文件名分别硬编码为<code>item_texture.json</code>和<code>terrain_texture.json</code>。</p><div class="treeview"><ul><li><span class="sprite" style="background-image:url(https://wiki.mcbe-dev.net/w/images/9/92/FileCSS.png?format=original);background-position:-112px -128px;background-size:128px auto;height:16px;width:16px;"></span> <code>rp</code> 资源包<ul><li><span class="sprite" style="background-image:url(https://wiki.mcbe-dev.net/w/images/9/92/FileCSS.png?format=original);background-position:-112px -128px;background-size:128px auto;height:16px;width:16px;"></span> <code>textures</code><ul><li><span class="sprite" style="background-image:url(https://wiki.mcbe-dev.net/w/images/9/92/FileCSS.png?format=original);background-position:-0px -80px;background-size:128px auto;height:16px;width:16px;"></span> <code>item_texture.json</code></li><li><span class="sprite" style="background-image:url(https://wiki.mcbe-dev.net/w/images/9/92/FileCSS.png?format=original);background-position:-0px -80px;background-size:128px auto;height:16px;width:16px;"></span> <code>terrain_texture.json</code></li></ul></li></ul></li></ul></div><h2 id="模式" tabindex="-1"><a class="header-anchor" href="#模式" aria-hidden="true">#</a> 模式</h2><p>两个图集定义文件共享同一种文件模式。</p><div class="language-schema line-numbers-mode" data-ext="schema"><pre class="language-schema"><code><span class="hljs-strong">object</span>
{
    <span class="hljs-strong">int</span> <span class="hljs-string">&quot;padding&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// 该图集中所有纹理在合成整张图像时所具有的内边距，默认为\`0\`</span>
    <span class="hljs-strong">int</span> <span class="hljs-string">&quot;num_mip_levels&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// 该图集的MIP级别的数目，默认为\`0\`</span>
    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;default_leather_color&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// 该图集的默认皮革颜色，格式为\`#RGBA\`</span>
    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;default_horse_leather_color&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// 该图集的默认马匹皮革颜色，格式为\`#RGBA\`</span>
    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;texture_name&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// 图集页的资源名称，对于\`item_texture.json\`文件，请填写\`atlas.item\`，对于\`terrain_texture.json\`文件，请填写\`atlas.terrain\`，接受其他名称，但这将导致创建一个新的图集页，文件无法与原版的该图集定义合并，一些硬编码逻辑亦将失效，默认为\`atlas.terrain\`</span>
    <span class="hljs-strong">object</span> <span class="hljs-string">&quot;texture_data&quot;</span> <span class="hljs-comment">// 该图集的纹理数据</span>
    {
        <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;texture reference name&gt;&quot;</span> <span class="hljs-comment">// 该图集中一个定义的纹理图块及其名称</span>
        {
            <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;quad&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// 默认为\`false\`</span>
            <span class="hljs-strong">element_collection</span> <span class="hljs-string">&quot;textures&quot;</span> <span class="hljs-comment">// 该纹理的路径的合集</span>
            <span class="hljs-strong">float</span> <span class="hljs-string">&quot;mip_fade_amount&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// MIP淡入淡出量，默认为\`0\`</span>
            <span class="hljs-strong">color</span> <span class="hljs-string">&quot;mip_fade_color&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// MIP淡入淡出颜色，默认为\`[0, 0, 0, 0]\`</span>
            <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;additive&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// 是否可叠加，默认为\`false\`</span>
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="element-collection" tabindex="-1"><a class="header-anchor" href="#element-collection" aria-hidden="true">#</a> <code>element_collection</code></h3><div class="language-schema line-numbers-mode" data-ext="schema"><pre class="language-schema"><code><span class="hljs-strong">element</span> <span class="hljs-comment">// 一个纹理变种的路径</span>
<span class="hljs-strong">array</span>
{
    <span class="hljs-strong">element</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// 一个纹理变种的路径</span>
}
<span class="hljs-strong">object</span>
{
    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;variations&quot;</span>
    {
        <span class="hljs-strong">element</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// 一个纹理变种的路径</span>
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="element" tabindex="-1"><a class="header-anchor" href="#element" aria-hidden="true">#</a> <code>element</code></h3><div class="language-schema line-numbers-mode" data-ext="schema"><pre class="language-schema"><code><span class="hljs-strong">string</span> <span class="hljs-comment">// 一个纹理文件相对于资源包根目录的不具有扩展名的路径</span>
<span class="hljs-strong">object</span>
{
    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;path&quot;</span> <span class="hljs-comment">// 一个纹理文件相对于资源包根目录的不具有扩展名的路径</span>
    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;tint_map_path&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// 染色贴图的路径</span>
    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;overlay_color&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// 覆盖层颜色，格式为\`#RGBA\`</span>
    <span class="hljs-strong">float</span> <span class="hljs-string">&quot;mip_fade_amount&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// 该变种的MIP淡入淡出量，默认为\`0\`</span>
    <span class="hljs-strong">color</span> <span class="hljs-string">&quot;mip_fade_color&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// 该变种的MIP淡入淡出颜色，默认为\`[0, 0, 0, 0]\`</span>
    <span class="hljs-strong">object</span> <span class="hljs-string">&quot;tint_base_color&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// 该变种的多通道染色基色</span>
    {
        <span class="hljs-strong">color</span> <span class="hljs-string">&quot;r_color&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// R通道</span>
        <span class="hljs-strong">color</span> <span class="hljs-string">&quot;g_color&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// G通道</span>
        <span class="hljs-strong">color</span> <span class="hljs-string">&quot;b_color&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// B通道</span>
        <span class="hljs-strong">color</span> <span class="hljs-string">&quot;a_color&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// A通道</span>
    }
    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;tint_color&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// 该变种的单通道染色颜色，格式为\`#RGBA\`</span>
    <span class="hljs-strong">object</span> <span class="hljs-string">&quot;tint_color&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// 该变种的多通道染色颜色</span>
    {
        <span class="hljs-strong">color</span> <span class="hljs-string">&quot;r_color&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// R通道</span>
        <span class="hljs-strong">color</span> <span class="hljs-string">&quot;g_color&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// G通道</span>
        <span class="hljs-strong">color</span> <span class="hljs-string">&quot;b_color&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// B通道</span>
        <span class="hljs-strong">color</span> <span class="hljs-string">&quot;a_color&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// A通道</span>
    }
    <span class="hljs-strong">float</span> <span class="hljs-string">&quot;weight&quot;</span> <span class="hljs-comment">// 该变种的权重</span>
    <span class="hljs-strong">texture_isotropic</span> <span class="hljs-string">&quot;isotropic&quot;</span> <span class="hljs-comment">// 该变种的迷向性</span>
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="color" tabindex="-1"><a class="header-anchor" href="#color" aria-hidden="true">#</a> <code>color</code></h3><div class="language-schema line-numbers-mode" data-ext="schema"><pre class="language-schema"><code><span class="hljs-strong">string</span> <span class="hljs-comment">// 格式为\`#RGBA\`</span>
<span class="hljs-strong">array</span>
{
    <span class="hljs-strong">int</span> <span class="hljs-string">&quot;[0..0]&quot;</span> <span class="hljs-comment">// R通道</span>
    <span class="hljs-strong">int</span> <span class="hljs-string">&quot;[1..1]&quot;</span> <span class="hljs-comment">// G通道</span>
    <span class="hljs-strong">int</span> <span class="hljs-string">&quot;[2..2]&quot;</span> <span class="hljs-comment">// B通道</span>
    <span class="hljs-strong">int</span> <span class="hljs-string">&quot;[3..3]&quot;</span> <span class="hljs-comment">// A通道</span>
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="texture-isotropic" tabindex="-1"><a class="header-anchor" href="#texture-isotropic" aria-hidden="true">#</a> <code>texture_isotropic</code></h3><div class="language-schema line-numbers-mode" data-ext="schema"><pre class="language-schema"><code><span class="hljs-strong">bool</span> <span class="hljs-comment">// 为各面开启迷向面，默认为\`false\`</span>
<span class="hljs-strong">object</span> <span class="hljs-comment">// 三面式解析</span>
{
    <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;up&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// 为上面开启迷向面，默认为\`false\`</span>
    <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;down&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// 为下面开启迷向面，默认为\`false\`</span>
    <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;side&quot;</span> <span class="hljs-comment">// 为四个侧面开启迷向面，默认为\`false\`，如不存在该字段则按照六面式解析</span>
}
<span class="hljs-strong">object</span> <span class="hljs-comment">// 六面式解析</span>
{
    <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;up&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// 为上面开启迷向面，默认为\`false\`</span>
    <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;down&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// 为下面开启迷向面，默认为\`false\`</span>
    <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;north&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// 为北面开启迷向面，默认为\`false\`</span>
    <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;south&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// 为南面开启迷向面，默认为\`false\`</span>
    <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;west&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// 为西面开启迷向面，默认为\`false\`</span>
    <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;east&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// 为东面开启迷向面，默认为\`false\`</span>
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="原版用例" tabindex="-1"><a class="header-anchor" href="#原版用例" aria-hidden="true">#</a> 原版用例</h2><table><thead><tr><th>图集页的资源名称</th><th>描述</th></tr></thead><tbody><tr><td><code>atlas.item</code></td><td>物品图集，由数据驱动定义，具有一些硬编码逻辑，主要用于UI中的物品图标显示和手持物品纹理渲染</td></tr><tr><td><code>atlas.terrain</code></td><td>地形图集，由数据驱动定义，具有一些硬编码逻辑，主要用于方块纹理渲染</td></tr><tr><td><code>atlas.banner</code></td><td>旗帜图集，由硬编码定义</td></tr></tbody></table><h2 id="外部链接" tabindex="-1"><a class="header-anchor" href="#外部链接" aria-hidden="true">#</a> 外部链接</h2>`,18),d={href:"https://wiki.bedrock.dev/blocks/block-texture-variation.html",target:"_blank",rel:"noopener noreferrer"};function h(m,u){const a=e("ExternalLinkIcon");return t(),i("div",null,[r,s("ul",null,[s("li",null,[s("a",d,[n("Block Texture Variation"),c(a)]),n(" - Bedrock Wiki")])])])}const j=l(p,[["render",h],["__file","texture_atlas.html.vue"]]);export{j as default};
