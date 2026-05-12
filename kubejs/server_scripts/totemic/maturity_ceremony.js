const ANIMAL_GROWTH_ITEM = 'tfm:spring_node'
const ANIMAL_GROWTH_ITEM_COUNT = 4
const ANIMAL_GROWTH_MISSING_MSG = 'totemic.ceremony.animal_growth.missing'

TotemicEvents.ceremonySelection('totemic:animal_growth', event => {
    requireOnSelection(event, ANIMAL_GROWTH_ITEM, ANIMAL_GROWTH_ITEM_COUNT, ANIMAL_GROWTH_MISSING_MSG)
})

TotemicEvents.ceremonyStartupSuccess('totemic:animal_growth', event => {
    consumeOnSuccess(event, ANIMAL_GROWTH_ITEM, ANIMAL_GROWTH_ITEM_COUNT, ANIMAL_GROWTH_MISSING_MSG)
})