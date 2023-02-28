# 方块客户端定义文件

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://mirrors.creativecommons.org/presskit/buttons/80x15/svg/by-nc-sa.svg" /></a>

**方块客户端定义文件**（**Block Client Definition File**），又称**方块图形定义文件**（**Block Graphics Definition File**），用于定义各方块的客户端属性，位于资源包的根目录，文件名硬编码为`blocks.json`。

<div class="treeview">
  <ul>
    <li><span class="sprite" style="background-image:url(https://wiki.mcbe-dev.net/w/images/9/92/FileCSS.png?format=original);background-position:-112px -128px;background-size:128px auto;height:16px;width:16px"></span> <code>rp</code> 资源包<ul>
      <li><span class="sprite" style="background-image:url(https://wiki.mcbe-dev.net/w/images/9/92/FileCSS.png?format=original);background-position:-0px -80px;background-size:128px auto;height:16px;width:16px"></span> <code>blocks.json</code></li>
    </ul></li>
  </ul>
</div>

## 版本化

方块客户端定义文件由格式版本控制。当前引擎内只有一种模式格式，任意格式版本都将共享该种模式。

## 模式

:::: code-group
::: code-group-item 0.0.0

```json
object
{
    semver "format_version" // 该文件的格式版本，不支持`*`
    object "<block name>" // 一个方块的图形设置，键名接受一个赋命名空间标识符作为方块名，原版方块的方块名中可以省略`minecraft:`
    {
        textures "textures" // 该方块各面所采用的纹理在地形图集中的图块索引名，默认应用`missing_tile`
        textures "carried_textures" : opt // 该方块手持状态下各面所采用的纹理在地形图集中的图块索引名，默认应用`textures`所定义的纹理
        texture_isotropic "isotropic" : opt // 设置该方块的迷向性
        enumerated_value "blockshape"<"invisible", "block", "cross_texture", "torch", "fire", "water", "red_dust", "rows", "door", "ladder", "rail", "stairs", "fence", "lever", "cactus", "bed", "diode", "iron_fence", "stem", "vine", "fence_gate", "chest", "lilypad", "brewing_stand", "portal_frame", "cocoa", "tree", "cobblestone_wall", "double_plant", "flower_pot", "anvil", "dragon_egg", "structure_void", "block_half", "top_snow", "tripwire", "tripwire_hook", "cauldron", "repeater", "comparator", "hopper", "slime_block", "piston", "beacon", "chorus_plant", "chorus_flower", "end_portal", "end_rod", "skull", "facing_block", "command_block", "terracotta", "double_side_fence", "frame", "shulker_box", "doublesided_cross_texture", "doublesided_double_plant", "doublesided_rows", "element_block", "chemistry_table", "glow_stick", "coral_fan", "seagrass", "kelp", "trapdoor", "sea_pickle", "conduit", "turtle_egg", "bubble_column", "barrier", "camera_facing_sprite", "sign", "bamboo", "bamboo_sapling", "scaffolding", "grindstone", "bell", "lantern", "campfire", "lectern", "sweet_berry_bush", "cartography_table", "stonecutter_block", "chain", "sculk_sensor", "azalea", "flowering_azalea", "glow_frame", "glow_lichen", "sculk_vein", "sculk_shrieker", "micro_block", "netease_block_actor"> : opt // 该方块的方块形状，国际版暂时只能设置在原版方块上，中国版可以设置在所有自定义方块上，默认为`block`，其中`micro_block`和`netease_block_actor`仅中国版支持
        float "brightness_gamma" : opt // 亮度伽马值，默认为`0.0`
        enumerated_value "sound"<"normal", "gravel", "wood", "grass", "metal", "stone", "cloth", "glass", "sand", "snow", "ladder", "anvil", "slime", "silent", "itemframe", "turtle_egg", "bamboo", "bamboo_sapling", "lantern", "scaffolding", "sweet_berry_bush", "soul_sand", "soul_soil", "nylium", "roots", "fungus", "stem", "shroomlight", "basalt", "bone_block", "nether_brick", "netherrack", "nether_sprouts", "nether_wart", "nether_gold_ore", "ancient_debris", "honey_block", "honeycomb_block", "coral", "netherite", "lodestone", "chain", "vines", "powder_snow", "sculk_sensor", "dripstone_block", "spore_blossom", "azalea", "azalea_leaves", "copper", "big_dripleaf", "pointed_dripstone", "cave_vines", "hanging_roots", "moss_block", "moss_carpet", "deepslate", "deepslate_bricks", "amethyst_block", "amethyst_cluster", "large_amethyst_bud", "medium_amethyst_bud", "small_amethyst_bud", "tuff", "calcite", "candle", "comparator", "sculk", "sculk_catalyst", "sculk_shrieker", "sculk_vein", "froglight", "frog_spawn", "mud", "packed_mud", "mud_bricks", "mangrove_roots", "muddy_mangrove_roots", "default", "undefined"> : opt // 该方块的声音类型，默认为`normal`
        string "netease_model" : opt // 该方块的自定义方块模型的赋命名空间标识符，仅中国版支持
        string "model_textures" : opt // 该方块的自定义方块模型使用的纹理，仅当`netease_model`和`model_item_texture`存在时解析，仅中国版支持
        array "model_textures" : opt // 该方块的自定义方块模型使用的所有纹理，仅当`netease_model`存在时解析，仅中国版支持
        {
            string "<any array element>"
        }
        array "model_textures_descriptions" : opt // 该方块的自定义方块模型使用的纹理的实际分辨率，顺序应与`model_textures`中的顺序一致，仅当`netease_model`、`model_textures`和`model_item_texture`存在时解析，仅中国版支持
        string "model_item_texture" : opt // 该方块使用自定义方块模型后以物品形态手持使用的纹理，填写一个地形图集中的图块索引名，仅当`netease_model`和`model_textures`存在时解析，仅中国版支持
        object "client_entity" : opt // 该方块的自定义方块实体，仅中国版支持
        {
            string "identifier" // 方块实体所使用的客户端实体的赋命名空间标识符
            bool "hand_model_use_client_entity" : opt // 手持模型是否使用客户端实体模型进行渲染
            string "block_icon" : opt // 该方块使用自定义方块实体后作为物品形式时在UI中的图标使用的纹理，填写一个地形图集中的图块索引名，仅当`hand_model_use_client_entity`存在时解析
            bool "destoryed_textures" : opt // 该方块被破坏时粒子采用的纹理
        }
        object "netease_particle_effects" : opt // 挂接在该方块的自定义方块实体上的粒子特效，仅中国版支持
        {
            object "<friendly name>" // 一个粒子特效，键名填写用于引用该粒子的短名称
            {
                string "path" // 粒子定义文件相对于资源包根目录的路径，需要带有`.json`扩展名
                array "pos"[3] // 粒子挂接的位置，相对于实体模型空间原点
                {
                    int "[0..0]" // X坐标
                    int "[1..1]" // Y坐标
                    int "[2..2]" // Z坐标
                }
            }
        }
        object "netease_frame_effects" : opt // 挂接在该方块的自定义方块实体上的序列帧特效，仅中国版支持
        {
            object "<friendly name>" // 一个序列帧特效，键名填写用于引用该序列帧的短名称
            {
                string "path" // 序列帧纹理或定义文件相对于资源包根目录的路径，由Texture Packer导出的纹理不需要后缀名，由我的世界开发工作台导出的JSON文件需要带有`.json`扩展名
                array "pos"[3] // 序列帧挂接的位置，相对于实体模型空间原点
                {
                    int "[0..0]" // X坐标
                    int "[1..1]" // Y坐标
                    int "[2..2]" // Z坐标
                }
            }
        }
        string "use_colormap" : opt // 该方块使用的颜色图纹理相对于资源包根目录的路径，无需扩展名，只有在没有定义方块实体时才被解析
    }
}
```

