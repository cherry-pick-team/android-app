import {takeEvery, select, call, put} from 'redux-saga/effects'
import {POPULATE_STORE, PERSIST_STORE, setState} from '../../actions/persist';
import {persistByKey, getState} from '../../services/asyncStorage';


export function* persistWatcher() {
	yield takeEvery([POPULATE_STORE, PERSIST_STORE], persistWorker)
}

function* persistWorker(action) {
	switch (action.type) {
		case POPULATE_STORE:
			yield populate(action.payload);
			break;
		case PERSIST_STORE:
			yield persist(action.payload);
			break;
	}
}


function* populate() {
	const stateFromStorage = yield call(getState);
	yield put(setState(stateFromStorage))
}

function* persist(key) {
	const stateByKey = yield select((state) => state[key]);
	yield call(persistByKey, key, stateByKey);
}
