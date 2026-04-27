const RAIN_ITEM = 'tfc:powder/salt'
const RAIN_ITEM_COUNT = 1
const RAIN_MISSING_MSG = 'totemic.ceremony.rain.missing_salt'

TotemicEvents.ceremonySelection('totemic:rain', event => {
    requireAndConsumeOnSelection(event, RAIN_ITEM, RAIN_ITEM_COUNT, RAIN_MISSING_MSG)
})

TotemicEvents.ceremonyEffectTick('totemic:rain', event => {
    event.cancel()
    var level = event.level
    level.getServer().getCommands().performPrefixedCommand(
        level.getServer().createCommandSourceStack().withPermission(4),
        'time set rain'
    )
})