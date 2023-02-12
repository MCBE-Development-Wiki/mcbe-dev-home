# 教育文件

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://mirrors.creativecommons.org/presskit/buttons/80x15/svg/by-nc-sa.svg" /></a>

**教育文件**（**Education File**）是指附加包内以`education.json`为文件名的文件，根据用途分为**教育元数据文件**（**Education Metadata File**）和**教育设置文件**（**Education Settings File**）两种。

## 教育元数据

教育元数据文件位于附加包的根目录下，在[清单文件](./manifest.md)的`has_education_metadata`为`true`时被读取，用于展示该附加包的教育基本信息。

### 模式

```json
object "edu_metadata" // 注：根对象的键名仅在报错中出现，无需且不能在文件中填写
{
    enumerated_value "type"<"world", "non_world"> : opt // 该教育版包的课程类型，分为世界课程和非世界课程
    object "content"
    {
        int "estimated_time" // 预计完成该课程用时
        string "description" // 该课程描述
        string  "goals" : opt // 该课程的课程目标
        array "tasks" : opt // 该课程的课程任务
        {
            string "<any array element>"
        }
        array "instructions" : opt // 该课程的课程指导
        {
            string "<any array element>"
        }
        string "link_to_more" : opt // 更多连接
        int "order" // 该课程的课程顺序
        enumerated_value "role"<"student_and_teacher", "teacher"> : opt // 该课程的使用者身份
    }
}
```

## 教育设置

教育设置文件位于存档的根目录下，用于提供一些存档的额外设置。

### 模式

```json
object
{
    object "codebuilder" : opt // 该存档中代码构建器的设置
    {
        string "defaulturi" // 该存档中代码构建器展示的默认URI
        string "title" // 代码构建器的标题
        bool "canResize" : opt // 代码构建器是否可以缩放，默认为`true`
        bool "disableLegacyTitleBar" : opt // 是否禁用旧版标题栏
        object "capabilities" : opt
        {
            object "agent" : opt
            {
                object "permissions" : opt
                {
                    bool "isWorldbuilder" : opt // 是否为世界构建者。目前已移除
                    bool "canModifyBlocks" : opt // 是否可以修改方块
                }
            }
        }
    }
    object "externalLink" : opt // 外部链接
    {
        string "url" : opt // 该链接的URL
        string "displayName" : opt // 该链接显示的名称
    }
    object "camera" : opt // 该存档中摄像机方块的设置
    {
        enumerated_value "filter"<"grayscale"> : opt // 摄像机的过滤器
        enumerated_value "border"<"borderpath"> : opt // 摄像机的边框
    }
    object "commands" : opt
    {
        array "hiddenFromPlayer" : opt // 需要将命令旗标设置为从玩家起点隐藏的命令，取并
        {
            string "<any array element>" // 命令名，支持在命令名前使用`!`表示非运算，支持`*`代表全部命令
        }
        array "hiddenFromAutomation" : opt // 需要将命令旗标设置为从自动化起点隐藏的命令，取并
        {
            string "<any array element>" // 命令名，支持在命令名前使用`!`表示非运算，支持`*`代表全部命令
        }
    }
}
```
