"use strict";
import {SONG_FETCH_SUCCESS} from '../../actions/songs';
import {SEARCH_SUCCESS} from '../../actions/search';
import {SET_STATE} from '../../actions/persist';


export default function (state = {}, action) {
	switch (action.type) {
		case SONG_FETCH_SUCCESS:
			return {
				...state,
				[action.id]: action.song
			};

		case SEARCH_SUCCESS:
			const mapFromResponse = {};
			action.payload.forEach((song) => {
				mapFromResponse[song.id]
			});

			return {
				...state,

			};

		case SET_STATE: {
			return {
				...state,
				...(action.payload.songs || {})
			}
		}

		default:
			return state;
	}
}

export function selectSongById(state, id) {
	return state.songs[id];
}
