import React from 'react';
import { connect } from 'react-redux';

import './app.css';
import { withApi } from '../hoc';
import { compose } from '../../utils';
import FieldContainer from '../../containers/field-container';
import AuthForm from '../auth-form';
import Leaderboard from '../leaderboard';

const App = ({ authorized }) => {
    return (
        <>
            <FieldContainer />
            {authorized ?
                <Leaderboard /> : 
                <AuthForm />
            }
        </>
    )
};

const mapStateToProps = (state) => {
  return {
    authorized: state.form.authorized
  }
}

export default compose(
  connect(mapStateToProps),
  withApi()
)(App);
