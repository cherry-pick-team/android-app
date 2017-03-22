"use strict";

export const SONG_FETCH_START = 'SONG_FETCH_START';
export const SONG_FETCH_SUCCESS = 'SONG_FETCH_SUCCESS';
export const SONG_FETCH_FAIL = 'SONG_FETCH_FAIL';


export const SEARCH_RESULTS_TARGET = 'SEARCH_RESULTS_TARGET';


/**
 * Запускает запрос на данные песни с нужным id
 * @param id
 * @param target - id той части стора в которую нужно добавить (см выше)
 * @returns {{type: string, payload: *}}
 */
export function fetchSong(id, target) {
	return {
		type: SONG_FETCH_START,
		payload: {
			id,
			target
		}
	}
}

/**
 * Добить песню в определенную часть стора
 * @param song - данные песни
 * @param target - id той части стора в которую нужно добавить (см выше)
 * @returns {{type: string, payload: *}}
 */
export function songFetched(song, target) {
	return {
		type: SONG_FETCH_SUCCESS,
		payload: {
			target,
			song
		}
	}
}

export function songFetchFail(error) {
	return {
		type: SONG_FETCH_FAIL,
		payload: error
	}
}

/**
 * Наинает прогрывание песни
 * @param id
 * @param chunkHandler
 */
export function play(id, chunkHandler) {

}

/**
 * Останавливает проигрывание текущей песни
 */
export function stop() {

}
