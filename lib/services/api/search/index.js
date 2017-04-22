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
			response: filterSearch(body)
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
				trends: body
			}
		}
	} catch (error) {
		return {error};
	}
}

function filterSearch(serverResponse) {
	let filteredResponse = {};

	filteredResponse.album = serverResponse.album;
	filteredResponse.author = serverResponse.author;
	filteredResponse.chunks = serverResponse.chunks;
	filteredResponse.mongoId = serverResponse.mongo_id;
	filteredResponse.info = serverResponse.song;
	filteredResponse.lyrics = serverResponse.timestamp_lyrics;
	filteredResponse.title = serverResponse.title;

	return filteredResponse;
}