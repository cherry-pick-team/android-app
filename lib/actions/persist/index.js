"use strict";
export const POPULATE_STORE = 'POPULATE_STORE';
export const PERSIST_STORE = 'PERSIST_STORE';
export const SET_STATE = 'SET_STATE';


export function persist(key) {
	return {
		type: PERSIST_STORE,
		payload: key
	}
}


export function populate() {
	debugger;
	return {
		type: POPULATE_STORE,
		payload: null
	}
}


export function setState(state) {
	return {
		type: SET_STATE,
		payload: state
	}
}
