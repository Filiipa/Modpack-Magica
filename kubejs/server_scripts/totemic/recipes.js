// priority: 0
"use strict";

function registerTotemicRecipes(event) {

// Integrate to TFG

event.remove({ id: 'totemic:leather_from_hide' })
event.remove({ id: 'totemic:iron_bells'})
event.replaceInput({ mod: 'totemic' }, 'totemic:buffalo_hide', 'minecraft:leather')
event.replaceInput({ id:'totemic:totem_whittling_knife'}, 'minecraft:iron_ingot', 'tfc:metal/knife_blade/copper' )

event.recipes.tfc.shaped('totemic:tipi', [
		' A ',
		'ABA',
		'B B'
	], {
		A: '#c:rods/wooden',
		B: 'minecraft:leather'
	}).id('tfc:crafting/tipi')

}