# 加载消息文件

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://mirrors.creativecommons.org/presskit/buttons/80x15/svg/by-nc-sa.svg" /></a>

**加载消息**（**Loading Message**），又称**加载提示**（**Loading Tip**），其文件位于资源包根目录下，文件名硬编码为`loading_messages.json`。

## 模式

```json
object
{
    array "loading_messages" : opt // 正常游戏显示的加载消息列表
    {
        string "<any array element>" // 加载消息文本，支持i18n
    }
    array "editor_loading_messages" : opt // 编辑器模式下显示的加载消息列表
    {
        string "<any array element>" // 加载消息文本，支持i18n
    }
}
```

## 外部链接

- [加载提示 - Minecraft Wiki](https://minecraft.fandom.com/zh/wiki/%E5%8A%A0%E8%BD%BD%E6%8F%90%E7%A4%BA)