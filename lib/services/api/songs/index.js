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
		const keys = Object.keys(song.timestamp_lyrics);
		return {
			album: song.album,
			author: song.author,
			chunks: song.chunks.concat([[keys[4], keys[5]], [keys[7], keys[8]]]),
			mongoId: song.mongo_id,
			info: song.song,
			lyrics: song.timestamp_lyrics,
			title: song.title
		}
	});
}
