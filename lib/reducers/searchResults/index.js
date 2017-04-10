"use strict";
import {SEARCH_SUCCESS, SEARCH_FAIL} from '../../actions/search';


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
		case SEARCH_SUCCESS: {
			return {
				isLoaded: true,
				isLoading: false,
				hasError: false,
				entries: action.payload
			}
		}
		case SEARCH_FAIL: {
			return {
				isLoaded: false,
				isLoading: false,
				hasError: true,
				entries: []
			}
		}
		default:
			return state;
	}
}
