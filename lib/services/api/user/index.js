import {endpoint} from '../index';

/**
 * Забирает из апишки данные о пользователе
 * @param token
 */
export async function fetchUserData(token) {
	try {
		let response = await fetch(`https://zsong.ru/auth/me?api_token=${token}`);
		let body = await response.json();

		return {response: body.user}
	} catch (error) {
		return {error}
	}
}

/**
 * Любимые песни юзера
 * @param token
 */
export async function favourite(token) {
	try {
		let response = await fetch(`https://zsong.ru/api/v2/likes?api_token=${token}`);
		let body = await response.json();

		return {response: body}
	} catch (error) {
		return {error}
	}
}

/**
 * Разлогинивает юзера
 */
export async function logout() {
	try {
		await fetch('https://zsong.ru/auth/logout');
		return {response: true}
	} catch (error) {
		return {error}
	}
}

