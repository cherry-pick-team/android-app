"use strict";
import React, {Component, PropTypes} from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import SearchResults from '../../containers/SearchResults';
import LoadingScreen from '../../components/LoadingScreen';


class SearchResultsLayout extends Component {
	static propTypes = {
		isLoaded: PropTypes.bool
	};

	render() {
		return (
			<View style={styles.wrapper}>
				<View style={styles.container}>
					{this.props.isLoaded ? <SearchResults /> : <LoadingScreen />}
				</View>
				<View style={styles.header}>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {

	},
	wrapper: {
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		backgroundColor: 'white'
	},
	header: {
		position: 'absolute',
		width: '100%',
		top: 0,
		height: 80,
		backgroundColor: 'green',
		zIndex: 100
	}
});

function mapStateToProps (state) {
	return {
		isLoaded: state.searchResults.isLoaded
	}
}

export default connect(mapStateToProps, {})(SearchResultsLayout)