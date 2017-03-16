"use strict";
import React, {Component, PropTypes} from 'react';
import {View} from 'react-native';


/**
 * Компонент круглого бэджика,
 * используется вместе с иконкой внутри
 */
export default class Badge extends Component {
	static propTypes = {
		...View.propTypes,
		radius: PropTypes.number.isRequired
	};

	static defaultProps = {
		...View.defaultProps
	};

	getStyles() {
		return {
			width: 2*this.props.radius,
			height: 2*this.props.radius,
			borderRadius: this.props.radius,
			borderWidth: 0.5,
			borderColor: 'gray'
		}
	}

	render() {
		return (
			<View
				{...this.props}
				style={[this.props.style, this.getStyles()]}
			>
				{this.props.children}
			</View>
		);
	}
}
