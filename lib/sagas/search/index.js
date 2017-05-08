import {call, put, takeEvery} from 'redux-saga/effects'
import {delay} from 'redux-saga'
import {SEARCH_START, searchSuccess, searchFail} from '../../actions/search';
import {searchPhrase} from '../../services/api/search';
import {persist} from '../../actions/persist';
import {push, replace} from '../../actions/router';


export function* searchWatcher() {
	yield takeEvery(SEARCH_START, searchWorker)
}

function* searchWorker(action) {
	yield put(push('search-loader'));
	const {response, error} = yield call(searchPhrase, action.payload);

	if (response) {
		yield put(searchSuccess(response));
		yield call(delay, 500);
		yield put(replace('search-results'));
		yield call(delay, 500);
		yield put(persist('searchHistory'));
	} else {
		yield put(searchFail(error));
	}
}
