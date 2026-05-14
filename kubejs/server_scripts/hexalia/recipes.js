// priority: -1
"use strict";

function registerHexaliaRecipes(event) {

    registerHexaliaRemoveRecipes(event)

//#region Replace Recipes with their TFC Integration

// Replace recipes

    event.replaceInput({ id: 'hexalia:nesting_block'}, "minecraft:string", "#c:strings")
    event.replaceInput({ id: 'hexalia:hex_focus'}, "minecraft:amethyst_shard", "tfc:gem/amethyst")
    event.replaceInput({ id: 'hexalia:mortar_and_pestle'}, "minecraft:stone", '#c:tools/hammer')

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

    event.remove({ id: "hexalia:shelf"},)
    event.recipes.tfc.shaped('hexalia:shelf', [
            'A A',
            'BBB',
            '   '
        ], {
            A: "#tfc:firepit_sticks",
            B: "#tfm:cauldron_ingots"
        }).id('tfm:crafting/shelf')

    //#region Mutation Recipe

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
            "ingredient": {"item": 'tfc:plant/artists_conk'},
        },
        "output": "hexalia:dreamshroom"
    }).id("tfm:dreamshroom_from_mutation")

    event.custom({
        "type": "hexalia:mutation",
        "input": {
            "item": 'tfc:fire_clay_block'
        },
        "output": 'tfm:mutated_clay'
    }).id("tfm:mutated_clay_from_fire_clay")

    event.remove({ id: 'hexalia:spirit_bloom_from_mutation' })
    event.custom({
        "type": "hexalia:mutation",
        "input": {
            "item": "tfc:plant/blue_orchid"
        },
        "output": "hexalia:spirit_bloom"
    }).id("tfm:spirit_bloom_from_mutation")

    event.remove({ id: 'hexalia:siren_kelp_from_mutation' })
    event.custom({
        "type": "hexalia:mutation",
        "input": {
            "tag": "tfm:kelps"
        },
        "output": "hexalia:siren_kelp"
    }).id("tfm:siren_kelp_from_mutation")

    event.remove({ id: 'hexalia:lotus_flower_from_mutation' })
    event.custom({
        "type": "hexalia:mutation",
        "input": {
            "tag": "tfm:lily_pad"
        },
        "output": "hexalia:lotus_flower"
    }).id("tfm:lotus_flower_from_mutation")

    event.remove({ id: 'hexalia:saltsprout_from_mutation' })
    event.custom({
        "type": "hexalia:mutation",
        "input": {
            "item": 'tfc:cactus_wood'
        },
        "output": "hexalia:saltsprout"
    }).id("tfm:saltsprout_from_mutation")

    // Sand

    event.remove({ id: 'hexalia:red_sand_from_mutation' })
    event.custom({ "type": "hexalia:mutation", "input": { "item": "tfc:sand/brown" }, "output": "tfc:sand/white" }).id("tfm:sand_brown_to_white")
    event.custom({ "type": "hexalia:mutation", "input": { "item": "tfc:sand/white" }, "output": "tfc:sand/black" }).id("tfm:sand_white_to_black")
    event.custom({ "type": "hexalia:mutation", "input": { "item": "tfc:sand/black" }, "output": "tfc:sand/red" }).id("tfm:sand_black_to_red")
    event.custom({ "type": "hexalia:mutation", "input": { "item": "tfc:sand/red" }, "output": "tfc:sand/yellow" }).id("tfm:sand_red_to_yellow")
    event.custom({ "type": "hexalia:mutation", "input": { "item": "tfc:sand/yellow" }, "output": "tfc:sand/green" }).id("tfm:sand_yellow_to_green")
    event.custom({ "type": "hexalia:mutation", "input": { "item": "tfc:sand/green" }, "output": "tfc:sand/pink" }).id("tfm:sand_green_to_pink")
    event.custom({ "type": "hexalia:mutation", "input": { "item": "tfc:sand/pink" }, "output": "tfc:sand/brown" }).id("tfm:sand_pink_to_brown")

    //#endregion

    //#region Brazier Recipe

    event.remove({ id: 'hexalia:galeberries_from_brazier' })
    event.custom({
        "type": "hexalia:ritual_brazier",
        "input": {
            "type": "tfm:fresh",
            "ingredient": { "tag": "tfm:berries" },
        },
        "output": "hexalia:galeberries"
    }).id("tfm:galeberries_from_brazier")

    event.remove({ id: 'hexalia:celestial_crystal_from_brazier'})
    event.custom({
        "type": "hexalia:ritual_brazier",
        "input": { "item": "tfc:gem/amethyst" },
        "output": "hexalia:celestial_crystal"
    }).id("tfm:celestial_crystal_from_brazier")

    event.remove({ output: "minecraft:glistering_melon_slice" })
    event.custom({
        "type": "hexalia:ritual_brazier",
        "input": {
            "type": "tfm:fresh",
            "ingredient": { "item": "tfc:food/melon_slice" },
        },
        "output": "minecraft:glistering_melon_slice"
    }).id("tfm:glistering_melon_slice_from_brazier")

    event.custom({
        "type": "hexalia:ritual_brazier",
        "input": { "item": "tfm:conifer_rosin_ball" },
        "output": "minecraft:slime_ball"
    }).id("tfm:slimeball_from_brazier")

    event.remove({ id: 'hexalia:celestial_crystal_block_from_brazier'})

    //#region Ritual Table

    event.remove({ id: 'hexalia:ritual_table'})
    event.recipes.tfc.shaped('hexalia:ritual_table', [
            'BAB',
            ' C ',
            'BBB'
        ], {
            A: 'tfc:plant/moss',
            B: 'tfc:rock/bricks/basalt',
            C: "#minecraft:coals"
        }).id('tfm:crafting/ritual_table')

    // Armour gated behind Hexerei Crucible

    event.remove({ id: 'hexalia:bloomwrap_hat_from_ritual_table'})
    event.custom({
        "type": "hexalia:ritual_table",
        "ingredients": [
            { "item": "minecraft:leather_helmet" },
            { "item": "hexalia:silk_fiber" },
            { "tag": "hexalia:tulips" },
            { "item": "hexalia:mandrake"},
            { "item": "hexerei:moon_dust"}
        ],
            "output":"hexalia:bloomwrap_hat"
    }).id("tfm:bloomwrap_hat_from_ritual_table")

    event.remove({ id: 'hexalia:bloomwrap_robes_from_ritual_table'})
    event.custom({
        "type": "hexalia:ritual_table",
        "ingredients": [
            { "item": "minecraft:leather_chestplate" },
            { "item": "hexalia:silk_fiber" },
            { "item": 'tfm:white_resin' },
            { "item": "hexalia:earth_node"},
            { "item": "hexerei:moon_dust"}
        ],
            "output":"hexalia:bloomwrap_robes"
    }).id("tfm:bloomwrap_robes_from_ritual_table")

    event.remove({ id: 'hexalia:bloomwrap_leggings_from_ritual_table'})
    event.custom({
        "type": "hexalia:ritual_table",
        "ingredients": [
            { "item": "minecraft:leather_leggings" },
            { "item": "hexalia:silk_fiber" },
            { "type": "tfm:fresh", "ingredient": { "item": 'firmalife:food/raw_honey'} },
            { "item": "hexalia:spirit_bloom"},
            { "item": "tfc:plant/snapdragon_pink"}
        ],
            "output":"hexalia:bloomwrap_leggings"
    }).id("tfm:bloomwrap_leggings_from_ritual_table")

    event.remove({ id: 'hexalia:bloomwrap_boots_from_ritual_table'})
    event.custom({
        "type": "hexalia:ritual_table",
        "ingredients": [
            { "item": "minecraft:leather_boots" },
            { "item": "hexalia:silk_fiber" },
            { "item": "hexalia:air_node" },
            { "item": "minecraft:sugar" },
            { "item": "tfc:plant/dandelion" }
        ],
            "output":"hexalia:bloomwrap_boots"
    }).id("tfm:bloomwrap_boots_from_ritual_table")

    // Hexalia Elemental Nodes

    event.remove({ id: 'hexalia:air_node_from_ritual_table'})
    event.custom({
        "type": "hexalia:ritual_table",
        "ingredients": [
            { "item": 'tfc:gem/amethyst' },
            { "item": "minecraft:feather" },
            { "item": "tfc:plant/dandelion" }
        ],
            "output":"hexalia:air_node"
    }).id("tfm:air_node_from_ritual_table")

    event.remove({ id: 'hexalia:fire_node_from_ritual_table'})
    event.custom({
        "type": "hexalia:ritual_table",
        "ingredients": [
            { "item": 'tfc:gem/amethyst' },
            { "tag": 'minecraft:coals' },
            { "item": "tfc:plant/sunflower" }
        ],
            "output":"hexalia:fire_node"
    }).id("tfm:fire_node_from_ritual_table")

    event.remove({ id: 'hexalia:earth_node_from_ritual_table'})
    event.custom({
        "type": "hexalia:ritual_table",
        "ingredients": [
            { "item": 'tfc:gem/amethyst' },
            { "item": "minecraft:clay_ball" },
            { "item": "tfc:plant/artists_conk" }
        ],
            "output":"hexalia:earth_node"
    }).id("tfm:earth_node_from_ritual_table")

    event.remove({ id: 'hexalia:water_node_from_ritual_table'})
    event.custom({
        "type": "hexalia:ritual_table",
        "ingredients": [
            { "item": 'tfc:gem/amethyst' },
            { "tag": "tfm:lily_pad" },
            { "item": "minecraft:ink_sac" }
        ],
            "output":"hexalia:water_node"
    }).id("tfm:water_node_from_ritual_table")

    event.remove({ id: 'hexalia:ghostveil'})
    event.custom({
        "type": "hexalia:ritual_table",
        "ingredients": [
            { "item": "minecraft:leather_chestplate" },
            { "item": "hexalia:ghost_fern" },
            { "item": "hexalia:ghost_fern" },
            { "item": "hexalia:silk_fiber" },
            { "item": "hexalia:silk_fiber" }
        ],
            "output":"hexalia:ghostveil"
    }).id("tfm:ghostveil_from_ritual_table")

    event.remove({ id: "hexalia:bogshade_boots"})
    event.custom({
        "type": "hexalia:ritual_table",
        "ingredients": [
            { "item": "minecraft:leather_boots" },
            { "item": "hexalia:water_node" },
            { "tag": "tfm:kelps" },
            { "item": "hexalia:silk_fiber" },
            { "item": "hexalia:silk_fiber" }
        ],
            "output":"hexalia:bogshade_boots"
    }).id("tfm:bogshade_boots_from_ritual_table")

    // Enchanted Plants

    /*
    event.remove({ id: ''})
    event.custom({
        "type": "hexalia:ritual_table",
        "ingredients": [
            { "item": },
            { "item": },
            { "item": }
        ],
            "output": 
    }).id("tfm:")
    */

    event.remove({ id: 'hexalia:morphora_from_ritual_table'})
    event.custom({
        "type": "hexalia:ritual_table",
        "ingredients": [
            { "item": "tfc:plant/poppy" },
            { "item": "hexalia:dream_paste" },
            { "item": "hexalia:spirit_powder" },
            { "item": "hexalia:earth_node"},
            { "item": "hexalia:tree_resin"}
        ],
            "output":"hexalia:morphora"
    }).id("tfm:morphora_from_ritual_table")

    event.remove({ id: 'hexalia:grimshade_from_ritual_table'})
    event.custom({
        "type": "hexalia:ritual_table",
        "ingredients": [
            { "item": "tfc:plant/blue_ginger"},
            { "item": "minecraft:wither_rose"},
            { "item": "hexalia:ghost_powder"},
            { "item": "minecraft:bone"},
            { "item": "minecraft:black_dye"}
        ],
            "output": "hexalia:grimshade"
    }).id("tfm:grimshade_from_ritual_table")

    event.remove({ id: 'hexalia:nautilite_from_ritual_table'})
    event.custom({
        "type": "hexalia:ritual_table",
        "ingredients": [
            { "tag": 'tfm:kelps'},
            { "item": "hexalia:siren_paste"},
            { "item": "hexalia:water_node"},
            { "item": "minecraft:nautilus_shell"},
            { "item": "minecraft:prismarine_shard"}
        ],
            "output": "hexalia:nautilite"
    }).id("tfm:nautilite_from_ritual_table")

    event.remove({ id: 'hexalia:windsong_from_ritual_table'})
    event.custom({
        "type": "hexalia:ritual_table",
        "ingredients": [
            { "item": "tfc:plant/oxeye_daisy"},
            { "item": "hexalia:air_node"},
            { "item": "hexalia:ghost_powder"},
            { "item": "minecraft:feather"},
            { "item": "minecraft:phantom_membrane"}
        ],
            "output": "hexalia:windsong"
    }).id("tfm:windsong_from_ritual_table")

    event.remove({ id: 'hexalia:astrylis_from_ritual_table'})
    event.custom({
        "type": "hexalia:ritual_table",
        "ingredients": [
            { "item": "tfc:plant/lily_of_the_valley"},
            { "item": "hexalia:celestial_crystal"},
            { "item": "hexalia:earth_node"},
            { "item": "minecraft:bone_meal"},
            { "item": "minecraft:glowstone_dust"}
        ],
            "output": "hexalia:astrylis"
    }).id("tfm:astrylis_from_ritual_table")

    event.remove({ id: 'hexalia:lourdes_from_ritual_table'})
    event.custom({
        "type": "hexalia:ritual_table",
        "ingredients": [
            { "item": "tfc:plant/blue_orchid" },
            { "item": "hexalia:air_node" },
            { "type": "tfm:fresh", "ingredient": { "item": "firmalife:food/raw_honey" } },
            { "item": "minecraft:glistering_melon_slice" },
            { "item": "hexalia:dream_paste" }
        ],
        "output": "hexalia:lourdes"
    }).id("tfm:lourdes_from_ritual_table")

    event.remove({ id: 'hexalia:aegiflora_from_ritual_table'})
    event.custom({
        "type": "hexalia:ritual_table",
        "ingredients": [
            { "item": "tfc:plant/dandelion"},
            { "item": "minecraft:gunpowder"},
            { "item": "hexalia:ghost_powder"},
            { "item": "hexalia:lotus_blossom"},
            { "item": "tfc:plant/moss"}
        ],
            "output": "hexalia:aegiflora"
    }).id("tfm:aegiflora_from_ritual_table")

    //#region Mortar and Pestle

    /*
    event.custom({
        "type": "hexalia:mortar_and_pestle",
        "ingredients": [
            { "item": },
            { "type": "tfm:fresh", "ingredient": { "item": } },
            { "tag": }
        ],
        "result": ""
    }).id("tfm:")
    */

    event.remove({ id: 'hexalia:fragrant_nectar_from_mortar' })
    event.custom({
        "type": "hexalia:mortar_and_pestle",
        "ingredients": [
            { "tag": "tfm:flowers_temperate" },
            { "type": "tfm:fresh", "ingredient": { "item": 'firmalife:food/raw_honey'} },
            { "tag": "hexalia:crushed_herbs" }
        ],
        "result": "hexalia:fragrant_nectar"
    }).id("tfm:fragrant_nectar_from_mortar")

    event.remove({ id: 'hexalia:menders_salve_from_mortar' })
    event.custom({
        "type": "hexalia:mortar_and_pestle",
        "ingredients": [
            { "item": "hexalia:tree_resin"},
            { "item": "tfc:plant/cornflower"},
            { "item": "tfc:plant/oxeye_daisy"}
        ],
        "result": "hexalia:menders_salve"
    }).id("tfm:menders_salve_from_mortar")

    event.remove({ id: 'hexalia:brambleguard_salve_from_mortar'})
    event.custom({
        "type": "hexalia:mortar_and_pestle",
        "ingredients": [
            { "item": "hexalia:rabbage"}, // MODIFY WHEN TFC CROPS ADDED
            { "item": "tfc:plant/poppy"},
            { "item": "tfc:plant/houstonia"}
        ],
        "result": "hexalia:brambleguard_salve"
    }).id("tfm:brambleguard_salve_from_mortar")

    //#region Small Cauldron

    event.remove({ id: 'hexalia:brew_of_spikeskin_from_small_cauldron'})
    event.custom({
        "type": "hexalia:small_cauldron",
        "ingredients": [
            { "item": "hexalia:celestial_crystal" },
            { "item": "tfc:metal/ingot/cast_iron" },
            { "type": "tfm:fresh", "ingredient": { "tag": "tfm:berries" } },
            { "item": "hexalia:tree_resin" }
        ],
        "result": {
            "item": "hexalia:brew_of_spikeskin"
        }
    }).id("tfm:brew_of_spikeskin_from_small_cauldron")

    event.remove({ id: 'hexalia:brew_of_siphon_from_small_cauldron'})
    event.custom({
        "type": "hexalia:small_cauldron",
        "ingredients": [
            { "item": "hexalia:dream_paste" },
            { "item": "tfc:metal/ingot/cast_iron" },
            { "item": "hexalia:siren_paste"},
            { "item": "minecraft:redstone" }
        ],
        "result": {
            "item": "hexalia:brew_of_siphon"
        }
    }).id("tfm:brew_of_siphon_from_small_cauldron")

    event.remove({ id: 'hexalia:brew_of_daybloom_from_small_cauldron'})
    event.custom({
        "type": "hexalia:small_cauldron",
        "ingredients": [
            { "item": "hexalia:sunfire_tomato" }, // Change when TFC Sunfire implemented
            { "item": "hexalia:spirit_powder" },
            { "type": "tfm:fresh", "ingredient": { "tag": "tfm:berries" } },
            { "item": "hexalia:witchweed" }
        ],
        "result": {
            "item": "hexalia:brew_of_daybloom"
        }
    }).id("tfm:brew_of_daybloom_from_small_cauldron")

    // Custom Craft

    event.remove({ id: 'totemic:eagle_bone_whistle'})
    event.custom({
        "type": "hexalia:ritual_table",
        "ingredients": [
            { "item": "totemic:eagle_bone" },
            { "item": "totemic:eagle_feather" },
            { "tag": "c:strings" },
            { "item": "hexalia:air_node"},
            { "tag": "tfm:cold_plants"}
        ],
            "output":"totemic:eagle_bone_whistle"
    }).id("tfm:eagle_bone_whistle")

    event.remove({ id: 'hexalia:rustic_bottle'})
    event.recipes.tfc.glassworking(
        "hexalia:rustic_bottle",
        'tfc:silica_glass_batch',
        [
            'tfc:pinch',
            'tfc:gold',
            'tfc:blow'
        ]
    ).id('tfm:rustic_bottle')

    // Eidolon Crucible recipes

    event.recipes.eidolon_repraised.crucible(
    '8x hexalia:salt', //output
    [
        StepIngredients.of(["tfc:powder/salt", "hexalia:saltsprout"], 0),
        StepIngredients.of(["tfc:powder/salt"], 2)
    ]
    ).id('tfm:salt_crucible')

    // Eidolon Ritual Brazier Crafting

    event.remove({ id: 'hexalia:silkweave_footwraps'})
    event.recipes.eidolon_repraised.ritual_brazier_crafting(
    "hexalia:silkweave_footwraps", //item output
    "minecraft:leather_boots", //reagent
    [ "hexalia:silk_fiber", "hexalia:silk_fiber", "hexalia:silk_fiber", "hexalia:silk_fiber" ], //pedestal items
    ["minecraft:white_wool", "minecraft:white_wool"], //focus items
    10.0, //health requirement
    false //keep nbt
    ).id('tfm:silkweave_footwraps')

    event.remove({ id: 'hexalia:silkweave_bindings'})
    event.recipes.eidolon_repraised.ritual_brazier_crafting(
    "hexalia:silkweave_bindings", //item output
    "minecraft:leather_leggings", //reagent
    [ "hexalia:silk_fiber", "hexalia:silk_fiber", "hexalia:silk_fiber", "hexalia:silk_fiber" ], //pedestal items
    ["minecraft:white_wool", "hexalia:earth_node", "minecraft:white_wool"], //focus items
    20.0, //health requirement
    false //keep nbt
    ).id('tfm:silkweave_bindings')

    event.remove({ id: 'hexalia:silkweave_mantle'})
    event.recipes.eidolon_repraised.ritual_brazier_crafting(
    "hexalia:silkweave_mantle", //item output
    "minecraft:leather_chestplate", //reagent
    [ "hexalia:silk_fiber", "hexalia:silk_fiber", "hexalia:silk_fiber", "hexalia:silk_fiber" ], //pedestal items
    ["minecraft:white_wool", "hexalia:earth_node", "minecraft:white_wool"], //focus items
    30.0, //health requirement
    false //keep nbt
    ).id('tfm:silkweave_mantle')

    event.remove({ id: 'hexalia:silkweave_hood'})
    event.recipes.eidolon_repraised.ritual_brazier_crafting(
    "hexalia:silkweave_hood", //item output
    "minecraft:leather_helmet", //reagent
    [ "hexalia:silk_fiber", "hexalia:silk_fiber" ], //pedestal items
    ["hexalia:earth_node" ], //focus items
    15.0, //health requirement
    false //keep nbt
    ).id('tfm:silkweave_hood')

    // Eidolon Magic Workben

    event.recipes.eidolon_repraised.worktable(
    'minecraft:gold_block', //output
    ['aba', 'cdc'], //pattern
    ['e'], //reagent pattern
    {
        a: 'minecraft:gold_ingot',
        b: 'minecraft:diamond',
        c: 'minecraft:copper_ingot',
        d: 'minecraft:apple',
        e:  "tfc:metal/axe/black_steel"
    } //pattern key
)

    // Hexerei Cauldron

}