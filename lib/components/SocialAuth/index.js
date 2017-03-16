"use strict";
import React, {Component, PropTypes} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from '../RippleIcon';


export default class SocialAuth extends Component {
	static propTypes = {
		...View.propTypes
	};

	static defaultProps = {
		...View.defaultProps
	};

	render() {
		return (
			<View {...this.props} >
				<Text> Войти через: </Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({

});
