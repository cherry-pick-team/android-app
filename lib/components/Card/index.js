"use strict";
import React, {Component, PropTypes} from 'react';
import { Card } from 'react-native-material-ui';

/**
 * Компонент карточки
 * является оберткой на react-native-material-ui/Card
 */
export default class CustomCard extends Component {
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
		 * Child component
		 */
		children: PropTypes.element
	};

	static defaultProps = {
		onPress: () => {},
	};

	render() {
		return (
			<Card style={this.props.style} onPress={this.props.onPress}>
				{this.props.children}
			</Card>
		);
	}
}
