"use strict";
import React, {Component, PropTypes} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Svg, {Polygon} from 'react-native-svg';
import polygonConfig from './polygon.json';


export default class PolygonComponent extends Component {
	static propTypes = {
		...View.propTypes,
		parentWidth: PropTypes.number.isRequired,
		parentHeight: PropTypes.number.isRequired
	};

	static defaultProps = {
		...View.defaultProps
	};

	getPoint(width, height) {
		return polygonConfig.reduce((config, point) => {
			config += ` ${point.x * width},${point.y * height} `;
			return config;
		}, '');
	}

	render() {
		return (
			<Svg
				height={this.props.parentHeight}
				width={this.props.parentWidth}
			>
				<Polygon
					points={this.getPoint(this.props.parentWidth, this.props.parentHeight)}
					fill="#FDD835"
				/>
			</Svg>
		);
	}
}


const styles = StyleSheet.create({
	logo: {
		width: 100,
		height: 120,
	}
});
