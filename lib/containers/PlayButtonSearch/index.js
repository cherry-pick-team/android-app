"use strict";
import {connect} from 'react-redux';
import PlayButton from '../../components/PlayButton';
import {play, pause} from '../../actions/songs';
import {selectFromSearch} from '../../reducers/searchResults';


function mapStateToProps(state, ownProps) {
	return {
		isPlaying: selectFromSearch(state, ownProps.songId)[0].song.isPlaying,
		mongoId: selectFromSearch(state, ownProps.songId)[0].mongo_id,
		duration: selectFromSearch(state, ownProps.songId)[0].song.duration
	}
}

export default connect(mapStateToProps, {play, pause})(PlayButton)
