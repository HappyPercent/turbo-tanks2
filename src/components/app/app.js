import React from 'react';
import { connect } from 'react-redux';

import './app.css';
import { withApi } from '../hoc';
import { compose } from '../../utils';
import FieldContainer from '../../containers/field-container';
import AuthForm from '../auth-form';
import Leaderboard from '../leaderboard';
import InfoTable from '../info-table';

const App = ({ authorized }) => {
    return (
        <>
            <FieldContainer />
            {authorized ?
                <Leaderboard /> : 
                <AuthForm />
            }
            <InfoTable />
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
