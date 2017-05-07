"use strict";
import React, {Component, PropTypes} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from '../RippleIcon';
import {primaryColor, textColor} from '../../shared/vars';


export default class Header extends Component {
	static propTypes = {
		...View.propTypes,
		onMenuClick: PropTypes.func,
		iconType: PropTypes.string.isRequired,
		iconFrom: PropTypes.string,
		color: PropTypes.string,
		textColor: PropTypes.string,
		iconColor: PropTypes.string
	};

	static defaultProps = {
		...View.defaultProps,
		iconColor: 'white',
		iconType: 'menu',
		iconFrom: 'MaterialIcons',
		color: primaryColor,
		onMenuClick: () => {
		}
	};

	render() {
		return (
			<View {...this.props} style={[styles.header, this.props.style]}>
				<View
					style={[styles.background, {backgroundColor: this.props.color}]}
				/>
				<View style={styles.content}>
					<Icon
						type={this.props.iconType}
						from={this.props.iconFrom}
						size={25}
						color={this.props.iconColor || textColor}
						onPress={this.props.onMenuClick}
					/>
					<View style={styles.title}>
						{this.props.children}
					</View>
				</View>
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
	content: {
		zIndex: 100,
		elevation: 15,
		flexDirection: 'row',
		alignItems: 'center'
	},
	title: {
		marginLeft: 20
	},
	titleText: {
		paddingLeft: 20,
		color: textColor,
		fontSize: 20,
		zIndex: 100
	},
	background: {
		position: 'absolute',
		height: 60,
		width: '150%',
		top: 0,
		left: -20,
		elevation: 5,
		zIndex: -1
	}
});
