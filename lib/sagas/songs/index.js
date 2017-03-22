import {call, put, takeEvery} from 'redux-saga/effects'
import {SONG_FETCH_START, songFetched, songFetchFail} from '../../actions/songs';
import {fetchSong} from '../../services/api/songs';


export function* songWatcher() {
	yield takeEvery(SONG_FETCH_START, songWorker)
}

function* songWorker(action) {
	const {response, error} = yield call(fetchSong, action.payload.id);

	if (response) {
		yield put(songFetched(response.results, action.payload.target));
	} else {
		yield put(songFetchFail(error));
	}
}
