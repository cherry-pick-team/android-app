"use strict";
import {Actions, ActionConst} from 'react-native-router-flux'

export const ROUTER_PUSH = 'ROUTER_PUSH';
export const ROUTER_REPLACE = 'ROUTER_REPLACE';
export const ROUTER_BACK = 'ROUTER_BACK';


/**
 * Добавляет роут с данным id в navigator
 * @param id
 * @returns
 */
export function push(id) {
	return {
		type: ROUTER_PUSH,
		payload: id
	}
}

/**
 * Заменяет тукущий роут на другой
 * @param id
 * @returns
 */
export function replace(id) {
	return {
		type: ROUTER_REPLACE,
		payload: id
	}
}

/**
 * Перемещает на предыдущий роут
 * @returns
 */
export function back() {
	return {
		type: ROUTER_BACK,
		payload: null
	}
}
