# 图集定义文件

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://mirrors.creativecommons.org/presskit/buttons/80x15/svg/by-nc-sa.svg" /></a>

**图集定义文件**（**Atlas Definition File**）用于定义一个图集，位于资源包的`textures`文件夹内，共有两个文件，分别定义物品图集和地形图集，文件名分别硬编码为`item_texture.json`和`terrain_texture.json`。

<div class="treeview">
  <ul>
    <li><span class="sprite" style="background-image:url(https://wiki.mcbe-dev.net/w/images/9/92/FileCSS.png?format=original);background-position:-112px -128px;background-size:128px auto;height:16px;width:16px"></span> <code>rp</code> 资源包<ul>
      <li><span class="sprite" style="background-image:url(https://wiki.mcbe-dev.net/w/images/9/92/FileCSS.png?format=original);background-position:-112px -128px;background-size:128px auto;height:16px;width:16px"></span> <code>textures</code><ul>
        <li><span class="sprite" style="background-image:url(https://wiki.mcbe-dev.net/w/images/9/92/FileCSS.png?format=original);background-position:-0px -80px;background-size:128px auto;height:16px;width:16px"></span> <code>item_texture.json</code></li>
        <li><span class="sprite" style="background-image:url(https://wiki.mcbe-dev.net/w/images/9/92/FileCSS.png?format=original);background-position:-0px -80px;background-size:128px auto;height:16px;width:16px"></span> <code>terrain_texture.json</code></li>
      </ul></li>
    </ul></li>
  </ul>
</div>

## 模式

两个图集定义文件共享同一种文件模式。

```schema
object
{
    int "padding" : opt // 该图集中所有纹理在合成整张图像时所具有的内边距，默认为`0`
    int "num_mip_levels" : opt // 该图集的MIP级别的数目，默认为`0`
    string "default_leather_color" : opt // 该图集的默认皮革颜色，格式为`#RGBA`
    string "default_horse_leather_color" : opt // 该图集的默认马匹皮革颜色，格式为`#RGBA`
    string "texture_name" : opt // 图集页的资源名称，对于`item_texture.json`文件，请填写`atlas.item`，对于`terrain_texture.json`文件，请填写`atlas.terrain`，接受其他名称，但这将导致创建一个新的图集页，文件无法与原版的该图集定义合并，一些硬编码逻辑亦将失效，默认为`atlas.terrain`
    object "texture_data" // 该图集的纹理数据
    {
        object "<texture reference name>" // 该图集中一个定义的纹理图块及其名称
        {
            bool "quad" : opt // 默认为`false`
            element_collection "textures" // 该纹理的路径的合集
            float "mip_fade_amount" : opt // MIP淡入淡出量，默认为`0`
            color "mip_fade_color" : opt // MIP淡入淡出颜色，默认为`[0, 0, 0, 0]`
            bool "additive" : opt // 是否可叠加，默认为`false`
        }
    }
}
```

### `element_collection`

```schema
element // 一个纹理变种的路径
array
{
    element "<any array element>" // 一个纹理变种的路径
}
object
{
    array "variations"
    {
        element "<any array element>" // 一个纹理变种的路径
    }
}
```

### `element`

```schema
string // 一个纹理文件相对于资源包根目录的不具有扩展名的路径
object
{
    string "path" // 一个纹理文件相对于资源包根目录的不具有扩展名的路径
    string "tint_map_path" : opt // 染色贴图的路径
    string "overlay_color" : opt // 覆盖层颜色，格式为`#RGBA`
    float "mip_fade_amount" : opt // 该变种的MIP淡入淡出量，默认为`0`
    color "mip_fade_color" : opt // 该变种的MIP淡入淡出颜色，默认为`[0, 0, 0, 0]`
    object "tint_base_color" : opt // 该变种的多通道染色基色
    {
        color "r_color" : opt // R通道
        color "g_color" : opt // G通道
        color "b_color" : opt // B通道
        color "a_color" : opt // A通道
    }
    string "tint_color" : opt // 该变种的单通道染色颜色，格式为`#RGBA`
    object "tint_color" : opt // 该变种的多通道染色颜色
    {
        color "r_color" : opt // R通道
        color "g_color" : opt // G通道
        color "b_color" : opt // B通道
        color "a_color" : opt // A通道
    }
    float "weight" // 该变种的权重
    texture_isotropic "isotropic" // 该变种的迷向性
}
```

### `color`

```schema
string // 格式为`#RGBA`
array
{
    int "[0..0]" // R通道
    int "[1..1]" // G通道
    int "[2..2]" // B通道
    int "[3..3]" // A通道
}
```

### `texture_isotropic`

@[code](../subschemas/texture_isotropic.schema)

## 原版用例

| 图集页的资源名称 | 描述                                                         |
| ---------------- | ------------------------------------------------------------ |
| `atlas.item`     | 物品图集，由数据驱动定义，具有一些硬编码逻辑，主要用于UI中的物品图标显示和手持物品纹理渲染 |
| `atlas.terrain`  | 地形图集，由数据驱动定义，具有一些硬编码逻辑，主要用于方块纹理渲染 |
| `atlas.banner`   | 旗帜图集，由硬编码定义                                       |

## 外部链接

- [Block Texture Variation](https://wiki.bedrock.dev/blocks/block-texture-variation.html) - Bedrock Wiki
