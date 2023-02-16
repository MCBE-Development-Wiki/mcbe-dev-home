# 方块服务端定义文件

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://mirrors.creativecommons.org/presskit/buttons/80x15/svg/by-nc-sa.svg" /></a>

**方块服务端定义文件**（**Block Server Definition File**）用于定义各方块的服务端属性，位于行为包的`blocks`或`netease_blocks`（<span style="color:rgb(255, 85, 85);">仅中国版</span>）文件夹内，文件名可以自定义，其后缀名通常写为`.json`。注意，不同包中的同名的方块定义文件会出现相互覆盖的情况，请在命名时尽可能独一无二。

<div class="treeview">
  <ul>
    <li><span class="sprite" style="background-image:url(https://wiki.mcbe-dev.net/w/images/9/92/FileCSS.png?format=original);background-position:-112px -128px;background-size:128px auto;height:16px;width:16px"></span> <code>bp</code> 行为包<ul>
      <li><span class="sprite" style="background-image:url(https://wiki.mcbe-dev.net/w/images/9/92/FileCSS.png?format=original);background-position:-112px -128px;background-size:128px auto;height:16px;width:16px"></span> <code>blocks</code><ul>
        <li><span class="sprite" style="background-image:url(https://wiki.mcbe-dev.net/w/images/9/92/FileCSS.png?format=original);background-position:-0px -80px;background-size:128px auto;height:16px;width:16px"></span> <code>&lt;block_definition_file_name&gt;.json</code></li>
      </ul></li>
      <li><span class="sprite" style="background-image:url(https://wiki.mcbe-dev.net/w/images/9/92/FileCSS.png?format=original);background-position:-112px -128px;background-size:128px auto;height:16px;width:16px"></span> <code>netease_blocks</code> 会额外配合加载微缩方块相关定义 <span style="color:rgb(255, 85, 85);">仅中国版</span><ul>
        <li><span class="sprite" style="background-image:url(https://wiki.mcbe-dev.net/w/images/9/92/FileCSS.png?format=original);background-position:-0px -80px;background-size:128px auto;height:16px;width:16px"></span> <code>&lt;block_definition_file_name&gt;.json</code></li>
      </ul></li>
    </ul></li>
  </ul>
</div>

## 版本化

方块服务端定义文件由格式版本控制，不同的格式版本控制不同的模式写法。

## 模式

:::: code-group
::: code-group-item 0.0.0

```json
object
{
    float "format_version" // 该文件的格式版本，会舍弃小数点后第二位及后面的所有位，并将整数位和小数点后第一位分别作为格式版本的主版本号和次版本号
    semver "format_version" // 该文件的格式版本，不支持`*`
    object "minecraft:block" // 方块模式标识符
    {
        block_description "description" // 方块描述
        block_permutations "permutations" // 方块置换
        block_components "components" // 方块组件
        block_events "events" // 方块组件
    }
}
```

:::
::::

### `semver`

@[code](../subschemas/semver.json)

### `block_description`

::: warning 本段落存在需要实验性玩法的内容。影响的内容：
`1.19.40` - `properties`：假日创作者功能<br>
`0.0.0` - `properties`：假日创作者功能
:::

:::: code-group
::: code-group-item 1.19.70

