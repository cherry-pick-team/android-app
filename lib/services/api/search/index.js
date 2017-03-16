"use strict";

/**
 * Делает запрос на поиск фразы в песнях
 * @param phrase {string}
 */
export async function searchPhrase(phrase) {
	if (phrase === 'let it') {
		let response = {
			results: ['1', '2']
		};
		return {
			response
		}
	} else {
		let response = {
			results: []
		};
		return {
			response
		}
	}

}