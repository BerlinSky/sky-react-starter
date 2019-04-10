import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import './index.css';

import configureStore from './shared/redux/configureStore'

import AppRoutes from './routes'

import * as serviceWorker from './serviceWorker';

const store = configureStore(window.initialState)

ReactDOM.render (
  <Provider store={ store }>
    <Router>
      <AppRoutes />
    </Router>
  </Provider>,

  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
