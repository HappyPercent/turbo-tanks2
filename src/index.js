import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import Api from './services/Api';
import { ApiProvider } from './components/api-context';
import store from './store';

const api = new Api();

ReactDOM.render(
    <Provider store={ store }>
        <ErrorBoundry>
            <ApiProvider value={ api }>
                <App />
            </ApiProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
)