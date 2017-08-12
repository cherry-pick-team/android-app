import {call, put, takeEvery} from 'redux-saga/effects'
import {delay} from 'redux-saga'
import {SEARCH_START, searchSuccess, searchFail, SEARCH_VOICE, search} from '../../actions/search';
import {setSuggests} from '../../actions/suggests';
import {searchPhrase} from '../../services/api/search';
import {sendFile} from '../../services/upload';
import {persist} from '../../actions/persist';
import {push, replace} from '../../actions/router';


export function* searchWatcher() {
	yield takeEvery(SEARCH_START, searchWorker);
	yield takeEvery(SEARCH_VOICE, voiceSearchWorker);
}

function* searchWorker(action) {
	yield put(push('search-loader'));
	const {response, error} = yield call(searchPhrase, action.payload);

	if (response) {
		yield put(searchSuccess(response));
		yield call(delay, 1000);
		yield put(replace('search-results'));
		yield call(delay, 500);
		yield put(persist('searchHistory'));
	} else {
		yield put(searchFail(error));
		yield put(replace('not-found'));
	}
}

function* voiceSearchWorker({payload}) {
	yield put(push('search-loader'));

	let {response, error} = yield call(sendFile, payload, 'https://zsong.ru/api/v2/search/voice');

	console.log(response);

	response = response.filter((result) => {
		return result.songs > 0;
	});

	console.log(response);

	if (error) {
		yield put(searchFail(error));
		yield put(replace('not-found'));
		return;
	}

	if (response.length === 0) {
		yield put(replace('not-found'));
		return;
	}

	response = response.map((res) => {
		res.full_info = res.full_info.slice(0, 3);

		return res;
	});

	yield put(setSuggests(response));
	yield put(replace('suggests'));
}
