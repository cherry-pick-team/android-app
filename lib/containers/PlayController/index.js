"use strict";
import {connect} from 'react-redux';
import PlayController from '../../components/PlayController';
import {play, stop} from '../../actions/songs';


function mapStateToProps(state) {
	return {
		isPlaying: state.currentSong.isActive,
		song: state.currentSong.song,
		progress: state.currentSong.progress
	}
}

export default connect(mapStateToProps, {play, stop})(PlayController)
