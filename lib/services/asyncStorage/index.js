"use strict";

import {AsyncStorage} from 'react-native';

const APP_KEY = '@CherryPick';

export async function persistByKey(key, state) {
	try {
		await AsyncStorage.setItem(`${APP_KEY}:${key}`, JSON.stringify(state));
	}
	catch (error) {
	}
}

export async function getState() {
	try {
		const keys = await AsyncStorage.getAllKeys();
		let result = {};

		keys.forEach((key) => {
			result[key] = getByKey(key)
		});

		return result;
	}
	catch (error) {
		return {};
	}

}

export async function getByKey(key) {
	try {
		const value = await AsyncStorage.getItem(`${APP_KEY}:${key}`);
		return value;
	}
	catch(error) {
	}

	return null;
}
