"use strict";
import {SEARCH_START} from '../../actions/search';
import {SET_STATE} from '../../actions/persist';
import {ADD_TO_FAVOURITE_HISTORY} from '../../actions/history';


export default function (state = [], action) {
	switch (action.type) {
		case SEARCH_START: {
			const id = state[0] ? state[0].id + 1 : 0;

			return [{
				id,
				query: action.payload,
				ts: Date.now(),
				isFavourite: false
			}].concat(state.entries)
		}

		case ADD_TO_FAVOURITE_HISTORY: {
			return state.map((entry) => {
				return {
					...entry,
					isFavourite: entry.id === action.payload || entry.isFavourite
				}
			});
		}

		case SET_STATE: {
			return action.payload.searchHistory || state;
		}

		default:
			return state;
	}
}
