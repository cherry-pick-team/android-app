"use strict";
import {endpoint} from '../index';


/**
 * Делает запрос на поиск фразы в песнях
 * @param phrase {string}
 */
export async function searchPhrase(phrase) {
	try {
		let response = await fetch(endpoint + `/search?query=${phrase}`);
		let body = await response.json();
		return {
			response: body
		}
	} catch (error) {
		return { error }
	}
}