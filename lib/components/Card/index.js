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
		 * You can override any style for this card
		 */
		style: PropTypes.object,

		/**
		 * Child component
		 */
		children: PropTypes.element
	};

	render() {
		return (
			<Card style={this.props.style}>
				{this.props.children}
			</Card>
		);
	}
}
