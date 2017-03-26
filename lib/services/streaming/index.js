"use strict";
import { ReactNativeAudioStreaming } from 'react-native-audio-streaming';


/**
 * Возвращает url для проигрывания песни
 * @param songId - id песни
 */
export function getStreamURL(songId) {
	// todo remove mock
	return 'http://lacavewebradio.chickenkiller.com:8000/stream.mp3';
}


/**
 * Начинает проигрывание песни с нужным id
 * @param songId
 */
export async function play(songId) {
	ReactNativeAudioStreaming.play(getStreamURL(songId), {
		showIniOSMediaCenter: true,
		showInAndroidNotifications: true
	});
}

/**
 * Ставит на паузу
 */
export async function pause() {
	ReactNativeAudioStreaming.pause();
}

/**
 * Останавливает текущую песню
 */
export async function stop() {
	ReactNativeAudioStreaming.stop();
}

/**
 * Возобновляет предыдущую песню
 */
export async function resume() {
	ReactNativeAudioStreaming.resume();
}

