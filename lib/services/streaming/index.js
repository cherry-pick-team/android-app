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

let isPlaying = false;

/**
 * Начинает проигрывание песни с нужным id
 * @param songId
 */
export async function play(songId) {
	return;
	if (isPlaying) {
		await stop();
	}

	ReactNativeAudioStreaming.play(getStreamURL(songId), {
		showIniOSMediaCenter: true,
		showInAndroidNotifications: true
	});

	isPlaying = true;
}

/**
 * Ставит на паузу
 */
export async function pause() {
	if (!isPlaying) {
		return;
	}

	ReactNativeAudioStreaming.pause();

	isPlaying = false
}

/**
 * Останавливает текущую песню
 */
export async function stop() {
	return;
	if (!isPlaying) {
		return;
	}

	ReactNativeAudioStreaming.stop();

	isPlaying = false;
}

/**
 * Возобновляет предыдущую песню
 */
export async function resume() {
	if (isPlaying) {
		return;
	}
	ReactNativeAudioStreaming.resume();

	isPlaying = true;
}
