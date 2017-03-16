"use strict";
import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, Text} from 'react-native';

/**
 * Базовый тектовый инпут
 * используется в поиске
 */
export default class TrendsItem extends Component {
	static propTypes = {
		songName: PropTypes.string,
		place: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		onPress: PropTypes.string,
		style: PropTypes.object
	};

	static defaultProps = {
		style: {},
	};

	render() {
		return (
			<Text onPress={this.props.onPress}>
				{this.props.place + '. ' + this.props.songName}
			</Text>
		);
	}
}
