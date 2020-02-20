const playerFire = (state, _) => {
    const { playerTank: { posX, posY, direction, width: tankWidth } } = state;
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

export default playerFire;