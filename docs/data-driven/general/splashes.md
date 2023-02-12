# 闪烁标语文件

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://mirrors.creativecommons.org/presskit/buttons/80x15/svg/by-nc-sa.svg" /></a>

**闪烁标语**（**Splash**）文件位于资源包根目录下，文件名硬编码为`splashes.json`。

## 模式

```json
object
{
    bool "canMerge" : opt // 该闪烁标语文件是否可以与各版本的闪烁标语文件合并，例如父包和子包的闪烁标语合并
    array "splashes" : opt // 无条件显示的闪烁标语列表
    {
        string "<any array element>" // 闪烁标语文本，支持i18n
    }
    array "conditional" : opt // 需要满足条件才可以显示的闪烁标语列表
    {
        object "<any array element>" // 一组需要满足特定条件的闪烁标语
        {
            object "requires" // 需要满足的条件
            {
                array "platforms" : opt // 需要满足的平台
                {
                    string "<any array element>"
                }
                array "treatments" : opt // 需要满足的处理包
                {
                    string "<any array element>"
                }
                array "stores" : opt // 需要满足的商店
                {
                    string "<any array element>"
                }
            }
            array "splashes" : opt // 满足条件后显示的闪烁标语列表
            {
                string "<any array element>" // 闪烁标语文本，支持i18n
            }
        }
    }
}
```

## 外部链接

- [闪烁标语 - Minecraft Wiki](https://minecraft.fandom.com/zh/wiki/%E9%97%AA%E7%83%81%E6%A0%87%E8%AF%AD)