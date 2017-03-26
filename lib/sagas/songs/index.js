"use strict";
import {call, put, takeEvery} from 'redux-saga/effects'
import {
	SONG_FETCH_START,
	songFetched,
	songFetchFail,
	START_PLAY,
	STOP_PLAY,
	RESUME_PLAY,
	PAUSE_PLAY} from '../../actions/songs';
import {fetchSong} from '../../services/api/songs';
import {play, stop, pause, resume} from '../../services/streaming';


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
	yield takeEvery([START_PLAY, PAUSE_PLAY, RESUME_PLAY, STOP_PLAY], playWorker);
}

function* playWorker(action) {
	switch (action.type) {
		case START_PLAY:
			yield play(action.payload);
			break;
		case STOP_PLAY:
			yield stop(action.payload);
			break;
		case RESUME_PLAY:
			yield resume(action.payload);
			break;
		case PAUSE_PLAY:
			yield pause(action.payload);
			break;
	}
}
