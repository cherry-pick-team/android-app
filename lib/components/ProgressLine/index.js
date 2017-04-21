"use strict";
import React, {Component, PropTypes} from 'react';
import {View, Text, Dimensions, Animated, PanResponder, TouchableWithoutFeedback} from 'react-native';
import Svg, {Line} from 'react-native-svg';


/**
 * Полоска проигрывания музыки
 */
export default class ProgressLine extends Component {
	static propTypes = {
		/** От 0 до 1, какую часть ширины занимает полоса */
		width: PropTypes.number.isRequired,
		song: PropTypes.object.isRequired,
		progress: PropTypes.number,
		seek: PropTypes.func.isRequired
	};

	static defaultProps = {};

	constructor(props) {
		super(props);
		this.state = {
			progress: props.song.song.progress,
			animation: new Animated.ValueXY({
				x: props.song.song.progress * this._getWidth(),
				y: 0
			}),
			isActive: false,
			isCircleActive: false
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

	componentWillReceiveProps(nextProps) {
		if (nextProps.progress !== this.props.progress) {
			if (this.skipMessage) {
				return;
			}
			this.state.animation.setOffset({
				x: nextProps.progress * this._getWidth(),
				y: 0,
			});

			this.state.animation.setValue({x: 0, y: 0});

			this.setState({
				progress: nextProps.progress
			});
		}
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
		const progress = this.state.progress + gesture.dx / this._getWidth();

		if (progress >= 0 && progress <= 1) {
			this.props.seek((this.state.progress + gesture.dx / this._getWidth()) * this.props.song.song.duration);
		}

		this.setState({isActive: false});
		this.skipMessage = false;
	}

	_handleGrant() {
		this.skipMessage = true;

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
				stroke="#C8E6C9"
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
		const radius = this.state.isActive ? 12 : 8;

		return (
				<View style={[styles.circle, {
					borderRadius: radius,
					height: 2 * radius,
					width: 2 * radius,
					right: -radius,
					elevation: this.state.isActive ? 5: 0
				}]}/>
		);
	}

	_drawTimeParts() {
		return this.props.song.chunks.map((chunk) => this._drawAccentPart(chunk[0], chunk[1]));
	}

	_drawAccentPart(start, stop) {
		const duration = this.props.song.song.duration * 1000;
		const left = start / duration * this._getWidth();
		const width = (stop - start) / duration * this._getWidth();

		return (
			<View key={start} style={{
				position: 'absolute',
				left,
				height: 8,
				width,
				backgroundColor: '#FF5722',
				borderRadius: 2
			}} />
		);
	}

	render() {
		const animatedRight = this.state.animation.getLayout().left.interpolate({
			inputRange: [0, this._getWidth()],
			outputRange: ['100%', '0%']
		});

		debugger;
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


				<Animated.View style={[styles.animatedWrapper, {right: animatedRight}]}>
					{this._drawProgressLine()}
				</Animated.View>

				<Animated.View style={[styles.animatedWrapper, {right: 0}]}>
					{this._drawTimeParts()}
				</Animated.View>

				<Animated.View
					style={[styles.animatedWrapper, {right: animatedRight}]}
					{...this.panResponder.panHandlers}
				>
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
		backgroundColor: '#81C784'
	},
	circle: {
		position: 'absolute',
		backgroundColor: '#66BB6A'
	},
	animatedWrapper: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		flexDirection: 'row',
		alignItems: 'center'
	},
	timeParts: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		flexDirection: 'row',
		alignItems: 'center'
	}
};
