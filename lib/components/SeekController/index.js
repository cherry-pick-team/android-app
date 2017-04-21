"use strict";
import React, {Component, PropTypes} from 'react';
import {Alert, TouchableWithoutFeedback, View, StyleSheet} from 'react-native';
import RippleIcon from '../RippleIcon';


export default class SeekController extends Component {
	static propTypes = {
		toNext: PropTypes.func,
		toPrev: PropTypes.func
	};

	static defaultProps = {};

	_onPressNext() {

	}

	_onPressPrev() {

	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.icon}>
					<RippleIcon type="step-backward" from="FontAwesome" size={30} />
				</View>
				<View style={styles.icon}>
					<RippleIcon type="step-forward" from="FontAwesome" size={30} />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'flex-start',
	},
	icon: {
		borderRadius: 5,
		marginLeft: 5,
		marginRight: 5,
		backgroundColor: 'white'
	}
});