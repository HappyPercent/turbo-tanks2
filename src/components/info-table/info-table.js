import React from 'react';
import { connect } from 'react-redux';

import './info-table.css';

const InfoTable = ({ lifes, score }) => {
    return (
        <div className='info-table'>
            <div>Lifes - { lifes }</div>
            <div>Score - { score }</div>
        </div>
    )
};

const mapStateToProps = ({ field: { lifes, score} }) => {
    return {
        lifes,
        score
    }
}

export default connect(mapStateToProps)(InfoTable);