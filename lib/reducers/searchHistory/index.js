"use strict";
import {SEARCH_SUCCESS} from '../../actions/search';
import {SET_STATE} from '../../actions/persist';
import {ADD_TO_FAVOURITE_HISTORY, DELETE_HISTORY_ENTRY, DELETE_HISTORY_ALL} from '../../actions/history';


export default function (state = [], action) {
	switch (action.type) {
		case SEARCH_SUCCESS: {
			const id = state[0] ? state[0].id + 1 : 0;

			if (state.length > 0 && state[0].query === action.payload.query) {
				return [
					{
						...state[0],
						ts: Date.now()
					},
					...state.splice(1)
				]
			}

			return [{
				id,
				query: action.payload.query,
				ts: Date.now(),
				isFavourite: false,
				previewUrl: action.payload.entries[0].album.cover_url
			}].concat(state);
		}

		case ADD_TO_FAVOURITE_HISTORY: {
			return state.map((entry) => {
				return {
					...entry,
					isFavourite: entry.id === action.payload || entry.isFavourite
				}
			});
		}

		case DELETE_HISTORY_ENTRY: {
			return state.filter(entry => entry.id !== action.payload);
		}

		case DELETE_HISTORY_ALL: {
			return [];
		}

		case SET_STATE: {
			return action.payload.searchHistory || state;
		}

		default:
			return state;
	}
}
