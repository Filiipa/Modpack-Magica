const registerTFGFluids = (event) => {

const $SoundActions = Java.loadClass('net.neoforged.neoforge.common.SoundActions')
const $SoundEvents = Java.loadClass('net.minecraft.sounds.SoundEvents')
const $ParticleTypes = Java.loadClass('net.minecraft.core.particles.ParticleTypes')

	event.create('tfm:wood_iron')
		.stillTexture('tfm:block/fluids/fluid.wood_iron')
        .flowingTexture('tfm:block/fluids/fluid.wood_iron')

  	event.create('tfm:pine_resin', 'thin')
		.tint(0xFFBF00)
		//.noBlock()
		.tag('tfc:usable_in_barrel')
		.type(type => type
			.renderType(3)
			)

	event.create('tfm:conifer_rosin', 'thin')
		.tint(0xfce18d)
		//.noBlock()
		.tag('tfc:usable_in_barrel')
		.type(type => type
			.renderType(3)
			)

	event.create('tfm:sticky_resin', 'thin')
		.tint(0xf5533d)
		//.noBlock()
		.tag('tfc:usable_in_barrel')
		.type(type => type
			.renderType(3)
			)

	event.create('tfm:dusky_resin', 'thin')
		.tint(0x401812)
		//.noBlock()
		.tag('tfc:usable_in_barrel')
		.type(type => type
			.renderType(3)
			)

	event.create('tfm:white_resin', 'thin')
		.tint(0xf2eae9)
		//.noBlock()
		.tag('tfc:usable_in_barrel')
		.type(type => type
			.renderType(3)
			)

}