import {fork} from 'redux-saga/effects'
import {trendsFetchWatcher} from './trends';

export default function* root() {
	yield [
		fork(trendsFetchWatcher)
	]
}
