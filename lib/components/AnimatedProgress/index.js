"use strict";
import React, {PropTypes, Component} from 'react';
import {View, Animated, StyleSheet, Easing} from 'react-native';


/**
 * Контроллер проигрывания песни для отрывка текста
 */
export default class AnimatedProgress extends Component {
	static propTypes = {
		color: PropTypes.string,
		duration: PropTypes.number
	};

	constructor(props) {
		super(props);

		this.state = {
			progressValue: new Animated.Value(0),
			lastValue: 0
		};
	}

	startAnimation() {
		if (this.willBeReseted) {
			this.setState({
				lastValue: 0
			});
			this.state.progressValue.setValue(0);
			this.willBeReseted = false;
		}

		this.isAnimationRunning = true;
		Animated.timing(this.state.progressValue, {
			toValue: 1,
			easing: Easing.linear,
			duration: (1 - this.state.lastValue) * this.props.duration
		}).start(({finished}) => {
			if (finished) {
				this.willBeReseted = true;
				this.isAnimationRunning = false;
			}
		});
	}

	reset() {
		return new Promise((resolve) => {
			Animated.timing(this.state.progressValue, {
				toValue: 0,
				easing: Easing.linear,
				duration: 100
			}).start(resolve);
		});
	}

	stopAnimation() {
		if (!this.isAnimationRunning) {
			return;
		}

		this.state.progressValue.stopAnimation((value) => {
			this.setState({
				lastValue: value
			});
		});
	}

	setValue() {
		//todo
	}

	render() {
		const right = this.state.progressValue.interpolate({
			inputRange: [0, 1],
			outputRange: ['100%', '0%'],
		});

		return (
			<View style={styles.container}>
				<Animated.View
					style={[styles.line, {right, backgroundColor: this.props.color}]}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 5
	},
	line: {
		height: '100%',
		left: 0,
		position: 'absolute'
	}
});
