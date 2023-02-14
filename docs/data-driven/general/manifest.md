# 清单文件

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://mirrors.creativecommons.org/presskit/buttons/80x15/svg/by-nc-sa.svg" /></a>

**清单文件**（**Manifest File**）位于每个附加包的根目录中，文件名硬编码为`manifest.json`或`pack_manifest.json`。优先读取`manifest.json`，即若`manifest.json`存在且能正常读取，将忽略`pack_manifest.json`。

<div class="treeview">
  <ul>
    <li><span class="sprite" style="background-image:url(https://wiki.mcbe-dev.net/w/images/9/92/FileCSS.png?format=original);background-position:-112px -128px;background-size:128px auto;height:16px;width:16px"></span> <code>pack</code> 附加包<ul>
      <li><span class="sprite" style="background-image:url(https://wiki.mcbe-dev.net/w/images/9/92/FileCSS.png?format=original);background-position:-0px -80px;background-size:128px auto;height:16px;width:16px"></span> <code>manifest.json</code></li>
      <li><span class="sprite" style="background-image:url(https://wiki.mcbe-dev.net/w/images/9/92/FileCSS.png?format=original);background-position:-0px -80px;background-size:128px auto;height:16px;width:16px"></span> <code>manifest_publish.json</code></li>
      <li><span class="sprite" style="background-image:url(https://wiki.mcbe-dev.net/w/images/9/92/FileCSS.png?format=original);background-position:-0px -80px;background-size:128px auto;height:16px;width:16px"></span> <code>manifest.json_old</code> 升级后的旧版清单文件备份</li>
      <li><span class="sprite" style="background-image:url(https://wiki.mcbe-dev.net/w/images/9/92/FileCSS.png?format=original);background-position:-0px -80px;background-size:128px auto;height:16px;width:16px"></span> <code>pack_manifest.json</code> 旧版清单文件名</li>
      <li><span class="sprite" style="background-image:url(https://wiki.mcbe-dev.net/w/images/9/92/FileCSS.png?format=original);background-position:-16px -64px;background-size:128px auto;height:16px;width:16px"></span> <code>upgrade_report.log</code> 清单文件升级日志</li>
    </ul></li>
  </ul>
</div>

## 版本化与模式

清单文件的版本化由文件中的`format_version`字段控制，目前该字段只允许`0`、`1`和`2`，其他版本将导致内容日志错误。`format_version`的值被称为该文件的**格式版本**（**Format Version**）。当前最新且推荐使用的格式版本为`2`。不同格式版本的清单文件格式的模式分别如下：

:::: code-group
::: code-group-item 2

