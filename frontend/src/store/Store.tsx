import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as reducers from './index';

const reducer = combineReducers(reducers);

// Logger Middleware
const logger = (store: any) => (next: any) => (action: any) => {
	// eslint-disable-next-line
	// console.log('dispatching:', action);
	const result = next(action);
	// eslint-disable-next-line
	// console.log('next state:', store.getState());
	return result;
};

const middleware = [logger, thunk];

export default createStore(
	reducer,
	composeWithDevTools(applyMiddleware(...middleware)),
);
