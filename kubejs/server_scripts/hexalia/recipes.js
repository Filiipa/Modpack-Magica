// priority: -1
"use strict";

function registerHexaliaRecipes(event) {

//#region Replace Recipes with their TFC Integration

// Replace recipes

event.replaceInput({ id: 'hexalia:nesting_block'}, "minecraft:string", "#c:strings")

// Crafting table recipe

event.remove({ id: "hexalia:small_cauldron"},)
event.recipes.tfc.shaped('hexalia:small_cauldron', [
		'A A',
		'DCD',
		'ABA'
	], {
		A: "#tfm:cauldron_ingots",
		B: "#minecraft:logs",
        C: "#minecraft:coals",
        D: "#c:rods/copper"
	}).id('tfm:crafting/small_cauldron')

// Mutation Recipe

event.remove({ id: 'hexalia:ghost_fern_from_mutation' })
event.custom({
    "type": "hexalia:mutation",
    "input": {
        "type": "tfm:fresh",
        "ingredient": { "tag": "tfm:ferns" }
    },
    "output": "hexalia:ghost_fern"
}).id("tfm:ghost_fern_from_mutation")

event.remove({ id: 'hexalia:witchweed_from_mutation' })
event.custom({
    "type": "hexalia:mutation",
    "input": {
        "type": "tfm:fresh",
        "ingredient": { "tag": 'tfm:grass' },
},
    "output": 'hexalia:witchweed'
}).id("tfm:witchweed_from_mutation")

event.remove({ id: 'hexalia:dreamshroom_from_mutation' })
event.custom({
    "type": "hexalia:mutation",
    "input": {
        "type": "tfm:fresh",
        "ingredient": {"tag": 'tfm:corals'},
    },
    "output": "hexalia:dreamshroom"
}).id("tfm:dreamshroom_from_mutation")

// Brazier Recipe

event.remove({ id: 'hexalia:galeberries_from_brazier' })
event.custom({
    "type": "hexalia:ritual_brazier",
    "input": {
        "type": "tfm:fresh",
        "ingredient": { "tag": "tfm:berries" },
    },
    "output": "hexalia:galeberries"
}).id("tfm:galeberries_from_brazier")

}