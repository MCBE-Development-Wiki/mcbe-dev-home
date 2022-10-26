# 数据驱动

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://mirrors.creativecommons.org/presskit/buttons/80x15/svg/by-nc-sa.svg" /></a>

**数据驱动**（**Data-driven**）是一种使用静态文件来添加或修改游戏内容的模组编写方式的总称。使用数据驱动来编写模组的文件被称为**数据驱动文件**（**Data-driven File**），亦被称作**数据**（**Data**），数据驱动过程中用到的组件被称为**数据驱动组件**（**Data-driven Component**），数据驱动编写的游戏内容被称为**数据驱动内容**（**Data-driven Content**）。

## 数据驱动文件类型

以下列出了当前[附加包](../misc/addon.md)支持的数据驱动文件类型，这些文件的格式往往由[格式版本](../misc/format_version.md)控制。点击对应链接可以快速跳转。

### 常规

- [清单文件](./manifest.md)：为附加包提供定义的文件，即<samp>manifest.json</samp>或<samp>pack_manifest.json</samp>。<!-- PackManifestFactory::create -->

### 渲染相关

- [纹理](./texture.md)：提供游戏内一切可渲染事物的表面纹理。<!-- ResourcePack::generateTextureList --><!-- ResourcePack::getTexturesList -->
- [纹理集](./texture_set.md)：提供同一个事物的一组纹理。
- [着色器](./shader.md)：提供纹理的具现方式。
- [材质](./material.md)：提供着色器的具体可供调用实例。
- [模型](./model.md)：为实体、方块或物品提供立体效果。
- [相机](./camera.md)：提供客户端的渲染视图相机定义。

### 声音相关

- [音效](./sound_effect.md)：提供游戏内声音效果。
- [音乐](./music.md)：提供游戏内背景音乐。

### 界面相关

- [JSON UI](./json_ui.md)：提供旧版界面效果。
- [i18n](./i18n.md)：提供游戏内文本翻译。
- [字体](./font.md)：提供字型。
- [表情符](./emoji.md)：提供表情符号。

### 实体相关

- [实体客户端定义](./entity_client.md)：定义实体的客户端，包括实体的模型、纹理、渲染、动画、声音、粒子等。
- [实体服务端定义](./entity_server.md)：定义实体的服务端，包括实体的逻辑、特性、属性、行为等。
- [动画](./animation.md)：提供实体的客户端骨骼动画或服务端逻辑动画。
- [动画控制器](./animation_controller.md)：提供动画的状态机，即动画间的转移和过渡方式。
- [渲染控制器](./render_controller.md)：提供实体的渲染方式。
- [生成规则](./sapwn_rule.md)：提供实体的生成规则。
- [生成组](./sapwn_group.md)：提供劫掠等事件过程中的各生成组。
- [行为树](./behavior_tree.md)：提供实体自动化行为序列。

### 方块和物品相关

- [方块客户端定义](./block_client.md)：定义方块客户端的文件，即<samp>blocks.json</samp>。
- [方块服务端定义](./block_server.md)：定义方块的服务端。
- [物品客户端定义](./item_client.md)：定义物品的客户端。
- [物品客户端偏移量定义](./item_client_offset.md)：定义物品的客户端手持时的偏移量。
- [物品服务端定义](./item_server.md)：定义物品的服务端。

### 效果相关

- [粒子](./particle.md)：提供一种轻量级颗粒效果。
- [迷雾](./fog.md)：提供一种体积效果。
- [功能域](./volume.md)：提供在一定区域内的特定的和效果和功能。

### 世界生成相关

- [维度](dimension.md)：提供维度的生成定义。
- [生物群系客户端定义](biome_client.md)：定义生物群系在客户端的渲染情况。
- [生物群系服务端定义](biome_server.md)：定义生物群系的服务端生成。
- [地物](feature.md)：提供地物，即地形中的特征物的生成定义。
- [地物规则](feature_rule.md)：提供地物生成的规则。

### 表相关

- [战利品表](./loot_table.md)：提供实体死亡、方块掉落、生物装备、物品栏填充等用途的物品抽取规则表。
- [交易表](./trade_table.md)：提供村民或具有交易相关组件的实体交易时的物品抽取规则表。
- [配方](./recipe.md)：提供物品的合成表、烧制表、酿造表等配方。
- [NPC对话](./npc_dialogue.md)：提供具有NPC相关组件的实体的对话内容和按钮功能。

### NBT相关

- [存档文件](./level.md)：在世界模板中为世界提供基本信息的文件，即<samp>level.dat</samp>。<!-- Level::initialize -->
- [LevelDB](./leveldb.md)：在世界模板中提供世界的主体。<!-- ExternalFileLevelStorage::readLevelDataFromData -->
- [结构](./structure.md)：提供一定大小的既定方块组合。

### 命令相关

- [函数](./function.md)：提供一个命令执行序列。
- [函数滴答](./function_tick.md)：提供跟随游戏滴答主循环而每刻执行的函数的文件，即<samp>tick.json</samp>。

## 数据驱动中的语法

数据驱动文件中存在一些脚本或命令等需要专门的解释器的部分，这些部分的格式往往由附加包或对应数据驱动文件的[最低引擎版本](../misc/min_engine_version.md)控制。点击对应链接可以快速跳转。

### 脚本相关

- [Molang](./molang.md)：一种类C族语言轻量级脚本，以字符串形式出现在数据驱动文件中的字段中。

### 命令相关

- [命令](./command.md)：一种游戏内快捷方式，使用`/<command> <args>`语法，出现在函数中或以字符串形式出现在数据驱动文件中的字段中。
