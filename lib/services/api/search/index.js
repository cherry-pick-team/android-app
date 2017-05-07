"use strict";
import {endpoint} from '../index';
import {filterSong} from '../songs';


/**
 * Делает запрос на поиск фразы в песнях
 * @param phrase {string}
 */
export async function searchPhrase(phrase) {
	try {
		let response = await fetch(endpoint + `/search?query=${phrase}`);
		let body = await response.json();

		return {
			response: {
				entries: filterSong(body),
				query: phrase
            }
		}
	} catch (error) {
		return {error}
	}
}

/**
 * Возвращает трендовые запросы
 * @param limit
 * @returns {*}
 */
export async function searchTrends(limit = 5) {
	try {
		let response = await fetch(endpoint + `/search/popular?limit=${limit}`);
		let body = await response.json();
		return {
			response: {
				trends: filterTrends(body)
			}
		}
	} catch (error) {
		return {error};
	}
}


export function filterTrends(serverResponse) {
	return serverResponse.map((trend) => {
		return {
			query: trend.query,
			count: trend.count
		};
	});
}
