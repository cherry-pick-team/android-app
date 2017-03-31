"use strict";
import React, {Component, PropTypes} from 'react';
import {StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';
import BaseDrawerLayout from '../BaseDrawerLayout';


class Settings extends Component {

	static propTypes = {
		history: PropTypes.object,
		fetchHistory: PropTypes.func
	};

	render() {
		return (
			<BaseDrawerLayout>
				<Text> Settings </Text>
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
	return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)