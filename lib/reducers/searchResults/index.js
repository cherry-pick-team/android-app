"use strict";
import {SEARCH_SUCCESS, SEARCH_FAIL, SEARCH_START, SET_PROGRESS, SET_PROGRESS_SEARCH} from '../../actions/search';


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
			const songs = action.payload.map((song) => {
				song.song.progress = 0;
				song.song.isPlaying = false;
				return song;
			});

			return {
				...state,
				isLoaded: true,
				isLoading: false,
				hasError: false,
				entries: songs
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
				...state,
				query: action.payload
			}
		}
		case SET_PROGRESS_SEARCH: {
			return {
				...state,
				entries: state.entries.map((entry) => {
					if (entry.song.song.id === action.payload.id) {
						entry.song.song.progress = action.payload.progress
					}

					return entry;
				})
			}
		}
		default:
			return state;
	}
}

export function selectFromSearch(state, id) {
	return state.searchResults.entries.filter((song) => {
		return song.song.id === id;
	});
}
