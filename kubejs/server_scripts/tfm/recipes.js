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



}