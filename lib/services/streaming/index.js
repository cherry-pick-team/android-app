"use strict";
import {NativeModules, DeviceEventEmitter} from 'react-native';
import {Store} from '../../store'
import {statusUpdate} from '../../actions/songs'

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

let interval = null;

/**
 * Начинает проигрывание песни с нужным id
 * @param id
 * @param from - время с которого нужно начать проигрывать песню
 * @param to - до какого момента проигрывать песню
 */
export async function play({id, from = 0, to = 0}) {
	ReactNativeAudioStreaming.play(getStreamURL(id, from, to));

	if (!interval) {
		interval = setInterval(() => {
			ReactNativeAudioStreaming.askStatus();
		}, 500)
	}
}


/**
 * Ставит на паузу
 */
export async function pause() {
	ReactNativeAudioStreaming.pause();
	clearInterval(interval);
}


/**
 * Перематывает песню
 */
export async function seek(to) {
	ReactNativeAudioStreaming.seek(to * 1000);
}


function runStatusLoop() {
	const listener = DeviceEventEmitter.addListener(
		'AudioBridgeEvent', (evt) => {
			if (evt.type === 'music_status') {
				Store.dispatch(statusUpdate({
					type: evt.type,
					data: evt
				}));
			}
			else if (evt.type === 'music_start') {
				Store.dispatch(statusUpdate({
					type: evt.type,
					data: true
				}));
			}
			else if (evt.type === 'music_stop' || evt.type === 'music_pause' || evt.type === 'music_complete') {
				Store.dispatch(statusUpdate({
					type: evt.type,
					data: false
				}));
			}
		}
	)
}

runStatusLoop();
