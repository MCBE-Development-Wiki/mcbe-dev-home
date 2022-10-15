# 方块文档

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://mirrors.creativecommons.org/presskit/buttons/80x15/svg/by.svg" /></a> 翻译自[微软官方文档](https://learn.microsoft.com/zh-cn/minecraft/creator/)

这是Minecraft预览版的文档。本版本中的新功能、组件和权能不代表最终版本，可能在最终版本发布前发生变化而不另行通知。

如果您的附加包不能正常工作，请务必在游戏走出预览后检查文档。为预览创建的资源包和行为包不能保证在最终版本中有效。

## 方块定义属性

这些属性是方块定义的一部分。这有助于系统确定如何解析和初始化该方块。

| 名称           | 类型   | 默认值 | 描述                                                         |
| -------------- | ------ | ------ | ------------------------------------------------------------ |
| `format_version` | 字符串 |        | 指定制作该实体的游戏的版本。如果该版本比当前版本低，则任何对原版版本中的实体做出的变更都将应用到它身上。 |

### 代码示例

示例

```json
{
  "format_version": "1.19.40",
  "minecraft:block": {
    "description": {
      "identifier": "design:lavenderstone"
    },
    "components": {
      "minecraft:loot": "loot_tables/chests/simple_dungeon.json",
      "minecraft:destroy_time": 4.0,
      "minecraft:friction": 0.6,
      "minecraft:map_color": "#00ff00",
      "minecraft:flammable": {
        "flame_odds": 50,
        "burn_odds": 0
    },
      "minecraft:light_emission": 1
    }
  }
}
```

## 方块描述属性

| 名称         | 类型   | 默认值 | 描述                                                         |
| ------------ | ------ | ------ | ------------------------------------------------------------ |
| `identifier` | 字符串 |        | 该方块的标识符。该名称必须包含一个命名空间，而且除非想要覆写一个原版方块，否则不可以使用`minecraft`命名空间。 |

## 方块组件

## 方块触发器组件

## 方块事件响应
