"use strict";
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import rootSaga from '../sagas';
import createSagaMiddleware from 'redux-saga';
import {routerMiddleware} from '../utils/RouterMiddleware';

export let Store;

export const configureStore = (initialState) => {
	const sagaMiddleware = createSagaMiddleware();
	const store = createStore(
		rootReducer,
		initialState,
		applyMiddleware(
			sagaMiddleware,
			routerMiddleware
		)
	);

	sagaMiddleware.run(rootSaga);

	Store = store;

	return store;
};
