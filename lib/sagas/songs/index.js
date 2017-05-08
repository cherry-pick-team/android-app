"use strict";
import {call, put, takeEvery, select} from 'redux-saga/effects'
import {
	SONG_FETCH_START,
	songFetched,
	songFetchFail,
	START_PLAY,
	PAUSE_PLAY,
	STATUS_UPDATE,
	pause as pauseAction
} from '../../actions/songs';
import {fetchSong} from '../../services/api/songs';
import {play, pause, seek} from '../../services/streaming';
import {persist} from '../../actions/persist';


export function* songWatcher() {
	yield takeEvery(SONG_FETCH_START, songWorker);
}


function* songWorker(action) {
	const {response, error} = yield call(fetchSong, action.payload.id);

	if (response) {
		yield put(songFetched(response.results, action.payload.target));
		yield put(persist('songs'));
	} else {
		yield put(songFetchFail(error));
	}
}


export function* playWatcher() {
	yield takeEvery(START_PLAY, handleStart);
	yield takeEvery(PAUSE_PLAY, handlePause);
	yield takeEvery(STATUS_UPDATE, handleStatus);
	// yield takeEvery(SEEK_PLAY, handleSeek);
}

function* handleStart({payload}) {
	const song = yield select((state) => {
		return state.songs[payload.id];
	});

	let from = 0;
	let to = 0;

	if (payload.chunkIndex > 0) {
		[from] = song.chunks[payload.chunkIndex - 1];
	} else {
		[from] = song.chunks[payload.chunkIndex];
	}

	if (payload.chunkIndex < song.chunks.length - 1) {
		to = song.chunks[payload.chunkIndex + 1][1];
	} else {
		to = song.chunks[payload.chunkIndex][1];
	}

	yield call(play, {
		id: payload.id,
		to,
		from
	});
}

function* handlePause() {
	yield call(pause);
}

function* handleStatus({payload}) {
	if ((payload.type === 'music_status' && !payload.data.isPlaying) || payload.type === 'music_complete') {
		yield put(pauseAction());
	}
}
