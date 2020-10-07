import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './scss/app.scss';
import App from './App.js';

// ------- redux
import { Provider } from 'react-redux';
import store from './redux/store';
// ------- redux

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>,
	document.getElementById('root'),
);
