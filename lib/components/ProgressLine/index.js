"use strict";
import React, {Component, PropTypes} from 'react';
import {View, Text, Dimensions} from 'react-native';
import Svg, {Circle, Line} from 'react-native-svg';

/**
 * Полоска проигрывания музыки
 */
export default class ProgressLine extends Component {
	static propTypes = {
		/** От 0 до 1, какую часть ширины занимает полоса */
		width: PropTypes.number.isRequired,
		progress: PropTypes.number.isRequired
	};

	_getWidth() {
		return this.props.width * Dimensions.get('window').width;
	}

	_getHeight() {
		return 60;
	}

	_drawBaseLine() {
		return (
			<Line
				x1="0"
				y1={this._getHeight() / 2}
				x2={this._getWidth()}
				y2={this._getHeight() / 2}
				stroke="red"
				strokeWidth="1"
			/>
		);
	}

	_drawProgressLine() {
		return (
			<Line
				x1="0"
				y1={this._getHeight() / 2}
				x2={this._getWidth() * this.props.progress}
				y2={this._getHeight() / 2}
				stroke="red"
				strokeWidth="3"
			/>
		);
	}

	_drawCircle() {
		return (
			<Circle
				cx={this._getWidth() * this.props.progress}
				cy={this._getHeight() / 2}
				r="10"
				fill="red"
			/>
		);
	}

	render() {
		return (
			<View style={styles.container}>
				<Svg
					width={this._getWidth()}
				    height={this._getHeight()}
				>
					{this._drawBaseLine()}
					{this._drawProgressLine()}
					{this._drawCircle()}
				</Svg>
			</View>
		);
	}
}

const styles = {
	container: {

	}
};
