"use strict";
import React, {Component, PropTypes} from 'react';
import {View} from 'react-native';
import Drawer from 'react-native-drawer'
import DrawerPanel from '../../containers/DrawerPanel';


/**
 * Компонент Drawer менюшки
 */
export default class Main extends Component {

	static propTypes = {
		...Drawer.propTypes,
		open: PropTypes.bool
	};

	static defaultProps = {
		...Drawer.defaultProps,
		open: false
	};


	render() {
		const content = <View>
			<View style={drawerStyle.rotatedBackground}/>
			<DrawerPanel />
		</View>;

		return (
			<Drawer
				{...this.props}
				content={content}
				tapToClose={true}
				openDrawerOffset={0.1}
				styles={drawerStyle}
				type="overlay"
				negotiatePan={true}
				drawerShadow="NO"
			>
				{this.props.children}
			</Drawer>
		);
	}
}

const drawerStyle = {
	drawer: {
		shadowOpacity: 0,
		backgroundColor: 'rgba(0, 0, 0, 0)'
	},
	rotatedBackground: {
		position: 'absolute',
		height: '1000%',
		width: '99%',
		top: '-500%',
		backgroundColor: '#f5f5f5',
		transform: [
			{rotateZ: '7deg'},
		]
	}
};
