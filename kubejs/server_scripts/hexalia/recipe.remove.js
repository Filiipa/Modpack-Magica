ServerEvents.recipes(event => {

    event.remove({ id: 'hexalia:blackstone_from_mutation' })
    event.remove({ id: 'hexalia:leather_from_salt '})
    // Remove useless recipe fow now

    //event.remove({ id: 'hexalia:packed_ice_from_mutation'})
    //event.remove({ id: 'hexalia:blue_ice_from_mutation'})
    event.remove({ id: 'hexalia:tuff_from_mutation'})
})