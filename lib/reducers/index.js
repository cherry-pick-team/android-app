"use strict";

import { combineReducers } from 'redux';
import trends from './trends';
import favourites from './favourites';
import searchResults from './searchResults';
import searchTrends from './searchTrends';
import currentSong from './currentSong';


export default combineReducers({
	trends,
	favourites,
	searchResults,
	searchTrends,
	currentSong
})