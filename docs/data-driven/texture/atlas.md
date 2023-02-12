# 图集定义文件

**图集定义文件**（**Atlas Definition File**）用于定义一个图集，位于资源包的`textures`文件夹内，共有两个文件，分别定义物品图集和地形图集，文件名分别硬编码为`item_texture.json`和`terrain_texture.json`。

## 模式

两个图集定义文件共享同一种文件模式。

```json
object
{
    int "padding" : opt // 该图集中所有纹理在合成整张图像时所具有的内边距，默认为`0`
    int "num_mip_levels" : opt // 该图集的MIP级别的数目，默认为`0`
    string "default_leather_color" : opt // 该图集的默认皮革颜色，格式为`#RGBA`
    string "default_horse_leather_color" : opt // 该图集的默认马匹皮革颜色，格式为`#RGBA`
    string "texture_name" : opt // 图集页的资源名称，对于`item_texture.json`文件，请填写`atlas.item`，对于`terrain_texture.json`文件，请填写`atlas.terrain`，接受其他名称，但这将导致创建一个新的图集页，文件无法与原版的该图集定义合并，一些硬编码逻辑亦将失效，默认为`atlas.terrain`
    object "texture_data" // 该图集的纹理数据
    {
        object "<texture reference name>" // 该图集中一个定义的纹理
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

```json
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

```json
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
    texture_isotropic "isotropic" // 该变种的迷向性。
}
```

### `color`

```json
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

```json
bool // 为各面开启迷向面，默认为`false`
object // 三面式解析
{
    bool "up" : opt // 为顶面开启迷向面，默认为`false`
    bool "down" : opt // 为底面开启迷向面，默认为`false`
    bool "side" // 为四个侧面开启迷向面，默认为`false`，如不存在该字段则按照六面式解析
}
object // 六面试解析
{
    bool "up" : opt // 为顶面开启迷向面，默认为`false`
    bool "down" : opt // 为底面开启迷向面，默认为`false`
    bool "north" : opt // 为北面开启迷向面，默认为`false`
    bool "south" : opt // 为南面开启迷向面，默认为`false`
    bool "west" : opt // 为西面开启迷向面，默认为`false`
    bool "east" : opt // 为东面开启迷向面，默认为`false`
}
```
