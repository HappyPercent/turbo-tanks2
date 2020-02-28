const moveObjects = (state, _) => {
    const tankMovingDistance = 3;
    const computerTankMovingDistance = 2;
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

    function moveComputerTank() {
        let { posX: PPosX, posY: PPosY } = newPlayerTank;
        let { posX: CPosX, posY: CPosY, direction, width } = computerTank;
        let newСPosX = CPosX;
        let newСPosY = CPosY;
        let newDirection = direction;
        const nextStep = findPath({ posX: CPosX, posY: CPosY }, { posX: PPosX, posY: PPosY })[1];
        if(nextStep) {
            if(nextStep.posX - CPosX < 0) {
                newDirection = 'left';
                newСPosX -= computerTankMovingDistance;
            } else if (nextStep.posX - CPosX > 0) {
                newDirection = 'right';
                newСPosX += computerTankMovingDistance;
            } else if (nextStep.posY - CPosY > 0) {
                newDirection = 'down';
                newСPosY += computerTankMovingDistance;
            } else if (nextStep.posY - CPosY < 0) {
                newDirection = 'up';
                newСPosY -= computerTankMovingDistance;
            }
        }

        // let newDirection = direction;
        // let newStats = [
        //     {
        //         posX: newСPosX,
        //         posY: newСPosY + computerTankMovingDistance,
        //         direction: 'down'
        //     }, 
        //     {
        //         posX: newСPosX,
        //         posY: newСPosY - computerTankMovingDistance,
        //         direction: 'up'
        //     }, 
        //     {
        //         posX: newСPosX + computerTankMovingDistance,
        //         posY: newСPosY,
        //         direction: 'right'
        //     }, 
        //     {
        //         posX: newСPosX - computerTankMovingDistance,
        //         posY: newСPosY,
        //         direction: 'left'
        //     }, 
        // ]
        
        // newStats.forEach((position) => {
        //     if((Math.abs(position.posX - PPosX) < Math.abs(CPosX - PPosX) 
        //     || Math.abs(position.posY - PPosY) < Math.abs(CPosY - PPosY))
        //     && canMove(width, position.posX, position.posY) && !isObstacle(playerTank, playerTank.width, playerTank.width, width, newСPosX, newСPosY)) {
        //         newСPosX = position.posX;
        //         newСPosY = position.posY;
        //         newDirection = position.direction;
        //     }
        // })

        return {
            ...state.computerTank,
            posX: newСPosX,
            posY: newСPosY,
            direction: newDirection,
        }

        function findPath(startPos, endPos) {
            const step = 10;

            const { posX: goalPosX, posY: goalPosY } = endPos;
            startPos.g = 0;
            startPos.f = 0;

            let closeList = [];
            let openList = [startPos];

            while(openList[0]) {
                openList = openList.sort((a,b) => a.f - b.f);
                let current = openList.shift();
                closeList.push(current);

                if(isObstacle(endPos, playerTank.width, playerTank.width, width, current.posX, current.posY)) {
                    return getPath(current);
                }

                let neighbors =[
                    {
                        posX: current.posX,
                        posY: current.posY + step,
                    }, 
                    {
                        posX: current.posX,
                        posY: current.posY - step,
                    }, 
                    {
                        posX: current.posX + step,
                        posY: current.posY,
                    }, 
                    {
                        posX: current.posX - step,
                        posY: current.posY,
                    }, 
                ].filter((coord) => canMove(width, coord.posX, coord.posY));

                for (let i = 0; i < neighbors.length; i++) {
                    let neighbor = neighbors[i];

                    let closed = false;
                    for(let k = 0; k < closeList.length && !closed; k++){
                        if(closeList[k].posX === neighbor.posX && closeList[k].posY === neighbor.posY){
                            closed = true;
                        }
                    }
                    if(closed) continue;

                    let opened = false;
                    for(let k = 0; k < openList.length && !opened; k++){
                        if(openList[k].posX === neighbor.posX && openList[k].posY === neighbor.posY){
                            opened = true;
                        }
                    }

                    let ng = current.g + step;
                    if(!opened || ng < neighbor.g) {
                        neighbor.g = ng;
                        neighbor.h = neighbor.h || (Math.abs(neighbor.posX - goalPosX) + Math.abs(neighbor.posY - goalPosY))
                        neighbor.f = neighbor.g + neighbor.h;
                        neighbor.parent = current;

                        if(!opened) {
                            openList.push(neighbor);
                        }
                    }
                }
            }
            return [];
        }

        function getPath(node) {
            let path = [{posX: node.posX, posY: node.posY}];
            while(node.parent) {
                node = node.parent;
                path.push({posX: node.posX, posY: node.posY})
            }
            return path.reverse();
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