"use strict";
import {connect} from 'react-redux';
import PlayButton from '../../components/PlayButton';
import {play, pause} from '../../actions/songs';
import {selectSongById} from '../../reducers/songs';


function mapStateToProps(state, ownProps) {
	debugger;

	return {
		isPlaying: selectSongById(state, ownProps.songId).isPlaying,
		mongoId: selectSongById(state, ownProps.songId).mongoId
	}
}

export default connect(mapStateToProps, {play, pause})(PlayButton)
