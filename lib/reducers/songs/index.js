"use strict";
import {SONG_FETCH_SUCCESS, START_PLAY, PAUSE_PLAY} from '../../actions/songs';
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
			action.payload.entries.forEach((song) => {
				mapFromResponse[song.mongoId] = song;
			});

			return {
				...state,
				...mapFromResponse
			};

		case SET_STATE: {
			return {
				...state,
				...(action.payload.songs || {})
			}
		}

		case START_PLAY: {
			return {
				...state,
				[action.payload.id]: {
					...state[action.payload.id],
					playingChunk: action.payload.chunkIndex
				}
			}
		}

		case PAUSE_PLAY: {
			return {
				...state,
				[action.payload.id]: {
					...state[action.payload.id],
					isPlaying: null
				}
			}
		}

		default:
			return state;
	}
}

export function selectSongById(state, id) {
	return state.songs[id];
}

export function filterSongsByIds(state, ids) {
	return ids.map(selectSongById.bind(null, state));
}
