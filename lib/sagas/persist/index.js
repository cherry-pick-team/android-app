import {takeEvery, select, call, put} from 'redux-saga/effects'
import {POPULATE_STORE, PERSIST_STORE, setState} from '../../actions/persist';
import {persistByKey, getByKey} from '../../services/asyncStorage';

const persistedParts = ['searchHistory', 'songs'];

export function* persistWatcher() {
	for(const part of persistedParts) {
		yield takeEvery(POPULATE_STORE, populate.bind(null, part));
		yield takeEvery(PERSIST_STORE, persist);
	}
}

function* populate(key) {
	const stateFromStorage = yield call(getByKey, key);

	yield put(setState({
		[key]: stateFromStorage
	}));
}

function* persist({payload}) {
	const stateByKey = yield select((state) => state[payload]);
	yield persistByKey(payload, stateByKey);
}
