const e=JSON.parse('{"key":"v-110fdc7e","path":"/data-driven/block/block_server.html","title":"方块服务端定义文件","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"版本化","slug":"版本化","link":"#版本化","children":[]},{"level":2,"title":"模式","slug":"模式","link":"#模式","children":[{"level":3,"title":"semver","slug":"semver","link":"#semver","children":[]},{"level":3,"title":"block_description","slug":"block-description","link":"#block-description","children":[]},{"level":3,"title":"block_permutations","slug":"block-permutations","link":"#block-permutations","children":[]},{"level":3,"title":"block_components","slug":"block-components","link":"#block-components","children":[]},{"level":3,"title":"block_events","slug":"block-events","link":"#block-events","children":[]},{"level":3,"title":"definition_event","slug":"definition-event","link":"#definition-event","children":[]},{"level":3,"title":"molang","slug":"molang","link":"#molang","children":[]}]},{"level":2,"title":"枚举","slug":"枚举","link":"#枚举","children":[]},{"level":2,"title":"组件","slug":"组件","link":"#组件","children":[{"level":3,"title":"minecraft:destructible_by_mining","slug":"minecraft-destructible-by-mining","link":"#minecraft-destructible-by-mining","children":[]},{"level":3,"title":"minecraft:destructible_by_explosion","slug":"minecraft-destructible-by-explosion","link":"#minecraft-destructible-by-explosion","children":[]},{"level":3,"title":"minecraft:flammable","slug":"minecraft-flammable","link":"#minecraft-flammable","children":[]},{"level":3,"title":"minecraft:friction","slug":"minecraft-friction","link":"#minecraft-friction","children":[]},{"level":3,"title":"minecraft:light_dampening","slug":"minecraft-light-dampening","link":"#minecraft-light-dampening","children":[]},{"level":3,"title":"minecraft:light_emission","slug":"minecraft-light-emission","link":"#minecraft-light-emission","children":[]},{"level":3,"title":"minecraft:map_color","slug":"minecraft-map-color","link":"#minecraft-map-color","children":[]},{"level":3,"title":"minecraft:loot","slug":"minecraft-loot","link":"#minecraft-loot","children":[]},{"level":3,"title":"minecraft:breathability","slug":"minecraft-breathability","link":"#minecraft-breathability","children":[]},{"level":3,"title":"minecraft:creative_category","slug":"minecraft-creative-category","link":"#minecraft-creative-category","children":[]},{"level":3,"title":"minecraft:unit_cube","slug":"minecraft-unit-cube","link":"#minecraft-unit-cube","children":[]},{"level":3,"title":"minecraft:queued_ticking","slug":"minecraft-queued-ticking","link":"#minecraft-queued-ticking","children":[]},{"level":3,"title":"minecraft:random_ticking","slug":"minecraft-random-ticking","link":"#minecraft-random-ticking","children":[]},{"level":3,"title":"minecraft:material_instances","slug":"minecraft-material-instances","link":"#minecraft-material-instances","children":[]},{"level":3,"title":"minecraft:geometry","slug":"minecraft-geometry","link":"#minecraft-geometry","children":[]},{"level":3,"title":"minecraft:collision_box","slug":"minecraft-collision-box","link":"#minecraft-collision-box","children":[]},{"level":3,"title":"minecraft:crafting_table","slug":"minecraft-crafting-table","link":"#minecraft-crafting-table","children":[]},{"level":3,"title":"minecraft:selection_box","slug":"minecraft-selection-box","link":"#minecraft-selection-box","children":[]},{"level":3,"title":"minecraft:display_name","slug":"minecraft-display-name","link":"#minecraft-display-name","children":[]},{"level":3,"title":"minecraft:placement_filter","slug":"minecraft-placement-filter","link":"#minecraft-placement-filter","children":[]},{"level":3,"title":"minecraft:transformation","slug":"minecraft-transformation","link":"#minecraft-transformation","children":[]},{"level":3,"title":"minecraft:part_visibility","slug":"minecraft-part-visibility","link":"#minecraft-part-visibility","children":[]},{"level":3,"title":"minecraft:unwalkable","slug":"minecraft-unwalkable","link":"#minecraft-unwalkable","children":[]},{"level":3,"title":"minecraft:on_player_destroyed","slug":"minecraft-on-player-destroyed","link":"#minecraft-on-player-destroyed","children":[]},{"level":3,"title":"minecraft:on_fall_on","slug":"minecraft-on-fall-on","link":"#minecraft-on-fall-on","children":[]},{"level":3,"title":"minecraft:on_interact","slug":"minecraft-on-interact","link":"#minecraft-on-interact","children":[]},{"level":3,"title":"minecraft:on_placed","slug":"minecraft-on-placed","link":"#minecraft-on-placed","children":[]},{"level":3,"title":"minecraft:on_player_placing","slug":"minecraft-on-player-placing","link":"#minecraft-on-player-placing","children":[]},{"level":3,"title":"minecraft:on_step_off","slug":"minecraft-on-step-off","link":"#minecraft-on-step-off","children":[]},{"level":3,"title":"minecraft:on_step_on","slug":"minecraft-on-step-on","link":"#minecraft-on-step-on","children":[]},{"level":3,"title":"netease:block_legacy","slug":"netease-block-legacy","link":"#netease-block-legacy","children":[]},{"level":3,"title":"netease:tier","slug":"netease-tier","link":"#netease-tier","children":[]},{"level":3,"title":"netease:aabb","slug":"netease-aabb","link":"#netease-aabb","children":[]},{"level":3,"title":"netease:face_directional","slug":"netease-face-directional","link":"#netease-face-directional","children":[]},{"level":3,"title":"netease:mob_spawner","slug":"netease-mob-spawner","link":"#netease-mob-spawner","children":[]},{"level":3,"title":"netease:solid","slug":"netease-solid","link":"#netease-solid","children":[]},{"level":3,"title":"netease:pathable","slug":"netease-pathable","link":"#netease-pathable","children":[]},{"level":3,"title":"netease:portal","slug":"netease-portal","link":"#netease-portal","children":[]},{"level":3,"title":"netease:connection","slug":"netease-connection","link":"#netease-connection","children":[]},{"level":3,"title":"netease:block_entity","slug":"netease-block-entity","link":"#netease-block-entity","children":[]},{"level":3,"title":"netease:random_tick","slug":"netease-random-tick","link":"#netease-random-tick","children":[]},{"level":3,"title":"netease:redstone_property","slug":"netease-redstone-property","link":"#netease-redstone-property","children":[]},{"level":3,"title":"netease:transform","slug":"netease-transform","link":"#netease-transform","children":[]},{"level":3,"title":"netease:render_layer","slug":"netease-render-layer","link":"#netease-render-layer","children":[]},{"level":3,"title":"netease:neighborchanged_sendto_script","slug":"netease-neighborchanged-sendto-script","link":"#netease-neighborchanged-sendto-script","children":[]},{"level":3,"title":"netease:redstone","slug":"netease-redstone","link":"#netease-redstone","children":[]},{"level":3,"title":"netease:listen_block_remove","slug":"netease-listen-block-remove","link":"#netease-listen-block-remove","children":[]},{"level":3,"title":"netease:may_place_on","slug":"netease-may-place-on","link":"#netease-may-place-on","children":[]},{"level":3,"title":"netease:fire_resistant","slug":"netease-fire-resistant","link":"#netease-fire-resistant","children":[]},{"level":3,"title":"netease:liquid","slug":"netease-liquid","link":"#netease-liquid","children":[]},{"level":3,"title":"netease:fall","slug":"netease-fall","link":"#netease-fall","children":[]},{"level":3,"title":"netease:block_properties","slug":"netease-block-properties","link":"#netease-block-properties","children":[]},{"level":3,"title":"netease:water_destory","slug":"netease-water-destory","link":"#netease-water-destory","children":[]},{"level":3,"title":"netease:water_only","slug":"netease-water-only","link":"#netease-water-only","children":[]},{"level":3,"title":"netease:water_source","slug":"netease-water-source","link":"#netease-water-source","children":[]},{"level":3,"title":"netease:water_flow_source","slug":"netease-water-flow-source","link":"#netease-water-flow-source","children":[]},{"level":3,"title":"netease:snow_recover_able","slug":"netease-snow-recover-able","link":"#netease-snow-recover-able","children":[]},{"level":3,"title":"netease:can_built_over","slug":"netease-can-built-over","link":"#netease-can-built-over","children":[]},{"level":3,"title":"netease:on_stand_on","slug":"netease-on-stand-on","link":"#netease-on-stand-on","children":[]},{"level":3,"title":"netease:on_before_fall_on","slug":"netease-on-before-fall-on","link":"#netease-on-before-fall-on","children":[]},{"level":3,"title":"netease:on_after_fall_on","slug":"netease-on-after-fall-on","link":"#netease-on-after-fall-on","children":[]},{"level":3,"title":"netease:on_entity_inside","slug":"netease-on-entity-inside","link":"#netease-on-entity-inside","children":[]},{"level":3,"title":"netease:on_step_on","slug":"netease-on-step-on","link":"#netease-on-step-on","children":[]},{"level":3,"title":"netease:on_step_off","slug":"netease-on-step-off","link":"#netease-on-step-off","children":[]}]},{"level":2,"title":"事件响应","slug":"事件响应","link":"#事件响应","children":[]}],"git":{},"filePathRelative":"data-driven/block/block_server.md"}');export{e as data};