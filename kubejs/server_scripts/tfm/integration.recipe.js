function registerTFMIntegrationRecipes(event) {

// Replace all kelp with #tfm:kelps

    event.replaceInput(
        { input: 'minecraft:kelp' }, // Arg 1: the filter
        'minecraft:kelp',            // Arg 2: the item to replace
        '#tfm:kelps'         // Arg 3: the item to replace it with
        )

    event.replaceInput(
        { input: 'minecraft:dried_kelp' }, // Arg 1: the filter
        'minecraft:dried_kelp',            // Arg 2: the item to replace
        'tfc:food/dried_kelp'         // Arg 3: the item to replace it with
        )
}