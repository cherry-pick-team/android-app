"use strict";

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';
export const SET_CREDENTIALS = 'SET_CREDENTIALS';

export const GET_FAVOURUTES = 'GET_FAVOURUTES';

/**
 * Выставляет токен для данного типа авторизации
 * @param token - токен
 * @param type - тип авторизации, например FB
 * @returns {{type: string, payload: {token: *, type: *}}}
 */
export function login({token, type}) {
	return {
		type: USER_LOGIN,
		payload: {token, type}
	}
}

/**
 * Выставляет данные юзера
 * @param credentials
 * @returns {{type: string, payload: *}}
 */
export function setCredentials(credentials) {
	return {
		type: SET_CREDENTIALS,
		payload: credentials
	}
}

/**
 * Обнуляет все поля авторизации
 * @returns {{type: string}}
 */
export function logout() {
	return {
		type: USER_LOGOUT
	}
}
