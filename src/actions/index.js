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
const togglePause = () => {
    return {
        type: "TOGGLE_PAUSE",
    }
}
const makeSootAvaliable = () => {
    return {
        type: "MAKE_SHOOT_AVALIABLE",
    }
}
const computerFire = () => {
    return {
        type: "COMPUTER_FIRE",
    }
}
const authorize = () => {
    return {
        type: "AUTHORIZE",
    }
}
const updateFormValues = (key, value) => {
    return {
        type: "UPDATE_FORM_VALUES",
        key,
        value
    }
}
const updateLeaderboard = (payload) => {
    return {
        type: "UPDATE_LEADERBOARD",
        payload
    }
}
const startGame = () => {
    return {
        type: "START_GAME"
    }
}
const restart = () => {
    return {
        type: "RESTART"
    }
}

export {
    updateMovingDirection,
    toggleMoving,
    moveObjects,
    playerFire,
    togglePause,
    makeSootAvaliable,
    computerFire,
    authorize,
    updateFormValues,
    updateLeaderboard,
    startGame,
    restart
}