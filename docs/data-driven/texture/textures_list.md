# 纹理列表文件

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://mirrors.creativecommons.org/presskit/buttons/80x15/svg/by-nc-sa.svg" /></a>

**纹理列表文件**（**Textures List File**）位于资源包的`textures`文件夹内，文件名硬编码为`texutres_list.json`。

<div class="treeview">
  <ul>
    <li><span class="sprite" style="background-image:url(https://wiki.mcbe-dev.net/w/images/9/92/FileCSS.png?format=original);background-position:-112px -128px;background-size:128px auto;height:16px;width:16px"></span> <code>rp</code> 资源包<ul>
      <li><span class="sprite" style="background-image:url(https://wiki.mcbe-dev.net/w/images/9/92/FileCSS.png?format=original);background-position:-112px -128px;background-size:128px auto;height:16px;width:16px"></span> <code>textures</code><ul>
        <li><span class="sprite" style="background-image:url(https://wiki.mcbe-dev.net/w/images/9/92/FileCSS.png?format=original);background-position:-0px -80px;background-size:128px auto;height:16px;width:16px"></span> <code>texutres_list.json</code></li>
      </ul></li>
    </ul></li>
  </ul>
</div>

## 模式

```json
array
{
    string "<any array element>" // 纹理文件相对于资源包根目录的一个不具有扩展名的路径
}
```

## 生成

在资源包的`ui/storage_management.json`文件中做出如下修改即可在设置中的存储管理屏幕中启用一个一键式生成纹理列表文件的按钮。生成后的纹理列表文件位于对应资源包的`textures/texutres_list.json`路径上。

```json
{
    "resource_toggle/item_button_panel/y_sizing_panel/border/button_panel/generate_texture_list_panel/generate_texture_list_button": {
        "ignored": "(not ($panel_prefix = resource))"
    }
}
```

## 外部链接

- [textures_list.json - Bedrock Wiki](https://wiki.bedrock.dev/concepts/textures-list.html)
