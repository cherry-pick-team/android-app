"use strict";

export const SEARCH_START = 'SEARCH_START';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAIL = 'SEARCH_FAIL';
export const SEARCH_NEXT = 'SEARCH_NEXT';
export const SEARCH_PREV= 'SEARCH_PREV';


/**
 * Запускает запрос на поиск фразы phrase
 * @param phrase
 * @returns {{type: string, payload: *}}
 */
export function search(phrase) {
	return {
		type: SEARCH_START,
		payload: phrase
	}
}

/**
 * Добавить результаты поиска в стор
 * @param results - массив с id песен и мета информацией
 * @returns {{type: string, payload: *}}
 */
export function searchSuccess(results) {
	return {
		type: SEARCH_SUCCESS,
		payload: results
	}
}

export function searchFail(error) {
	return {
		type: SEARCH_FAIL,
		payload: error
	}
}