```json
object
{
    int "format_version" // 该文件的格式版本，此处应为`1`
    object "header"
    {
        string "uuid"</[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/> // 该包的UUID，当解析内容出错时，引擎会报内容日志错误。当引擎最终使用的该包的UUID为`6989C411-4355-4756-9163-51C1DF5EF677`时，由于该UUID为保留的UUID，这会使该附加包从列表中隐藏
        string "name" // 当不存在时引擎会报内容日志错误
        string "description" : opt
        bool "platform_locked" : opt // 默认为false
        enumerated_value "pack_scope"<"global", "world", "any"> : opt // 默认为`any`
        bool "lock_template_options" // 当该包是世界模板包时是必须字段，当不是世界模板包时有效的该字段值会导致内容日志警告。引擎中实际有三种值：未定义、启用和禁用，该字段不存在或解析出错时为未定义，`true`时为启用，`false`时为禁用
        semver "version" // 该语义化版本字段不可为`*`，解析出错时报内容日志错误
        semver "min_engine_version" // 当该包是资源包或行为包时是必须字段，当不是资源包且不是行为包时有效的该字段值会导致内容日志警告。该语义化版本字段只支持数组格式，且值必须大于或等于`1.13.0`，否则会报内容日志错误
        semver "base_game_version" // 当该包是世界模板包时是必须字段，当不是世界模板包时有效的该字段值会导致内容日志警告。该语义化版本字段无限制，但不得大于当前游戏版本或小于`1.13.0`，否则会报内容日志错误
    }
    array "modules" // 若不存在，则会报内容日志错误
    {
        object "<any array element>"
        {
            string "uuid"</[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/> // 该模块的UUID，当解析内容出错时，引擎会报内容日志错误。如果包的UUID和某个模块的UUID重复，会报内容日志警告并以包的UUID的MD5杂凑值为种子通过一定算法生成新的包的UUID
            semver "version" // 该语义化版本字段不可为`*`，解析出错时报内容日志错误
            string "name" : opt
            enumerated_value "type"<"invalid", "resourcepack", "resources", "data", "plugin", "client_data", "interface", "script", "client_script", "world_template", "worldtemplate", "skin_pack", "skinpack", "persona_piece"> // `invalid`和其他非法字符串会导致内容日志错误
            enumerated_value "language"<"javascript"> : opt
            string "entry" : opt
        }
    }
    array "dependencies" : opt
    {
        object "<any array element>"
        {
            string "module_name" // 依赖的脚本API模块名，与`uuid`至少存在一个
            string "uuid"</[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/> // 依赖的包或模块的UUID，当解析内容出错时，引擎会报内容日志错误。
            string "version" // 该语义化版本字段不可为`*`，解析出错时报内容日志错误
        }
    }
    object "metadata" : opt
    {
        string "url" : opt
        string "license" : opt
        array "authors" : opt
        {
            string "<any array element>"
        }
        object "generated_with" : opt
        {
            array "<any tool name>"
            {
                semver "<any array element>" // 该语义化版本字段不可为`*`
            }
        }
    }
    array "settings" : opt
    {
        object "<any label control>"
        {
            enumerated_value "type"<"label", "toggle", "slider", "step_slider", "dropdown", "input"> // 控件类型，当前应为`label`
            string "text" // 控件显示的文本
            string "name" // 该控件的名字，用于存值
        }
        object "<any toggle control>"
        {
            enumerated_value "type"<"label", "toggle", "slider", "step_slider", "dropdown", "input"> // 控件类型，当前应为`toggle`
            string "text"
            string "name"
            bool "default" // 默认值
            enumerated_value "control_locked"<"none", "pregame", "ingame"> : opt // 何时锁定该控件
        }
        object "<any slider control>"
        {
            enumerated_value "type"<"label", "toggle", "slider", "step_slider", "dropdown", "input"> // 控件类型，当前应为`slider`
            string "text"
            string "name"
            float "default"
            float "min"
            float "max"
            float "step" : opt // 步长，默认为`1`
            enumerated_value "control_locked"<"none", "pregame", "ingame"> : opt
        }
        object "<any step slider control>"
        {
            enumerated_value "type"<"label", "toggle", "slider", "step_slider", "dropdown", "input"> // 控件类型，当前应为`step_slider`
            string "text"
            string "name"
            int "default"<0-*>
            array "steps"
            {
                string "<any array element>" // 滑块中每步的文本
            }
            enumerated_value "control_locked"<"none", "pregame", "ingame"> : opt
        }
        object "<any dropdown control>"
        {
            enumerated_value "type"<"label", "toggle", "slider", "step_slider", "dropdown", "input"> // 控件类型，当前应为`dropdown`
            string "text"
            string "name"
            int "default"<0-*>
            array "options"
            {
                string "<any array element>" // 下拉菜单中每项的文本
            }
        }
        object "<any text input control>"
        {
            enumerated_value "type"<"label", "toggle", "slider", "step_slider", "dropdown", "input"> // 控件类型，当前应为`input`
            string "text"
            string "name"
            string "default"
            string "placeholder" : opt // 当用户尚未输入文本时输入框底部的暗文本
            enumerated_value "control_locked"<"none", "pregame", "ingame"> : opt
        }
    }
    array "legacy_module_dependencies" : opt // 等价于`0`格式版本下的依赖
    {
        object "<any array element>"
        {
            string "uuid" : opt
            string "version" : opt
        }
    }
    array "subpacks" : opt
    {
        object "<any array element>"
        {
            string "folder_name"
            string "name"
            int "memory_tier" : opt // 默认为`0`
        }
    }
    array "capabilities" : opt
    {
        enumerated_value "<any array element>"<"chemistry", "raytraced", "script_eval">
    }
    bool "has_education_metadata" : opt // 默认为`false`
}
```

:::
::: code-group-item 1

