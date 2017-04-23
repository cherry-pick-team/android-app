"use strict";

export const TRENDS_FETCH_START = 'TRENDS_FETCH_START';
export const TRENDS_FETCH_SUCCESS = 'TRENDS_FETCH_SUCCESS';
export const TRENDS_FETCH_FAIL = 'TRENDS_FETCH_FAIL';


export function startFetchTrends() {
	return {
		type: TRENDS_FETCH_START
	}
}

export function successFetchTrends(trends) {
	return {
		type: TRENDS_FETCH_SUCCESS,
		payload: trends
	}
}

export function failFetchTrends(error) {
	return {
		type: TRENDS_FETCH_FAIL,
		payload: error
	}
}
