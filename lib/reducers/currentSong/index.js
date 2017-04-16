"use strict";
import {SEARCH_SUCCESS} from '../../actions/search';


function getInitialState() {
	return {
		progress: 0.6,
		songId: null,
		isPlaying: false
	}
}


export default function(state = getInitialState(), action) {
	switch (action.type) {
		case SEARCH_SUCCESS:
			return {
				progress: 0,
				songId: action.payload[0].song.id,
				isPlaying: false
			};
		default:
			return state;
	}
}

export function selectFromSearch(state, id) {
	return this.state.searchResults.entries.filter((song) => {
		return song.song.id === id;
	});
}