:::
::::

### `semver`

@[code](../subschemas/semver.json)

### `textures`

```json
string // 各面都会应用同一个纹理
object // 三面式解析
{
    string "up" // 上面
    string "down" // 下面
    string "side" // 四个侧面
}
object // 六面式解析
{
    string "up" // 上面
    string "down" // 下面
    string "north" // 北面
    string "south" // 南面
    string "west" // 西面
    string "east" // 东面
}
```

### `texture_isotropic`

@[code](../subschemas/texture_isotropic.json)

## 枚举

| 影响字段                               | 枚举类型 | 描述                                               |
| -------------------------------------- | -------- | -------------------------------------------------- |
| `<block name>/blockshape` | 硬枚举   | [方块形状](/misc/enums/block_shape.md)          |
| `<block name>/sound`      | 硬枚举   | [方块声音类型](/misc/enums/block_sound_type.md) |

## 外部链接

- [Block Shapes](https://wiki.bedrock.dev/blocks/block-shapes.html) - Bedrock Wiki
- [Block Sounds](https://wiki.bedrock.dev/blocks/block-sounds.html) - Bedrock Wiki
- [自定义方块模型](https://mc.163.com/dev/mcmanual/mc-dev/mcguide/20-%E7%8E%A9%E6%B3%95%E5%BC%80%E5%8F%91/15-%E8%87%AA%E5%AE%9A%E4%B9%89%E6%B8%B8%E6%88%8F%E5%86%85%E5%AE%B9/2-%E8%87%AA%E5%AE%9A%E4%B9%89%E6%96%B9%E5%9D%97/5-%E8%87%AA%E5%AE%9A%E4%B9%89%E6%96%B9%E5%9D%97%E6%A8%A1%E5%9E%8B.html) - 我的世界开发者官网
- [自定义方块实体](https://mc.163.com/dev/mcmanual/mc-dev/mcguide/20-%E7%8E%A9%E6%B3%95%E5%BC%80%E5%8F%91/15-%E8%87%AA%E5%AE%9A%E4%B9%89%E6%B8%B8%E6%88%8F%E5%86%85%E5%AE%B9/2-%E8%87%AA%E5%AE%9A%E4%B9%89%E6%96%B9%E5%9D%97/4-%E8%87%AA%E5%AE%9A%E4%B9%89%E6%96%B9%E5%9D%97%E5%AE%9E%E4%BD%93.html) - 我的世界开发者官网
- [自定义方块实体外观](https://mc.163.com/dev/mcmanual/mc-dev/mcguide/20-%E7%8E%A9%E6%B3%95%E5%BC%80%E5%8F%91/15-%E8%87%AA%E5%AE%9A%E4%B9%89%E6%B8%B8%E6%88%8F%E5%86%85%E5%AE%B9/2-%E8%87%AA%E5%AE%9A%E4%B9%89%E6%96%B9%E5%9D%97/4.1-%E8%87%AA%E5%AE%9A%E4%B9%89%E6%96%B9%E5%9D%97%E5%AE%9E%E4%BD%93%E5%A4%96%E8%A7%82.html) - 我的世界开发者官网
