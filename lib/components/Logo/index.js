"use strict";
import React, {Component, PropTypes} from 'react';
import {View, StyleSheet} from 'react-native';


export default class Logo extends Component {
	static propTypes = {
		...View.propTypes,
	};

	static defaultProps = {
		...View.defaultProps
	};

	render() {
		return (
			<View {...this.props} style={[styles.logo, this.props.style]}>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	logo: {
		width: 100,
		height: 120,
	}
});
