import React from 'react';

import './app.css';
import { withApi } from '../hoc';
import { compose } from '../../utils';
import FieldContainer from '../../containers/field-container';

const App = ({ api }) => {
  return (
    <FieldContainer />
  )
};

export default compose(
  withApi()
)(App);
