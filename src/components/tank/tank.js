import React from 'react';

import './tank.css';
import redTank from '../../img/red_tank.svg';
import greenTank from '../../img/green_tank.svg';

const Tank = ({ params: { posX, posY, direction }, player }) => {

    const transformDegs = 
        direction === 'up' ? 0 : 
        direction === 'left' ? 270 :
        direction === 'down' ? 180 :        
        direction === 'right' ? 90 : '';
    const BGImage = player ? greenTank : redTank;
    const styles = {
        position: 'absolute',
        top: posY,
        left: posX,
        transform: `rotate(${transformDegs}deg)`,
        backgroundImage: `url(${BGImage})`,
    }
    return <div className='tank' style={ styles }></div>
}

export default Tank;