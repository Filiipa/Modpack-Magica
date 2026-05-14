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

    event.replaceInput(
        { type: 'eidolon_repraised:crucible' },
        'eidolon_repraised:silver_ingot',
        'tfc:metal/ingot/silver'
    )
    event.replaceInput(
        { type: 'eidolon_repraised:worktable' },
        'eidolon_repraised:silver_ingot',
        'tfc:metal/ingot/silver'
    )
    event.replaceInput(
        { type: 'eidolon_repraised:ritual_brazier_crafting' },
        'eidolon_repraised:silver_ingot',
        'tfc:metal/ingot/silver'
    )

    event.replaceOutput(
        { type: 'eidolon_repraised:crucible' },
        'eidolon_repraised:silver_ingot',
        'tfc:metal/ingot/silver'
    )
    event.replaceOutput(
        { type: 'eidolon_repraised:worktable' },
        'eidolon_repraised:silver_ingot',
        'tfc:metal/ingot/silver'
    )

    event.replaceOutput(
        { type: 'minecraft:smelting' },
        'eidolon_repraised:silver_ingot',
        'tfc:metal/ingot/silver'
    )
    event.replaceOutput(
        { type: 'minecraft:blasting' },
        'eidolon_repraised:silver_ingot',
        'tfc:metal/ingot/silver'
    )

    //#region Remove recipes

    event.remove({ id: 'eidolon_repraised:pewter_blend'})
    event.remove({ id: 'eidolon_repraised:blast_pewter_blend'})
    event.remove({ id: 'eidolon_repraised:smelt_pewter_blend'})

    // Integrate Recipes

    event.remove({ id: 'eidolon_repraised:sulfur' })
    event.recipes.eidolon_repraised.crucible(
        'eidolon_repraised:sulfur',
        [
            StepIngredients.of(['tfc:powder/sulfur', 'tfc:powder/sulfur', 'tfc:powder/sulfur', 'tfc:powder/sulfur', 'eidolon_repraised:enchanted_ash'], 0)
        ]
    ).id('tfm:sulfur_from_crucible')

}