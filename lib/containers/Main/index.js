"use strict";
import React, {Component} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Drawer from 'react-native-drawer'
import Header from '../../components/Header';
import PetInfo from '../PetInfo';
import LevelsList from '../LevelsList';


export default class Main extends Component {

	closeControlPanel = () => {
		this._drawer.close()
	};

	openControlPanel = () => {
		this._drawer.open()
	};

	render() {
		return (
			<Drawer
				ref={(ref) => this._drawer = ref}
				content={<View />}>

				<Header onMenuClick = {() => this.openControlPanel()} />
				<ScrollView style={styles.container}>
					<PetInfo style={styles.petInfo}/>
					<LevelsList />
				</ScrollView>

			</Drawer>
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
