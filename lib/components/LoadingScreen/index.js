"use strict";
import React, {Component, PropTypes} from 'react';
import {View, Text, Animated} from 'react-native';
import Spinner from '../Spinner';

/**
 * Экран загрузки чего-либо
 */
export default class LoadingScreen extends Component {

	static propTypes = {
		isLoaded: PropTypes.bool
	};

	constructor(props) {
		super(props);

		this.state = {
			top: new Animated.Value(0)
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.isLoaded && !this.props.isLoaded) {
			this.startAnimation();
		}
	}

	startAnimation() {
		return Animated.timing(
			this.state.top,
			{
				toValue: 200,
				duration: 1000
			}
		).start()
	}


	render() {
		return (
			<Animated.View style={[styles.container, {top: this.state.top}]}>
			</Animated.View>
		);
	}
}

const styles = {
	container: {
		position: 'absolute',
		bottom: 0,
		right: 0,
		left: 0,
		backgroundColor: '#7CEB7D',
		flexDirection: 'row',
		alignItems:'center',
		justifyContent:'center'
	},
	spinner: {
		width: 150,
		height: 150
	}
};
