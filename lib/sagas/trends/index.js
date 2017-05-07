import {call, put, takeEvery} from 'redux-saga/effects'
import {delay} from 'redux-saga'
import {TRENDS_FETCH_START, successFetchTrends, failFetchTrends} from '../../actions/trends';
import {searchTrends} from '../../services/api/search';
import {persist} from '../../actions/persist';


export function* trendsFetchWatcher() {
	yield takeEvery(TRENDS_FETCH_START, trendsFetchWorker)
}

function* trendsFetchWorker() {
	const {response, error} = yield call(searchTrends);

	if(response) {
		yield put(successFetchTrends(response.trends));
		yield call(delay, 1000);
		yield put(persist('searchTrends'));
	} else {
		yield put(failFetchTrends(error));
	}
}
