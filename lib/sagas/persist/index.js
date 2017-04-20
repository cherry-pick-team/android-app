import {takeEvery, select, call, put} from 'redux-saga/effects'
import {POPULATE_STORE, PERSIST_STORE, setState} from '../../actions/persist';
import {SEARCH_START} from '../../actions/search';
import {persistByKey, getByKey} from '../../services/asyncStorage';


export function* persistWatcher() {
	yield takeEvery(POPULATE_STORE, populate.bind(null, 'searchHistory'));
	yield takeEvery(SEARCH_START, persist.bind(null, 'searchHistory'));
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
