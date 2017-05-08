"use strict";
import {connect} from 'react-redux';
import SearchHistory from '../../components/SearchHistory';
import {addToFavourite, deleteEntry} from '../../actions/history';
import {search} from '../../actions/search';
import {push} from '../../actions/router'
import {persist} from '../../actions/persist'


function mapDispatchToProps(dispatch) {
	return {
		search: (query) => {
			dispatch(search(query));
		},
		deleteEntry: (id) => {
			dispatch(deleteEntry(id));
			dispatch(persist('searchHistory'));
		},
		addToFavourite: (id) => {
			addToFavourite(deleteEntry(id));
			dispatch(persist('searchHistory'));
		}
	}
}

export default connect(null, mapDispatchToProps)(SearchHistory);
