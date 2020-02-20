const moveObjects = (state, _) => {
    const tankMovingDistance = 2;
    const bulletMovingDistance = 3;

    const { playerTank, computerTank, bullets, walls, field } = state;
    const dir = playerTank.direction;
    let newPlayerTank = {...playerTank};
    let newBullets = state.bullets.map((bullet) => {
        const { posX, posY, direction: dir } = bullet;
        const newBulletPosX = posX + (dir === 'left' ? -bulletMovingDistance : dir === 'right' ? bulletMovingDistance : 0);
        const newBulletPosY = posY + (dir === 'up' ? -bulletMovingDistance : dir === 'down' ? bulletMovingDistance : 0);
        
        if(newBulletPosX > state.field.width 
            || newBulletPosY > state.field.height
            || newBulletPosX < 0
            || newBulletPosY < 0) {
            return null
        } else {
            return {
                posX: newBulletPosX,
                posY: newBulletPosY,
                direction: dir
            }
        }
    }).filter(item => item !== null);

    if(playerTank.moving) {
        let { width } = newPlayerTank;
        newPlayerTank.posY += dir === 'up' ? -tankMovingDistance : dir === 'down' ? tankMovingDistance : 0;
        newPlayerTank.posX += dir === 'left' ? -tankMovingDistance : dir === 'right' ? tankMovingDistance : 0;
        if(!canMove(walls, field, width, newPlayerTank.posX, newPlayerTank.posY)) {
            newPlayerTank.posY = state.playerTank.posY;
            newPlayerTank.posX = state.playerTank.posX;
        }
    }

    return {
        ...state,
        bullets: [...newBullets],
        playerTank: {...newPlayerTank}
    }

    function canMove(walls, field, width, posX, posY) {
        let canMove = true;
                
        walls.forEach(wall => {
            if(isWall(wall, width, posX, posY)) {
                    canMove = false;
            }
        });
        if(posX < 0 || posY < 0 || posX > field.width - width || posY > field.height - width    ) canMove = false;

        return canMove;

        function isWall(wall, width, posX, posY) {
            if((posX >= wall.posX
            && posX <= wall.posX + wall.width
            && posY >= wall.posY
            && posY <= wall.posY + wall.height) 
            ||(posX + width >= wall.posX
            && posX + width <= wall.posX + wall.width
            && posY >= wall.posY
            && posY <= wall.posY + wall.height)
            ||(posX >= wall.posX
            && posX <= wall.posX + wall.width
            && posY + width >= wall.posY
            && posY + width <= wall.posY + wall.height)
            ||(posX + width >= wall.posX
            && posX + width <= wall.posX + wall.width
            && posY + width >= wall.posY
            && posY + width <= wall.posY + wall.height)) {
                return true;
            } else {
                return false;
            }
        } 
    }
}

export default moveObjects;