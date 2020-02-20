import React, { Component } from 'react';
import { connect } from 'react-redux';

import Field from '../../components/field';
import { toggleMoving, updateMovingDirection, moveObjects, playerFire, togglePause, makeSootAvaliable } from '../../actions';
            
class FieldContainer extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown.bind(this));
        window.addEventListener('keyup', this.handleKeyUp.bind(this));
        setInterval(this.props.moveObjects, 10);
    }

    handleKeyUp(ev) {
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

    handleKeyDown(ev) {
        const { toggleMoving, updateMovingDirection, playerFire, togglePause, makeSootAvaliable, playerTank: { canShoot } } = this.props
        switch (ev.code) {
            case 'KeyA':
            case 'ArrowLeft':
                toggleMoving(true);
                updateMovingDirection('left');
                break;
            case 'KeyW':
            case 'ArrowUp': 
                toggleMoving(true);
                updateMovingDirection('up');
                break;
            case 'KeyD':
            case 'ArrowRight':
                toggleMoving(true);
                updateMovingDirection('right');
                break;
            case 'KeyS':
            case 'ArrowDown':
                toggleMoving(true);
                updateMovingDirection('down');
                break;
            case 'Escape':
                togglePause();
                break;
            case 'Space':
                if(canShoot) {
                    playerFire();
                    setTimeout(() => {
                        makeSootAvaliable();
                    }, 500);
                }
                break;
            default:
                break;
        }
    }

    render() {
        const { walls, bullets, playerTank, computerTank } = this.props;
        return (
            <Field walls = { walls } 
                bullets = { bullets } 
                playerTank = { playerTank } 
                computerTank = { computerTank }/>
        )
    }
}

const mapStateToProps = ({ walls, bullets, playerTank, computerTank }) => {
    return {
        walls,
        bullets, 
        playerTank,
        computerTank
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FieldContainer);