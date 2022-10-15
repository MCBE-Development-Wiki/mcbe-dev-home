# 附加包文档

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://mirrors.creativecommons.org/presskit/buttons/80x15/svg/by.svg" /></a> 翻译自[微软官方文档](https://learn.microsoft.com/zh-cn/minecraft/creator/)

这是Minecraft预览版的文档。本版本中的新功能、组件和权能不代表最终版本，可能在最终版本发布前发生变化而不另行通知。

如果您的附加包不能正常工作，请务必在游戏走出预览后检查文档。为预览创建的资源包和行为包不能保证在最终版本中有效。

## <samp>manifest.json</samp>

清单文件包含了Minecraft须要对包进行识别时所需的所有基本信息。下表包含清单的所有组件、它们各自的属性以及它们的含义。

### 属性

| 名称             | 描述                                                         |
| ---------------- | ------------------------------------------------------------ |
| `format_version` | 清单文件中使用的语法版本。它对于皮肤包来说可以为1，对于资源包、行为包和世界包来说可以为2。 |
| `header`         | 包含有关包的名称、描述和其他面向公众的功能的信息的段落。     |
| `modules`        | 包含有关你引入的内容的类型的信息的段落。                     |
| `dependencies`   | 包含对使该<samp>manifest.json</samp>文件正常工作所需的任何其他的包的定义的段落。 |
| `capabilities`   | 包含可在Minecraft中启用的可选功能的段落。                    |
| `metadata`       | 包含有关该文件的元数据的段落，例如作者和许可信息。           |

#### `header`

| 名称                  | 类型           | 描述                                                         |
| --------------------- | -------------- | ------------------------------------------------------------ |
| `name`                  | 字符串         | 这是该包将在Minecraft中出现的名字。它是必须字段。            |
| `description`           | 字符串         | 这是对该包的简短描述。它会出现在游戏中包的名字的下面。我们建议保持在1-2行之内。 |
| `uuid`                  | 字符串         | 这是一种特殊类型的标识符，它可以将此包与其他包惟一标识开来。UUID均写作`xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`格式，其中每个`x`为一个十六进制值（0-9或a-f）。我们建议使用在线服务来生成它，以保证其唯一性。 |
| `version`               | 向量 `[a, b, c]` | 这是你的包的版本，格式为`[majorVersion, minorVersion, revision]`。 该版本号主要在于之前导入过该包的旧版本时起作用。在导入新包时，如果新包版本更高，新包将取代旧包；如果版本相同或新包更低，则忽略该包的导入。 |
| `min_engine_version`    | 字符串         | 这是该包编写适用于的游戏的最低版本。它是资源包和行为包的必须字段。该字段可以帮助游戏识别你的包是否需要向后兼容。在创建包时，你应该始终使用当前可用的最高版本。 |
| `lock_template_options` | 布尔值         | 任何世界模板都必须选择这个选项。设置为`true`将阻止玩家修改游戏世界的选项。 |
| `base_game_version`     | 向量 `[a, b, c]` | 这是你的世界模板所需要的基游戏的版本，格式为`[majorVersion, minorVersion, revision]`。 我们使用该字段来确定在应用你的内容时应该使用什么版本的基游戏资源包和基游戏行为包。 |

#### `modules`

| 名称        | 类型           | 描述                                                         |
| ----------- | -------------- | ------------------------------------------------------------ |
| `uuid`        | 字符串         | 这是该模块的唯一标识符，格式与包在`header`中的UUID相同。模块的UUID不应与包的UUID相同，并且模块之间也不应相同。 |
| `description` | 字符串         | 这是对该模块的简短描述。这个值当前不是用户可见的，但这是一个提醒自己为什么定义了这个模块的好地方。 |
| `version`     | 向量 `[a, b, c]` | 这是该模块的版本，格式与包在header中的版本相同。这可以用来进一步标识包中的更改。 |
| `type`        | 字符串         | 这是该模块的类型，可以是以下任何一种：`resources`、`data`、`interface`、`world_template`或`script`。 |

#### `dependencies`

| 名称    | 类型           | 描述                                                         |
| ------- | -------------- | ------------------------------------------------------------ |
| `uuid`    | 字符串         | 这是该包所依赖的包的唯一标识符。它需要与所依赖的包在清单文件的`header`段落中定义的UUID完全相同。 |
| `version` | 向量 `[a, b, c]` | 这是你的包所依赖的包的特定版本。应该与所依赖的包在其清单文件中的版本匹配。 |

#### `capabilities`

| 名称      | 描述                                             |
| --------- | ------------------------------------------------ |
| `chemistry` | 允许该包加入、更改或替换化学功能。               |
| `raytraced` | 允许该包使用光线追踪功能并能够使用自定义着色器。 |

#### `metadata`

| 名称           | 类型     | 描述                                                         |
| -------------- | -------- | ------------------------------------------------------------ |
| `authors`        | 数组     | 该包的作者的名字                                             |
| `license`        | 字符串   | 该包的许可                                                   |
| `generated_with` | JSON对象 | 这里是用于生成<samp>manifest.json</samp>文件的工具。工具的名称是须满足`[a-zA-Z0-9_-]`且最多32个字符的字符串。工具的版本号是每个修改了该<samp>manifest.json</samp>文件的版本的语义化版本字符串。 |
| `url`            | 字符串   | 你的包的主页网站                                             |

### 示例

下面列出了两个示例，展示了如何为行为包和资源包编写<samp>manifest.json</samp>文件。

#### 行为包

```json
{
    "format_version": 1,
    "header": {
        "description": "Example vanilla behavior pack",
        "name": "Vanilla Behavior Pack",
        "uuid": "ee649bcf-256c-4013-9068-6a802b89d756",
        "version": [1, 0, 0],
        "min_engine_version": [1, 16, 0]
    },
    "modules": [
        {
            "description": "Example behavior pack module",
            "type": "data",
            "uuid": "fa6e90c8-c925-460f-8155-c8a60b753caa",
            "version": [1, 0, 0]
        },
        {
            "description": "Example client scripts module",
            "type": "client_data",
            "uuid": "c05a992e-482a-455f-898c-58bbb4975e47",
            "version": [1, 0, 0]
        }
    ],
    "dependencies": [
        {
            "uuid": "66c6e9a8-3093-462a-9c36-dbb052165822",
            "version": [1, 0, 0]
        }
    ],
    "metadata": {
        "authors": ["exampleAuthor"],
        "license": "MIT",
        "url": "http://www.exampleurl.com",
        "generated_with": {
            "example_tool": ["1.0.0", "1.1.0"]
        }
    }
}
```

#### 资源包

```json
{
    "format_version": 1,
    "header": {
        "description": "Example vanilla resource pack",
        "name": "Vanilla Resource Pack",
        "uuid": "66c6e9a8-3093-462a-9c36-dbb052165822",
        "version": [1, 0, 0],
        "min_engine_version": [1, 2, 6],
        "vanilla": [1, 12, 0]
    },
    "modules": [
        {
            "description": "Example vanilla resource pack",
            "type": "resources",
            "uuid": "743f6949-53be-44b6-b326-398005028819",
            "version": [1, 0, 0]
        }
    ]
}
```

## 实体

| 标识符                   | 完整ID   | 短ID |
| ------------------------ | -------- | ---- |
| `agent`                  | 312      | 56   |
| `allay`                  | 390      | 134  |
| `area_effect_cloud`      | 95       | 95   |
| `armor_stand`            | 317      | 61   |
| `arrow`                  | 12582992 | 80   |
| `axolotl`                | 4994     | 130  |
| `balloon`                | 107      | 107  |
| `bat`                    | 33043    | 19   |
| `bee`                    | 378      | 122  |
| `blaze`                  | 2859     | 43   |
| `boat`                   | 90       | 90   |
| `cat`                    | 21323    | 75   |
| `cave_spider`            | 265000   | 40   |
| `chalkboard`             | 78       | 78   |
| `chest_boat`             | 218      | 218  |
| `chest_minecart`         | 524386   | 98   |
| `chicken`                | 4874     | 10   |
| `cod`                    | 9072     | 112  |
| `command_block_minecart` | 524388   | 100  |
| `cow`                    | 4875     | 11   |
| `creeper`                | 2849     | 33   |
| `dolphin`                | 8991     | 31   |
| `donkey`                 | 2118424  | 24   |
| `dragon_fireball`        | 4194383  | 79   |
| `drowned`                | 199534   | 110  |
| `egg`                    | 4194386  | 82   |
| `elder_guardian`         | 2866     | 50   |
| `elder_guardian_ghost`   | 2936     | 120  |
| `ender_crystal`          | 71       | 71   |
| `ender_dragon`           | 2869     | 53   |
| `ender_pearl`            | 4194391  | 87   |
| `enderman`               | 2854     | 38   |
| `endermite`              | 265015   | 55   |
| `evocation_fang`         | 4194407  | 103  |
| `evocation_illager`      | 2920     | 104  |
| `eye_of_ender_signal`    | 70       | 70   |
| `falling_block`          | 66       | 66   |
| `fireball`               | 4194389  | 85   |
| `fireworks_rocket`       | 72       | 72   |
| `fishing_hook`           | 77       | 77   |
| `fox`                    | 4985     | 121  |
| `frog`                   | 4996     | 132  |
| `ghast`                  | 2857     | 41   |
| `glow_squid`             | 9089     | 129  |
| `goat`                   | 4992     | 128  |
| `guardian`               | 2865     | 49   |
| `hoglin`                 | 4988     | 124  |
| `hopper_minecart`        | 524384   | 96   |
| `horse`                  | 2118423  | 23   |
| `husk`                   | 199471   | 47   |
| `ice_bomb`               | 4194410  | 106  |
| `iron_golem`             | 788      | 20   |
| `item`                   | 64       | 64   |
| `leash_knot`             | 88       | 88   |
| `lightning_bolt`         | 93       | 93   |
| `lingering_potion`       | 4194405  | 101  |
| `llama`                  | 4893     | 29   |
| `llama_spit`             | 4194406  | 102  |
| `magma_cube`             | 2858     | 42   |
| `minecart`               | 524372   | 84   |
| `mooshroom`              | 4880     | 16   |
| `moving_block`           | 67       | 67   |
| `mule`                   | 2118425  | 25   |
| `npc`                    | 307      | 51   |
| `ocelot`                 | 21270    | 22   |
| `painting`               | 83       | 83   |
| `panda`                  | 4977     | 113  |
| `parrot`                 | 21278    | 30   |
| `phantom`                | 68410    | 58   |
| `pig`                    | 4876     | 12   |
| `piglin`                 | 379      | 123  |
| `piglin_brute`           | 383      | 127  |
| `pillager`               | 2930     | 114  |
| `player`                 | 319      | 63   |
| `polar_bear`             | 4892     | 28   |
| `pufferfish`             | 9068     | 108  |
| `rabbit`                 | 4882     | 18   |
| `ravager`                | 2875     | 59   |
| `salmon`                 | 9069     | 109  |
| `sheep`                  | 4877     | 13   |
| `shield`                 | 117      | 117  |
| `shulker`                | 2870     | 54   |
| `shulker_bullet`         | 4194380  | 76   |
| `silverfish`             | 264999   | 39   |
| `skeleton`               | 1116962  | 34   |
| `skeleton_horse`         | 2186010  | 26   |
| `slime`                  | 2853     | 37   |
| `small_fireball`         | 4194398  | 94   |
| `snow_golem`             | 789      | 21   |
| `snowball`               | 4194385  | 81   |
| `spider`                 | 264995   | 35   |
| `splash_potion`          | 4194390  | 86   |
| `squid`                  | 8977     | 17   |
| `stray`                  | 1116974  | 46   |
| `strider`                | 4989     | 125  |
| `tadpole`                | 9093     | 133  |
| `thrown_trident`         | 12582985 | 73   |
| `tnt`                    | 65       | 65   |
| `tnt_minecart`           | 524385   | 97   |
| `trader_llama`           | 5021     | 157  |
| `tripod_camera`          | 318      | 62   |
| `tropicalfish`           | 9071     | 111  |
| `turtle`                 | 4938     | 74   |
| `vex`                    | 2921     | 105  |
| `villager`               | 16777999 | 15   |
| `villager_v2`            | 16778099 | 115  |
| `vindicator`             | 2873     | 57   |
| `wandering_trader`       | 886      | 118  |
| `warden`                 | 2947     | 131  |
| `witch`                  | 2861     | 45   |
| `wither`                 | 68404    | 52   |
| `wither_skeleton`        | 1116976  | 48   |
| `wither_skull`           | 4194393  | 89   |
| `wither_skull_dangerous` | 4194395  | 91   |
| `wolf`                   | 21262    | 14   |
| `xp_bottle`              | 4194372  | 68   |
| `xp_orb`                 | 69       | 69   |
| `zoglin`                 | 68478    | 126  |
| `zombie`                 | 199456   | 32   |
| `zombie_horse`           | 2186011  | 27   |
| `zombie_pigman`          | 68388    | 36   |
| `zombie_villager`        | 199468   | 44   |
| `zombie_villager_v2`     | 199540   | 116  |

## 实体伤害来源

| 伤害来源           | ID   |
| ------------------ | ---- |
| `all`              |      |
| `anvil`            |      |
| `block_explosion`  |      |
| `charging`         |      |
| `contact`          |      |
| `drowning`         |      |
| `entity_attack`    |      |
| `entity_explosion` |      |
| `fall`             |      |
| `falling_block`    |      |
| `fire`             |      |
| `fire_tick`        |      |
| `fireworks`        |      |
| `fly_into_wall`    |      |
| `freezing`         |      |
| `lava`             |      |
| `lightning`        |      |
| `magic`            |      |
| `magma`            |      |
| `none`             |      |
| `override`         |      |
| `piston`           |      |
| `projectile`       |      |
| `stalactite`       |      |
| `stalagmite`       |      |
| `starve`           |      |
| `suffocation`      |      |
| `suicide`          |      |
| `temperature`      |      |
| `thorns`           |      |
| `void`             |      |
| `wither`           |      |

## 方块

