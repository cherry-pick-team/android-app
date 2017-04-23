"use strict";
import {SEARCH_START} from '../../actions/search';
import {SET_STATE} from '../../actions/persist';


export default function (state = [], action) {
	switch (action.type) {
		case SEARCH_START: {
			return [{
				query: action.payload,
				ts: Date.now()
			}].concat(state.entries)
		}

		case SET_STATE: {
			return action.payload.searchHistory;
		}

		default:
			return state;
	}
}
