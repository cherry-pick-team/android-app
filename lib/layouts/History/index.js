"use strict";
import React, {Component, PropTypes} from 'react';
import {StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';
import BaseDrawerLayout from '../BaseDrawerLayout';


class History extends Component {

	static propTypes = {
		history: PropTypes.array.isRequired,
		fetchHistory: PropTypes.func
	};

	render() {
		return (
			<BaseDrawerLayout>
			    {this.props.history.map((query, index) => (
			        <Text key={index}>
			            {query}
			        </Text>
			    ))}
			</BaseDrawerLayout>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column'
	},
	search: {
		marginTop: 10
	},
	trends: {
		marginTop: 10
	}
});

function mapDispatchToProps(dispatch) {
	return {}
}

function mapStateToProps (state) {
	return {
	    history: state.searchHistory.entries
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(History)