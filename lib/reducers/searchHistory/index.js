"use strict";
import {SEARCH_START} from '../../actions/search';
import {SET_STATE} from '../../actions/persist';


function getInitialState() {
	return {
		entries: []
	}
}


export default function (state = getInitialState(), action) {
	switch (action.type) {
		case SEARCH_START: {
			return {
				...state,
				entries: state.entries.concat({
					query: action.payload,
					ts: Date.now()
				})
			}
		}

		case SET_STATE: {
			return {
				...state,
				...(action.payload.searchHistory || {})
			}
		}

		default:
			return state;
	}
}
