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
			debugger;
			return {
				...state,
				entries: state.entries.concat(action.payload)
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
