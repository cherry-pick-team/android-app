"use strict";
import {call, put, takeEvery, fork, select} from 'redux-saga/effects'
import {delay} from 'redux-saga'
import {
	SONG_FETCH_START,
	songFetched,
	songFetchFail,
	START_PLAY,
	PAUSE_PLAY,
	setPlayStatus,
	setProgressSearch,
	SEEK_PLAY
} from '../../actions/songs';
import {fetchSong} from '../../services/api/songs';
import {play, pause, seek, getStatus} from '../../services/streaming';
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
	// yield takeEvery(SEEK_PLAY, handleSeek);
}

function* handleStart({payload}) {
	const song = yield select((state) => {
		return state.songs[payload.id];
	});

	const [from, to] = song.chunks[payload.chunkIndex];

	yield call(play, {
		id: payload.id,
		to,
		from
	});
}

function* handlePause() {
	yield call(pause);
}


function* playWorker(action) {
	switch (action.type) {
		case START_PLAY:
			yield call(play, {
				id: action.payload.id,
				to: action.payload.to * 1000,
				from: action.payload.from * 1000
			});
			break;
		case PAUSE_PLAY:
			yield call(pause);
			break;
		case SEEK_PLAY:
			yield call(seek, action.payload);
			break;
	}
}