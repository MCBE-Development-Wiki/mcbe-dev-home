# 方块服务端定义文件

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://mirrors.creativecommons.org/presskit/buttons/80x15/svg/by-nc-sa.svg" /></a>

**方块服务端定义文件**（**Block Server Definition File**）用于定义各方块的服务端属性，位于行为包的`blocks` <Badge type="tip" text="通用" vertical="super" /> 或`netease_blocks` <Badge type="danger" text="仅中国版" vertical="super" /> 文件夹内，文件名可以自定义，其后缀名通常写为`.json`。注意，不同包中的同名的方块定义文件会出现相互覆盖的情况，请在命名时尽可能独一无二。

<div class="treeview">
  <ul>
    <li><span class="sprite" style="background-image:url(https://wiki.mcbe-dev.net/w/images/9/92/FileCSS.png?format=original);background-position:-112px -128px;background-size:128px auto;height:16px;width:16px"></span> <code>bp</code> 行为包<ul>
      <li><span class="sprite" style="background-image:url(https://wiki.mcbe-dev.net/w/images/9/92/FileCSS.png?format=original);background-position:-112px -128px;background-size:128px auto;height:16px;width:16px"></span> <code>blocks</code><ul>
        <li><span class="sprite" style="background-image:url(https://wiki.mcbe-dev.net/w/images/9/92/FileCSS.png?format=original);background-position:-0px -80px;background-size:128px auto;height:16px;width:16px"></span> <code>&lt;block_definition_file_name&gt;.json</code></li>
      </ul></li>
      <li><span class="sprite" style="background-image:url(https://wiki.mcbe-dev.net/w/images/9/92/FileCSS.png?format=original);background-position:-112px -128px;background-size:128px auto;height:16px;width:16px"></span> <code>netease_blocks</code> 会额外配合加载微缩方块相关定义 <Badge type="danger" text="仅中国版" vertical="super" /><ul>
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
  - 如果`category`不存在，加入`is_hidden_in_commands`，值为`false`。
  - 如果`category`为空或解析失败，加入`is_hidden_in_commands`,值为`true`，并在加入`is_hidden_in_commands`后将`category`的值重置为`none`。
  - 如果`category`为`all`或`none`，加入`is_hidden_in_commands`值为`true`，其余情况值为`false`。
  - 如果`category`为`all`、`commands`或`none`，在加入`is_hidden_in_commands`后将`category`的值重置为`none`。

#### `1.19.40`-/->`1.19.70`：无升级

- `properties`字段所定义的内容发挥功能不再需要实验性玩法。

### `block_permutations`

::: warning 本段落存在需要实验性玩法的内容。影响的内容：
`1.19.60` - 根字段：假日创作者功能<br>
`0.0.0` - 根字段：假日创作者功能
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
array // 若未开启“假日创作者功能”实验性玩法，该字段内所有内容都不会加载，且会触发内容日志错误
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
- `<any array element>/condition`将只支持字符串类型的Molang表达式。

### `block_components`

::: warning 本段落存在需要实验性玩法的内容。影响的内容：
`0.0.0` - `<any block component>`中的一部分：假日创作者功能
:::

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
| `description/material_type` | 硬枚举 | [方块材料类型](/misc/enums/material_type.md) <Badge type="danger" text="仅中国版" vertical="super" /> |
| `description/base_block` | 硬枚举 | [自定义方块类型](/misc/enums/custom_block_type.md) <Badge type="danger" text="仅中国版" vertical="super" /> |

## 组件

### `minecraft:destructible_by_mining`

:::: code-group
::: code-group-item 1.19.20

```json
bool "minecraft:destructible_by_mining" : opt // 设置方块是否可以被挖掘，默认为`true`
object "minecraft:destructible_by_mining" : opt // 设置方块的摧毁时间
{
    float "seconds_to_destroy"<0.0-*> : opt // 基摧毁时间，即硬度值，实际摧毁时间将根据基摧毁时间进行计算得到，默认为`0.0`
}
```

:::
::: code-group-item 1.19.10

