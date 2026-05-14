// priority: 0
"use strict";

function registerTFCDamageResistence(event) {

    event.itemDamageResistance(
        'hexalia:ghostveil',
        {
            slashing: 13,
            piercing: 17,
            crushing: -6
        }
    )

    event.itemDamageResistance(
        'hexalia:bogshade_boots',
        {
            slashing: 4,
            piercing: 7,
            crushing: -2
        }
    )

}