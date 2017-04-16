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
		progress: PropTypes.number.isRequired,
		setProgress: PropTypes.func
	};

	static defaultProps = {
		setProgress: () => {
		}
	};

	constructor(props) {
		super(props);
		this.state = {
			progress: props.progress,
			animation: new Animated.ValueXY({
				x: props.progress * this._getWidth(),
				y: 0
			})
		};

		this.panMover = Animated.event([{
			dx: this.state.animation.x,
		}]);

		this.panResponder = PanResponder.create({
			onStartShouldSetPanResponderCapture: () => true,
			onPanResponderMove: this._handleMove.bind(this),
			onPanResponderRelease: this._handleRelease.bind(this),
			onPanResponderGrant: this._handleGrant.bind(this),
		});
	}

	_handleMove(event, gesture) {
		if (this.state.progress === 0 && gesture.dx < 0) {
			return false;
		}

		if (this.state.progress > 1 && gesture.dx > 0) {
			this.setState({progress: 1});
			return false;
		}

		this.setState({
			progress: this.state.progress + gesture.dx / this._getWidth()
		});

		return this.panMover(gesture);
	}

	_handleRelease(event, gesture) {
		this.props.setProgress(this.state.progress)
	}

	_handleGrant() {
		this.state.animation.setOffset({
			x: this.state.progress * this._getWidth(),
			y: 0,
		});
		this.state.animation.setValue({x: 0, y: 0});
	}

	_getWidth() {
		return this.props.width * Dimensions.get('window').width;
	}

	_getHeight() {
		return 40;
	}

	_drawBaseLine() {
		return (
			<Line
				x1="0"
				y1={this._getHeight() / 2}
				x2={this._getWidth()}
				y2={this._getHeight() / 2}
				stroke="red"
				strokeWidth="1.5"
			/>
		);
	}

	_drawProgressLine() {
		return (
			<View style={styles.progressLine}/>
		);
	}

	_drawCircle() {
		return (
			<View style={styles.circle}/>
		);
	}

	render() {
		const animatedRight = this.state.animation.getLayout().left.interpolate({
			inputRange: [0, this._getWidth()],
			outputRange: ['100%', '0%']
		});

		return (
			<View
				style={styles.container}
			>
				<Svg
					width={this._getWidth()}
					height={this._getHeight()}
				>
					{this._drawBaseLine()}
				</Svg>

				<Animated.View
					{...this.panResponder.panHandlers}
					style={[styles.animatedWrapper, {right: animatedRight}]}
				>
					{this._drawProgressLine()}
					{this._drawCircle()}
				</Animated.View>
			</View>
		);
	}
}

const styles = {
	container: {},
	progressLine: {
		position: 'absolute',
		height: 4,
		width: '100%',
		backgroundColor: 'red'
	},
	circle: {
		position: 'absolute',
		right: -7.5,
		borderRadius: 15,
		height: 15,
		width: 15,
		backgroundColor: 'red'
	},
	animatedWrapper: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		flexDirection: 'row',
		alignItems: 'center'
	}
};
