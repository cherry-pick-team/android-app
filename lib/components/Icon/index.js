"use strict";
import React, {Component, PropTypes} from 'react';
import BaseIcon from 'react-native-vector-icons/MaterialIcons';

/**
 * Компоненты иконки, умеет рисовать
 * иконки из пакета react-native-vector-icons
 */
export default class Icon extends Component {
	static propTypes = {
		type: PropTypes.string.isRequired,
		color: PropTypes.string,
		size: PropTypes.number.isRequired
	};

	static defaultProps = {
		color: 'black'
	};

	render() {
		return (
			<BaseIcon name={this.props.type} size={this.props.size} color={this.props.color} />
		);
	}
}
