// priority: 0
"use strict";

function registerTFCAnvilRecipes(event) {

    event.recipes.tfc.anvil('3x totemic:iron_bells','tfc:metal/ingot/cast_iron',
            [
                'hit_any',
                'hit_any',
                'upset_not_last'
            ]
        )

    //# Eidolon

    event.recipes.tfc.anvil('eidolon_repraised:pewter_ingot','eidolon_repraised:pewter_blend',
            [
                'hit_any',
                'hit_any',
                'upset_not_last'
            ]
        )
        .tier(3)
}

