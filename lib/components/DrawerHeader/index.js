"use strict";
import React, {Component, PropTypes} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import backgroundImage from './background.png';


/**
 * Компоненты шапки внутри бокового меня.
 * Содержит или кнопку перехода на авторизацию или инфу о юзере
 */
export default class DrawerHeader extends Component {
	static propTypes = {
		...View.propTypes,
		userInfo: PropTypes.number
	};

	static defaultProps = {
		...View.defaultProps
	};

	render() {
		return (
			<View {...this.props}>
				<View style={styles.background}>
					<Image source={backgroundImage} style={styles.backgroundImage}/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	background: {
		width: '100%',
		height: 150
	},
	backgroundImage: {
		flex: 1,
		width: '100%',
		height: '100%',
		resizeMode: 'stretch'
	}
});