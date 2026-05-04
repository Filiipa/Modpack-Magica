// priority: 1
"use strict";

ServerEvents.tags('item', event => {
	registerTFMItemTags(event)
	registerMinecraftItemTags(event)
	registerAFCItemTags(event)
})

ServerEvents.tags('block', event => {
	//registerTFMBlockTags(event)
	registerMinecraftBlockTags(event)
	registerAFCBlockTags(event)
})

ServerEvents.tags('fluid', event => {
	//registerAFCFluidTags(event)
	//registerTFMFluidTags(event)
})
/*
ServerEvents.tags('worldgen/configured_feature', event => {
	registerTFMConfiguredFeatures(event)
})
*/
ServerEvents.tags('worldgen/placed_feature', event => {
	// Remove default veins
	//event.removeAll('tfc:in_biome/veins')
	//registerMinecraftItemTags(event)
	registerTFMPlacedFeatures(event)
})
/*
ServerEvents.tags('worldgen/biome', event => {
	registerTFMBiomeTags(event)
})
*/
ServerEvents.tags('entity_type', event => {
	registerTFMEntityTypeTags(event)
})

TFCEvents.data(event => {
	registerTFCEvents(event)
	registerTFCDataForArborFirmaCraft(event)
})

LootJS.lootTables(event => {
    registerTotemicLoots(event)
})

/** Correct recipe IDs to replace invalid characters */
function linuxUnfucker(value) {
	const str = (value === undefined || value === null) ? "" : value.toString();
	return str.replace(/[/:\s]/g, "_");
};

ServerEvents.recipes(event => {
	registerTFMRecipes(event)
	registerTFMIntegrationRecipes(event)
	registerMinecraftRecipes(event)
	removeCreateRecipes(event)
	registerTotemicRecipes(event)
	registerTFCAnvilRecipes(event)
	registerHexaliaRecipes(event)
	registerAFCRecipes(event)
})
