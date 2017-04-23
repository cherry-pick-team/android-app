import {takeEvery, select, call, put} from 'redux-saga/effects'
import {POPULATE_STORE, PERSIST_STORE, setState} from '../../actions/persist';
import {persistByKey, getByKey} from '../../services/asyncStorage';

const persistedParts = ['searchHistory', 'songs'];

/**
 * Тут пишем фильтры ограничивающие данные записанные в стор
 */
const stateFilters = {
	searchHistory: (state) => {
		return state.splice(0, 20);
	},
	songs: (state) => {
		return state.splice(0, 30);
	}
};


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
	let stateByKey = yield select((state) => state[payload]);
	stateByKey = stateFilters[payload](stateByKey);
	yield persistByKey(payload, stateByKey);
}
