"use strict";
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Drawer from '../../components/Drawer'
import Header from '../../components/Header';


export default class BaseDrawerLayout extends Component {

	static propTypes = {
		...View.propTypes
	};

	static defaultProps = {
		...View.defaultProps
	};

	constructor(props) {
		super(props);
		this.state = {isDrawerOpen: false};
	}

	openControlPanel() {
		this.setState({isDrawerOpen: true})
	};

	_onClose() {
		this.setState({isDrawerOpen: false})
	}

	render() {
		return (
			<Drawer
				{...this.props}
				open={this.state.isDrawerOpen}
				onClose={this._onClose.bind(this)}
			>
				<Header style={styles.header} onMenuClick={() => this.openControlPanel()}/>
				<View style={styles.content}>
					{this.props.children}
				</View>
			</Drawer>
		);
	}
}

const styles = StyleSheet.create({
	header: {
		position: 'absolute'
	}
});