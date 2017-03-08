"use strict";
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../../components/Header';
import PetInfo from '../PetInfo';


export default class Main extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Header />
				<PetInfo style={styles.petInfo}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column'
	},
	header: {

	},
	content: {

	},
	petInfo: {
		width: '100%',
		margin: 10
	}
});
