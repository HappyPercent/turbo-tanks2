import React from 'react';
import './bullet-item.css';

const Bullet = ({ params: { posX, posY }}) => {
    const styles = {
        top: posY,
        left: posX,
    }
    return (
        <div className='bullet' style={ styles }></div>
    )
}

export default Bullet;