```json
object
{
    int "format_version" // 该文件的格式版本，此处应为`1`
    object "header"
    {
        string "uuid"</[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/> // 该包的UUID，当解析内容出错时，引擎会报内容日志错误。当引擎最终使用的该包的UUID为`6989C411-4355-4756-9163-51C1DF5EF677`时，由于该UUID为保留的UUID，这会使该附加包从列表中隐藏
        string "name" : opt // 当不存在时会将包的名称设置为`manifestvalidation.noname`本地化键名对应的原始文本
        string "description" : opt
        bool "platform_locked" : opt // 默认为false
        enumerated_value "pack_scope"<"global", "world", "any"> : opt // 默认为`any`
        bool "lock_template_options" : opt // 引擎中实际有三种值：未定义、启用和禁用，该字段不存在或解析出错时为未定义，`true`时为启用，`false`时为禁用
        semver "version" // 该语义化版本字段不可为`*`，解析出错时报内容日志错误
        semver "min_engine_version" : opt // 该语义化版本字段只支持数组格式，对于资源包和行为包来说默认为`1.2.5`，若大于或等于`1.13.0`，会强行设置为`1.12.0`并报内容日志警告
        semver "base_game_version" : opt // 该语义化版本字段无限制，默认为`1.13.0`。在当前格式版本下该字段未启用，有效的该字段值会导致内容日志警告
    }
    array "modules" // 若不存在，则会报内容日志错误
    {
        object "<any array element>"
        {
            string "uuid"</[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/> // 该模块的UUID，当解析内容出错时，引擎会报内容日志错误。如果包的UUID和某个模块的UUID重复，会报内容日志警告并以包的UUID的MD5杂凑值为种子通过一定算法生成新的包的UUID
            semver "version" // 该语义化版本字段不可为`*`，解析出错时报内容日志错误
            string "name" : opt
            enumerated_value "type"<"invalid", "resourcepack", "resources", "data", "plugin", "client_data", "interface", "script", "client_script", "world_template", "worldtemplate", "skin_pack", "skinpack", "persona_piece"> // `invalid`和其他非法字符串会导致内容日志错误
            enumerated_value "language"<"javascript"> : opt
            string "entry" : opt
        }
    }
    array "dependencies" : opt
    {
        object "<any array element>"
        {
            string "module_name" // 依赖的脚本API模块名，与`uuid`至少存在一个
            string "uuid"</[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/> // 依赖的包或模块的UUID，当解析内容出错时，引擎会报内容日志错误。
            string "version" // 该语义化版本字段不可为`*`，解析出错时报内容日志错误
        }
    }
    object "metadata" : opt
    {
        string "url" : opt
        string "license" : opt
        array "authors" : opt
        {
            string "<any array element>"
        }
        object "generated_with" : opt
        {
            array "<any tool name>"
            {
                semver "<any array element>" // 该语义化版本字段不可为`*`
            }
        }
    }
    array "settings" : opt
    {
        object "<any label control>"
        {
            enumerated_value "type"<"label", "toggle", "slider", "step_slider", "dropdown", "input"> // 控件类型，当前应为`label`
            string "text" // 控件显示的文本
            string "name" // 该控件的名字，用于存值
        }
        object "<any toggle control>"
        {
            enumerated_value "type"<"label", "toggle", "slider", "step_slider", "dropdown", "input"> // 控件类型，当前应为`toggle`
            string "text"
            string "name"
            bool "default" // 默认值
            enumerated_value "control_locked"<"none", "pregame", "ingame"> : opt // 何时锁定该控件
        }
        object "<any slider control>"
        {
            enumerated_value "type"<"label", "toggle", "slider", "step_slider", "dropdown", "input"> // 控件类型，当前应为`slider`
            string "text"
            string "name"
            float "default"
            float "min"
            float "max"
            float "step" : opt // 步长，默认为`1`
            enumerated_value "control_locked"<"none", "pregame", "ingame"> : opt
        }
        object "<any step slider control>"
        {
            enumerated_value "type"<"label", "toggle", "slider", "step_slider", "dropdown", "input"> // 控件类型，当前应为`step_slider`
            string "text"
            string "name"
            int "default"<0-*>
            array "steps"
            {
                string "<any array element>" // 滑块中每步的文本
            }
            enumerated_value "control_locked"<"none", "pregame", "ingame"> : opt
        }
        object "<any dropdown control>"
        {
            enumerated_value "type"<"label", "toggle", "slider", "step_slider", "dropdown", "input"> // 控件类型，当前应为`dropdown`
            string "text"
            string "name"
            int "default"<0-*>
            array "options"
            {
                string "<any array element>" // 下拉菜单中每项的文本
            }
        }
        object "<any text input control>"
        {
            enumerated_value "type"<"label", "toggle", "slider", "step_slider", "dropdown", "input"> // 控件类型，当前应为`input`
            string "text"
            string "name"
            string "default"
            string "placeholder" : opt // 当用户尚未输入文本时输入框底部的暗文本
            enumerated_value "control_locked"<"none", "pregame", "ingame"> : opt
        }
    }
    array "legacy_module_dependencies" : opt // 等价于`0`格式版本下的依赖
    {
        object "<any array element>"
        {
            string "uuid" : opt
            string "version" : opt
        }
    }
    array "subpacks" : opt
    {
        object "<any array element>"
        {
            string "folder_name"
            string "name"
            int "memory_tier" : opt // 默认为`0`
        }
    }
    array "capabilities" : opt
    {
        enumerated_value "<any array element>"<"chemistry", "raytraced", "script_eval">
    }
    bool "has_education_metadata" : opt // 默认为`false`
}
```

