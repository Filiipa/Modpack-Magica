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


}