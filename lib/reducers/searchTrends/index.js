"use strict";
import {TRENDS_FETCH_SUCCESS, TRENDS_FETCH_FAIL} from '../../actions/trends';
import {SET_STATE} from '../../actions/persist';


function getInitialState() {
	return {
		entries: [],
		isLoaded: false,
		isLoading: false,
		hasError: false
	}
}


export default function(state = getInitialState(), action) {
	switch (action.type) {
		case TRENDS_FETCH_SUCCESS:
			return {
				entries: action.payload,
				isLoading: false,
				isLoaded: true,
				hasError: false
			};

		case TRENDS_FETCH_FAIL:
			return {
				entries: [],
				isLoading: false,
				isLoaded: false,
				hasError: true
			};

		case SET_STATE: {
			return {
				...state,
				entries: action.payload.searchTrends || state.entries
			}
		}

		default:
			return state;
	}
}
