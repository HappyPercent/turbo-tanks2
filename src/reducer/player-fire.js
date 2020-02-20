const fire = (state, player) => {
    let posX;
    let posY;
    let direction;
    let tankWidth;
    if(player) {
        posX = state.playerTank.posX;
        posY = state.playerTank.posY;
        direction = state.playerTank.direction;
        tankWidth = state.playerTank.width;
    } else {
        posX = state.computerTank.posX;
        posY = state.computerTank.posY;
        direction = state.computerTank.direction;
        tankWidth = state.computerTank.width;
    }
    let bulletPosX = posX;
    let bulletPosY = posY;
    if(direction === 'up') {
        bulletPosX += tankWidth / 2;
    } else if(direction === 'right') {
        bulletPosX += tankWidth;
        bulletPosY += tankWidth / 2;
    } else if(direction === 'down') {
        bulletPosX += tankWidth / 2;
        bulletPosY += tankWidth;
    } else if(direction === 'left') {
        bulletPosY += tankWidth / 2;
    }
    return {
        ...state,
        bullets: [
            ...state.bullets,
            {
                posX: bulletPosX,
                posY: bulletPosY,
                direction
            }
        ]
    }
}

export default fire;