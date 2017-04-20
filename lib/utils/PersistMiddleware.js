"use strict";
import {SEARCH_START} from '../actions/search';
import {persistHistory} from '../../services/asyncStorage';

export const persistMiddleware = store => next => action => {
    const nextResult = next(action);
	if (action.type === SEARCH_START) {
	    new Promise(async (resolve) => {
	        await persistHistory(store.searchHistory.entries);
	        resolve();
	    });
	}
	return nextResult;
};
