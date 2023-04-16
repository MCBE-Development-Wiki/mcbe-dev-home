import{_ as o,M as e,p as h,q as g,N as a,W as t,R as s,t as n,S as r}from"./framework-8c007374.js";const j={},d=r('<h1 id="方块客户端定义文件" tabindex="-1"><a class="header-anchor" href="#方块客户端定义文件" aria-hidden="true">#</a> 方块客户端定义文件</h1><p><a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0;" src="https://mirrors.creativecommons.org/presskit/buttons/80x15/svg/by-nc-sa.svg"></a></p><p><strong>方块客户端定义文件</strong>（<strong>Block Client Definition File</strong>），又称<strong>方块图形定义文件</strong>（<strong>Block Graphics Definition File</strong>），用于定义各方块的客户端属性，位于资源包的根目录，文件名硬编码为<code>blocks.json</code>。</p><div class="treeview"><ul><li><span class="sprite" style="background-image:url(https://wiki.mcbe-dev.net/w/images/9/92/FileCSS.png?format=original);background-position:-112px -128px;background-size:128px auto;height:16px;width:16px;"></span> <code>rp</code> 资源包<ul><li><span class="sprite" style="background-image:url(https://wiki.mcbe-dev.net/w/images/9/92/FileCSS.png?format=original);background-position:-0px -80px;background-size:128px auto;height:16px;width:16px;"></span> <code>blocks.json</code></li></ul></li></ul></div><h2 id="版本化" tabindex="-1"><a class="header-anchor" href="#版本化" aria-hidden="true">#</a> 版本化</h2><p>方块客户端定义文件由格式版本控制。当前引擎内只有一种模式格式，任意格式版本都将共享该种模式。</p><h2 id="模式" tabindex="-1"><a class="header-anchor" href="#模式" aria-hidden="true">#</a> 模式</h2>',7),m=s("div",{class:"language-schema line-numbers-mode","data-ext":"schema"},[s("pre",{class:"language-schema"},[s("code",null,[s("span",{class:"hljs-strong"},"object"),n(`
{
    `),s("span",{class:"hljs-strong"},"semver"),n(),s("span",{class:"hljs-string"},'"format_version"'),n(),s("span",{class:"hljs-comment"},"// 该文件的格式版本，不支持`*`"),n(`
    `),s("span",{class:"hljs-strong"},"object"),n(),s("span",{class:"hljs-string"},'"<block name>"'),n(),s("span",{class:"hljs-comment"},"// 一个方块的图形设置，键名接受一个赋命名空间标识符作为方块名，原版方块的方块名中可以省略`minecraft:`"),n(`
    {
        `),s("span",{class:"hljs-strong"},"textures"),n(),s("span",{class:"hljs-string"},'"textures"'),n(),s("span",{class:"hljs-comment"},"// 该方块各面所采用的纹理在地形图集中的图块索引名，默认应用`missing_tile`"),n(`
        `),s("span",{class:"hljs-strong"},"textures"),n(),s("span",{class:"hljs-string"},'"carried_textures"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(),s("span",{class:"hljs-comment"},"// 该方块手持状态下各面所采用的纹理在地形图集中的图块索引名，默认应用`textures`所定义的纹理"),n(`
        `),s("span",{class:"hljs-strong"},"texture_isotropic"),n(),s("span",{class:"hljs-string"},'"isotropic"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(),s("span",{class:"hljs-comment"},"// 设置该方块的迷向性"),n(`
        `),s("span",{class:"hljs-strong"},"enumerated_value"),n(),s("span",{class:"hljs-string"},'"blockshape"'),n("<"),s("span",{class:"hljs-string"},'"invisible"'),n(", "),s("span",{class:"hljs-string"},'"block"'),n(", "),s("span",{class:"hljs-string"},'"cross_texture"'),n(", "),s("span",{class:"hljs-string"},'"torch"'),n(", "),s("span",{class:"hljs-string"},'"fire"'),n(", "),s("span",{class:"hljs-string"},'"water"'),n(", "),s("span",{class:"hljs-string"},'"red_dust"'),n(", "),s("span",{class:"hljs-string"},'"rows"'),n(", "),s("span",{class:"hljs-string"},'"door"'),n(", "),s("span",{class:"hljs-string"},'"ladder"'),n(", "),s("span",{class:"hljs-string"},'"rail"'),n(", "),s("span",{class:"hljs-string"},'"stairs"'),n(", "),s("span",{class:"hljs-string"},'"fence"'),n(", "),s("span",{class:"hljs-string"},'"lever"'),n(", "),s("span",{class:"hljs-string"},'"cactus"'),n(", "),s("span",{class:"hljs-string"},'"bed"'),n(", "),s("span",{class:"hljs-string"},'"diode"'),n(", "),s("span",{class:"hljs-string"},'"iron_fence"'),n(", "),s("span",{class:"hljs-string"},'"stem"'),n(", "),s("span",{class:"hljs-string"},'"vine"'),n(", "),s("span",{class:"hljs-string"},'"fence_gate"'),n(", "),s("span",{class:"hljs-string"},'"chest"'),n(", "),s("span",{class:"hljs-string"},'"lilypad"'),n(", "),s("span",{class:"hljs-string"},'"brewing_stand"'),n(", "),s("span",{class:"hljs-string"},'"portal_frame"'),n(", "),s("span",{class:"hljs-string"},'"cocoa"'),n(", "),s("span",{class:"hljs-string"},'"tree"'),n(", "),s("span",{class:"hljs-string"},'"cobblestone_wall"'),n(", "),s("span",{class:"hljs-string"},'"double_plant"'),n(", "),s("span",{class:"hljs-string"},'"flower_pot"'),n(", "),s("span",{class:"hljs-string"},'"anvil"'),n(", "),s("span",{class:"hljs-string"},'"dragon_egg"'),n(", "),s("span",{class:"hljs-string"},'"structure_void"'),n(", "),s("span",{class:"hljs-string"},'"block_half"'),n(", "),s("span",{class:"hljs-string"},'"top_snow"'),n(", "),s("span",{class:"hljs-string"},'"tripwire"'),n(", "),s("span",{class:"hljs-string"},'"tripwire_hook"'),n(", "),s("span",{class:"hljs-string"},'"cauldron"'),n(", "),s("span",{class:"hljs-string"},'"repeater"'),n(", "),s("span",{class:"hljs-string"},'"comparator"'),n(", "),s("span",{class:"hljs-string"},'"hopper"'),n(", "),s("span",{class:"hljs-string"},'"slime_block"'),n(", "),s("span",{class:"hljs-string"},'"piston"'),n(", "),s("span",{class:"hljs-string"},'"beacon"'),n(", "),s("span",{class:"hljs-string"},'"chorus_plant"'),n(", "),s("span",{class:"hljs-string"},'"chorus_flower"'),n(", "),s("span",{class:"hljs-string"},'"end_portal"'),n(", "),s("span",{class:"hljs-string"},'"end_rod"'),n(", "),s("span",{class:"hljs-string"},'"skull"'),n(", "),s("span",{class:"hljs-string"},'"facing_block"'),n(", "),s("span",{class:"hljs-string"},'"command_block"'),n(", "),s("span",{class:"hljs-string"},'"terracotta"'),n(", "),s("span",{class:"hljs-string"},'"double_side_fence"'),n(", "),s("span",{class:"hljs-string"},'"frame"'),n(", "),s("span",{class:"hljs-string"},'"shulker_box"'),n(", "),s("span",{class:"hljs-string"},'"doublesided_cross_texture"'),n(", "),s("span",{class:"hljs-string"},'"doublesided_double_plant"'),n(", "),s("span",{class:"hljs-string"},'"doublesided_rows"'),n(", "),s("span",{class:"hljs-string"},'"element_block"'),n(", "),s("span",{class:"hljs-string"},'"chemistry_table"'),n(", "),s("span",{class:"hljs-string"},'"glow_stick"'),n(", "),s("span",{class:"hljs-string"},'"coral_fan"'),n(", "),s("span",{class:"hljs-string"},'"seagrass"'),n(", "),s("span",{class:"hljs-string"},'"kelp"'),n(", "),s("span",{class:"hljs-string"},'"trapdoor"'),n(", "),s("span",{class:"hljs-string"},'"sea_pickle"'),n(", "),s("span",{class:"hljs-string"},'"conduit"'),n(", "),s("span",{class:"hljs-string"},'"turtle_egg"'),n(", "),s("span",{class:"hljs-string"},'"bubble_column"'),n(", "),s("span",{class:"hljs-string"},'"barrier"'),n(", "),s("span",{class:"hljs-string"},'"camera_facing_sprite"'),n(", "),s("span",{class:"hljs-string"},'"sign"'),n(", "),s("span",{class:"hljs-string"},'"bamboo"'),n(", "),s("span",{class:"hljs-string"},'"bamboo_sapling"'),n(", "),s("span",{class:"hljs-string"},'"scaffolding"'),n(", "),s("span",{class:"hljs-string"},'"grindstone"'),n(", "),s("span",{class:"hljs-string"},'"bell"'),n(", "),s("span",{class:"hljs-string"},'"lantern"'),n(", "),s("span",{class:"hljs-string"},'"campfire"'),n(", "),s("span",{class:"hljs-string"},'"lectern"'),n(", "),s("span",{class:"hljs-string"},'"sweet_berry_bush"'),n(", "),s("span",{class:"hljs-string"},'"cartography_table"'),n(", "),s("span",{class:"hljs-string"},'"stonecutter_block"'),n(", "),s("span",{class:"hljs-string"},'"chain"'),n(", "),s("span",{class:"hljs-string"},'"sculk_sensor"'),n(", "),s("span",{class:"hljs-string"},'"azalea"'),n(", "),s("span",{class:"hljs-string"},'"flowering_azalea"'),n(", "),s("span",{class:"hljs-string"},'"glow_frame"'),n(", "),s("span",{class:"hljs-string"},'"glow_lichen"'),n(", "),s("span",{class:"hljs-string"},'"sculk_vein"'),n(", "),s("span",{class:"hljs-string"},'"sculk_shrieker"'),n(", "),s("span",{class:"hljs-string"},'"micro_block"'),n(", "),s("span",{class:"hljs-string"},'"netease_block_actor"'),n("> : "),s("span",{class:"hljs-literal"},"opt"),n(),s("span",{class:"hljs-comment"},"// 该方块的方块形状，国际版暂时只能设置在原版方块上，中国版可以设置在所有自定义方块上，默认为`block`，其中`micro_block`和`netease_block_actor`仅中国版支持"),n(`
        `),s("span",{class:"hljs-strong"},"float"),n(),s("span",{class:"hljs-string"},'"brightness_gamma"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(),s("span",{class:"hljs-comment"},"// 亮度伽马值，默认为`0.0`"),n(`
        `),s("span",{class:"hljs-strong"},"enumerated_value"),n(),s("span",{class:"hljs-string"},'"sound"'),n("<"),s("span",{class:"hljs-string"},'"normal"'),n(", "),s("span",{class:"hljs-string"},'"gravel"'),n(", "),s("span",{class:"hljs-string"},'"wood"'),n(", "),s("span",{class:"hljs-string"},'"grass"'),n(", "),s("span",{class:"hljs-string"},'"metal"'),n(", "),s("span",{class:"hljs-string"},'"stone"'),n(", "),s("span",{class:"hljs-string"},'"cloth"'),n(", "),s("span",{class:"hljs-string"},'"glass"'),n(", "),s("span",{class:"hljs-string"},'"sand"'),n(", "),s("span",{class:"hljs-string"},'"snow"'),n(", "),s("span",{class:"hljs-string"},'"ladder"'),n(", "),s("span",{class:"hljs-string"},'"anvil"'),n(", "),s("span",{class:"hljs-string"},'"slime"'),n(", "),s("span",{class:"hljs-string"},'"silent"'),n(", "),s("span",{class:"hljs-string"},'"itemframe"'),n(", "),s("span",{class:"hljs-string"},'"turtle_egg"'),n(", "),s("span",{class:"hljs-string"},'"bamboo"'),n(", "),s("span",{class:"hljs-string"},'"bamboo_sapling"'),n(", "),s("span",{class:"hljs-string"},'"lantern"'),n(", "),s("span",{class:"hljs-string"},'"scaffolding"'),n(", "),s("span",{class:"hljs-string"},'"sweet_berry_bush"'),n(", "),s("span",{class:"hljs-string"},'"soul_sand"'),n(", "),s("span",{class:"hljs-string"},'"soul_soil"'),n(", "),s("span",{class:"hljs-string"},'"nylium"'),n(", "),s("span",{class:"hljs-string"},'"roots"'),n(", "),s("span",{class:"hljs-string"},'"fungus"'),n(", "),s("span",{class:"hljs-string"},'"stem"'),n(", "),s("span",{class:"hljs-string"},'"shroomlight"'),n(", "),s("span",{class:"hljs-string"},'"basalt"'),n(", "),s("span",{class:"hljs-string"},'"bone_block"'),n(", "),s("span",{class:"hljs-string"},'"nether_brick"'),n(", "),s("span",{class:"hljs-string"},'"netherrack"'),n(", "),s("span",{class:"hljs-string"},'"nether_sprouts"'),n(", "),s("span",{class:"hljs-string"},'"nether_wart"'),n(", "),s("span",{class:"hljs-string"},'"nether_gold_ore"'),n(", "),s("span",{class:"hljs-string"},'"ancient_debris"'),n(", "),s("span",{class:"hljs-string"},'"honey_block"'),n(", "),s("span",{class:"hljs-string"},'"honeycomb_block"'),n(", "),s("span",{class:"hljs-string"},'"coral"'),n(", "),s("span",{class:"hljs-string"},'"netherite"'),n(", "),s("span",{class:"hljs-string"},'"lodestone"'),n(", "),s("span",{class:"hljs-string"},'"chain"'),n(", "),s("span",{class:"hljs-string"},'"vines"'),n(", "),s("span",{class:"hljs-string"},'"powder_snow"'),n(", "),s("span",{class:"hljs-string"},'"sculk_sensor"'),n(", "),s("span",{class:"hljs-string"},'"dripstone_block"'),n(", "),s("span",{class:"hljs-string"},'"spore_blossom"'),n(", "),s("span",{class:"hljs-string"},'"azalea"'),n(", "),s("span",{class:"hljs-string"},'"azalea_leaves"'),n(", "),s("span",{class:"hljs-string"},'"copper"'),n(", "),s("span",{class:"hljs-string"},'"big_dripleaf"'),n(", "),s("span",{class:"hljs-string"},'"pointed_dripstone"'),n(", "),s("span",{class:"hljs-string"},'"cave_vines"'),n(", "),s("span",{class:"hljs-string"},'"hanging_roots"'),n(", "),s("span",{class:"hljs-string"},'"moss_block"'),n(", "),s("span",{class:"hljs-string"},'"moss_carpet"'),n(", "),s("span",{class:"hljs-string"},'"deepslate"'),n(", "),s("span",{class:"hljs-string"},'"deepslate_bricks"'),n(", "),s("span",{class:"hljs-string"},'"amethyst_block"'),n(", "),s("span",{class:"hljs-string"},'"amethyst_cluster"'),n(", "),s("span",{class:"hljs-string"},'"large_amethyst_bud"'),n(", "),s("span",{class:"hljs-string"},'"medium_amethyst_bud"'),n(", "),s("span",{class:"hljs-string"},'"small_amethyst_bud"'),n(", "),s("span",{class:"hljs-string"},'"tuff"'),n(", "),s("span",{class:"hljs-string"},'"calcite"'),n(", "),s("span",{class:"hljs-string"},'"candle"'),n(", "),s("span",{class:"hljs-string"},'"comparator"'),n(", "),s("span",{class:"hljs-string"},'"sculk"'),n(", "),s("span",{class:"hljs-string"},'"sculk_catalyst"'),n(", "),s("span",{class:"hljs-string"},'"sculk_shrieker"'),n(", "),s("span",{class:"hljs-string"},'"sculk_vein"'),n(", "),s("span",{class:"hljs-string"},'"froglight"'),n(", "),s("span",{class:"hljs-string"},'"frog_spawn"'),n(", "),s("span",{class:"hljs-string"},'"mud"'),n(", "),s("span",{class:"hljs-string"},'"packed_mud"'),n(", "),s("span",{class:"hljs-string"},'"mud_bricks"'),n(", "),s("span",{class:"hljs-string"},'"mangrove_roots"'),n(", "),s("span",{class:"hljs-string"},'"muddy_mangrove_roots"'),n(", "),s("span",{class:"hljs-string"},'"default"'),n(", "),s("span",{class:"hljs-string"},'"undefined"'),n("> : "),s("span",{class:"hljs-literal"},"opt"),n(),s("span",{class:"hljs-comment"},"// 该方块的声音类型，默认为`normal`"),n(`
        `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"netease_model"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(),s("span",{class:"hljs-comment"},"// 该方块的自定义方块模型的赋命名空间标识符，仅中国版支持"),n(`
        `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"model_textures"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(),s("span",{class:"hljs-comment"},"// 该方块的自定义方块模型使用的纹理，仅当`netease_model`和`model_item_texture`存在时解析，仅中国版支持"),n(`
        `),s("span",{class:"hljs-strong"},"array"),n(),s("span",{class:"hljs-string"},'"model_textures"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(),s("span",{class:"hljs-comment"},"// 该方块的自定义方块模型使用的所有纹理，仅当`netease_model`存在时解析，仅中国版支持"),n(`
        {
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"<any array element>"'),n(`
        }
        `),s("span",{class:"hljs-strong"},"array"),n(),s("span",{class:"hljs-string"},'"model_textures_descriptions"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(),s("span",{class:"hljs-comment"},"// 该方块的自定义方块模型使用的纹理的实际分辨率，顺序应与`model_textures`中的顺序一致，仅当`netease_model`、`model_textures`和`model_item_texture`存在时解析，仅中国版支持"),n(`
        `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"model_item_texture"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(),s("span",{class:"hljs-comment"},"// 该方块使用自定义方块模型后以物品形态手持使用的纹理，填写一个地形图集中的图块索引名，仅当`netease_model`和`model_textures`存在时解析，仅中国版支持"),n(`
        `),s("span",{class:"hljs-strong"},"object"),n(),s("span",{class:"hljs-string"},'"client_entity"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(),s("span",{class:"hljs-comment"},"// 该方块的自定义方块实体，仅中国版支持"),n(`
        {
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"identifier"'),n(),s("span",{class:"hljs-comment"},"// 方块实体所使用的客户端实体的赋命名空间标识符"),n(`
            `),s("span",{class:"hljs-strong"},"bool"),n(),s("span",{class:"hljs-string"},'"hand_model_use_client_entity"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(),s("span",{class:"hljs-comment"},"// 手持模型是否使用客户端实体模型进行渲染"),n(`
            `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"block_icon"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(),s("span",{class:"hljs-comment"},"// 该方块使用自定义方块实体后作为物品形式时在UI中的图标使用的纹理，填写一个地形图集中的图块索引名，仅当`hand_model_use_client_entity`存在时解析"),n(`
            `),s("span",{class:"hljs-strong"},"bool"),n(),s("span",{class:"hljs-string"},'"destoryed_textures"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(),s("span",{class:"hljs-comment"},"// 该方块被破坏时粒子采用的纹理"),n(`
        }
        `),s("span",{class:"hljs-strong"},"object"),n(),s("span",{class:"hljs-string"},'"netease_particle_effects"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(),s("span",{class:"hljs-comment"},"// 挂接在该方块的自定义方块实体上的粒子特效，仅中国版支持"),n(`
        {
            `),s("span",{class:"hljs-strong"},"object"),n(),s("span",{class:"hljs-string"},'"<friendly name>"'),n(),s("span",{class:"hljs-comment"},"// 一个粒子特效，键名填写用于引用该粒子的短名称"),n(`
            {
                `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"path"'),n(),s("span",{class:"hljs-comment"},"// 粒子定义文件相对于资源包根目录的路径，需要带有`.json`扩展名"),n(`
                `),s("span",{class:"hljs-strong"},"array"),n(),s("span",{class:"hljs-string"},'"pos"'),n("["),s("span",{class:"hljs-number"},"3"),n("] "),s("span",{class:"hljs-comment"},"// 粒子挂接的位置，相对于实体模型空间原点"),n(`
                {
                    `),s("span",{class:"hljs-strong"},"int"),n(),s("span",{class:"hljs-string"},'"[0..0]"'),n(),s("span",{class:"hljs-comment"},"// X坐标"),n(`
                    `),s("span",{class:"hljs-strong"},"int"),n(),s("span",{class:"hljs-string"},'"[1..1]"'),n(),s("span",{class:"hljs-comment"},"// Y坐标"),n(`
                    `),s("span",{class:"hljs-strong"},"int"),n(),s("span",{class:"hljs-string"},'"[2..2]"'),n(),s("span",{class:"hljs-comment"},"// Z坐标"),n(`
                }
            }
        }
        `),s("span",{class:"hljs-strong"},"object"),n(),s("span",{class:"hljs-string"},'"netease_frame_effects"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(),s("span",{class:"hljs-comment"},"// 挂接在该方块的自定义方块实体上的序列帧特效，仅中国版支持"),n(`
        {
            `),s("span",{class:"hljs-strong"},"object"),n(),s("span",{class:"hljs-string"},'"<friendly name>"'),n(),s("span",{class:"hljs-comment"},"// 一个序列帧特效，键名填写用于引用该序列帧的短名称"),n(`
            {
                `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"path"'),n(),s("span",{class:"hljs-comment"},"// 序列帧纹理或定义文件相对于资源包根目录的路径，由Texture Packer导出的纹理不需要后缀名，由我的世界开发工作台导出的JSON文件需要带有`.json`扩展名"),n(`
                `),s("span",{class:"hljs-strong"},"array"),n(),s("span",{class:"hljs-string"},'"pos"'),n("["),s("span",{class:"hljs-number"},"3"),n("] "),s("span",{class:"hljs-comment"},"// 序列帧挂接的位置，相对于实体模型空间原点"),n(`
                {
                    `),s("span",{class:"hljs-strong"},"int"),n(),s("span",{class:"hljs-string"},'"[0..0]"'),n(),s("span",{class:"hljs-comment"},"// X坐标"),n(`
                    `),s("span",{class:"hljs-strong"},"int"),n(),s("span",{class:"hljs-string"},'"[1..1]"'),n(),s("span",{class:"hljs-comment"},"// Y坐标"),n(`
                    `),s("span",{class:"hljs-strong"},"int"),n(),s("span",{class:"hljs-string"},'"[2..2]"'),n(),s("span",{class:"hljs-comment"},"// Z坐标"),n(`
                }
            }
        }
        `),s("span",{class:"hljs-strong"},"string"),n(),s("span",{class:"hljs-string"},'"use_colormap"'),n(" : "),s("span",{class:"hljs-literal"},"opt"),n(),s("span",{class:"hljs-comment"},"// 该方块使用的颜色图纹理相对于资源包根目录的路径，无需扩展名，只有在没有定义方块实体时才被解析"),n(`
    }
}
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),u=r(`<h3 id="semver" tabindex="-1"><a class="header-anchor" href="#semver" aria-hidden="true">#</a> <code>semver</code></h3><div class="language-schema line-numbers-mode" data-ext="schema"><pre class="language-schema"><code><span class="hljs-strong">string</span> &lt;<span class="hljs-string">&quot;*&quot;</span>, <span class="hljs-regexp">/^(0|[1-9][0-9]*)(\\.(0|[1-9][0-9]*)(\\.(0|[1-9][0-9]*)(?:\\-((?:(?:(?:(?:0[0-9]*[A-Za-z-])|[1-9A-Za-z-])[0-9A-Za-z-]*)|0)(?:\\.(?:(?:(?:(?:0[0-9]*[A-Za-z-])|[1-9A-Za-z-])[0-9A-Za-z-]*)|0))*))?(?:\\+([0-9A-Za-z-]+(?:\\.[0-9A-Za-z-]+)*))?)?)?/</span>&gt;
<span class="hljs-strong">array</span> [<span class="hljs-number">3</span>]
{
    <span class="hljs-strong">int</span> <span class="hljs-string">&quot;[0..0]&quot;</span>&lt;<span class="hljs-number">0</span>-<span class="hljs-number">*</span>&gt; <span class="hljs-comment">// 主版本号</span>
    <span class="hljs-strong">int</span> <span class="hljs-string">&quot;[1..1]&quot;</span>&lt;<span class="hljs-number">0</span>-<span class="hljs-number">*</span>&gt; <span class="hljs-comment">// 次版本号</span>
    <span class="hljs-strong">int</span> <span class="hljs-string">&quot;[2..2]&quot;</span>&lt;<span class="hljs-number">0</span>-<span class="hljs-number">*</span>&gt; <span class="hljs-comment">// 修订版本号</span>
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="textures" tabindex="-1"><a class="header-anchor" href="#textures" aria-hidden="true">#</a> <code>textures</code></h3><div class="language-schema line-numbers-mode" data-ext="schema"><pre class="language-schema"><code><span class="hljs-strong">string</span> <span class="hljs-comment">// 各面都会应用同一个纹理</span>
<span class="hljs-strong">object</span> <span class="hljs-comment">// 三面式解析</span>
{
    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;up&quot;</span> <span class="hljs-comment">// 上面</span>
    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;down&quot;</span> <span class="hljs-comment">// 下面</span>
    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;side&quot;</span> <span class="hljs-comment">// 四个侧面</span>
}
<span class="hljs-strong">object</span> <span class="hljs-comment">// 六面式解析</span>
{
    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;up&quot;</span> <span class="hljs-comment">// 上面</span>
    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;down&quot;</span> <span class="hljs-comment">// 下面</span>
    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;north&quot;</span> <span class="hljs-comment">// 北面</span>
    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;south&quot;</span> <span class="hljs-comment">// 南面</span>
    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;west&quot;</span> <span class="hljs-comment">// 西面</span>
    <span class="hljs-strong">string</span> <span class="hljs-string">&quot;east&quot;</span> <span class="hljs-comment">// 东面</span>
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="texture-isotropic" tabindex="-1"><a class="header-anchor" href="#texture-isotropic" aria-hidden="true">#</a> <code>texture_isotropic</code></h3><div class="language-schema line-numbers-mode" data-ext="schema"><pre class="language-schema"><code><span class="hljs-strong">bool</span> <span class="hljs-comment">// 为各面开启迷向面，默认为\`false\`</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="枚举" tabindex="-1"><a class="header-anchor" href="#枚举" aria-hidden="true">#</a> 枚举</h2>`,7),b=s("thead",null,[s("tr",null,[s("th",null,"影响字段"),s("th",null,"枚举类型"),s("th",null,"描述")])],-1),_=s("td",null,[s("code",null,"<block name>/blockshape")],-1),v=s("td",null,"硬枚举",-1),E=s("td",null,[s("code",null,"<block name>/sound")],-1),k=s("td",null,"硬枚举",-1),f=s("h2",{id:"外部链接",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#外部链接","aria-hidden":"true"},"#"),n(" 外部链接")],-1),x={href:"https://wiki.bedrock.dev/blocks/block-shapes.html",target:"_blank",rel:"noopener noreferrer"},A={href:"https://wiki.bedrock.dev/blocks/block-sounds.html",target:"_blank",rel:"noopener noreferrer"},q={href:"https://mc.163.com/dev/mcmanual/mc-dev/mcguide/20-%E7%8E%A9%E6%B3%95%E5%BC%80%E5%8F%91/15-%E8%87%AA%E5%AE%9A%E4%B9%89%E6%B8%B8%E6%88%8F%E5%86%85%E5%AE%B9/2-%E8%87%AA%E5%AE%9A%E4%B9%89%E6%96%B9%E5%9D%97/5-%E8%87%AA%E5%AE%9A%E4%B9%89%E6%96%B9%E5%9D%97%E6%A8%A1%E5%9E%8B.html",target:"_blank",rel:"noopener noreferrer"},B={href:"https://mc.163.com/dev/mcmanual/mc-dev/mcguide/20-%E7%8E%A9%E6%B3%95%E5%BC%80%E5%8F%91/15-%E8%87%AA%E5%AE%9A%E4%B9%89%E6%B8%B8%E6%88%8F%E5%86%85%E5%AE%B9/2-%E8%87%AA%E5%AE%9A%E4%B9%89%E6%96%B9%E5%9D%97/4-%E8%87%AA%E5%AE%9A%E4%B9%89%E6%96%B9%E5%9D%97%E5%AE%9E%E4%BD%93.html",target:"_blank",rel:"noopener noreferrer"},w={href:"https://mc.163.com/dev/mcmanual/mc-dev/mcguide/20-%E7%8E%A9%E6%B3%95%E5%BC%80%E5%8F%91/15-%E8%87%AA%E5%AE%9A%E4%B9%89%E6%B8%B8%E6%88%8F%E5%86%85%E5%AE%B9/2-%E8%87%AA%E5%AE%9A%E4%B9%89%E6%96%B9%E5%9D%97/4.1-%E8%87%AA%E5%AE%9A%E4%B9%89%E6%96%B9%E5%9D%97%E5%AE%9E%E4%BD%93%E5%A4%96%E8%A7%82.html",target:"_blank",rel:"noopener noreferrer"};function y(z,C){const i=e("CodeGroupItem"),p=e("CodeGroup"),c=e("RouterLink"),l=e("ExternalLinkIcon");return h(),g("div",null,[d,a(p,null,{default:t(()=>[a(i,{title:"0.0.0"},{default:t(()=>[m]),_:1})]),_:1}),u,s("table",null,[b,s("tbody",null,[s("tr",null,[_,v,s("td",null,[a(c,{to:"/misc/enums/block_shape.html"},{default:t(()=>[n("方块形状")]),_:1})])]),s("tr",null,[E,k,s("td",null,[a(c,{to:"/misc/enums/block_sound_type.html"},{default:t(()=>[n("方块声音类型")]),_:1})])])])]),f,s("ul",null,[s("li",null,[s("a",x,[n("Block Shapes"),a(l)]),n(" - Bedrock Wiki")]),s("li",null,[s("a",A,[n("Block Sounds"),a(l)]),n(" - Bedrock Wiki")]),s("li",null,[s("a",q,[n("自定义方块模型"),a(l)]),n(" - 我的世界开发者官网")]),s("li",null,[s("a",B,[n("自定义方块实体"),a(l)]),n(" - 我的世界开发者官网")]),s("li",null,[s("a",w,[n("自定义方块实体外观"),a(l)]),n(" - 我的世界开发者官网")])])])}const F=o(j,[["render",y],["__file","block_client.html.vue"]]);export{F as default};