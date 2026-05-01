// priority: 100
"use strict";

StartupEvents.registry('item', event => {
    registerTFMItems(event)
})
/*
StartupEvents.registry('block', event => {
	registerTFGBlocks(event)
})
*/
/*
BlockEvents.modification(event => {
	registerAdAstraBlockModifications(event)
})
	*/
/*
ItemEvents.modification(event => {
	registerAdAstraItemModifications(event)
	registerBeneathItemModifications(event)
	registerCreateItemModifications(event)
	registerFirmalifeItemModifications(event)
	registerGTCEuItemModifications(event)
	registerMinecraftItemModifications(event)
    registerSNSItemModifications(event)
	registerTFGItemModifications(event)
})
*/
StartupEvents.registry('fluid', event => {
	registerTFGFluids(event)
})
/*
StartupEvents.registry('sound_event', event => {
	registerTFGSounds(event)
	
})*/