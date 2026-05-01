// priority: 10

function registerTFMOverworldPlacedFeatures(event) {

	// #region Etheria Features

	event.add('tfc:in_biome/surface_structures', 'tfm:etheria/ether_source')

	// #endregion

}

function registerTFMOverworldEntityTypeTags(event) {

	// Tag used by TFC to control monsters spawning on the surface
	event.add('tfc:vanilla_monsters', 'endermanoverhaul:flower_fields_enderman')
	event.add('tfc:vanilla_monsters', 'minecraft:enderman')
	event.add('tfc:vanilla_monsters', 'minecraft:husk')
	event.add('tfc:vanilla_monsters', 'minecraft:drowned')
	event.add('tfc:vanilla_monsters', 'minecraft:slime')

	event.add('tfc:deals_crushing_damage', 'minecraft:husk')
	event.add('tfc:deals_crushing_damage', 'minecraft:drowned')
	event.add('tfc:deals_crushing_damage', 'minecraft:slime')

	event.add('tfc:zombies', 'minecraft:drowned')
	event.add('tfc:zombies', 'minecraft:zombified_piglin')

	event.add('tfg:slimes', 'minecraft:slime')
	event.add('tfg:slimes', 'minecraft:magma_cube')

	// Tags for Totemic Integration

	event.add('totemic:buffalo_dance_targets', 'tfc:cow')

}

function registerTFMItemTagsOverworld(event) {

	// Switch to TFC Kelp

    event.add('tfm:kelps', 'tfc:plant/leafy_kelp')
	event.add('tfm:kelps', 'tfc:plant/giant_kelp_flower')
	event.add('tfm:kelps', 'tfc:plant/winged_kelp')

	// Climate Group

	const tfcColdPlants = [
    'tfc:plant/laminaria',
    'tfc:plant/shawiash',
    'tfc:plant/yellow_saxifrage',
    'tfc:plant/cornflower',
    'tfc:plant/ramunda',
    'tfc:plant/goldenrod',
    'tfc:plant/badderlocks',
    'tfc:plant/labrador_tea',
    'tfc:plant/yellow_water_lily',
    'tfc:plant/bur_reed',
    'tfc:plant/anemone_large_purple',
    'tfc:plant/edelweiss',
    'tfc:plant/tulip_white',
    'tfc:plant/allium',
    'tfc:plant/meads_milkweed',
    'tfc:plant/pulsatilla',
    'tfc:plant/tulip_pink',
    'tfc:plant/tulip_red'
	]
	tfcColdPlants.forEach(item => event.add('tfm:cold_plants', item))

	// Ingot

	event.add('c:ingots', 'tfm:wood_iron')

}