import{_ as i,M as l,p as o,q as r,R as s,t as n,N as e,S as c}from"./framework-8c007374.js";const p={},d=s("h1",{id:"动态纹理定义文件",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#动态纹理定义文件","aria-hidden":"true"},"#"),n(" 动态纹理定义文件")],-1),u=s("p",null,[s("a",{rel:"license",href:"http://creativecommons.org/licenses/by-nc-sa/4.0/"},[s("img",{alt:"Creative Commons License",style:{"border-width":"0"},src:"https://mirrors.creativecommons.org/presskit/buttons/80x15/svg/by-nc-sa.svg"})])],-1),h=s("strong",null,"动态纹理",-1),m=s("strong",null,"Dynamic Texture",-1),_=s("strong",null,"动画纹理",-1),g=s("strong",null,"Animated Texture",-1),b=s("strong",null,"滴答纹理",-1),v=s("strong",null,"Ticking Texture",-1),x=s("strong",null,"翻书纹理",-1),j=s("strong",null,"Flipbook Texture",-1),k=s("code",null,"textures",-1),E=s("code",null,"flipbook_textures.json",-1),f=s("code",null,"flipbook_textures_items.json",-1),A=s("strong",null,"翻书动画",-1),B=s("strong",null,"Flipbook Animation",-1),q=s("span",{style:{color:"rgb(255, 85, 85)"}},[n("在中国版亦称作"),s("strong",null,"序列帧动画"),n("（"),s("strong",null,"Frame Animation"),n("）")],-1),y={class:"treeview"},w=s("span",{class:"sprite",style:{"background-image":"url(https://wiki.mcbe-dev.net/w/images/9/92/FileCSS.png?format=original)","background-position":"-112px -128px","background-size":"128px auto",height:"16px",width:"16px"}},null,-1),F=s("code",null,"rp",-1),S=s("span",{class:"sprite",style:{"background-image":"url(https://wiki.mcbe-dev.net/w/images/9/92/FileCSS.png?format=original)","background-position":"-112px -128px","background-size":"128px auto",height:"16px",width:"16px"}},null,-1),C=s("code",null,"textures",-1),T=s("li",null,[s("span",{class:"sprite",style:{"background-image":"url(https://wiki.mcbe-dev.net/w/images/9/92/FileCSS.png?format=original)","background-position":"-0px -80px","background-size":"128px auto",height:"16px",width:"16px"}}),n(),s("code",null,"flipbook_textures.json")],-1),N=s("span",{class:"sprite",style:{"background-image":"url(https://wiki.mcbe-dev.net/w/images/9/92/FileCSS.png?format=original)","background-position":"-0px -80px","background-size":"128px auto",height:"16px",width:"16px"}},null,-1),z=s("code",null,"flipbook_textures_items.json",-1),V=c(`<h2 id="模式" tabindex="-1"><a class="header-anchor" href="#模式" aria-hidden="true">#</a> 模式</h2><p>两个动态纹理定义文件共享同一种文件模式。</p><div class="language-schema line-numbers-mode" data-ext="schema"><pre class="language-schema"><code><span class="hljs-strong">array</span>
{
    <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// 一个动态纹理定义</span>
    {
        <span class="hljs-strong">string</span> <span class="hljs-string">&quot;flipbook_texture&quot;</span> <span class="hljs-comment">// 动态纹理的资源路径，纹理文件相对于资源包根目录的不具有扩展名的路径</span>
        <span class="hljs-strong">string</span> <span class="hljs-string">&quot;atlas_tile&quot;</span> <span class="hljs-comment">// 该纹理文件在对应图集中的图块的引用名称</span>
        <span class="hljs-strong">int</span> <span class="hljs-string">&quot;atlas_index&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// 该动态纹理的图集索引值，即对应的方块变体序数，默认为\`0\`</span>
        <span class="hljs-strong">int</span> <span class="hljs-string">&quot;replicate&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// 纹理文件中贴图的列数，默认为\`1\`</span>
        <span class="hljs-strong">int</span> <span class="hljs-string">&quot;ticks_per_frame&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// 每帧持续刻数，默认为\`1\`</span>
        <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;blend_frames&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// 是否在各帧之间融合过渡，默认为\`true\`</span>
        <span class="hljs-strong">array</span> <span class="hljs-string">&quot;frames&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// 帧顺序，将按照该字段定义的顺序播放各帧，默认按照帧索引值从小到大播放</span>
        {
            <span class="hljs-strong">int</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// 帧在纹理文件中的索引值，即自上而下的序数，从\`0\`开始计数</span>
        }
        <span class="hljs-strong">int</span> <span class="hljs-string">&quot;atlas_tile_variant&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// 该动态纹理在对应图集的纹理图块中所在的变体的序数，默认为\`0\`</span>
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="外部链接" tabindex="-1"><a class="header-anchor" href="#外部链接" aria-hidden="true">#</a> 外部链接</h2>`,4),L={href:"https://wiki.bedrock.dev/blocks/flipbook-textures.html",target:"_blank",rel:"noopener noreferrer"},D={href:"https://mc.163.com/dev/mcmanual/mc-dev/mcguide/20-%E7%8E%A9%E6%B3%95%E5%BC%80%E5%8F%91/15-%E8%87%AA%E5%AE%9A%E4%B9%89%E6%B8%B8%E6%88%8F%E5%86%85%E5%AE%B9/1-%E8%87%AA%E5%AE%9A%E4%B9%89%E7%89%A9%E5%93%81/6-%E8%87%AA%E5%AE%9A%E4%B9%89%E7%89%A9%E5%93%81%E8%B4%B4%E5%9B%BE%E4%BD%BF%E7%94%A8%E5%BA%8F%E5%88%97%E5%B8%A7%E5%8A%A8%E7%94%BB.html",target:"_blank",rel:"noopener noreferrer"};function I(M,R){const t=l("Badge"),a=l("ExternalLinkIcon");return o(),r("div",null,[d,u,s("p",null,[h,n("（"),m,n("），又称"),_,n("（"),g,n("）、"),b,n("（"),v,n("）和"),x,n("（"),j,n("），其定义文件用于定义纹理动画，位于资源包的"),k,n("文件夹内，共有两个文件，分别定义方块 "),e(t,{type:"tip",text:"通用",vertical:"super"}),n(" 和物品 "),e(t,{type:"danger",text:"仅中国版",vertical:"super"}),n(" 的动态纹理，文件名分别硬编码为"),E,n("和"),f,n("。其定义的这种纹理动画被称为"),A,n("（"),B,n("），"),q,n("。")]),s("div",y,[s("ul",null,[s("li",null,[w,n(),F,n(" 资源包"),s("ul",null,[s("li",null,[S,n(),C,s("ul",null,[T,s("li",null,[N,n(),z,n(),e(t,{type:"danger",text:"仅中国版",vertical:"super"})])])])])])])]),V,s("ul",null,[s("li",null,[s("a",L,[n("Flipbook Textures"),e(a)]),n(" - Bedrock Wiki")]),s("li",null,[s("a",D,[n("自定义物品贴图使用序列帧动画"),e(a)]),n(" - 我的世界开发者官网")])])])}const G=i(p,[["render",I],["__file","dynamic_textures.html.vue"]]);export{G as default};
