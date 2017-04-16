"use strict";
import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {connect} from 'react-redux';
import {headerPrimary, textColor} from '../../shared/vars';
import SearchResults from '../../containers/SearchResults';
import Header from '../../components/Header';
import {back} from '../../actions/router';


class SearchResultsLayout extends Component {
	static propTypes = {
		isLoaded: PropTypes.bool.isRequired,
		query: PropTypes.string.isRequired,
		back: PropTypes.func.isRequired
	};

	render() {
		return (
			<View style={styles.wrapper}>
				<Header
					iconType="angle-up"
					iconFrom="FontAwesome"
					onMenuClick={this.props.back}
				    title={this.props.query}
				/>
				<View style={styles.container}>
					{this.props.isLoaded ? <SearchResults />: null}
				</View>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	container: {},
	wrapper: {
		height: '100%',
		width: '100%',
		backgroundColor: 'white'
	}
});

function mapStateToProps(state) {
	return {
		isLoaded: state.searchResults.isLoaded,
		query: state.searchResults.query
	}
}

export default connect(mapStateToProps, {back})(SearchResultsLayout)