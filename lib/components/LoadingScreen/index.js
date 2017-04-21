"use strict";
import React, {Component, PropTypes} from 'react';
import {View, Text, Animated} from 'react-native';
import Pulse from 'react-native-pulse';
import Icon from '../../components/Icon';

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
				<Pulse color='#4CAF50' numPulses={3} diameter={400} top={0} speed={30} duration={3000} />
				<View style={styles.caption}>
					<Icon type="search" size={50} color="#383135"/>
					<Text style={styles.captionText}>
						{'Мы ищем песни для Вас!'}
					</Text>
				</View>
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
	caption: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		bottom: '30%'
	},
	captionText: {
		fontSize: 20
	}
};
