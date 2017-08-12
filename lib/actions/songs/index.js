"use strict";

export const SONG_FETCH_START = 'SONG_FETCH_START';
export const SONG_FETCH_SUCCESS = 'SONG_FETCH_SUCCESS';
export const SONG_FETCH_FAIL = 'SONG_FETCH_FAIL';

export const START_PLAY = 'START_PLAY';
export const TO_CHUNK = 'TO_CHUNK';
export const PAUSE_PLAY = 'PAUSE_PLAY';
export const SET_PLAY_STATUS = 'SET_PLAY_STATUS';
export const SET_PROGRESS = 'SET_PROGRESS';
export const START_LOADING = 'START_LOADING';

export const LIKE_SONG = 'LIKE_SONG';
export const LIKE_SONG_SUCCESS = 'LIKE_SONG_SUCCESS';

export const FETCH_LIKED_SONGS = 'FETCH_LIKED_SONGS';
export const FETCH_LIKED_SONGS_SUCCESS = 'FETCH_LIKED_SONGS_SUCCESS';
export const FETCH_LIKED_SONGS_FAIL = 'FETCH_LIKED_SONGS_FAIL';


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

export function setProgress(id, progress) {
	return {
		type: SET_PROGRESS,
		payload: {id, progress}
	}
}

/**
 * Загрузить любимые песни
 */
export function fetchLikedSongs () {
	return {
		type: FETCH_LIKED_SONGS
	}
}

export function fetchLikedSongsSuccess (songs) {
	return {
		type: FETCH_LIKED_SONGS_SUCCESS,
		payload: songs
	}
}

export function fetchLikedSongsFail (error) {
	return {
		type: FETCH_LIKED_SONGS_FAIL,
		payload: error
	}
}

/**
 * Лайкнуть песню (юзер должен быть авторизован)
 * @param songId
 * @returns {{type: string, payload: *}}
 */
export function likeSong (songId) {
	return {
		type: LIKE_SONG,
		payload: songId
	}
}

/**
 * Вызывается когда песня успешно лайкнута
 * @param songId
 */
export function likeSongSuccess (songId) {
	return {
		type: LIKE_SONG_SUCCESS,
		payload: songId
	}
}
