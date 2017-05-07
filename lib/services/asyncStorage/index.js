"use strict";

import {AsyncStorage} from 'react-native';


export async function persistByKey(key, state) {
	try {
		await AsyncStorage.setItem(key, JSON.stringify(state));
	}
	catch (error) {
	}
}

export async function clearByKey(key) {
	try {
		await AsyncStorage.setItem(key, JSON.stringify([]));
	}
	catch (error) {
	}
}


export async function getByKey(key) {
	try {
		const dataFromStorage = await AsyncStorage.getItem(key);

		return JSON.parse(dataFromStorage);
	}
	catch(error) {
		return null;
	}
}