```json
object
{
    string "identifier" // 该方块类型的赋命名空间标识符
    object "menu_category" : opt // 该方块的创造分类和分组，默认为设置分类为`none`，分组不设置
    {
        enumerated_value "category"<"construction", "nature", "equipment", "items", "none", "custom"> : opt // 该方块的创造分类，默认为`none`，其中`custom`仅中国版支持
        string "group" : opt // 该方块的创造分分组，仅支持填写一个作用域化的创造分组，默认为没有分组
        bool "is_hidden_in_commands" : opt // 是否在命令中隐藏，默认为`false`
    }
    object "properties" : opt // 该方块上定义的方块状态组，又称方块属性，不再需要实验性玩法
    {
        array "<block_state_name>"<1,16> // 一个方块状态，数组内所有元素的数据类型应相同
        {
            int "<any array element>" // 整数方块状态枚举值
            string "<any array element>" // 字符串方块状态枚举值
            bool "<any array element>" // 布尔值方块状态枚举值
        }
        object "<block_state_name>" // 一个方块状态
        {
            array "values"<1,16> // 方块状态数组，数组内所有元素的数据类型应相同
            {
                int "<any array element>" // 整数方块状态枚举值
                string "<any array element>" // 字符串方块状态枚举值
                bool "<any array element>" // 布尔值方块状态枚举值
            }
            object "values" // 方块状态区间
            {
                int "min" : opt // 最小值，默认为`0`
                int "max" : opt // 最大值，默认为`0`
            }
        }
    }
    bool "register_to_creative_menu" : opt // 是否将该方块注册到创造模式物品栏，仅中国版支持
    enumerated_value "material_type"<"air", "dirt", "wood", "stone", "metal", "water", "lava", "leaves", "plant", "replaceable_plant", "sponge", "cloth", "bed", "fire", "sand", "decoration", "glass", "explosive", "ice", "packed_ice", "top_snow", "snow", "cactus", "clay", "vegetable", "portal", "cake", "web", "redstone_wire", "carpet", "buildable_glass", "slime", "piston", "allow", "deny", "nether_wart", "stone_decoration", "bubble", "egg", "barrier", "decoration_flammable", "surface_type_total"> : opt // 该方块的材料类型，仅中国版支持
    enumerated_value "base_block"<"mob_spawner", "portal", "custom_crop_block", "custom_heavy_block", "liquid", "flowing_liquid"> : opt // 该方块的基方块，仅中国版支持
    string "category" : opt // 该方块的中国版创造分类，支持填入中国版自定义的分类名，仅中国版支持
    string "micro_size" : opt // 该微缩方块的微缩尺寸，格式为`<x> <y> <z>`，默认为`1 1 1`，仅中国版支持
}
```

:::
::: code-group-item 1.19.40

```json
object
{
    string "identifier" // 该方块类型的赋命名空间标识符
    object "menu_category" : opt // 该方块的创造分类和分组，默认为设置分类为`none`，分组不设置
    {
        enumerated_value "category"<"construction", "nature", "equipment", "items", "none", "custom"> : opt // 该方块的创造分类，默认为`none`，其中`custom`仅中国版支持
        string "group" : opt // 该方块的创造分分组，仅支持填写一个作用域化的创造分组，默认为没有分组
        bool "is_hidden_in_commands" : opt // 是否在命令中隐藏，默认为`false`
    }
    object "properties" : opt // 该方块上定义的方块状态组，又称方块属性。除非开启“假日创作者功能”实验性玩法，否则该字段内容虽然会被正常解析，但不会应用
    {
        array "<block_state_name>"<1,16> // 一个方块状态，数组内所有元素的数据类型应相同
        {
            int "<any array element>" // 整数方块状态枚举值
            string "<any array element>" // 字符串方块状态枚举值
            bool "<any array element>" // 布尔值方块状态枚举值
        }
        object "<block_state_name>" // 一个方块状态
        {
            array "values"<1,16> // 方块状态数组，数组内所有元素的数据类型应相同
            {
                int "<any array element>" // 整数方块状态枚举值
                string "<any array element>" // 字符串方块状态枚举值
                bool "<any array element>" // 布尔值方块状态枚举值
            }
            object "values" // 方块状态区间
            {
                int "min" : opt // 最小值，默认为`0`
                int "max" : opt // 最大值，默认为`0`
            }
        }
    }
    bool "register_to_creative_menu" : opt // 是否将该方块注册到创造模式物品栏，仅中国版支持
    enumerated_value "material_type"<"air", "dirt", "wood", "stone", "metal", "water", "lava", "leaves", "plant", "replaceable_plant", "sponge", "cloth", "bed", "fire", "sand", "decoration", "glass", "explosive", "ice", "packed_ice", "top_snow", "snow", "cactus", "clay", "vegetable", "portal", "cake", "web", "redstone_wire", "carpet", "buildable_glass", "slime", "piston", "allow", "deny", "nether_wart", "stone_decoration", "bubble", "egg", "barrier", "decoration_flammable", "surface_type_total"> : opt // 该方块的材料类型，仅中国版支持
    enumerated_value "base_block"<"mob_spawner", "portal", "custom_crop_block", "custom_heavy_block", "liquid", "flowing_liquid"> : opt // 该方块的基方块，仅中国版支持
    string "category" : opt // 该方块的中国版创造分类，支持填入中国版自定义的分类名，仅中国版支持
    string "micro_size" : opt // 该微缩方块的微缩尺寸，格式为`<x> <y> <z>`，默认为`1 1 1`，仅中国版支持
}
```

