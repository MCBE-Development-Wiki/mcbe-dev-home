import{_ as l,M as t,p as i,q as e,R as s,t as n,N as r,S as p}from"./framework-8c007374.js";const o={},c=s("h1",{id:"模式文档",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#模式文档","aria-hidden":"true"},"#"),n(" 模式文档")],-1),u=s("a",{rel:"license",href:"http://creativecommons.org/licenses/by/4.0/"},[s("img",{alt:"Creative Commons License",style:{"border-width":"0"},src:"https://mirrors.creativecommons.org/presskit/buttons/80x15/svg/by.svg"})],-1),d={href:"https://learn.microsoft.com/zh-cn/minecraft/creator/",target:"_blank",rel:"noopener noreferrer"},h=p(`<p>这是Minecraft预览版的文档。本版本中的新功能、组件和权能不代表最终版本，可能在最终版本发布前发生变化而不另行通知。</p><p>如果您的附加包不能正常工作，请务必在游戏走出预览后检查文档。为预览创建的资源包和行为包不能保证在最终版本中有效。</p><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p>这些是供内容创作者编辑或创建新内容时参考的数据格式模式。</p><h2 id="模式" tabindex="-1"><a class="header-anchor" href="#模式" aria-hidden="true">#</a> 模式</h2><div class="language-schema line-numbers-mode" data-ext="schema"><pre class="language-schema"><code><span class="hljs-title">actor_animation</span>:<span class="hljs-meta">1.8.0</span>:{
    <span class="hljs-strong">version</span> <span class="hljs-string">&quot;format_version&quot;</span>
    <span class="hljs-strong">object</span> <span class="hljs-string">&quot;animations&quot;</span>
    {
        <span class="hljs-strong">object</span> <span class="hljs-string">&quot;animation.&lt;identifier&gt;&quot;</span>
        {
            <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;loop&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// should this animation stop, loop, or stay on the last frame when finished (true, false, &quot;hold_on_last_frame&quot;</span>
            <span class="hljs-strong">string</span> <span class="hljs-string">&quot;loop&quot;</span>&lt;<span class="hljs-string">&quot;hold_on_last_frame&quot;</span>&gt; : <span class="hljs-literal">opt</span> <span class="hljs-comment">// should this animation stop, loop, or stay on the last frame when finished (true, false, &quot;hold_on_last_frame&quot;</span>
            <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;start_delay&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// How long to wait in seconds before playing this animation.  Note that this expression is evaluated once before playing, and only re-evaluated if asked to play from the beginning again.  A looping animation should use &#39;loop_delay&#39; if it wants a delay between loops.</span>
            <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;loop_delay&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// How long to wait in seconds before looping this animation.  Note that this expression is evaluated after each loop and on looping animation only.</span>
            <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;anim_time_update&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// how does time pass when playing the animation.  Defaults to &quot;query.anim_time + query.delta_time&quot; which means advance in seconds.</span>
            <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;blend_weight&quot;</span> : <span class="hljs-literal">opt</span>
            <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;override_previous_animation&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// reset bones in this animation to the default pose before applying this animation</span>
            <span class="hljs-strong">object</span> <span class="hljs-string">&quot;bones&quot;</span> : <span class="hljs-literal">opt</span>
            {
                <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;identifier&gt;&quot;</span>
                {
                    <span class="hljs-strong">object</span> <span class="hljs-string">&quot;relative_to&quot;</span> : <span class="hljs-literal">opt</span>
                    {
                        <span class="hljs-strong">string</span> <span class="hljs-string">&quot;rotation&quot;</span>&lt;<span class="hljs-string">&quot;entity&quot;</span>&gt; : <span class="hljs-literal">opt</span> <span class="hljs-comment">// if set, makes the bone rotation relative to the entity instead of the bone&#39;s parent</span>
                    }
                    <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;position&quot;</span> : <span class="hljs-literal">opt</span>
                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;position&quot;</span> : <span class="hljs-literal">opt</span>
                    {
                        <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                    }
                    <span class="hljs-strong">object</span> <span class="hljs-string">&quot;position&quot;</span> : <span class="hljs-literal">opt</span>
                    {
                        <span class="hljs-strong">array</span> <span class="hljs-string">&quot;&lt;time_stamp&gt;&quot;</span>[<span class="hljs-number">3</span>]
                        {
                            <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                        }
                        <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;time_stamp&gt;&quot;</span>
                        {
                            <span class="hljs-strong">enumerated_value</span> <span class="hljs-string">&quot;lerp_mode&quot;</span>&lt;<span class="hljs-string">&quot;linear&quot;</span>, <span class="hljs-string">&quot;catmullrom&quot;</span>&gt; : <span class="hljs-literal">opt</span>
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;pre&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                            }
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;post&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                            }
                        }
                    }
                    <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;rotation&quot;</span> : <span class="hljs-literal">opt</span>
                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;rotation&quot;</span> : <span class="hljs-literal">opt</span>
                    {
                        <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                        <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                        {
                            <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;[xyz]&quot;</span>
                        }
                    }
                    <span class="hljs-strong">object</span> <span class="hljs-string">&quot;rotation&quot;</span> : <span class="hljs-literal">opt</span>
                    {
                        <span class="hljs-strong">array</span> <span class="hljs-string">&quot;&lt;time_stamp&gt;&quot;</span>[<span class="hljs-number">3</span>]
                        {
                            <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                        }
                        <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;time_stamp&gt;&quot;</span>
                        {
                            <span class="hljs-strong">enumerated_value</span> <span class="hljs-string">&quot;lerp_mode&quot;</span>&lt;<span class="hljs-string">&quot;linear&quot;</span>, <span class="hljs-string">&quot;catmullrom&quot;</span>&gt; : <span class="hljs-literal">opt</span>
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;pre&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                            }
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;post&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                            }
                        }
                    }
                    <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;scale&quot;</span> : <span class="hljs-literal">opt</span>
                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;scale&quot;</span> : <span class="hljs-literal">opt</span>
                    {
                        <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                    }
                    <span class="hljs-strong">object</span> <span class="hljs-string">&quot;scale&quot;</span> : <span class="hljs-literal">opt</span>
                    {
                        <span class="hljs-strong">array</span> <span class="hljs-string">&quot;&lt;time_stamp&gt;&quot;</span>[<span class="hljs-number">3</span>]
                        {
                            <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                        }
                        <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;time_stamp&gt;&quot;</span>
                        {
                            <span class="hljs-strong">enumerated_value</span> <span class="hljs-string">&quot;lerp_mode&quot;</span>&lt;<span class="hljs-string">&quot;linear&quot;</span>, <span class="hljs-string">&quot;catmullrom&quot;</span>&gt; : <span class="hljs-literal">opt</span>
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;pre&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                            }
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;post&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                            }
                        }
                    }
                }
            }
            <span class="hljs-strong">object</span> <span class="hljs-string">&quot;particle_effects&quot;</span> : <span class="hljs-literal">opt</span>
            {
                <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;time_stamp&gt;&quot;</span> : <span class="hljs-literal">opt</span>
                {
                    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;effect&quot;</span> <span class="hljs-comment">// The name of a particle effect that should be played</span>
                    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;locator&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// The name of a locator on the actor where the effect should be located</span>
                    <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;pre_effect_script&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// A Molang script that will be run when the particle emitter is initialized</span>
                    <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;bind_to_actor&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Set to false to have the effect spawned in the world without being bound to an actor (by default an effect is bound to the actor).</span>
                }
                <span class="hljs-strong">array</span> <span class="hljs-string">&quot;&lt;time_stamp&gt;&quot;</span> : <span class="hljs-literal">opt</span>
                {
                    <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> : <span class="hljs-literal">opt</span>
                    {
                        <span class="hljs-strong">string</span> <span class="hljs-string">&quot;effect&quot;</span> <span class="hljs-comment">// The name of a particle effect that should be played</span>
                        <span class="hljs-strong">string</span> <span class="hljs-string">&quot;locator&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// The name of a locator on the actor where the effect should be located</span>
                        <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;pre_effect_script&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// A Molang script that will be run when the particle emitter is initialized</span>
                        <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;bind_to_actor&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Set to false to have the effect spawned in the world without being bound to an actor (by default an effect is bound to the actor).</span>
                    }
                }
            }
            <span class="hljs-strong">object</span> <span class="hljs-string">&quot;sound_effects&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// sound effects to trigger as this animation plays, keyed by time</span>
            {
                <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;time_stamp&gt;&quot;</span> : <span class="hljs-literal">opt</span>
                {
                    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;effect&quot;</span> <span class="hljs-comment">// Valid sound effect names should be listed in the entity&#39;s resource_definition json file.</span>
                }
                <span class="hljs-strong">array</span> <span class="hljs-string">&quot;&lt;time_stamp&gt;&quot;</span> : <span class="hljs-literal">opt</span>
                {
                    <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> : <span class="hljs-literal">opt</span>
                    {
                        <span class="hljs-strong">string</span> <span class="hljs-string">&quot;effect&quot;</span> <span class="hljs-comment">// Valid sound effect names should be listed in the entity&#39;s resource_definition json file.</span>
                    }
                }
            }
            <span class="hljs-strong">object</span> <span class="hljs-string">&quot;timeline&quot;</span> : <span class="hljs-literal">opt</span>
            {
                <span class="hljs-strong">string</span> <span class="hljs-string">&quot;&lt;time_stamp&gt;&quot;</span> : <span class="hljs-literal">opt</span>
                <span class="hljs-strong">array</span> <span class="hljs-string">&quot;&lt;time_stamp&gt;&quot;</span> : <span class="hljs-literal">opt</span>
                {
                    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> : <span class="hljs-literal">opt</span>
                }
            }
            <span class="hljs-strong">float</span> <span class="hljs-string">&quot;animation_length&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// override calculated value (set as the last keyframe time) and set animation length in seconds.</span>
        }
    }
}

<span class="hljs-title">actor_animation_controller</span>:<span class="hljs-meta">1.10.0</span>:{
    <span class="hljs-strong">version</span> <span class="hljs-string">&quot;format_version&quot;</span>
    <span class="hljs-strong">object</span> <span class="hljs-string">&quot;animation_controllers&quot;</span>
    {
        <span class="hljs-strong">object</span> <span class="hljs-string">&quot;controller.animation.&lt;identifier&gt;&quot;</span>
        {
            <span class="hljs-strong">object</span> <span class="hljs-string">&quot;states&quot;</span>
            {
                <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;identifier&gt;&quot;</span>
                {
                    <span class="hljs-strong">object</span> <span class="hljs-string">&quot;variables&quot;</span> : <span class="hljs-literal">opt</span>
                    {
                        <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;identifier&gt;&quot;</span>
                        {
                            <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;input&quot;</span>
                            <span class="hljs-strong">object</span> <span class="hljs-string">&quot;remap_curve&quot;</span> : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;time_stamp&gt;&quot;</span>
                            }
                        }
                    }
                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;animations&quot;</span> : <span class="hljs-literal">opt</span>
                    {
                        <span class="hljs-strong">string</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                        <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                        {
                            <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;&lt;identifier&gt;&quot;</span>
                        }
                    }
                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;transitions&quot;</span> : <span class="hljs-literal">opt</span>
                    {
                        <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>[<span class="hljs-number">1</span>] : <span class="hljs-literal">opt</span>
                        {
                            <span class="hljs-strong">string</span> <span class="hljs-string">&quot;&lt;identifier&gt;&quot;</span>
                        }
                    }
                    <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;blend_via_shortest_path&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// When blending a transition to another state, animate each euler axis through the shortest rotation, instead of by value</span>
                    <span class="hljs-strong">object</span> <span class="hljs-string">&quot;blend_transition&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Specifies the cross-fade time in seconds when transitioning to another state</span>
                    {
                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;identifier&gt;&quot;</span> <span class="hljs-comment">// Mapping of time since the animation was canceled, to the blend value at that time.  A default key of time=0 to a blend value of 1.0 is provided if any other key is set and a blend value at time=0 hasn&#39;t already been set.</span>
                    }
                    <span class="hljs-strong">float</span> <span class="hljs-string">&quot;blend_transition&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// A short-hand version of blend_out that simply sets the amount of time to fade out if the animation is interrupted</span>
                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;particle_effects&quot;</span> : <span class="hljs-literal">opt</span>
                    {
                        <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> : <span class="hljs-literal">opt</span>
                        {
                            <span class="hljs-strong">string</span> <span class="hljs-string">&quot;effect&quot;</span> <span class="hljs-comment">// The name of a particle effect that should be played</span>
                            <span class="hljs-strong">string</span> <span class="hljs-string">&quot;locator&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// The name of a locator on the actor where the effect should be located</span>
                            <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;pre_effect_script&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// A Molang script that will be run when the particle emitter is initialized</span>
                            <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;bind_to_actor&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Set to false to have the effect spawned in the world without being bound to an actor (by default an effect is bound to the actor).</span>
                        }
                    }
                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;on_entry&quot;</span> : <span class="hljs-literal">opt</span>
                    {
                        <span class="hljs-strong">string</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> : <span class="hljs-literal">opt</span>
                    }
                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;on_exit&quot;</span> : <span class="hljs-literal">opt</span>
                    {
                        <span class="hljs-strong">string</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> : <span class="hljs-literal">opt</span>
                    }
                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;sound_effects&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Collection of sounds to trigger on entry to this animation state.</span>
                    {
                        <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> : <span class="hljs-literal">opt</span>
                        {
                            <span class="hljs-strong">string</span> <span class="hljs-string">&quot;effect&quot;</span> <span class="hljs-comment">// Valid sound effect names should be listed in the entity&#39;s resource_definition json file.</span>
                        }
                    }
                }
            }
            <span class="hljs-strong">string</span> <span class="hljs-string">&quot;initial_state&quot;</span> : <span class="hljs-literal">opt</span>
        }
    }
}

