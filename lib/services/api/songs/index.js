"use strict";

/**
 * Делает запрос за данными о песне
 * @param id {string}
 */
export async function fetchSong(id) {
	try {
		let response = await fetch(endpoint + `/song/${id}/info`);
		let body = await response.json();

		return {
			response: filterSong(body)
		}
	} catch (error) {
		return {error}
	}
}


export function filterSong(serverResponse) {
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
