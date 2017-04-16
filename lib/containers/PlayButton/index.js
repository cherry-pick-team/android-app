"use strict";
import {connect} from 'react-redux';
import PlayButton from '../../components/PlayButton';
import {play} from '../../actions/songs';


function mapDispatchToProps(dispatch) {
	return {
		onPress: (songId) => {
			dispatch(play(songId));
		}
	}
}

export default connect(null, mapDispatchToProps)(PlayButton)
