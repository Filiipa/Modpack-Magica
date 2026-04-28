// priority: 0
"use strict";

function registerTotemicRecipes(event) {

// Integrate to TFG

event.remove({ id: 'totemic:leather_from_hide' })
event.remove({ id: 'totemic:iron_bells'})
event.replaceInput({ mod: 'totemic' }, 'totemic:buffalo_hide', 'minecraft:leather')

}