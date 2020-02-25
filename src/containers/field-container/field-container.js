import React, { Component } from 'react';
import { connect } from 'react-redux';

import Field from '../../components/field';
import Gameover from '../../components/gameover-overlay';
import { toggleMoving, 
    updateMovingDirection, 
    moveObjects, 
    playerFire, 
    togglePause, 
    makeSootAvaliable, 
    computerFire,
    startGame } from '../../actions';
            
class FieldContainer extends Component {

    interval1 = 0;
    interval2 = 0;

    componentDidMount() {
        const { playerTank: { shootingDelay }, moveObjects, computerFire } = this.props;
        window.addEventListener('keydown', this.handleKeyDown.bind(this));
        window.addEventListener('keyup', this.handleKeyUp.bind(this));
        this.interval1 = setInterval(moveObjects, 20);
        this.interval2 = setInterval(computerFire, shootingDelay);
    }

    componentWillUnmount() {
        clearInterval(this.interval1);
        clearInterval(this.interval2);
    }

    handleKeyUp(ev) {
        if(ev.target.tagName !== 'INPUT') {
            const { toggleMoving } = this.props;
            switch (ev.code) {
                case 'KeyA':
                case 'ArrowLeft':
                case 'KeyW':
                case 'ArrowUp':    
                case 'KeyD':
                case 'ArrowRight':
                case 'KeyS':
                case 'ArrowDown':
                    toggleMoving(false);
                    break;
                case 'Escape':
                case 'Space':
                    break;
                default:
                    break;
            } 
        }
    }

    handleKeyDown(ev) {
        if(ev.target.tagName !== 'INPUT') {
            const { playerFire, 
                togglePause, 
                makeSootAvaliable, 
                playerTank: { canShoot, shootingDelay }} = this.props;
            let move = moveFunc.bind(this);
            switch (ev.code) {
                case 'KeyA':
                case 'ArrowLeft':
                    move('left');
                    break;
                case 'KeyW':
                case 'ArrowUp': 
                    move('up');
                    break;
                case 'KeyD':
                case 'ArrowRight':
                    move('right');
                    break;
                case 'KeyS':
                case 'ArrowDown':
                    move('down');
                    break;
                case 'Escape':
                    togglePause();
                    break;
                case 'Space':
                    if(canShoot) {
                        playerFire();
                        setTimeout(() => {
                            makeSootAvaliable();
                        }, shootingDelay);
                    }
                    break;
                default:
                    break;
            }
        }

        function moveFunc(direction){
            const { toggleMoving, 
                updateMovingDirection, 
                startGame,
                field: { gameStarted }} = this.props;
            
            if(!gameStarted) {
                startGame();
            }
            toggleMoving(true);
            updateMovingDirection(direction);
        }
    }

    render() {
        const { walls, bullets, playerTank, computerTank, field: { gameOver } } = this.props;
        return (
            <>
            { gameOver ?
                <Gameover /> :
                <Field walls = { walls } 
                    bullets = { bullets } 
                    playerTank = { playerTank } 
                    computerTank = { computerTank }/>
            }
            </>
        )
    }
}

const mapStateToProps = ({ walls, bullets, playerTank, computerTank, field }) => {
    return {
        walls,
        bullets, 
        playerTank,
        computerTank,
        field
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleMoving: (bool) => dispatch(toggleMoving(bool)),
        updateMovingDirection: (direction) => dispatch(updateMovingDirection(direction)),
        moveObjects: () => dispatch(moveObjects()),
        playerFire: () => dispatch(playerFire()),
        togglePause: () => dispatch(togglePause()),
        makeSootAvaliable: () => dispatch(makeSootAvaliable()),
        computerFire: () => dispatch(computerFire()),
        startGame: () => dispatch(startGame()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FieldContainer);