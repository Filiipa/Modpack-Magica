"use strict";

const registerTFMPlacedFeatures = (event) => {

	registerTFMOverworldPlacedFeatures(event);

}

const registerTFMEntityTypeTags = (event) => {

	registerTFMOverworldEntityTypeTags(event)

}

const registerTFMItemTags = (event) => {

	registerHexaliaItemTags(event)
	registerTFMItemTagsOverworld(event)
	registerTotemicItemTags(event)


}