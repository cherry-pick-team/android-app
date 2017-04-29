"use strict";
import React, {PropTypes} from 'react';
import {TouchableNativeFeedback, View, StyleSheet} from 'react-native';
import Icon from '../Icon';

/**
 * Добавляет к обычной иконке эффект капли
 * при нажатии
 */
const RippleIcon = (props) => (
	<TouchableNativeFeedback
		onPress={props.onPress}
		background={TouchableNativeFeedback.Ripple(props.rippleColor, true)}>
		<View style={[styles.container, {
			width: props.size,
			height: props.size,
			borderRadius: props.size / 2
		}]}>
			<Icon
				type={props.type}
				size={props.size}
				color={props.color}
				from={props.from}
			/>
		</View>
	</TouchableNativeFeedback>
);

RippleIcon.propTypes = {
	type: PropTypes.string.isRequired,
	color: PropTypes.string,
	rippleColor: PropTypes.string,
	size: PropTypes.number.isRequired,
	onPress: PropTypes.func,
	from: PropTypes.string,
};

RippleIcon.defaultProps = {
	color: 'black',
	padding: 5,
	rippleColor: 'gray',
	onPress: () => {
	}
};

export default RippleIcon;

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center'
	}
});
