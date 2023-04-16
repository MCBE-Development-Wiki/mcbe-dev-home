import{_ as i,M as e,p,q as d,N as a,W as l,S as c,R as s,t as n}from"./framework-8c007374.js";const o={},h=c('<h1 id="清单文件" tabindex="-1"><a class="header-anchor" href="#清单文件" aria-hidden="true">#</a> 清单文件</h1><p><a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0;" src="https://mirrors.creativecommons.org/presskit/buttons/80x15/svg/by-nc-sa.svg"></a></p><p><strong>清单文件</strong>（<strong>Manifest File</strong>）位于每个附加包的根目录中，文件名硬编码为<code>manifest.json</code>或<code>pack_manifest.json</code>。优先读取<code>manifest.json</code>，即若<code>manifest.json</code>存在且能正常读取，将忽略<code>pack_manifest.json</code>。</p><div class="treeview"><ul><li><span class="sprite" style="background-image:url(https://wiki.mcbe-dev.net/w/images/9/92/FileCSS.png?format=original);background-position:-112px -128px;background-size:128px auto;height:16px;width:16px;"></span> <code>pack</code> 附加包<ul><li><span class="sprite" style="background-image:url(https://wiki.mcbe-dev.net/w/images/9/92/FileCSS.png?format=original);background-position:-0px -80px;background-size:128px auto;height:16px;width:16px;"></span> <code>manifest.json</code></li><li><span class="sprite" style="background-image:url(https://wiki.mcbe-dev.net/w/images/9/92/FileCSS.png?format=original);background-position:-0px -80px;background-size:128px auto;height:16px;width:16px;"></span> <code>manifest_publish.json</code></li><li><span class="sprite" style="background-image:url(https://wiki.mcbe-dev.net/w/images/9/92/FileCSS.png?format=original);background-position:-0px -80px;background-size:128px auto;height:16px;width:16px;"></span> <code>manifest.json_old</code> 升级后的旧版清单文件备份</li><li><span class="sprite" style="background-image:url(https://wiki.mcbe-dev.net/w/images/9/92/FileCSS.png?format=original);background-position:-0px -80px;background-size:128px auto;height:16px;width:16px;"></span> <code>pack_manifest.json</code> 旧版清单文件名</li><li><span class="sprite" style="background-image:url(https://wiki.mcbe-dev.net/w/images/9/92/FileCSS.png?format=original);background-position:-16px -64px;background-size:128px auto;height:16px;width:16px;"></span> <code>upgrade_report.log</code> 清单文件升级日志</li></ul></li></ul></div><h2 id="版本化与模式" tabindex="-1"><a class="header-anchor" href="#版本化与模式" aria-hidden="true">#</a> 版本化与模式</h2><p>清单文件的版本化由文件中的<code>format_version</code>字段控制，目前该字段只允许<code>0</code>、<code>1</code>和<code>2</code>，其他版本将导致内容日志错误。<code>format_version</code>的值被称为该文件的<strong>格式版本</strong>（<strong>Format Version</strong>）。当前最新且推荐使用的格式版本为<code>2</code>。不同格式版本的清单文件格式的模式分别如下：</p>',6),u=s("div",{class:"language-schema line-numbers-mode","data-ext":"schema"},[s("pre",{class:"language-schema"},[s("code",null,[s("span",{class:"hljs-strong"},"object"),n(`
{
    `),s("span",{class:"hljs-strong"},"int"),n(),s("span",{class:"hljs-string"},'"format_version"'),n(),s("span",{class:"hljs-comment"},"// 该文件的格式版本，此处应为`1`"),n(`
    `),s("span",{class:"hljs-strong"},"object"),n(),s("span",{class:"hljs-string"},'"header"'),n(`
    {
        `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"uuid"'),n("<"),s("span",{class:"hljs-regexp"},"/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/"),n("> "),s("span",{class:"hljs-comment"},"// 该包的UUID，当解析内容出错时，引擎会报内容日志错误。当引擎最终使用的该包的UUID为`6989C411-4355-4756-9163-51C1DF5EF677`时，由于该UUID为保留的UUID，这会使该附加包从列表中隐藏"),n(`
        `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"name"'),n(),s("span",{class:"hljs-comment"},"// 当不存在时引擎会报内容日志错误"),n(`
        `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"description"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(`
        `),s("span",{class:"hljs-strong"},"bool"),n(),s("span",{class:"hljs-string"},'"platform_locked"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(),s("span",{class:"hljs-comment"},"// 默认为false"),n(`
        `),s("span",{class:"hljs-strong"},"enumerated_value"),n(),s("span",{class:"hljs-string"},'"pack_scope"'),n("<"),s("span",{class:"hljs-string"},'"global"'),n(", "),s("span",{class:"hljs-string"},'"world"'),n(", "),s("span",{class:"hljs-string"},'"any"'),n("> : "),s("span",{class:"hljs-literal"},"opt"),n(),s("span",{class:"hljs-comment"},"// 默认为`any`"),n(`
        `),s("span",{class:"hljs-strong"},"bool"),n(),s("span",{class:"hljs-string"},'"lock_template_options"'),n(),s("span",{class:"hljs-comment"},"// 当该包是世界模板包时是必须字段，当不是世界模板包时有效的该字段值会导致内容日志警告。引擎中实际有三种值：未定义、启用和禁用，该字段不存在或解析出错时为未定义，`true`时为启用，`false`时为禁用"),n(`
        `),s("span",{class:"hljs-strong"},"semver"),n(),s("span",{class:"hljs-string"},'"version"'),n(),s("span",{class:"hljs-comment"},"// 该语义化版本字段不可为`*`，解析出错时报内容日志错误"),n(`
        `),s("span",{class:"hljs-strong"},"semver"),n(),s("span",{class:"hljs-string"},'"min_engine_version"'),n(),s("span",{class:"hljs-comment"},"// 当该包是资源包或行为包时是必须字段，当不是资源包且不是行为包时有效的该字段值会导致内容日志警告。该语义化版本字段只支持数组格式，且值必须大于或等于`1.13.0`，否则会报内容日志错误"),n(`
        `),s("span",{class:"hljs-strong"},"semver"),n(),s("span",{class:"hljs-string"},'"base_game_version"'),n(),s("span",{class:"hljs-comment"},"// 当该包是世界模板包时是必须字段，当不是世界模板包时有效的该字段值会导致内容日志警告。该语义化版本字段无限制，但不得大于当前游戏版本或小于`1.13.0`，否则会报内容日志错误"),n(`
    }
    `),s("span",{class:"hljs-strong"},"array"),n(),s("span",{class:"hljs-string"},'"modules"'),n(),s("span",{class:"hljs-comment"},"// 若不存在，则会报内容日志错误"),n(`
    {
        `),s("span",{class:"hljs-strong"},"object"),n(),s("span",{class:"hljs-string"},'"<any array element>"'),n(`
        {
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"uuid"'),n("<"),s("span",{class:"hljs-regexp"},"/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/"),n("> "),s("span",{class:"hljs-comment"},"// 该模块的UUID，当解析内容出错时，引擎会报内容日志错误。如果包的UUID和某个模块的UUID重复，会报内容日志警告并以包的UUID的MD5杂凑值为种子通过一定算法生成新的包的UUID"),n(`
            `),s("span",{class:"hljs-strong"},"semver"),n(),s("span",{class:"hljs-string"},'"version"'),n(),s("span",{class:"hljs-comment"},"// 该语义化版本字段不可为`*`，解析出错时报内容日志错误"),n(`
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"name"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(`
            `),s("span",{class:"hljs-strong"},"enumerated_value"),n(),s("span",{class:"hljs-string"},'"type"'),n("<"),s("span",{class:"hljs-string"},'"invalid"'),n(", "),s("span",{class:"hljs-string"},'"resourcepack"'),n(", "),s("span",{class:"hljs-string"},'"resources"'),n(", "),s("span",{class:"hljs-string"},'"data"'),n(", "),s("span",{class:"hljs-string"},'"plugin"'),n(", "),s("span",{class:"hljs-string"},'"client_data"'),n(", "),s("span",{class:"hljs-string"},'"interface"'),n(", "),s("span",{class:"hljs-string"},'"script"'),n(", "),s("span",{class:"hljs-string"},'"client_script"'),n(", "),s("span",{class:"hljs-string"},'"world_template"'),n(", "),s("span",{class:"hljs-string"},'"worldtemplate"'),n(", "),s("span",{class:"hljs-string"},'"skin_pack"'),n(", "),s("span",{class:"hljs-string"},'"skinpack"'),n(", "),s("span",{class:"hljs-string"},'"persona_piece"'),n("> "),s("span",{class:"hljs-comment"},"// `invalid`和其他非法字符串会导致内容日志错误"),n(`
            `),s("span",{class:"hljs-strong"},"enumerated_value"),n(),s("span",{class:"hljs-string"},'"language"'),n("<"),s("span",{class:"hljs-string"},'"javascript"'),n("> : "),s("span",{class:"hljs-literal"},"opt"),n(`
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"entry"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(`
        }
    }
    `),s("span",{class:"hljs-strong"},"array"),n(),s("span",{class:"hljs-string"},'"dependencies"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(`
    {
        `),s("span",{class:"hljs-strong"},"object"),n(),s("span",{class:"hljs-string"},'"<any array element>"'),n(`
        {
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"module_name"'),n(),s("span",{class:"hljs-comment"},"// 依赖的脚本API模块名，与`uuid`至少存在一个"),n(`
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"uuid"'),n("<"),s("span",{class:"hljs-regexp"},"/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/"),n("> "),s("span",{class:"hljs-comment"},"// 依赖的包或模块的UUID，当解析内容出错时，引擎会报内容日志错误。"),n(`
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"version"'),n(),s("span",{class:"hljs-comment"},"// 该语义化版本字段不可为`*`，解析出错时报内容日志错误"),n(`
        }
    }
    `),s("span",{class:"hljs-strong"},"object"),n(),s("span",{class:"hljs-string"},'"metadata"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(`
    {
        `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"url"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(`
        `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"license"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(`
        `),s("span",{class:"hljs-strong"},"array"),n(),s("span",{class:"hljs-string"},'"authors"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(`
        {
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"<any array element>"'),n(`
        }
        `),s("span",{class:"hljs-strong"},"object"),n(),s("span",{class:"hljs-string"},'"generated_with"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(`
        {
            `),s("span",{class:"hljs-strong"},"array"),n(),s("span",{class:"hljs-string"},'"<any tool name>"'),n(`
            {
                `),s("span",{class:"hljs-strong"},"semver"),n(),s("span",{class:"hljs-string"},'"<any array element>"'),n(),s("span",{class:"hljs-comment"},"// 该语义化版本字段不可为`*`"),n(`
            }
        }
    }
    `),s("span",{class:"hljs-strong"},"array"),n(),s("span",{class:"hljs-string"},'"settings"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(`
    {
        `),s("span",{class:"hljs-strong"},"object"),n(),s("span",{class:"hljs-string"},'"<any label control>"'),n(`
        {
            `),s("span",{class:"hljs-strong"},"enumerated_value"),n(),s("span",{class:"hljs-string"},'"type"'),n("<"),s("span",{class:"hljs-string"},'"label"'),n(", "),s("span",{class:"hljs-string"},'"toggle"'),n(", "),s("span",{class:"hljs-string"},'"slider"'),n(", "),s("span",{class:"hljs-string"},'"step_slider"'),n(", "),s("span",{class:"hljs-string"},'"dropdown"'),n(", "),s("span",{class:"hljs-string"},'"input"'),n("> "),s("span",{class:"hljs-comment"},"// 控件类型，当前应为`label`"),n(`
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"text"'),n(),s("span",{class:"hljs-comment"},"// 控件显示的文本"),n(`
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"name"'),n(),s("span",{class:"hljs-comment"},"// 该控件的名字，用于存值"),n(`
        }
        `),s("span",{class:"hljs-strong"},"object"),n(),s("span",{class:"hljs-string"},'"<any toggle control>"'),n(`
        {
            `),s("span",{class:"hljs-strong"},"enumerated_value"),n(),s("span",{class:"hljs-string"},'"type"'),n("<"),s("span",{class:"hljs-string"},'"label"'),n(", "),s("span",{class:"hljs-string"},'"toggle"'),n(", "),s("span",{class:"hljs-string"},'"slider"'),n(", "),s("span",{class:"hljs-string"},'"step_slider"'),n(", "),s("span",{class:"hljs-string"},'"dropdown"'),n(", "),s("span",{class:"hljs-string"},'"input"'),n("> "),s("span",{class:"hljs-comment"},"// 控件类型，当前应为`toggle`"),n(`
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"text"'),n(`
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"name"'),n(`
            `),s("span",{class:"hljs-strong"},"bool"),n(),s("span",{class:"hljs-string"},'"default"'),n(),s("span",{class:"hljs-comment"},"// 默认值"),n(`
            `),s("span",{class:"hljs-strong"},"enumerated_value"),n(),s("span",{class:"hljs-string"},'"control_locked"'),n("<"),s("span",{class:"hljs-string"},'"none"'),n(", "),s("span",{class:"hljs-string"},'"pregame"'),n(", "),s("span",{class:"hljs-string"},'"ingame"'),n("> : "),s("span",{class:"hljs-literal"},"opt"),n(),s("span",{class:"hljs-comment"},"// 何时锁定该控件"),n(`
        }
        `),s("span",{class:"hljs-strong"},"object"),n(),s("span",{class:"hljs-string"},'"<any slider control>"'),n(`
        {
            `),s("span",{class:"hljs-strong"},"enumerated_value"),n(),s("span",{class:"hljs-string"},'"type"'),n("<"),s("span",{class:"hljs-string"},'"label"'),n(", "),s("span",{class:"hljs-string"},'"toggle"'),n(", "),s("span",{class:"hljs-string"},'"slider"'),n(", "),s("span",{class:"hljs-string"},'"step_slider"'),n(", "),s("span",{class:"hljs-string"},'"dropdown"'),n(", "),s("span",{class:"hljs-string"},'"input"'),n("> "),s("span",{class:"hljs-comment"},"// 控件类型，当前应为`slider`"),n(`
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"text"'),n(`
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"name"'),n(`
            `),s("span",{class:"hljs-strong"},"float"),n(),s("span",{class:"hljs-string"},'"default"'),n(`
            `),s("span",{class:"hljs-strong"},"float"),n(),s("span",{class:"hljs-string"},'"min"'),n(`
            `),s("span",{class:"hljs-strong"},"float"),n(),s("span",{class:"hljs-string"},'"max"'),n(`
            `),s("span",{class:"hljs-strong"},"float"),n(),s("span",{class:"hljs-string"},'"step"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(),s("span",{class:"hljs-comment"},"// 步长，默认为`1`"),n(`
            `),s("span",{class:"hljs-strong"},"enumerated_value"),n(),s("span",{class:"hljs-string"},'"control_locked"'),n("<"),s("span",{class:"hljs-string"},'"none"'),n(", "),s("span",{class:"hljs-string"},'"pregame"'),n(", "),s("span",{class:"hljs-string"},'"ingame"'),n("> : "),s("span",{class:"hljs-literal"},"opt"),n(`
        }
        `),s("span",{class:"hljs-strong"},"object"),n(),s("span",{class:"hljs-string"},'"<any step slider control>"'),n(`
        {
            `),s("span",{class:"hljs-strong"},"enumerated_value"),n(),s("span",{class:"hljs-string"},'"type"'),n("<"),s("span",{class:"hljs-string"},'"label"'),n(", "),s("span",{class:"hljs-string"},'"toggle"'),n(", "),s("span",{class:"hljs-string"},'"slider"'),n(", "),s("span",{class:"hljs-string"},'"step_slider"'),n(", "),s("span",{class:"hljs-string"},'"dropdown"'),n(", "),s("span",{class:"hljs-string"},'"input"'),n("> "),s("span",{class:"hljs-comment"},"// 控件类型，当前应为`step_slider`"),n(`
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"text"'),n(`
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"name"'),n(`
            `),s("span",{class:"hljs-strong"},"int"),n(),s("span",{class:"hljs-string"},'"default"'),n("<"),s("span",{class:"hljs-number"},"0"),n("-"),s("span",{class:"hljs-number"},"*"),n(`>
            `),s("span",{class:"hljs-strong"},"array"),n(),s("span",{class:"hljs-string"},'"steps"'),n(`
            {
                `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"<any array element>"'),n(),s("span",{class:"hljs-comment"},"// 滑块中每步的文本"),n(`
            }
            `),s("span",{class:"hljs-strong"},"enumerated_value"),n(),s("span",{class:"hljs-string"},'"control_locked"'),n("<"),s("span",{class:"hljs-string"},'"none"'),n(", "),s("span",{class:"hljs-string"},'"pregame"'),n(", "),s("span",{class:"hljs-string"},'"ingame"'),n("> : "),s("span",{class:"hljs-literal"},"opt"),n(`
        }
        `),s("span",{class:"hljs-strong"},"object"),n(),s("span",{class:"hljs-string"},'"<any dropdown control>"'),n(`
        {
            `),s("span",{class:"hljs-strong"},"enumerated_value"),n(),s("span",{class:"hljs-string"},'"type"'),n("<"),s("span",{class:"hljs-string"},'"label"'),n(", "),s("span",{class:"hljs-string"},'"toggle"'),n(", "),s("span",{class:"hljs-string"},'"slider"'),n(", "),s("span",{class:"hljs-string"},'"step_slider"'),n(", "),s("span",{class:"hljs-string"},'"dropdown"'),n(", "),s("span",{class:"hljs-string"},'"input"'),n("> "),s("span",{class:"hljs-comment"},"// 控件类型，当前应为`dropdown`"),n(`
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"text"'),n(`
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"name"'),n(`
            `),s("span",{class:"hljs-strong"},"int"),n(),s("span",{class:"hljs-string"},'"default"'),n("<"),s("span",{class:"hljs-number"},"0"),n("-"),s("span",{class:"hljs-number"},"*"),n(`>
            `),s("span",{class:"hljs-strong"},"array"),n(),s("span",{class:"hljs-string"},'"options"'),n(`
            {
                `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"<any array element>"'),n(),s("span",{class:"hljs-comment"},"// 下拉菜单中每项的文本"),n(`
            }
        }
        `),s("span",{class:"hljs-strong"},"object"),n(),s("span",{class:"hljs-string"},'"<any text input control>"'),n(`
        {
            `),s("span",{class:"hljs-strong"},"enumerated_value"),n(),s("span",{class:"hljs-string"},'"type"'),n("<"),s("span",{class:"hljs-string"},'"label"'),n(", "),s("span",{class:"hljs-string"},'"toggle"'),n(", "),s("span",{class:"hljs-string"},'"slider"'),n(", "),s("span",{class:"hljs-string"},'"step_slider"'),n(", "),s("span",{class:"hljs-string"},'"dropdown"'),n(", "),s("span",{class:"hljs-string"},'"input"'),n("> "),s("span",{class:"hljs-comment"},"// 控件类型，当前应为`input`"),n(`
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"text"'),n(`
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"name"'),n(`
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"default"'),n(`
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"placeholder"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(),s("span",{class:"hljs-comment"},"// 当用户尚未输入文本时输入框底部的暗文本"),n(`
            `),s("span",{class:"hljs-strong"},"enumerated_value"),n(),s("span",{class:"hljs-string"},'"control_locked"'),n("<"),s("span",{class:"hljs-string"},'"none"'),n(", "),s("span",{class:"hljs-string"},'"pregame"'),n(", "),s("span",{class:"hljs-string"},'"ingame"'),n("> : "),s("span",{class:"hljs-literal"},"opt"),n(`
        }
    }
    `),s("span",{class:"hljs-strong"},"array"),n(),s("span",{class:"hljs-string"},'"legacy_module_dependencies"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(),s("span",{class:"hljs-comment"},"// 等价于`0`格式版本下的依赖"),n(`
    {
        `),s("span",{class:"hljs-strong"},"object"),n(),s("span",{class:"hljs-string"},'"<any array element>"'),n(`
        {
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"uuid"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(`
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"version"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(`
        }
    }
    `),s("span",{class:"hljs-strong"},"array"),n(),s("span",{class:"hljs-string"},'"subpacks"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(`
    {
        `),s("span",{class:"hljs-strong"},"object"),n(),s("span",{class:"hljs-string"},'"<any array element>"'),n(`
        {
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"folder_name"'),n(`
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"name"'),n(`
            `),s("span",{class:"hljs-strong"},"int"),n(),s("span",{class:"hljs-string"},'"memory_tier"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(),s("span",{class:"hljs-comment"},"// 默认为`0`"),n(`
        }
    }
    `),s("span",{class:"hljs-strong"},"array"),n(),s("span",{class:"hljs-string"},'"capabilities"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(`
    {
        `),s("span",{class:"hljs-strong"},"enumerated_value"),n(),s("span",{class:"hljs-string"},'"<any array element>"'),n("<"),s("span",{class:"hljs-string"},'"chemistry"'),n(", "),s("span",{class:"hljs-string"},'"raytraced"'),n(", "),s("span",{class:"hljs-string"},'"script_eval"'),n(`>
    }
    `),s("span",{class:"hljs-strong"},"bool"),n(),s("span",{class:"hljs-string"},'"has_education_metadata"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(),s("span",{class:"hljs-comment"},"// 默认为`false`"),n(`
}
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),j=s("div",{class:"language-schema line-numbers-mode","data-ext":"schema"},[s("pre",{class:"language-schema"},[s("code",null,[s("span",{class:"hljs-strong"},"object"),n(`
{
    `),s("span",{class:"hljs-strong"},"int"),n(),s("span",{class:"hljs-string"},'"format_version"'),n(),s("span",{class:"hljs-comment"},"// 该文件的格式版本，此处应为`1`"),n(`
    `),s("span",{class:"hljs-strong"},"object"),n(),s("span",{class:"hljs-string"},'"header"'),n(`
    {
        `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"uuid"'),n("<"),s("span",{class:"hljs-regexp"},"/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/"),n("> "),s("span",{class:"hljs-comment"},"// 该包的UUID，当解析内容出错时，引擎会报内容日志错误。当引擎最终使用的该包的UUID为`6989C411-4355-4756-9163-51C1DF5EF677`时，由于该UUID为保留的UUID，这会使该附加包从列表中隐藏"),n(`
        `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"name"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(),s("span",{class:"hljs-comment"},"// 当不存在时会将包的名称设置为`manifestvalidation.noname`本地化键名对应的原始文本"),n(`
        `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"description"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(`
        `),s("span",{class:"hljs-strong"},"bool"),n(),s("span",{class:"hljs-string"},'"platform_locked"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(),s("span",{class:"hljs-comment"},"// 默认为false"),n(`
        `),s("span",{class:"hljs-strong"},"enumerated_value"),n(),s("span",{class:"hljs-string"},'"pack_scope"'),n("<"),s("span",{class:"hljs-string"},'"global"'),n(", "),s("span",{class:"hljs-string"},'"world"'),n(", "),s("span",{class:"hljs-string"},'"any"'),n("> : "),s("span",{class:"hljs-literal"},"opt"),n(),s("span",{class:"hljs-comment"},"// 默认为`any`"),n(`
        `),s("span",{class:"hljs-strong"},"bool"),n(),s("span",{class:"hljs-string"},'"lock_template_options"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(),s("span",{class:"hljs-comment"},"// 引擎中实际有三种值：未定义、启用和禁用，该字段不存在或解析出错时为未定义，`true`时为启用，`false`时为禁用"),n(`
        `),s("span",{class:"hljs-strong"},"semver"),n(),s("span",{class:"hljs-string"},'"version"'),n(),s("span",{class:"hljs-comment"},"// 该语义化版本字段不可为`*`，解析出错时报内容日志错误"),n(`
        `),s("span",{class:"hljs-strong"},"semver"),n(),s("span",{class:"hljs-string"},'"min_engine_version"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(),s("span",{class:"hljs-comment"},"// 该语义化版本字段只支持数组格式，对于资源包和行为包来说默认为`1.2.5`，若大于或等于`1.13.0`，会强行设置为`1.12.0`并报内容日志警告"),n(`
        `),s("span",{class:"hljs-strong"},"semver"),n(),s("span",{class:"hljs-string"},'"base_game_version"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(),s("span",{class:"hljs-comment"},"// 该语义化版本字段无限制，默认为`1.13.0`。在当前格式版本下该字段未启用，有效的该字段值会导致内容日志警告"),n(`
    }
    `),s("span",{class:"hljs-strong"},"array"),n(),s("span",{class:"hljs-string"},'"modules"'),n(),s("span",{class:"hljs-comment"},"// 若不存在，则会报内容日志错误"),n(`
    {
        `),s("span",{class:"hljs-strong"},"object"),n(),s("span",{class:"hljs-string"},'"<any array element>"'),n(`
        {
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"uuid"'),n("<"),s("span",{class:"hljs-regexp"},"/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/"),n("> "),s("span",{class:"hljs-comment"},"// 该模块的UUID，当解析内容出错时，引擎会报内容日志错误。如果包的UUID和某个模块的UUID重复，会报内容日志警告并以包的UUID的MD5杂凑值为种子通过一定算法生成新的包的UUID"),n(`
            `),s("span",{class:"hljs-strong"},"semver"),n(),s("span",{class:"hljs-string"},'"version"'),n(),s("span",{class:"hljs-comment"},"// 该语义化版本字段不可为`*`，解析出错时报内容日志错误"),n(`
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"name"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(`
            `),s("span",{class:"hljs-strong"},"enumerated_value"),n(),s("span",{class:"hljs-string"},'"type"'),n("<"),s("span",{class:"hljs-string"},'"invalid"'),n(", "),s("span",{class:"hljs-string"},'"resourcepack"'),n(", "),s("span",{class:"hljs-string"},'"resources"'),n(", "),s("span",{class:"hljs-string"},'"data"'),n(", "),s("span",{class:"hljs-string"},'"plugin"'),n(", "),s("span",{class:"hljs-string"},'"client_data"'),n(", "),s("span",{class:"hljs-string"},'"interface"'),n(", "),s("span",{class:"hljs-string"},'"script"'),n(", "),s("span",{class:"hljs-string"},'"client_script"'),n(", "),s("span",{class:"hljs-string"},'"world_template"'),n(", "),s("span",{class:"hljs-string"},'"worldtemplate"'),n(", "),s("span",{class:"hljs-string"},'"skin_pack"'),n(", "),s("span",{class:"hljs-string"},'"skinpack"'),n(", "),s("span",{class:"hljs-string"},'"persona_piece"'),n("> "),s("span",{class:"hljs-comment"},"// `invalid`和其他非法字符串会导致内容日志错误"),n(`
            `),s("span",{class:"hljs-strong"},"enumerated_value"),n(),s("span",{class:"hljs-string"},'"language"'),n("<"),s("span",{class:"hljs-string"},'"javascript"'),n("> : "),s("span",{class:"hljs-literal"},"opt"),n(`
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"entry"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(`
        }
    }
    `),s("span",{class:"hljs-strong"},"array"),n(),s("span",{class:"hljs-string"},'"dependencies"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(`
    {
        `),s("span",{class:"hljs-strong"},"object"),n(),s("span",{class:"hljs-string"},'"<any array element>"'),n(`
        {
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"module_name"'),n(),s("span",{class:"hljs-comment"},"// 依赖的脚本API模块名，与`uuid`至少存在一个"),n(`
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"uuid"'),n("<"),s("span",{class:"hljs-regexp"},"/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/"),n("> "),s("span",{class:"hljs-comment"},"// 依赖的包或模块的UUID，当解析内容出错时，引擎会报内容日志错误。"),n(`
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"version"'),n(),s("span",{class:"hljs-comment"},"// 该语义化版本字段不可为`*`，解析出错时报内容日志错误"),n(`
        }
    }
    `),s("span",{class:"hljs-strong"},"object"),n(),s("span",{class:"hljs-string"},'"metadata"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(`
    {
        `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"url"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(`
        `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"license"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(`
        `),s("span",{class:"hljs-strong"},"array"),n(),s("span",{class:"hljs-string"},'"authors"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(`
        {
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"<any array element>"'),n(`
        }
        `),s("span",{class:"hljs-strong"},"object"),n(),s("span",{class:"hljs-string"},'"generated_with"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(`
        {
            `),s("span",{class:"hljs-strong"},"array"),n(),s("span",{class:"hljs-string"},'"<any tool name>"'),n(`
            {
                `),s("span",{class:"hljs-strong"},"semver"),n(),s("span",{class:"hljs-string"},'"<any array element>"'),n(),s("span",{class:"hljs-comment"},"// 该语义化版本字段不可为`*`"),n(`
            }
        }
    }
    `),s("span",{class:"hljs-strong"},"array"),n(),s("span",{class:"hljs-string"},'"settings"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(`
    {
        `),s("span",{class:"hljs-strong"},"object"),n(),s("span",{class:"hljs-string"},'"<any label control>"'),n(`
        {
            `),s("span",{class:"hljs-strong"},"enumerated_value"),n(),s("span",{class:"hljs-string"},'"type"'),n("<"),s("span",{class:"hljs-string"},'"label"'),n(", "),s("span",{class:"hljs-string"},'"toggle"'),n(", "),s("span",{class:"hljs-string"},'"slider"'),n(", "),s("span",{class:"hljs-string"},'"step_slider"'),n(", "),s("span",{class:"hljs-string"},'"dropdown"'),n(", "),s("span",{class:"hljs-string"},'"input"'),n("> "),s("span",{class:"hljs-comment"},"// 控件类型，当前应为`label`"),n(`
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"text"'),n(),s("span",{class:"hljs-comment"},"// 控件显示的文本"),n(`
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"name"'),n(),s("span",{class:"hljs-comment"},"// 该控件的名字，用于存值"),n(`
        }
        `),s("span",{class:"hljs-strong"},"object"),n(),s("span",{class:"hljs-string"},'"<any toggle control>"'),n(`
        {
            `),s("span",{class:"hljs-strong"},"enumerated_value"),n(),s("span",{class:"hljs-string"},'"type"'),n("<"),s("span",{class:"hljs-string"},'"label"'),n(", "),s("span",{class:"hljs-string"},'"toggle"'),n(", "),s("span",{class:"hljs-string"},'"slider"'),n(", "),s("span",{class:"hljs-string"},'"step_slider"'),n(", "),s("span",{class:"hljs-string"},'"dropdown"'),n(", "),s("span",{class:"hljs-string"},'"input"'),n("> "),s("span",{class:"hljs-comment"},"// 控件类型，当前应为`toggle`"),n(`
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"text"'),n(`
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"name"'),n(`
            `),s("span",{class:"hljs-strong"},"bool"),n(),s("span",{class:"hljs-string"},'"default"'),n(),s("span",{class:"hljs-comment"},"// 默认值"),n(`
            `),s("span",{class:"hljs-strong"},"enumerated_value"),n(),s("span",{class:"hljs-string"},'"control_locked"'),n("<"),s("span",{class:"hljs-string"},'"none"'),n(", "),s("span",{class:"hljs-string"},'"pregame"'),n(", "),s("span",{class:"hljs-string"},'"ingame"'),n("> : "),s("span",{class:"hljs-literal"},"opt"),n(),s("span",{class:"hljs-comment"},"// 何时锁定该控件"),n(`
        }
        `),s("span",{class:"hljs-strong"},"object"),n(),s("span",{class:"hljs-string"},'"<any slider control>"'),n(`
        {
            `),s("span",{class:"hljs-strong"},"enumerated_value"),n(),s("span",{class:"hljs-string"},'"type"'),n("<"),s("span",{class:"hljs-string"},'"label"'),n(", "),s("span",{class:"hljs-string"},'"toggle"'),n(", "),s("span",{class:"hljs-string"},'"slider"'),n(", "),s("span",{class:"hljs-string"},'"step_slider"'),n(", "),s("span",{class:"hljs-string"},'"dropdown"'),n(", "),s("span",{class:"hljs-string"},'"input"'),n("> "),s("span",{class:"hljs-comment"},"// 控件类型，当前应为`slider`"),n(`
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"text"'),n(`
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"name"'),n(`
            `),s("span",{class:"hljs-strong"},"float"),n(),s("span",{class:"hljs-string"},'"default"'),n(`
            `),s("span",{class:"hljs-strong"},"float"),n(),s("span",{class:"hljs-string"},'"min"'),n(`
            `),s("span",{class:"hljs-strong"},"float"),n(),s("span",{class:"hljs-string"},'"max"'),n(`
            `),s("span",{class:"hljs-strong"},"float"),n(),s("span",{class:"hljs-string"},'"step"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(),s("span",{class:"hljs-comment"},"// 步长，默认为`1`"),n(`
            `),s("span",{class:"hljs-strong"},"enumerated_value"),n(),s("span",{class:"hljs-string"},'"control_locked"'),n("<"),s("span",{class:"hljs-string"},'"none"'),n(", "),s("span",{class:"hljs-string"},'"pregame"'),n(", "),s("span",{class:"hljs-string"},'"ingame"'),n("> : "),s("span",{class:"hljs-literal"},"opt"),n(`
        }
        `),s("span",{class:"hljs-strong"},"object"),n(),s("span",{class:"hljs-string"},'"<any step slider control>"'),n(`
        {
            `),s("span",{class:"hljs-strong"},"enumerated_value"),n(),s("span",{class:"hljs-string"},'"type"'),n("<"),s("span",{class:"hljs-string"},'"label"'),n(", "),s("span",{class:"hljs-string"},'"toggle"'),n(", "),s("span",{class:"hljs-string"},'"slider"'),n(", "),s("span",{class:"hljs-string"},'"step_slider"'),n(", "),s("span",{class:"hljs-string"},'"dropdown"'),n(", "),s("span",{class:"hljs-string"},'"input"'),n("> "),s("span",{class:"hljs-comment"},"// 控件类型，当前应为`step_slider`"),n(`
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"text"'),n(`
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"name"'),n(`
            `),s("span",{class:"hljs-strong"},"int"),n(),s("span",{class:"hljs-string"},'"default"'),n("<"),s("span",{class:"hljs-number"},"0"),n("-"),s("span",{class:"hljs-number"},"*"),n(`>
            `),s("span",{class:"hljs-strong"},"array"),n(),s("span",{class:"hljs-string"},'"steps"'),n(`
            {
                `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"<any array element>"'),n(),s("span",{class:"hljs-comment"},"// 滑块中每步的文本"),n(`
            }
            `),s("span",{class:"hljs-strong"},"enumerated_value"),n(),s("span",{class:"hljs-string"},'"control_locked"'),n("<"),s("span",{class:"hljs-string"},'"none"'),n(", "),s("span",{class:"hljs-string"},'"pregame"'),n(", "),s("span",{class:"hljs-string"},'"ingame"'),n("> : "),s("span",{class:"hljs-literal"},"opt"),n(`
        }
        `),s("span",{class:"hljs-strong"},"object"),n(),s("span",{class:"hljs-string"},'"<any dropdown control>"'),n(`
        {
            `),s("span",{class:"hljs-strong"},"enumerated_value"),n(),s("span",{class:"hljs-string"},'"type"'),n("<"),s("span",{class:"hljs-string"},'"label"'),n(", "),s("span",{class:"hljs-string"},'"toggle"'),n(", "),s("span",{class:"hljs-string"},'"slider"'),n(", "),s("span",{class:"hljs-string"},'"step_slider"'),n(", "),s("span",{class:"hljs-string"},'"dropdown"'),n(", "),s("span",{class:"hljs-string"},'"input"'),n("> "),s("span",{class:"hljs-comment"},"// 控件类型，当前应为`dropdown`"),n(`
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"text"'),n(`
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"name"'),n(`
            `),s("span",{class:"hljs-strong"},"int"),n(),s("span",{class:"hljs-string"},'"default"'),n("<"),s("span",{class:"hljs-number"},"0"),n("-"),s("span",{class:"hljs-number"},"*"),n(`>
            `),s("span",{class:"hljs-strong"},"array"),n(),s("span",{class:"hljs-string"},'"options"'),n(`
            {
                `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"<any array element>"'),n(),s("span",{class:"hljs-comment"},"// 下拉菜单中每项的文本"),n(`
            }
        }
        `),s("span",{class:"hljs-strong"},"object"),n(),s("span",{class:"hljs-string"},'"<any text input control>"'),n(`
        {
            `),s("span",{class:"hljs-strong"},"enumerated_value"),n(),s("span",{class:"hljs-string"},'"type"'),n("<"),s("span",{class:"hljs-string"},'"label"'),n(", "),s("span",{class:"hljs-string"},'"toggle"'),n(", "),s("span",{class:"hljs-string"},'"slider"'),n(", "),s("span",{class:"hljs-string"},'"step_slider"'),n(", "),s("span",{class:"hljs-string"},'"dropdown"'),n(", "),s("span",{class:"hljs-string"},'"input"'),n("> "),s("span",{class:"hljs-comment"},"// 控件类型，当前应为`input`"),n(`
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"text"'),n(`
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"name"'),n(`
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"default"'),n(`
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"placeholder"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(),s("span",{class:"hljs-comment"},"// 当用户尚未输入文本时输入框底部的暗文本"),n(`
            `),s("span",{class:"hljs-strong"},"enumerated_value"),n(),s("span",{class:"hljs-string"},'"control_locked"'),n("<"),s("span",{class:"hljs-string"},'"none"'),n(", "),s("span",{class:"hljs-string"},'"pregame"'),n(", "),s("span",{class:"hljs-string"},'"ingame"'),n("> : "),s("span",{class:"hljs-literal"},"opt"),n(`
        }
    }
    `),s("span",{class:"hljs-strong"},"array"),n(),s("span",{class:"hljs-string"},'"legacy_module_dependencies"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(),s("span",{class:"hljs-comment"},"// 等价于`0`格式版本下的依赖"),n(`
    {
        `),s("span",{class:"hljs-strong"},"object"),n(),s("span",{class:"hljs-string"},'"<any array element>"'),n(`
        {
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"uuid"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(`
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"version"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(`
        }
    }
    `),s("span",{class:"hljs-strong"},"array"),n(),s("span",{class:"hljs-string"},'"subpacks"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(`
    {
        `),s("span",{class:"hljs-strong"},"object"),n(),s("span",{class:"hljs-string"},'"<any array element>"'),n(`
        {
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"folder_name"'),n(`
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"name"'),n(`
            `),s("span",{class:"hljs-strong"},"int"),n(),s("span",{class:"hljs-string"},'"memory_tier"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(),s("span",{class:"hljs-comment"},"// 默认为`0`"),n(`
        }
    }
    `),s("span",{class:"hljs-strong"},"array"),n(),s("span",{class:"hljs-string"},'"capabilities"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(`
    {
        `),s("span",{class:"hljs-strong"},"enumerated_value"),n(),s("span",{class:"hljs-string"},'"<any array element>"'),n("<"),s("span",{class:"hljs-string"},'"chemistry"'),n(", "),s("span",{class:"hljs-string"},'"raytraced"'),n(", "),s("span",{class:"hljs-string"},'"script_eval"'),n(`>
    }
    `),s("span",{class:"hljs-strong"},"bool"),n(),s("span",{class:"hljs-string"},'"has_education_metadata"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(),s("span",{class:"hljs-comment"},"// 默认为`false`"),n(`
}
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),m=s("div",{class:"language-schema line-numbers-mode","data-ext":"schema"},[s("pre",{class:"language-schema"},[s("code",null,[s("span",{class:"hljs-strong"},"object"),n(`
{
    `),s("span",{class:"hljs-strong"},"int"),n(),s("span",{class:"hljs-string"},'"format_version"'),n(),s("span",{class:"hljs-comment"},"// 该文件的格式版本，此处应为`0`"),n(`
    `),s("span",{class:"hljs-strong"},"object"),n(),s("span",{class:"hljs-string"},'"header"'),n(`
    {
        `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"pack_id"'),n("<"),s("span",{class:"hljs-regexp"},"/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/"),n("> "),s("span",{class:"hljs-comment"},"// 该包的UUID，当解析内容出错时，引擎会报内容日志警告并使用`pack_id<pack_id>`的MD5杂凑值为种子通过一定算法生成新的该包的UUID，其中`<pack_id>`是该字段读到的真实值。当引擎最终使用的该包的UUID为`6989C411-4355-4756-9163-51C1DF5EF677`时，由于该UUID为保留的UUID，这会使该附加包从列表中隐藏"),n(`
        `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"name"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(),s("span",{class:"hljs-comment"},"// 当不存在时会报内容日志警告，并将引擎最终使用的该包的UUID设置为包的名字"),n(`
        `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"description"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(`
        `),s("span",{class:"hljs-strong"},"bool"),n(),s("span",{class:"hljs-string"},'"platform_locked"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(),s("span",{class:"hljs-comment"},"// 默认为false"),n(`
        `),s("span",{class:"hljs-strong"},"enumerated_value"),n(),s("span",{class:"hljs-string"},'"pack_scope"'),n("<"),s("span",{class:"hljs-string"},'"global"'),n(", "),s("span",{class:"hljs-string"},'"world"'),n(", "),s("span",{class:"hljs-string"},'"any"'),n("> : "),s("span",{class:"hljs-literal"},"opt"),n(),s("span",{class:"hljs-comment"},"// 默认为`any`"),n(`
        `),s("span",{class:"hljs-strong"},"bool"),n(),s("span",{class:"hljs-string"},'"lock_template_options"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(),s("span",{class:"hljs-comment"},"// 引擎中实际有三种值：未定义、启用和禁用，该字段不存在或解析出错时为未定义，`true`时为启用，`false`时为禁用"),n(`
        `),s("span",{class:"hljs-strong"},"semver"),n(),s("span",{class:"hljs-string"},'"packs_version"'),n(),s("span",{class:"hljs-comment"},"// 该语义化版本字段不可为`*`，当作为字符串解析内容出错时，报内容日志警告，并默认设置为`1.0.0`，其它情况下皆报内容日志警告，并默认设置为`0.0.0`"),n(`
        `),s("span",{class:"hljs-strong"},"semver"),n(),s("span",{class:"hljs-string"},'"min_engine_version"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(),s("span",{class:"hljs-comment"},"// 该语义化版本字段只支持数组格式，对于资源包和行为包来说默认为`1.2.5`，若大于或等于`1.13.0`，会强行设置为`1.12.0`并报内容日志警告"),n(`
        `),s("span",{class:"hljs-strong"},"semver"),n(),s("span",{class:"hljs-string"},'"base_game_version"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(),s("span",{class:"hljs-comment"},"// 该语义化版本字段无限制，默认为`1.13.0`。在当前格式版本下该字段未启用，有效的该字段值会导致内容日志警告"),n(`
    }
    `),s("span",{class:"hljs-strong"},"array"),n(),s("span",{class:"hljs-string"},'"modules"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(),s("span",{class:"hljs-comment"},"// 若不存在，则会报内容日志警告，并默认添加一个`resource`模块，该模块的UUID是以`<name><description>`的MD5杂凑值为种子通过一定算法生成新UUID，其中`<name>`和`<description>`是该清单的标头中包的名称和描述，该模块的版本是`1.0.0`"),n(`
    {
        `),s("span",{class:"hljs-strong"},"object"),n(),s("span",{class:"hljs-string"},'"<any array element>"'),n(`
        {
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"uuid"'),n("<"),s("span",{class:"hljs-regexp"},"/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/"),n("> "),s("span",{class:"hljs-comment"},"// 当解析内容出错时，引擎会报内容日志警告并使用`pack_id<uuid>`的MD5杂凑值为种子通过一定算法生成新的该包的UUID，其中`<uuid>`是该字段读到的真实值。如果包的UUID和某个模块的UUID重复，会报内容日志警告并以包的UUID的MD5杂凑值为种子通过一定算法生成新的包的UUID"),n(`
            `),s("span",{class:"hljs-strong"},"semver"),n(),s("span",{class:"hljs-string"},'"version"'),n(),s("span",{class:"hljs-comment"},"// 该语义化版本字段不可为`*`，当作为字符串解析内容出错时，报内容日志警告，并默认设置为`1.0.0`，其它情况下皆报内容日志警告，并默认设置为`0.0.0`"),n(`
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"name"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(`
            `),s("span",{class:"hljs-strong"},"enumerated_value"),n(),s("span",{class:"hljs-string"},'"type"'),n("<"),s("span",{class:"hljs-string"},'"invalid"'),n(", "),s("span",{class:"hljs-string"},'"resourcepack"'),n(", "),s("span",{class:"hljs-string"},'"resources"'),n(", "),s("span",{class:"hljs-string"},'"data"'),n(", "),s("span",{class:"hljs-string"},'"plugin"'),n(", "),s("span",{class:"hljs-string"},'"client_data"'),n(", "),s("span",{class:"hljs-string"},'"interface"'),n(", "),s("span",{class:"hljs-string"},'"script"'),n(", "),s("span",{class:"hljs-string"},'"client_script"'),n(", "),s("span",{class:"hljs-string"},'"world_template"'),n(", "),s("span",{class:"hljs-string"},'"worldtemplate"'),n(", "),s("span",{class:"hljs-string"},'"skin_pack"'),n(", "),s("span",{class:"hljs-string"},'"skinpack"'),n(", "),s("span",{class:"hljs-string"},'"persona_piece"'),n(", "),s("span",{class:"hljs-string"},'"addon"'),n(", "),s("span",{class:"hljs-string"},'"mandatory"'),n("> : "),s("span",{class:"hljs-literal"},"opt"),n(),s("span",{class:"hljs-comment"},"// 默认为`invalid`，`addon`、`mandatory`和其他非法字符串会导致内容日志警告"),n(`
            `),s("span",{class:"hljs-strong"},"enumerated_value"),n(),s("span",{class:"hljs-string"},'"language"'),n("<"),s("span",{class:"hljs-string"},'"javascript"'),n("> : "),s("span",{class:"hljs-literal"},"opt"),n(`
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"entry"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(`
        }
    }
    `),s("span",{class:"hljs-strong"},"object"),n(),s("span",{class:"hljs-string"},'"metadata"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(`
    {
        `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"url"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(`
        `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"license"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(`
        `),s("span",{class:"hljs-strong"},"array"),n(),s("span",{class:"hljs-string"},'"authors"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(`
        {
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"<any array element>"'),n(`
        }
        `),s("span",{class:"hljs-strong"},"object"),n(),s("span",{class:"hljs-string"},'"generated_with"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(`
        {
            `),s("span",{class:"hljs-strong"},"array"),n(),s("span",{class:"hljs-string"},'"<any tool name>"'),n(`
            {
                `),s("span",{class:"hljs-strong"},"semver"),n(),s("span",{class:"hljs-string"},'"<any array element>"'),n(),s("span",{class:"hljs-comment"},"// 该语义化版本字段不可为`*`"),n(`
            }
        }
    }
    `),s("span",{class:"hljs-strong"},"array"),n(),s("span",{class:"hljs-string"},'"dependencies"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(`
    {
        `),s("span",{class:"hljs-strong"},"object"),n(),s("span",{class:"hljs-string"},'"<any array element>"'),n(`
        {
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"uuid"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(`
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"version"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(`
        }
    }
}
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),g=c(`<h3 id="semver" tabindex="-1"><a class="header-anchor" href="#semver" aria-hidden="true">#</a> <code>semver</code></h3><div class="language-schema line-numbers-mode" data-ext="schema"><pre class="language-schema"><code><span class="hljs-strong">string</span> &lt;<span class="hljs-string">&quot;*&quot;</span>, <span class="hljs-regexp">/^(0|[1-9][0-9]*)(\\.(0|[1-9][0-9]*)(\\.(0|[1-9][0-9]*)(?:\\-((?:(?:(?:(?:0[0-9]*[A-Za-z-])|[1-9A-Za-z-])[0-9A-Za-z-]*)|0)(?:\\.(?:(?:(?:(?:0[0-9]*[A-Za-z-])|[1-9A-Za-z-])[0-9A-Za-z-]*)|0))*))?(?:\\+([0-9A-Za-z-]+(?:\\.[0-9A-Za-z-]+)*))?)?)?/</span>&gt;
<span class="hljs-strong">array</span> [<span class="hljs-number">3</span>]
{
    <span class="hljs-strong">int</span> <span class="hljs-string">&quot;[0..0]&quot;</span>&lt;<span class="hljs-number">0</span>-<span class="hljs-number">*</span>&gt; <span class="hljs-comment">// 主版本号</span>
    <span class="hljs-strong">int</span> <span class="hljs-string">&quot;[1..1]&quot;</span>&lt;<span class="hljs-number">0</span>-<span class="hljs-number">*</span>&gt; <span class="hljs-comment">// 次版本号</span>
    <span class="hljs-strong">int</span> <span class="hljs-string">&quot;[2..2]&quot;</span>&lt;<span class="hljs-number">0</span>-<span class="hljs-number">*</span>&gt; <span class="hljs-comment">// 修订版本号</span>
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模块类型" tabindex="-1"><a class="header-anchor" href="#模块类型" aria-hidden="true">#</a> 模块类型</h3><p><strong>包类型</strong>（<strong>Pack Type</strong>）决定包是哪种附加包，这决定着它的导入方式、读取方式和加载方式，模块的<strong>资源类型</strong>（<strong>Resource Type</strong>）仅用于判断一个包的诸多模块是否兼容和决定该包是否含有服务端脚本或客户端脚本。每个包的清单中最后一个读取的模块的类型将决定该包的类型。下标列出了模块类型的接口字符串对应的包类型和模块资源类型。</p><table><thead><tr><th>接口字符串</th><th>对应的包类型</th><th>对应的资源类型</th></tr></thead><tbody><tr><td><code>invalid</code></td><td><code>Invalid</code></td><td><code>Invalid</code></td></tr><tr><td><code>resourcepack</code></td><td><code>Resources</code></td><td>N/A</td></tr><tr><td><code>resources</code></td><td><code>Resources</code></td><td><code>Resources</code></td></tr><tr><td><code>data</code></td><td><code>Behavior</code></td><td><code>DataAddOn</code></td></tr><tr><td><code>plugin</code></td><td><code>Behavior</code></td><td>N/A</td></tr><tr><td><code>client_data</code></td><td><code>Behavior</code></td><td>N/A</td></tr><tr><td><code>interface</code></td><td><code>Behavior</code></td><td><code>Interface</code></td></tr><tr><td><code>script</code></td><td><code>Behavior</code></td><td><code>ScriptAddOn</code></td></tr><tr><td><code>client_script</code></td><td><code>Resources</code></td><td><code>ClientData</code></td></tr><tr><td><code>world_template</code></td><td><code>WorldTemplate</code></td><td><code>WorldTemplate</code></td></tr><tr><td><code>worldtemplate</code></td><td><code>WorldTemplate</code></td><td>N/A</td></tr><tr><td><code>skin_pack</code></td><td><code>Skins</code></td><td>N/A</td></tr><tr><td><code>skinpack</code></td><td><code>Skins</code></td><td>N/A</td></tr><tr><td><code>persona_piece</code></td><td><code>PersonaPiece</code></td><td>N/A</td></tr><tr><td><code>addon</code></td><td><code>Addon</code></td><td>N/A</td></tr><tr><td><code>mandatory</code></td><td>N/A</td><td><code>Mandatory</code></td></tr></tbody></table><p><code>addon</code>和<code>mandatory</code>类型无法正常反序列化，<code>mandatory</code>类型无法正常序列化。</p><h4 id="兼容性" tabindex="-1"><a class="header-anchor" href="#兼容性" aria-hidden="true">#</a> 兼容性</h4><p>如果清单中有大于1个模块，引擎会检查模块之间的兼容性。检查兼容性是根据资源类型对应的包类型是否一致来完成的。如果所有模块的资源类型对应的包类型一致，则兼容，否则不兼容。上表中的N/A在检测兼容性时会被视为<code>Invalid</code>。不兼容的包会在格式版本为<code>0</code>时仅保留最后一个模块以供后续使用和升级，并报内容日志警告；在其他格式版本下报内容日志错误。下表列出了模块的资源类型对应的包类型：</p><table><thead><tr><th>资源类型</th><th>对应的包类型</th></tr></thead><tbody><tr><td><code>Invalid</code></td><td><code>Invalid</code></td></tr><tr><td><code>Resources</code></td><td><code>Resources</code></td></tr><tr><td><code>DataAddOn</code></td><td><code>Behavior</code></td></tr><tr><td><code>ScriptAddOn</code></td><td><code>Behavior</code></td></tr><tr><td><code>ClientData</code></td><td><code>Behavior</code></td></tr><tr><td><code>Interface</code></td><td><code>Behavior</code></td></tr><tr><td><code>Mandatory</code></td><td><code>Invalid</code></td></tr><tr><td><code>WorldTemplate</code></td><td><code>WorldTemplate</code></td></tr></tbody></table><h3 id="包设置" tabindex="-1"><a class="header-anchor" href="#包设置" aria-hidden="true">#</a> 包设置</h3><p><strong>包设置</strong>（<strong>Pack Setting</strong>）是清单文件中存在<code>settings</code>字段后启用的内容，供玩家对该包进行一定程度的自定义。目前包设置只实现了存储当前设置值到本地和从本地读取设置的功能，并未实现在附加包内查询设置信息的功能，所以其功能并不完整。</p><p>玩家在包设置面板上进行更改后，该包的设置将会自动保存在<code>com.mojang/minecraftpe/pack_settings/pack_&lt;uuid&gt;.json</code>文件中，其中<code>&lt;uuid&gt;</code>是该包的UUID。该文件的格式为：</p><div class="language-schema line-numbers-mode" data-ext="schema"><pre class="language-schema"><code><span class="hljs-strong">object</span>
{
    <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;&lt;any control name&gt;&quot;</span> : <span class="hljs-literal">opt</span>
    <span class="hljs-strong">float</span> <span class="hljs-string">&quot;&lt;any control name&gt;&quot;</span> : <span class="hljs-literal">opt</span>
    <span class="hljs-strong">int</span> <span class="hljs-string">&quot;&lt;any control name&gt;&quot;</span> : <span class="hljs-literal">opt</span>
    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;&lt;any control name&gt;&quot;</span> : <span class="hljs-literal">opt</span>
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="世界模板" tabindex="-1"><a class="header-anchor" href="#世界模板" aria-hidden="true">#</a> 世界模板</h3><p>世界模板包的清单文件要求同目录下必须有<code>level.dat</code>文件，且其需要能够正常解析，且其具有<code>GameType</code>标签。</p><h2 id="升级" tabindex="-1"><a class="header-anchor" href="#升级" aria-hidden="true">#</a> 升级</h2><p>当格式版本为<code>0</code>时，引擎将在完全读取清单文件后尝试对该文件进行升级。当该文件可以以<code>0</code>格式版本正常解析时，引擎会尝试在<code>manifest.json</code>文件处以<code>1</code>格式版本对应的格式写入等价的内容，并将原先的文件内容备份至同目录处的<code>manifest.json_old</code>文件。该文件格式的一个示例如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;format_version&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;header&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;name&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;&lt;name&gt;&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;description&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;&lt;description&gt;&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;uuid&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;&lt;uuid&gt;&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;platform_locked&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">false</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;lock_template_options&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">false</span><span class="hljs-punctuation">,</span> <span class="hljs-comment">// 未定义时不序列化该字段，启用或禁用时序列化该字段</span>
        <span class="hljs-attr">&quot;version&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span> <span class="hljs-number">1</span><span class="hljs-punctuation">,</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span> <span class="hljs-number">0</span> <span class="hljs-punctuation">]</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;min_engine_version&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span> <span class="hljs-number">1</span><span class="hljs-punctuation">,</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span> <span class="hljs-number">0</span> <span class="hljs-punctuation">]</span><span class="hljs-punctuation">,</span> <span class="hljs-comment">// 当包类型为资源包或行为包时序列化该字段，否则不序列化该字段</span>
        <span class="hljs-attr">&quot;base_game_version&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;*&quot;</span> <span class="hljs-comment">// 任意版本（\`*\`）时序列化为字符串，特定版本时序列化为数组。当包类型为世界模板时序列化该字段，否则不序列化该字段</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;modules&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span>
        <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;uuid&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;&lt;uuid&gt;&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;name&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;&lt;name&gt;&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;version&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span> <span class="hljs-number">1</span><span class="hljs-punctuation">,</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span> <span class="hljs-number">0</span> <span class="hljs-punctuation">]</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;&lt;type&gt;&quot;</span> <span class="hljs-comment">// 会由资源类型序列化为接口字符串，对应关系见“模块类型”段落</span>
        <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">]</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;dependencies&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span>
        <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;uuid&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;&lt;uuid&gt;&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;version&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span> <span class="hljs-number">1</span><span class="hljs-punctuation">,</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span> <span class="hljs-number">0</span> <span class="hljs-punctuation">]</span>
        <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">]</span><span class="hljs-punctuation">,</span> <span class="hljs-comment">// 事实上该字段应该不会序列化，\`0\`格式版本的依赖会被序列化至\`legacy_module_dependencies\`</span>
    <span class="hljs-attr">&quot;metadata&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;authors&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span> <span class="hljs-string">&quot;&lt;author&gt;&quot;</span> <span class="hljs-punctuation">]</span><span class="hljs-punctuation">,</span> <span class="hljs-comment">// 作者非空时才会序列化</span>
        <span class="hljs-attr">&quot;license&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;&lt;license&gt;&quot;</span><span class="hljs-punctuation">,</span> <span class="hljs-comment">// 许可非空时才会序列化</span>
        <span class="hljs-attr">&quot;url&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;&lt;url&gt;&quot;</span> <span class="hljs-comment">// URL非空时才会序列化</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;legacy_module_dependencies&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span>
        <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;uuid&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;&lt;uuid&gt;&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;version&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span> <span class="hljs-number">1</span><span class="hljs-punctuation">,</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span> <span class="hljs-number">0</span> <span class="hljs-punctuation">]</span>
        <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">]</span>
<span class="hljs-punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果在解析和升级时出现错误，引擎将会在同目录处写入<code>upgrade_report.log</code>文件，该文件格式如下：</p><div class="language-schema line-numbers-mode" data-ext="schema"><pre class="language-schema"><code><span class="hljs-strong">object</span>
{
    <span class="hljs-strong">resource_location</span> <span class="hljs-string">&quot;location&quot;</span> <span class="hljs-comment">// 该包的资源位置</span>
    <span class="hljs-strong">bool</span> <span class="hljs-string">&quot;upgraded&quot;</span> <span class="hljs-comment">// 是否已成功升级</span>
    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;warnings&quot;</span> <span class="hljs-comment">// 解析和升级过程中产生的警告</span>
    {
        <span class="hljs-strong">pack_error</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
    }
    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;errors&quot;</span> <span class="hljs-comment">// 解析和升级过程中产生的错误</span>
    {
        <span class="hljs-strong">pack_error</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="子模式" tabindex="-1"><a class="header-anchor" href="#子模式" aria-hidden="true">#</a> 子模式</h3><h4 id="resource-location" tabindex="-1"><a class="header-anchor" href="#resource-location" aria-hidden="true">#</a> <code>resource_location</code></h4><div class="language-schema line-numbers-mode" data-ext="schema"><pre class="language-schema"><code><span class="hljs-strong">object</span>
{
    <span class="hljs-strong">int</span> <span class="hljs-string">&quot;fs&quot;</span> <span class="hljs-comment">// 该资源位置所处的文件系统</span>
    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;path&quot;</span> <span class="hljs-comment">// 该资源位置的路径</span>
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="pack-error" tabindex="-1"><a class="header-anchor" href="#pack-error" aria-hidden="true">#</a> <code>pack_error</code></h4><div class="language-schema line-numbers-mode" data-ext="schema"><pre class="language-schema"><code><span class="hljs-strong">object</span>
{
    <span class="hljs-strong">int</span> <span class="hljs-string">&quot;type&quot;</span> <span class="hljs-comment">// 错误类型</span>
    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;key&quot;</span> <span class="hljs-comment">// 错误文本或本地化键名</span>
    <span class="hljs-strong">array</span> <span class="hljs-string">&quot;parameters&quot;</span> <span class="hljs-comment">// 参数表</span>
    {
        <span class="hljs-strong">string</span> <span class="hljs-string">&quot;&lt;any array element&gt;&quot;</span>
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件系统" tabindex="-1"><a class="header-anchor" href="#文件系统" aria-hidden="true">#</a> 文件系统</h3><table><thead><tr><th>值</th><th>对应的文件系统</th></tr></thead><tbody><tr><td>0</td><td>UserPackage</td></tr><tr><td>1</td><td>AppPackage</td></tr><tr><td>2</td><td>Raw</td></tr><tr><td>3</td><td>RawPersistent</td></tr><tr><td>4</td><td>SettingsDir</td></tr><tr><td>5</td><td>ExternalDir</td></tr><tr><td>6</td><td>ServerPackage</td></tr><tr><td>7</td><td>DataDir</td></tr><tr><td>8</td><td>UserDir</td></tr><tr><td>9</td><td>ScreenshotsDir</td></tr><tr><td>10</td><td>StoreCache</td></tr><tr><td>11</td><td>Invalid</td></tr></tbody></table><h3 id="错误类型" tabindex="-1"><a class="header-anchor" href="#错误类型" aria-hidden="true">#</a> 错误类型</h3><table><thead><tr><th>值</th><th>对应的错误类型</th></tr></thead><tbody><tr><td>0</td><td>None</td></tr><tr><td>1</td><td>NoPackAccess</td></tr><tr><td>2</td><td>UnsupportedFileFormat</td></tr><tr><td>3</td><td>IncompletePack</td></tr><tr><td>4</td><td>NoManifest</td></tr><tr><td>5</td><td>ParseError</td></tr><tr><td>6</td><td>MissingProperty</td></tr><tr><td>7</td><td>MissingPropertyUpgraded</td></tr><tr><td>8</td><td>WrongTypeProperty</td></tr><tr><td>9</td><td>EmptyProperty</td></tr><tr><td>10</td><td>EmptyPropertyUpgraded</td></tr><tr><td>11</td><td>InvalidProperty</td></tr><tr><td>12</td><td>MalformedPropertyUUID</td></tr><tr><td>13</td><td>MalformedPropertyUUIDUpgraded</td></tr><tr><td>14</td><td>MalformedPropertyVERSION</td></tr><tr><td>15</td><td>MalformedPropertyVERSIONUpgraded</td></tr><tr><td>16</td><td>DuplicateUUIDUpgraded</td></tr><tr><td>17</td><td>DuplicateUUID</td></tr><tr><td>18</td><td>InvalidPackTypeUpgraded</td></tr><tr><td>19</td><td>MissingModules</td></tr><tr><td>20</td><td>MissingDependency</td></tr><tr><td>21</td><td>MultipleModules</td></tr><tr><td>22</td><td>MultipleModulesUpgraded</td></tr><tr><td>23</td><td>UnsupportedFormatVersion</td></tr><tr><td>24</td><td>PackUpgraded</td></tr><tr><td>25</td><td>InvalidCapability</td></tr><tr><td>26</td><td>UnsupportedBaseGameVersionPatch</td></tr><tr><td>27</td><td>IgnoredProperty</td></tr><tr><td>28</td><td>VersionTooHigh</td></tr><tr><td>29</td><td>VersionTooLow</td></tr><tr><td>30</td><td>MinEngineVersionCapFormatVersion1</td></tr></tbody></table>`,29);function v(b,_){const t=e("CodeGroupItem"),r=e("CodeGroup");return p(),d("div",null,[h,a(r,null,{default:l(()=>[a(t,{title:"2"},{default:l(()=>[u]),_:1}),a(t,{title:"1"},{default:l(()=>[j]),_:1}),a(t,{title:"0"},{default:l(()=>[m]),_:1})]),_:1}),g])}const f=i(o,[["render",v],["__file","manifest.html.vue"]]);export{f as default};
