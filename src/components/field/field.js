import React from 'react';
import Wall from '../wall-item';
import Bullet from '../bullet-item';
import Tank from '../tank';

import './field.css';

const Field = ({ walls, bullets, playerTank, computerTank }) => {
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
};

export default Field;