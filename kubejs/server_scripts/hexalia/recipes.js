// priority: -1
"use strict";

function registerHexaliaRecipes(event) {

event.replaceInput({ id: 'hexalia:small_cauldron'}, "minecraft:cobbled_deepslate", "#tfm:cauldron_ingots")

event.remove({ id: 'hexalia:ghost_fern_from_mutation' })
event.custom({
    "type": "hexalia:mutation",
    "input": {
        "type": "tfm:fresh",
        "ingredient": { "tag": "tfm:ferns" }
    },
    "output": "hexalia:ghost_fern"
})

event.remove({ id: 'hexalia:witchweed_from_mutation' })
event.custom({
    "type": "hexalia:mutation",
    "input": {
        "type": "tfm:fresh",
        "ingredient": { "tag": 'tfm:grass' },
},
    "output": 'hexalia:witchweed'
})

event.remove({ id: 'hexalia:dreamshroom_from_mutation' })
event.custom({
    "type": "hexalia:mutation",
    "input": {
        "type": "tfm:fresh",
        "ingredient": {"tag": 'tfm:corals'},
    },
    "output": "hexalia:dreamshroom"
})

event.remove({ id: 'hexalia:galeberries_from_brazier' })
event.custom({
    "type": "hexalia:ritual_brazier",
    "input": {
        "type": "tfm:fresh",
        "ingredient": { "tag": "tfm:berries" },
    },
    "output": "hexalia:galeberries"
})

// Remove useless recipe fow now

event.remove({ id: 'hexalia:packed_ice_from_mutation'})
event.remove({ id: 'hexalia:blue_ice_from_mutation'})
event.remove({ id: 'hexalia:tuff_from_mutation'})

}