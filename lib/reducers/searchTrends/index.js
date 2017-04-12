"use strict";
import {TRENDS_FETCH_SUCCESS, TRENDS_FETCH_FAIL} from '../../actions/trends';


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
		default:
			return state;
	}
}
