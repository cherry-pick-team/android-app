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

let interval = null;

/**
 * Начинает проигрывание песни с нужным id
 * @param id
 * @param from - время с которого нужно начать проигрывать песню
 * @param to - до какого момента проигрывать песню
 */
export function play({id, from = 0, to = 0}) {
	ReactNativeAudioStreaming.play(getStreamURL(id, from, to));
}

export function askStatus() {
	ReactNativeAudioStreaming.askStatus();
}

/**
 * Ставит на паузу
 */
export function pause() {
	ReactNativeAudioStreaming.pause();
	clearInterval(interval);
	interval = null;
}

const listeners = [];

export function subscribe(listener) {
	const listenerId = listeners.length;
	listeners.push(listener);
	return () => {
		listeners.splice(listenerId, 1);
	}
}



function runStatusLoop() {
	const listener = DeviceEventEmitter.addListener(
		'AudioBridgeEvent', (evt) => {
			listeners.forEach((listener) => listener(evt));
		}
	)
}

runStatusLoop();
