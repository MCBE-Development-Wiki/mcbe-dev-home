import{_ as e,r as o,o as i,c as p,b as s,d as n,e as l,w as c,a}from"./app.563c4a69.js";const r={},u=a('<h1 id="\u6559\u80B2\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6559\u80B2\u6587\u4EF6" aria-hidden="true">#</a> \u6559\u80B2\u6587\u4EF6</h1><p><a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0;" src="https://mirrors.creativecommons.org/presskit/buttons/80x15/svg/by-nc-sa.svg"></a></p><p><strong>\u6559\u80B2\u6587\u4EF6</strong>\uFF08<strong>Education File</strong>\uFF09\u662F\u6307\u9644\u52A0\u5305\u5185\u4EE5<code>education.json</code>\u4E3A\u6587\u4EF6\u540D\u7684\u6587\u4EF6\uFF0C\u6839\u636E\u7528\u9014\u5206\u4E3A<strong>\u6559\u80B2\u5143\u6570\u636E\u6587\u4EF6</strong>\uFF08<strong>Education Metadata File</strong>\uFF09\u548C<strong>\u6559\u80B2\u8BBE\u7F6E\u6587\u4EF6</strong>\uFF08<strong>Education Settings File</strong>\uFF09\u4E24\u79CD\u3002</p><h2 id="\u6559\u80B2\u5143\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u6559\u80B2\u5143\u6570\u636E" aria-hidden="true">#</a> \u6559\u80B2\u5143\u6570\u636E</h2>',4),d=s("code",null,"has_education_metadata",-1),m=s("code",null,"true",-1),v=a(`<h3 id="\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5F0F" aria-hidden="true">#</a> \u6A21\u5F0F</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>object <span class="token string">&quot;edu_metadata&quot;</span> <span class="token comment">// \u6CE8\uFF1A\u6839\u5BF9\u8C61\u7684\u952E\u540D\u4EC5\u5728\u62A5\u9519\u4E2D\u51FA\u73B0\uFF0C\u65E0\u9700\u4E14\u4E0D\u80FD\u5728\u6587\u4EF6\u4E2D\u586B\u5199</span>
<span class="token punctuation">{</span>
    enumerated_value <span class="token string">&quot;type&quot;</span>&lt;<span class="token string">&quot;world&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;non_world&quot;</span>&gt; <span class="token operator">:</span> opt <span class="token comment">// \u8BE5\u6559\u80B2\u7248\u5305\u7684\u8BFE\u7A0B\u7C7B\u578B\uFF0C\u5206\u4E3A\u4E16\u754C\u8BFE\u7A0B\u548C\u975E\u4E16\u754C\u8BFE\u7A0B</span>
    object <span class="token string">&quot;content&quot;</span>
    <span class="token punctuation">{</span>
        int <span class="token string">&quot;estimated_time&quot;</span> <span class="token comment">// \u9884\u8BA1\u5B8C\u6210\u8BE5\u8BFE\u7A0B\u7528\u65F6</span>
        string <span class="token string">&quot;description&quot;</span> <span class="token comment">// \u8BE5\u8BFE\u7A0B\u63CF\u8FF0</span>
        string  <span class="token property">&quot;goals&quot;</span> <span class="token operator">:</span> opt <span class="token comment">// \u8BE5\u8BFE\u7A0B\u7684\u8BFE\u7A0B\u76EE\u6807</span>
        array <span class="token property">&quot;tasks&quot;</span> <span class="token operator">:</span> opt <span class="token comment">// \u8BE5\u8BFE\u7A0B\u7684\u8BFE\u7A0B\u4EFB\u52A1</span>
        <span class="token punctuation">{</span>
            string <span class="token string">&quot;&lt;any array element&gt;&quot;</span>
        <span class="token punctuation">}</span>
        array <span class="token property">&quot;instructions&quot;</span> <span class="token operator">:</span> opt <span class="token comment">// \u8BE5\u8BFE\u7A0B\u7684\u8BFE\u7A0B\u6307\u5BFC</span>
        <span class="token punctuation">{</span>
            string <span class="token string">&quot;&lt;any array element&gt;&quot;</span>
        <span class="token punctuation">}</span>
        string <span class="token property">&quot;link_to_more&quot;</span> <span class="token operator">:</span> opt <span class="token comment">// \u66F4\u591A\u8FDE\u63A5</span>
        int <span class="token string">&quot;order&quot;</span> <span class="token comment">// \u8BE5\u8BFE\u7A0B\u7684\u8BFE\u7A0B\u987A\u5E8F</span>
        enumerated_value <span class="token string">&quot;role&quot;</span>&lt;<span class="token string">&quot;student_and_teacher&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;teacher&quot;</span>&gt; <span class="token operator">:</span> opt <span class="token comment">// \u8BE5\u8BFE\u7A0B\u7684\u4F7F\u7528\u8005\u8EAB\u4EFD</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6559\u80B2\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u6559\u80B2\u8BBE\u7F6E" aria-hidden="true">#</a> \u6559\u80B2\u8BBE\u7F6E</h2><p>\u6559\u80B2\u8BBE\u7F6E\u6587\u4EF6\u4F4D\u4E8E\u5B58\u6863\u7684\u6839\u76EE\u5F55\u4E0B\uFF0C\u7528\u4E8E\u63D0\u4F9B\u4E00\u4E9B\u5B58\u6863\u7684\u989D\u5916\u8BBE\u7F6E\u3002</p><h3 id="\u6A21\u5F0F-1" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5F0F-1" aria-hidden="true">#</a> \u6A21\u5F0F</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>object
<span class="token punctuation">{</span>
    object <span class="token string">&quot;codebuilder&quot;</span> <span class="token comment">// \u8BE5\u5B58\u6863\u4E2D\u4EE3\u7801\u6784\u5EFA\u5668\u7684\u8BBE\u7F6E</span>
    <span class="token punctuation">{</span>
        string <span class="token string">&quot;defaulturi&quot;</span> <span class="token comment">// \u8BE5\u5B58\u6863\u4E2D\u4EE3\u7801\u6784\u5EFA\u5668\u5C55\u793A\u7684\u9ED8\u8BA4URI</span>
        string <span class="token string">&quot;title&quot;</span> <span class="token comment">// \u4EE3\u7801\u6784\u5EFA\u5668\u7684\u6807\u9898</span>
        bool <span class="token property">&quot;canResize&quot;</span> <span class="token operator">:</span> opt <span class="token comment">// \u4EE3\u7801\u6784\u5EFA\u5668\u662F\u5426\u53EF\u4EE5\u7F29\u653E\uFF0C\u9ED8\u8BA4\u4E3Atrue</span>
        bool <span class="token property">&quot;disableLegacyTitleBar&quot;</span> <span class="token operator">:</span> opt <span class="token comment">// \u662F\u5426\u7981\u7528\u65E7\u7248\u6807\u9898\u680F</span>
        object <span class="token property">&quot;capabilities&quot;</span> <span class="token operator">:</span> opt
        <span class="token punctuation">{</span>
            object <span class="token property">&quot;agent&quot;</span> <span class="token operator">:</span> opt
            <span class="token punctuation">{</span>
                object <span class="token property">&quot;permissions&quot;</span> <span class="token operator">:</span> opt
                <span class="token punctuation">{</span>
                    bool <span class="token property">&quot;isWorldbuilder&quot;</span> <span class="token operator">:</span> opt <span class="token comment">// \u662F\u5426\u4E3A\u4E16\u754C\u6784\u5EFA\u8005\u3002\u76EE\u524D\u5DF2\u79FB\u9664</span>
                    bool <span class="token property">&quot;canModifyBlocks&quot;</span> <span class="token operator">:</span> opt <span class="token comment">// \u662F\u5426\u53EF\u4EE5\u4FEE\u6539\u65B9\u5757</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    object <span class="token string">&quot;externalLink&quot;</span> <span class="token comment">// \u5916\u90E8\u94FE\u63A5</span>
    <span class="token punctuation">{</span>
        string <span class="token string">&quot;url&quot;</span> <span class="token comment">// \u8BE5\u94FE\u63A5\u7684URL</span>
        string <span class="token string">&quot;displayName&quot;</span> <span class="token comment">// \u8BE5\u94FE\u63A5\u663E\u793A\u7684\u540D\u79F0</span>
    <span class="token punctuation">}</span>
    object <span class="token string">&quot;camera&quot;</span> <span class="token comment">// \u8BE5\u5B58\u6863\u4E2D\u6444\u50CF\u673A\u65B9\u5757\u7684\u8BBE\u7F6E</span>
    <span class="token punctuation">{</span>
        enumerated_value <span class="token string">&quot;filter&quot;</span>&lt;<span class="token string">&quot;grayscale&quot;</span>&gt; <span class="token comment">// \u6444\u50CF\u673A\u7684\u8FC7\u6EE4\u5668</span>
        enumerated_value <span class="token string">&quot;border&quot;</span>&lt;<span class="token string">&quot;borderpath&quot;</span>&gt; <span class="token comment">// \u6444\u50CF\u673A\u7684\u8FB9\u6846</span>
    <span class="token punctuation">}</span>
    object <span class="token string">&quot;commands&quot;</span>
    <span class="token punctuation">{</span>
        array <span class="token string">&quot;hiddenFromPlayer&quot;</span> <span class="token comment">// \u9700\u8981\u5C06\u547D\u4EE4\u65D7\u6807\u8BBE\u7F6E\u4E3A\u4ECE\u73A9\u5BB6\u8D77\u70B9\u9690\u85CF\u7684\u547D\u4EE4\uFF0C\u53D6\u5E76</span>
        <span class="token punctuation">{</span>
            string <span class="token string">&quot;&lt;any array element&gt;&quot;</span> <span class="token comment">// \u547D\u4EE4\u540D\uFF0C\u652F\u6301\u5728\u547D\u4EE4\u540D\u524D\u4F7F\u7528\u201C!\u201D\u8868\u793A\u975E\u8FD0\u7B97\uFF0C\u652F\u6301\u201C*\u201D\u4EE3\u8868\u5168\u90E8\u547D\u4EE4</span>
        <span class="token punctuation">}</span>
        array <span class="token string">&quot;hiddenFromAutomation&quot;</span> <span class="token comment">// \u9700\u8981\u5C06\u547D\u4EE4\u65D7\u6807\u8BBE\u7F6E\u4E3A\u4ECE\u81EA\u52A8\u5316\u8D77\u70B9\u9690\u85CF\u7684\u547D\u4EE4\uFF0C\u53D6\u5E76</span>
        <span class="token punctuation">{</span>
            string <span class="token string">&quot;&lt;any array element&gt;&quot;</span> <span class="token comment">// \u547D\u4EE4\u540D\uFF0C\u652F\u6301\u5728\u547D\u4EE4\u540D\u524D\u4F7F\u7528\u201C!\u201D\u8868\u793A\u975E\u8FD0\u7B97\uFF0C\u652F\u6301\u201C*\u201D\u4EE3\u8868\u5168\u90E8\u547D\u4EE4</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function k(b,q){const t=o("RouterLink");return i(),p("div",null,[u,s("p",null,[n("\u6559\u80B2\u5143\u6570\u636E\u6587\u4EF6\u4F4D\u4E8E\u9644\u52A0\u5305\u7684\u6839\u76EE\u5F55\u4E0B\uFF0C\u5728"),l(t,{to:"/data-driven/manifest.html"},{default:c(()=>[n("\u6E05\u5355\u6587\u4EF6")]),_:1}),n("\u7684"),d,n("\u4E3A"),m,n("\u65F6\u88AB\u8BFB\u53D6\uFF0C\u7528\u4E8E\u5C55\u793A\u8BE5\u9644\u52A0\u5305\u7684\u6559\u80B2\u57FA\u672C\u4FE1\u606F\u3002")]),v])}const h=e(r,[["render",k],["__file","education.html.vue"]]);export{h as default};
