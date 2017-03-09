"use strict";
import React, {Component} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Header from '../../components/Header';
import PetInfo from '../PetInfo';
import LevelsList from '../LevelsList';


export default class Main extends Component {
	render() {
		return (
			<View>
				<Header />
				<ScrollView style={styles.container}>
					<PetInfo style={styles.petInfo}/>
					<LevelsList />
				</ScrollView>
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
