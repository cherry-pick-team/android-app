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
			const songs = action.payload.map((song) => {
				song.song.progress = 0;
				song.song.isPlaying = false;
				song.song.duration = Math.round(Math.max.apply(null, Object.keys(song.timestamp_lyrics))/1000);
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
					if (entry.song.id === action.payload.songId) {
						entry.song.progress = action.payload.progress
					}

					return entry;
				})
			}
		}
		case SET_PLAY_STATUS: {
			return {
				...state,
				entries: state.entries.map((entry) => {
					if (entry.mongo_id === action.payload.songId) {
						entry.song.isPlaying = action.payload.isPlaying;
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
