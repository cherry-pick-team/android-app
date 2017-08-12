"use strict";

import { combineReducers } from 'redux';
import favourites from './favourites';
import searchResults from './searchResults';
import searchTrends from './searchTrends';
import searchHistory from './searchHistory';
import songs from './songs';
import searchSuggests from './searchSuggests';


export default combineReducers({
	favourites,
	searchResults,
	searchTrends,
	searchHistory,
	songs,
	searchSuggests,
})