:::
::: code-group-item 0.0.0

```json
object
{
    string "identifier" // 该方块类型的赋命名空间标识符
    object "menu_category" : opt // 该方块的创造分类和分组，默认为设置分类为`none`，分组不设置
    {
        enumerated_value "category"<"all", "construction", "nature", "equipment", "items", "commands", "none", "custom"> : opt // 该方块的创造分类，默认为`none`，其中`custom`仅中国版支持
        string "group" : opt // 该方块的创造分分组，仅支持填写一个作用域化的创造分组，默认为没有分组
        bool "is_hidden_in_commands" : opt // 是否在命令中隐藏，默认为`false`
    }
    object "properties" : opt // 该方块上定义的方块状态组，又称方块属性。除非开启“假日创作者功能”实验性玩法，否则该字段内容虽然会被正常解析，但不会应用
    {
        array "<block_state_name>"<1,16> // 一个方块状态，数组内所有元素的数据类型应相同
        {
            int "<any array element>" // 整数方块状态枚举值
            string "<any array element>" // 字符串方块状态枚举值
            bool "<any array element>" // 布尔值方块状态枚举值
        }
        object "<block_state_name>" // 一个方块状态
        {
            array "values"<1,16> // 方块状态数组，数组内所有元素的数据类型应相同
            {
                int "<any array element>" // 整数方块状态枚举值
                string "<any array element>" // 字符串方块状态枚举值
                bool "<any array element>" // 布尔值方块状态枚举值
            }
            object "values" // 方块状态区间
            {
                int "min" : opt // 最小值，默认为`0`
                int "max" : opt // 最大值，默认为`0`
            }
        }
    }
    bool "register_to_creative_menu" : opt // 是否将该方块注册到创造模式物品栏，仅中国版支持
    enumerated_value "material_type"<"air", "dirt", "wood", "stone", "metal", "water", "lava", "leaves", "plant", "replaceable_plant", "sponge", "cloth", "bed", "fire", "sand", "decoration", "glass", "explosive", "ice", "packed_ice", "top_snow", "snow", "cactus", "clay", "vegetable", "portal", "cake", "web", "redstone_wire", "carpet", "buildable_glass", "slime", "piston", "allow", "deny", "nether_wart", "stone_decoration", "bubble", "egg", "barrier", "decoration_flammable", "surface_type_total"> : opt // 该方块的材料类型，仅中国版支持
    enumerated_value "base_block"<"mob_spawner", "portal", "custom_crop_block", "custom_heavy_block", "liquid", "flowing_liquid"> : opt // 该方块的基方块，仅中国版支持
    string "category" : opt // 该方块的中国版创造分类，支持填入中国版自定义的分类名，仅中国版支持
    string "micro_size" : opt // 该微缩方块的微缩尺寸，格式为`<x> <y> <z>`，默认为`1 1 1`，仅中国版支持
}
```

:::
::::

#### `0.0.0`-->`1.19.40`：升级

