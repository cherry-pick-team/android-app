"use strict";
import React, {Component, PropTypes} from 'react';
import {View, Text, Dimensions, Animated, PanResponder} from 'react-native';
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

	constructor(props) {
		super(props);
		this.state = {
			circlePosition: props.progress,
			animation: new Animated.Value(props.progress)
		};

		this.panResponder = PanResponder.create({
			onPanResponderTerminationRequest: () => false,
			onStartShouldSetPanResponderCapture: () => true,
			onPanResponderMove: this._handleMove.bind(this),
			onPanResponderRelease: this._handleRelease.bind(this),
			onPanResponderGrant: this._handleGrant.bind(this),
		});

		this.state.animation.addListener(() => {

		});
	}

	_handleMove(event, gesture) {

	}

	_handleRelease(event, gesture) {

	}

	_handleGrant() {

	}

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
				x2={this._getWidth() * this.state.circlePosition}
				y2={this._getHeight() / 2}
				stroke="red"
				strokeWidth="3"
			/>
		);
	}

	_drawCircle() {
		return (
			<Circle
				cx={this._getWidth() * this.state.circlePosition}
				cy={this._getHeight() / 2}
				r="10"
				fill="red"
			/>
		);
	}

	render() {
		return (
			<Animated.View
				{...this.panResponder}
				style={styles.container}>
				<Svg
					width={this._getWidth()}
					height={this._getHeight()}
				>
					{this._drawBaseLine()}
					{this._drawProgressLine()}
					{this._drawCircle()}
				</Svg>
			</Animated.View>
		);
	}
}

const styles = {
	container: {}
};
