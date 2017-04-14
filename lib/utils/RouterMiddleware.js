"use strict";
import {ROUTER_PUSH, ROUTER_REPLACE, ROUTER_BACK} from '../actions/router';

let navigatorInstance;

export function setNavigator(navigator) {
	navigatorInstance = navigator;
}

export const routerMiddleware = store => next => action => {
	if (action.type === ROUTER_PUSH) {
		navigatorInstance.push({id: action.payload});
	}

	if (action.type === ROUTER_REPLACE) {
		navigatorInstance.replace({id: action.payload});
	}

	if (action.type === ROUTER_BACK) {
		navigatorInstance.pop();
	}

	return next(action);
};