- `menu_category`字段进行如下升级：
  - 如果`category`不存在，加入`is_hidden_in_commands`，值为`false`;
  - 如果`category`为空或解析失败，加入`is_hidden_in_commands`,值为`true`，并在加入`is_hidden_in_commands`后将`category`的值重置为`none`;
  - 如果`category`为`all`或`none`，加入`is_hidden_in_commands`值为`true`，其余情况值为`false`；
  - 如果`category`为`all`、`commands`或`none`，在加入`is_hidden_in_commands`后将`category`的值重置为`none`。

#### `1.19.40`-/->`1.19.70`：无升级

- `properties`字段所定义的内容发挥功能不再需要实验性玩法。

### `block_permutations`

::: warning 本段落存在需要实验性玩法的内容。影响的内容：
`1.19.60` - `root`：假日创作者功能<br>
`0.0.0` - `root`：假日创作者功能
:::

:::: code-group
::: code-group-item 1.19.70

```json
array // 无需实验性玩法
{
    object "<any array element>" // 一个方块置换
    {
        molang "condition" // 该方块置换的条件，仅支持字符串形式的Molang表达式，其中目前在查询函数中仅支持使用`query.block_property`查询
        block_components "components" // 当条件成立时该方块额外具有的组件
    }
}
```

:::
::: code-group-item 1.19.60

```json
array // 若未开启“假日创作者功能”实验性玩法，该字段内所有内容都不会加载，且会触发内容日志通知
{
    object "<any array element>" // 一个方块置换
    {
        molang "condition" // 该方块置换的条件，其中目前在查询函数中仅支持使用`query.block_property`查询
        block_components "components" // 当条件成立时该方块额外具有的组件
    }
}
```

:::
::: code-group-item 0.0.0

```json
array // 除非开启“假日创作者功能”实验性玩法，否则该字段内容虽然会被正常解析，但不会应用
{
    object "<any array element>" // 一个方块置换
    {
        molang "condition" // 该方块置换的条件，其中目前在查询函数中仅支持使用`query.block_property`查询
        block_components "components" // 当条件成立时该方块额外具有的组件
    }
}
```

:::
::::

#### `0.0.0`-/->`1.19.60`：无升级

- 只有当开启“假日创作者功能”实验性玩法时整个字段才会被加载，否则会报内容日志通知。

#### `1.19.60`-/->`1.19.70`：无升级

- 整个字段被加载不再需要实验性玩法。
- 整个字段所定义的内容发挥功能不再需要实验性玩法。

### `block_components`

关于各方块组件的模式详见[组件](#组件)段落。

:::: code-group
::: code-group-item 0.0.0

```json
object
{
    some_component "<any block component>" : opt // 一个方块组件
}
```

:::
::::

关于各方块组件的模式详见[组件](#组件)段落。

### `block_events`

:::: code-group
::: code-group-item 0.0.0

```json
object
{
    definition_event "<event name>" : opt // 一个方块事件，键名应填写一个赋命名空间标识符
}
```

:::
::::

### `definition_event`
 
::: warning 本段落存在需要实验性玩法的内容。影响的内容：
`0.0.0` - `<any event responce>`：假日创作者功能
:::

:::: code-group
::: code-group-item 0.0.0

@[code](../subschemas/definition_event.json)

:::
::::

关于各方块事件响应的模式详见[事件响应](#事件响应)段落。

### `molang`
 
@[code](../subschemas/molang.json)

## 枚举

| 影响字段                               | 枚举类型 | 描述                                               |
| -------------------------------------- | -------- | -------------------------------------------------- |
| `description/menu_category/category`<br>`minecraft:creative_category/category` | 硬枚举   | [创造分类](/misc/enums/creative_categorymd) |
| `description/menu_category/group`<br/>`minecraft:creative_category/group` | 软枚举   | [创造分组](/misc/enums/creative_group.md) |
| `description/material_type` | 硬枚举 | [方块材料类型](/misc/enums/material_type.md) <span style="color:rgb(255, 85, 85);">仅中国版</span> |
| `description/base_block` | 硬枚举 | [自定义方块类型](/misc/enums/custom_block_type.md) <span style="color:rgb(255, 85, 85);">仅中国版</span> |

## 组件

## 事件响应