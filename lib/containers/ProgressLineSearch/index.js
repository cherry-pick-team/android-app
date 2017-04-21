"use strict";
import {connect} from 'react-redux';
import ProgressLine from '../../components/ProgressLine';
import {setProgressSearch} from '../../actions/songs';


function mapDispatchToProps(dispatch) {
	return {
		setProgress: (progress, songId) => {
			dispatch(setProgressSearch({progress, songId}));
		}
	}
}

export default connect(null, mapDispatchToProps)(ProgressLine)
