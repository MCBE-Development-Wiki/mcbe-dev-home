# 签名文件

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://mirrors.creativecommons.org/presskit/buttons/80x15/svg/by-nc-sa.svg" /></a>

**签名文件**（**Signatures File**）是为附加包内一些文件提供签名验证的文件，在验证附加包时游戏会检测该文件内所列出的文件的杂凑值是否与文件内提供的值一致，若一致，该包将会标记为已信任。该文件能够为附加包开发者提供一定的防篡改功能。该文件位于附加包的根目录中，和清单文件同级目录下，文件名硬编码为`signatures.json`。该文件对于来源于用户自行加载的附加包而言是非必须的。

<div class="treeview">
  <ul>
    <li><span class="sprite" style="background-image:url(https://wiki.mcbe-dev.net/w/images/9/92/FileCSS.png?format=original);background-position:-112px -128px;background-size:128px auto;height:16px;width:16px"></span> <code>pack</code> 附加包<ul>
      <li><span class="sprite" style="background-image:url(https://wiki.mcbe-dev.net/w/images/9/92/FileCSS.png?format=original);background-position:-0px -80px;background-size:128px auto;height:16px;width:16px"></span> <code>signatures.json</code></li>
    </ul></li>
  </ul>
</div>

## 模式

```schema
array
{
    object "<any array element>"
    {
        string "path" // 与附加包根目录的相对路径
        string "hash" // SHA256杂凑值的Base64
    }
}
```