```json
float "minecraft:destroy_time"<0.0-*> : opt // 设置方块的基摧毁时间，即硬度值，实际摧毁时间将根据基摧毁时间进行计算得到，默认为`0.0`
```

:::
::: code-group-item 0.0.0

```json
object "minecraft:destroy_time" : opt // 设置方块的摧毁时间
{
    float "destroy_time"<0.0-*> // 基摧毁时间，即硬度值，实际摧毁时间将根据基摧毁时间进行计算得到
}
```

:::
::::

#### `0.0.0`-->`1.19.10`：升级

- 将`destroy_time`字段的值赋给整个`minecraft:destroy_time`字段。
  - 如果`destroy_time`不存在，将移除该组件，并报内容日志错误。

#### `1.19.10`-->`1.19.20`：升级

- 将`minecraft:destroy_time`字段的值赋给`seconds_to_destroy`字段。
- 将`minecraft:destroy_time`字段设置为对象并将`seconds_to_destroy`字段置于其内。
- 将`minecraft:destroy_time`字段重命名为`minecraft:destructible_by_mining`。

#### 相关链接

- [手册:minecraft:destructible_by_mining](https://wiki.mcbe-dev.net/-/645) - Minecraft基岩版开发Wiki
- [Block Documentation - minecraft:destructible_by_mining](https://learn.microsoft.com/en-us/minecraft/creator/reference/content/blockreference/examples/blockcomponents/minecraftblock_destructible_by_mining) - Microsoft Learn

### `minecraft:destructible_by_explosion`

:::: code-group
::: code-group-item 1.19.20

```json
bool "minecraft:destructible_by_explosion" : opt // 设置方块是否可以被爆炸破坏，默认为`true`
object "minecraft:destructible_by_explosion" : opt // 设置方块的爆炸抗性
{
    float "explosion_resistance"<0.0-*> : opt // 基爆照抗性，默认为`0.0`
}
```

:::
::: code-group-item 1.19.10

```json
float "minecraft:explosion_resistance"<0.0-*> : opt // 设置方块的基爆照抗性，默认为`0.0`
```

:::
::: code-group-item 0.0.0

```json
object "minecraft:explosion_resistance" : opt // 设置方块的爆炸抗性
{
    float "resistance"<0.0-*> // 基爆照抗性
}
```

:::
::::

#### `0.0.0`-->`1.19.10`：升级

- 将`resistance`字段的值赋给整个`minecraft:explosion_resistance`字段。
  - 如果`resistance`不存在，将移除该组件，并报内容日志错误。

#### `1.19.10`-->`1.19.20`：升级

- 将`minecraft:explosion_resistance`字段的值赋给`explosion_resistance`字段。
- 将`minecraft:explosion_resistance`字段设置为对象并将`explosion_resistance`字段置于其内。
- 将`minecraft:destroy_time`字段重命名为`minecraft:destructible_by_explosion`。

#### 相关链接

- [手册:minecraft:destructible_by_explosion](https://wiki.mcbe-dev.net/-/647) - Minecraft基岩版开发Wiki
- [Block Documentation - minecraft:destructible_by_explosion](https://learn.microsoft.com/en-us/minecraft/creator/reference/content/blockreference/examples/blockcomponents/minecraftblock_destructible_by_explosion) - Microsoft Learn

### `minecraft:flammable`

:::: code-group
::: code-group-item 1.19.10

```json
bool "minecraft:flammable" : opt // 设置方块是否可以自然地开始燃烧
object "minecraft:flammable" : opt // 设置方块的引燃和烧毁修饰符
{
    int "catch_chance_modifier"<0-*> : opt // 方块的引燃几率，默认为`5`
    int "destroy_chance_modifier"<0-*> : opt // 方块的烧毁几率，默认为`20`
}
```

:::
::: code-group-item 0.0.0

```json
object "minecraft:flammable" : opt // 设置方块的引燃和烧毁修饰符
{
    int "flame_odds"<0-*> // 方块的引燃几率
    int "burn_odds"<0-*> // 方块的烧毁几率
}
```

:::
::::

#### `0.0.0`-->`1.19.10`：升级

- 将`flame_odds`字段重命名为`catch_chance_modifier`。
  - 如果`flame_odds`不存在，将移除该组件，并报内容日志错误。
- 将`burn_odds`字段重命名为`destroy_chance_modifier`。
  - 如果`burn_odds`不存在，将移除该组件，并报内容日志错误。

#### 相关链接

- [手册:minecraft:flammable](https://wiki.mcbe-dev.net/-/646) - Minecraft基岩版开发Wiki
- [Block Documentation - minecraft:flammable](https://learn.microsoft.com/en-us/minecraft/creator/reference/content/blockreference/examples/blockcomponents/minecraftblock_flammable) - Microsoft Learn

### `minecraft:friction`

:::: code-group
::: code-group-item 1.19.20

```json
float "minecraft:friction"<0.0-0.9> : opt // 设置方块的地面摩擦，默认为`0.4`
```

:::
::: code-group-item 1.19.10

```json
float "minecraft:friction"<0.1-1.0> : opt // 设置实体在方块上运动时的摩擦因子，默认为`0.6`
```

:::
::: code-group-item 0.0.0

```json
object "minecraft:friction" : opt // 设置实体在方块上运动时的摩擦因子
{
    int "friction"<0.1-1.0> // 摩擦因子
}
```

:::
::::

#### `0.0.0`-->`1.19.10`：升级

- 将`friction`字段的值赋给整个`minecraft:friction`字段。
  - 如果`friction`不存在，将移除该组件，并报内容日志错误。

#### `1.19.10`-->`1.19.20`：升级

- 用`1.0`减去`minecraft:friction`字段的值再赋给`minecraft:friction`字段。

#### 相关链接

- [手册:minecraft:friction](https://wiki.mcbe-dev.net/-/648) - Minecraft基岩版开发Wiki
- [Block Documentation - minecraft:friction](https://learn.microsoft.com/en-us/minecraft/creator/reference/content/blockreference/examples/blockcomponents/minecraftblock_friction) - Microsoft Learn

### `minecraft:light_dampening`

:::: code-group
::: code-group-item 1.19.40

```json
int "minecraft:light_dampening"<0-15> : opt // 设置方块的光照隔除度，默认为`15`
```

:::
::: code-group-item 1.19.10

```json
int "minecraft:block_light_filter"<0-15> : opt // 设置方块的光照隔除度，默认为`15`
```

:::
::: code-group-item 1.18.0

```json
object "minecraft:block_light_filter" : opt // 设置方块的光照隔除度
{
    int "filter_level"<0-15> // 光照隔除度
}
```

:::
::: code-group-item 0.0.0

```json
object "minecraft:block_light_absorption" : opt // 设置方块的光照隔除度
{
    float "filter_level"<0.0-16.0> // 光照隔除度
}
```

:::
::::

#### `0.0.0`-->`1.18.0`：升级

- 将`filter_level`约束在`0`-`15`范围之内并设置为整数。
- 将`minecraft:block_light_absorption`字段重命名为`minecraft:block_light_filter`。

#### `1.18.0`-->`1.19.10`：升级

- 将`filter_level`字段的值赋给整个`minecraft:block_light_filter`字段。
  - 如果`filter_level`不存在，将移除该组件，并报内容日志错误。

#### `1.19.10`-->`1.19.40`：升级

- 将`minecraft:block_light_filter`字段重命名为`minecraft:light_dampening`。

#### 相关链接

- [手册:minecraft:light_dampening](https://wiki.mcbe-dev.net/-/1165) - Minecraft基岩版开发Wiki
- [Block Documentation - minecraft:light_dampening](https://learn.microsoft.com/en-us/minecraft/creator/reference/content/blockreference/examples/blockcomponents/minecraftblock_light_dampening) - Microsoft Learn

### `minecraft:light_emission`

:::: code-group
::: code-group-item 1.19.10

```json
int "minecraft:light_emission"<0-15> : opt // 设置方块的光照发射度，默认为`0`
```

:::
::: code-group-item 0.0.0

```json
object "minecraft:block_light_emission" : opt // 设置方块的光照发射度
{
    float "emission"<0.0-1.0> // 光照发射度
}
```

:::
::::

#### `0.0.0`-->`1.19.10`：升级

- 将`emission`字段的值赋给整个`minecraft:block_light_emission`字段。
  - 如果`emission`不存在，将移除该组件，并报内容日志错误。
- 将`minecraft:block_light_emission`重映射到`0`-`15`范围之内并设置为整数。
- 将`minecraft:block_light_emission`字段重命名为`minecraft:light_emission`。

#### 相关链接

- [手册:minecraft:light_emission](https://wiki.mcbe-dev.net/-/2095) - Minecraft基岩版开发Wiki
- [Block Documentation - minecraft:light_emission](https://learn.microsoft.com/en-us/minecraft/creator/reference/content/blockreference/examples/blockcomponents/minecraftblock_light_emission) - Microsoft Learn

### `minecraft:map_color`

:::: code-group
::: code-group-item 1.19.10

```json
string "minecraft:map_color"</^#[a-fA-F0-9]{6}$/> : opt // 以字符串格式设置方块的地图颜色
array "minecraft:map_color"[3] : opt // 以数组格式设置方块的地图颜色
{
    int "<any array element>"<0-255>
}
```

:::
::: code-group-item 0.0.0

```json
object "minecraft:map_color" : opt // 设置方块的地图颜色
{
    string "map_color"</^#[a-fA-F0-9]{6}$/> // 字符串颜色
    array "map_color"[3] // 数组颜色
    {
        int "<any array element>"<0-255>
    }
}
```

:::
::::

#### `0.0.0`-->`1.19.10`：升级

- 将`map_color`字段的值赋给整个`minecraft:map_color`字段。
  - 如果`map_color`不存在，将移除该组件，并报内容日志错误。

#### 相关链接

- [手册:minecraft:map_color](https://wiki.mcbe-dev.net/-/649) - Minecraft基岩版开发Wiki
- [Block Documentation - minecraft:map_color](https://learn.microsoft.com/en-us/minecraft/creator/reference/content/blockreference/examples/blockcomponents/minecraftblock_map_color) - Microsoft Learn

### `minecraft:loot`

:::: code-group
::: code-group-item 1.19.10

```json
string "minecraft:loot" : opt // 设置战利品表
```

:::
::: code-group-item 0.0.0

```json
object "minecraft:loot" : opt // 设置战利品表
{
    string "loot_table" // 战利品表相对路径
}
```

:::
::::

#### `0.0.0`-->`1.19.10`：升级

- 将`loot_table`字段的值赋给整个`minecraft:loot`字段。
  - 如果`loot_table`不存在，将移除该组件，并报内容日志错误。

#### 相关链接

- [手册:minecraft:loot](https://wiki.mcbe-dev.net/-/644) - Minecraft基岩版开发Wiki
- [Block Documentation - minecraft:loot](https://learn.microsoft.com/en-us/minecraft/creator/reference/content/blockreference/examples/blockcomponents/minecraftblock_loot) - Microsoft Learn

### `minecraft:breathability`

::: warning 本段落存在需要实验性玩法的内容。影响的内容：
`1.19.10` - 根字段：假日创作者功能<br>
`0.0.0` - 根字段：假日创作者功能
:::

::: danger 该组件的解析因向前兼容性而依旧存在，但已实质性失效。
:::

:::: code-group
::: code-group-item 1.19.10

```json
string "minecraft:breathability"<"solid", "air"> : opt // 设置可呼吸性，默认为`solid`
```

:::
::: code-group-item 0.0.0

```json
object "minecraft:breathability" : opt // 设置可呼吸性
{
    string "breathing_type"<"solid", "air"> // 呼吸类型，默认为`solid`
}
```

:::
::::

#### `0.0.0`-->`1.19.10`：升级

- 将`breathing_type`字段的值赋给整个`minecraft:breathability`字段。
  - 如果`breathing_type`不存在，将移除该组件，并报内容日志错误。

#### 相关链接

- [手册:minecraft:breathability](https://wiki.mcbe-dev.net/-/2097) - Minecraft基岩版开发Wiki
- [Block Documentation - minecraft:breathability](https://learn.microsoft.com/en-us/minecraft/creator/reference/content/blockreference/examples/blockcomponents/minecraftblock_breathability) - Microsoft Learn<Badge type="danger" text="死链" vertical="top" />

### `minecraft:creative_category`

::: warning 本段落存在需要实验性玩法的内容。影响的内容：
`1.19.10` - 根字段：假日创作者功能<br>
`0.0.0` - 根字段：假日创作者功能
:::

::: danger 该组件已弃用，请使用<a href="#block-description">方块描述</a>中的<code>menu_category</code>实现相同功能。
:::

:::: code-group
::: code-group-item 1.19.20

```json
object "minecraft:creative_category" : opt // 设置创造分类和分组，空组件
{
}
```

:::
::: code-group-item 0.0.0

```json
object "minecraft:creative_category" : opt // 设置创造分类和分组
{
    string "group" // 创造分组
    enumerated_value "category"<"all","construction","nature","equipment","items","commands", "none", "custom"> // 创造分类，默认为`none`，其中`custom`仅中国版支持
}
```

:::
::::

#### `0.0.0`-->`1.19.20`：升级

- 将`group`和`category`的值赋给方块描述组件下的`menu_category`下的`group`和`category`。
- 删除整个对象。

#### 相关链接

- [手册:minecraft:creative_category](https://wiki.mcbe-dev.net/-/2404) - Minecraft基岩版开发Wiki
- [Block Documentation - minecraft:creative_category](https://learn.microsoft.com/en-us/minecraft/creator/reference/content/blockreference/examples/blockcomponents/minecraftblock_creative_category) - Microsoft Learn<Badge type="danger" text="死链" vertical="top" />

### `minecraft:unit_cube`

::: warning 本段落存在需要实验性玩法的内容。影响的内容：
`0.0.0` - 根字段：假日创作者功能
:::

:::: code-group
::: code-group-item 0.0.0

```json
object "minecraft:unit_cube" : opt // 设置是否曲面细分时使用一个单位立方体，空对象
{
}
```

:::
::::

#### 相关链接

- [手册:minecraft:unit_cube](https://wiki.mcbe-dev.net/-/2146) - Minecraft基岩版开发Wiki
- [Block Documentation - minecraft:unit_cube](https://learn.microsoft.com/en-us/minecraft/creator/reference/content/blockreference/examples/blockcomponents/minecraftblock_unit_cube) - Microsoft Learn

### `minecraft:queued_ticking`

### `minecraft:random_ticking`

### `minecraft:material_instances`

### `minecraft:geometry`

### `minecraft:collision_box`

### `minecraft:crafting_table`

### `minecraft:selection_box`

### `minecraft:display_name`

### `minecraft:placement_filter`

### `minecraft:transformation`

### `minecraft:part_visibility`

### `minecraft:unwalkable`

### `minecraft:on_player_destroyed`

### `minecraft:on_fall_on`

### `minecraft:on_interact`

### `minecraft:on_placed`

### `minecraft:on_player_placing`

### `minecraft:on_step_off`

### `minecraft:on_step_on`

### `netease:block_legacy`

### `netease:tier`

### `netease:aabb`

### `netease:face_directional`

### `netease:mob_spawner`

### `netease:solid`

### `netease:pathable`

### `netease:portal`

### `netease:connection`

### `netease:block_entity`

### `netease:random_tick`

### `netease:redstone_property`

### `netease:transform`

### `netease:render_layer`

### `netease:neighborchanged_sendto_script`

### `netease:redstone`

### `netease:listen_block_remove`

### `netease:may_place_on`

### `netease:fire_resistant`

### `netease:liquid`

### `netease:fall`

### `netease:block_properties`

### `netease:water_destory`

### `netease:water_only`

### `netease:water_source`

### `netease:water_flow_source`

### `netease:snow_recover_able`

### `netease:can_built_over`

### `netease:on_stand_on`

### `netease:on_before_fall_on`

### `netease:on_after_fall_on`

### `netease:on_entity_inside`

### `netease:on_step_on`

### `netease:on_step_off`

## 事件响应