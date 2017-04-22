import {takeEvery, select, call, put} from 'redux-saga/effects'
import {POPULATE_STORE, PERSIST_STORE, setState} from '../../actions/persist';
import {SEARCH_START} from '../../actions/search';
import {persistByKey, getByKey} from '../../services/asyncStorage';

const persistedParts = ['searchHistory', 'songs'];

export function* persistWatcher() {
	for(const part of persistedParts) {
		yield takeEvery(POPULATE_STORE, populate.bind(null, part));
		yield takeEvery(SEARCH_START, persist.bind(null, part));
	}
}

function* populate(key) {
	const stateFromStorage = yield call(getByKey, key);

	yield put(setState({
		[key]: stateFromStorage
	}));
}

function* persist(key) {
	const stateByKey = yield select((state) => state[key]);
	yield persistByKey(key, stateByKey);
}
