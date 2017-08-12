export const SUGGESTS_SET = 'SUGGESTS_SET';
export const SUGGESTS_CLEAR = 'SUGGESTS_GET';

/**
 * Добавляет данные в массив саджестов
 * @param suggests
 */
export function setSuggests(suggests) {
	return {
		type: SUGGESTS_SET,
		payload: suggests
	}
}

/**
 * Отчищает саджесты
 */
export function clearSuggests() {
	return {
		type: SUGGESTS_CLEAR
	}
}
