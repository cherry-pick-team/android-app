"use strict";
import React, {Component, PropTypes} from 'react';
import {View, Text} from 'react-native';
import {headerSecondary} from "../../shared/vars";


/**
 * Компоненты шапки внутри бокового меню.
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
			<View style={drawerHeaderStyle.container}>
				<Text style={drawerHeaderStyle.loginText}>Войти через </Text>
			</View>
		);
	}
}

const height = 60;
const backgroundColor = '#666';
const deg = 7;

const drawerHeaderStyle = {
	container: {},
	loginText: {
		fontSize: 20,
		color: '#000',
		marginLeft: 4,
		marginTop: 15,
	}
};
