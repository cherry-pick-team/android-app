import {takeEvery, select, call, put} from 'redux-saga/effects'
import {POPULATE_STORE, PERSIST_STORE, setState, CLEAR_STORAGE} from '../../actions/persist';
import {persistByKey, getByKey, clearByKey} from '../../services/asyncStorage';

const persistedParts = ['searchHistory', 'songs', 'searchTrends'];

/**
 * Тут пишем фильтры ограничивающие данные записанные в стор
 */
const stateFilters = {
	searchHistory: (state) => {
		return [...state].splice(0, 20);
	},
	songs: (state) => {
		return [...state].splice(0, 30);
	},
	searchTrends: (state) => [...state.entries]
};


export function* persistWatcher() {
	for(const part of persistedParts) {
		yield takeEvery(POPULATE_STORE, populate.bind(null, part));
		yield takeEvery(PERSIST_STORE, persist);
		yield takeEvery(CLEAR_STORAGE, clear);
	}
}

function* clear({payload}) {
	yield call(clearByKey, payload);
}

function* populate(key) {
	const stateFromStorage = yield call(getByKey, key);

	yield put(setState({
		[key]: stateFromStorage
	}));
}

function* persist({payload}) {
	const stateByKey = yield select((state) => state[payload]);
	const stateByKeyCopy = stateFilters[payload](stateByKey);
	yield call(persistByKey, payload, stateByKeyCopy);
}