:::
::: code-group-item 0

```json
object
{
    int "format_version" // 该文件的格式版本，此处应为`0`
    object "header"
    {
        string "pack_id"</[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/> // 该包的UUID，当解析内容出错时，引擎会报内容日志警告并使用`pack_id<pack_id>`的MD5杂凑值为种子通过一定算法生成新的该包的UUID，其中`<pack_id>`是该字段读到的真实值。当引擎最终使用的该包的UUID为`6989C411-4355-4756-9163-51C1DF5EF677`时，由于该UUID为保留的UUID，这会使该附加包从列表中隐藏
        string "name" : opt // 当不存在时会报内容日志警告，并将引擎最终使用的该包的UUID设置为包的名字
        string "description" : opt
        bool "platform_locked" : opt // 默认为false
        enumerated_value "pack_scope"<"global", "world", "any"> : opt // 默认为`any`
        bool "lock_template_options" : opt // 引擎中实际有三种值：未定义、启用和禁用，该字段不存在或解析出错时为未定义，`true`时为启用，`false`时为禁用
        semver "packs_version" // 该语义化版本字段不可为`*`，当作为字符串解析内容出错时，报内容日志警告，并默认设置为`1.0.0`，其它情况下皆报内容日志警告，并默认设置为`0.0.0`
        semver "min_engine_version" : opt // 该语义化版本字段只支持数组格式，对于资源包和行为包来说默认为`1.2.5`，若大于或等于`1.13.0`，会强行设置为`1.12.0`并报内容日志警告
        semver "base_game_version" : opt // 该语义化版本字段无限制，默认为`1.13.0`。在当前格式版本下该字段未启用，有效的该字段值会导致内容日志警告
    }
    array "modules" : opt // 若不存在，则会报内容日志警告，并默认添加一个`resource`模块，该模块的UUID是以`<name><description>`的MD5杂凑值为种子通过一定算法生成新UUID，其中`<name>`和`<description>`是该清单的标头中包的名称和描述，该模块的版本是`1.0.0`
    {
        object "<any array element>"
        {
            string "uuid"</[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/> // 当解析内容出错时，引擎会报内容日志警告并使用`pack_id<uuid>`的MD5杂凑值为种子通过一定算法生成新的该包的UUID，其中`<uuid>`是该字段读到的真实值。如果包的UUID和某个模块的UUID重复，会报内容日志警告并以包的UUID的MD5杂凑值为种子通过一定算法生成新的包的UUID
            semver "version" // 该语义化版本字段不可为`*`，当作为字符串解析内容出错时，报内容日志警告，并默认设置为`1.0.0`，其它情况下皆报内容日志警告，并默认设置为`0.0.0`
            string "name" : opt
            enumerated_value "type"<"invalid", "resourcepack", "resources", "data", "plugin", "client_data", "interface", "script", "client_script", "world_template", "worldtemplate", "skin_pack", "skinpack", "persona_piece", "addon", "mandatory"> : opt // 默认为`invalid`，`addon`、`mandatory`和其他非法字符串会导致内容日志警告
            enumerated_value "language"<"javascript"> : opt
            string "entry" : opt
        }
    }
    object "metadata" : opt
    {
        string "url" : opt
        string "license" : opt
        array "authors" : opt
        {
            string "<any array element>"
        }
        object "generated_with" : opt
        {
            array "<any tool name>"
            {
                semver "<any array element>" // 该语义化版本字段不可为`*`
            }
        }
    }
    array "dependencies" : opt
    {
        object "<any array element>"
        {
            string "uuid" : opt
            string "version" : opt
        }
    }
}
```

