import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
//-------все редьюсеры
import rootReduser from './redusers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReduser, composeEnhancers(applyMiddleware(thunk)));

//------ dont need
window.store = store;

export default store;