| 名称                                               |
| -------------------------------------------------- |
| `minecraft:acacia_button`                          |
| `minecraft:acacia_door`                            |
| `minecraft:acacia_fence_gate`                      |
| `minecraft:acacia_pressure_plate`                  |
| `minecraft:acacia_stairs`                          |
| `minecraft:acacia_standing_sign`                   |
| `minecraft:acacia_trapdoor`                        |
| `minecraft:acacia_wall_sign`                       |
| `minecraft:activator_rail`                         |
| `minecraft:air`                                    |
| `minecraft:allow`                                  |
| `minecraft:amethyst_block`                         |
| `minecraft:amethyst_cluster`                       |
| `minecraft:ancient_debris`                         |
| `minecraft:andesite_stairs`                        |
| `minecraft:anvil`                                  |
| `minecraft:azalea`                                 |
| `minecraft:azalea_leaves`                          |
| `minecraft:azalea_leaves_flowered`                 |
| `minecraft:bamboo`                                 |
| `minecraft:bamboo_sapling`                         |
| `minecraft:barrel`                                 |
| `minecraft:barrier`                                |
| `minecraft:basalt`                                 |
| `minecraft:beacon`                                 |
| `minecraft:bed`                                    |
| `minecraft:bedrock`                                |
| `minecraft:bee_nest`                               |
| `minecraft:beehive`                                |
| `minecraft:beetroot`                               |
| `minecraft:bell`                                   |
| `minecraft:big_dripleaf`                           |
| `minecraft:birch_button`                           |
| `minecraft:birch_door`                             |
| `minecraft:birch_fence_gate`                       |
| `minecraft:birch_pressure_plate`                   |
| `minecraft:birch_stairs`                           |
| `minecraft:birch_standing_sign`                    |
| `minecraft:birch_trapdoor`                         |
| `minecraft:birch_wall_sign`                        |
| `minecraft:black_candle`                           |
| `minecraft:black_candle_cake`                      |
| `minecraft:black_glazed_terracotta`                |
| `minecraft:blackstone`                             |
| `minecraft:blackstone_double_slab`                 |
| `minecraft:blackstone_slab`                        |
| `minecraft:blackstone_stairs`                      |
| `minecraft:blackstone_wall`                        |
| `minecraft:blast_furnace`                          |
| `minecraft:blue_candle`                            |
| `minecraft:blue_candle_cake`                       |
| `minecraft:blue_glazed_terracotta`                 |
| `minecraft:blue_ice`                               |
| `minecraft:bone_block`                             |
| `minecraft:bookshelf`                              |
| `minecraft:border_block`                           |
| `minecraft:brewing_stand`                          |
| `minecraft:brick_block`                            |
| `minecraft:brick_stairs`                           |
| `minecraft:brown_candle`                           |
| `minecraft:brown_candle_cake`                      |
| `minecraft:brown_glazed_terracotta`                |
| `minecraft:brown_mushroom`                         |
| `minecraft:brown_mushroom_block`                   |
| `minecraft:bubble_column`                          |
| `minecraft:budding_amethyst`                       |
| `minecraft:cactus`                                 |
| `minecraft:cake`                                   |
| `minecraft:calcite`                                |
| `minecraft:camera`                                 |
| `minecraft:campfire`                               |
| `minecraft:candle`                                 |
| `minecraft:candle_cake`                            |
| `minecraft:carpet`                                 |
| `minecraft:carrots`                                |
| `minecraft:cartography_table`                      |
| `minecraft:carved_pumpkin`                         |
| `minecraft:cauldron`                               |
| `minecraft:cave_vines`                             |
| `minecraft:cave_vines_body_with_berries`           |
| `minecraft:cave_vines_head_with_berries`           |
| `minecraft:chain`                                  |
| `minecraft:chain_command_block`                    |
| `minecraft:chemical_heat`                          |
| `minecraft:chemistry_table`                        |
| `minecraft:chest`                                  |
| `minecraft:chiseled_deepslate`                     |
| `minecraft:chiseled_nether_bricks`                 |
| `minecraft:chiseled_polished_blackstone`           |
| `minecraft:chorus_flower`                          |
| `minecraft:chorus_plant`                           |
| `minecraft:clay`                                   |
| `minecraft:client_request_placeholder_block`       |
| `minecraft:coal_block`                             |
| `minecraft:coal_ore`                               |
| `minecraft:cobbled_deepslate`                      |
| `minecraft:cobbled_deepslate_double_slab`          |
| `minecraft:cobbled_deepslate_slab`                 |
| `minecraft:cobbled_deepslate_stairs`               |
| `minecraft:cobbled_deepslate_wall`                 |
| `minecraft:cobblestone`                            |
| `minecraft:cobblestone_wall`                       |
| `minecraft:cocoa`                                  |
| `minecraft:colored_torch_bp`                       |
| `minecraft:colored_torch_rg`                       |
| `minecraft:command_block`                          |
| `minecraft:composter`                              |
| `minecraft:concrete`                               |
| `minecraft:concrete_powder`                        |
| `minecraft:conduit`                                |
| `minecraft:copper_block`                           |
| `minecraft:copper_ore`                             |
| `minecraft:coral`                                  |
| `minecraft:coral_block`                            |
| `minecraft:coral_fan`                              |
| `minecraft:coral_fan_dead`                         |
| `minecraft:coral_fan_hang`                         |
| `minecraft:coral_fan_hang2                        |
| `minecraft:coral_fan_hang3                        |
| `minecraft:cracked_deepslate_bricks`               |
| `minecraft:cracked_deepslate_tiles`                |
| `minecraft:cracked_nether_bricks`                  |
| `minecraft:cracked_polished_blackstone_bricks`     |
| `minecraft:crafting_table`                         |
| `minecraft:crimson_button`                         |
| `minecraft:crimson_door`                           |
| `minecraft:crimson_double_slab`                    |
| `minecraft:crimson_fence`                          |
| `minecraft:crimson_fence_gate`                     |
| `minecraft:crimson_fungus`                         |
| `minecraft:crimson_hyphae`                         |
| `minecraft:crimson_nylium`                         |
| `minecraft:crimson_planks`                         |
| `minecraft:crimson_pressure_plate`                 |
| `minecraft:crimson_roots`                          |
| `minecraft:crimson_slab`                           |
| `minecraft:crimson_stairs`                         |
| `minecraft:crimson_standing_sign`                  |
| `minecraft:crimson_stem`                           |
| `minecraft:crimson_trapdoor`                       |
| `minecraft:crimson_wall_sign`                      |
| `minecraft:crying_obsidian`                        |
| `minecraft:cut_copper`                             |
| `minecraft:cut_copper_slab`                        |
| `minecraft:cut_copper_stairs`                      |
| `minecraft:cyan_candle`                            |
| `minecraft:cyan_candle_cake`                       |
| `minecraft:cyan_glazed_terracotta`                 |
| `minecraft:dark_oak_button`                        |
| `minecraft:dark_oak_door`                          |
| `minecraft:dark_oak_fence_gate`                    |
| `minecraft:dark_oak_pressure_plate`                |
| `minecraft:dark_oak_stairs`                        |
| `minecraft:dark_oak_trapdoor`                      |
| `minecraft:dark_prismarine_stairs`                 |
| `minecraft:darkoak_standing_sign`                  |
| `minecraft:darkoak_wall_sign`                      |
| `minecraft:daylight_detector`                      |
| `minecraft:daylight_detector_inverted`             |
| `minecraft:deadbush`                               |
| `minecraft:deepslate`                              |
| `minecraft:deepslate_brick_double_slab`            |
| `minecraft:deepslate_brick_slab`                   |
| `minecraft:deepslate_brick_stairs`                 |
| `minecraft:deepslate_brick_wall`                   |
| `minecraft:deepslate_bricks`                       |
| `minecraft:deepslate_coal_ore`                     |
| `minecraft:deepslate_copper_ore`                   |
| `minecraft:deepslate_diamond_ore`                  |
| `minecraft:deepslate_emerald_ore`                  |
| `minecraft:deepslate_gold_ore`                     |
| `minecraft:deepslate_iron_ore`                     |
| `minecraft:deepslate_lapis_ore`                    |
| `minecraft:deepslate_redstone_ore`                 |
| `minecraft:deepslate_tile_double_slab`             |
| `minecraft:deepslate_tile_slab`                    |
| `minecraft:deepslate_tile_stairs`                  |
| `minecraft:deepslate_tile_wall`                    |
| `minecraft:deepslate_tiles`                        |
| `minecraft:deny`                                   |
| `minecraft:detector_rail`                          |
| `minecraft:diamond_block`                          |
| `minecraft:diamond_ore`                            |
| `minecraft:diorite_stairs`                         |
| `minecraft:dirt`                                   |
| `minecraft:dirt_with_roots`                        |
| `minecraft:dispenser`                              |
| `minecraft:double_cut_copper_slab`                 |
| `minecraft:double_plant`                           |
| `minecraft:double_stone_block_slab`                |
| `minecraft:double_stone_block_slab2`               |
| `minecraft:double_stone_block_slab3`               |
| `minecraft:double_stone_block_slab4`               |
| `minecraft:double_wooden_slab`                     |
| `minecraft:dragon_egg`                             |
| `minecraft:dried_kelp_block`                       |
| `minecraft:dripstone_block`                        |
| `minecraft:dropper`                                |
| `minecraft:element_0`                              |
| `minecraft:element_1`                              |
| `minecraft:element_10`                             |
| `minecraft:element_100`                            |
| `minecraft:element_101`                            |
| `minecraft:element_102`                            |
| `minecraft:element_103`                            |
| `minecraft:element_104`                            |
| `minecraft:element_105`                            |
| `minecraft:element_106`                            |
| `minecraft:element_107`                            |
| `minecraft:element_108`                            |
| `minecraft:element_109`                            |
| `minecraft:element_11`                             |
| `minecraft:element_110`                            |
| `minecraft:element_111`                            |
| `minecraft:element_112`                            |
| `minecraft:element_113`                            |
| `minecraft:element_114`                            |
| `minecraft:element_115`                            |
| `minecraft:element_116`                            |
| `minecraft:element_117`                            |
| `minecraft:element_118`                            |
| `minecraft:element_12`                             |
| `minecraft:element_13`                             |
| `minecraft:element_14`                             |
| `minecraft:element_15`                             |
| `minecraft:element_16`                             |
| `minecraft:element_17`                             |
| `minecraft:element_18`                             |
| `minecraft:element_19`                             |
| `minecraft:element_2`                              |
| `minecraft:element_20`                             |
| `minecraft:element_21`                             |
| `minecraft:element_22`                             |
| `minecraft:element_23`                             |
| `minecraft:element_24`                             |
| `minecraft:element_25`                             |
| `minecraft:element_26`                             |
| `minecraft:element_27`                             |
| `minecraft:element_28`                             |
| `minecraft:element_29`                             |
| `minecraft:element_3`                              |
| `minecraft:element_30`                             |
| `minecraft:element_31`                             |
| `minecraft:element_32`                             |
| `minecraft:element_33`                             |
| `minecraft:element_34`                             |
| `minecraft:element_35`                             |
| `minecraft:element_36`                             |
| `minecraft:element_37`                             |
| `minecraft:element_38`                             |
| `minecraft:element_39`                             |
| `minecraft:element_4`                              |
| `minecraft:element_40`                             |
| `minecraft:element_41`                             |
| `minecraft:element_42`                             |
| `minecraft:element_43`                             |
| `minecraft:element_44`                             |
| `minecraft:element_45`                             |
| `minecraft:element_46`                             |
| `minecraft:element_47`                             |
| `minecraft:element_48`                             |
| `minecraft:element_49`                             |
| `minecraft:element_5`                              |
| `minecraft:element_50`                             |
| `minecraft:element_51`                             |
| `minecraft:element_52`                             |
| `minecraft:element_53`                             |
| `minecraft:element_54`                             |
| `minecraft:element_55`                             |
| `minecraft:element_56`                             |
| `minecraft:element_57`                             |
| `minecraft:element_58`                             |
| `minecraft:element_59`                             |
| `minecraft:element_6`                              |
| `minecraft:element_60`                             |
| `minecraft:element_61`                             |
| `minecraft:element_62`                             |
| `minecraft:element_63`                             |
| `minecraft:element_64`                             |
| `minecraft:element_65`                             |
| `minecraft:element_66`                             |
| `minecraft:element_67`                             |
| `minecraft:element_68`                             |
| `minecraft:element_69`                             |
| `minecraft:element_7`                              |
| `minecraft:element_70`                             |
| `minecraft:element_71`                             |
| `minecraft:element_72`                             |
| `minecraft:element_73`                             |
| `minecraft:element_74`                             |
| `minecraft:element_75`                             |
| `minecraft:element_76`                             |
| `minecraft:element_77`                             |
| `minecraft:element_78`                             |
| `minecraft:element_79`                             |
| `minecraft:element_8`                              |
| `minecraft:element_80`                             |
| `minecraft:element_81`                             |
| `minecraft:element_82`                             |
| `minecraft:element_83`                             |
| `minecraft:element_84`                             |
| `minecraft:element_85`                             |
| `minecraft:element_86`                             |
| `minecraft:element_87`                             |
| `minecraft:element_88`                             |
| `minecraft:element_89`                             |
| `minecraft:element_9`                              |
| `minecraft:element_90`                             |
| `minecraft:element_91`                             |
| `minecraft:element_92`                             |
| `minecraft:element_93`                             |
| `minecraft:element_94`                             |
| `minecraft:element_95`                             |
| `minecraft:element_96`                             |
| `minecraft:element_97`                             |
| `minecraft:element_98`                             |
| `minecraft:element_99`                             |
| `minecraft:emerald_block`                          |
| `minecraft:emerald_ore`                            |
| `minecraft:enchanting_table`                       |
| `minecraft:end_brick_stairs`                       |
| `minecraft:end_bricks`                             |
| `minecraft:end_gateway`                            |
| `minecraft:end_portal`                             |
| `minecraft:end_portal_frame`                       |
| `minecraft:end_rod`                                |
| `minecraft:end_stone`                              |
| `minecraft:ender_chest`                            |
| `minecraft:exposed_copper`                         |
| `minecraft:exposed_cut_copper`                     |
| `minecraft:exposed_cut_copper_slab`                |
| `minecraft:exposed_cut_copper_stairs`              |
| `minecraft:exposed_double_cut_copper_slab`         |
| `minecraft:farmland`                               |
| `minecraft:fence`                                  |
| `minecraft:fence_gate`                             |
| `minecraft:fire`                                   |
| `minecraft:fletching_table`                        |
| `minecraft:flower_pot`                             |
| `minecraft:flowering_azalea`                       |
| `minecraft:flowing_lava`                           |
| `minecraft:flowing_water`                          |
| `minecraft:frame`                                  |
| `minecraft:frog_spawn`                             |
| `minecraft:frosted_ice`                            |
| `minecraft:furnace`                                |
| `minecraft:gilded_blackstone`                      |
| `minecraft:glass`                                  |
| `minecraft:glass_pane`                             |
| `minecraft:glow_frame`                             |
| `minecraft:glow_lichen`                            |
| `minecraft:glowingobsidian`                        |
| `minecraft:glowstone`                              |
| `minecraft:gold_block`                             |
| `minecraft:gold_ore`                               |
| `minecraft:golden_rail`                            |
| `minecraft:granite_stairs`                         |
| `minecraft:grass`                                  |
| `minecraft:grass_path`                             |
| `minecraft:gravel`                                 |
| `minecraft:gray_candle`                            |
| `minecraft:gray_candle_cake`                       |
| `minecraft:gray_glazed_terracotta`                 |
| `minecraft:green_candle`                           |
| `minecraft:green_candle_cake`                      |
| `minecraft:green_glazed_terracotta`                |
| `minecraft:grindstone`                             |
| `minecraft:hanging_roots`                          |
| `minecraft:hard_glass`                             |
| `minecraft:hard_glass_pane`                        |
| `minecraft:hard_stained_glass`                     |
| `minecraft:hard_stained_glass_pane`                |
| `minecraft:hardened_clay`                          |
| `minecraft:hay_block`                              |
| `minecraft:heavy_weighted_pressure_plate`          |
| `minecraft:honey_block`                            |
| `minecraft:honeycomb_block`                        |
| `minecraft:hopper`                                 |
| `minecraft:ice`                                    |
| `minecraft:infested_deepslate`                     |
| `minecraft:info_update`                            |
| `minecraft:info_update2                           |
| `minecraft:invisible_bedrock`                      |
| `minecraft:iron_bars`                              |
| `minecraft:iron_block`                             |
| `minecraft:iron_door`                              |
| `minecraft:iron_ore`                               |
| `minecraft:iron_trapdoor`                          |
| `minecraft:jigsaw`                                 |
| `minecraft:jukebox`                                |
| `minecraft:jungle_button`                          |
| `minecraft:jungle_door`                            |
| `minecraft:jungle_fence_gate`                      |
| `minecraft:jungle_pressure_plate`                  |
| `minecraft:jungle_stairs`                          |
| `minecraft:jungle_standing_sign`                   |
| `minecraft:jungle_trapdoor`                        |
| `minecraft:jungle_wall_sign`                       |
| `minecraft:kelp`                                   |
| `minecraft:ladder`                                 |
| `minecraft:lantern`                                |
| `minecraft:lapis_block`                            |
| `minecraft:lapis_ore`                              |
| `minecraft:large_amethyst_bud`                     |
| `minecraft:lava`                                   |
| `minecraft:lava_cauldron`                          |
| `minecraft:leaves`                                 |
| `minecraft:leaves2                                |
| `minecraft:lectern`                                |
| `minecraft:lever`                                  |
| `minecraft:light_block`                            |
| `minecraft:light_blue_candle`                      |
| `minecraft:light_blue_candle_cake`                 |
| `minecraft:light_blue_glazed_terracotta`           |
| `minecraft:light_gray_candle`                      |
| `minecraft:light_gray_candle_cake`                 |
| `minecraft:light_weighted_pressure_plate`          |
| `minecraft:lightning_rod`                          |
| `minecraft:lime_candle`                            |
| `minecraft:lime_candle_cake`                       |
| `minecraft:lime_glazed_terracotta`                 |
| `minecraft:lit_blast_furnace`                      |
| `minecraft:lit_deepslate_redstone_ore`             |
| `minecraft:lit_furnace`                            |
| `minecraft:lit_pumpkin`                            |
| `minecraft:lit_redstone_lamp`                      |
| `minecraft:lit_redstone_ore`                       |
| `minecraft:lit_smoker`                             |
| `minecraft:lodestone`                              |
| `minecraft:log`                                    |
| `minecraft:log2                                   |
| `minecraft:loom`                                   |
| `minecraft:magenta_candle`                         |
| `minecraft:magenta_candle_cake`                    |
| `minecraft:magenta_glazed_terracotta`              |
| `minecraft:magma`                                  |
| `minecraft:mangrove_button`                        |
| `minecraft:mangrove_door`                          |
| `minecraft:mangrove_double_slab`                   |
| `minecraft:mangrove_fence`                         |
| `minecraft:mangrove_fence_gate`                    |
| `minecraft:mangrove_leaves`                        |
| `minecraft:mangrove_log`                           |
| `minecraft:mangrove_planks`                        |
| `minecraft:mangrove_pressure_plate`                |
| `minecraft:mangrove_propagule`                     |
| `minecraft:mangrove_roots`                         |
| `minecraft:mangrove_slab`                          |
| `minecraft:mangrove_stairs`                        |
| `minecraft:mangrove_standing_sign`                 |
| `minecraft:mangrove_trapdoor`                      |
| `minecraft:mangrove_wall_sign`                     |
| `minecraft:mangrove_wood`                          |
| `minecraft:medium_amethyst_bud`                    |
| `minecraft:melon_block`                            |
| `minecraft:melon_stem`                             |
| `minecraft:mob_spawner`                            |
| `minecraft:monster_egg`                            |
| `minecraft:moss_block`                             |
| `minecraft:moss_carpet`                            |
| `minecraft:mossy_cobblestone`                      |
| `minecraft:mossy_cobblestone_stairs`               |
| `minecraft:mossy_stone_brick_stairs`               |
| `minecraft:moving_block`                           |
| `minecraft:mud`                                    |
| `minecraft:mud_brick_double_slab`                  |
| `minecraft:mud_brick_slab`                         |
| `minecraft:mud_brick_stairs`                       |
| `minecraft:mud_brick_wall`                         |
| `minecraft:mud_bricks`                             |
| `minecraft:muddy_mangrove_roots`                   |
| `minecraft:mycelium`                               |
| `minecraft:nether_brick`                           |
| `minecraft:nether_brick_fence`                     |
| `minecraft:nether_brick_stairs`                    |
| `minecraft:nether_gold_ore`                        |
| `minecraft:nether_sprouts`                         |
| `minecraft:nether_wart`                            |
| `minecraft:nether_wart_block`                      |
| `minecraft:netherite_block`                        |
| `minecraft:netherrack`                             |
| `minecraft:netherreactor`                          |
| `minecraft:normal_stone_stairs`                    |
| `minecraft:noteblock`                              |
| `minecraft:oak_stairs`                             |
| `minecraft:observer`                               |
| `minecraft:obsidian`                               |
| `minecraft:ochre_froglight`                        |
| `minecraft:orange_candle`                          |
| `minecraft:orange_candle_cake`                     |
| `minecraft:orange_glazed_terracotta`               |
| `minecraft:oxidized_copper`                        |
| `minecraft:oxidized_cut_copper`                    |
| `minecraft:oxidized_cut_copper_slab`               |
| `minecraft:oxidized_cut_copper_stairs`             |
| `minecraft:oxidized_double_cut_copper_slab`        |
| `minecraft:packed_ice`                             |
| `minecraft:packed_mud`                             |
| `minecraft:pearlescent_froglight`                  |
| `minecraft:pink_candle`                            |
| `minecraft:pink_candle_cake`                       |
| `minecraft:pink_glazed_terracotta`                 |
| `minecraft:piston`                                 |
| `minecraft:piston_arm_collision`                   |
| `minecraft:planks`                                 |
| `minecraft:podzol`                                 |
| `minecraft:pointed_dripstone`                      |
| `minecraft:polished_andesite_stairs`               |
| `minecraft:polished_basalt`                        |
| `minecraft:polished_blackstone`                    |
| `minecraft:polished_blackstone_brick_double_slab`  |
| `minecraft:polished_blackstone_brick_slab`         |
| `minecraft:polished_blackstone_brick_stairs`       |
| `minecraft:polished_blackstone_brick_wall`         |
| `minecraft:polished_blackstone_bricks`             |
| `minecraft:polished_blackstone_button`             |
| `minecraft:polished_blackstone_double_slab`        |
| `minecraft:polished_blackstone_pressure_plate`     |
| `minecraft:polished_blackstone_slab`               |
| `minecraft:polished_blackstone_stairs`             |
| `minecraft:polished_blackstone_wall`               |
| `minecraft:polished_deepslate`                     |
| `minecraft:polished_deepslate_double_slab`         |
| `minecraft:polished_deepslate_slab`                |
| `minecraft:polished_deepslate_stairs`              |
| `minecraft:polished_deepslate_wall`                |
| `minecraft:polished_diorite_stairs`                |
| `minecraft:polished_granite_stairs`                |
| `minecraft:portal`                                 |
| `minecraft:potatoes`                               |
| `minecraft:powder_snow`                            |
| `minecraft:powered_comparator`                     |
| `minecraft:powered_repeater`                       |
| `minecraft:prismarine`                             |
| `minecraft:prismarine_bricks_stairs`               |
| `minecraft:prismarine_stairs`                      |
| `minecraft:pumpkin`                                |
| `minecraft:pumpkin_stem`                           |
| `minecraft:purple_candle`                          |
| `minecraft:purple_candle_cake`                     |
| `minecraft:purple_glazed_terracotta`               |
| `minecraft:purpur_block`                           |
| `minecraft:purpur_stairs`                          |
| `minecraft:quartz_block`                           |
| `minecraft:quartz_bricks`                          |
| `minecraft:quartz_ore`                             |
| `minecraft:quartz_stairs`                          |
| `minecraft:rail`                                   |
| `minecraft:raw_copper_block`                       |
| `minecraft:raw_gold_block`                         |
| `minecraft:raw_iron_block`                         |
| `minecraft:red_candle`                             |
| `minecraft:red_candle_cake`                        |
| `minecraft:red_flower`                             |
| `minecraft:red_glazed_terracotta`                  |
| `minecraft:red_mushroom`                           |
| `minecraft:red_mushroom_block`                     |
| `minecraft:red_nether_brick`                       |
| `minecraft:red_nether_brick_stairs`                |
| `minecraft:red_sandstone`                          |
| `minecraft:red_sandstone_stairs`                   |
| `minecraft:redstone_block`                         |
| `minecraft:redstone_lamp`                          |
| `minecraft:redstone_ore`                           |
| `minecraft:redstone_torch`                         |
| `minecraft:redstone_wire`                          |
| `minecraft:reeds`                                  |
| `minecraft:reinforced_deepslate`                   |
| `minecraft:repeating_command_block`                |
| `minecraft:reserved6`                              |
| `minecraft:respawn_anchor`                         |
| `minecraft:sand`                                   |
| `minecraft:sandstone`                              |
| `minecraft:sandstone_stairs`                       |
| `minecraft:sapling`                                |
| `minecraft:scaffolding`                            |
| `minecraft:sculk`                                  |
| `minecraft:sculk_catalyst`                         |
| `minecraft:sculk_sensor`                           |
| `minecraft:sculk_shrieker`                         |
| `minecraft:sculk_vein`                             |
| `minecraft:sea_lantern`                            |
| `minecraft:sea_pickle`                             |
| `minecraft:seagrass`                               |
| `minecraft:shroomlight`                            |
| `minecraft:shulker_box`                            |
| `minecraft:silver_glazed_terracotta`               |
| `minecraft:skull`                                  |
| `minecraft:slime`                                  |
| `minecraft:small_amethyst_bud`                     |
| `minecraft:small_dripleaf_block`                   |
| `minecraft:smithing_table`                         |
| `minecraft:smoker`                                 |
| `minecraft:smooth_basalt`                          |
| `minecraft:smooth_quartz_stairs`                   |
| `minecraft:smooth_red_sandstone_stairs`            |
| `minecraft:smooth_sandstone_stairs`                |
| `minecraft:smooth_stone`                           |
| `minecraft:snow`                                   |
| `minecraft:snow_layer`                             |
| `minecraft:soul_campfire`                          |
| `minecraft:soul_fire`                              |
| `minecraft:soul_lantern`                           |
| `minecraft:soul_sand`                              |
| `minecraft:soul_soil`                              |
| `minecraft:soul_torch`                             |
| `minecraft:sponge`                                 |
| `minecraft:spore_blossom`                          |
| `minecraft:spruce_button`                          |
| `minecraft:spruce_door`                            |
| `minecraft:spruce_fence_gate`                      |
| `minecraft:spruce_pressure_plate`                  |
| `minecraft:spruce_stairs`                          |
| `minecraft:spruce_standing_sign`                   |
| `minecraft:spruce_trapdoor`                        |
| `minecraft:spruce_wall_sign`                       |
| `minecraft:stained_glass`                          |
| `minecraft:stained_glass_pane`                     |
| `minecraft:stained_hardened_clay`                  |
| `minecraft:standing_banner`                        |
| `minecraft:standing_sign`                          |
| `minecraft:sticky_piston`                          |
| `minecraft:sticky_piston_arm_collision`            |
| `minecraft:stone`                                  |
| `minecraft:stone_block_slab`                       |
| `minecraft:stone_block_slab2`                      |
| `minecraft:stone_block_slab3`                      |
| `minecraft:stone_block_slab4`                      |
| `minecraft:stone_brick_stairs`                     |
| `minecraft:stone_button`                           |
| `minecraft:stone_pressure_plate`                   |
| `minecraft:stone_stairs`                           |
| `minecraft:stonebrick`                             |
| `minecraft:stonecutter`                            |
| `minecraft:stonecutter_block`                      |
| `minecraft:stripped_acacia_log`                    |
| `minecraft:stripped_birch_log`                     |
| `minecraft:stripped_crimson_hyphae`                |
| `minecraft:stripped_crimson_stem`                  |
| `minecraft:stripped_dark_oak_log`                  |
| `minecraft:stripped_jungle_log`                    |
| `minecraft:stripped_mangrove_log`                  |
| `minecraft:stripped_mangrove_wood`                 |
| `minecraft:stripped_oak_log`                       |
| `minecraft:stripped_spruce_log`                    |
| `minecraft:stripped_warped_hyphae`                 |
| `minecraft:stripped_warped_stem`                   |
| `minecraft:structure_block`                        |
| `minecraft:structure_void`                         |
| `minecraft:sweet_berry_bush`                       |
| `minecraft:tallgrass`                              |
| `minecraft:target`                                 |
| `minecraft:tinted_glass`                           |
| `minecraft:tnt`                                    |
| `minecraft:torch`                                  |
| `minecraft:trapdoor`                               |
| `minecraft:trapped_chest`                          |
| `minecraft:trip_wire`                              |
| `minecraft:tripwire_hook`                          |
| `minecraft:tuff`                                   |
| `minecraft:turtle_egg`                             |
| `minecraft:twisting_vines`                         |
| `minecraft:underwater_torch`                       |
| `minecraft:undyed_shulker_box`                     |
| `minecraft:unknown`                                |
| `minecraft:unlit_redstone_torch`                   |
| `minecraft:unpowered_comparator`                   |
| `minecraft:unpowered_repeater`                     |
| `minecraft:verdant_froglight`                      |
| `minecraft:vine`                                   |
| `minecraft:wall_banner`                            |
| `minecraft:wall_sign`                              |
| `minecraft:warped_button`                          |
| `minecraft:warped_door`                            |
| `minecraft:warped_double_slab`                     |
| `minecraft:warped_fence`                           |
| `minecraft:warped_fence_gate`                      |
| `minecraft:warped_fungus`                          |
| `minecraft:warped_hyphae`                          |
| `minecraft:warped_nylium`                          |
| `minecraft:warped_planks`                          |
| `minecraft:warped_pressure_plate`                  |
| `minecraft:warped_roots`                           |
| `minecraft:warped_slab`                            |
| `minecraft:warped_stairs`                          |
| `minecraft:warped_standing_sign`                   |
| `minecraft:warped_stem`                            |
| `minecraft:warped_trapdoor`                        |
| `minecraft:warped_wall_sign`                       |
| `minecraft:warped_wart_block`                      |
| `minecraft:water`                                  |
| `minecraft:waterlily`                              |
| `minecraft:waxed_copper`                           |
| `minecraft:waxed_cut_copper`                       |
| `minecraft:waxed_cut_copper_slab`                  |
| `minecraft:waxed_cut_copper_stairs`                |
| `minecraft:waxed_double_cut_copper_slab`           |
| `minecraft:waxed_exposed_copper`                   |
| `minecraft:waxed_exposed_cut_copper`               |
| `minecraft:waxed_exposed_cut_copper_slab`          |
| `minecraft:waxed_exposed_cut_copper_stairs`        |
| `minecraft:waxed_exposed_double_cut_copper_slab`   |
| `minecraft:waxed_oxidized_copper`                  |
| `minecraft:waxed_oxidized_cut_copper`              |
| `minecraft:waxed_oxidized_cut_copper_slab`         |
| `minecraft:waxed_oxidized_cut_copper_stairs`       |
| `minecraft:waxed_oxidized_double_cut_copper_slab`  |
| `minecraft:waxed_weathered_copper`                 |
| `minecraft:waxed_weathered_cut_copper`             |
| `minecraft:waxed_weathered_cut_copper_slab`        |
| `minecraft:waxed_weathered_cut_copper_stairs`      |
| `minecraft:waxed_weathered_double_cut_copper_slab` |
| `minecraft:weathered_copper`                       |
| `minecraft:weathered_cut_copper`                   |
| `minecraft:weathered_cut_copper_slab`              |
| `minecraft:weathered_cut_copper_stairs`            |
| `minecraft:weathered_double_cut_copper_slab`       |
| `minecraft:web`                                    |
| `minecraft:weeping_vines`                          |
| `minecraft:wheat`                                  |
| `minecraft:white_candle`                           |
| `minecraft:white_candle_cake`                      |
| `minecraft:white_glazed_terracotta`                |
| `minecraft:wither_rose`                            |
| `minecraft:wood`                                   |
| `minecraft:wooden_button`                          |
| `minecraft:wooden_door`                            |
| `minecraft:wooden_pressure_plate`                  |
| `minecraft:wooden_slab`                            |
| `minecraft:wool`                                   |
| `minecraft:yellow_candle`                          |
| `minecraft:yellow_candle_cake`                     |
| `minecraft:yellow_flower`                          |
| `minecraft:yellow_glazed_terracotta`               |

## 方块状态

| 方块状态名                 | 类型   | 有效值                                                       | 描述                                                         |
| -------------------------- | ------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `active`                     | 布尔值 | `True`、`False`                                                  | 决定方块激活与否                |
| `age`                        | 整数   | 0 - 15                                                       | 代表方块的年龄                              |
| `age_bit`                    | 布尔值 | `True`、`False`                                                  | 决定树苗是否需要生长                           |
| `allow_underwater_bit`       | 布尔值 | `True`、`False`                                                  | 决定一个TNT方块是否在水下工作                   |
| `attached_bit`               | 布尔值 | `True`、`False`                                                  | 决定一个绊线是否挂接到其他绊线上     |
| `attachment`                 | 字符串 | `standing`、`hanging`、`side`、`multiple`                            | 决定一个钟或磨石方块使用的挂接类型 |
| `bamboo_leaf_size`           | 字符串 | `no_leaves`、`small_leaves`、`large_leaves`                        | 决定竹叶的大小                         |
| `bamboo_stalk_thickness`     | 字符串 | `thin`、`thick`                                                  | 决定竹秆的粗细                   |
| `big_dripleaf_tilt`          | 字符串 | `none`、`unstable`、`partial_tilt`、`full_tilt`                      | 决定大型垂滴叶方块的倾斜状态              |
| `bite_counter`               | 整数   | 0 - 6                                                        | 追踪蛋糕已经被咬了几口                |
| `brewing_stand_slot_a_bit`   | 布尔值 | `True`、`False`                                                  | 决定酿造台的槽位A中是否应该渲染一个药水瓶 |
| `brewing_stand_slot_b_bit`   | 布尔值 | `True`、`False`                                                  | 决定酿造台的槽位B中是否应该渲染一个药水瓶 |
| `brewing_stand_slot_c_bit`   | 布尔值 | `True`、`False`                                                  | 决定酿造台的槽位C中是否应该渲染一个药水瓶 |
| `button_pressed_bit`         | 布尔值 | `True`、`False`                                                  | 决定一个按钮是否处于按下的状态        |
| `candles`                    | 整数   | 0 - 3                                                        | 描述在同一个方块空间内具有多少额外的蜡烛 |
| `cauldron_liquid`            | 字符串 | `water`、`lava`                                                  | 决定一个炼药锅内药水的类型                  |
| `chemistry_table_type`       | 字符串 | `compound_creator`、`material_reducer`、`element_constructor`、`lab_table` | 决定在教育版功能开关下工作台的类型 |
| `chisel_type`                | 字符串 | `default`、`chiseled`、`lines`、`smooth`                             | 决定石英和紫珀块的图案           |
| `cluster_count`              | 整数   | 0 - 3                                                        | 描述在一个簇内具有多少海泡菜              |
| `color`                      | 字符串 | `white`、`orange`、`magenta`、`light_blue`、`yellow`、`lime`、`pink`、`gray`、`silver`、`cyan`、`purple`、`blue`、`brown`、`green`、`red`、`black` | 决定一个例如羊毛那样的方块的颜色                    |
| `color_bit`                  | 布尔值 | `True`、`False`                                                  | 设置一个火把为一个染色火把                     |
| `conditional_bit`            | 布尔值 | `True`、`False`                                                  | 决定一个命令方块是否为条件控制          |
| `coral_color`                | 字符串 | `blue`、`pink`、`purple`、`red`、`yellow`、`blue dead`、`pink dead`、`red dead`、`yellow dead` | 决定一个珊瑚块的颜色                        |
| `coral_direction`            | 整数   | 0 - 3                                                        | 描述珊瑚扇的旋转角                         |
| `coral_hang_type_bit`        | 布尔值 | `True`、`False`                                                  | 描述珊瑚扇的悬挂类型                 |
| `covered_bit`                | 布尔值 | `True`、`False`                                                  | 描述一个顶层雪方块是否覆盖着另一个方块      |
| `cracked_state`              | 字符串 | `no_cracks`、`cracked`、`max_cracked`                              | 决定海龟蛋的开裂状态                  |
| `damage`                     | 字符串 | `undamaged`、`slightly_damaged`、`very_damaged`、`broken`            | 决定一个铁砧的损坏状态                   |
| `dead_bit`                   | 布尔值 | `True`、`False`                                                  | 决定珊瑚、珊瑚扇或海泡菜是否死亡     |
| `direction`                  | 整数   | 0 - 3                                                        | 决定一些方块的北、南、东、西方向。0 = 南，1 = 西，2 = 北，3 = 东 |
| `dirt_type`                  | 字符串 | `normal`、`coarse`                                               | 决定一个方块的泥土类型                          |
| `disarmed_bit`               | 布尔值 | `True`、`False`                                                  | 决定一个绊线是否被解下。                 |
| `door_hinge_bit`             | 布尔值 | `True`、`False`                                                  | 决定门枢是否镜像               |
| `double_plant_type`          | 字符串 | `sunflower`、`syringa`、`grass`、`fern`、`rose`、`paeonia`               | 决定一个双层植物方块的类型                  |
| `drag_down`                  | 布尔值 | `True`、`False`                                                  | 描述气泡柱是否将实体拽上或推下 |
| `dripstone_thickness`        | 字符串 | `tip`、`frustum`、`base`、`middle`、`merge`                            | 决定一个滴水石锥方块的类型             |
| `end_portal_eye_bit`         | 布尔值 | `True`、`False`                                                  | 决定一个末地传送门方块其中是否具有眼           |
| `explode_bit`                | 布尔值 | `True`、`False`                                                  | 决定一个TNT方块是否应该启动它的爆炸程序  |
| `facing_direction`           | 整数   | 0 - 5                                                        | 决定一些方块的上、下、北、南、东和西的方向。0 = 下、1 = 上、2 = 北、3 = 南、4 = 西、5 = 东 |
| `fill_level`                 | 整数   | 0 - 6                                                        | 决定一个炼药锅方块的填充级别                    |
| `flower_type`                | 字符串 | `poppy`、`orchid`、`allium`、`houstonia`、`tulip_red`、`tulip_orange`、`tulip_white`、`tulip_pink`、`oxeye`、`cornflower`、`lily_of_the_valley` | Determines the type of a flower block                        |
| `ground_sign_direction`      | 整数   | 0 - 15                                                       | Describes the rotation of signs and standing banners         |
| `growth`                     | 整数   | 0 - 7                                                        | Determines the growth level of crops                         |
| `hanging`                    | 布尔值 | `True`、`False`                                                  | Describes if a lantern block is hanging or not               |
| `head_piece_bit`             | 布尔值 | `True`、`False`                                                  | Determines if a block is the pillow side of a bed            |
| `height`                     | 整数   | 0 - 7                                                        | Determines the height of a top snow block                    |
| `huge_mushroom_bits`         | 整数   | 0 - 15                                                       | Determines which huge mushroom block to be displayed         |
| `in_wall_bit`                | 布尔值 | `True`、`False`                                                  | Determines if a fence block is connected to a wall block     |
| `infiniburn_bit`             | 布尔值 | `True`、`False`                                                  | Determines if a block should burn infinitely                 |
| `item_frame_map_bit`         | 布尔值 | `True`、`False`                                                  | Describes if an item frame block has a map in it             |
| `item_frame_photo_bit`       | 布尔值 | `True`、`False`                                                  | Describes if an item frame block has a photo in it           |
| `liquid_depth`               | 整数   | 0 - 15                                                       | Determines the level of liquid blocks                        |
| `lit`                        | 布尔值 | `True`、`False`                                                  | Determines if a block is lit or not                          |
| `moisturized_amount`         | 整数   | 0 - 7                                                        | Determines the moisture level of crops                       |
| `monster_egg_stone_type`     | 字符串 | `stone`、`cobblestone`、`stone_brick`、`mossy_stone_brick`、`cracked_stone_brick`、`chiseled_stone_brick` | Determines the stone type of a monster egg block             |
| `new_leaf_type`              | 字符串 | `acacia`、`dark_oak`                                             | Determines the leaf type of some blocks                      |
| `new_log_type`               | 字符串 | `acacia`、`dark_oak`                                             | Determines the wood type of some blocks                      |
| `no_drop_bit`                | 布尔值 | `True`、`False`                                                  | Determines if a skull block should drop loot                 |
| `occupied_bit`               | 布尔值 | `True`、`False`                                                  | Determines if a bed block is occupied                        |
| `old_leaf_type`              | 字符串 | `oak`、`spruce`、`birch`、`jungle`                                   | Determines the leaf type of some blocks                      |
| `old_log_type`               | 字符串 | `oak`、`spruce`、`birch`、`jungle`                                   | Determines the wood type of some blocks                      |
| `open_bit`                   | 布尔值 | `True`、`False`                                                  | Determines if a door, gate, or trapdoor is open              |
| `output_lit_bit`             | 布尔值 | `True`、`False`                                                  | Determines if a Comparator's output is lit                   |
| `output_subtract_bit`        | 布尔值 | `True`、`False`                                                  | Determines if a Comparator is set to subtract output         |
| `persistent_bit`             | 布尔值 | `True`、`False`                                                  | Determines if a leaf block is persistent                     |
| `portal_axis`                | 字符串 | `unknown`、`x`、`z`                                                | Determines the orientation of portal blocks                  |
| `powered_bit`                | 布尔值 | `True`、`False`                                                  | Shows when an observer or tripwire sends a redstone signal   |
| `rail_data_bit`              | 布尔值 | `True`、`False`                                                  | Shows if a rail has a redstone signal                        |
| `rail_direction`             | 整数   | 0 - 8                                                        | Determines the orientation of a placed rail block            |
| `redstone_signal`            | 整数   | 0 - 15                                                       | Determines the signal strength of a redstone signal          |
| `repeater_delay`             | 整数   | 0 - 3                                                        | Determines the amount of delay of a repeater                 |
| `sand_stone_type`            | 字符串 | `default`、`heiroglyphs`、`cut`、`smooth`                            | Determines the pattern of a sandstone block                  |
| `sand_type`                  | 字符串 | `normal`、`red`                                                  | Determines the sand type of a block                          |
| `sapling_type`               | 字符串 | `evergreen`、`birch`、`jungle`、`acacia`、`roofed_oak`                 | Determines the type of the sapling block                     |
| `sea_grass_type`             | 字符串 | `default`、`double_top`、`double_bot`                              | Determines the type of a seagrass block                      |
| `sponge_type`                | 字符串 | `dry`、`wet`                                                     | Determines the type of a sponge block                        |
| `stability`                  | 整数   | 0 - 5                                                        | Determines the stability of a scaffolding block              |
| `stability_check`            | 布尔值 | `True`、`False`                                                  | Describes if a scaffolding block has been checked for stability |
| `stone_brick_type`           | 字符串 | `default`、`mossy`、`cracked`、`chiseled`、`smooth`                    | Determines the type of a stone brick block                   |
| `stone_slab_type`            | 字符串 | `smooth_stone`、`sandstone`、`wood`、`cobblestone`、`brick`、`stone_brick`、`quartz`、`nether_brick` | Determines the type of some stone slab blocks                |
| `stone_slab_type_2          | 字符串 | r`ed_sandstone`、`purpur`、`prismarine_rough`、`prismarine_dark`、`prismarine_brick`、`mossy_cobblestone`、`smooth_sandstone`、`red_nether_brick` | Determines the type of some stone slab blocks                |||
| `stone_slab_type_3          | 字符串 | e`nd_stone_brick`、`smooth_red_sandstone`、`polishe_andesite`、`andesite`、`diorite`、`polished_diorite`、`granite`、`polished_granite` | Determines the type of some stone slab blocks                |||
| `stone_slab_type_4          | 字符串 | m`ossy_stone_brick`、`smooth_quartz`、`stone`、`cut_sandstone`、`cut_red_sandstone` | Determines the type of some stone slab blocks                |||
| `stone_type`                 | 字符串 | `stone`、`granite`、`granite_smooth`、`diorite`、`diorite_smooth`、`andesite`、`andesite_smooth` | Determines the stone type of a block                         |
| `stripped_bit`               | 布尔值 | `True`、`False`                                                  | Describes if a wood log has been stripped of bark            |
| `structure_block_type`       | 字符串 | `data`、`save`、`load`、`corner`、`invalid`、`export`                    | Determines the state of a structure block                    |
| `structure_void_type`        | 字符串 | `void`、`air`                                                    | Determines which void mode to draw for structure blocks      |
| `suspended_bit`              | 布尔值 | `True`、`False`                                                  | Indicates if a tripwire block is suspended                   |
| `tall_grass_type`            | 字符串 | `default`、`tall`、`fern`、`snow`                                    | Determines the type of a tall grass block                    |
| `toggle_bit`                 | 布尔值 | `True`、`False`                                                  | Determines if a hopper block is active or not                |
| `top_slot_bit`               | 布尔值 | `True`、`False`                                                  | Shows if a slab is the top half of the block or not          |
| `torch_facing_direction`     | 字符串 | `unknown`、`west`、`east`、`north`、`south`、`top`                       | Determines the block that a torch is attached to in relation to its position |
| `triggered_bit`              | 布尔值 | `True`、`False`                                                  | Determines if a dispenser is triggered                       |
| `turtle_egg_count`           | 字符串 | `one_egg`、`two_egg`、`three_egg`、`four_egg`                        | Determines the amount of turtle eggs in an egg block         |
| `update_bit`                 | 布尔值 | `True`、`False`                                                  | Determines if a leaf block or flower block should be updated |
| `upper_block_bit`            | 布尔值 | `True`、`False`                                                  | Determines if a block is the upper half of an object like a door or a tall plant |
| `upside_down_bit`            | 布尔值 | `True`、`False`                                                  | Determines if a stair block or trapdoor block is upsidedown  |
| `vine_direction_bits`        | 整数   | 0 - 15                                                       | Determines the facing direction for vines, works like the facing_direction blockstate |
| `wall_block_type`            | 字符串 | `cobblestone`、`mossy_cobblestone`、`granite`、`diorite`、`andesite`、`sandstone`、`brick`、`stone_brick`、`mossy_stone_brick`、`nether_brick`、`end_brick`、`prismarine`、`red_sandstone`、`red_nether_brick` | Determines the type of a stone used in a wall block          |
| `wall_connection_type_east`  | 字符串 | `none`、`short`、`tall`                                            | Determines what kind of connection a wall has to the east    |
| `wall_connection_type_north` | 字符串 | `none`、`short`、`tall`                                            | Determines what kind of connection a wall has to the north   |
| `wall_connection_type_south` | 字符串 | `none`、`short`、`tall`                                            | Determines what kind of connection a wall has to the south   |
| `wall_connection_type_west`  | 字符串 | `none`、`short`、`tall`                                            | Determines what kind of connection a wall has to the west    |
| `wall_post_bit`              | 布尔值 | `True`、`False`                                                  | Determines if a wall should contain a post                   |
| `weirdo_direction`           | 整数   | 0 - 3                                                        | Describes the rotation of stairs                             |
| `wood_type`                  | 字符串 | `oak`、`spruce`、`birch`、`jungle`、`acacia`、`dark_oak`                 | Determines the wood type of a block                          |

