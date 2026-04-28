// priority: 0
"use strict";

function registerHexaliaItemTags(event) {

	// #region Hexalia Tags for plants

    // Switch minecraft tulips to tfc

    event.removeAll('hexalia:tulips')

	event.add('hexalia:tulips', 'tfc:plant/tulip_orange')
    event.add('hexalia:tulips', 'tfc:plant/tulip_pink')
    event.add('hexalia:tulips', 'tfc:plant/tulip_red')
    event.add('hexalia:tulips', 'tfc:plant/tulip_white')

    //#endregion

}