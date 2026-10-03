import React, { Component } from 'react';
import { connect } from 'react-redux';

import './gameover.css';

import { restart, updateLeaderboard } from '../../actions';
import { compose } from '../../utils';
import { withApi } from '../hoc';

const TOP_PLAYERS = 9;

class Gameover extends Component {

    async componentDidMount() {
        const { api, form: { nickname, link }, score, updateLeaderboard } = this.props;
        const { players } = await api.get();
        const player = players.find(p => p.login === nickname);

        if (!player) {
            await api.post(nickname, link, score);
        } else if (score > player.score) {
            await api.put(player.id, player.login, player.avatar, score);
        }

        const { players: updated } = await api.get();
        updateLeaderboard(updated.sort((a, b) => b.score - a.score).slice(0, TOP_PLAYERS));
    }

    render() {
        const { restart } = this.props;
        return (
        <div className='gameover-overlay'>
            <button className='restart-button' onClick={ () => restart() }>RESTART</button>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        score: state.field.score,
        form: state.form,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        restart: () => dispatch(restart()),
        updateLeaderboard: (leaderboard) => dispatch(updateLeaderboard(leaderboard)),
    }
}

export default compose(
    withApi(),
    connect(mapStateToProps, mapDispatchToProps)
)(Gameover);
