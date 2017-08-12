"use strict";
import {connect} from 'react-redux';
import SearchResults from '../../components/SearchResults';
import {filterSongsByIds} from '../../reducers/songs'


function mapStateToProps (state) {
	return {
		songs: filterSongsByIds(state, state.searchResults.entries),
		isAuth: state.user.isAuth,
	}
}

export default connect(mapStateToProps)(SearchResults)
