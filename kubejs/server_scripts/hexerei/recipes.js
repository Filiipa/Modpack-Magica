// priority: -1
'use strict';

/***
 * {
  "type": "hexerei:drying_rack",
  "input": {
    "item": "example:input"
  },
  "output": {
    "id": "example:output"
  },
  "dryingTime": (ticks)
}
 */
const registerHexereiDryingRecipes = (event) => {

}

/***
 * {
  "type": "hexerei:pestle_and_mortar",
  "ingredients": [
    {
      "item": "example:input_1"
    },
    {
      "item": "example:input_2"
    },
    {
      "item": "example:input_3"
    },
    {
      "item": "example:input_4"
    },
    {
      "item": "example:input_5"
    }
  ],
  "output": {
    "id": "example:output",
    "count": 1
  },
  "grindingTime": (ticks)
}
 */
const registerHexereiMortarRecipes = (event) => {
    
}

/***
 * {
  "type": "hexerei:mixingcauldron",
  "fluid": {
    "id": "example:fluid",
    "amount": (mB)
  },
  "ingredients": [
    {
      "item": "example:input_1"
    },
    {
      "item": "example:input_2"
    },
    {
      "item": "example:input_3"
    },
    {
      "item": "example:input_4"
    },
    {
      "item": "example:input_5"
    },
    {
      "item": "example:input_6"
    },
    {
      "item": "mexample:input_7"
    },
    {
      "item": "example:input_8"
    }
  ],
  "output": {
    "id": "example:output"
  },
  "heatRequirement": (heated/superheated/none)
}
 */
const registerHexereiCauldronItemRecipes = (event) => {
    
}

/***
 * {
  "type": "hexerei:mixingcauldron",
  "fluid": {
    "id": "example:fluid",
    "amount": (mB)
  },
  "ingredients": [
    {
      "item": "example:input_1"
    },
    {
      "item": "example:input_2"
    },
    {
      "item": "example:input_3"
    },
    {
      "item": "example:input_4"
    },
    {
      "item": "example:input_5"
    },
    {
      "item": "example:input_6"
    },
    {
      "item": "mexample:input_7"
    },
    {
      "item": "example:input_8"
    }
  ],
  "output": {
    "id": "example:output"
    "amount": (mB)
  },
  "heatRequirement": (heated/superheated/none)
}
 */
const registerHexereiCauldronFluidRecipes = (event) => {

}

/***
 * {
  "type": "hexerei:dipper",
  "liquid": {
    "fluid": "example:fluid"
  },
  "input": {
      "item": "example:input"
  },
  "output": {
    "item": "example:output"
  },
  "fluidLevelsConsumed": (mB),
  "dippingTimeInTicks": (ticks),
  "dryingTimeInTicks": (ticks),
  "numberOfDips": (int)
}
 */
const registerHexereiDipperRecipes = (event) => {

  event.remove({ id: 'eidolon_repraised:arcane_seal'})
  event.custom({
    "type": "hexerei:dipper",
    "fluid": { "id": "hexerei:blood_fluid", "amount": 100 },
    "input": { "id": "eidolon_repraised:magicians_wax" },
    "output": { "id": "eidolon_repraised:arcane_seal" },
    "fluidLevelsConsumed": 100,
    "dippingTime": 20*60,
    "dryingTime": 20*60,
    "numberOfDips": 16
}).id("tfm:arcane_seal")

}
