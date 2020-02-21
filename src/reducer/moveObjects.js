const moveObjects = (state, _) => {
    const tankMovingDistance = 2;
    const computerTankMovingDistance = 1;
    const bulletMovingDistance = 4;

    const { playerTank, bullets, computerTank, walls, field } = state;
    let newPlayerTank = {...playerTank};

    const stateAfterCrashCheck = checkCrash({
        ...state,
        bullets: moveBullets(bullets, bulletMovingDistance),
        playerTank: movePlayerTank(newPlayerTank, tankMovingDistance),
        computerTank: moveComputerTank(),
    })

    return stateAfterCrashCheck;

    function checkCrash(state) {
        let { playerTank, computerTank, bullets, field: { lifes, gameOver, score } } = state;
        let playerKilled = false;
        let computerKilled = false;

        const newBullets = bullets.map(bullet => {
            const { posX, posY } = bullet;
            if(isObstacle(playerTank, playerTank.width, playerTank.width, 3, posX, posY)) {
                playerKilled = true;
                return null;
            }
            if(isObstacle(computerTank, computerTank.width, computerTank.width, 3, posX, posY)) {
                computerKilled = true;
                return null;
            }
            return bullet;
        }).filter(item => item !== null);

        if(playerKilled) {
            if(lifes > 0) {
                lifes--
            } else {
                gameOver = true;
            }
        }

        if(computerKilled) {
            computerTank.posX = (field.width - computerTank.width) / 2;
            computerTank.posY = 0;
            computerTank.direction = 'down';
            score++;
        }

        return {
            ...state,
            computerTank,
            bullets: newBullets,
            field: {
                ...state.field,
                gameOver,
                lifes,
                score,
            }
        };
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
            && canMove(width, position.posX, position.posY) && !isObstacle(playerTank, playerTank.width, playerTank.width, width, newСPosX, newСPosY)) {
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
            if(!canMove(width, newPlayerTank.posX, newPlayerTank.posY) || isObstacle(computerTank, width, width, width, newPlayerTank.posX, newPlayerTank.posY)) {
                newPlayerTank.posY = state.playerTank.posY;
                newPlayerTank.posX = state.playerTank.posX;
            }
        }
        return newPlayerTank;
    }

    function canMove(width, posX, posY) {
        let canMove = true;
                
        walls.forEach(wall => {
            if(isObstacle(wall, wall.width, wall.height, width, posX, posY)) {
                    canMove = false;
            }
        });
        if(posX < 0 || posY < 0 || posX > field.width - width || posY > field.height - width) canMove = false;

        return canMove;
    }

    function isObstacle(obstacle, obstacleWidth, obstacleHeight, width, posX, posY) {
        if((posX >= obstacle.posX
        && posX <= obstacle.posX + obstacleWidth
        && posY >= obstacle.posY
        && posY <= obstacle.posY + obstacleHeight) 
        ||(posX + width >= obstacle.posX
        && posX + width <= obstacle.posX + obstacleWidth
        && posY >= obstacle.posY
        && posY <= obstacle.posY + obstacleHeight)
        ||(posX >= obstacle.posX
        && posX <= obstacle.posX + obstacleWidth
        && posY + width >= obstacle.posY
        && posY + width <= obstacle.posY + obstacleHeight)
        ||(posX + width >= obstacle.posX
        && posX + width <= obstacle.posX + obstacleWidth
        && posY + width >= obstacle.posY
        && posY + width <= obstacle.posY + obstacleHeight)) {
            return true;
        } else {
            return false;
        }
    }
}

export default moveObjects;