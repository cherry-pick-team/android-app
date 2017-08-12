"use strict";
import React, {Component, PropTypes} from 'react';
import {View, StyleSheet} from 'react-native';
import Drawer from '../../components/Drawer'
import Header from '../../components/Header';


export default class BaseDrawerLayout extends Component {

	static propTypes = {
		...View.propTypes,
		headerChildren: PropTypes.element,
		hasShadow: PropTypes.bool,
	};

	static defaultProps = {
		...View.defaultProps,
		hasShadow: true,
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
				<Header
					style={styles.header}
					onMenuClick={() => this.openControlPanel()}
					hasShadow={this.props.hasShadow}
				>
					{this.props.headerChildren}
				</Header>
				<View style={styles.content}>
					{this.props.children}
				</View>
			</Drawer>
		);
	}
}

const styles = StyleSheet.create({
	header: {
	},
	content: {
		marginBottom: 50
	}
});