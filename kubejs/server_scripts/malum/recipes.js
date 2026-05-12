// priority: -1
"use strict";

function registerTFMMalumRecipes(event) {


event.replaceInput({ type: "malum:spirit_infusion" },"minecraft:iron_ingot", "#c:ingots/iron")
event.replaceInput({ type: "malum:spirit_infusion" },"minecraft:copper_ingot", "#c:ingots/copper")
event.replaceInput({ type: "malum:spirit_infusion" },"minecraft:gold_ingot", "#c:ingots/gold")

event.replaceInput({ type: "malum:spirit_repair" },"minecraft:iron_ingot", "#c:ingots/iron")
event.replaceInput({ type: "malum:spirit_repair" },"minecraft:copper_ingot", "#c:ingots/copper")
event.replaceInput({ type: "malum:spirit_repair" },"minecraft:gold_ingot", "#c:ingots/gold")


}