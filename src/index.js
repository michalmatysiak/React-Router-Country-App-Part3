import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import store from './store';
import { getCountries } from './actions/actions-countries';
import routes from './routes';
import DevTools from './DevTools';

ReactDOM.render(
	<Provider store={store}>
		<div>
			<Router history={hashHistory} routes={routes}/>
			<DevTools />
		</div>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();

store.dispatch(getCountries());