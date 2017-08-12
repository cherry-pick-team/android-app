"use strict";
import {USER_LOGIN, USER_LOGOUT, SET_CREDENTIALS} from '../../actions/user';
import {SET_STATE} from '../../actions/persist';

const getDefaultState = () => ({
	token: null,
	isAuth: false,
	authType: null,
	credentials: {}
});

export default function (state = getDefaultState(), action) {
	switch (action.type) {
		case USER_LOGIN:
			return {
				...state,
				token: action.payload.token,
				authType: action.payload.authType,
				isAuth: true
			};
		case USER_LOGOUT:
			return {
				...state,
				token: null,
				authType: null,
				isAuth: false
			};
		case SET_CREDENTIALS:
			return {
				...state,
				credentials: action.payload
			};
		case SET_STATE: {
			const newState = action.payload.user || state;
			return {...newState};
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
