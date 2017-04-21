"use strict";

export const SONG_FETCH_START = 'SONG_FETCH_START';
export const SONG_FETCH_SUCCESS = 'SONG_FETCH_SUCCESS';
export const SONG_FETCH_FAIL = 'SONG_FETCH_FAIL';

export const START_PLAY = 'START_PLAY';
export const STOP_PLAY = 'STOP_PLAY';
export const PAUSE_PLAY = 'PAUSE_PLAY';
export const RESUME_PLAY = 'RESUME_PLAY';
export const SET_PLAY_STATUS = 'SET_PLAY_STATUS';
export const SET_PROGRESS_SEARCH = 'SET_PROGRESS_SEARCH';


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
 * @param duration
 */
export function play(id, duration) {
	return {
		type: START_PLAY,
		payload: {id, duration}
	}
}

/**
 * Останавливает проигрывание текущей песни
 */
export function stop() {
	return {
		type: STOP_PLAY,
		payload: null
	}
}

/**
 * Поставить на паузу текущую песню
 */
export function pause() {
	return {
		type: PAUSE_PLAY,
		payload: null
	}
}

/**
 * Возобновить поставленную на паузу песню
 */
export function resume() {
	return {
		type: RESUME_PLAY,
		payload: null
	}
}

/**
 * Перейти к другому времени
 */
export function setProgressSearch({progress, songId}) {
	return {
		type: SET_PROGRESS_SEARCH,
		payload: {progress, songId}
	}
}


export function setPlayStatus({isPlaying, songId}) {
	return {
		type: SET_PLAY_STATUS,
		payload: {isPlaying, songId}
	}
}
