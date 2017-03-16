"use strict";
import React, {Component, PropTypes} from 'react';
import {View} from 'react-native';


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
			<View>
			</View>
		);
	}
}
