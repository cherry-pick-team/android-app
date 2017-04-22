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
	SEEK_PLAY,
	getStatusAction,
	GET_STATUS
} from '../../actions/songs';
import {fetchSong} from '../../services/api/songs';
import {play, pause, seek, getStatus} from '../../services/streaming';


export function* songWatcher() {
	yield takeEvery(SONG_FETCH_START, songWorker);
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
	yield takeEvery(GET_STATUS, statusWorker);
	yield takeEvery([START_PLAY, PAUSE_PLAY, SEEK_PLAY], playWorker);
}

let shouldCheckStatus = false;

function* playWorker(action) {
	switch (action.type) {
		case START_PLAY:
			yield call(play, {id: action.payload.id, to: action.payload.duration * 1000});
			shouldCheckStatus = true;
			yield fork(statusCheck);
			break;
		case PAUSE_PLAY:
			shouldCheckStatus = false;
			yield call(pause);
			break;
		case SEEK_PLAY:
			yield call(seek, action.payload);
			break;
	}
}

function* statusCheck() {
	while (shouldCheckStatus) {
		yield put(getStatusAction());
		yield call(delay, 1000);
	}
}

function* statusWorker() {
	const {status, songId} = yield getStatus();

	if (status.type === 'music_status') {
		const progress = status.data.position / status.data.duration;
		yield put(setProgressSearch({songId, progress}));
	} else {
		yield put(setPlayStatus({isPlaying: status.data, songId}));
	}
}