:::
::::

### `semver`

@[code](../subschemas/semver.json)

### 模块类型

**包类型**（**Pack Type**）决定包是哪种附加包，这决定着它的导入方式、读取方式和加载方式，模块的**资源类型**（**Resource Type**）仅用于判断一个包的诸多模块是否兼容和决定该包是否含有服务端脚本或客户端脚本。每个包的清单中最后一个读取的模块的类型将决定该包的类型。下标列出了模块类型的接口字符串对应的包类型和模块资源类型。

| 接口字符串       | 对应的包类型    | 对应的资源类型  |
| ---------------- | --------------- | --------------- |
| `invalid`        | `Invalid`       | `Invalid`       |
| `resourcepack`   | `Resources`     | N/A             |
| `resources`      | `Resources`     | `Resources`     |
| `data`           | `Behavior`      | `DataAddOn`     |
| `plugin`         | `Behavior`      | N/A             |
| `client_data`    | `Behavior`      | N/A             |
| `interface`      | `Behavior`      | `Interface`     |
| `script`         | `Behavior`      | `ScriptAddOn`   |
| `client_script`  | `Resources`     | `ClientData`    |
| `world_template` | `WorldTemplate` | `WorldTemplate` |
| `worldtemplate`  | `WorldTemplate` | N/A             |
| `skin_pack`      | `Skins`         | N/A             |
| `skinpack`       | `Skins`         | N/A             |
| `persona_piece`  | `PersonaPiece`  | N/A             |
| `addon`          | `Addon`         | N/A             |
| `mandatory`      | N/A             | `Mandatory`     |

`addon`和`mandatory`类型无法正常反序列化，`mandatory`类型无法正常序列化。

#### 兼容性

如果清单中有大于1个模块，引擎会检查模块之间的兼容性。检查兼容性是根据资源类型对应的包类型是否一致来完成的。如果所有模块的资源类型对应的包类型一致，则兼容，否则不兼容。上表中的N/A在检测兼容性时会被视为`Invalid`。不兼容的包会在格式版本为`0`时仅保留最后一个模块以供后续使用和升级，并报内容日志警告；在其他格式版本下报内容日志错误。下表列出了模块的资源类型对应的包类型：

| 资源类型        | 对应的包类型    |
| --------------- | --------------- |
| `Invalid`       | `Invalid`       |
| `Resources`     | `Resources`     |
| `DataAddOn`     | `Behavior`      |
| `ScriptAddOn`   | `Behavior`      |
| `ClientData`    | `Behavior`      |
| `Interface`     | `Behavior`      |
| `Mandatory`     | `Invalid`       |
| `WorldTemplate` | `WorldTemplate` |

### 包设置

**包设置**（**Pack Setting**）是清单文件中存在`settings`字段后启用的内容，供玩家对该包进行一定程度的自定义。目前包设置只实现了存储当前设置值到本地和从本地读取设置的功能，并未实现在附加包内查询设置信息的功能，所以其功能并不完整。

玩家在包设置面板上进行更改后，该包的设置将会自动保存在`com.mojang/minecraftpe/pack_settings/pack_<uuid>.json`文件中，其中`<uuid>`是该包的UUID。该文件的格式为：

```json
object
{
    bool "<any control name>" : opt
    float "<any control name>" : opt
    int "<any control name>" : opt
    string "<any control name>" : opt
}
```

### 世界模板

世界模板包的清单文件要求同目录下必须有`level.dat`文件，且其需要能够正常解析，且其具有`GameType`标签。

## 升级

当格式版本为`0`时，引擎将在完全读取清单文件后尝试对该文件进行升级。当该文件可以以`0`格式版本正常解析时，引擎会尝试在`manifest.json`文件处以`1`格式版本对应的格式写入等价的内容，并将原先的文件内容备份至同目录处的`manifest.json_old`文件。该文件格式的一个示例如下：

