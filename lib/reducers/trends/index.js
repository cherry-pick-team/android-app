"use strict";
import {TRENDS_FETCH_START, TRENDS_FETCH_FAIL, TRENDS_FETCH_SUCCESS} from '../../actions/trends';

function getInitialState() {
	return {
		isLoading: false,
		isLoaded: false,
		entries: []
	};
}

export default function(state = getInitialState(), action) {
	switch (action.type) {
		case TRENDS_FETCH_START:
			return {
				...state,
				isLoading: true
			};

		case TRENDS_FETCH_FAIL:
			return {
				...state,
				isLoading: false
			};

		case TRENDS_FETCH_SUCCESS:
			return {
				...state,
				isLoading: false,
				isLoaded: true,
				entries: action.payload
			};

		default:
			return state;
	}
}
