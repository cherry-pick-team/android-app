"use strict";
import React, {Component, PropTypes} from 'react';
import {View, StyleSheet, Text, Image, Animated, Dimensions} from 'react-native';
import wave1 from './Wave_1@3x.png';
import wave2 from './Wave_2@3x.png';
import wave3 from './Wave_3@3x.png';


const waves = [wave2, wave1, wave3];

export default class Wave extends Component {
	static propTypes = {
		...View.propTypes,
		isMoving: PropTypes.bool
	};

	static defaultProps = {
		...View.defaultProps,
		isMoving: true
	};

	constructor(props) {
		super(props);
		this.state = {
			wavesPosition: [
				new Animated.Value(-50),
				new Animated.Value(-60),
				new Animated.Value(-40)
			]
		};
	}

	componentDidMount() {
		if (this.props.isMoving) {
			this.startAnimation();
		}
	}

	animationCycle(prop, fromValue, toValue, duration) {
		return Animated.sequence([
			Animated.timing(
				prop,
				{
					toValue: toValue,
					duration: duration / 2
				}
			),
			Animated.timing(
				prop,
				{
					toValue: fromValue,
					duration: duration / 2
				}
			)
		]);
	}

	startAnimation() {
		if (!this.props.isMoving) {
			return;
		}
		Animated.parallel([
			this.animationCycle(this.state.wavesPosition[0], 0, -50, 4000),
			this.animationCycle(this.state.wavesPosition[1], 0, -60, 4000),
			this.animationCycle(this.state.wavesPosition[2], 0, -40, 4000)
		]).start(this.startAnimation.bind(this));
	}

	render() {
		const {width} = Dimensions.get('window');
		return (
			<View {...this.props}>
				{waves.map((wave, index) => (
					<Animated.Image
						style={[styles.image, {
							left: this.state.wavesPosition[index],
							width: width * 1.2
						}]}
						source={wave}
						key={index}
					/>
				))}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	image: {
		position: 'absolute',
		top: 0,
		opacity: 0.4
	}
});
