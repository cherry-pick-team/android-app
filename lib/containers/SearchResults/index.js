"use strict";
import {connect} from 'react-redux';
import SearchResults from '../../components/SearchResults';
import {next, prev} from '../../actions/search';
import {play, stop} from '../../actions/songs';


function mapStateToProps (state) {
	// todo move to reducer
	const totalSongs = state.search.entries.length;
	const currentSong = state.search.entries[state.search.currentSong];
	const nextSong = state.search.nextSong !== null ? state.search.entries[state.search.nextSong] : null;
	const prevSong = state.search.prevSong !== null ? state.search.entries[state.search.prevSong] : null;

	if (nextSong) {
		nextSong.nextSong = nextSong < totalSongs ? state.search.entries[nextSong + 1] : null;
	}

	if (prevSong) {
		prevSong.prevSong = prevSong > 0 ? state.search.entries[prevSong - 1] : null;
	}

	return {
		searchResults: state.search.entries,
		isLoaded: state.search.isLoaded,
		isError: state.search.isError,
		currentSong,
		nextSong,
		prevSong
	}
}

export default connect(mapStateToProps, {next, prev, play, stop})(SearchResults)
