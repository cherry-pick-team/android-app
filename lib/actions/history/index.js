"use strict";
export const ADD_TO_FAVOURITE_HISTORY = 'ADD_TO_FAVOURITE_HISTORY';


export function addToFavourite(id) {
	return {
		type: PERSIST_STORE,
		payload: id
	}
}
