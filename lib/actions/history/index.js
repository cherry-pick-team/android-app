"use strict";
export const ADD_TO_FAVOURITE_HISTORY = 'ADD_TO_FAVOURITE_HISTORY';
export const DELETE_HISTORY_ENTRY = 'DELETE_HISTORY_ENTRY';
export const DELETE_HISTORY_ALL = 'DELETE_HISTORY_ALL';


export const addToFavourite = (id) => ({
	type: ADD_TO_FAVOURITE_HISTORY,
	payload: id
});

export const deleteEntry = (id) => ({
	type: DELETE_HISTORY_ENTRY,
	payload: id
});

export const deleteAll = () => ({
	type: DELETE_HISTORY_ALL,
	payload: null
});
