"use strict";
import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet, TouchableNativeFeedback} from 'react-native';
import Badge from '../../components/Badge';
import Icon from '../../components/Icon';
import {primalColor} from '../../shared/vars';
import SocialAuth from '../../components/SocialAuth';


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
			name: 'Популярные',
			to: 'trends'
		}, {
			name: 'Настройки',
			to: 'settings'
		}];
	}

	mapRoutesToIcons() {
		return {
			main: 'search',
			history: 'history',
			trends: 'whatshot',
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
				{this.getMenuItems().map((item) => (
					<TouchableNativeFeedback key={item.name} onPress={this.createOnPressHandler(item)}>
						<View style={styles.item}>
							<Badge radius={25} style={styles.badge}>
								<Icon
									type={this.mapRoutesToIcons()[item.to]}
									size={25} style={styles.icon}
									color="white"
								/>
							</Badge>
							<Text style={styles.text}>
								{item.name}
							</Text>
						</View>
					</TouchableNativeFeedback>
				))}
				<SocialAuth />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 20
	},
	badge: {
		alignSelf: 'center',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: primalColor
	},
	text: {
		fontSize: 20,
		marginLeft: 15,
		alignSelf: 'center'
	},
	item: {
		paddingLeft: 15,
		flexDirection: 'row',
		height: 65
	},
	icon: {
		alignSelf: 'center'
	}
});