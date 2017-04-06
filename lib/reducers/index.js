"use strict";

import { combineReducers } from 'redux';
import trends from './trends';
import favourites from './favourites';
import searchResults from './searchResults';
import searchTrends from './searchTrends';


export default combineReducers({
	trends,
	search,
	favourites,
	searchResults,
	searchTrends
})