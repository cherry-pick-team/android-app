"use strict";
import React, {Component, PropTypes} from 'react';
import {TouchableNativeFeedback, View, TouchableHighlight} from 'react-native';
import Icon from '../Icon';

/**
 * Добавляет к обычной иконке эффект капли
 * при нажатии
 */
export default class RippleIcon extends Component {
	static propTypes = {
		type: PropTypes.string.isRequired,
		color: PropTypes.string,
		rippleColor: PropTypes.string,
		size: PropTypes.number.isRequired,
		padding: PropTypes.number,
		onPress: PropTypes.func
	};

	static defaultProps = {
		color: 'black',
		padding: 5,
		rippleColor: '#4DD0E1',
		onPress: () => {}
	};

	render() {
		const containerSize = this.props.size + this.props.padding;
		return (
			<TouchableNativeFeedback
				onPress={this.props.onPress}
				background={TouchableNativeFeedback.Ripple(this.props.rippleColor, true)}>
				<View style={{
					width: containerSize,
					height: containerSize,
					borderRadius: containerSize / 2,
					alignItems: 'center',
					justifyContent: 'center'
				}}>
					<Icon
						type={this.props.type}
						size={this.props.size}
						color={this.props.color}/>
				</View>
			</TouchableNativeFeedback>
		);
	}
}
