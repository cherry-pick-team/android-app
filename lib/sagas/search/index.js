import {call, put, takeEvery} from 'redux-saga/effects'
import {SEARCH_START, searchSuccess, searchFail} from '../../actions/search';
import {searchPhrase} from '../../services/api/search';


export function* searchWatcher() {
	yield takeEvery(SEARCH_START, searchWorker)
}

function* searchWorker(action) {
	const {response, error} = yield call(searchPhrase, action.payload);

	if (response) {
		yield put(searchSuccess(response));

	} else {
		yield put(searchFail(error));
	}
}
