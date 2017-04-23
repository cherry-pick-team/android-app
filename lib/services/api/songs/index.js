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
	let filteredResponse = serverResponse.map((song) => {
		const filtredSong = {};
		filtredSong.album = song.album;
		filtredSong.author = song.author;
		filtredSong.chunks = song.chunks;
		filtredSong.mongoId = song.mongo_id;
		filtredSong.info = song.song;
		filtredSong.lyrics = song.timestamp_lyrics;
		filtredSong.title = song.title;

		return filtredSong;
	});

	return filteredResponse;
}
