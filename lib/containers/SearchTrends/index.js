"use strict";
import {connect} from 'react-redux';
import SearchTrends from '../../components/SearchTrends';
import {startFetchTrends} from '../../actions/trends';


function mapDispatchToProps(dispatch) {
	return({
		getTrends: () => {dispatch(startFetchTrends())}
	})
}

function mapStateToProps (state) {
	return {
		trends: state.searchTrends
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchTrends)
