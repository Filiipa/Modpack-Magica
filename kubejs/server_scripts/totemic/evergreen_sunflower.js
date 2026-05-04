const EVERGREEN_ITEM = 'tfc:powder/salt'
const EVERGREEN_ITEM_COUNT = 0
const EVERGREEN_MISSING_MSG = 'tfm.ceremony.evergreen_sunflowers.missing_salt'

TotemicEvents.ceremonySelection('totemic:evergreen', event => {
    requireAndConsumeOnSelection(event, EVERGREEN_ITEM, EVERGREEN_ITEM_COUNT, EVERGREEN_MISSING_MSG)
})