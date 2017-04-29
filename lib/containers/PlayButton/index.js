"use strict";
import {connect} from 'react-redux';
import PlayButton from '../../components/PlayButton';
import {play, pause} from '../../actions/songs';
import {selectSongById} from '../../reducers/songs';


function mapStateToProps(state, ownProps) {
	const song = selectSongById(state, ownProps.songId);

	return {
		isPlaying: song.isPlaying,
		mongoId: song.mongoId
	}
}

export default connect(mapStateToProps, {play, pause})(PlayButton)
