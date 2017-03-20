"use strict";
import {SEARCH_START, SEARCH_SUCCESS, SEARCH_FAIL} from '../../actions/search';

function getInitialState() {
	return {
		isLoaded: false,
		isError: false,
		entries: []
	};
}

/**
 * Редьюсер отвечающий за изменения результатов поиска
 * @param state
 * @param action
 * @returns {*}
 */
export default function(state = getInitialState(), action) {
	switch (action.type) {
		case SEARCH_START:
			return {...state,
				isLoaded: false
			};

		case SEARCH_SUCCESS:
			return {...state,
				isLoaded: true,
				isError: false,
				entries: action.payload
			};

		case SEARCH_FAIL:
			return {...state,
				isLoaded: false,
				isError: true
			};

		default:
			return state;
	}
}
