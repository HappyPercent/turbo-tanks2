import React, { Component } from 'react';
import { connect } from 'react-redux';

import './field.css';
import Wall from '../wall-item';
import Bullet from '../bullet-item';
import Tank from '../tank';

import { toggleMoving, updateMovingDirection, moveObjects, playerFire } from '../../actions';
            
class Field extends Component {

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
        const { toggleMoving, updateMovingDirection, playerFire } = this.props
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
                break;
            case 'Space':
                playerFire();
                break;
            default:
                break;
        }
    }

    render() {
        const { walls, bullets, playerTank, computerTank } = this.props;
        return (
        <div className='field'>
            {
                walls.map((wall, idx) => {
                    const { ...params } = wall;
                    return (
                        <Wall key={idx} params={ params }/>
                    )
                })
            }
            {
                bullets.map((bullet, idx) => {
                    const { ...params } = bullet;
                    return (
                       <Bullet key={idx} params={ params } />
                    )
                })
            }
            <Tank params={ {...playerTank} } player />
            <Tank params={ {...computerTank} }/>
        </div>
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Field);