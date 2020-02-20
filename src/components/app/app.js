import React from 'react';

import './app.css';
import { withApi } from '../hoc';
import { compose } from '../../utils';
import Field from '../field';

const App = ({ api }) => {
  return (
    <Field />
  )
};

export default compose(
  withApi()
)(App);