<span class="hljs-title">chance_information</span>:<span class="hljs-meta">1.14.0</span>:{
    <span class="hljs-strong">int</span> <span class="hljs-string">&quot;numerator&quot;</span>&lt;<span class="hljs-number">1</span>-<span class="hljs-number">*</span>&gt;
    <span class="hljs-strong">int</span> <span class="hljs-string">&quot;denominator&quot;</span>&lt;<span class="hljs-number">1</span>-<span class="hljs-number">*</span>&gt;
}

<span class="hljs-title">block_reference</span>:<span class="hljs-meta">1.10.0</span>:{
    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;name&quot;</span>
    <span class="hljs-strong">object</span> <span class="hljs-string">&quot;states&quot;</span>
    {
        <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;\\w*:?\\w+&quot;</span> : <span class="hljs-literal">opt</span>
        <span class="hljs-strong">int</span> <span class="hljs-string">&quot;\\w*:?\\w+&quot;</span> : <span class="hljs-literal">opt</span>
        <span class="hljs-strong">string</span> <span class="hljs-string">&quot;\\w*:?\\w+&quot;</span> : <span class="hljs-literal">opt</span>
    }
}

<span class="hljs-title">persona_actor_animation</span>:<span class="hljs-meta">1.8.0</span>:{
    <span class="hljs-strong">version</span> <span class="hljs-string">&quot;format_version&quot;</span>
    <span class="hljs-strong">object</span> <span class="hljs-string">&quot;animations&quot;</span>
    {
        <span class="hljs-strong">object</span> <span class="hljs-string">&quot;animation.&lt;identifier&gt;&quot;</span>
        {
            <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;loop&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// should this animation stop, loop, or stay on the last frame when finished (true, false, &quot;hold_on_last_frame&quot;</span>
            <span class="hljs-strong">string</span> <span class="hljs-string">&quot;loop&quot;</span>&lt;<span class="hljs-string">&quot;hold_on_last_frame&quot;</span>&gt; : <span class="hljs-literal">opt</span> <span class="hljs-comment">// should this animation stop, loop, or stay on the last frame when finished (true, false, &quot;hold_on_last_frame&quot;</span>
            <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;start_delay&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// How long to wait in seconds before playing this animation.  Note that this expression is evaluated once before playing, and only re-evaluated if asked to play from the beginning again.  A looping animation should use &#39;loop_delay&#39; if it wants a delay between loops.</span>
            <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;loop_delay&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// How long to wait in seconds before looping this animation.  Note that this expression is evaluated after each loop and on looping animation only.</span>
            <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;anim_time_update&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// how does time pass when playing the animation.  Defaults to &quot;query.anim_time + query.delta_time&quot; which means advance in seconds.</span>
            <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;blend_weight&quot;</span> : <span class="hljs-literal">opt</span>
            <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;override_previous_animation&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// reset bones in this animation to the default pose before applying this animation</span>
            <span class="hljs-strong">object</span> <span class="hljs-string">&quot;bones&quot;</span> : <span class="hljs-literal">opt</span>
            {
                <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;identifier&gt;&quot;</span>
                {
                    <span class="hljs-strong">object</span> <span class="hljs-string">&quot;relative_to&quot;</span> : <span class="hljs-literal">opt</span>
                    {
                        <span class="hljs-strong">string</span> <span class="hljs-string">&quot;rotation&quot;</span>&lt;<span class="hljs-string">&quot;entity&quot;</span>&gt; : <span class="hljs-literal">opt</span> <span class="hljs-comment">// if set, makes the bone rotation relative to the entity instead of the bone&#39;s parent</span>
                    }
                    <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;position&quot;</span> : <span class="hljs-literal">opt</span>
                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;position&quot;</span> : <span class="hljs-literal">opt</span>
                    {
                        <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                    }
                    <span class="hljs-strong">object</span> <span class="hljs-string">&quot;position&quot;</span> : <span class="hljs-literal">opt</span>
                    {
                        <span class="hljs-strong">array</span> <span class="hljs-string">&quot;&lt;time_stamp&gt;&quot;</span>[<span class="hljs-number">3</span>]
                        {
                            <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                        }
                        <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;time_stamp&gt;&quot;</span>
                        {
                            <span class="hljs-strong">enumerated_value</span> <span class="hljs-string">&quot;lerp_mode&quot;</span>&lt;<span class="hljs-string">&quot;linear&quot;</span>, <span class="hljs-string">&quot;catmullrom&quot;</span>&gt; : <span class="hljs-literal">opt</span>
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;pre&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                            }
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;post&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                            }
                        }
                    }
                    <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;rotation&quot;</span> : <span class="hljs-literal">opt</span>
                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;rotation&quot;</span> : <span class="hljs-literal">opt</span>
                    {
                        <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                        <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                        {
                            <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;[xyz]&quot;</span>
                        }
                    }
                    <span class="hljs-strong">object</span> <span class="hljs-string">&quot;rotation&quot;</span> : <span class="hljs-literal">opt</span>
                    {
                        <span class="hljs-strong">array</span> <span class="hljs-string">&quot;&lt;time_stamp&gt;&quot;</span>[<span class="hljs-number">3</span>]
                        {
                            <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                        }
                        <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;time_stamp&gt;&quot;</span>
                        {
                            <span class="hljs-strong">enumerated_value</span> <span class="hljs-string">&quot;lerp_mode&quot;</span>&lt;<span class="hljs-string">&quot;linear&quot;</span>, <span class="hljs-string">&quot;catmullrom&quot;</span>&gt; : <span class="hljs-literal">opt</span>
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;pre&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                            }
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;post&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                            }
                        }
                    }
                    <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;scale&quot;</span> : <span class="hljs-literal">opt</span>
                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;scale&quot;</span> : <span class="hljs-literal">opt</span>
                    {
                        <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                    }
                    <span class="hljs-strong">object</span> <span class="hljs-string">&quot;scale&quot;</span> : <span class="hljs-literal">opt</span>
                    {
                        <span class="hljs-strong">array</span> <span class="hljs-string">&quot;&lt;time_stamp&gt;&quot;</span>[<span class="hljs-number">3</span>]
                        {
                            <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                        }
                        <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;time_stamp&gt;&quot;</span>
                        {
                            <span class="hljs-strong">enumerated_value</span> <span class="hljs-string">&quot;lerp_mode&quot;</span>&lt;<span class="hljs-string">&quot;linear&quot;</span>, <span class="hljs-string">&quot;catmullrom&quot;</span>&gt; : <span class="hljs-literal">opt</span>
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;pre&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                            }
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;post&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                            }
                        }
                    }
                }
            }
            <span class="hljs-strong">object</span> <span class="hljs-string">&quot;particle_effects&quot;</span> : <span class="hljs-literal">opt</span>
            {
                <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;time_stamp&gt;&quot;</span> : <span class="hljs-literal">opt</span>
                {
                    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;effect&quot;</span> <span class="hljs-comment">// The name of a particle effect that should be played</span>
                    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;locator&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// The name of a locator on the actor where the effect should be located</span>
                    <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;pre_effect_script&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// A Molang script that will be run when the particle emitter is initialized</span>
                    <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;bind_to_actor&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Set to false to have the effect spawned in the world without being bound to an actor (by default an effect is bound to the actor).</span>
                }
                <span class="hljs-strong">array</span> <span class="hljs-string">&quot;&lt;time_stamp&gt;&quot;</span> : <span class="hljs-literal">opt</span>
                {
                    <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> : <span class="hljs-literal">opt</span>
                    {
                        <span class="hljs-strong">string</span> <span class="hljs-string">&quot;effect&quot;</span> <span class="hljs-comment">// The name of a particle effect that should be played</span>
                        <span class="hljs-strong">string</span> <span class="hljs-string">&quot;locator&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// The name of a locator on the actor where the effect should be located</span>
                        <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;pre_effect_script&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// A Molang script that will be run when the particle emitter is initialized</span>
                        <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;bind_to_actor&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Set to false to have the effect spawned in the world without being bound to an actor (by default an effect is bound to the actor).</span>
                    }
                }
            }
            <span class="hljs-strong">object</span> <span class="hljs-string">&quot;sound_effects&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// sound effects to trigger as this animation plays, keyed by time</span>
            {
                <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;time_stamp&gt;&quot;</span> : <span class="hljs-literal">opt</span>
                {
                    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;effect&quot;</span> <span class="hljs-comment">// Valid sound effect names should be listed in the entity&#39;s resource_definition json file.</span>
                }
                <span class="hljs-strong">array</span> <span class="hljs-string">&quot;&lt;time_stamp&gt;&quot;</span> : <span class="hljs-literal">opt</span>
                {
                    <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> : <span class="hljs-literal">opt</span>
                    {
                        <span class="hljs-strong">string</span> <span class="hljs-string">&quot;effect&quot;</span> <span class="hljs-comment">// Valid sound effect names should be listed in the entity&#39;s resource_definition json file.</span>
                    }
                }
            }
            <span class="hljs-strong">object</span> <span class="hljs-string">&quot;timeline&quot;</span> : <span class="hljs-literal">opt</span>
            {
                <span class="hljs-strong">string</span> <span class="hljs-string">&quot;&lt;time_stamp&gt;&quot;</span> : <span class="hljs-literal">opt</span>
                <span class="hljs-strong">array</span> <span class="hljs-string">&quot;&lt;time_stamp&gt;&quot;</span> : <span class="hljs-literal">opt</span>
                {
                    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> : <span class="hljs-literal">opt</span>
                }
            }
            <span class="hljs-strong">float</span> <span class="hljs-string">&quot;animation_length&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// override calculated value (set as the max keyframe or event time) and set animation length in seconds.</span>
        }
    }
}

<span class="hljs-title">actor_resource_definition</span>:<span class="hljs-meta">1.8.0</span>:{
    <span class="hljs-strong">version</span> <span class="hljs-string">&quot;format_version&quot;</span>
    <span class="hljs-strong">object</span> <span class="hljs-string">&quot;minecraft:(client_entity|attachable)&quot;</span>
    {
        <span class="hljs-strong">object</span> <span class="hljs-string">&quot;description&quot;</span>
        {
            <span class="hljs-strong">string</span> <span class="hljs-string">&quot;identifier&quot;</span>
            <span class="hljs-strong">version</span> <span class="hljs-string">&quot;min_engine_version&quot;</span> : <span class="hljs-literal">opt</span>
            <span class="hljs-strong">object</span> <span class="hljs-string">&quot;materials&quot;</span> : <span class="hljs-literal">opt</span>
            {
                <span class="hljs-strong">string</span> <span class="hljs-string">&quot;&lt;identifier&gt;&quot;</span>
            }
            <span class="hljs-strong">object</span> <span class="hljs-string">&quot;textures&quot;</span> : <span class="hljs-literal">opt</span>
            {
                <span class="hljs-strong">string</span> <span class="hljs-string">&quot;&lt;identifier&gt;&quot;</span>
            }
            <span class="hljs-strong">object</span> <span class="hljs-string">&quot;geometry&quot;</span> : <span class="hljs-literal">opt</span>
            {
                <span class="hljs-strong">string</span> <span class="hljs-string">&quot;&lt;identifier&gt;&quot;</span>
            }
            <span class="hljs-strong">object</span> <span class="hljs-string">&quot;spawn_egg&quot;</span> : <span class="hljs-literal">opt</span>
            {
                <span class="hljs-strong">string</span> <span class="hljs-string">&quot;texture&quot;</span> : <span class="hljs-literal">opt</span>
                <span class="hljs-strong">string</span> <span class="hljs-string">&quot;base_color&quot;</span> : <span class="hljs-literal">opt</span>
                <span class="hljs-strong">string</span> <span class="hljs-string">&quot;overlay_color&quot;</span> : <span class="hljs-literal">opt</span>
                <span class="hljs-strong">int</span> <span class="hljs-string">&quot;texture_index&quot;</span> : <span class="hljs-literal">opt</span>
            }
            <span class="hljs-strong">object</span> <span class="hljs-string">&quot;scripts&quot;</span> : <span class="hljs-literal">opt</span>
            {
                <span class="hljs-strong">array</span> <span class="hljs-string">&quot;pre_animation&quot;</span> : <span class="hljs-literal">opt</span>
                {
                    <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                }
                <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;scale&quot;</span> : <span class="hljs-literal">opt</span>
                <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;scale[xX]&quot;</span> : <span class="hljs-literal">opt</span>
                <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;scale[yY]&quot;</span> : <span class="hljs-literal">opt</span>
                <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;scale[zZ]&quot;</span> : <span class="hljs-literal">opt</span>
                <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;parent_setup&quot;</span> : <span class="hljs-literal">opt</span>
            }
            <span class="hljs-strong">object</span> <span class="hljs-string">&quot;particle_effects&quot;</span>[<span class="hljs-number">1</span>,<span class="hljs-number">*</span>] : <span class="hljs-literal">opt</span>
            {
                <span class="hljs-strong">string</span> <span class="hljs-string">&quot;&lt;identifier&gt;&quot;</span> : <span class="hljs-literal">opt</span>
            }
            <span class="hljs-strong">object</span> <span class="hljs-string">&quot;particle_emitters&quot;</span>[<span class="hljs-number">1</span>,<span class="hljs-number">*</span>] : <span class="hljs-literal">opt</span>
            {
                <span class="hljs-strong">string</span> <span class="hljs-string">&quot;&lt;identifier&gt;&quot;</span> : <span class="hljs-literal">opt</span>
            }
            <span class="hljs-strong">object</span> <span class="hljs-string">&quot;animations&quot;</span>[<span class="hljs-number">1</span>,<span class="hljs-number">*</span>] : <span class="hljs-literal">opt</span>
            {
                <span class="hljs-strong">string</span> <span class="hljs-string">&quot;&lt;identifier&gt;&quot;</span> : <span class="hljs-literal">opt</span>
            }
            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;animation_controllers&quot;</span>[<span class="hljs-number">1</span>,<span class="hljs-number">*</span>] : <span class="hljs-literal">opt</span>
            {
                <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> : <span class="hljs-literal">opt</span>
                {
                    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;&lt;identifier&gt;&quot;</span> : <span class="hljs-literal">opt</span>
                }
            }
            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;render_controllers&quot;</span>[<span class="hljs-number">1</span>,<span class="hljs-number">*</span>] : <span class="hljs-literal">opt</span>
            {
                <span class="hljs-strong">string</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> : <span class="hljs-literal">opt</span>
            }
            <span class="hljs-strong">object</span> <span class="hljs-string">&quot;sound_effects&quot;</span>[<span class="hljs-number">1</span>,<span class="hljs-number">*</span>] : <span class="hljs-literal">opt</span>
            {
                <span class="hljs-strong">string</span> <span class="hljs-string">&quot;&lt;identifier&gt;&quot;</span> : <span class="hljs-literal">opt</span>
            }
            <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;enable_attachables&quot;</span> : <span class="hljs-literal">opt</span>
            <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;hide_armor&quot;</span> : <span class="hljs-literal">opt</span>
        }
    }
}

