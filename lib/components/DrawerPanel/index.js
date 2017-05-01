"use strict";
import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet, TouchableNativeFeedback} from 'react-native';
import Icon from '../../components/Icon';
import {textColor} from '../../shared/vars';
import DrawerHeader from '../DrawerHeader';


export default class DrawerPanel extends Component {
	static propTypes = {
		changeRoute: PropTypes.func.isRequired
	};

	getMenuItems() {
		return [{
			name: 'Поиск',
			to: 'main'
		}, {
			name: 'История',
			to: 'history'
		}, {
			name: 'Настройки',
			to: 'settings'
		}];
	}

	mapRoutesToIcons() {
		return {
			main: 'search',
			history: 'history',
			settings: 'settings'
		}
	}

	createOnPressHandler(route) {
		return () => {
			this.props.changeRoute(route.to)
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<DrawerHeader />
				{this.getMenuItems().map((item) => (
					<TouchableNativeFeedback key={item.name} onPress={this.createOnPressHandler(item)}>
						<View style={styles.item}>
							<Icon
								type={this.mapRoutesToIcons()[item.to]}
								size={40} style={styles.icon}
								color={textColor}
							/>
							<Text style={styles.text}>
								{item.name}
							</Text>
						</View>
					</TouchableNativeFeedback>
				))}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {},
	badge: {
		alignSelf: 'center',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#06C91F'
	},
	text: {
		fontSize: 20,
		marginLeft: 15,
		alignSelf: 'center'
	},
	item: {
		paddingLeft: 15,
		flexDirection: 'row',
		height: 85,
		alignItems: 'center'
	},
	icon: {
		alignSelf: 'center'
	}
});
