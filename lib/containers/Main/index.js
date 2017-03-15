"use strict";
import React, {Component} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Drawer from 'react-native-drawer'
import Header from '../../components/Header';
import DrawerPanel from '../DrawerPanel';
import Search from '../Search';
import Trends from '../Trends';


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
				content={<DrawerPanel />}
				tapToClose={true}
				openDrawerOffset={0.2}>

				<Header onMenuClick = {() => this.openControlPanel()} />
				<ScrollView style={styles.container}>
					<View style={styles.search}>
						<Search />
					</View>
					<View style={styles.trends}>
						<Trends />
					</View>
				</ScrollView>

			</Drawer>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column'
	},
	search: {
		marginTop: 10
	},
	trends: {
		marginTop: 10
	}
});