<span class="hljs-title">actor_resource_definition</span>:<span class="hljs-meta">1.10.0</span>:{
    <span class="hljs-strong">version</span> <span class="hljs-string">&quot;format_version&quot;</span>
    <span class="hljs-strong">object</span> <span class="hljs-string">&quot;minecraft:client_entity&quot;</span> : <span class="hljs-literal">opt</span>
    {
        <span class="hljs-strong">object</span> <span class="hljs-string">&quot;description&quot;</span>
        {
            <span class="hljs-strong">string</span> <span class="hljs-string">&quot;identifier&quot;</span>
            <span class="hljs-strong">version</span> <span class="hljs-string">&quot;min_engine_version&quot;</span> : <span class="hljs-literal">opt</span>
            <span class="hljs-strong">object</span> <span class="hljs-string">&quot;materials&quot;</span> : <span class="hljs-literal">opt</span>
            {
                <span class="hljs-strong">string</span> <span class="hljs-string">&quot;&lt;identifier&gt;&quot;</span>
            }
            <span class="hljs-strong">object</span> <span class="hljs-string">&quot;textures&quot;</span> : <span class="hljs-literal">opt</span>
            {
                <span class="hljs-strong">string</span> <span class="hljs-string">&quot;&lt;identifier&gt;&quot;</span>
            }
            <span class="hljs-strong">object</span> <span class="hljs-string">&quot;geometry&quot;</span> : <span class="hljs-literal">opt</span>
            {
                <span class="hljs-strong">string</span> <span class="hljs-string">&quot;&lt;identifier&gt;&quot;</span>
            }
            <span class="hljs-strong">string</span> <span class="hljs-string">&quot;queryable_geometry&quot;</span> : <span class="hljs-literal">opt</span>
            <span class="hljs-strong">object</span> <span class="hljs-string">&quot;spawn_egg&quot;</span> : <span class="hljs-literal">opt</span>
            {
                <span class="hljs-strong">string</span> <span class="hljs-string">&quot;texture&quot;</span> : <span class="hljs-literal">opt</span>
                <span class="hljs-strong">string</span> <span class="hljs-string">&quot;base_color&quot;</span> : <span class="hljs-literal">opt</span>
                <span class="hljs-strong">string</span> <span class="hljs-string">&quot;overlay_color&quot;</span> : <span class="hljs-literal">opt</span>
                <span class="hljs-strong">int</span> <span class="hljs-string">&quot;texture_index&quot;</span> : <span class="hljs-literal">opt</span>
            }
            <span class="hljs-strong">object</span> <span class="hljs-string">&quot;scripts&quot;</span> : <span class="hljs-literal">opt</span>
            {
                <span class="hljs-strong">object</span> <span class="hljs-string">&quot;variables&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// A list of variables that need certain settings applied to them.  Currently, for the client, only &quot;public&quot; is supported.</span>
                {
                    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;variable.[a-zA-Z_][a-zA-Z0-9_]*&quot;</span>&lt;<span class="hljs-string">&quot;public&quot;</span>&gt; <span class="hljs-comment">// If a variable is public, it can be read by other mobs.  See the molang &#39;-&gt;&#39; operator for details.</span>
                }
                <span class="hljs-strong">array</span> <span class="hljs-string">&quot;initialize&quot;</span> : <span class="hljs-literal">opt</span>
                {
                    <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                }
                <span class="hljs-strong">array</span> <span class="hljs-string">&quot;pre_animation&quot;</span> : <span class="hljs-literal">opt</span>
                {
                    <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                }
                <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;scale&quot;</span> : <span class="hljs-literal">opt</span>
                <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;scale[xX]&quot;</span> : <span class="hljs-literal">opt</span>
                <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;scale[yY]&quot;</span> : <span class="hljs-literal">opt</span>
                <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;scale[zZ]&quot;</span> : <span class="hljs-literal">opt</span>
                <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;parent_setup&quot;</span> : <span class="hljs-literal">opt</span>
                <span class="hljs-strong">array</span> <span class="hljs-string">&quot;animate&quot;</span>[<span class="hljs-number">1</span>,<span class="hljs-number">*</span>] : <span class="hljs-literal">opt</span>
                {
                    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> : <span class="hljs-literal">opt</span>
                    <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>[<span class="hljs-number">1</span>] : <span class="hljs-literal">opt</span>
                    {
                        <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;&lt;scope_identifier&gt;&quot;</span> : <span class="hljs-literal">opt</span>
                    }
                }
                <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;should_update_bones_and_effects_offscreen&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Bones and effects will still be updated if the entity is off screen if this expression returns anything other than 0.0.</span>
                <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;should_update_effects_offscreen&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Effects will still be updated if the entity is off screen if this expression or \`should_update_bones_and_effects_offscreen\` returns anything other than 0.0.</span>
            }
            <span class="hljs-strong">object</span> <span class="hljs-string">&quot;particle_effects&quot;</span>[<span class="hljs-number">1</span>,<span class="hljs-number">*</span>] : <span class="hljs-literal">opt</span>
            {
                <span class="hljs-strong">string</span> <span class="hljs-string">&quot;&lt;identifier&gt;&quot;</span> : <span class="hljs-literal">opt</span>
            }
            <span class="hljs-strong">object</span> <span class="hljs-string">&quot;particle_emitters&quot;</span>[<span class="hljs-number">1</span>,<span class="hljs-number">*</span>] : <span class="hljs-literal">opt</span>
            {
                <span class="hljs-strong">string</span> <span class="hljs-string">&quot;&lt;identifier&gt;&quot;</span> : <span class="hljs-literal">opt</span>
            }
            <span class="hljs-strong">object</span> <span class="hljs-string">&quot;animations&quot;</span>[<span class="hljs-number">1</span>,<span class="hljs-number">*</span>] : <span class="hljs-literal">opt</span>
            {
                <span class="hljs-strong">string</span> <span class="hljs-string">&quot;&lt;identifier&gt;&quot;</span> : <span class="hljs-literal">opt</span>
            }
            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;render_controllers&quot;</span>[<span class="hljs-number">1</span>,<span class="hljs-number">*</span>] : <span class="hljs-literal">opt</span>
            {
                <span class="hljs-strong">string</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> : <span class="hljs-literal">opt</span>
                <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>[<span class="hljs-number">1</span>] : <span class="hljs-literal">opt</span>
                {
                    <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;&lt;scope_identifier&gt;&quot;</span> : <span class="hljs-literal">opt</span>
                }
            }
            <span class="hljs-strong">object</span> <span class="hljs-string">&quot;sound_effects&quot;</span>[<span class="hljs-number">1</span>,<span class="hljs-number">*</span>] : <span class="hljs-literal">opt</span>
            {
                <span class="hljs-strong">string</span> <span class="hljs-string">&quot;&lt;identifier&gt;&quot;</span> : <span class="hljs-literal">opt</span>
            }
            <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;enable_attachables&quot;</span> : <span class="hljs-literal">opt</span>
            <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;hide_armor&quot;</span> : <span class="hljs-literal">opt</span>
        }
    }
    <span class="hljs-strong">object</span> <span class="hljs-string">&quot;minecraft:attachable&quot;</span> : <span class="hljs-literal">opt</span>
    {
        <span class="hljs-strong">object</span> <span class="hljs-string">&quot;description&quot;</span>
        {
            <span class="hljs-strong">string</span> <span class="hljs-string">&quot;identifier&quot;</span>
            <span class="hljs-strong">version</span> <span class="hljs-string">&quot;min_engine_version&quot;</span> : <span class="hljs-literal">opt</span>
            <span class="hljs-strong">object</span> <span class="hljs-string">&quot;materials&quot;</span> : <span class="hljs-literal">opt</span>
            {
                <span class="hljs-strong">string</span> <span class="hljs-string">&quot;&lt;identifier&gt;&quot;</span>
            }
            <span class="hljs-strong">object</span> <span class="hljs-string">&quot;textures&quot;</span> : <span class="hljs-literal">opt</span>
            {
                <span class="hljs-strong">string</span> <span class="hljs-string">&quot;&lt;identifier&gt;&quot;</span>
            }
            <span class="hljs-strong">object</span> <span class="hljs-string">&quot;geometry&quot;</span> : <span class="hljs-literal">opt</span>
            {
                <span class="hljs-strong">string</span> <span class="hljs-string">&quot;&lt;identifier&gt;&quot;</span>
            }
            <span class="hljs-strong">string</span> <span class="hljs-string">&quot;queryable_geometry&quot;</span> : <span class="hljs-literal">opt</span>
            <span class="hljs-strong">object</span> <span class="hljs-string">&quot;spawn_egg&quot;</span> : <span class="hljs-literal">opt</span>
            {
                <span class="hljs-strong">string</span> <span class="hljs-string">&quot;texture&quot;</span> : <span class="hljs-literal">opt</span>
                <span class="hljs-strong">string</span> <span class="hljs-string">&quot;base_color&quot;</span> : <span class="hljs-literal">opt</span>
                <span class="hljs-strong">string</span> <span class="hljs-string">&quot;overlay_color&quot;</span> : <span class="hljs-literal">opt</span>
                <span class="hljs-strong">int</span> <span class="hljs-string">&quot;texture_index&quot;</span> : <span class="hljs-literal">opt</span>
            }
            <span class="hljs-strong">object</span> <span class="hljs-string">&quot;scripts&quot;</span> : <span class="hljs-literal">opt</span>
            {
                <span class="hljs-strong">object</span> <span class="hljs-string">&quot;variables&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// A list of variables that need certain settings applied to them.  Currently, for the client, only &quot;public&quot; is supported.</span>
                {
                    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;variable.[a-zA-Z_][a-zA-Z0-9_]*&quot;</span>&lt;<span class="hljs-string">&quot;public&quot;</span>&gt; <span class="hljs-comment">// If a variable is public, it can be read by other mobs.  See the molang &#39;-&gt;&#39; operator for details.</span>
                }
                <span class="hljs-strong">array</span> <span class="hljs-string">&quot;initialize&quot;</span> : <span class="hljs-literal">opt</span>
                {
                    <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                }
                <span class="hljs-strong">array</span> <span class="hljs-string">&quot;pre_animation&quot;</span> : <span class="hljs-literal">opt</span>
                {
                    <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                }
                <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;scale&quot;</span> : <span class="hljs-literal">opt</span>
                <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;scale[xX]&quot;</span> : <span class="hljs-literal">opt</span>
                <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;scale[yY]&quot;</span> : <span class="hljs-literal">opt</span>
                <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;scale[zZ]&quot;</span> : <span class="hljs-literal">opt</span>
                <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;parent_setup&quot;</span> : <span class="hljs-literal">opt</span>
                <span class="hljs-strong">array</span> <span class="hljs-string">&quot;animate&quot;</span>[<span class="hljs-number">1</span>,<span class="hljs-number">*</span>] : <span class="hljs-literal">opt</span>
                {
                    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> : <span class="hljs-literal">opt</span>
                    <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>[<span class="hljs-number">1</span>] : <span class="hljs-literal">opt</span>
                    {
                        <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;&lt;scope_identifier&gt;&quot;</span> : <span class="hljs-literal">opt</span>
                    }
                }
                <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;should_update_bones_and_effects_offscreen&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Bones and effects will still be updated if the entity is off screen if this expression returns anything other than 0.0.</span>
                <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;should_update_effects_offscreen&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Effects will still be updated if the entity is off screen if this expression or \`should_update_bones_and_effects_offscreen\` returns anything other than 0.0.</span>
            }
            <span class="hljs-strong">object</span> <span class="hljs-string">&quot;particle_effects&quot;</span>[<span class="hljs-number">1</span>,<span class="hljs-number">*</span>] : <span class="hljs-literal">opt</span>
            {
                <span class="hljs-strong">string</span> <span class="hljs-string">&quot;&lt;identifier&gt;&quot;</span> : <span class="hljs-literal">opt</span>
            }
            <span class="hljs-strong">object</span> <span class="hljs-string">&quot;particle_emitters&quot;</span>[<span class="hljs-number">1</span>,<span class="hljs-number">*</span>] : <span class="hljs-literal">opt</span>
            {
                <span class="hljs-strong">string</span> <span class="hljs-string">&quot;&lt;identifier&gt;&quot;</span> : <span class="hljs-literal">opt</span>
            }
            <span class="hljs-strong">object</span> <span class="hljs-string">&quot;animations&quot;</span>[<span class="hljs-number">1</span>,<span class="hljs-number">*</span>] : <span class="hljs-literal">opt</span>
            {
                <span class="hljs-strong">string</span> <span class="hljs-string">&quot;&lt;identifier&gt;&quot;</span> : <span class="hljs-literal">opt</span>
            }
            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;render_controllers&quot;</span>[<span class="hljs-number">1</span>,<span class="hljs-number">*</span>] : <span class="hljs-literal">opt</span>
            {
                <span class="hljs-strong">string</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> : <span class="hljs-literal">opt</span>
                <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>[<span class="hljs-number">1</span>] : <span class="hljs-literal">opt</span>
                {
                    <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;&lt;scope_identifier&gt;&quot;</span> : <span class="hljs-literal">opt</span>
                }
            }
            <span class="hljs-strong">object</span> <span class="hljs-string">&quot;sound_effects&quot;</span>[<span class="hljs-number">1</span>,<span class="hljs-number">*</span>] : <span class="hljs-literal">opt</span>
            {
                <span class="hljs-strong">string</span> <span class="hljs-string">&quot;&lt;identifier&gt;&quot;</span> : <span class="hljs-literal">opt</span>
            }
            <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;enable_attachables&quot;</span> : <span class="hljs-literal">opt</span>
            <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;hide_armor&quot;</span> : <span class="hljs-literal">opt</span>
            <span class="hljs-strong">string</span> <span class="hljs-string">&quot;item&quot;</span> : <span class="hljs-literal">opt</span>
            <span class="hljs-strong">object</span> <span class="hljs-string">&quot;item&quot;</span>[<span class="hljs-number">1</span>] : <span class="hljs-literal">opt</span>
            {
                <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;&lt;scope_identifier&gt;&quot;</span>
            }
        }
    }
}

<span class="hljs-title">render_controller</span>:<span class="hljs-meta">1.8.0</span>:{
    <span class="hljs-strong">version</span> <span class="hljs-string">&quot;format_version&quot;</span>
    <span class="hljs-strong">object</span> <span class="hljs-string">&quot;render_controllers&quot;</span>
    {
        <span class="hljs-strong">object</span> <span class="hljs-string">&quot;controller.render.&lt;scope_identifier&gt;&quot;</span>
        {
            <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;rebuild_animation_matrices&quot;</span> : <span class="hljs-literal">opt</span>
            <span class="hljs-strong">object</span> <span class="hljs-string">&quot;arrays&quot;</span> : <span class="hljs-literal">opt</span>
            {
                <span class="hljs-strong">object</span> <span class="hljs-string">&quot;geometries&quot;</span> : <span class="hljs-literal">opt</span>
                {
                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;array.&lt;scope_identifier&gt;&quot;</span>
                    {
                        <span class="hljs-strong">string</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                    }
                }
                <span class="hljs-strong">object</span> <span class="hljs-string">&quot;materials&quot;</span> : <span class="hljs-literal">opt</span>
                {
                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;array.&lt;scope_identifier&gt;&quot;</span>
                    {
                        <span class="hljs-strong">string</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                    }
                }
                <span class="hljs-strong">object</span> <span class="hljs-string">&quot;textures&quot;</span> : <span class="hljs-literal">opt</span>
                {
                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;array.&lt;scope_identifier&gt;&quot;</span>
                    {
                        <span class="hljs-strong">string</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                    }
                }
            }
            <span class="hljs-strong">string</span> <span class="hljs-string">&quot;geometry&quot;</span>
            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;part_visibility&quot;</span> : <span class="hljs-literal">opt</span>
            {
                <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                {
                    <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;[a-zA-Z0-9_.:*]+&quot;</span>
                }
            }
            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;materials&quot;</span> : <span class="hljs-literal">opt</span>
            {
                <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                {
                    <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;[a-zA-Z0-9_.:*]+&quot;</span>
                }
            }
            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;textures&quot;</span> : <span class="hljs-literal">opt</span>
            {
                <span class="hljs-strong">string</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
            }
            <span class="hljs-strong">object</span> <span class="hljs-string">&quot;color&quot;</span> : <span class="hljs-literal">opt</span>
            {
                <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;r&quot;</span> : <span class="hljs-literal">opt</span>
                <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;g&quot;</span> : <span class="hljs-literal">opt</span>
                <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;b&quot;</span> : <span class="hljs-literal">opt</span>
                <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;a&quot;</span> : <span class="hljs-literal">opt</span>
            }
            <span class="hljs-strong">object</span> <span class="hljs-string">&quot;overlay_color&quot;</span> : <span class="hljs-literal">opt</span>
            {
                <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;r&quot;</span> : <span class="hljs-literal">opt</span>
                <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;g&quot;</span> : <span class="hljs-literal">opt</span>
                <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;b&quot;</span> : <span class="hljs-literal">opt</span>
                <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;a&quot;</span> : <span class="hljs-literal">opt</span>
            }
            <span class="hljs-strong">object</span> <span class="hljs-string">&quot;on_fire_color&quot;</span> : <span class="hljs-literal">opt</span>
            {
                <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;r&quot;</span> : <span class="hljs-literal">opt</span>
                <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;g&quot;</span> : <span class="hljs-literal">opt</span>
                <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;b&quot;</span> : <span class="hljs-literal">opt</span>
                <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;a&quot;</span> : <span class="hljs-literal">opt</span>
            }
            <span class="hljs-strong">object</span> <span class="hljs-string">&quot;is_hurt_color&quot;</span> : <span class="hljs-literal">opt</span>
            {
                <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;r&quot;</span> : <span class="hljs-literal">opt</span>
                <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;g&quot;</span> : <span class="hljs-literal">opt</span>
                <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;b&quot;</span> : <span class="hljs-literal">opt</span>
                <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;a&quot;</span> : <span class="hljs-literal">opt</span>
            }
            <span class="hljs-strong">object</span> <span class="hljs-string">&quot;uv_anim&quot;</span> : <span class="hljs-literal">opt</span>
            {
                <span class="hljs-strong">array</span> <span class="hljs-string">&quot;offset&quot;</span>[<span class="hljs-number">2</span>]
                {
                    <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                }
                <span class="hljs-strong">array</span> <span class="hljs-string">&quot;scale&quot;</span>[<span class="hljs-number">2</span>]
                {
                    <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                }
            }
            <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;light_color_multiplier&quot;</span> : <span class="hljs-literal">opt</span>
            <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;ignore_lighting&quot;</span> : <span class="hljs-literal">opt</span>
            <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;filter_lighting&quot;</span> : <span class="hljs-literal">opt</span>
        }
    }
}

<span class="hljs-title">geometry</span>:<span class="hljs-meta">1.8.0</span>:{
    <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;debug&quot;</span> : <span class="hljs-literal">opt</span>
    <span class="hljs-strong">version</span> <span class="hljs-string">&quot;format_version&quot;</span>
    <span class="hljs-strong">object</span> <span class="hljs-string">&quot;geometry.[a-zA-Z0-9_.&#39;-:]+&quot;</span>
    {
        <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;debug&quot;</span> : <span class="hljs-literal">opt</span>
        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;visible_bounds_width&quot;</span> : <span class="hljs-literal">opt</span>
        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;visible_bounds_height&quot;</span> : <span class="hljs-literal">opt</span>
        <span class="hljs-strong">array</span> <span class="hljs-string">&quot;visible_bounds_offset&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
        {
            <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
        }
        <span class="hljs-strong">int</span> <span class="hljs-string">&quot;texturewidth&quot;</span> : <span class="hljs-literal">opt</span>
        <span class="hljs-strong">int</span> <span class="hljs-string">&quot;textureheight&quot;</span> : <span class="hljs-literal">opt</span>
        <span class="hljs-strong">string</span> <span class="hljs-string">&quot;cape&quot;</span> : <span class="hljs-literal">opt</span>
        <span class="hljs-strong">array</span> <span class="hljs-string">&quot;bones&quot;</span> : <span class="hljs-literal">opt</span>
        {
            <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> : <span class="hljs-literal">opt</span>
            {
                <span class="hljs-strong">string</span> <span class="hljs-string">&quot;name&quot;</span>
                <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;reset&quot;</span> : <span class="hljs-literal">opt</span>
                <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;neverRender&quot;</span> : <span class="hljs-literal">opt</span>
                <span class="hljs-strong">string</span> <span class="hljs-string">&quot;parent&quot;</span> : <span class="hljs-literal">opt</span>
                <span class="hljs-strong">array</span> <span class="hljs-string">&quot;pivot&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                {
                    <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                }
                <span class="hljs-strong">array</span> <span class="hljs-string">&quot;rotation&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                {
                    <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                }
                <span class="hljs-strong">array</span> <span class="hljs-string">&quot;bind_pose_rotation&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                {
                    <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> : <span class="hljs-literal">opt</span>
                }
                <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;mirror&quot;</span> : <span class="hljs-literal">opt</span>
                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;inflate&quot;</span> : <span class="hljs-literal">opt</span>
                <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;debug&quot;</span> : <span class="hljs-literal">opt</span>
                <span class="hljs-strong">int</span> <span class="hljs-string">&quot;render_group_id&quot;</span>&lt;<span class="hljs-number">0</span>-<span class="hljs-number">*</span>&gt; : <span class="hljs-literal">opt</span>
                <span class="hljs-strong">array</span> <span class="hljs-string">&quot;cubes&quot;</span> : <span class="hljs-literal">opt</span>
                {
                    <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> : <span class="hljs-literal">opt</span>
                    {
                        <span class="hljs-strong">array</span> <span class="hljs-string">&quot;origin&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                        {
                            <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                        }
                        <span class="hljs-strong">array</span> <span class="hljs-string">&quot;size&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                        {
                            <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                        }
                        <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uv&quot;</span>[<span class="hljs-number">2</span>] : <span class="hljs-literal">opt</span>
                        {
                            <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                        }
                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;inflate&quot;</span> : <span class="hljs-literal">opt</span>
                        <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;mirror&quot;</span> : <span class="hljs-literal">opt</span>
                    }
                }
                <span class="hljs-strong">object</span> <span class="hljs-string">&quot;locators&quot;</span> : <span class="hljs-literal">opt</span>
                {
                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;&lt;identifier&gt;&quot;</span> : <span class="hljs-literal">opt</span>
                    {
                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> : <span class="hljs-literal">opt</span>
                    }
                }
                <span class="hljs-strong">object</span> <span class="hljs-string">&quot;poly_mesh&quot;</span> : <span class="hljs-literal">opt</span>
                {
                    <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;normalized_uvs&quot;</span> : <span class="hljs-literal">opt</span>
                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;positions&quot;</span> : <span class="hljs-literal">opt</span>
                    {
                        <span class="hljs-strong">array</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                        {
                            <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                        }
                    }
                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;normals&quot;</span> : <span class="hljs-literal">opt</span>
                    {
                        <span class="hljs-strong">array</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                        {
                            <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                        }
                    }
                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uvs&quot;</span> : <span class="hljs-literal">opt</span>
                    {
                        <span class="hljs-strong">array</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>[<span class="hljs-number">2</span>] : <span class="hljs-literal">opt</span>
                        {
                            <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                        }
                    }
                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;polys&quot;</span>
                    {
                        <span class="hljs-strong">array</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>[<span class="hljs-number">3</span>,<span class="hljs-number">4</span>] : <span class="hljs-literal">opt</span>
                        {
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>[<span class="hljs-number">3</span>]
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                            }
                        }
                    }
                    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;polys&quot;</span>&lt;<span class="hljs-string">&quot;tri_list&quot;</span>, <span class="hljs-string">&quot;quad_list&quot;</span>&gt;
                }
                <span class="hljs-strong">array</span> <span class="hljs-string">&quot;texture_meshes&quot;</span> : <span class="hljs-literal">opt</span>
                {
                    <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                    {
                        <span class="hljs-strong">string</span> <span class="hljs-string">&quot;texture&quot;</span>
                        <span class="hljs-strong">array</span> <span class="hljs-string">&quot;position&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                        {
                            <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                        }
                        <span class="hljs-strong">array</span> <span class="hljs-string">&quot;local_pivot&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                        {
                            <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                        }
                        <span class="hljs-strong">array</span> <span class="hljs-string">&quot;rotation&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                        {
                            <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                        }
                        <span class="hljs-strong">array</span> <span class="hljs-string">&quot;scale&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                        {
                            <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                        }
                    }
                }
            }
        }
    }
}

<span class="hljs-title">geometry</span>:<span class="hljs-meta">1.12.0</span>:{
    <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;debug&quot;</span> : <span class="hljs-literal">opt</span>
    <span class="hljs-strong">version</span> <span class="hljs-string">&quot;format_version&quot;</span>
    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;minecraft:geometry&quot;</span>[<span class="hljs-number">1</span>,<span class="hljs-number">*</span>]
    {
        <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
        {
            <span class="hljs-strong">object</span> <span class="hljs-string">&quot;description&quot;</span>
            {
                <span class="hljs-strong">string</span> <span class="hljs-string">&quot;identifier&quot;</span> <span class="hljs-comment">// Entity definition and Client Block definition files refer to this geometry via this identifier.</span>
                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;visible_bounds_width&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Width of the visibility bounding box (in model space units).</span>
                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;visible_bounds_height&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Height of the visible bounding box (in model space units).</span>
                <span class="hljs-strong">array</span> <span class="hljs-string">&quot;visible_bounds_offset&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                {
                    <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// Offset of the visibility bounding box from the entity location point (in model space units).</span>
                }
                <span class="hljs-strong">int</span> <span class="hljs-string">&quot;texture_width&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Assumed width in texels of the texture that will be bound to this geometry.</span>
                <span class="hljs-strong">int</span> <span class="hljs-string">&quot;texture_height&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Assumed height in texels of the texture that will be bound to this geometry.</span>
            }
            <span class="hljs-strong">string</span> <span class="hljs-string">&quot;cape&quot;</span> : <span class="hljs-literal">opt</span>
            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;bones&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Bones define the &#39;skeleton&#39; of the mob: the parts that can be animated, and to which geometry and other bones are attached.</span>
            {
                <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> : <span class="hljs-literal">opt</span>
                {
                    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;name&quot;</span> <span class="hljs-comment">// Animation files refer to this bone via this identifier.</span>
                    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;parent&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Bone that this bone is relative to.  If the parent bone moves, this bone will move along with it.</span>
                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;pivot&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                    {
                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// The bone pivots around this point (in model space units).</span>
                    }
                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;rotation&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                    {
                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// This is the initial rotation of the bone around the pivot, pre-animation (in degrees, x-then-y-then-z order).</span>
                    }
                    <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;mirror&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Mirrors the UV&#39;s of the unrotated cubes along the x axis, also causes the east/west faces to get flipped.</span>
                    <span class="hljs-strong">float</span> <span class="hljs-string">&quot;inflate&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Grow this box by this additive amount in all directions (in model space units).</span>
                    <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;debug&quot;</span> : <span class="hljs-literal">opt</span>
                    <span class="hljs-strong">int</span> <span class="hljs-string">&quot;render_group_id&quot;</span>&lt;<span class="hljs-number">0</span>-<span class="hljs-number">*</span>&gt; : <span class="hljs-literal">opt</span>
                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;cubes&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// This is the list of cubes associated with this bone.</span>
                    {
                        <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> : <span class="hljs-literal">opt</span>
                        {
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;origin&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// This point declares the unrotated lower corner of cube (smallest x/y/z value in model space units).</span>
                            }
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;size&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// The cube extends this amount relative to its origin (in model space units).</span>
                            }
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;rotation&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// The cube is rotated by this amount (in degrees, x-then-y-then-z order) around the pivot.</span>
                            }
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;pivot&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// If this field is specified, rotation of this cube occurs around this point, otherwise its rotation is around the center of the box.  Note that in 1.12 this is flipped upside-down, but is fixed in 1.14.</span>
                            }
                            <span class="hljs-strong">float</span> <span class="hljs-string">&quot;inflate&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Grow this box by this additive amount in all directions (in model space units), this field overrides the bone&#39;s inflate field for this cube only.</span>
                            <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;mirror&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Mirrors this cube about the unrotated x axis (effectively flipping the east / west faces), overriding the bone&#39;s &#39;mirror&#39; setting for this cube.</span>
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uv&quot;</span>[<span class="hljs-number">2</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// Specifies the upper-left corner on the texture for the start of the texture mapping for this box.</span>
                            }
                            <span class="hljs-strong">object</span> <span class="hljs-string">&quot;uv&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// This is an alternate per-face uv mapping which specifies each face of the cube.  Omitting a face will cause that face to not get drawn.</span>
                            {
                                <span class="hljs-strong">object</span> <span class="hljs-string">&quot;north&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Specifies the UV&#39;s for the face that stretches along the x and y axes, and faces the -z axis.</span>
                                {
                                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uv&quot;</span>[<span class="hljs-number">2</span>]
                                    {
                                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// Specifies the uv origin for the face. For this face, it is the upper-left corner, when looking at the face with y being up.</span>
                                    }
                                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uv_size&quot;</span>[<span class="hljs-number">2</span>] : <span class="hljs-literal">opt</span>
                                    {
                                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// The face maps this many texels from the uv origin. If not specified, the box dimensions are used instead.</span>
                                    }
                                    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;material_instance&quot;</span> : <span class="hljs-literal">opt</span>
                                }
                                <span class="hljs-strong">object</span> <span class="hljs-string">&quot;south&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Specifies the UV&#39;s for the face that stretches along the x and y axes, and faces the z axis</span>
                                {
                                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uv&quot;</span>[<span class="hljs-number">2</span>]
                                    {
                                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// Specifies the uv origin for the face. For this face, it is the upper-left corner, when looking at the face with y being up.</span>
                                    }
                                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uv_size&quot;</span>[<span class="hljs-number">2</span>] : <span class="hljs-literal">opt</span>
                                    {
                                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// The face maps this many texels from the uv origin. If not specified, the box dimensions are used instead.</span>
                                    }
                                    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;material_instance&quot;</span> : <span class="hljs-literal">opt</span>
                                }
                                <span class="hljs-strong">object</span> <span class="hljs-string">&quot;east&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Specifies the UV&#39;s for the face that stretches along the z and y axes, and faces the x axis</span>
                                {
                                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uv&quot;</span>[<span class="hljs-number">2</span>]
                                    {
                                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// Specifies the uv origin for the face. For this face, it is the upper-left corner, when looking at the face with y being up.</span>
                                    }
                                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uv_size&quot;</span>[<span class="hljs-number">2</span>] : <span class="hljs-literal">opt</span>
                                    {
                                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// The face maps this many texels from the uv origin. If not specified, the box dimensions are used instead.</span>
                                    }
                                    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;material_instance&quot;</span> : <span class="hljs-literal">opt</span>
                                }
                                <span class="hljs-strong">object</span> <span class="hljs-string">&quot;west&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Specifies the UV&#39;s for the face that stretches along the z and y axes, and faces the -x axis</span>
                                {
                                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uv&quot;</span>[<span class="hljs-number">2</span>]
                                    {
                                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// Specifies the uv origin for the face. For this face, it is the upper-left corner, when looking at the face with y being up.</span>
                                    }
                                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uv_size&quot;</span>[<span class="hljs-number">2</span>] : <span class="hljs-literal">opt</span>
                                    {
                                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// The face maps this many texels from the uv origin. If not specified, the box dimensions are used instead.</span>
                                    }
                                    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;material_instance&quot;</span> : <span class="hljs-literal">opt</span>
                                }
                                <span class="hljs-strong">object</span> <span class="hljs-string">&quot;up&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Specifies the UV&#39;s for the face that stretches along the x and z axes, and faces the y axis</span>
                                {
                                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uv&quot;</span>[<span class="hljs-number">2</span>]
                                    {
                                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// Specifies the uv origin for the face. For this face, it is the back-upper-left corner, assuming you&#39;re facing &#39;north&#39; relative to the cube.</span>
                                    }
                                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uv_size&quot;</span>[<span class="hljs-number">2</span>] : <span class="hljs-literal">opt</span>
                                    {
                                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// The face maps this many texels from the uv origin. If not specified, the box dimensions are used instead.</span>
                                    }
                                    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;material_instance&quot;</span> : <span class="hljs-literal">opt</span>
                                }
                                <span class="hljs-strong">object</span> <span class="hljs-string">&quot;down&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Specifies the UV&#39;s for the face that stretches along the x and z axes, and faces the -y axis</span>
                                {
                                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uv&quot;</span>[<span class="hljs-number">2</span>]
                                    {
                                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// Specifies the uv origin for the face. For this face, it is the back-down-right corner, assuming you&#39;re facing &#39;north&#39; relative to the cube.</span>
                                    }
                                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uv_size&quot;</span>[<span class="hljs-number">2</span>] : <span class="hljs-literal">opt</span>
                                    {
                                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// The face maps this many texels from the uv origin. If not specified, the box dimensions are used instead.</span>
                                    }
                                    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;material_instance&quot;</span> : <span class="hljs-literal">opt</span>
                                }
                            }
                        }
                    }
                    <span class="hljs-strong">object</span> <span class="hljs-string">&quot;locators&quot;</span> : <span class="hljs-literal">opt</span>
                    {
                        <span class="hljs-strong">array</span> <span class="hljs-string">&quot;&lt;identifier&gt;&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// This is a list of locators associated with this bone.  A locator is a point in model space that tracks a particular bone as the bone animates (by maintaining it&#39;s relationship to the bone through the animation).</span>
                        {
                            <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Position of the locator in model space.</span>
                        }
                        <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;identifier&gt;&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// This is a list of locators associated with this bone.  A locator is a point in model space that tracks a particular bone as the bone animates (by maintaining it&#39;s relationship to the bone through the animation).</span>
                        {
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;offset&quot;</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Position of the locator in model space.</span>
                            }
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;rotation&quot;</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Rotation of the locator in model space.</span>
                            }
                            <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;ignore_inherited_scale&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Discard scale inherited from parent bone.</span>
                        }
                    }
                    <span class="hljs-strong">object</span> <span class="hljs-string">&quot;poly_mesh&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// ***EXPERIMENTAL*** A triangle or quad mesh object.  Can be used in conjunction with cubes and texture geometry.</span>
                    {
                        <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;normalized_uvs&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// If true, UVs are assumed to be [0-1].  If false, UVs are assumed to be [0-texture_width] and [0-texture_height] respectively.</span>
                        <span class="hljs-strong">array</span> <span class="hljs-string">&quot;positions&quot;</span> : <span class="hljs-literal">opt</span>
                        {
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// Vertex positions for the mesh.  Can be either indexed via the &quot;polys&quot; section, or be a quad-list if mapped 1-to-1 to the normals and UVs sections.</span>
                            }
                        }
                        <span class="hljs-strong">array</span> <span class="hljs-string">&quot;normals&quot;</span> : <span class="hljs-literal">opt</span>
                        {
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// Vertex normals.  Can be either indexed via the &quot;polys&quot; section, or be a quad-list if mapped 1-to-1 to the positions and UVs sections.</span>
                            }
                        }
                        <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uvs&quot;</span> : <span class="hljs-literal">opt</span>
                        {
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>[<span class="hljs-number">2</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// Vertex UVs.  Can be either indexed via the &quot;polys&quot; section, or be a quad-list if mapped 1-to-1 to the positions and normals sections.</span>
                            }
                        }
                        <span class="hljs-strong">array</span> <span class="hljs-string">&quot;polys&quot;</span>
                        {
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>[<span class="hljs-number">3</span>,<span class="hljs-number">4</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">array</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>[<span class="hljs-number">3</span>]
                                {
                                    <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// Poly element indices, as an array of polygons, each an array of either three or four vertices, each an array of indices into positions, normals, and UVs (in that order).</span>
                                }
                            }
                        }
                        <span class="hljs-strong">string</span> <span class="hljs-string">&quot;polys&quot;</span>&lt;<span class="hljs-string">&quot;tri_list&quot;</span>, <span class="hljs-string">&quot;quad_list&quot;</span>&gt; <span class="hljs-comment">// If not specifying vertex indices, arrays of data must be a list of tris or quads, set by making this property either &quot;tri_list&quot; or &quot;quad_list&quot;</span>
                    }
                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;texture_meshes&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// ***EXPERIMENTAL*** Adds a mesh to the bone&#39;s geometry by converting texels in a texture into boxes</span>
                    {
                        <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                        {
                            <span class="hljs-strong">string</span> <span class="hljs-string">&quot;texture&quot;</span> <span class="hljs-comment">// The friendly-named texture to use.</span>
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;position&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// The position of the pivot point after rotation (in *entity space* not texture or bone space) of the texture geometry</span>
                            }
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;local_pivot&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// The pivot point on the texture (in *texture space* not entity or bone space) of the texture geometry</span>
                            }
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;rotation&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// The rotation (in degrees) of the texture geometry relative to the offset</span>
                            }
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;scale&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// The scale (in degrees) of the texture geometry relative to the offset</span>
                            }
                        }
                    }
                }
            }
        }
    }
}

<span class="hljs-title">geometry</span>:<span class="hljs-meta">1.14.0</span>:{
    <span class="hljs-strong">version</span> <span class="hljs-string">&quot;format_version&quot;</span>
    <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;debug&quot;</span> : <span class="hljs-literal">opt</span>
    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;minecraft:geometry&quot;</span>[<span class="hljs-number">1</span>,<span class="hljs-number">*</span>]
    {
        <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
        {
            <span class="hljs-strong">object</span> <span class="hljs-string">&quot;description&quot;</span>
            {
                <span class="hljs-strong">string</span> <span class="hljs-string">&quot;identifier&quot;</span> <span class="hljs-comment">// Entity definition and Client Block definition files refer to this geometry via this identifier.</span>
                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;visible_bounds_width&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Width of the visibility bounding box (in model space units).</span>
                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;visible_bounds_height&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Height of the visible bounding box (in model space units).</span>
                <span class="hljs-strong">array</span> <span class="hljs-string">&quot;visible_bounds_offset&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                {
                    <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// Offset of the visibility bounding box from the entity location point (in model space units).</span>
                }
                <span class="hljs-strong">int</span> <span class="hljs-string">&quot;texture_width&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Assumed width in texels of the texture that will be bound to this geometry.</span>
                <span class="hljs-strong">int</span> <span class="hljs-string">&quot;texture_height&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Assumed height in texels of the texture that will be bound to this geometry.</span>
            }
            <span class="hljs-strong">string</span> <span class="hljs-string">&quot;cape&quot;</span> : <span class="hljs-literal">opt</span>
            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;bones&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Bones define the &#39;skeleton&#39; of the mob: the parts that can be animated, and to which geometry and other bones are attached.</span>
            {
                <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> : <span class="hljs-literal">opt</span>
                {
                    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;name&quot;</span> <span class="hljs-comment">// Animation files refer to this bone via this identifier.</span>
                    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;parent&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Bone that this bone is relative to.  If the parent bone moves, this bone will move along with it.</span>
                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;pivot&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                    {
                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// The bone pivots around this point (in model space units).</span>
                    }
                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;rotation&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                    {
                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// This is the initial rotation of the bone around the pivot, pre-animation (in degrees, x-then-y-then-z order).</span>
                    }
                    <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;mirror&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Mirrors the UV&#39;s of the unrotated cubes along the x axis, also causes the east/west faces to get flipped.</span>
                    <span class="hljs-strong">float</span> <span class="hljs-string">&quot;inflate&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Grow this box by this additive amount in all directions (in model space units).</span>
                    <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;debug&quot;</span> : <span class="hljs-literal">opt</span>
                    <span class="hljs-strong">int</span> <span class="hljs-string">&quot;render_group_id&quot;</span>&lt;<span class="hljs-number">0</span>-<span class="hljs-number">*</span>&gt; : <span class="hljs-literal">opt</span>
                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;cubes&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// This is the list of cubes associated with this bone.</span>
                    {
                        <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> : <span class="hljs-literal">opt</span>
                        {
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;origin&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// This point declares the unrotated lower corner of cube (smallest x/y/z value in model space units).</span>
                            }
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;size&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// The cube extends this amount relative to its origin (in model space units).</span>
                            }
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;rotation&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// The cube is rotated by this amount (in degrees, x-then-y-then-z order) around the pivot.</span>
                            }
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;pivot&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// If this field is specified, rotation of this cube occurs around this point, otherwise its rotation is around the center of the box.</span>
                            }
                            <span class="hljs-strong">float</span> <span class="hljs-string">&quot;inflate&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Grow this box by this additive amount in all directions (in model space units), this field overrides the bone&#39;s inflate field for this cube only.</span>
                            <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;mirror&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Mirrors this cube about the unrotated x axis (effectively flipping the east / west faces), overriding the bone&#39;s &#39;mirror&#39; setting for this cube.</span>
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uv&quot;</span>[<span class="hljs-number">2</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// Specifies the upper-left corner on the texture for the start of the texture mapping for this box.</span>
                            }
                            <span class="hljs-strong">object</span> <span class="hljs-string">&quot;uv&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// This is an alternate per-face uv mapping which specifies each face of the cube.  Omitting a face will cause that face to not get drawn.</span>
                            {
                                <span class="hljs-strong">object</span> <span class="hljs-string">&quot;north&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Specifies the UV&#39;s for the face that stretches along the x and y axes, and faces the -z axis.</span>
                                {
                                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uv&quot;</span>[<span class="hljs-number">2</span>]
                                    {
                                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// Specifies the uv origin for the face. For this face, it is the upper-left corner, when looking at the face with y being up.</span>
                                    }
                                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uv_size&quot;</span>[<span class="hljs-number">2</span>] : <span class="hljs-literal">opt</span>
                                    {
                                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// The face maps this many texels from the uv origin. If not specified, the box dimensions are used instead.</span>
                                    }
                                    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;material_instance&quot;</span> : <span class="hljs-literal">opt</span>
                                }
                                <span class="hljs-strong">object</span> <span class="hljs-string">&quot;south&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Specifies the UV&#39;s for the face that stretches along the x and y axes, and faces the z axis</span>
                                {
                                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uv&quot;</span>[<span class="hljs-number">2</span>]
                                    {
                                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// Specifies the uv origin for the face. For this face, it is the upper-left corner, when looking at the face with y being up.</span>
                                    }
                                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uv_size&quot;</span>[<span class="hljs-number">2</span>] : <span class="hljs-literal">opt</span>
                                    {
                                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// The face maps this many texels from the uv origin. If not specified, the box dimensions are used instead.</span>
                                    }
                                    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;material_instance&quot;</span> : <span class="hljs-literal">opt</span>
                                }
                                <span class="hljs-strong">object</span> <span class="hljs-string">&quot;east&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Specifies the UV&#39;s for the face that stretches along the z and y axes, and faces the x axis</span>
                                {
                                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uv&quot;</span>[<span class="hljs-number">2</span>]
                                    {
                                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// Specifies the uv origin for the face. For this face, it is the upper-left corner, when looking at the face with y being up.</span>
                                    }
                                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uv_size&quot;</span>[<span class="hljs-number">2</span>] : <span class="hljs-literal">opt</span>
                                    {
                                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// The face maps this many texels from the uv origin. If not specified, the box dimensions are used instead.</span>
                                    }
                                    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;material_instance&quot;</span> : <span class="hljs-literal">opt</span>
                                }
                                <span class="hljs-strong">object</span> <span class="hljs-string">&quot;west&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Specifies the UV&#39;s for the face that stretches along the z and y axes, and faces the -x axis</span>
                                {
                                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uv&quot;</span>[<span class="hljs-number">2</span>]
                                    {
                                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// Specifies the uv origin for the face. For this face, it is the upper-left corner, when looking at the face with y being up.</span>
                                    }
                                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uv_size&quot;</span>[<span class="hljs-number">2</span>] : <span class="hljs-literal">opt</span>
                                    {
                                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// The face maps this many texels from the uv origin. If not specified, the box dimensions are used instead.</span>
                                    }
                                    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;material_instance&quot;</span> : <span class="hljs-literal">opt</span>
                                }
                                <span class="hljs-strong">object</span> <span class="hljs-string">&quot;up&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Specifies the UV&#39;s for the face that stretches along the x and z axes, and faces the y axis</span>
                                {
                                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uv&quot;</span>[<span class="hljs-number">2</span>]
                                    {
                                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// Specifies the uv origin for the face. For this face, it is the back-upper-left corner, assuming you&#39;re facing &#39;north&#39; relative to the cube.</span>
                                    }
                                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uv_size&quot;</span>[<span class="hljs-number">2</span>] : <span class="hljs-literal">opt</span>
                                    {
                                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// The face maps this many texels from the uv origin. If not specified, the box dimensions are used instead.</span>
                                    }
                                    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;material_instance&quot;</span> : <span class="hljs-literal">opt</span>
                                }
                                <span class="hljs-strong">object</span> <span class="hljs-string">&quot;down&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Specifies the UV&#39;s for the face that stretches along the x and z axes, and faces the -y axis</span>
                                {
                                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uv&quot;</span>[<span class="hljs-number">2</span>]
                                    {
                                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// Specifies the uv origin for the face. For this face, it is the back-down-right corner, assuming you&#39;re facing &#39;north&#39; relative to the cube.</span>
                                    }
                                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uv_size&quot;</span>[<span class="hljs-number">2</span>] : <span class="hljs-literal">opt</span>
                                    {
                                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// The face maps this many texels from the uv origin. If not specified, the box dimensions are used instead.</span>
                                    }
                                    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;material_instance&quot;</span> : <span class="hljs-literal">opt</span>
                                }
                            }
                        }
                    }
                    <span class="hljs-strong">object</span> <span class="hljs-string">&quot;locators&quot;</span> : <span class="hljs-literal">opt</span>
                    {
                        <span class="hljs-strong">array</span> <span class="hljs-string">&quot;&lt;identifier&gt;&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// This is a list of locators associated with this bone.  A locator is a point in model space that tracks a particular bone as the bone animates (by maintaining it&#39;s relationship to the bone through the animation).</span>
                        {
                            <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Position of the locator in model space.</span>
                        }
                        <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;identifier&gt;&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// This is a list of locators associated with this bone.  A locator is a point in model space that tracks a particular bone as the bone animates (by maintaining it&#39;s relationship to the bone through the animation).</span>
                        {
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;offset&quot;</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Position of the locator in model space.</span>
                            }
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;rotation&quot;</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Rotation of the locator in model space.</span>
                            }
                            <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;ignore_inherited_scale&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Discard scale inherited from parent bone.</span>
                        }
                    }
                    <span class="hljs-strong">object</span> <span class="hljs-string">&quot;poly_mesh&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// ***EXPERIMENTAL*** A triangle or quad mesh object.  Can be used in conjunction with cubes and texture geometry.</span>
                    {
                        <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;normalized_uvs&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// If true, UVs are assumed to be [0-1].  If false, UVs are assumed to be [0-texture_width] and [0-texture_height] respectively.</span>
                        <span class="hljs-strong">array</span> <span class="hljs-string">&quot;positions&quot;</span> : <span class="hljs-literal">opt</span>
                        {
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// Vertex positions for the mesh.  Can be either indexed via the &quot;polys&quot; section, or be a quad-list if mapped 1-to-1 to the normals and UVs sections.</span>
                            }
                        }
                        <span class="hljs-strong">array</span> <span class="hljs-string">&quot;normals&quot;</span> : <span class="hljs-literal">opt</span>
                        {
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// Vertex normals.  Can be either indexed via the &quot;polys&quot; section, or be a quad-list if mapped 1-to-1 to the positions and UVs sections.</span>
                            }
                        }
                        <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uvs&quot;</span> : <span class="hljs-literal">opt</span>
                        {
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>[<span class="hljs-number">2</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// Vertex UVs.  Can be either indexed via the &quot;polys&quot; section, or be a quad-list if mapped 1-to-1 to the positions and normals sections.</span>
                            }
                        }
                        <span class="hljs-strong">array</span> <span class="hljs-string">&quot;polys&quot;</span>
                        {
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>[<span class="hljs-number">3</span>,<span class="hljs-number">4</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">array</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>[<span class="hljs-number">3</span>]
                                {
                                    <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// Poly element indices, as an array of polygons, each an array of either three or four vertices, each an array of indices into positions, normals, and UVs (in that order).</span>
                                }
                            }
                        }
                        <span class="hljs-strong">string</span> <span class="hljs-string">&quot;polys&quot;</span>&lt;<span class="hljs-string">&quot;tri_list&quot;</span>, <span class="hljs-string">&quot;quad_list&quot;</span>&gt; <span class="hljs-comment">// If not specifying vertex indices, arrays of data must be a list of tris or quads, set by making this property either &quot;tri_list&quot; or &quot;quad_list&quot;</span>
                    }
                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;texture_meshes&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// ***EXPERIMENTAL*** Adds a mesh to the bone&#39;s geometry by converting texels in a texture into boxes</span>
                    {
                        <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                        {
                            <span class="hljs-strong">string</span> <span class="hljs-string">&quot;texture&quot;</span> <span class="hljs-comment">// The friendly-named texture to use.</span>
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;position&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// The position of the pivot point after rotation (in *entity space* not texture or bone space) of the texture geometry</span>
                            }
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;local_pivot&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// The pivot point on the texture (in *texture space* not entity or bone space) of the texture geometry</span>
                            }
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;rotation&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// The rotation (in degrees) of the texture geometry relative to the offset</span>
                            }
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;scale&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// The scale (in degrees) of the texture geometry relative to the offset</span>
                            }
                        }
                    }
                }
            }
        }
    }
}

<span class="hljs-title">geometry</span>:<span class="hljs-meta">1.16.0</span>:{
    <span class="hljs-strong">version</span> <span class="hljs-string">&quot;format_version&quot;</span>
    <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;debug&quot;</span> : <span class="hljs-literal">opt</span>
    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;minecraft:geometry&quot;</span>[<span class="hljs-number">1</span>,<span class="hljs-number">*</span>]
    {
        <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
        {
            <span class="hljs-strong">object</span> <span class="hljs-string">&quot;description&quot;</span>
            {
                <span class="hljs-strong">string</span> <span class="hljs-string">&quot;identifier&quot;</span> <span class="hljs-comment">// Entity definition and Client Block definition files refer to this geometry via this identifier.</span>
                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;visible_bounds_width&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Width of the visibility bounding box (in model space units).</span>
                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;visible_bounds_height&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Height of the visible bounding box (in model space units).</span>
                <span class="hljs-strong">array</span> <span class="hljs-string">&quot;visible_bounds_offset&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                {
                    <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// Offset of the visibility bounding box from the entity location point (in model space units).</span>
                }
                <span class="hljs-strong">int</span> <span class="hljs-string">&quot;texture_width&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Assumed width in texels of the texture that will be bound to this geometry.</span>
                <span class="hljs-strong">int</span> <span class="hljs-string">&quot;texture_height&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Assumed height in texels of the texture that will be bound to this geometry.</span>
            }
            <span class="hljs-strong">string</span> <span class="hljs-string">&quot;cape&quot;</span> : <span class="hljs-literal">opt</span>
            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;bones&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Bones define the &#39;skeleton&#39; of the mob: the parts that can be animated, and to which geometry and other bones are attached.</span>
            {
                <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> : <span class="hljs-literal">opt</span>
                {
                    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;name&quot;</span> <span class="hljs-comment">// Animation files refer to this bone via this identifier.</span>
                    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;parent&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Bone that this bone is relative to.  If the parent bone moves, this bone will move along with it.</span>
                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;pivot&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                    {
                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// The bone pivots around this point (in model space units).</span>
                    }
                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;rotation&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                    {
                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// This is the initial rotation of the bone around the pivot, pre-animation (in degrees, x-then-y-then-z order).</span>
                    }
                    <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;mirror&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Mirrors the UV&#39;s of the unrotated cubes along the x axis, also causes the east/west faces to get flipped.</span>
                    <span class="hljs-strong">float</span> <span class="hljs-string">&quot;inflate&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Grow this box by this additive amount in all directions (in model space units).</span>
                    <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;debug&quot;</span> : <span class="hljs-literal">opt</span>
                    <span class="hljs-strong">int</span> <span class="hljs-string">&quot;render_group_id&quot;</span>&lt;<span class="hljs-number">0</span>-<span class="hljs-number">*</span>&gt; : <span class="hljs-literal">opt</span>
                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;cubes&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// This is the list of cubes associated with this bone.</span>
                    {
                        <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> : <span class="hljs-literal">opt</span>
                        {
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;origin&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// This point declares the unrotated lower corner of cube (smallest x/y/z value in model space units).</span>
                            }
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;size&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// The cube extends this amount relative to its origin (in model space units).</span>
                            }
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;rotation&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// The cube is rotated by this amount (in degrees, x-then-y-then-z order) around the pivot.</span>
                            }
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;pivot&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// If this field is specified, rotation of this cube occurs around this point, otherwise its rotation is around the center of the box.</span>
                            }
                            <span class="hljs-strong">float</span> <span class="hljs-string">&quot;inflate&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Grow this box by this additive amount in all directions (in model space units), this field overrides the bone&#39;s inflate field for this cube only.</span>
                            <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;mirror&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Mirrors this cube about the unrotated x axis (effectively flipping the east / west faces), overriding the bone&#39;s &#39;mirror&#39; setting for this cube.</span>
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uv&quot;</span>[<span class="hljs-number">2</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// Specifies the upper-left corner on the texture for the start of the texture mapping for this box.</span>
                            }
                            <span class="hljs-strong">object</span> <span class="hljs-string">&quot;uv&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// This is an alternate per-face uv mapping which specifies each face of the cube.  Omitting a face will cause that face to not get drawn.</span>
                            {
                                <span class="hljs-strong">object</span> <span class="hljs-string">&quot;north&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Specifies the UV&#39;s for the face that stretches along the x and y axes, and faces the -z axis.</span>
                                {
                                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uv&quot;</span>[<span class="hljs-number">2</span>]
                                    {
                                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// Specifies the uv origin for the face. For this face, it is the upper-left corner, when looking at the face with y being up.</span>
                                    }
                                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uv_size&quot;</span>[<span class="hljs-number">2</span>] : <span class="hljs-literal">opt</span>
                                    {
                                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// The face maps this many texels from the uv origin. If not specified, the box dimensions are used instead.</span>
                                    }
                                    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;material_instance&quot;</span> : <span class="hljs-literal">opt</span>
                                }
                                <span class="hljs-strong">object</span> <span class="hljs-string">&quot;south&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Specifies the UV&#39;s for the face that stretches along the x and y axes, and faces the z axis</span>
                                {
                                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uv&quot;</span>[<span class="hljs-number">2</span>]
                                    {
                                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// Specifies the uv origin for the face. For this face, it is the upper-left corner, when looking at the face with y being up.</span>
                                    }
                                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uv_size&quot;</span>[<span class="hljs-number">2</span>] : <span class="hljs-literal">opt</span>
                                    {
                                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// The face maps this many texels from the uv origin. If not specified, the box dimensions are used instead.</span>
                                    }
                                    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;material_instance&quot;</span> : <span class="hljs-literal">opt</span>
                                }
                                <span class="hljs-strong">object</span> <span class="hljs-string">&quot;east&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Specifies the UV&#39;s for the face that stretches along the z and y axes, and faces the x axis</span>
                                {
                                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uv&quot;</span>[<span class="hljs-number">2</span>]
                                    {
                                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// Specifies the uv origin for the face. For this face, it is the upper-left corner, when looking at the face with y being up.</span>
                                    }
                                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uv_size&quot;</span>[<span class="hljs-number">2</span>] : <span class="hljs-literal">opt</span>
                                    {
                                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// The face maps this many texels from the uv origin. If not specified, the box dimensions are used instead.</span>
                                    }
                                    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;material_instance&quot;</span> : <span class="hljs-literal">opt</span>
                                }
                                <span class="hljs-strong">object</span> <span class="hljs-string">&quot;west&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Specifies the UV&#39;s for the face that stretches along the z and y axes, and faces the -x axis</span>
                                {
                                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uv&quot;</span>[<span class="hljs-number">2</span>]
                                    {
                                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// Specifies the uv origin for the face. For this face, it is the upper-left corner, when looking at the face with y being up.</span>
                                    }
                                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uv_size&quot;</span>[<span class="hljs-number">2</span>] : <span class="hljs-literal">opt</span>
                                    {
                                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// The face maps this many texels from the uv origin. If not specified, the box dimensions are used instead.</span>
                                    }
                                    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;material_instance&quot;</span> : <span class="hljs-literal">opt</span>
                                }
                                <span class="hljs-strong">object</span> <span class="hljs-string">&quot;up&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Specifies the UV&#39;s for the face that stretches along the x and z axes, and faces the y axis</span>
                                {
                                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uv&quot;</span>[<span class="hljs-number">2</span>]
                                    {
                                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// Specifies the uv origin for the face. For this face, it is the back-upper-left corner, assuming you&#39;re facing &#39;north&#39; relative to the cube.</span>
                                    }
                                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uv_size&quot;</span>[<span class="hljs-number">2</span>] : <span class="hljs-literal">opt</span>
                                    {
                                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// The face maps this many texels from the uv origin. If not specified, the box dimensions are used instead.</span>
                                    }
                                    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;material_instance&quot;</span> : <span class="hljs-literal">opt</span>
                                }
                                <span class="hljs-strong">object</span> <span class="hljs-string">&quot;down&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Specifies the UV&#39;s for the face that stretches along the x and z axes, and faces the -y axis</span>
                                {
                                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uv&quot;</span>[<span class="hljs-number">2</span>]
                                    {
                                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// Specifies the uv origin for the face. For this face, it is the back-down-right corner, assuming you&#39;re facing &#39;north&#39; relative to the cube.</span>
                                    }
                                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uv_size&quot;</span>[<span class="hljs-number">2</span>] : <span class="hljs-literal">opt</span>
                                    {
                                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// The face maps this many texels from the uv origin. If not specified, the box dimensions are used instead.</span>
                                    }
                                    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;material_instance&quot;</span> : <span class="hljs-literal">opt</span>
                                }
                            }
                        }
                    }
                    <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;binding&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// useful for items.  A molang expression specifying the bone name of the parent skeletal hierarchy that this bone should use as the root transform.  Without this field it will look for a bone in the parent entity with the same name as this bone.  If both are missing, it will assume a local skeletal hierarchy (via the &quot;parent&quot; field).  If that is also missing, it will attach to the owning entity&#39;s root transform.</span>
                    <span class="hljs-strong">object</span> <span class="hljs-string">&quot;locators&quot;</span> : <span class="hljs-literal">opt</span>
                    {
                        <span class="hljs-strong">array</span> <span class="hljs-string">&quot;&lt;identifier&gt;&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// This is a list of locators associated with this bone.  A locator is a point in model space that tracks a particular bone as the bone animates (by maintaining it&#39;s relationship to the bone through the animation).</span>
                        {
                            <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Position of the locator in model space.</span>
                        }
                        <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;identifier&gt;&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// This is a list of locators associated with this bone.  A locator is a point in model space that tracks a particular bone as the bone animates (by maintaining it&#39;s relationship to the bone through the animation).</span>
                        {
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;offset&quot;</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Position of the locator in model space.</span>
                            }
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;rotation&quot;</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Rotation of the locator in model space.</span>
                            }
                            <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;ignore_inherited_scale&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Discard scale inherited from parent bone.</span>
                        }
                    }
                    <span class="hljs-strong">object</span> <span class="hljs-string">&quot;poly_mesh&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// ***EXPERIMENTAL*** A triangle or quad mesh object.  Can be used in conjunction with cubes and texture geometry.</span>
                    {
                        <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;normalized_uvs&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// If true, UVs are assumed to be [0-1].  If false, UVs are assumed to be [0-texture_width] and [0-texture_height] respectively.</span>
                        <span class="hljs-strong">array</span> <span class="hljs-string">&quot;positions&quot;</span> : <span class="hljs-literal">opt</span>
                        {
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// Vertex positions for the mesh.  Can be either indexed via the &quot;polys&quot; section, or be a quad-list if mapped 1-to-1 to the normals and UVs sections.</span>
                            }
                        }
                        <span class="hljs-strong">array</span> <span class="hljs-string">&quot;normals&quot;</span> : <span class="hljs-literal">opt</span>
                        {
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// Vertex normals.  Can be either indexed via the &quot;polys&quot; section, or be a quad-list if mapped 1-to-1 to the positions and UVs sections.</span>
                            }
                        }
                        <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uvs&quot;</span> : <span class="hljs-literal">opt</span>
                        {
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>[<span class="hljs-number">2</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// Vertex UVs.  Can be either indexed via the &quot;polys&quot; section, or be a quad-list if mapped 1-to-1 to the positions and normals sections.</span>
                            }
                        }
                        <span class="hljs-strong">array</span> <span class="hljs-string">&quot;polys&quot;</span>
                        {
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>[<span class="hljs-number">3</span>,<span class="hljs-number">4</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">array</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>[<span class="hljs-number">3</span>]
                                {
                                    <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// Poly element indices, as an array of polygons, each an array of either three or four vertices, each an array of indices into positions, normals, and UVs (in that order).</span>
                                }
                            }
                        }
                        <span class="hljs-strong">string</span> <span class="hljs-string">&quot;polys&quot;</span>&lt;<span class="hljs-string">&quot;tri_list&quot;</span>, <span class="hljs-string">&quot;quad_list&quot;</span>&gt; <span class="hljs-comment">// If not specifying vertex indices, arrays of data must be a list of tris or quads, set by making this property either &quot;tri_list&quot; or &quot;quad_list&quot;</span>
                    }
                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;texture_meshes&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// ***EXPERIMENTAL*** Adds a mesh to the bone&#39;s geometry by converting texels in a texture into boxes</span>
                    {
                        <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                        {
                            <span class="hljs-strong">string</span> <span class="hljs-string">&quot;texture&quot;</span> <span class="hljs-comment">// The friendly-named texture to use.</span>
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;position&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// The position of the pivot point after rotation (in *entity space* not texture or bone space) of the texture geometry</span>
                            }
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;local_pivot&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// The pivot point on the texture (in *texture space* not entity or bone space) of the texture geometry</span>
                            }
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;rotation&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// The rotation (in degrees) of the texture geometry relative to the offset</span>
                            }
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;scale&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// The scale (in degrees) of the texture geometry relative to the offset</span>
                            }
                        }
                    }
                }
            }
        }
    }
}

<span class="hljs-title">geometry</span>:<span class="hljs-meta">1.19.30</span>:{
    <span class="hljs-strong">version</span> <span class="hljs-string">&quot;format_version&quot;</span>
    <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;debug&quot;</span> : <span class="hljs-literal">opt</span>
    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;minecraft:geometry&quot;</span>[<span class="hljs-number">1</span>,<span class="hljs-number">*</span>]
    {
        <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
        {
            <span class="hljs-strong">object</span> <span class="hljs-string">&quot;description&quot;</span>
            {
                <span class="hljs-strong">string</span> <span class="hljs-string">&quot;identifier&quot;</span> <span class="hljs-comment">// Entity definition and Client Block definition files refer to this geometry via this identifier.</span>
                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;visible_bounds_width&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Width of the visibility bounding box (in model space units).</span>
                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;visible_bounds_height&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Height of the visible bounding box (in model space units).</span>
                <span class="hljs-strong">array</span> <span class="hljs-string">&quot;visible_bounds_offset&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                {
                    <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// Offset of the visibility bounding box from the entity location point (in model space units).</span>
                }
                <span class="hljs-strong">int</span> <span class="hljs-string">&quot;texture_width&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Assumed width in texels of the texture that will be bound to this geometry.</span>
                <span class="hljs-strong">int</span> <span class="hljs-string">&quot;texture_height&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Assumed height in texels of the texture that will be bound to this geometry.</span>
            }
            <span class="hljs-strong">string</span> <span class="hljs-string">&quot;cape&quot;</span> : <span class="hljs-literal">opt</span>
            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;bones&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Bones define the &#39;skeleton&#39; of the mob: the parts that can be animated, and to which geometry and other bones are attached.</span>
            {
                <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> : <span class="hljs-literal">opt</span>
                {
                    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;name&quot;</span> <span class="hljs-comment">// Animation files refer to this bone via this identifier.</span>
                    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;parent&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Bone that this bone is relative to.  If the parent bone moves, this bone will move along with it.</span>
                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;pivot&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                    {
                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// The bone pivots around this point (in model space units).</span>
                    }
                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;rotation&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                    {
                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// This is the initial rotation of the bone around the pivot, pre-animation (in degrees, x-then-y-then-z order).</span>
                    }
                    <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;mirror&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Mirrors the UV&#39;s of the unrotated cubes along the x axis, also causes the east/west faces to get flipped.</span>
                    <span class="hljs-strong">float</span> <span class="hljs-string">&quot;inflate&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Grow this box by this additive amount in all directions (in model space units).</span>
                    <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;debug&quot;</span> : <span class="hljs-literal">opt</span>
                    <span class="hljs-strong">int</span> <span class="hljs-string">&quot;render_group_id&quot;</span>&lt;<span class="hljs-number">0</span>-<span class="hljs-number">*</span>&gt; : <span class="hljs-literal">opt</span>
                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;cubes&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// This is the list of cubes associated with this bone.</span>
                    {
                        <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> : <span class="hljs-literal">opt</span>
                        {
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;origin&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// This point declares the unrotated lower corner of cube (smallest x/y/z value in model space units).</span>
                            }
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;size&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// The cube extends this amount relative to its origin (in model space units).</span>
                            }
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;rotation&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// The cube is rotated by this amount (in degrees, x-then-y-then-z order) around the pivot.</span>
                            }
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;pivot&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// If this field is specified, rotation of this cube occurs around this point, otherwise its rotation is around the center of the box.</span>
                            }
                            <span class="hljs-strong">float</span> <span class="hljs-string">&quot;inflate&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Grow this box by this additive amount in all directions (in model space units), this field overrides the bone&#39;s inflate field for this cube only.</span>
                            <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;mirror&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Mirrors this cube about the unrotated x axis (effectively flipping the east / west faces), overriding the bone&#39;s &#39;mirror&#39; setting for this cube.</span>
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uv&quot;</span>[<span class="hljs-number">2</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// Specifies the upper-left corner on the texture for the start of the texture mapping for this box.</span>
                            }
                            <span class="hljs-strong">object</span> <span class="hljs-string">&quot;uv&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// This is an alternate per-face uv mapping which specifies each face of the cube.  Omitting a face will cause that face to not get drawn.</span>
                            {
                                <span class="hljs-strong">object</span> <span class="hljs-string">&quot;north&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Specifies the UV&#39;s for the face that stretches along the x and y axes, and faces the -z axis.</span>
                                {
                                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uv&quot;</span>[<span class="hljs-number">2</span>]
                                    {
                                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// Specifies the uv origin for the face. For this face, it is the upper-left corner, when looking at the face with y being up.</span>
                                    }
                                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uv_size&quot;</span>[<span class="hljs-number">2</span>] : <span class="hljs-literal">opt</span>
                                    {
                                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// The face maps this many texels from the uv origin. If not specified, the box dimensions are used instead.</span>
                                    }
                                    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;material_instance&quot;</span> : <span class="hljs-literal">opt</span>
                                }
                                <span class="hljs-strong">object</span> <span class="hljs-string">&quot;south&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Specifies the UV&#39;s for the face that stretches along the x and y axes, and faces the z axis</span>
                                {
                                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uv&quot;</span>[<span class="hljs-number">2</span>]
                                    {
                                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// Specifies the uv origin for the face. For this face, it is the upper-left corner, when looking at the face with y being up.</span>
                                    }
                                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uv_size&quot;</span>[<span class="hljs-number">2</span>] : <span class="hljs-literal">opt</span>
                                    {
                                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// The face maps this many texels from the uv origin. If not specified, the box dimensions are used instead.</span>
                                    }
                                    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;material_instance&quot;</span> : <span class="hljs-literal">opt</span>
                                }
                                <span class="hljs-strong">object</span> <span class="hljs-string">&quot;east&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Specifies the UV&#39;s for the face that stretches along the z and y axes, and faces the x axis</span>
                                {
                                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uv&quot;</span>[<span class="hljs-number">2</span>]
                                    {
                                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// Specifies the uv origin for the face. For this face, it is the upper-left corner, when looking at the face with y being up.</span>
                                    }
                                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uv_size&quot;</span>[<span class="hljs-number">2</span>] : <span class="hljs-literal">opt</span>
                                    {
                                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// The face maps this many texels from the uv origin. If not specified, the box dimensions are used instead.</span>
                                    }
                                    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;material_instance&quot;</span> : <span class="hljs-literal">opt</span>
                                }
                                <span class="hljs-strong">object</span> <span class="hljs-string">&quot;west&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Specifies the UV&#39;s for the face that stretches along the z and y axes, and faces the -x axis</span>
                                {
                                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uv&quot;</span>[<span class="hljs-number">2</span>]
                                    {
                                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// Specifies the uv origin for the face. For this face, it is the upper-left corner, when looking at the face with y being up.</span>
                                    }
                                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uv_size&quot;</span>[<span class="hljs-number">2</span>] : <span class="hljs-literal">opt</span>
                                    {
                                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// The face maps this many texels from the uv origin. If not specified, the box dimensions are used instead.</span>
                                    }
                                    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;material_instance&quot;</span> : <span class="hljs-literal">opt</span>
                                }
                                <span class="hljs-strong">object</span> <span class="hljs-string">&quot;up&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Specifies the UV&#39;s for the face that stretches along the x and z axes, and faces the y axis</span>
                                {
                                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uv&quot;</span>[<span class="hljs-number">2</span>]
                                    {
                                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// Specifies the uv origin for the face. For this face, it is the back-upper-left corner, assuming you&#39;re facing &#39;north&#39; relative to the cube.</span>
                                    }
                                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uv_size&quot;</span>[<span class="hljs-number">2</span>] : <span class="hljs-literal">opt</span>
                                    {
                                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// The face maps this many texels from the uv origin. If not specified, the box dimensions are used instead.</span>
                                    }
                                    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;material_instance&quot;</span> : <span class="hljs-literal">opt</span>
                                }
                                <span class="hljs-strong">object</span> <span class="hljs-string">&quot;down&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Specifies the UV&#39;s for the face that stretches along the x and z axes, and faces the -y axis</span>
                                {
                                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uv&quot;</span>[<span class="hljs-number">2</span>]
                                    {
                                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// Specifies the uv origin for the face. For this face, it is the back-down-right corner, assuming you&#39;re facing &#39;north&#39; relative to the cube.</span>
                                    }
                                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uv_size&quot;</span>[<span class="hljs-number">2</span>] : <span class="hljs-literal">opt</span>
                                    {
                                        <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// The face maps this many texels from the uv origin. If not specified, the box dimensions are used instead.</span>
                                    }
                                    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;material_instance&quot;</span> : <span class="hljs-literal">opt</span>
                                }
                            }
                        }
                    }
                    <span class="hljs-strong">molang</span> <span class="hljs-string">&quot;binding&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// useful for items.  A molang expression specifying the bone name of the parent skeletal hierarchy that this bone should use as the root transform.  Without this field it will look for a bone in the parent entity with the same name as this bone.  If both are missing, it will assume a local skeletal hierarchy (via the &quot;parent&quot; field).  If that is also missing, it will attach to the owning entity&#39;s root transform.</span>
                    <span class="hljs-strong">object</span> <span class="hljs-string">&quot;locators&quot;</span> : <span class="hljs-literal">opt</span>
                    {
                        <span class="hljs-strong">array</span> <span class="hljs-string">&quot;&lt;identifier&gt;&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// This is a list of locators associated with this bone.  A locator is a point in model space that tracks a particular bone as the bone animates (by maintaining it&#39;s relationship to the bone through the animation).</span>
                        {
                            <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Position of the locator in model space.</span>
                        }
                        <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;identifier&gt;&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// This is a list of locators associated with this bone.  A locator is a point in model space that tracks a particular bone as the bone animates (by maintaining it&#39;s relationship to the bone through the animation).</span>
                        {
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;offset&quot;</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Position of the locator in model space.</span>
                            }
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;rotation&quot;</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Rotation of the locator in model space.</span>
                            }
                            <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;ignore_inherited_scale&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// Discard scale inherited from parent bone.</span>
                        }
                    }
                    <span class="hljs-strong">object</span> <span class="hljs-string">&quot;poly_mesh&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// ***EXPERIMENTAL*** A triangle or quad mesh object.  Can be used in conjunction with cubes and texture geometry.</span>
                    {
                        <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;normalized_uvs&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// If true, UVs are assumed to be [0-1].  If false, UVs are assumed to be [0-texture_width] and [0-texture_height] respectively.</span>
                        <span class="hljs-strong">array</span> <span class="hljs-string">&quot;positions&quot;</span> : <span class="hljs-literal">opt</span>
                        {
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// Vertex positions for the mesh.  Can be either indexed via the &quot;polys&quot; section, or be a quad-list if mapped 1-to-1 to the normals and UVs sections.</span>
                            }
                        }
                        <span class="hljs-strong">array</span> <span class="hljs-string">&quot;normals&quot;</span> : <span class="hljs-literal">opt</span>
                        {
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// Vertex normals.  Can be either indexed via the &quot;polys&quot; section, or be a quad-list if mapped 1-to-1 to the positions and UVs sections.</span>
                            }
                        }
                        <span class="hljs-strong">array</span> <span class="hljs-string">&quot;uvs&quot;</span> : <span class="hljs-literal">opt</span>
                        {
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>[<span class="hljs-number">2</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// Vertex UVs.  Can be either indexed via the &quot;polys&quot; section, or be a quad-list if mapped 1-to-1 to the positions and normals sections.</span>
                            }
                        }
                        <span class="hljs-strong">array</span> <span class="hljs-string">&quot;polys&quot;</span>
                        {
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>[<span class="hljs-number">3</span>,<span class="hljs-number">4</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">array</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>[<span class="hljs-number">3</span>]
                                {
                                    <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// Poly element indices, as an array of polygons, each an array of either three or four vertices, each an array of indices into positions, normals, and UVs (in that order).</span>
                                }
                            }
                        }
                        <span class="hljs-strong">string</span> <span class="hljs-string">&quot;polys&quot;</span>&lt;<span class="hljs-string">&quot;tri_list&quot;</span>, <span class="hljs-string">&quot;quad_list&quot;</span>&gt; <span class="hljs-comment">// If not specifying vertex indices, arrays of data must be a list of tris or quads, set by making this property either &quot;tri_list&quot; or &quot;quad_list&quot;</span>
                    }
                    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;texture_meshes&quot;</span> : <span class="hljs-literal">opt</span> <span class="hljs-comment">// ***EXPERIMENTAL*** Adds a mesh to the bone&#39;s geometry by converting texels in a texture into boxes</span>
                    {
                        <span class="hljs-strong">object</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
                        {
                            <span class="hljs-strong">string</span> <span class="hljs-string">&quot;texture&quot;</span> <span class="hljs-comment">// The friendly-named texture to use.</span>
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;position&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// The position of the pivot point after rotation (in *entity space* not texture or bone space) of the texture geometry</span>
                            }
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;local_pivot&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// The pivot point on the texture (in *texture space* not entity or bone space) of the texture geometry</span>
                            }
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;rotation&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// The rotation (in degrees) of the texture geometry relative to the offset</span>
                            }
                            <span class="hljs-strong">array</span> <span class="hljs-string">&quot;scale&quot;</span>[<span class="hljs-number">3</span>] : <span class="hljs-literal">opt</span>
                            {
                                <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span> <span class="hljs-comment">// The scale (in degrees) of the texture geometry relative to the offset</span>
                            }
                        }
                    }
                }
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function v(m,j){const a=t("ExternalLinkIcon");return i(),e("div",null,[c,s("p",null,[u,n(" 翻译自"),s("a",d,[n("微软官方文档"),r(a)])]),h])}const b=l(o,[["render",v],["__file","schemas.html.vue"]]);export{b as default};
