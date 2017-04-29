"use strict";

export const SONG_FETCH_START = 'SONG_FETCH_START';
export const SONG_FETCH_SUCCESS = 'SONG_FETCH_SUCCESS';
export const SONG_FETCH_FAIL = 'SONG_FETCH_FAIL';

export const START_PLAY = 'START_PLAY';
export const TO_CHUNK = 'TO_CHUNK';
export const PAUSE_PLAY = 'PAUSE_PLAY';
export const SET_PLAY_STATUS = 'SET_PLAY_STATUS';
export const SET_PROGRESS_SEARCH = 'SET_PROGRESS_SEARCH';


/**
 * Запускает запрос на данные песни с нужным id
 * @param id
 * @returns {{type: string, payload: *}}
 */
export function fetchSong(id) {
	return {
		type: SONG_FETCH_START,
		payload: id
	}
}

/**
 * Добить песню в определенную часть стора
 * @param id
 * @param song - данные песни
 * @returns {{type: string, payload: *}}
 */
export function songFetched(id, song) {
	return {
		type: SONG_FETCH_SUCCESS,
		payload: {id, song}
	}
}

export function songFetchFail(error) {
	return {
		type: SONG_FETCH_FAIL,
		payload: error
	}
}

/**
 * Начинает прогрывание песни
 * @param id
 * @param chunkIndex - номер чанка который нужно проиграть
 */
export function play(id, chunkIndex) {
	return {
		type: START_PLAY,
		payload: {id, chunkIndex}
	}
}


/**
 * Поставить на паузу текущую песню
 */
export function pause(id) {
	return {
		type: PAUSE_PLAY,
		payload: {id}
	}
}

/**
 * Перематывает песню на нужный фрагмент
 */
export function toChunk(chunkIndex) {
	return {
		type: TO_CHUNK,
		payload: chunkIndex
	}
}
