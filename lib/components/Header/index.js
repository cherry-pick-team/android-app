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
		onMenuClick: () => {}
	};

	render() {
		return (
				<View {...this.props} style={[styles.header, this.props.style]}>
					<View
						style={styles.rotatedBackground}
					/>
					<View style={styles.iconBorder}>
						<Icon type="menu" size={30} color={headerPrimary} onPress={this.props.onMenuClick} />
					</View>
					<Text style={styles.title}> Soundlet </Text>
				</View>
	);
	}
}

const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: 60,
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft: 10
	},
	title: {
		paddingLeft: 20,
		color: headerPrimary,
		fontSize: 18
	},
	iconBorder: {
		borderWidth: 1,
		borderColor: headerPrimary,
		borderRadius: 3
	},
	rotatedBackground: {
		position: 'absolute',
		backgroundColor: headerSecondary,
		height: '150%',
		width: '200%',
		top: '-100%',
		left: -20,
		transform: [
			{ rotateZ: '-7deg'},
		]
	}
});
