// priority: 0
"use strict";

function registerTFCEvents(event) {

event.heat({
        ingredient: 'tfm:wood_iron',
        heatCapacity: 0.5
    }, 'tfm:wood_iron')


    event.fluidHeat({
        fluid: 'tfm:wood_iron',
        meltTemperature: 1550,
        specificHeatCapacity: 0.023
    }, 'tfm:wood_iron')


}