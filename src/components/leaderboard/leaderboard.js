import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withApi } from '../hoc';
import { compose } from '../../utils';
import { updateLeaderboard } from '../../actions';

import './leaderboard.css';

class Leaderboard extends Component {

    componentDidMount() {
        const { api, updateLeaderboard } = this.props;
        api.get()
          .then((res) => {
            return res.players.sort((a, b) => {return b.score - a.score})
          })
          .then((players) => players.slice(0, 9))
          .then(res => {
            updateLeaderboard(res);
        }); 
      }

    render() {
        return (
            <div className="table-wrapper">
                <table className="leaderboard">
                    <tbody>
                        <tr>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Score</th>
                        </tr>
                        {
                            this.props.leaderboard.map((player, i) => {
                                return (
                                    <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{player.login}</td>
                                    <td>{player.score}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        leaderboard: state.leaderboard,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateLeaderboard: (data) => dispatch(updateLeaderboard(data)),
    }
}

export default compose(
    withApi(),
    connect(mapStateToProps, mapDispatchToProps)
)(Leaderboard);