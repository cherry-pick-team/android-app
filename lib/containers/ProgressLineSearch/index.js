"use strict";
import {connect} from 'react-redux';
import ProgressLine from '../../components/ProgressLine';
import {setProgressSearch} from '../../actions/songs';
import {selectFromSearch} from '../../reducers/searchResults';


function mapStateToProps(state, ownProps) {
	return {
		progress: selectFromSearch(state, ownProps.songId)[0].song.progress
	}
}

function mapDispatchToProps(dispatch) {
	return {
		setProgress: (progress, songId) => {
			dispatch(setProgressSearch({progress, songId}));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProgressLine)
