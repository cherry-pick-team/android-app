"use strict";
import React, {Component, PropTypes} from 'react';
import {View, StyleSheet} from 'react-native';


/**
 * Карточка в виде круга
 */
export default class RoundedCard extends Component {
	static propTypes = {
		radius: PropTypes.number.isRequired,
		children: PropTypes.element,
		style: PropTypes.oneOfType([
			React.PropTypes.object,
			React.PropTypes.number,
		])
	};

	static defaultProps = {
		style: {}
	};

	render() {
		return (
			<View style={[styles.container, {
				borderRadius: this.props.radius,
				width: 2 * this.props.radius,
				height: 2 * this.props.radius
			}, this.props.style]}>
				{this.props.children}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		elevation: 5
	}
});
