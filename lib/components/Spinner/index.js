"use strict";
import React, {Component, PropTypes} from 'react';
import {View} from 'react-native';
import {MKSpinner} from 'react-native-material-kit';

const styles = {
	spinner: {
		width: 22,
		height: 22
	},
	wrapper: {

	}
};

const DEFAULT_COLOR = '#3F51B5';

const SingleColorSpinner = MKSpinner.singleColorSpinner()
	.withStyle(styles.spinner)
	.build();

/**
 * Базовый тектовый инпут
 * используется в поиске
 */
export default class Spinner extends Component {
	static propTypes = {
		style: PropTypes.object,
		strokeColor: PropTypes.any
	};

	static defaultProps = {
		style: {},
		strokeColor: DEFAULT_COLOR
	};

	render() {
		return (
			<SingleColorSpinner style={this.props.style} strokeColor={this.props.strokeColor} />
		);
	}
}
