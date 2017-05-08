"use strict";
import {NativeModules, DeviceEventEmitter} from 'react-native';

const {ReactNativeAudioStreaming} = NativeModules;


/**
 * Возвращает url для проигрывания песни
 * @param mongoId - id песни
 * @param from - время с которого нужно начать проигрывать песню
 * @param to - до какого момента проигрывать песню
 */
export function getStreamURL(mongoId, from, to) {
	return `http://cherry.nksoff.ru/crop/get_song/?id=${mongoId}&from_ms=${from}&to_ms=${to}`;
}

let isPlaying = false;
let songId = '';

/**
 * Начинает проигрывание песни с нужным id
 * @param id
 * @param from - время с которого нужно начать проигрывать песню
 * @param to - до какого момента проигрывать песню
 */
export async function play({id, from = 0, to = 0}) {
	debugger;
	songId = id;
	ReactNativeAudioStreaming.play(getStreamURL(id, from, to));
}


/**
 * Ставит на паузу
 */
export async function pause() {
	debugger;
	ReactNativeAudioStreaming.pause();
}


/**
 * Перематывает песню
 */
export async function seek(to) {
	ReactNativeAudioStreaming.seek(to * 1000);
}

let listener = null;

function setCallback(cb) {
	if (!listener) {
		listener = DeviceEventEmitter.addListener(
			'AudioBridgeEvent', (evt) => {
				if (evt.type == 'music_status') {
					cb({
						type: evt.type,
						data: evt
					});
				}
				else if (evt.type == 'music_start') {
					cb({
						type: evt.type,
						data: true
					});
				}
				else if (evt.type == 'music_stop' || evt.type == 'music_pause' || evt.type == 'music_complete') {
					cb({
						type: evt.type,
						data: false
					});
				}
			}
		)
	}


}

export async function getStatus() {
	const statusPromise = new Promise((resolve) => {
		setCallback(resolve);
		ReactNativeAudioStreaming.askStatus();
	});

	const status = await statusPromise;

	return {status, songId};
}

