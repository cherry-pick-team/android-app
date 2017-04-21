"use strict";
import {call, put, takeEvery, fork, select} from 'redux-saga/effects'
import {
	SONG_FETCH_START,
	songFetched,
	songFetchFail,
	START_PLAY,
	PAUSE_PLAY,
	setPlayStatus,
	setProgressSearch
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
	yield takeEvery([START_PLAY, PAUSE_PLAY], playWorker);
}

function* playWorker(action) {
	switch (action.type) {
		case START_PLAY:
			yield call(play, {id: action.payload.id, to: action.payload.duration * 1000});
			break;
		case PAUSE_PLAY:
			yield call(pause);
			break;
	}
}

function* statusWatcher() {
	while (true) {
		const {status, songId} = yield getStatus();

		if (status.type === 'music_status') {
			const progress = status.data.position / status.data.duration;
			yield put(setProgressSearch({songId, progress}));
		} else {
			yield put(setPlayStatus({isPlaying: status.data, songId}));
		}
	}
}