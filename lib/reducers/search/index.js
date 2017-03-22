"use strict";
import {SEARCH_START, SEARCH_SUCCESS, SEARCH_FAIL, SEARCH_NEXT, SEARCH_PREV} from '../../actions/search';
import {SONG_FETCH_SUCCESS, SEARCH_RESULTS_TARGET} from '../../actions/songs';


function getInitialState() {
	return {
		isLoaded: false,
		isError: false,
		entries: [],
		currentSong: 0,
		prevSong: null,
		nextSong: null
	};
}

function findSongById(searchResults, id) {
	return searchResults.findIndex((searchResult) => {
		return searchResult.song.uuid === id;
	});
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

		case SEARCH_SUCCESS: {
			let nextSong = action.payload.length > 1 ? 1 : null;

			return {...state,
				isLoaded: true,
				isError: false,
				entries: action.payload,
				currentSong: 0,
				nextSong,
				prevSong: null
			};
		}

		case SEARCH_FAIL:
			return {...state,
				isLoaded: false,
				isError: true
			};

		case SONG_FETCH_SUCCESS: {
			if (action.payload.target !== SEARCH_RESULTS_TARGET) {
				return state;
			}

			const id = findSongById(state.entries, action.payload.song.id);

			if (id === -1) {
				return state;
			}

			return {...state,
				entries: [
					...state.entries.slice(0, id),
					{
						...state.entries[id],
						song: action.payload.song
					},
					...state.entries.slice(id + 1)
				]
			};
		}

		case SEARCH_NEXT: {
			let currentSong = state.nextSong !== null ? state.nextSong : state.currentSong;
			let nextSong = currentSong < state.entries.length - 1 ? currentSong + 1 : null;
			let prevSong = currentSong > 0 ? currentSong - 1 : null;

			return {...state,
				currentSong,
				nextSong,
				prevSong
			};
		}

		case SEARCH_PREV: {
			let currentSong = state.prevSong !== null ? state.prevSong : state.currentSong;
			let nextSong = currentSong < state.entries.length - 1 ? currentSong + 1 : null;
			let prevSong = currentSong > 0 ? currentSong - 1 : null;

			return {...state,
				currentSong,
				nextSong,
				prevSong
			};
		}

		default:
			return state;
	}
}
