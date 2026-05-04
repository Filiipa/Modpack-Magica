// priority: 0
"use strict";

/**
 * 
 * @param {Registry.Item} event 
 */
const registerTFMBlocks = (event) => {

    event.create('tfm:mutated_clay') // Create a new block
        .soundType('sand')
        .hardness(1) // Set hardness (affects mining time)
        .resistance(1) // Set resistance (to explosions, etc)
        .tagBlock('tfg:mutated_clay') // Tag the block with `#minecraft:my_custom_tag` (can have multiple tags)
        .tagBlock('minecraft:mineable/shovel') //can be mined faster with an axe
        //.setLootTableJson('kubejs/data/tfm/loot_table/blocks/mutated_clay')

}