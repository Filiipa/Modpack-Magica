"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} event 
 */
const registerAFCRecipes = (event) => {

	// #region Removes
/*
	global.AFC_DISABLED_ITEMS.forEach(item => {
		event.remove({ input: item })
		event.remove({ output: item })
	})
*/
	//event.remove({ id: "afc:pot/rubber" })
	event.remove({ id: "afc:tree_tapping/hevea_latex" })
	event.remove({ id: "afc:tree_tapping/rubber_fig_latex" })
	event.remove({ id: "afc:tree_tapping/birch_sap"})
	event.remove({ id: "afc:crafting/1_birch_sugar" })
	event.remove({ id: "afc:crafting/1_maple_sugar" })
	event.remove({ id: "afc:crafting/0_birch_sugar_bucket" })
	event.remove({ id: "afc:crafting/0_maple_sugar_bucket" })
	event.remove({ id: "afc:tree_tapping/maple_sap"})

	// #endregion

	event.recipes.tfc.anvil('afc:tree_tap', '#c:ingots/copper', ["hit_last", "upset_second_last", "upset_third_last"])
		.tier(1)
		.id('afc:anvil/tree_tap')

	// TreeTap Heating
	event.recipes.tfc.heating('afc:tree_tap', 1080)
		.resultFluid(Fluid.of("tfc:metal/copper", 100))
		.id('tfg:heating/tree_tap')

	//Syrups

	event.recipes.afc.tree_tapping(Fluid.of('afc:maple_sap', 5), TFC.ingredient.tagBlockIngredient('tfc:maple_logs'))
		.requiresNaturalLog(true)
		.minTemp(-15)
		.maxTemp(5)
		.id("tfg:tree_tapping/maple_log")

	event.recipes.afc.tree_tapping(Fluid.of('afc:birch_sap', 5), TFC.ingredient.tagBlockIngredient('tfc:birch_logs'))
		.requiresNaturalLog(true)
		.minTemp(-15)
		.maxTemp(5)
		.id("tfg:tree_tapping/birch_log")

	event.recipes.afc.tree_tapping(Fluid.of('tfm:pine_resin', 5), TFC.ingredient.tagBlockIngredient('tfm:pine_logs'))
		.requiresNaturalLog(true)
		.minTemp(-15)
		.maxTemp(35)
		.id("tfg:tree_tapping/pine_logs")
		//.tempRange(-10, 60)

	event.recipes.afc.tree_tapping(Fluid.of('tfm:conifer_rosin', 5), TFC.ingredient.tagBlockIngredient('tfm:rosin_logs'))
		.requiresNaturalLog(true)
		.minTemp(-15)
		.maxTemp(35)
		.id("tfg:tree_tapping/rosin_logs")
		//.tempRange(-10, 60)

	event.recipes.afc.tree_tapping(Fluid.of('tfm:sticky_resin', 5), TFC.ingredient.tagBlockIngredient('tfm:sticky_resin'))
		.requiresNaturalLog(true)
		.minTemp(-15)
		.maxTemp(35)
		.id("tfg:tree_tapping/sticky_resin")
		//.tempRange(-10, 60)

	event.recipes.afc.tree_tapping(Fluid.of('tfm:dusky_resin', 5), TFC.ingredient.tagBlockIngredient('tfm:dusky_resin'))
		.requiresNaturalLog(true)
		.minTemp(-15)
		.maxTemp(35)
		.id("tfg:tree_tapping/dusky_resin")
		//.tempRange(-10, 60)

	event.recipes.afc.tree_tapping(Fluid.of('tfm:white_resin', 5), TFC.ingredient.tagBlockIngredient('tfm:white_resin'))
		.requiresNaturalLog(true)
		.minTemp(-15)
		.maxTemp(35)
		.id("tfg:tree_tapping/white_resin")
		//.tempRange(-10, 60)

	//#endregion


	// Syrup into sugar

	event.recipes.tfc.sealed_barrel(Fluid.of('afc:maple_syrup', 100), 24000)
		.outputItem('afc:maple_sugar')
		.id('tfg:barrel/maple_syrup_to_sugar')

	event.recipes.tfc.sealed_barrel(Fluid.of('afc:birch_syrup', 100), 24000)
		.outputItem('afc:birch_sugar')
		.id('tfg:barrel/birch_syrup_to_sugar')

	event.recipes.tfc.sealed_barrel(Fluid.of('tfm:pine_resin', 100), 24000)
		.outputItem('hexalia:tree_resin')
		.id('tfg:barrel/pine_resin_to_resin')
/*
	global.AFC_SAPLINGS.forEach(wood => {
		event.shaped(`4x afc:wood/fallen_leaves/${wood.sapling}`,[
			'AA',
			'AA'
		], {
			A: `afc:wood/leaves/${wood.sapling}`
		}).id(`tfg:shaped/afc/${wood.sapling}_leaves_to_fallen_leaves`);
	});		
	*/
}
