import {fork} from 'redux-saga/effects'
import {trendsFetchWatcher} from './trends';
import {searchWatcher} from './search';


export default function* root() {
	yield [
		fork(trendsFetchWatcher),
		fork(searchWatcher)
	];
}
