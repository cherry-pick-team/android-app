"use strict";
import {connect} from 'react-redux';
import Search from '../../components/Search';
import {search} from '../../actions/search';
import {push} from '../../actions/router';


function mapDispatchToProps(dispatch) {
	return {
		search: (query) => {
			dispatch(search(query));
		}
	}
}

export default connect(() => ({}), mapDispatchToProps)(Search)
