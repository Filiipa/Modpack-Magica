// priority: 1
"use strict";
/*
ServerEvents.tags('item', event => {
	registerTFMItemTags(event)
})

ServerEvents.tags('block', event => {
	registerTFMBlockTags(event)
})

ServerEvents.tags('fluid', event => {
	registerTFMFluidTags(event)
})

ServerEvents.tags('worldgen/configured_feature', event => {
	registerTFMConfiguredFeatures(event)
})
*/
ServerEvents.tags('worldgen/placed_feature', event => {
	// Remove default veins
	//event.removeAll('tfc:in_biome/veins')

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
/*
TFCEvents.data(event => {
	registerTFCDataForArborFirmaCraft(event)
})

LootJS.modifiers((event) => {
	registerTFMLoots(event)
});
*/
/** Correct recipe IDs to replace invalid characters */
function linuxUnfucker(value) {
	const str = (value === undefined || value === null) ? "" : value.toString();
	return str.replace(/[/:\s]/g, "_");
};
/*
ServerEvents.recipes(event => {
	registerTFMRecipes(event)
})
*/