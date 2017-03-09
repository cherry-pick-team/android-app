"use strict";
import React, {Component} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Header from '../../components/Header';
import PetInfo from '../PetInfo';
import LevelsList from '../LevelsList';


export default class Main extends Component {
	render() {
		return (
			<ScrollView style={styles.container}>
				<Header />
				<PetInfo style={styles.petInfo}/>
				<LevelsList />
			</ScrollView>
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
