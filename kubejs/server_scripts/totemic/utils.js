const DEFAULT_RANGE = 8

function findItems(level, pos, itemId, range) {
    var r = range || DEFAULT_RANGE
    var ItemEntity = Java.loadClass('net.minecraft.world.entity.item.ItemEntity')
    var AABB = Java.loadClass('net.minecraft.world.phys.AABB')
    var aabb = new AABB(
        pos.x - r, pos.y - r, pos.z - r,
        pos.x + r, pos.y + r, pos.z + r
    )
    return level.getEntitiesOfClass(ItemEntity, aabb, e => e.getItem().getId() == itemId)
}

function countItems(items) {
    return items.stream().mapToInt(e => e.getItem().getCount()).sum()
}

function consumeItems(items, amount) {
    var remaining = amount
    items.forEach(entity => {
        if (remaining <= 0) return
        var count = entity.getItem().getCount()
        if (count <= remaining) {
            remaining -= count
            entity.discard()
        } else {
            entity.getItem().shrink(remaining)
            remaining = 0
        }
    })
}

// Vérifie ET consomme immédiatement à la sélection
function requireAndConsumeOnSelection(event, itemId, amount, langKey, range) {
    var items = findItems(event.level, event.pos, itemId, range)
    if (countItems(items) < amount) {
        event.ceremony = null
        event.initiator.displayClientMessage(
            Component.translatable(langKey, amount), true
        )
        return false
    }
    consumeItems(items, amount)
    return true
}

// Vérifie à la sélection — à utiliser avec consumeOnSuccess
function requireOnSelection(event, itemId, amount, langKey, range) {
    var items = findItems(event.level, event.pos, itemId, range)
    if (countItems(items) < amount) {
        event.ceremony = null
        event.initiator.displayClientMessage(
            Component.translatable(langKey, amount), true
        )
        return false
    }
    return true
}

// Consomme au succès avec double vérification — à utiliser avec requireOnSelection
function consumeOnSuccess(event, itemId, amount, langKey, range) {
    var items = findItems(event.level, event.pos, itemId, range)
    if (countItems(items) < amount) {
        event.cancel()
        event.initiator.displayClientMessage(
            Component.translatable(langKey, amount), true
        )
        return false
    }
    consumeItems(items, amount)
    return true
}