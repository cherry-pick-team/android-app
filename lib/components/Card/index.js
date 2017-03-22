"use strict";
import React, {Component, PropTypes} from 'react';
import {StyleSheet, View} from 'react-native';


/**
 * Компонент карточки
 * является оберткой на react-native-material-ui/Card
 */
export default class CustomCard extends Component {
	static propTypes = {
		...View.propTypes
	};

	static defaultProps = {
		...View.defaultProps
	};

	render() {
		return (
			<View {...this.props} style={[styles.container, this.props.style]}>
				{this.props.children}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		elevation: 5,
		backgroundColor: 'white'
	}
});