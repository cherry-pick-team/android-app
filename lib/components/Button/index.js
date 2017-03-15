"use strict";
import React, {Component, PropTypes} from 'react';
import { Button } from 'react-native-material-ui';

/**
 * Компонент кнопки
 * является оберткой на react-native-material-ui/Button
 */
export default class CustomButton extends Component {
	static propTypes = {
		/**
		 * Called when card is pressed
		 */
		onPress: PropTypes.func,

		/**
		 * You can override any style for this card
		 */
		style: PropTypes.object,

		/**
		 * Text inside button
		 */
		text: PropTypes.string,

		/**
		 * Button types
		 */
		raised: PropTypes.bool,
		primary: PropTypes.bool,
		accent: PropTypes.bool,
		disabled: PropTypes.bool
	};

	static defaultProps = {
		onPress: () => {},
		raised: false,
		primary: false,
		accent: false,
		disabled: false
	};

	render() {
		return (
			<Button
				raised={this.props.raised}
				primary={this.props.primary}
				accent={this.props.accent}
				disabled={this.props.disabled}
				text={this.props.text}
				style={this.props.style}
				onPress={this.props.onPress}
			/>
		);
	}
}
