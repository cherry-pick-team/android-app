"use strict";
import {connect} from 'react-redux';
import ProgressLine from '../../components/ProgressLine';
import {seek} from '../../actions/songs';
import {selectSongById} from '../../reducers/songs';


const mapStateToProps = (state, ownProps) => {
	const song = selectSongById(state, ownProps.songId);

	return {
		progress: song.progress,
		duration: song.duration,
		chunks: song.chunks
	}
};

export default connect(mapStateToProps, {seek})(ProgressLine)