## 物品

| 名称                                     | ID   | 附加值                                                       |
| ---------------------------------------- | ---- | ------------------------------------------------------------ |
| `acacia_boat`                            | 379  |                                                              |
| `acacia_button`                          | -140 |                                                              |
| `acacia_chest_boat`                      | 643  |                                                              |
| `acacia_door`                            | 556  |                                                              |
| `acacia_fence_gate`                      | 187  |                                                              |
| `acacia_pressure_plate`                  | -150 |                                                              |
| `acacia_sign`                            | 579  |                                                              |
| `acacia_stairs`                          | 163  |                                                              |
| `acacia_standing_sign`                   | -190 |                                                              |
| `acacia_trapdoor`                        | -145 |                                                              |
| `acacia_wall_sign`                       | -191 |                                                              |
| `activator_rail`                         | 126  |                                                              |
| `agent_spawn_egg`                        | 487  |                                                              |
| `air`                                    | -158 |                                                              |
| `allay_spawn_egg`                        | 632  |                                                              |
| `allow`                                  | 210  |                                                              |
| `amethyst_block`                         | -327 |                                                              |
| `amethyst_cluster`                       | -329 |                                                              |
| `amethyst_shard`                         | 625  |                                                              |
| `ancient_debris`                         | -271 |                                                              |
| `andesite_stairs`                        | -171 |                                                              |
| `anvil`                                  | 145  |                                                              |
| `apple`                                  | 257  |                                                              |
| `armor_stand`                            | 552  |                                                              |
| `arrow`                                  | 301  |                                                              |
| `axolotl_bucket`                         | 369  |                                                              |
| `axolotl_spawn_egg`                      | 500  |                                                              |
| `azalea`                                 | -337 |                                                              |
| `azalea_leaves`                          | -324 |                                                              |
| `azalea_leaves_flowered`                 | -325 |                                                              |
| `baked_potato`                           | 281  |                                                              |
| `balloon`                                | 599  |                                                              |
| `bamboo`                                 | -163 |                                                              |
| `bamboo_sapling`                         | -164 |                                                              |
| `banner`                                 | 567  |                                                              |
| `banner_pattern`                         | 652  |                                                              |
| `barrel`                                 | -203 |                                                              |
| `barrier`                                | -161 |                                                              |
| `basalt`                                 | -234 |                                                              |
| `bat_spawn_egg`                          | 453  |                                                              |
| `beacon`                                 | 138  |                                                              |
| `bed`                                    | 418  |                                                              |
| `bedrock`                                | 7    |                                                              |
| `bee_nest`                               | -218 |                                                              |
| `bee_spawn_egg`                          | 494  |                                                              |
| `beef`                                   | 273  |                                                              |
| `beehive`                                | -219 |                                                              |
| `beetroot`                               | 285  |                                                              |
| `beetroot_seeds`                         | 295  |                                                              |
| `beetroot_soup`                          | 286  |                                                              |
| `bell`                                   | -206 |                                                              |
| `big_dripleaf`                           | -323 |                                                              |
| `birch_boat`                             | 376  |                                                              |
| `birch_button`                           | -141 |                                                              |
| `birch_chest_boat`                       | 640  |                                                              |
| `birch_door`                             | 554  |                                                              |
| `birch_fence_gate`                       | 184  |                                                              |
| `birch_pressure_plate`                   | -151 |                                                              |
| `birch_sign`                             | 577  |                                                              |
| `birch_stairs`                           | 135  |                                                              |
| `birch_standing_sign`                    | -186 |                                                              |
| `birch_trapdoor`                         | -146 |                                                              |
| `birch_wall_sign`                        | -187 |                                                              |
| `black_candle`                           | -428 |                                                              |
| `black_candle_cake`                      | -445 |                                                              |
| `black_dye`                              | 395  |                                                              |
| `black_glazed_terracotta`                | 235  |                                                              |
| `blackstone`                             | -273 |                                                              |
| `blackstone_double_slab`                 | -283 |                                                              |
| `blackstone_slab`                        | -282 |                                                              |
| `blackstone_stairs`                      | -276 |                                                              |
| `blackstone_wall`                        | -277 |                                                              |
| `blast_furnace`                          | -196 |                                                              |
| `blaze_powder`                           | 429  |                                                              |
| `blaze_rod`                              | 423  |                                                              |
| `blaze_spawn_egg`                        | 456  |                                                              |
| `bleach`                                 | 597  |                                                              |
| `blue_candle`                            | -424 |                                                              |
| `blue_candle_cake`                       | -441 |                                                              |
| `blue_dye`                               | 399  |                                                              |
| `blue_glazed_terracotta`                 | 231  |                                                              |
| `blue_ice`                               | -11  |                                                              |
| `boat`                                   | 650  |                                                              |
| `bone`                                   | 415  |                                                              |
| `bone_block`                             | 216  |                                                              |
| `bone_meal`                              | 411  |                                                              |
| `book`                                   | 387  |                                                              |
| `bookshelf`                              | 47   |                                                              |
| `border_block`                           | 212  |                                                              |
| `bordure_indented_banner_pattern`        | 586  |                                                              |
| `bow`                                    | 300  |                                                              |
| `bowl`                                   | 321  |                                                              |
| `bread`                                  | 261  |                                                              |
| `brewing_stand`                          | 431  |                                                              |
| `brick`                                  | 383  |                                                              |
| `brick_block`                            | 45   |                                                              |
| `brick_stairs`                           | 108  |                                                              |
| `brown_candle`                           | -425 |                                                              |
| `brown_candle_cake`                      | -442 |                                                              |
| `brown_dye`                              | 398  |                                                              |
| `brown_glazed_terracotta`                | 232  |                                                              |
| `brown_mushroom`                         | 39   |                                                              |
| `brown_mushroom_block`                   | 99   |                                                              |
| `bubble_column`                          | -160 |                                                              |
| `bucket`                                 | 360  |                                                              |
| `budding_amethyst`                       | -328 |                                                              |
| `cactus`                                 | 81   |                                                              |
| `cake`                                   | 417  |                                                              |
| `calcite`                                | -326 |                                                              |
| `camera`                                 | 594  |                                                              |
| `campfire`                               | 589  |                                                              |
| `candle`                                 | -412 |                                                              |
| `candle_cake`                            | -429 |                                                              |
| `carpet`                                 | 171  |                                                              |
| `carrot`                                 | 279  |                                                              |
| `carrot_on_a_stick`                      | 517  |                                                              |
| `carrots`                                | 141  |                                                              |
| `cartography_table`                      | -200 |                                                              |
| `carved_pumpkin`                         | -155 |                                                              |
| `cat_spawn_egg`                          | 488  |                                                              |
| `cauldron`                               | 432  |                                                              |
| `cave_spider_spawn_egg`                  | 457  |                                                              |
| `cave_vines`                             | -322 |                                                              |
| `cave_vines_body_with_berries`           | -375 |                                                              |
| `cave_vines_head_with_berries`           | -376 |                                                              |
| `chain`                                  | 620  |                                                              |
| `chain_command_block`                    | 189  |                                                              |
| `chainmail_boots`                        | 342  |                                                              |
| `chainmail_chestplate`                   | 340  |                                                              |
| `chainmail_helmet`                       | 339  |                                                              |
| `chainmail_leggings`                     | 341  |                                                              |
| `charcoal`                               | 303  |                                                              |
| `chemical_heat`                          | 192  |                                                              |
| `chemistry_table`                        | 238  |                                                              |
| `chest`                                  | 54   |                                                              |
| `chest_boat`                             | 646  |                                                              |
| `chest_minecart`                         | 389  |                                                              |
| `chicken`                                | 275  |                                                              |
| `chicken_spawn_egg`                      | 435  |                                                              |
| `chiseled_deepslate`                     | -395 |                                                              |
| `chiseled_nether_bricks`                 | -302 |                                                              |
| `chiseled_polished_blackstone`           | -279 |                                                              |
| `chorus_flower`                          | 200  |                                                              |
| `chorus_fruit`                           | 558  |                                                              |
| `chorus_plant`                           | 240  |                                                              |
| `clay`                                   | 82   |                                                              |
| `clay_ball`                              | 384  |                                                              |
| `client_request_placeholder_block`       | -465 |                                                              |
| `clock`                                  | 393  |                                                              |
| `coal`                                   | 302  |                                                              |
| `coal_block`                             | 173  |                                                              |
| `coal_ore`                               | 16   |                                                              |
| `cobbled_deepslate`                      | -379 |                                                              |
| `cobbled_deepslate_double_slab`          | -396 |                                                              |
| `cobbled_deepslate_slab`                 | -380 |                                                              |
| `cobbled_deepslate_stairs`               | -381 |                                                              |
| `cobbled_deepslate_wall`                 | -382 |                                                              |
| `cobblestone`                            | 4    |                                                              |
| `cobblestone_wall`                       | 139  |                                                              |
| `cocoa`                                  | 127  |                                                              |
| `cocoa_beans`                            | 412  |                                                              |
| `cod`                                    | 264  |                                                              |
| `cod_bucket`                             | 364  |                                                              |
| `cod_spawn_egg`                          | 480  |                                                              |
| `colored_torch_bp`                       | 204  |                                                              |
| `colored_torch_rg`                       | 202  |                                                              |
| `command_block`                          | 137  |                                                              |
| `command_block_minecart`                 | 563  |                                                              |
| `comparator`                             | 522  |                                                              |
| `compass`                                | 391  |                                                              |
| `composter`                              | -213 |                                                              |
| `compound`                               | 595  |                                                              |
| `concrete`                               | 236  |                                                              |
| `concrete_powder`                        | 237  |                                                              |
| `conduit`                                | -157 |                                                              |
| `cooked_beef`                            | 274  |                                                              |
| `cooked_chicken`                         | 276  |                                                              |
| `cooked_cod`                             | 268  |                                                              |
| `cooked_mutton`                          | 551  |                                                              |
| `cooked_porkchop`                        | 263  |                                                              |
| `cooked_rabbit`                          | 289  |                                                              |
| `cooked_salmon`                          | 269  |                                                              |
| `cookie`                                 | 271  |                                                              |
| `copper_block`                           | -340 |                                                              |
| `copper_ingot`                           | 504  |                                                              |
| `copper_ore`                             | -311 |                                                              |
| `coral`                                  | -131 |                                                              |
| `coral_block`                            | -132 |                                                              |
| `coral_fan`                              | -133 |                                                              |
| `coral_fan_dead`                         | -134 |                                                              |
| `coral_fan_hang`                         | -135 |                                                              |
| `coral_fan_hang2                         | -136 |                                                              |
| `coral_fan_hang3                         | -137 |                                                              |
| `cow_spawn_egg`                          | 436  |                                                              |
| `cracked_deepslate_bricks`               | -410 |                                                              |
| `cracked_deepslate_tiles`                | -409 |                                                              |
| `cracked_nether_bricks`                  | -303 |                                                              |
| `cracked_polished_blackstone_bricks`     | -280 |                                                              |
| `crafting_table`                         | 58   |                                                              |
| `creeper_banner_pattern`                 | 582  |                                                              |
| `creeper_spawn_egg`                      | 441  |                                                              |
| `crimson_button`                         | -260 |                                                              |
| `crimson_door`                           | 617  |                                                              |
| `crimson_double_slab`                    | -266 |                                                              |
| `crimson_fence`                          | -256 |                                                              |
| `crimson_fence_gate`                     | -258 |                                                              |
| `crimson_fungus`                         | -228 |                                                              |
| `crimson_hyphae`                         | -299 |                                                              |
| `crimson_nylium`                         | -232 |                                                              |
| `crimson_planks`                         | -242 |                                                              |
| `crimson_pressure_plate`                 | -262 |                                                              |
| `crimson_roots`                          | -223 |                                                              |
| `crimson_sign`                           | 615  |                                                              |
| `crimson_slab`                           | -264 |                                                              |
| `crimson_stairs`                         | -254 |                                                              |
| `crimson_standing_sign`                  | -250 |                                                              |
| `crimson_stem`                           | -225 |                                                              |
| `crimson_trapdoor`                       | -246 |                                                              |
| `crimson_wall_sign`                      | -252 |                                                              |
| `crossbow`                               | 575  |                                                              |
| `crying_obsidian`                        | -289 |                                                              |
| `cut_copper`                             | -347 |                                                              |
| `cut_copper_slab`                        | -361 |                                                              |
| `cut_copper_stairs`                      | -354 |                                                              |
| `cyan_candle`                            | -422 |                                                              |
| `cyan_candle_cake`                       | -439 |                                                              |
| `cyan_dye`                               | 401  |                                                              |
| `cyan_glazed_terracotta`                 | 229  |                                                              |
| `dark_oak_boat`                          | 380  |                                                              |
| `dark_oak_button`                        | -142 |                                                              |
| `dark_oak_chest_boat`                    | 644  |                                                              |
| `dark_oak_door`                          | 557  |                                                              |
| `dark_oak_fence_gate`                    | 186  |                                                              |
| `dark_oak_pressure_plate`                | -152 |                                                              |
| `dark_oak_sign`                          | 580  |                                                              |
| `dark_oak_stairs`                        | 164  |                                                              |
| `dark_oak_trapdoor`                      | -147 |                                                              |
| `dark_prismarine_stairs`                 | -3   |                                                              |
| `darkoak_standing_sign`                  | -192 |                                                              |
| `darkoak_wall_sign`                      | -193 |                                                              |
| `daylight_detector`                      | 151  |                                                              |
| `daylight_detector_inverted`             | 178  |                                                              |
| `deadbush`                               | 32   |                                                              |
| `debug_stick`                            | 591  |                                                              |
| `deepslate`                              | -378 |                                                              |
| `deepslate_brick_double_slab`            | -399 |                                                              |
| `deepslate_brick_slab`                   | -392 |                                                              |
| `deepslate_brick_stairs`                 | -393 |                                                              |
| `deepslate_brick_wall`                   | -394 |                                                              |
| `deepslate_bricks`                       | -391 |                                                              |
| `deepslate_coal_ore`                     | -406 |                                                              |
| `deepslate_copper_ore`                   | -408 |                                                              |
| `deepslate_diamond_ore`                  | -405 |                                                              |
| `deepslate_emerald_ore`                  | -407 |                                                              |
| `deepslate_gold_ore`                     | -402 |                                                              |
| `deepslate_iron_ore`                     | -401 |                                                              |
| `deepslate_lapis_ore`                    | -400 |                                                              |
| `deepslate_redstone_ore`                 | -403 |                                                              |
| `deepslate_tile_double_slab`             | -398 |                                                              |
| `deepslate_tile_slab`                    | -388 |                                                              |
| `deepslate_tile_stairs`                  | -389 |                                                              |
| `deepslate_tile_wall`                    | -390 |                                                              |
| `deepslate_tiles`                        | -387 |                                                              |
| `deny`                                   | 211  |                                                              |
| `detector_rail`                          | 28   |                                                              |
| `diamond`                                | 304  |                                                              |
| `diamond_axe`                            | 319  |                                                              |
| `diamond_block`                          | 57   |                                                              |
| `diamond_boots`                          | 350  |                                                              |
| `diamond_chestplate`                     | 348  |                                                              |
| `diamond_helmet`                         | 347  |                                                              |
| `diamond_hoe`                            | 332  |                                                              |
| `diamond_horse_armor`                    | 533  |                                                              |
| `diamond_leggings`                       | 349  |                                                              |
| `diamond_ore`                            | 56   |                                                              |
| `diamond_pickaxe`                        | 318  |                                                              |
| `diamond_shovel`                         | 317  |                                                              |
| `diamond_sword`                          | 316  |                                                              |
| `diorite_stairs`                         | -170 |                                                              |
| `dirt`                                   | 3    |                                                              |
| `dirt_with_roots`                        | -318 |                                                              |
| `disc_fragment_5                         | 638  |                                                              |
| `dispenser`                              | 23   |                                                              |
| `dolphin_spawn_egg`                      | 484  |                                                              |
| `donkey_spawn_egg`                       | 465  |                                                              |
| `double_cut_copper_slab`                 | -368 |                                                              |
| `double_plant`                           | 175  |                                                              |
| `double_stone_block_slab`                | 43   |                                                              |
| `double_stone_block_slab2`               | 181  |                                                              |
| `double_stone_block_slab3`               | -167 |                                                              |
| `double_stone_block_slab4`               | -168 |                                                              |
| `double_wooden_slab`                     | 157  |                                                              |
| `dragon_breath`                          | 560  |                                                              |
| `dragon_egg`                             | 122  |                                                              |
| `dried_kelp`                             | 270  |                                                              |
| `dried_kelp_block`                       | -139 |                                                              |
| `dripstone_block`                        | -317 |                                                              |
| `dropper`                                | 125  |                                                              |
| `drowned_spawn_egg`                      | 483  |                                                              |
| `dye`                                    | 651  |                                                              |
| `echo_shard`                             | 648  |                                                              |
| `egg`                                    | 390  |                                                              |
| `elder_guardian_spawn_egg`               | 471  |                                                              |
| `element_0`                              | 36   |                                                              |
| `element_1`                              | -12  |                                                              |
| `element_10``                            | -21  |                                                              |
| `element_100`                            | -111 |                                                              |
| `element_101`                            | -112 |                                                              |
| `element_102`                            | -113 |                                                              |
| `element_103`                            | -114 |                                                              |
| `element_104`                            | -115 |                                                              |
| `element_105`                            | -116 |                                                              |
| `element_106`                            | -117 |                                                              |
| `element_107`                            | -118 |                                                              |
| `element_108`                            | -119 |                                                              |
| `element_109`                            | -120 |                                                              |
| `element_11`                             | -22  |                                                              |
| `element_110`                            | -121 |                                                              |
| `element_111`                            | -122 |                                                              |
| `element_112`                            | -123 |                                                              |
| `element_113`                            | -124 |                                                              |
| `element_114`                            | -125 |                                                              |
| `element_115`                            | -126 |                                                              |
| `element_116`                            | -127 |                                                              |
| `element_117`                            | -128 |                                                              |
| `element_118`                            | -129 |                                                              |
| `element_12`                             | -23  |                                                              |
| `element_13`                             | -24  |                                                              |
| `element_14`                             | -25  |                                                              |
| `element_15`                             | -26  |                                                              |
| `element_16`                             | -27  |                                                              |
| `element_17`                             | -28  |                                                              |
| `element_18`                             | -29  |                                                              |
| `element_19`                             | -30  |                                                              |
| `element_2`                              | -13  |                                                              |
| `element_20`                             | -31  |                                                              |
| `element_21`                             | -32  |                                                              |
| `element_22`                             | -33  |                                                              |
| `element_23`                             | -34  |                                                              |
| `element_24`                             | -35  |                                                              |
| `element_25`                             | -36  |                                                              |
| `element_26`                             | -37  |                                                              |
| `element_27`                             | -38  |                                                              |
| `element_28`                             | -39  |                                                              |
| `element_29`                             | -40  |                                                              |
| `element_3`                              | -14  |                                                              |
| `element_30`                             | -41  |                                                              |
| `element_31`                             | -42  |                                                              |
| `element_32`                             | -43  |                                                              |
| `element_33`                             | -44  |                                                              |
| `element_34`                             | -45  |                                                              |
| `element_35`                             | -46  |                                                              |
| `element_36`                             | -47  |                                                              |
| `element_37`                             | -48  |                                                              |
| `element_38`                             | -49  |                                                              |
| `element_39`                             | -50  |                                                              |
| `element_4`                              | -15  |                                                              |
| `element_40`                             | -51  |                                                              |
| `element_41`                             | -52  |                                                              |
| `element_42`                             | -53  |                                                              |
| `element_43`                             | -54  |                                                              |
| `element_44`                             | -55  |                                                              |
| `element_45`                             | -56  |                                                              |
| `element_46`                             | -57  |                                                              |
| `element_47`                             | -58  |                                                              |
| `element_48`                             | -59  |                                                              |
| `element_49`                             | -60  |                                                              |
| `element_5`                              | -16  |                                                              |
| `element_50`                             | -61  |                                                              |
| `element_51`                             | -62  |                                                              |
| `element_52`                             | -63  |                                                              |
| `element_53`                             | -64  |                                                              |
| `element_54`                             | -65  |                                                              |
| `element_55`                             | -66  |                                                              |
| `element_56`                             | -67  |                                                              |
| `element_57`                             | -68  |                                                              |
| `element_58`                             | -69  |                                                              |
| `element_59`                             | -70  |                                                              |
| `element_6`                              | -17  |                                                              |
| `element_60`                             | -71  |                                                              |
| `element_61`                             | -72  |                                                              |
| `element_62`                             | -73  |                                                              |
| `element_63`                             | -74  |                                                              |
| `element_64`                             | -75  |                                                              |
| `element_65`                             | -76  |                                                              |
| `element_66`                             | -77  |                                                              |
| `element_67`                             | -78  |                                                              |
| `element_68`                             | -79  |                                                              |
| `element_69`                             | -80  |                                                              |
| `element_7`                              | -18  |                                                              |
| `element_70`                             | -81  |                                                              |
| `element_71`                             | -82  |                                                              |
| `element_72`                             | -83  |                                                              |
| `element_73`                             | -84  |                                                              |
| `element_74`                             | -85  |                                                              |
| `element_75`                             | -86  |                                                              |
| `element_76`                             | -87  |                                                              |
| `element_77`                             | -88  |                                                              |
| `element_78`                             | -89  |                                                              |
| `element_79`                             | -90  |                                                              |
| `element_8`                              | -19  |                                                              |
| `element_80`                             | -91  |                                                              |
| `element_81`                             | -92  |                                                              |
| `element_82`                             | -93  |                                                              |
| `element_83`                             | -94  |                                                              |
| `element_84`                             | -95  |                                                              |
| `element_85`                             | -96  |                                                              |
| `element_86`                             | -97  |                                                              |
| `element_87`                             | -98  |                                                              |
| `element_88`                             | -99  |                                                              |
| `element_89`                             | -100 |                                                              |
| `element_9`                              | -20  |                                                              |
| `element_90`                             | -101 |                                                              |
| `element_91`                             | -102 |                                                              |
| `element_92`                             | -103 |                                                              |
| `element_93`                             | -104 |                                                              |
| `element_94`                             | -105 |                                                              |
| `element_95`                             | -106 |                                                              |
| `element_96`                             | -107 |                                                              |
| `element_97`                             | -108 |                                                              |
| `element_98`                             | -109 |                                                              |
| `element_99`                             | -110 |                                                              |
| `elytra`                                 | 564  |                                                              |
| `emerald`                                | 512  |                                                              |
| `emerald_block`                          | 133  |                                                              |
| `emerald_ore`                            | 129  |                                                              |
| `empty_map`                              | 515  |                                                              |
| `enchanted_book`                         | 521  |                                                              |
| `enchanted_golden_apple`                 | 259  |                                                              |
| `enchanting_table`                       | 116  |                                                              |
| `end_brick_stairs`                       | -178 |                                                              |
| `end_bricks`                             | 206  |                                                              |
| `end_crystal`                            | 654  |                                                              |
| `end_gateway`                            | 209  |                                                              |
| `end_portal`                             | 119  |                                                              |
| `end_portal_frame`                       | 120  |                                                              |
| `end_rod`                                | 208  |                                                              |
| `end_stone`                              | 121  |                                                              |
| `ender_chest`                            | 130  |                                                              |
| `ender_eye`                              | 433  |                                                              |
| `ender_pearl`                            | 422  |                                                              |
| `enderman_spawn_egg`                     | 442  |                                                              |
| `endermite_spawn_egg`                    | 460  |                                                              |
| `evoker_spawn_egg`                       | 475  |                                                              |
| `experience_bottle`                      | 508  |                                                              |
| `exposed_copper`                         | -341 |                                                              |
| `exposed_cut_copper`                     | -348 |                                                              |
| `exposed_cut_copper_slab`                | -362 |                                                              |
| `exposed_cut_copper_stairs`              | -355 |                                                              |
| `exposed_double_cut_copper_slab`         | -369 |                                                              |
| `farmland`                               | 60   |                                                              |
| `feather`                                | 327  |                                                              |
| `fence`                                  | 85   |                                                              |
| `fence_gate`                             | 107  |                                                              |
| `fermented_spider_eye`                   | 428  |                                                              |
| `field_masoned_banner_pattern`           | 585  |                                                              |
| `filled_map`                             | 420  |                                                              |
| `fire`                                   | 51   |                                                              |
| `fire_charge`                            | 509  |                                                              |
| `firework_rocket`                        | 519  |                                                              |
| `firework_star`                          | 520  |                                                              |
| `fishing_rod`                            | 392  |                                                              |
| `fletching_table`                        | -201 |                                                              |
| `flint`                                  | 356  |                                                              |
| `flint_and_steel`                        | 299  |                                                              |
| `flower_banner_pattern`                  | 581  |                                                              |
| `flower_pot`                             | 514  |                                                              |
| `flowering_azalea`                       | -338 |                                                              |
| `flowing_lava`                           | 10   |                                                              |
| `flowing_water`                          | 8    |                                                              |
| `fox_spawn_egg`                          | 490  |                                                              |
| `frame`                                  | 513  |                                                              |
| `frog_spawn`                             | -468 |                                                              |
| `frog_spawn_egg`                         | 629  |                                                              |
| `frosted_ice`                            | 207  |                                                              |
| `furnace`                                | 61   |                                                              |
| `ghast_spawn_egg`                        | 454  |                                                              |
| `ghast_tear`                             | 424  |                                                              |
| `gilded_blackstone`                      | -281 |                                                              |
| `glass`                                  | 20   |                                                              |
| `glass_bottle`                           | 427  |                                                              |
| `glass_pane`                             | 102  |                                                              |
| `glistering_melon_slice`                 | 434  |                                                              |
| `globe_banner_pattern`                   | 588  |                                                              |
| `glow_frame`                             | 624  |                                                              |
| `glow_ink_sac`                           | 503  |                                                              |
| `glow_lichen`                            | -411 |                                                              |
| `glow_squid_spawn_egg`                   | 502  |                                                              |
| `glow_stick`                             | 602  |                                                              |
| `glowingobsidian`                        | 246  |                                                              |
| `glowstone`                              | 89   |                                                              |
| `glowstone_dust`                         | 394  |                                                              |
| `goat_horn`                              | 628  |                                                              |
| `goat_spawn_egg`                         | 501  |                                                              |
| `gold_block`                             | 41   |                                                              |
| `gold_ingot`                             | 306  |                                                              |
| `gold_nugget`                            | 425  |                                                              |
| `gold_ore`                               | 14   |                                                              |
| `golden_apple`                           | 258  |                                                              |
| `golden_axe`                             | 325  |                                                              |
| `golden_boots`                           | 354  |                                                              |
| `golden_carrot`                          | 283  |                                                              |
| `golden_chestplate`                      | 352  |                                                              |
| `golden_helmet`                          | 351  |                                                              |
| `golden_hoe`                             | 333  |                                                              |
| `golden_horse_armor`                     | 532  |                                                              |
| `golden_leggings`                        | 353  |                                                              |
| `golden_pickaxe`                         | 324  |                                                              |
| `golden_rail`                            | 27   |                                                              |
| `golden_shovel`                          | 323  |                                                              |
| `golden_sword`                           | 322  |                                                              |
| `granite_stairs`                         | -169 |                                                              |
| `grass`                                  | 2    |                                                              |
| `grass_path`                             | 198  |                                                              |
| `gravel`                                 | 13   |                                                              |
| `gray_candle`                            | -420 |                                                              |
| `gray_candle_cake`                       | -437 |                                                              |
| `gray_dye`                               | 403  |                                                              |
| `gray_glazed_terracotta`                 | 227  |                                                              |
| `green_candle`                           | -426 |                                                              |
| `green_candle_cake`                      | -443 |                                                              |
| `green_dye`                              | 397  |                                                              |
| `green_glazed_terracotta`                | 233  |                                                              |
| `grindstone`                             | -195 |                                                              |
| `guardian_spawn_egg`                     | 461  |                                                              |
| `gunpowder`                              | 328  |                                                              |
| `hanging_roots`                          | -319 |                                                              |
| `hard_glass`                             | 253  |                                                              |
| `hard_glass_pane`                        | 190  |                                                              |
| `hard_stained_glass`                     | 254  |                                                              |
| `hard_stained_glass_pane`                | 191  |                                                              |
| `hardened_clay`                          | 172  |                                                              |
| `hay_block`                              | 170  |                                                              |
| `heart_of_the_sea`                       | 571  |                                                              |
| `heavy_weighted_pressure_plate`          | 148  |                                                              |
| `hoglin_spawn_egg`                       | 496  |                                                              |
| `honey_block`                            | -220 |                                                              |
| `honey_bottle`                           | 593  |                                                              |
| `honeycomb`                              | 592  |                                                              |
| `honeycomb_block`                        | -221 |                                                              |
| `hopper`                                 | 527  |                                                              |
| `hopper_minecart`                        | 526  |                                                              |
| `horse_spawn_egg`                        | 458  |                                                              |
| `husk_spawn_egg`                         | 463  |                                                              |
| `ice`                                    | 79   |                                                              |
| `ice_bomb`                               | 596  |                                                              |
| `infested_deepslate`                     | -454 |                                                              |
| `info_update`                            | 248  |                                                              |
| `info_update2                            | 249  |                                                              |
| `ink_sac`                                | 413  |                                                              |
| `invisible_bedrock`                      | 95   |                                                              |
| `iron_axe`                               | 298  |                                                              |
| `iron_bars`                              | 101  |                                                              |
| `iron_block`                             | 42   |                                                              |
| `iron_boots`                             | 346  |                                                              |
| `iron_chestplate`                        | 344  |                                                              |
| `iron_door`                              | 372  |                                                              |
| `iron_helmet`                            | 343  |                                                              |
| `iron_hoe`                               | 331  |                                                              |
| `iron_horse_armor`                       | 531  |                                                              |
| `iron_ingot`                             | 305  |                                                              |
| `iron_leggings`                          | 345  |                                                              |
| `iron_nugget`                            | 569  |                                                              |
| `iron_ore`                               | 15   |                                                              |
| `iron_pickaxe`                           | 297  |                                                              |
| `iron_shovel`                            | 296  |                                                              |
| `iron_sword`                             | 307  |                                                              |
| `iron_trapdoor`                          | 167  |                                                              |
| `item.acacia_door`                       | 196  |                                                              |
| `item.bed`                               | 26   |                                                              |
| `item.beetroot`                          | 244  |                                                              |
| `item.birch_door`                        | 194  |                                                              |
| `item.brewing_stand`                     | 117  |                                                              |
| `item.cake`                              | 92   |                                                              |
| `item.camera`                            | 242  |                                                              |
| `item.campfire`                          | -209 |                                                              |
| `item.cauldron`                          | 118  |                                                              |
| `item.chain`                             | -286 |                                                              |
| `item.crimson_door`                      | -244 |                                                              |
| `item.dark_oak_door`                     | 197  |                                                              |
| `item.flower_pot`                        | 140  |                                                              |
| `item.frame`                             | 199  |                                                              |
| `item.glow_frame`                        | -339 |                                                              |
| `item.hopper`                            | 154  |                                                              |
| `item.iron_door`                         | 71   |                                                              |
| `item.jungle_door`                       | 195  |                                                              |
| `item.kelp`                              | -138 |                                                              |
| `item.mangrove_door`                     | -493 |                                                              |
| `item.nether_sprouts`                    | -238 |                                                              |
| `item.nether_wart`                       | 115  |                                                              |
| `item.reeds`                             | 83   |                                                              |
| `item.skull`                             | 144  |                                                              |
| `item.soul_campfire`                     | -290 |                                                              |
| `item.spruce_door`                       | 193  |                                                              |
| `item.warped_door`                       | -245 |                                                              |
| `item.wheat`                             | 59   |                                                              |
| `item.wooden_door`                       | 64   |                                                              |
| `jigsaw`                                 | -211 |                                                              |
| `jukebox`                                | 84   |                                                              |
| `jungle_boat`                            | 377  |                                                              |
| `jungle_button`                          | -143 |                                                              |
| `jungle_chest_boat`                      | 641  |                                                              |
| `jungle_door`                            | 555  |                                                              |
| `jungle_fence_gate`                      | 185  |                                                              |
| `jungle_pressure_plate`                  | -153 |                                                              |
| `jungle_sign`                            | 578  |                                                              |
| `jungle_stairs`                          | 136  |                                                              |
| `jungle_standing_sign`                   | -188 |                                                              |
| `jungle_trapdoor`                        | -148 |                                                              |
| `jungle_wall_sign`                       | -189 |                                                              |
| `kelp`                                   | 382  |                                                              |
| `ladder`                                 | 65   |                                                              |
| `lantern`                                | -208 |                                                              |
| `lapis_block`                            | 22   |                                                              |
| `lapis_lazuli`                           | 414  |                                                              |
| `lapis_ore`                              | 21   |                                                              |
| `large_amethyst_bud`                     | -330 |                                                              |
| `lava`                                   | 11   |                                                              |
| `lava_bucket`                            | 363  |                                                              |
| `lava_cauldron`                          | -210 |                                                              |
| `lead`                                   | 547  |                                                              |
| `leather`                                | 381  |                                                              |
| `leather_boots`                          | 338  |                                                              |
| `leather_chestplate`                     | 336  |                                                              |
| `leather_helmet`                         | 335  |                                                              |
| `leather_horse_armor`                    | 530  |                                                              |
| `leather_leggings`                       | 337  |                                                              |
| `leaves`                                 | 18   |                                                              |
| `leaves2                                 | 161  |                                                              |
| `lectern`                                | -194 |                                                              |
| `lever`                                  | 69   |                                                              |
| `light_block`                            | -215 |                                                              |
| `light_blue_candle`                      | -416 |                                                              |
| `light_blue_candle_cake`                 | -433 |                                                              |
| `light_blue_dye`                         | 407  |                                                              |
| `light_blue_glazed_terracotta`           | 223  |                                                              |
| `light_gray_candle`                      | -421 |                                                              |
| `light_gray_candle_cake`                 | -438 |                                                              |
| `light_gray_dye`                         | 402  |                                                              |
| `light_weighted_pressure_plate`          | 147  |                                                              |
| `lightning_rod`                          | -312 |                                                              |
| `lime_candle`                            | -418 |                                                              |
| `lime_candle_cake`                       | -435 |                                                              |
| `lime_dye`                               | 405  |                                                              |
| `lime_glazed_terracotta`                 | 225  |                                                              |
| `lingering_potion`                       | 562  |                                                              |
| `lit_blast_furnace`                      | -214 |                                                              |
| `lit_deepslate_redstone_ore`             | -404 |                                                              |
| `lit_furnace`                            | 62   |                                                              |
| `lit_pumpkin`                            | 91   |                                                              |
| `lit_redstone_lamp`                      | 124  |                                                              |
| `lit_redstone_ore`                       | 74   |                                                              |
| `lit_smoker`                             | -199 |                                                              |
| `llama_spawn_egg`                        | 473  |                                                              |
| `lodestone`                              | -222 |                                                              |
| `lodestone_compass`                      | 603  |                                                              |
| `log`                                    | 17   |                                                              |
| `log2                                    | 162  |                                                              |
| `loom`                                   | -204 |                                                              |
| `magenta_candle`                         | -415 |                                                              |
| `magenta_candle_cake`                    | -432 |                                                              |
| `magenta_dye`                            | 408  |                                                              |
| `magenta_glazed_terracotta`              | 222  |                                                              |
| `magma`                                  | 213  |                                                              |
| `magma_cream`                            | 430  |                                                              |
| `magma_cube_spawn_egg`                   | 455  |                                                              |
| `mangrove_boat`                          | 636  |                                                              |
| `mangrove_button`                        | -487 |                                                              |
| `mangrove_chest_boat`                    | 645  |                                                              |
| `mangrove_door`                          | 634  |                                                              |
| `mangrove_double_slab`                   | -499 |                                                              |
| `mangrove_fence`                         | -491 |                                                              |
| `mangrove_fence_gate`                    | -492 |                                                              |
| `mangrove_leaves`                        | -472 |                                                              |
| `mangrove_log`                           | -484 |                                                              |
| `mangrove_planks`                        | -486 |                                                              |
| `mangrove_pressure_plate`                | -490 |                                                              |
| `mangrove_propagule`                     | -474 |                                                              |
| `mangrove_roots`                         | -482 |                                                              |
| `mangrove_sign`                          | 635  |                                                              |
| `mangrove_slab`                          | -489 |                                                              |
| `mangrove_stairs`                        | -488 |                                                              |
| `mangrove_standing_sign`                 | -494 |                                                              |
| `mangrove_trapdoor`                      | -496 |                                                              |
| `mangrove_wall_sign`                     | -495 |                                                              |
| `mangrove_wood`                          | -497 |                                                              |
| `medicine`                               | 600  |                                                              |
| `medium_amethyst_bud`                    | -331 |                                                              |
| `melon_block`                            | 103  |                                                              |
| `melon_seeds`                            | 293  |                                                              |
| `melon_slice`                            | 272  |                                                              |
| `melon_stem`                             | 105  |                                                              |
| `milk_bucket`                            | 361  |                                                              |
| `minecart`                               | 370  |                                                              |
| `mob_spawner`                            | 52   |                                                              |
| `mojang_banner_pattern`                  | 584  |                                                              |
| `monster_egg`                            | 97   |                                                              |
| `mooshroom_spawn_egg`                    | 440  |                                                              |
| `moss_block`                             | -320 |                                                              |
| `moss_carpet`                            | -335 |                                                              |
| `mossy_cobblestone`                      | 48   |                                                              |
| `mossy_cobblestone_stairs`               | -179 |                                                              |
| `mossy_stone_brick_stairs`               | -175 |                                                              |
| `moving_block`                           | 250  |                                                              |
| `mud`                                    | -473 |                                                              |
| `mud_brick_double_slab`                  | -479 |                                                              |
| `mud_brick_slab`                         | -478 |                                                              |
| `mud_brick_stairs`                       | -480 |                                                              |
| `mud_brick_wall`                         | -481 |                                                              |
| `mud_bricks`                             | -475 |                                                              |
| `muddy_mangrove_roots`                   | -483 |                                                              |
| `mule_spawn_egg`                         | 466  |                                                              |
| `mushroom_stew`                          | 260  |                                                              |
| `music_disc_11                           | 544  |                                                              |
| `music_disc_13                           | 534  |                                                              |
| `music_disc_5                            | 637  |                                                              |
| `music_disc_blocks`                      | 536  |                                                              |
| `music_disc_cat`                         | 535  |                                                              |
| `music_disc_chirp`                       | 537  |                                                              |
| `music_disc_far`                         | 538  |                                                              |
| `music_disc_mall`                        | 539  |                                                              |
| `music_disc_mellohi`                     | 540  |                                                              |
| `music_disc_otherside`                   | 627  |                                                              |
| `music_disc_pigstep`                     | 621  |                                                              |
| `music_disc_stal`                        | 541  |                                                              |
| `music_disc_strad`                       | 542  |                                                              |
| `music_disc_wait`                        | 545  |                                                              |
| `music_disc_ward`                        | 543  |                                                              |
| `mutton`                                 | 550  |                                                              |
| `mycelium`                               | 110  |                                                              |
| `name_tag`                               | 548  |                                                              |
| `nautilus_shell`                         | 570  |                                                              |
| `nether_brick`                           | 112  |                                                              |
| `nether_brick_fence`                     | 113  |                                                              |
| `nether_brick_stairs`                    | 114  |                                                              |
| `nether_gold_ore`                        | -288 |                                                              |
| `nether_sprouts`                         | 622  |                                                              |
| `nether_star`                            | 518  |                                                              |
| `nether_wart`                            | 294  |                                                              |
| `nether_wart_block`                      | 214  |                                                              |
| `netherbrick`                            | 523  |                                                              |
| `netherite_axe`                          | 608  |                                                              |
| `netherite_block`                        | -270 |                                                              |
| `netherite_boots`                        | 613  |                                                              |
| `netherite_chestplate`                   | 611  |                                                              |
| `netherite_helmet`                       | 610  |                                                              |
| `netherite_hoe`                          | 609  |                                                              |
| `netherite_ingot`                        | 604  |                                                              |
| `netherite_leggings`                     | 612  |                                                              |
| `netherite_pickaxe`                      | 607  |                                                              |
| `netherite_scrap`                        | 614  |                                                              |
| `netherite_shovel`                       | 606  |                                                              |
| `netherite_sword`                        | 605  |                                                              |
| `netherrack`                             | 87   |                                                              |
| `netherreactor`                          | 247  |                                                              |
| `normal_stone_stairs`                    | -180 |                                                              |
| `noteblock`                              | 25   |                                                              |
| `npc_spawn_egg`                          | 470  |                                                              |
| `oak_boat`                               | 375  |                                                              |
| `oak_chest_boat`                         | 639  |                                                              |
| `oak_sign`                               | 358  |                                                              |
| `oak_stairs`                             | 53   |                                                              |
| `observer`                               | 251  |                                                              |
| `obsidian`                               | 49   |                                                              |
| `ocelot_spawn_egg`                       | 451  |                                                              |
| `ochre_froglight`                        | -471 |                                                              |
| `orange_candle`                          | -414 |                                                              |
| `orange_candle_cake`                     | -431 |                                                              |
| `orange_dye`                             | 409  |                                                              |
| `orange_glazed_terracotta`               | 221  |                                                              |
| `oxidized_copper`                        | -343 |                                                              |
| `oxidized_cut_copper`                    | -350 |                                                              |
| `oxidized_cut_copper_slab`               | -364 |                                                              |
| `oxidized_cut_copper_stairs`             | -357 |                                                              |
| `oxidized_double_cut_copper_slab`        | -371 |                                                              |
| `packed_ice`                             | 174  |                                                              |
| `packed_mud`                             | -477 |                                                              |
| `painting`                               | 357  |                                                              |
| `panda_spawn_egg`                        | 489  |                                                              |
| `paper`                                  | 386  |                                                              |
| `parrot_spawn_egg`                       | 478  |                                                              |
| `pearlescent_froglight`                  | -469 |                                                              |
| `phantom_membrane`                       | 574  |                                                              |
| `phantom_spawn_egg`                      | 486  |                                                              |
| `pig_spawn_egg`                          | 437  |                                                              |
| `piglin_banner_pattern`                  | 587  |                                                              |
| `piglin_brute_spawn_egg`                 | 499  |                                                              |
| `piglin_spawn_egg`                       | 497  |                                                              |
| `pillager_spawn_egg`                     | 491  |                                                              |
| `pink_candle`                            | -419 |                                                              |
| `pink_candle_cake`                       | -436 |                                                              |
| `pink_dye`                               | 404  |                                                              |
| `pink_glazed_terracotta`                 | 226  |                                                              |
| `piston`                                 | 33   |                                                              |
| `piston_arm_collision`                   | 34   |                                                              |
| `planks`                                 | 5    |                                                              |
| `podzol`                                 | 243  |                                                              |
| `pointed_dripstone`                      | -308 |                                                              |
| `poisonous_potato`                       | 282  |                                                              |
| `polar_bear_spawn_egg`                   | 472  |                                                              |
| `polished_andesite_stairs`               | -174 |                                                              |
| `polished_basalt`                        | -235 |                                                              |
| `polished_blackstone`                    | -291 |                                                              |
| `polished_blackstone_brick_double_slab`  | -285 |                                                              |
| `polished_blackstone_brick_slab`         | -284 |                                                              |
| `polished_blackstone_brick_stairs`       | -275 |                                                              |
| `polished_blackstone_brick_wall`         | -278 |                                                              |
| `polished_blackstone_bricks`             | -274 |                                                              |
| `polished_blackstone_button`             | -296 |                                                              |
| `polished_blackstone_double_slab`        | -294 |                                                              |
| `polished_blackstone_pressure_plate`     | -295 |                                                              |
| `polished_blackstone_slab`               | -293 |                                                              |
| `polished_blackstone_stairs`             | -292 |                                                              |
| `polished_blackstone_wall`               | -297 |                                                              |
| `polished_deepslate`                     | -383 |                                                              |
| `polished_deepslate_double_slab`         | -397 |                                                              |
| `polished_deepslate_slab`                | -384 |                                                              |
| `polished_deepslate_stairs`              | -385 |                                                              |
| `polished_deepslate_wall`                | -386 |                                                              |
| `polished_diorite_stairs`                | -173 |                                                              |
| `polished_granite_stairs`                | -172 |                                                              |
| `popped_chorus_fruit`                    | 559  |                                                              |
| `porkchop`                               | 262  |                                                              |
| `portal`                                 | 90   |                                                              |
| `potato`                                 | 280  |                                                              |
| `potatoes`                               | 142  |                                                              |
| `potion`                                 | 426  |                                                              |
| `powder_snow`                            | -306 |                                                              |
| `powder_snow_bucket`                     | 368  |                                                              |
| `powered_comparator`                     | 150  |                                                              |
| `powered_repeater`                       | 94   |                                                              |
| `prismarine`                             | 168  |                                                              |
| `prismarine_bricks_stairs`               | -4   |                                                              |
| `prismarine_crystals`                    | 549  |                                                              |
| `prismarine_shard`                       | 565  |                                                              |
| `prismarine_stairs`                      | -2   |                                                              |
| `pufferfish`                             | 267  |                                                              |
| `pufferfish_bucket`                      | 367  |                                                              |
| `pufferfish_spawn_egg`                   | 481  |                                                              |
| `pumpkin`                                | 86   |                                                              |
| `pumpkin_pie`                            | 284  |                                                              |
| `pumpkin_seeds`                          | 292  |                                                              |
| `pumpkin_stem`                           | 104  |                                                              |
| `purple_candle`                          | -423 |                                                              |
| `purple_candle_cake`                     | -440 |                                                              |
| `purple_dye`                             | 400  |                                                              |
| `purple_glazed_terracotta`               | 219  |                                                              |
| `purpur_block`                           | 201  |                                                              |
| `purpur_stairs`                          | 203  |                                                              |
| `quartz`                                 | 524  |                                                              |
| `quartz_block`                           | 155  |                                                              |
| `quartz_bricks`                          | -304 |                                                              |
| `quartz_ore`                             | 153  |                                                              |
| `quartz_stairs`                          | 156  |                                                              |
| `rabbit`                                 | 288  |                                                              |
| `rabbit_foot`                            | 528  |                                                              |
| `rabbit_hide`                            | 529  |                                                              |
| `rabbit_spawn_egg`                       | 459  |                                                              |
| `rabbit_stew`                            | 290  |                                                              |
| `rail`                                   | 66   |                                                              |
| `rapid_fertilizer`                       | 598  |                                                              |
| `ravager_spawn_egg`                      | 493  |                                                              |
| `raw_copper`                             | 507  |                                                              |
| `raw_copper_block`                       | -452 |                                                              |
| `raw_gold`                               | 506  |                                                              |
| `raw_gold_block`                         | -453 |                                                              |
| `raw_iron`                               | 505  |                                                              |
| `raw_iron_block`                         | -451 |                                                              |
| `recovery_compass`                       | 647  |                                                              |
| `red_candle`                             | -427 |                                                              |
| `red_candle_cake`                        | -444 |                                                              |
| `red_dye`                                | 396  |                                                              |
| `red_flower`                             | 38   |                                                              |
| `red_glazed_terracotta`                  | 234  |                                                              |
| `red_mushroom`                           | 40   |                                                              |
| `red_mushroom_block`                     | 100  |                                                              |
| `red_nether_brick`                       | 215  |                                                              |
| `red_nether_brick_stairs`                | -184 |                                                              |
| `red_sandstone`                          | 179  |                                                              |
| `red_sandstone_stairs`                   | 180  |                                                              |
| `redstone`                               | 373  |                                                              |
| `redstone_block`                         | 152  |                                                              |
| `redstone_lamp`                          | 123  |                                                              |
| `redstone_ore`                           | 73   |                                                              |
| `redstone_torch`                         | 76   |                                                              |
| `redstone_wire`                          | 55   |                                                              |
| `reinforced_deepslate`                   | -466 |                                                              |
| `repeater`                               | 419  |                                                              |
| `repeating_command_block`                | 188  |                                                              |
| `reserved6`                              | 255  |                                                              |
| `respawn_anchor`                         | -272 |                                                              |
| `rotten_flesh`                           | 277  |                                                              |
| `saddle`                                 | 371  |                                                              |
| `salmon`                                 | 265  |                                                              |
| `salmon_bucket`                          | 365  |                                                              |
| `salmon_spawn_egg`                       | 482  |                                                              |
| `sand`                                   | 12   |                                                              |
| `sandstone`                              | 24   |                                                              |
| `sandstone_stairs`                       | 128  |                                                              |
| `sapling`                                | 6    |                                                              |
| `scaffolding`                            | -165 |                                                              |
| `sculk`                                  | -458 |                                                              |
| `sculk_catalyst`                         | -460 |                                                              |
| `sculk_sensor`                           | -307 |                                                              |
| `sculk_shrieker`                         | -461 |                                                              |
| `sculk_vein`                             | -459 |                                                              |
| `scute`                                  | 572  |                                                              |
| `sea_lantern`                            | 169  |                                                              |
| `sea_pickle`                             | -156 |                                                              |
| `seagrass`                               | -130 |                                                              |
| `shears`                                 | 421  |                                                              |
| `sheep_spawn_egg`                        | 438  |                                                              |
| `shield`                                 | 355  |                                                              |
| `shroomlight`                            | -230 |                                                              |
| `shulker_box`                            | 218  |                                                              |
| `shulker_shell`                          | 566  |                                                              |
| `shulker_spawn_egg`                      | 469  |                                                              |
| `silver_glazed_terracotta`               | 228  |                                                              |
| `silverfish_spawn_egg`                   | 443  |                                                              |
| `skeleton_horse_spawn_egg`               | 467  |                                                              |
| `skeleton_spawn_egg`                     | 444  |                                                              |
| `skull`                                  | 516  | 0 = Skeleton<br>1 = Wither<br/>2 = Zombie<br/>3 = Steve<br/>4 = Creeper<br/>5 = Dragon |
| `skull_banner_pattern`                   | 583  |                                                              |
| `slime`                                  | 165  |                                                              |
| `slime_ball`                             | 388  |                                                              |
| `slime_spawn_egg`                        | 445  |                                                              |
| `small_amethyst_bud`                     | -332 |                                                              |
| `small_dripleaf_block`                   | -336 |                                                              |
| `smithing_table`                         | -202 |                                                              |
| `smoker`                                 | -198 |                                                              |
| `smooth_basalt`                          | -377 |                                                              |
| `smooth_quartz_stairs`                   | -185 |                                                              |
| `smooth_red_sandstone_stairs`            | -176 |                                                              |
| `smooth_sandstone_stairs`                | -177 |                                                              |
| `smooth_stone`                           | -183 |                                                              |
| `snow`                                   | 80   |                                                              |
| `snow_layer`                             | 78   |                                                              |
| `snowball`                               | 374  |                                                              |
| `soul_campfire`                          | 623  |                                                              |
| `soul_fire`                              | -237 |                                                              |
| `soul_lantern`                           | -269 |                                                              |
| `soul_sand`                              | 88   |                                                              |
| `soul_soil`                              | -236 |                                                              |
| `soul_torch`                             | -268 |                                                              |
| `sparkler`                               | 601  |                                                              |
| `spawn_egg`                              | 653  |                                                              |
| `spider_eye`                             | 278  |                                                              |
| `spider_spawn_egg`                       | 446  |                                                              |
| `splash_potion`                          | 561  |                                                              |
| `sponge`                                 | 19   |                                                              |
| `spore_blossom`                          | -321 |                                                              |
| `spruce_boat`                            | 378  |                                                              |
| `spruce_button`                          | -144 |                                                              |
| `spruce_chest_boat`                      | 642  |                                                              |
| `spruce_door`                            | 553  |                                                              |
| `spruce_fence_gate`                      | 183  |                                                              |
| `spruce_pressure_plate`                  | -154 |                                                              |
| `spruce_sign`                            | 576  |                                                              |
| `spruce_stairs`                          | 134  |                                                              |
| `spruce_standing_sign`                   | -181 |                                                              |
| `spruce_trapdoor`                        | -149 |                                                              |
| `spruce_wall_sign`                       | -182 |                                                              |
| `spyglass`                               | 626  |                                                              |
| `squid_spawn_egg`                        | 450  |                                                              |
| `stained_glass`                          | 241  |                                                              |
| `stained_glass_pane`                     | 160  |                                                              |
| `stained_hardened_clay`                  | 159  |                                                              |
| `standing_banner`                        | 176  |                                                              |
| `standing_sign`                          | 63   |                                                              |
| `stick`                                  | 320  |                                                              |
| `sticky_piston`                          | 29   |                                                              |
| `sticky_piston_arm_collision`            | -217 |                                                              |
| `stone`                                  | 1    |                                                              |
| `stone_axe`                              | 315  |                                                              |
| `stone_block_slab`                       | 44   |                                                              |
| `stone_block_slab2`                      | 182  |                                                              |
| `stone_block_slab3`                      | -162 |                                                              |
| `stone_block_slab4`                      | -166 |                                                              |
| `stone_brick_stairs`                     | 109  |                                                              |
| `stone_button`                           | 77   |                                                              |
| `stone_hoe`                              | 330  |                                                              |
| `stone_pickaxe`                          | 314  |                                                              |
| `stone_pressure_plate`                   | 70   |                                                              |
| `stone_shovel`                           | 313  |                                                              |
| `stone_stairs`                           | 67   |                                                              |
| `stone_sword`                            | 312  |                                                              |
| `stonebrick`                             | 98   |                                                              |
| `stonecutter`                            | 245  |                                                              |
| `stonecutter_block`                      | -197 |                                                              |
| `stray_spawn_egg`                        | 462  |                                                              |
| `strider_spawn_egg`                      | 495  |                                                              |
| `string`                                 | 326  |                                                              |
| `stripped_acacia_log`                    | -8   |                                                              |
| `stripped_birch_log`                     | -6   |                                                              |
| `stripped_crimson_hyphae`                | -300 |                                                              |
| `stripped_crimson_stem`                  | -240 |                                                              |
| `stripped_dark_oak_log`                  | -9   |                                                              |
| `stripped_jungle_log`                    | -7   |                                                              |
| `stripped_mangrove_log`                  | -485 |                                                              |
| `stripped_mangrove_wood`                 | -498 |                                                              |
| `stripped_oak_log`                       | -10  |                                                              |
| `stripped_spruce_log`                    | -5   |                                                              |
| `stripped_warped_hyphae`                 | -301 |                                                              |
| `stripped_warped_stem`                   | -241 |                                                              |
| `structure_block`                        | 252  |                                                              |
| `structure_void`                         | 217  |                                                              |
| `sugar`                                  | 416  |                                                              |
| `sugar_cane`                             | 385  |                                                              |
| `suspicious_stew`                        | 590  |                                                              |
| `sweet_berries`                          | 287  |                                                              |
| `sweet_berry_bush`                       | -207 |                                                              |
| `tadpole_bucket`                         | 631  |                                                              |
| `tadpole_spawn_egg`                      | 630  |                                                              |
| `tallgrass`                              | 31   |                                                              |
| `target`                                 | -239 |                                                              |
| `tinted_glass`                           | -334 |                                                              |
| `tnt`                                    | 46   |                                                              |
| `tnt_minecart`                           | 525  |                                                              |
| `torch`                                  | 50   |                                                              |
| `totem_of_undying`                       | 568  |                                                              |
| `trader_llama_spawn_egg`                 | 649  |                                                              |
| `trapdoor`                               | 96   |                                                              |
| `trapped_chest`                          | 146  |                                                              |
| `trident`                                | 546  |                                                              |
| `trip_wire`                              | 132  |                                                              |
| `tripwire_hook`                          | 131  |                                                              |
| `tropical_fish`                          | 266  |                                                              |
| `tropical_fish_bucket`                   | 366  |                                                              |
| `tropical_fish_spawn_egg`                | 479  |                                                              |
| `tuff`                                   | -333 |                                                              |
| `turtle_egg`                             | -159 |                                                              |
| `turtle_helmet`                          | 573  |                                                              |
| `turtle_spawn_egg`                       | 485  |                                                              |
| `twisting_vines`                         | -287 |                                                              |
| `underwater_torch`                       | 239  |                                                              |
| `undyed_shulker_box`                     | 205  |                                                              |
| `unknown`                                | -305 |                                                              |
| `unlit_redstone_torch`                   | 75   |                                                              |
| `unpowered_comparator`                   | 149  |                                                              |
| `unpowered_repeater`                     | 93   |                                                              |
| `verdant_froglight`                      | -470 |                                                              |
| `vex_spawn_egg`                          | 476  |                                                              |
| `villager_spawn_egg`                     | 449  |                                                              |
| `vindicator_spawn_egg`                   | 474  |                                                              |
| `vine`                                   | 106  |                                                              |
| `wall_banner`                            | 177  |                                                              |
| `wall_sign`                              | 68   |                                                              |
| `wandering_trader_spawn_egg`             | 492  |                                                              |
| `warden_spawn_egg`                       | 633  |                                                              |
| `warped_button`                          | -261 |                                                              |
| `warped_door`                            | 618  |                                                              |
| `warped_double_slab`                     | -267 |                                                              |
| `warped_fence`                           | -257 |                                                              |
| `warped_fence_gate`                      | -259 |                                                              |
| `warped_fungus`                          | -229 |                                                              |
| `warped_fungus_on_a_stick`               | 619  |                                                              |
| `warped_hyphae`                          | -298 |                                                              |
| `warped_nylium`                          | -233 |                                                              |
| `warped_planks`                          | -243 |                                                              |
| `warped_pressure_plate`                  | -263 |                                                              |
| `warped_roots`                           | -224 |                                                              |
| `warped_sign`                            | 616  |                                                              |
| `warped_slab`                            | -265 |                                                              |
| `warped_stairs`                          | -255 |                                                              |
| `warped_standing_sign`                   | -251 |                                                              |
| `warped_stem`                            | -226 |                                                              |
| `warped_trapdoor`                        | -247 |                                                              |
| `warped_wall_sign`                       | -253 |                                                              |
| `warped_wart_block`                      | -227 |                                                              |
| `water`                                  | 9    |                                                              |
| `water_bucket`                           | 362  |                                                              |
| `waterlily`                              | 111  |                                                              |
| `waxed_copper`                           | -344 |                                                              |
| `waxed_cut_copper`                       | -351 |                                                              |
| `waxed_cut_copper_slab`                  | -365 |                                                              |
| `waxed_cut_copper_stairs`                | -358 |                                                              |
| `waxed_double_cut_copper_slab`           | -372 |                                                              |
| `waxed_exposed_copper`                   | -345 |                                                              |
| `waxed_exposed_cut_copper`               | -352 |                                                              |
| `waxed_exposed_cut_copper_slab`          | -366 |                                                              |
| `waxed_exposed_cut_copper_stairs`        | -359 |                                                              |
| `waxed_exposed_double_cut_copper_slab`   | -373 |                                                              |
| `waxed_oxidized_copper`                  | -446 |                                                              |
| `waxed_oxidized_cut_copper`              | -447 |                                                              |
| `waxed_oxidized_cut_copper_slab`         | -449 |                                                              |
| `waxed_oxidized_cut_copper_stairs`       | -448 |                                                              |
| `waxed_oxidized_double_cut_copper_slab`  | -450 |                                                              |
| `waxed_weathered_copper`                 | -346 |                                                              |
| `waxed_weathered_cut_copper`             | -353 |                                                              |
| `waxed_weathered_cut_copper_slab`        | -367 |                                                              |
| `waxed_weathered_cut_copper_stairs`      | -360 |                                                              |
| `waxed_weathered_double_cut_copper_slab` | -374 |                                                              |
| `weathered_copper`                       | -342 |                                                              |
| `weathered_cut_copper`                   | -349 |                                                              |
| `weathered_cut_copper_slab`              | -363 |                                                              |
| `weathered_cut_copper_stairs`            | -356 |                                                              |
| `weathered_double_cut_copper_slab`       | -370 |                                                              |
| `web`                                    | 30   |                                                              |
| `weeping_vines`                          | -231 |                                                              |
| `wheat`                                  | 334  |                                                              |
| `wheat_seeds`                            | 291  |                                                              |
| `white_candle`                           | -413 |                                                              |
| `white_candle_cake`                      | -430 |                                                              |
| `white_dye`                              | 410  |                                                              |
| `white_glazed_terracotta`                | 220  |                                                              |
| `witch_spawn_egg`                        | 452  |                                                              |
| `wither_rose`                            | -216 |                                                              |
| `wither_skeleton_spawn_egg`              | 464  |                                                              |
| `wolf_spawn_egg`                         | 439  |                                                              |
| `wood`                                   | -212 |                                                              |
| `wooden_axe`                             | 311  |                                                              |
| `wooden_button`                          | 143  |                                                              |
| `wooden_door`                            | 359  |                                                              |
| `wooden_hoe`                             | 329  |                                                              |
| `wooden_pickaxe`                         | 310  |                                                              |
| `wooden_pressure_plate`                  | 72   |                                                              |
| `wooden_shovel`                          | 309  |                                                              |
| `wooden_slab`                            | 158  |                                                              |
| `wooden_sword`                           | 308  |                                                              |
| `wool`                                   | 35   |                                                              |
| `writable_book`                          | 510  |                                                              |
| `written_book`                           | 511  |                                                              |
| `yellow_candle`                          | -417 |                                                              |
| `yellow_candle_cake`                     | -434 |                                                              |
| `yellow_dye`                             | 406  |                                                              |
| `yellow_flower`                          | 37   |                                                              |
| `yellow_glazed_terracotta`               | 224  |                                                              |
| `zoglin_spawn_egg`                       | 498  |                                                              |
| `zombie_horse_spawn_egg`                 | 468  |                                                              |
| `zombie_pigman_spawn_egg`                | 448  |                                                              |
| `zombie_spawn_egg`                       | 447  |                                                              |
| `zombie_villager_spawn_egg`              | 477  |                                                              |

