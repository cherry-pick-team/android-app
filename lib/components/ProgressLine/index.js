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
		songId: PropTypes.string.isRequired,
		progress: PropTypes.number.isRequired,
		setProgress: PropTypes.func.isRequired
	};

	static defaultProps = {};

	constructor(props) {
		super(props);
		this.state = {
			progress: props.progress,
			animation: new Animated.ValueXY({
				x: props.progress * this._getWidth(),
				y: 0
			}),
			isActive: false
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

		if ((1 - this.state.progress) * this._getWidth() < gesture.dx) {
			gesture.dx = (1 - this.state.progress) * this._getWidth()
		}

		return this.panMover(gesture);
	}

	_handleRelease(event, gesture) {
		this.setState({
			progress: this.state.progress + gesture.dx / this._getWidth()
		});

		this.props.setProgress(this.state.progress, this.props.songId);
		this.setState({isActive: false});
	}

	_handleGrant() {
		this.state.animation.setOffset({
			x: this.state.progress * this._getWidth(),
			y: 0,
		});

		this.state.animation.setValue({x: 0, y: 0});
		this.setState({isActive: true});
	}

	_getWidth() {
		return this.props.width * Dimensions.get('window').width;
	}

	_getHeight() {
		return 30;
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
		const radius = this.state.isActive ? 24 : 12;

		return (
			<View style={[styles.circle, {
				borderRadius: radius,
				height: radius,
				width: radius,
				right: -radius / 2,
			}]}/>
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
