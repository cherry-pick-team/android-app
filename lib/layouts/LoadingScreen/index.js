"use strict";
import React, {Component, PropTypes} from 'react';
import {View, Text} from 'react-native';
import Pulse from 'react-native-pulse';
import Icon from '../../components/Icon';
import {primaryColor} from '../../shared/vars';


/**
 * Экран загрузки чего-либо
 */
export default class LoadingScreen extends Component {

	static propTypes = {
		isLoaded: PropTypes.bool
	};

	render() {
		return (
			<View style={styles.container}>
				<Pulse color='white' numPulses={3} diameter={400} top={0} speed={30} duration={1000} />
				<View style={styles.caption}>
					<Icon type="search" size={50} color="white"/>
					<Text style={styles.captionText}>
						{'Мы ищем песни для Вас!'}
					</Text>
				</View>
			</View>
		);
	}
}

const styles = {
	container: {
		position: 'absolute',
		bottom: 0,
		right: 0,
		left: 0,
		top: 0,
		backgroundColor: primaryColor,
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
		fontSize: 20,
		color: 'white'
	}
};
