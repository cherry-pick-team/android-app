"use strict";
import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, Text, Animated} from 'react-native';
import {connect} from 'react-redux';
import SearchResults from '../../containers/SearchResults';
import LoadingScreen from '../../components/LoadingScreen';
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
			<View style={styles.layout}>
				<View style={styles.wrapper}>
					<Header
						iconType="angle-down"
						iconFrom="FontAwesome"
						iconColor="#FFFAFF"
						onMenuClick={this.props.back}
						style={styles.header}
						textColor="#E0E0E0"
					>
						<Text style={styles.headerTitleText}>
							{this.props.query}
						</Text>
					</Header>
					<View style={styles.container}>
						<SearchResults />
					</View>
				</View>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		height: '100%',
		width: '100%'
	},
	wrapper: {
		height: '100%',
		width: '100%',
		backgroundColor: 'white',
		zIndex: 100,
		elevation: 10
	},
	header: {
		position: 'absolute'
	},
	headerTitleText: {
		color: 'white',
		fontSize: 18
	}
});

function mapStateToProps(state) {
	return {
		isLoaded: state.searchResults.isLoaded,
		query: state.searchResults.query
	}
}

export default connect(mapStateToProps, {back})(SearchResultsLayout)