```json
{
    "format_version": 1,
    "header": {
        "name": "<name>",
        "description": "<description>",
        "uuid": "<uuid>",
        "platform_locked": false,
        "lock_template_options": false, // 未定义时不序列化该字段，启用或禁用时序列化该字段
        "version": [ 1, 0, 0 ],
        "min_engine_version": [ 1, 0, 0 ], // 当包类型为资源包或行为包时序列化该字段，否则不序列化该字段
        "base_game_version": "*" // 任意版本（`*`）时序列化为字符串，特定版本时序列化为数组。当包类型为世界模板时序列化该字段，否则不序列化该字段
    },
    "modules": [
        {
            "uuid": "<uuid>",
            "name": "<name>",
            "version": [ 1, 0, 0 ],
            "type": "<type>" // 会由资源类型序列化为接口字符串，对应关系见“模块类型”段落
        }
    ],
    "dependencies": [
        {
            "uuid": "<uuid>",
            "version": [ 1, 0, 0 ]
        }
    ], // 事实上该字段应该不会序列化，`0`格式版本的依赖会被序列化至`legacy_module_dependencies`
    "metadata": {
        "authors": [ "<author>" ], // 作者非空时才会序列化
        "license": "<license>", // 许可非空时才会序列化
        "url": "<url>" // URL非空时才会序列化
    },
    "legacy_module_dependencies": [
        {
            "uuid": "<uuid>",
            "version": [ 1, 0, 0 ]
        }
    ]
}
```

如果在解析和升级时出现错误，引擎将会在同目录处写入`upgrade_report.log`文件，该文件格式如下：

```json
object
{
    resource_location "location" // 该包的资源位置
    bool "upgraded" // 是否已成功升级
    array "warnings" // 解析和升级过程中产生的警告
    {
        pack_error "<any array element>"
    }
    array "errors" // 解析和升级过程中产生的错误
    {
        pack_error "<any array element>"
    }
}
```

### 子模式

#### `resource_location`

```json
object
{
    int "fs" // 该资源位置所处的文件系统
    string "path" // 该资源位置的路径
}
```

#### `pack_error`

```json
object
{
    int "type" // 错误类型
    string "key" // 错误文本或本地化键名
    array "parameters" // 参数表
    {
        string "<any array element>"
    }
}
```

### 文件系统

| 值   | 对应的文件系统 |
| ---- | -------------- |
| 0    | UserPackage    |
| 1    | AppPackage     |
| 2    | Raw            |
| 3    | RawPersistent  |
| 4    | SettingsDir    |
| 5    | ExternalDir    |
| 6    | ServerPackage  |
| 7    | DataDir        |
| 8    | UserDir        |
| 9    | ScreenshotsDir |
| 10   | StoreCache     |
| 11   | Invalid        |

### 错误类型

| 值   | 对应的错误类型                    |
| ---- | --------------------------------- |
| 0    | None                              |
| 1    | NoPackAccess                      |
| 2    | UnsupportedFileFormat             |
| 3    | IncompletePack                    |
| 4    | NoManifest                        |
| 5    | ParseError                        |
| 6    | MissingProperty                   |
| 7    | MissingPropertyUpgraded           |
| 8    | WrongTypeProperty                 |
| 9    | EmptyProperty                     |
| 10   | EmptyPropertyUpgraded             |
| 11   | InvalidProperty                   |
| 12   | MalformedPropertyUUID             |
| 13   | MalformedPropertyUUIDUpgraded     |
| 14   | MalformedPropertyVERSION          |
| 15   | MalformedPropertyVERSIONUpgraded  |
| 16   | DuplicateUUIDUpgraded             |
| 17   | DuplicateUUID                     |
| 18   | InvalidPackTypeUpgraded           |
| 19   | MissingModules                    |
| 20   | MissingDependency                 |
| 21   | MultipleModules                   |
| 22   | MultipleModulesUpgraded           |
| 23   | UnsupportedFormatVersion          |
| 24   | PackUpgraded                      |
| 25   | InvalidCapability                 |
| 26   | UnsupportedBaseGameVersionPatch   |
| 27   | IgnoredProperty                   |
| 28   | VersionTooHigh                    |
| 29   | VersionTooLow                     |
| 30   | MinEngineVersionCapFormatVersion1 |
