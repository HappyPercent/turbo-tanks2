import React from 'react';

const Wall = ({ params: { width, height, posX, posY, type } }) => {
    const styles = {
        position: 'absolute',
        left: posX,
        top: posY,
        backgroundColor: type === 'steel' ? 'grey' : type === 'brick' ? 'orange' : '',
        width,
        height
    }
    return <div style={ styles }></div>
}

export default Wall;