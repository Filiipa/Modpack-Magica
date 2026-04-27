let pendingMooseSpawns = []

EntityEvents.spawned('totemic:buffalo', event => {
    const buffalo = event.entity
    //console.log('[Buffalo TFM] Buffalo spawn at ' + buffalo.x + ' ' + buffalo.y + ' ' + buffalo.z)
    
    pendingMooseSpawns.push({
        x: buffalo.x,
        y: buffalo.y,
        z: buffalo.z,
        healthRatio: buffalo.health / buffalo.maxHealth,
        level: buffalo.level,
        buffalo: buffalo  // keep buffalo
    })
})

LevelEvents.tick(event => {
    if (event.level.isClientSide()) return
    if (pendingMooseSpawns.length === 0) return

    const BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')
    const ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')
    const ParticleTypes = Java.loadClass('net.minecraft.core.particles.ParticleTypes')

    const toProcess = pendingMooseSpawns.slice()
    pendingMooseSpawns = []

    toProcess.forEach(data => {
        // Remove the buffalo now
        data.buffalo.discard()

        const mooseType = BuiltInRegistries.ENTITY_TYPE
            .get(ResourceLocation.parse('tfc:moose'))
        const moose = mooseType.create(data.level)
        if (moose == null) {
            console.error('[Buffalo TFM] entity doesnt exist')
            return
        }

        moose.health = data.healthRatio * moose.maxHealth
        moose.setPos(data.x, data.y, data.z)
        data.level.addFreshEntity(moose)

        data.level.sendParticles(
            ParticleTypes.HAPPY_VILLAGER,
            data.x, data.y + 1, data.z,
            24, 0.6, 0.5, 0.6, 1.0
        )

        //console.log('[Buffalo TFM] Moose spawn, buffalo removed')
    })
})