// priority: -1
"use strict";

function registerEidolonRecipes(event) {

event.recipes.eidolon_repraised.crucible(
    'minecraft:glistering_melon_slice',
    [
        StepIngredients.of(['tfc:powder/native_gold', "tfc:powder/native_gold"], 0),
        StepIngredients.of(["eidolon_repraised:enchanted_ash"], 2),
        StepIngredients.of([{ "type": "tfm:fresh", "ingredient": { "item": "tfc:food/melon_slice" } }], 0)
    ]
)

}