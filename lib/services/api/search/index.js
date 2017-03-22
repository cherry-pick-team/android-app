"use strict";

const mockerResponse = [{
	song: {
		uuid: '1',
		title: 'Let It Be',
		singer: {
			uuid: '2',
			name: "John Lennon"
		},
		album: {
			uuid: '3',
			name: "Unknown",
			year: 1974
		},
		url: "",
		url_stream: "",
		"favourite_count": 0,
		"is_favourite": true
	},
	pieces: [{
		begin: "",
		end: "",
		lines: [ "", "" ]
	}]
},{
	song: {
		uuid: '1',
		title: 'Let It Be 2',
		singer: {
			uuid: '2',
			name: "John Lennon"
		},
		album: {
			uuid: '3',
			name: "Unknown",
			year: 1974
		},
		url: "",
		url_stream: "",
		"favourite_count": 0,
		"is_favourite": true
	},
	pieces: [{
		begin: "",
		end: "",
		lines: [ "", "" ]
	}]
}];

/**
 * Делает запрос на поиск фразы в песнях
 * @param phrase {string}
 */
export async function searchPhrase(phrase) {
	if (phrase === 'let it') {
		return {
			response: mockerResponse
		};
	} else {
		let response = {
			results: []
		};
		return {
			response
		}
	}

}