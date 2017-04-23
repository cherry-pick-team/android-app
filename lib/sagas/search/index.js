import {call, put, takeEvery} from 'redux-saga/effects'
import {SEARCH_START, searchSuccess, searchFail} from '../../actions/search';
import {searchPhrase} from '../../services/api/search';
import {persist} from '../../actions/persist';


export function* searchWatcher() {
	yield takeEvery(SEARCH_START, searchWorker)
}

function* searchWorker(action) {
	debugger;
	const {response, error} = yield call(searchPhrase, action.payload);

	if (response) {
		yield put(searchSuccess(response));
		yield put(persist('searchHistory'));
	} else {
		yield put(searchFail(error));
	}
}
