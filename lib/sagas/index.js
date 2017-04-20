import {fork} from 'redux-saga/effects'
import {trendsFetchWatcher} from './trends';
import {searchWatcher} from './search';
import {songWatcher, playWatcher} from './songs';
import {persistWatcher} from './persist';


export default function* root() {
	yield [
		fork(trendsFetchWatcher),
		fork(searchWatcher),
		fork(songWatcher),
		fork(playWatcher),
		fork(persistWatcher)
	];
}
