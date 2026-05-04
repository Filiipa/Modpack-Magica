// priority: 0
"use strict";

/**
 * 
 * @param {Registry.Item} event 
 */
const registerTFMItems = (event) => {

	event.create('tfm:baykok_bone')
			.texture('tfm:item/bone')

	event.create('tfm:wood_iron')
			.texture('tfm:item/ironwood_ingot')

	event.create('tfm:mutated_clay_ball')
			//.texture('tfm:item/ironwood_ingot')

	event.create('tfm:conifer_rosin')
			.texture('tfm:item/conifer_rosin')

	event.create('tfm:shrouded_resin')
			.texture('tfm:item/shrouded_resin')

	event.create('tfm:sticky_resin')
			.texture('tfm:item/sticky_resin')

	event.create('tfm:white_resin')
			.texture('tfm:item/white_resin')

}