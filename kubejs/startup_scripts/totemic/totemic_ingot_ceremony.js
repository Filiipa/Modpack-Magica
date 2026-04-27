global.anvilCeremonyEffect = (level, pos, context) => {
    if (level.isClientSide()) return

    const RANGE = 8
    const ItemEntity = Java.loadClass('net.minecraft.world.entity.item.ItemEntity')
    const AABB = Java.loadClass('net.minecraft.world.phys.AABB')

    const aabb = new AABB(
        pos.x - RANGE, pos.y - RANGE, pos.z - RANGE,
        pos.x + RANGE, pos.y + RANGE, pos.z + RANGE
    )

    const bronzeIngots = level.getEntitiesOfClass(
        ItemEntity,
        aabb,
        e => e.getItem().getId() == 'tfc:metal/ingot/bronze'
    )

    bronzeIngots.forEach(entity => {
        const count = entity.getItem().getCount()
        entity.discard()
        level.addFreshEntity(new ItemEntity(
            level, entity.x, entity.y, entity.z,
            Item.of('malum:malignant_pewter_ingot', count)
        ))
    })
}

StartupEvents.registry('totemic:d_ceremony', event => {
    event.create('kubejs:anvil_upgrade')
        .musicNeeded(6900)
        .maxStartupTime(20 * 20)
        .selectors('totemic:wind_chime', 'totemic:rattle')
        .effect((level, pos, context) => global.anvilCeremonyEffect(level, pos, context))
        .effectDuration(0)
        .displayName('Anvil Upgrade')
})