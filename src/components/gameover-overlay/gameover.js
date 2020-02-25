import React, { Component } from 'react';
import { connect } from 'react-redux';

import './gameover.css';

import { restart, updateLeaderboard } from '../../actions';
import { compose } from '../../utils';
import { withApi } from '../hoc';

class Gameover extends Component {

    componentDidMount() {
        const { api, nickname, password, link, score, updateLeaderboard } = this.props;
        api.get()
            .then((res) => res.players)
            .then((data) => {
                let player = data.find(player => player.login === nickname && player.password === password);
                if(player) {
                    api.put(player.id, player.login, player.password, player.avatar, score)
                        .then(() => api.get()
                            .then((res) => {
                                return res.players.sort((a, b) => {return b.score - a.score})
                            })
                            .then((players) => players.slice(0, 9))
                            .then(res => {
                                updateLeaderboard(res);
                            }));
                } else {
                    api.post(nickname, password, link, score)
                        .then(() => api.get()
                            .then((res) => {
                                return res.players.sort((a, b) => {return b.score - a.score})
                            })
                            .then((players) => players.slice(0, 9))
                            .then(res => {
                                updateLeaderboard(res);
                            }));
                }
            })
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