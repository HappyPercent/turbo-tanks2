const updateMovingDirection = (direction) => {
    return {
        type: "UPDATE_MOVING_DIRECTION",
        payload: direction, 
    }
}
const toggleMoving = (bool) => {
    if(bool) {
        return {
            type: "START_MOVING"
        }
    } else {
        return {
            type: "STOP_MOVING"
        }
    }
}
const moveObjects = () => {
    return {
        type: "MOVE_OBJECTS",
    }
}
const playerFire = () => {
    return {
        type: "PLAYER_FIRE",
    }
}

export {
    updateMovingDirection,
    toggleMoving,
    moveObjects,
    playerFire
}