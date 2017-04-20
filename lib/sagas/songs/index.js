"use strict";
import {call, put, takeEvery, fork} from 'redux-saga/effects'
import {
	SONG_FETCH_START,
	songFetched,
	songFetchFail,
	START_PLAY,
	STOP_PLAY,
	RESUME_PLAY,
	PAUSE_PLAY,
	setPlayStatus
} from '../../actions/songs';
import {fetchSong} from '../../services/api/songs';
import {play, stop, pause, resume, getStatus} from '../../services/streaming';


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


export function* playWatcher() {
	yield fork(statusWatcher);
	yield takeEvery([START_PLAY, PAUSE_PLAY, RESUME_PLAY, STOP_PLAY], playWorker);
}

function* playWorker(action) {
	switch (action.type) {
		case START_PLAY:
			yield call(play, action.payload);
			break;
		case PAUSE_PLAY:
			yield call(pause);
			break;
	}
}

function* statusWatcher() {
	while (true) {
		const {status, songId} = yield getStatus();
		yield put(setPlayStatus({isPlaying: status, songId}));
	}
}