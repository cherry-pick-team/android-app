"use strict";

import { combineReducers } from 'redux';
import trends from './trends';
import favourites from './favourites';
import searchResults from './searchResults';
import searchTrends from './searchTrends';
import searchHistory from './searchHistory';


export default combineReducers({
	trends,
	favourites,
	searchResults,
	searchTrends,
	searchHistory
})