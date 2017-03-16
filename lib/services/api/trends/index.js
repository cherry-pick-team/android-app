"use strict";
import {endpoint} from '../index';


const getTrendsMethod = '/trends';

/**
 * Пытается загрузить трандовые песни из API
 */
export function* fetchTrends() {
	const fullURL = endpoint + getTrendsMethod;

	// Замоканные тренды
	const response = {
		trends: [{
			place: 1,
			songName: 'Let It Be',
		}, {
			place: 2,
			songName: 'Let It Snow'
		}, {
			place: 3,
			songName: 'Let My People Go'
		}]
	};

	return {
		response
	}

}
