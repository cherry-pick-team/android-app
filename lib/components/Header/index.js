"use strict";
import React, {Component, PropTypes} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from '../RippleIcon';
import {headerPrimary, headerSecondary} from '../../shared/vars';


export default class Header extends Component {
	static propTypes = {
		...View.propTypes,
		onMenuClick: PropTypes.func,
		iconType: PropTypes.string.isRequired,
		iconFrom: PropTypes.string,
		title: PropTypes.string
	};

	static defaultProps = {
		...View.defaultProps,
		iconType: 'menu',
		iconFrom: 'MaterialIcons',
		title: '',
		onMenuClick: () => {
		}
	};

	render() {
		return (
			<View {...this.props} style={[styles.header, this.props.style]}>
				<View
					style={styles.background}
				/>
				<View style={styles.content}>
					<Icon
						type={this.props.iconType}
						from={this.props.iconFrom}
						size={30}
						color={headerSecondary}
						onPress={this.props.onMenuClick}
					/>
					<View style={styles.title}>
						<Text>
							{this.props.title}
						</Text>
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
		color: headerSecondary,
		fontSize: 18,
		zIndex: 100
	},
	background: {
		position: 'absolute',
		backgroundColor: headerPrimary,
		height: 60,
		width: '150%',
		top: 0,
		opacity: 0.7,
		left: -20,
		elevation: 5,
		zIndex: -1
	}
});
