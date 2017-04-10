"use strict";
import React, {Component, PropTypes} from 'react';
import {View, Text} from 'react-native';
import Spinner from '../Spinner';

/**
 * Экран загрузки чего-либо
 */
export default class LoadingScreen extends Component {

	render() {
		return (
			<View style={styles.container}>
				<Spinner style={styles.spinner} strokeColor="#FF7043" />
			</View>
		);
	}
}

const styles = {
	container: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		flexDirection: 'row',
		alignItems:'center',
		justifyContent:'center'
	},
	spinner: {
		width: 150,
		height: 150
	}
};
