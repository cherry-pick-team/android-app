"use strict";
import {connect} from 'react-redux';
import SearchTrends from '../../components/Trends';
import {startFetchTrends} from '../../actions/trends';


function mapDispatchToProps(dispatch) {
	return({
		getTrends: () => {dispatch(startFetchTrends())}
	})
}

function mapStateToProps (state) {
	return {
		trends: state.trends
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchTrends)