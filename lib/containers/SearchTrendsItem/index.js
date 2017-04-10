"use strict";
import {connect} from 'react-redux';
import SearchTrendsItem from '../../components/SearchTrendsItem';
import {search} from '../../actions/search';
import {push} from '../../actions/router';


function mapDispatchToProps(dispatch) {
	return {
		onPress: (query) => {
			dispatch(search(query));
			dispatch(push('search-results'));
		}
	}
}

export default connect(() => ({}), mapDispatchToProps)(SearchTrendsItem)
