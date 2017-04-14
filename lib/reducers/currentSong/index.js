"use strict";

function getInitialState() {
	return {
		progress: 0.6,
		id: null,
		from: null
	}
}


export default function(state = getInitialState(), action) {
	switch (action.type) {
		default:
			return state;
	}
}
