# 内容文件

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://mirrors.creativecommons.org/presskit/buttons/80x15/svg/by-nc-sa.svg" /></a>

**内容文件**（**Contents File**）是提供了当前附加包的内容的列表的文件。附加包的**内容**（**Content**）指附加包内所有文件与文件夹的总和。该文件位于附加包的根目录中，和清单文件同级目录下，文件名硬编码为`contents.json`。该文件不是一个附加包所必须的。

<div class="treeview">
  <ul>
    <li><span class="sprite" style="background-image:url(https://wiki.mcbe-dev.net/w/images/9/92/FileCSS.png?format=original);background-position:-112px -128px;background-size:128px auto;height:16px;width:16px"></span> <code>pack</code> 附加包<ul>
      <li><span class="sprite" style="background-image:url(https://wiki.mcbe-dev.net/w/images/9/92/FileCSS.png?format=original);background-position:-0px -80px;background-size:128px auto;height:16px;width:16px"></span> <code>contents.json</code></li>
    </ul></li>
  </ul>
</div>

## 版本化与模式

内容文件的版本化由文件中的`version`字段控制，目前该字段理论允许`0`和`1`，实际上接受任何值。不存在该字段时默认按照为`0`处理。不同格式版本的内容文件格式的模式分别如下：

:::: code-group
::: code-group-item 1

```schema
object
{
    int "version" // 该文件的格式版本，此处应为`1`
    array "content"
    {
        object "<any array element>"
        {
            string "path"</.*?:(?:[^\n|\r|/|\\]+[/\\]?)*/>
            string "key"[32] : opt // AES256 CFB8 NoPadding秘钥
        }
    }
}
```

:::
::: code-group-item 0

```schema
object
{
    int "version" : opt // 该文件的格式版本，此处应为`0`
    array "content" : opt
    {
        object "<any array element>"
        {
            string "path"</.*?:.*/>
            string "key"[32] : opt // AES256 CFB8 NoPadding秘钥
        }
    }
}
```

:::
::::

## 升级

当该文件的版本不为`1`时，该附加包被加入到游戏时、在已被加入到全局或当前世界的前提下游戏初始化或切回前台（仅资源包）时、被在资源栈中点击包验证按钮时将对该文件进行升级（本质上是只要触发了包验证，且清单文件验证无误，就会在验证完成清单后开启内容文件的验证，当检测到版本不为`1`时便会触发升级逻辑）。升级的具体流程是：先读取该文件内`content`下已填入的所有路径，然后扫描该附加包内所有文件，将真实存在在附加包内却不在该文件内列出的文件追加到该文件`content`数组末尾，并修正畸形的路径（这一操作被称为清理路径分隔符）。清理路径分隔符主要用于将一些不正确的路径组合替换为正确的，譬如将套有空文件夹的`//`组合替换为`/`，或将反斜杠的`\\`（必须转义才能被读取为反斜杠）替换为正斜杠`/`。最后将`version`字段设置为`1`。需要注意的是：

- 升级逻辑不会移除本来存在于原始的该文件中但是无效的路径。
- 升级逻辑只会将不存在于该内容文件中的该附加包内的**文件**的路径写入，不会写入任何文件夹路径。
- 升级逻辑触发的前提是该内容文件的内容是一个对象且`version`不为`1`。这意味着如果该文件本来不是一个JSON对象，那么不会触发升级逻辑。

::: tip 自动生成
利用升级的功能，我们可以使游戏自动生成一个包含当前包内所有文件的路径的内容文件。由于不存在`version`字段时该字段默认读取为`0`，所以我们只需要在附加包的根目录新建一个`contents.json`，并将内容设置为最简单的JSON对象空对象`{}`即可。在下次打开游戏时游戏引擎便会自动为我们生成一个相对完整的内容文件。之所以说其实“相对”完整，是因为游戏引擎只会生成附加包内文件的路径，而不会生成文件夹的路径。不过这也已经足够了。
:::

## 密码

内容文件是加密包的索引文件，如果包内某些文件被加密，引擎会按照每个路径对应的`key`字段对每个文件进行解密后再进行读取。

### 标头

市场包加密算法下的内容文件一般具有256个字节的标头，用于确定该内容文件的身份，保证其保密性。此时该内容文件是处于加密状态下的，引擎会在确认该标头后去掉该标头并对剩余部分进行解密以获取原始内容。

## 外部链接

- [contents.json](https://wiki.bedrock.dev/concepts/contents.html) - Bedrock Wiki
