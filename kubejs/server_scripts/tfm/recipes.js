// priority: -1
"use strict";

function registerTFMRecipes(event) {

    event.recipes.tfc.heating(
            'tfm:wood_iron',
            1500
        )
        .fluidOutput(Fluid.of('tfm:wood_iron', 100))
        .useDurability()

    event.recipes.tfc.bloomery(
        'tfm:wood_iron',
        Item.of('tfc:powder/flux', 5),
        Fluid.of('tfc:metal/cast_iron', 300),
        10500
    )

    event.recipes.tfc.bloomery(
        'tfm:wood_iron',
        Ingredient.of('#minecraft:logs', 5),
        Fluid.of('tfc:metal/copper', 300),
        200
    )

    // Lead Eidolon

     event.recipes.tfc.heating(
        'eidolon_repraised:lead_ingot[tfc:heat={}]',
        1200
    )
    .fluidOutput(Fluid.of('tfm:metal/lead', 100))

    event.recipes.tfc.bloomery(
        'eidolon_repraised:pewter_blend',
        Ingredient.of("tfc:metal/ingot/wrought_iron", 1),
        Fluid.of('tfm:metal/lead', 100),
        2000
    )

    // Mutated Clay Knapping

    event.remove({ id: 'tfc:knapping/ceramic/unfired_crucible' })
    event.recipes.tfc.knapping(
        'tfc:ceramic/unfired_crucible',
        'tfm:mutated_clay',
        [
            'X   X',
            'X   X',
            'X   X',
            'X   X',
            'XXXXX'
        ]
    )

    event.recipes.tfc.pot(
        [ 'eidolon_repraised:enchanted_ash' ],
        Fluid.of('afc:latex', 1000),
        50,
        110
    )
    .outputs('minecraft:bread', Fluid.of('minecraft:milk', 20))

    event.recipes.tfc.pot(
        ['tfc_debark:kapok_bark'],
        Fluid.of('tfm:aged_conifer_rosin', 1000),
        1000,
        420
    )
    .itemOutput(['tfm:conifer_rosin_ball'])
    .id('tfm:conifer_rosin_ball_from_pot')

    event.custom({
        "type": "firmalife:vat",
        "input_fluid": {
            "amount": 1000,
            "fluid": "tfm:aged_conifer_rosin"
        },
        "input_item": {
            "item": "tfc_debark:kapok_bark"
        },
        "length": 1000,
        "temperature": 420.0,
        "output_item": {
            "id": "tfm:conifer_rosin_ball"
        }
    }).id("tfm:conifer_rosin_ball_from_vat")

    // Resin

    // VERY BUGGY HEXEREI WILL REWORK THEM
    event.custom({
        "type": "hexerei:mixingcauldron",
        "output": { "id": "tfm:white_resin_ball", "count": 1 },
        "ingredients": [
            { "item": "hexerei:animal_fat" },
            { "item": "hexerei:animal_fat" },
            { "type": "tfm:fresh", "ingredient": { "item": "minecraft:honeycomb" } },
            { "item": "hexerei:animal_fat" },
            { "item": "hexerei:animal_fat" },
            { "item": "hexerei:animal_fat" },
            { "type": "tfm:fresh", "ingredient": { "item": "minecraft:honeycomb" } },
            { "item": "hexerei:animal_fat" }
        ],
        "fluid": { "id": "tfm:white_resin", "amount": 1000 },
        "fluidOutput": { "id": "hexerei:tallow_fluid", "amount": 250 },
        "heatRequirement": "superheated",
        "moonRequirement": "first_quarter"
    }).id("tfm:white_resin_ball_from_mixingcauldron")


}