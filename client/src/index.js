// For mdbreact, needs to be at top
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import './assets/vendors/bootstrap.min.css';
import '../node_modules/mdbreact/dist/css/mdb.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/styles/main.scss';

// Sentry error capturing - DONT MOVE - Logs errors to external server for deployment
// import * as Sentry from '@sentry/browser';
// Sentry.init({dsn: "https://7f28de32de2f4076aa054b2e8aaf4686@sentry.io/1878885"});

// --------------------------------------------------------------------------------------------------
// Redux
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
	reducers,
	{ products: { photos: [{ blob: '' }] } },
	composeEnhancers(applyMiddleware(thunk))
);
// --------------------------------------------------------------------------------------------------

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);
