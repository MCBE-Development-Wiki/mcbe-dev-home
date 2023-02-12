# 动态纹理定义文件

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://mirrors.creativecommons.org/presskit/buttons/80x15/svg/by-nc-sa.svg" /></a>

**动态纹理**（**Dynamic Texture**），又称**动画纹理**（**Animated Texture**）、**滴答纹理**（**Ticking Texture**）和**翻书纹理**（**Flipbook Texture**），其定义文件用于定义纹理动画，位于资源包的`textures`文件夹内，共有两个文件，分别定义方块和物品（<span style="color:rgb(255, 85, 85);">仅中国版</span>）的动态纹理，文件名分别硬编码为`flipbook_textures.json`和`flipbook_textures_items.json`。其定义的这种纹理动画被称为**翻书动画**（**Flipbook Animation**），<span style="color:rgb(255, 85, 85);">在中国版亦称作<strong>序列帧动画</strong>（<strong>Frame Animation</strong>）</span>。

<div class="treeview">
  <ul>
    <li><span class="sprite" style="background-image:url(https://wiki.mcbe-dev.net/w/images/9/92/FileCSS.png?format=original);background-position:-112px -128px;background-size:128px auto;height:16px;width:16px"></span> <code>rp</code> 资源包<ul>
      <li><span class="sprite" style="background-image:url(https://wiki.mcbe-dev.net/w/images/9/92/FileCSS.png?format=original);background-position:-112px -128px;background-size:128px auto;height:16px;width:16px"></span> <code>textures</code><ul>
        <li><span class="sprite" style="background-image:url(https://wiki.mcbe-dev.net/w/images/9/92/FileCSS.png?format=original);background-position:-0px -80px;background-size:128px auto;height:16px;width:16px"></span> <code>flipbook_textures.json</code></li>
        <li><span class="sprite" style="background-image:url(https://wiki.mcbe-dev.net/w/images/9/92/FileCSS.png?format=original);background-position:-0px -80px;background-size:128px auto;height:16px;width:16px"></span> <code>flipbook_textures_items.json</code> <span style="color:rgb(255, 85, 85);">仅中国版</span></li>
      </ul></li>
    </ul></li>
  </ul>
</div>

## 模式

两个动态纹理定义文件共享同一种文件模式。

```json
array
{
    object "<any array element>" // 一个动态纹理
    {
        string "flipbook_texture" // 动态纹理的资源路径，纹理文件相对于资源包根目录的不具有扩展名的路径
        string "atlas_tile" // 该纹理文件在对应图集中的图块的引用名称
        int "atlas_index" : opt // 该动态纹理的图集索引值，即对应的方块变体序数，默认为`0`
        int "replicate" : opt // 默认为`1`
        int "ticks_per_frame" : opt // 每帧持续刻数，默认为`1`
        bool "blend_frames" : opt // 是否在各帧之间融合过渡，默认为`true`
        array "frames" : opt // 帧顺序，将按照该字段定义的顺序播放各帧，默认按照帧索引值从小到大播放
        {
            int "<any array element>" // 帧在纹理文件中的索引值，即自上而下的序数，从`0`开始计数
        }
        int "atlas_tile_variant" : opt // 该动态纹理在对应图集的纹理图块中所在的变体的序数，默认为`0`
    }
}
```

## 外部链接

- [Flipbook Textures - Bedrock Wiki](https://wiki.bedrock.dev/blocks/flipbook-textures.html)
- [自定义物品贴图使用序列帧动画 - 我的世界开发者官网](https://mc.163.com/dev/mcmanual/mc-dev/mcguide/20-%E7%8E%A9%E6%B3%95%E5%BC%80%E5%8F%91/15-%E8%87%AA%E5%AE%9A%E4%B9%89%E6%B8%B8%E6%88%8F%E5%86%85%E5%AE%B9/1-%E8%87%AA%E5%AE%9A%E4%B9%89%E7%89%A9%E5%93%81/6-%E8%87%AA%E5%AE%9A%E4%B9%89%E7%89%A9%E5%93%81%E8%B4%B4%E5%9B%BE%E4%BD%BF%E7%94%A8%E5%BA%8F%E5%88%97%E5%B8%A7%E5%8A%A8%E7%94%BB.html)
