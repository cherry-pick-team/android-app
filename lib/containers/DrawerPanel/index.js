"use strict";
import React, {Component} from 'react';
import {View, Text} from 'react-native';


export default class DrawerPanel extends Component {

	getMenuItems() {
		return [{
			name: 'Item 1',
			to: 'route'
		}, {
			name: 'Item 2',
			to: 'route'
		}, {
			name: 'Item 3',
			to: 'route'
		}];
	}

	render() {
		return (
			<View>
				{this.getMenuItems().map((item) => (
					<Text> {item.name} </Text>
				))}
			</View>
		);
	}
}

