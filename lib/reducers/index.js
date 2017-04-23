"use strict";

import { combineReducers } from 'redux';
import favourites from './favourites';
import searchResults from './searchResults';
import searchTrends from './searchTrends';
import searchHistory from './searchHistory';
import songs from './songs';


export default combineReducers({
	favourites,
	searchResults,
	searchTrends,
	searchHistory,
	songs
})