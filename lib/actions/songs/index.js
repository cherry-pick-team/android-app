"use strict";

export const SONG_FETCH_START = 'SONG_FETCH_START';
export const SONG_FETCH_SUCCESS = 'SONG_FETCH_SUCCESS';
export const SONG_FETCH_FAIL = 'SONG_FETCH_FAIL';

export const START_PLAY = 'START_PLAY';
export const SEEK_PLAY = 'SEEK_PLAY';
export const PAUSE_PLAY = 'PAUSE_PLAY';
export const SET_PLAY_STATUS = 'SET_PLAY_STATUS';
export const SET_PROGRESS_SEARCH = 'SET_PROGRESS_SEARCH';
export const UPDATE_STATUS = 'UPDATE_STATUS';


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
 * @param duration
 */
export function play(id, duration) {
	return {
		type: START_PLAY,
		payload: {id, duration}
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
 * Перематывает песню на нужный фрагмент
 */
export function seek(id, to) {
	return {
		type: SEEK_PLAY,
		payload: {to, id}
	}
}


/**
 * Перейти к другому времени
 */
export function setProgressSearch({progress, id}) {
	return {
		type: SET_PROGRESS_SEARCH,
		payload: {progress, id}
	}
}


export function setPlayStatus({isPlaying, mongoId}) {
	return {
		type: SET_PLAY_STATUS,
		payload: {isPlaying, mongoId}
	}
}

export function updateStatus() {
	return {
		type: UPDATE_STATUS
	}
}