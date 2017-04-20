"use strict";
import {SEARCH_START} from '../../actions/search';
import {getHistory} from '../../services/asyncStorage';

const history = getHistory();

function getInitialState() {
	return {
		entries: history
	}
}


export default function(state = getInitialState(), action) {
	switch (action.type) {
		case SEARCH_START: {
			return {
				...state,
				entries: state.entries.concat(action.payload)
			}
		}
		default:
			return state;
	}
}