## 几何

### 方块

| 名称             | 类型   | 默认值    | 描述                                             |
| ---------------- | ------ | --------- | ------------------------------------------------ |
| `format_version` | 字符串 | `0.0.0.0` | 该方块几何使用的版本。这用于确定是否需要向后兼容 |
| `parent`         | 字符串 |           | 该模型的父模型                                   |
| `materials`      | 列表   | `#0`      | 该模型使用的材质列表                             |
| `elements`       | 列表   |           | 构成该方块的几何的元素列表                       |

#### `elements`

| 名称       | 类型             | 默认值              | 描述                                                         |
| ---------- | ---------------- | ------------------- | ------------------------------------------------------------ |
| `name`     | 字符串           |                     | 元素的名称                                                   |
| `parent`   | 字符串           |                     | 该元素的父元素的名称。该元素的轴心点和立方体的位置都是相对于父元素的轴心点计算的 |
| `rotation` | 向量 `[a, b, c]` | `[ 0.0, 0.0, 0.0 ]` | 该元素围绕它的轴心点的旋转角                                 |
| `pivot`    | 向量 `[a, b, c]` | `[ 0.0, 0.0, 0.0 ]` | 该元素的轴心点在模型空间中的位置。这用于作为该元素的“中心”位置，以及旋转时要围绕的那个点 |
| `material` | 字符串           |                     | 如果该元素使用的材质与其所属的方块使用的材质不同，在这里指定该元素使用的材质 |
| `boxes`    | 列表             |                     | 构成该元素的几何的立方体列表                                 |

