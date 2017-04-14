"use strict";
import {connect} from 'react-redux';
import ProgressLine from '../../components/ProgressLine';
import {goToTime} from '../../actions/songs';


function mapStateToProps (state) {
	return {
		progress: state.currentSong.progress
	}
}

export default connect(mapStateToProps, {goToTime})(ProgressLine)
