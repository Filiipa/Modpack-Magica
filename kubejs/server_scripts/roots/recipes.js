// priority: -1
"use strict";

function registerRootsRecipes(event) {

    event.remove({ id: 'rootsclassic:ritual/crafting/living_sword' })
    event.custom({
        "type": "rootsclassic:ritual",
        "color": "#92d62b",
        "effect": "rootsclassic:crafting",
        "effectConfig": {
            "result": {
                "count": 1,
                "id": "rootsclassic:living_sword"
            }
        },
        "incenses": [
            { "item": "rootsclassic:oak_bark" },
            { "item": "rootsclassic:oak_bark" }
        ],
        "ingredients": [
            { "item": "tfc:metal/sword/wrought_iron" },
            { "item": "rootsclassic:verdant_sprig" },
            { "item": "eidolon_repraised:arcane_gold_ingot" }
        ],
        "level": 0
    }).id("tfm:living_sword_from_ritual")

}