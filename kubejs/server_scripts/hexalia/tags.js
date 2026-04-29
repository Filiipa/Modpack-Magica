// priority: 1
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

    event.add('c:salt', "tfc:powder/salt")
    event.add('c:tools/igniter', "tfc:flint_and_pyrite")

    const cauldronIngots = [
        'tfc:brick/basalt',
        'tfc:mud_brick/mollisol',
        'tfc:brick/dolomite',
        'tfc:mud_brick/fluvisol',
        'tfc:brick/shale',
        'tfc:brick/tuff'
    ]
    cauldronIngots.forEach(item => event.add('tfm:cauldron_ingots', item))

    const tfcFern = [
        'tfc:plant/athyrium_fern',
        'tfc:plant/bird_nest_fern',
        'tfc:plant/king_fern',
        'tfc:plant/lady_fern',
        'tfc:plant/licorice_fern',
        'tfc:plant/ostrich_fern',
        'tfc:plant/sword_fern'
    ]
    tfcFern.forEach(item => event.add('tfm:ferns', item))

    const tfcGrass = [
        'tfc:plant/beachgrass',
        'tfc:plant/bluegrass',
        'tfc:plant/bromegrass',
        'tfc:plant/fountain_grass',
        'tfc:plant/manatee_grass',
        'tfc:plant/orchard_grass',
        'tfc:plant/ryegrass',
        'tfc:plant/scutch_grass',
        'tfc:plant/star_grass',
        'tfc:plant/timothy_grass',
        'tfc:plant/raddia_grass',
        'tfc:plant/red_oat_grass',
        'tfc:plant/eel_grass',
        'tfc:plant/switchgrass',
        'tfc:plant/tall_fescue_grass',
        'tfc:plant/turtle_grass',
        'tfc:plant/bear_grass',
        'tfc:plant/dry_grass',
        'tfc:plant/cordgrass'
    ]
    tfcGrass.forEach(item => event.add('tfm:grass', item))

    const tfcCorals = [
        'tfc:coral/tube_coral',
        'tfc:coral/tube_coral_fan',
        'tfc:coral/brain_coral',
        'tfc:coral/brain_coral_fan',
        'tfc:coral/bubble_coral',
        'tfc:coral/bubble_coral_fan',
        'tfc:coral/fire_coral',
        'tfc:coral/fire_coral_fan',
        'tfc:coral/horn_coral',
        'tfc:coral/horn_coral_fan'
    ]
    tfcCorals.forEach(item => event.add('tfm:corals', item))

    const tfcBerries = [
        'tfc:food/blackberry',
        'tfc:food/blueberry',
        'tfc:food/bunchberry',
        'tfc:food/cloudberry',
        'tfc:food/cranberry',
        'tfc:food/elderberry',
        'tfc:food/gooseberry',
        'tfc:food/raspberry',
        'tfc:food/snowberry',
        'tfc:food/strawberry',
        'tfc:food/wintergreen_berry'
    ]
    tfcBerries.forEach(item => event.add('tfm:berries', item))
}