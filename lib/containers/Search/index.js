"use strict";
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Card from '../../components/Card';
import Button from '../../components/Button';
import {textColor} from '../../shared/vars';
import TextInput from '../../components/TextInput';


export default class Search extends Component {

	render() {
		return (
			<Card style={styles.container}>
				<View>
					<Text style={styles.title}>
						Введите фразу
					</Text>
					<TextInput style={styles.searchInput} />
					<Button
						primary
						raised
						text="Искать"
						style={styles.searchButton}
					/>
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
		alignSelf: 'center',
		marginTop: 10
	},
	searchInput: {
		alignSelf: 'center',
		width: 300,
		marginTop: 20,
		marginBottom: 10
	},
	searchButton: {
		container: {
			alignSelf: 'center',
			width: 100,
			marginTop: 20,
			marginBottom: 10
		}
	}
};