##### `boxes`

| 名称       | 类型             | 默认值              | 描述                                                         |
| ---------- | ---------------- | ------------------- | ------------------------------------------------------------ |
| `origin`   | 向量 `[a, b, c]` | `[ 0.0, 0.0, 0.0 ]` | 相对于整个几何的该立方体的中心位置                           |
| `size`     | 向量 `[a, b, c]` | `[ 0, 0, 0 ]`       | 该立方体在x、y和z坐标上的缩放。最典型的方块的缩放是`1,1,1`   |
| `material` | 字符串           |                     | 如果该立方体使用的材质与其所属的元素使用的材质不同，在这里指定该立方体使用的材质 |
| `faces`    | 列表             |                     | 该立方体的六个面的列表。如果指定，就**必须**写全6个面（顺序为前面、后面、左侧面、右侧面、上面、下面） |

###### `faces`

| 名称       | 类型                | 默认值                   | 描述                                                         |
| ---------- | ------------------- | ------------------------ | ------------------------------------------------------------ |
| `material` | 字符串              |                          | 如果该面使用的材质与其所属的立方体使用的材质不同，在这里指定该面使用的材质 |
| `uv`       | 向量 `[a, b, c, d]` | `[ 0.0, 0.0, 1.0, 1.0 ]` | 该面的纹理坐标，给定顺序为最小x坐标、最小y坐标、最大x坐标、最大y坐标，值在`0.0`到`1.0`之间 |
| `rotation` | 小数                | `0.0`                    | 该面的的UV旋转角度。只接受0、90和270度。这允许你复用同一个纹理并仅通过旋转将其应用到不同的面上 |
