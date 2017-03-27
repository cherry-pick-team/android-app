"use strict";
import {connect} from 'react-redux';
import SearchResults from '../../components/SearchResults';
import {next, prev} from '../../actions/search';


function mapStateToProps (state) {
	return {
		songs: state.search.entries
	}
}

export default connect(mapStateToProps, {})(SearchResults)
