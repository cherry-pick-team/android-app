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

	return serverResponse.map((song) => {
		return {
			album: song.album,
			author: song.author,
			chunks: song.chunks,
			mongoId: song.mongo_id,
			info: song.song,
			lyrics: song.timestamp_lyrics,
			title: song.title
		}
	});
}
