import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleware = [thunk];

const initialState = {};

const store = createStore(
	rootReducer,
	initialState,
	// composeWithDevTools(
	applyMiddleware(...middleware)
	//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	// )
);

export default store;
