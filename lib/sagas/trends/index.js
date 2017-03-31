import {call, put, takeEvery} from 'redux-saga/effects'
import {TRENDS_FETCH_START, successFetchTrends, failFetchTrends} from '../../actions/trends';
import {searchTrends} from '../../services/api/search';


export function* trendsFetchWatcher() {
	yield takeEvery(TRENDS_FETCH_START, trendsFetchWorker)
}

function* trendsFetchWorker() {
	const {response, error} = yield call(searchTrends);

	if(response) {
		yield put(successFetchTrends(response.trends));
	} else {
		yield put(failFetchTrends(error));
	}
}
