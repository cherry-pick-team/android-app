"use strict";
import React, {Component, PropTypes} from 'react';
import {View, StyleSheet, Text, Image, Animated, Dimensions} from 'react-native';
import waves from './Waves.png';


export default class Wave extends Component {
	static propTypes = {
		...View.propTypes
	};

	static defaultProps = {
		...View.defaultProps
	};

	render() {
		return (
			<View {...this.props}>
				<Image
					style={styles.image}
					source={waves}
					fadeDuration={0}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	image: {
		flex: 1,
		width: null,
		height: null,
		resizeMode: 'stretch'
	}
});
