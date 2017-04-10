"use strict";
import React, {Component, PropTypes} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import wavePng from './Artboard@3x.png';


export default class Wave extends Component {
	static propTypes = {
		...View.propTypes
	};

	static defaultProps = {
		...View.defaultProps
	};

	render() {
		debugger;
		return (
			<View {...this.props}>
				<Image source={wavePng}/>
			</View>
		);
	}
}
