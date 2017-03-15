"use strict";
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Card from '../../components/Card';
import {textColor} from '../../shared/vars';


export default class Trends extends Component {

	render() {
		return (
			<Card style={styles.container}>
				<View>
					<Text style={styles.title}>
						Тренды
					</Text>
					{/*<TrendsList />*/}
				</View>
			</Card>
		);
	}
}

const styles = {
	container: {
		marginTop: 20,
		flexDirection: 'column',
	},
	title: {
		fontSize: 25,
		color: textColor,
		alignSelf: 'flex-start',
		margin: 10
	}
};
