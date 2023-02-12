# 纹理文件

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://mirrors.creativecommons.org/presskit/buttons/80x15/svg/by-nc-sa.svg" /></a>

**纹理文件**（**Texture File**）位于资源包`textures`目录下，该目录下一切扩展名满足要求的图片文件都会被读取为纹理文件，并连同其路径和所在的文件系统一并保存在资源位置的实例中。

<div class="treeview">
  <ul>
    <li><span class="sprite" style="background-image:url(https://wiki.mcbe-dev.net/w/images/9/92/FileCSS.png?format=original);background-position:-112px -128px;background-size:128px auto;height:16px;width:16px"></span> <code>rp</code> 资源包<ul>
      <li><span class="sprite" style="background-image:url(https://wiki.mcbe-dev.net/w/images/9/92/FileCSS.png?format=original);background-position:-112px -128px;background-size:128px auto;height:16px;width:16px"></span> <code>textures</code><ul>
        <li><span class="sprite" style="background-image:url(https://wiki.mcbe-dev.net/w/images/9/92/FileCSS.png?format=original);background-position:-96px -0px;background-size:128px auto;height:16px;width:16px"></span> <code>&lt;some_texture&gt;.&lt;image_ext&gt;</code></li>
      </ul></li>
    </ul></li>
  </ul>
</div>

## 格式

目前支持如下扩展名的图片文件，同主文件名但不同扩展名的文件按照既定顺序读取最先读取到的那一个，读取顺序与下表顺序相同。

| 扩展名              | 描述                                                         |
| ------------------- | ------------------------------------------------------------ |
| `.texture_set.json` | 纹理集文件                                                   |
| `.tga`              | TARGA文件                                                    |
| `.png`              | PNG文件                                                      |
| `.jpg`              | JPG文件                                                      |
| `.jpeg`             | JPEG文件                                                     |
| `.ktx`              | KTX文件，<span style="color:rgb(255, 85, 85);">仅中国版支持</span> |