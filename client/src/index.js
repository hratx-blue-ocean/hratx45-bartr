// For mdbreact, needs to be at top
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import './assets/vendors/bootstrap.min.css';
import '../node_modules/mdbreact/dist/css/mdb.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/styles/main.scss';

// --------------------------------------------------------------------------------------------------
// Redux
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from 'react-redux';
import thunk from "redux-thunk";

import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);
// --------------------------------------------------------------------------------------------------

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

