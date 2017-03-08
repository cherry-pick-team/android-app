"use strict";
import React, {Component, PropTypes} from 'react';
import {View, StyleSheet, Text, TouchableNativeFeedback} from 'react-native';
import Icon from '../RippleIcon';


export default class Header extends Component {
	static propTypes = {
		color: PropTypes.string
	};

	static defaultProps = {
		color: '#fc5830'
	};

	render() {
		return (
				<View style={[styles.header, {backgroundColor: this.props.color}]}>
					<Icon type="menu" size={30} color="white"/>
					<Text style={styles.title}> Название </Text>
				</View>
	);
	}
}

const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: 60,
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft: 10,
		elevation: 5
	},
	title: {
		paddingLeft: 20,
		color: 'white',
		fontSize: 18
	}
});

