"use strict";

import { combineReducers } from 'redux';
import trends from './trends';
import search from './search';


export default combineReducers({
	trends,
	search
})