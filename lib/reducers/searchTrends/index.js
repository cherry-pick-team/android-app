"use strict";

function getInitialState() {
	return {
		entries: [],
		isLoaded: false,
		isLoading: false
	}
}


export default function(state = getInitialState(), action) {
	switch (action.type) {
		default:
			return state;
	}
}
