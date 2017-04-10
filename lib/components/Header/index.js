"use strict";
import React, {Component, PropTypes} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from '../RippleIcon';
import {headerPrimary, headerSecondary} from '../../shared/vars';


export default class Header extends Component {
	static propTypes = {
		...View.propTypes,
		onMenuClick: PropTypes.func
	};

	static defaultProps = {
		...View.defaultProps,
		onMenuClick: () => {
		}
	};

	render() {
		return (
			<View {...this.props} style={[styles.header, this.props.style]}>
				<View
					style={styles.rotatedBackground}
				/>
				<View style={styles.content}>
					<Icon type="menu" size={30} color={headerSecondary} onPress={this.props.onMenuClick}/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: 90,
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft: 10
	},
	content: {
		zIndex: 100,
		elevation: 15
	},
	title: {
		paddingLeft: 20,
		color: headerSecondary,
		fontSize: 18,
		zIndex: 100
	},
	rotatedBackground: {
		position: 'absolute',
		backgroundColor: headerPrimary,
		height: '150%',
		width: '200%',
		top: '-100%',
		opacity: 0.7,
		left: -20,
		elevation: 10,
		transform: [
			{rotateZ: '-7deg'},
		],
		zIndex: -1
	}
});
