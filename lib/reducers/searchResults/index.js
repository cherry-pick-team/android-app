"use strict";
import {SEARCH_SUCCESS, SEARCH_FAIL, SEARCH_START} from '../../actions/search';
import {SET_PROGRESS_SEARCH, START_PLAY, PAUSE_PLAY, SET_PLAY_STATUS} from '../../actions/songs';


function getInitialState() {
	return {
		entries: [],
		isLoaded: false,
		isLoading: false,
		hasError: false,
		query: ''
	}
}


export default function(state = getInitialState(), action) {
	switch (action.type) {
		case SEARCH_SUCCESS: {
			return {
				...state,
				isLoaded: true,
				isLoading: false,
				hasError: false,
				entries: action.payload.entries.map((song) => {
					return song.mongoId;
				})
			}
		}

		case SEARCH_FAIL: {
			return {
				...state,
				isLoaded: false,
				isLoading: false,
				hasError: true,
				entries: []
			}
		}

		case SEARCH_START: {
			return {
				...getInitialState(),
				query: action.payload
			}
		}

		default:
			return state;
	}
}
