"use strict";
import {NativeModules, DeviceEventEmitter} from 'react-native';

const { ReactNativeAudioStreaming } = NativeModules;


/**
 * Возвращает url для проигрывания песни
 * @param mongoId - id песни
 * @param from - время с которого нужно начать проигрывать песню
 * @param to - до какого момента проигрывать песню
 */
export function getStreamURL(mongoId, from ,to) {
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
export async function play(id, from = 0, to = 100 * 60 * 1000) {
	songId = id;
	ReactNativeAudioStreaming.play(getStreamURL(id, from ,to));
}


/**
 * Ставит на паузу
 */
export async function pause() {
	ReactNativeAudioStreaming.pause();
}


export async function getStatus() {
	const statusPromise =  new Promise((resolve) => {
		DeviceEventEmitter.addListener(
			'AudioBridgeEvent', (evt) => {
				if (evt.type == 'music_status') {
					resolve(evt.isPlaying);
				}
				else if (evt.type == 'music_start') {
					resolve(true);
				}
				else if (evt.type == 'music_stop' || evt.type == 'music_pause' || evt.type == 'music_complete') {
					resolve(false);
				}
			}
		)
	});

	const status = await statusPromise;

	return {status, songId};
}

