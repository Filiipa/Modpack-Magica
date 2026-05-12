let pendingMooseSpawns = []

EntityEvents.spawned('totemic:buffalo', event => {
    var buffalo = event.entity
    pendingMooseSpawns.push({
        x: buffalo.x,
        y: buffalo.y,
        z: buffalo.z,
        healthRatio: buffalo.health / buffalo.maxHealth,
        level: buffalo.level,
        buffalo: buffalo
    })
})

LevelEvents.tick(event => {
    if (event.level.isClientSide()) return
    if (pendingMooseSpawns.length === 0) return

    var BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')
    var ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')
    var ParticleTypes = Java.loadClass('net.minecraft.core.particles.ParticleTypes')

    var toProcess = pendingMooseSpawns.slice()
    pendingMooseSpawns = []

    toProcess.forEach(data => {
        data.buffalo.discard()

        var mooseType = BuiltInRegistries.ENTITY_TYPE.get(ResourceLocation.parse('tfm:buffalo')) // Temporary
        var moose = mooseType.create(data.level)
        if (moose == null) return

        moose.health = data.healthRatio * moose.maxHealth
        moose.setPos(data.x, data.y, data.z)
        data.level.addFreshEntity(moose)

        data.level.sendParticles(
            ParticleTypes.HAPPY_VILLAGER,
            data.x, data.y + 1, data.z,
            24, 0.6, 0.5, 0.6, 1.0
        )
    })
})