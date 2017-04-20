"use strict";

import {AsyncStorage} from 'react-native';

const APP_KEY = '@CherryPick';

export async function persistHistory(entries) {
    try {
        await AsyncStorage.setItem(`${APP_KEY}:searchHistory`, JSON.stringify(entries));
    }
    catch(error) {
    }
}

export async function getHistory() {
    try {
        const value = await AsyncStorage.getItem(`${APP_KEY}:searchHistory`);
        debugger;
        return value || [];
    }
    catch(error) {
    }

    return [];
}
