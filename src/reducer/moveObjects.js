const moveObjects = (state, _) => {
    const tankMovingDistance = 2;
    const computerTankMovingDistance = 1;
    const bulletMovingDistance = 4;

    const { playerTank, bullets, computerTank, walls, field } = state;
    let newPlayerTank = {...playerTank};
    const { width } = playerTank;

    return {
        ...state,
        bullets: moveBullets(bullets, bulletMovingDistance),
        playerTank: movePlayerTank(newPlayerTank, tankMovingDistance),
        computerTank: moveComputerTank(),
    }

    function moveComputerTank() {
        let { posX: PPosX, posY: PPosY } = newPlayerTank;
        let { posX: CPosX, posY: CPosY, direction, width } = computerTank;
        let newСPosX = CPosX;
        let newСPosY = CPosY;
        let newDirection = direction;
        let newStats = [
            {
                posX: newСPosX,
                posY: newСPosY + computerTankMovingDistance,
                direction: 'down'
            }, 
            {
                posX: newСPosX,
                posY: newСPosY - computerTankMovingDistance,
                direction: 'up'
            }, 
            {
                posX: newСPosX + computerTankMovingDistance,
                posY: newСPosY,
                direction: 'right'
            }, 
            {
                posX: newСPosX - computerTankMovingDistance,
                posY: newСPosY,
                direction: 'left'
            }, 
        ]
        
        newStats.forEach((position) => {
            if((Math.abs(position.posX - PPosX) < Math.abs(CPosX - PPosX) 
            || Math.abs(position.posY - PPosY) < Math.abs(CPosY - PPosY))
            && canMove(width, position.posX, position.posY) && !isTank(position.posX, position.posY, false)) {
                newСPosX = position.posX;
                newСPosY = position.posY;
                newDirection = position.direction;
            }
        })

        return {
            ...state.computerTank,
            posX: newСPosX,
            posY: newСPosY,
            direction: newDirection,
        }
    }

    function moveBullets(bullets, bulletMovingDistance) {
        return bullets.map((bullet) => {
            const { posX, posY, direction: dir } = bullet;
            const newBulletPosX = posX + (dir === 'left' ? -bulletMovingDistance : dir === 'right' ? bulletMovingDistance : 0);
            const newBulletPosY = posY + (dir === 'up' ? -bulletMovingDistance : dir === 'down' ? bulletMovingDistance : 0);
            
            if(!canMove(3, newBulletPosX, newBulletPosY)) {
                return null
            } else {
                return {
                    posX: newBulletPosX,
                    posY: newBulletPosY,
                    direction: dir
                }
            }
        }).filter(item => item !== null);
    }

    function movePlayerTank(newPlayerTank, tankMovingDistance) {
        if(newPlayerTank.moving) {
            let { width, direction } = newPlayerTank;
            newPlayerTank.posY += direction === 'up' ? -tankMovingDistance : direction === 'down' ? tankMovingDistance : 0;
            newPlayerTank.posX += direction === 'left' ? -tankMovingDistance : direction === 'right' ? tankMovingDistance : 0;
            if(!canMove(width, newPlayerTank.posX, newPlayerTank.posY) || isTank(newPlayerTank.posX, newPlayerTank.posY, true)) {
                newPlayerTank.posY = state.playerTank.posY;
                newPlayerTank.posX = state.playerTank.posX;
            }
        }
        return newPlayerTank;
    }

    function isTank(posX, posY, player) {
        // debugger
        if((!player && ((posX >= playerTank.posX
            && posX <= playerTank.posX + playerTank.width
            && posY >= playerTank.posY
            && posY <= playerTank.posY + playerTank.width) 
            ||(posX + width >= playerTank.posX
            && posX + width <= playerTank.posX + playerTank.width
            && posY >= playerTank.posY
            && posY <= playerTank.posY + playerTank.width)
            ||(posX >= playerTank.posX
            && posX <= playerTank.posX + playerTank.width
            && posY + width >= playerTank.posY
            && posY + width <= playerTank.posY + playerTank.width)
            ||(posX + width >= playerTank.posX
            && posX + width <= playerTank.posX + playerTank.width
            && posY + width >= playerTank.posY
            && posY + width <= playerTank.posY + playerTank.width)))
            || (player && ((posX >= computerTank.posX
            && posX <= computerTank.posX + computerTank.width
            && posY >= computerTank.posY
            && posY <= computerTank.posY + computerTank.width) 
            ||(posX + width >= computerTank.posX
            && posX + width <= computerTank.posX + computerTank.width
            && posY >= computerTank.posY
            && posY <= computerTank.posY + computerTank.width)
            ||(posX >= computerTank.posX
            && posX <= computerTank.posX + computerTank.width
            && posY + width >= computerTank.posY
            && posY + width <= computerTank.posY + computerTank.width)
            ||(posX + width >= computerTank.posX
            && posX + width <= computerTank.posX + computerTank.width
            && posY + width >= computerTank.posY
            && posY + width <= computerTank.posY + computerTank.width)))) {
                return true;
        } else {
            return false;
        }
    }

    function canMove(width, posX, posY) {
        let canMove = true;
                
        walls.forEach(wall => {
            if(isWall(wall, width, posX, posY)) {
                    canMove = false;
            }
        });
        if(posX < 0 || posY < 0 || posX > field.width - width || posY > field.height - width) canMove = false;

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