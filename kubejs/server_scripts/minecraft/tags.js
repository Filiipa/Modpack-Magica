// priority: 0
"use strict";

/**
 * @param {Internal.TagsEventJS} event
 */
const registerMinecraftItemTags = (event) => {

    console.log('[TFM] MINECRAFT_DISABLED_ITEMS type: ' + typeof global.MINECRAFT_DISABLED_ITEMS)
    
    global.MINECRAFT_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
        event.add('c:hidden_from_recipe_viewers', item)
    })

    global.MINECRAFT_HIDED_ITEMS.forEach(item => {
        event.add('c:hidden_from_recipe_viewers', item)
    })

    event.add('c:hidden_from_recipe_viewers', /minecraft.*potion.*/)

    event.add('tfc:colored_terracotta', 'minecraft:white_terracotta')
    event.add('tfc:bells', 'minecraft:bell')
    event.add('tfc:makes_black_dye', 'minecraft:ink_sac')
    event.add('tfc:makes_white_dye', 'minecraft:bone_meal')

    event.remove('forge:gems', 'minecraft:charcoal')
    event.remove('forge:gems', 'minecraft:flint')
}

/**
 * @param {Internal.TagsEventJS} event
 */
const registerMinecraftBlockTags = (event) => {
    global.MINECRAFT_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })

    event.add('minecraft:mineable/pickaxe', 'minecraft:glowstone')

    event.removeAll('minecraft:enderman_holdable')
    event.add('minecraft:enderman_holdable', '#tfc:dirt')
    event.add('minecraft:enderman_holdable', '#tfc:mud')
    event.add('minecraft:enderman_holdable', '#tfc:loose_rocks')
    event.add('minecraft:enderman_holdable', '#forge:gravel')
    event.add('minecraft:enderman_holdable', '#forge:sand')
    event.add('minecraft:enderman_holdable', '#forge:cobblestone')
    event.add('minecraft:enderman_holdable', '#tfc:plants')
    event.add('minecraft:enderman_holdable', 'tfc:pumpkin')
    event.add('minecraft:enderman_holdable', 'tfc:melon')
    event.add('minecraft:enderman_holdable', '#minecraft:leaves')
}