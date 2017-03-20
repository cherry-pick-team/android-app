"use strict";
import React, {Component} from 'react';
import {View} from 'react-native';
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

	openControlPanel = () => {
		this.setState({isDrawerOpen: true})
	};

	render() {
		return (
			<Drawer {...this.props} open={this.state.isDrawerOpen}>
				<View style={{marginBottom: 60}}>
					<Header onMenuClick = {() => this.openControlPanel()} />
					{this.props.children}
				</View>
			</Drawer>
		);
	}
}
