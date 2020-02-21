import React from 'react';

import './app.css';
import { withApi } from '../hoc';
import { compose } from '../../utils';
import FieldContainer from '../../containers/field-container';
import AuthForm from '../auth-form';

const App = ({ api }) => {
  return (
    <>
      <FieldContainer />
      <AuthForm />
    </>
  )
};

export default compose(
  withApi()
)(App);
