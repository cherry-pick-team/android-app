"use strict";
import React, {Component, PropTypes} from 'react';
import {Image} from 'react-native';

/**
 * Добавляет к обычной иконке эффект капли
 * при нажатии
 */
export default class ImageURL extends Component {
	static propTypes = {
		...Image.propTypes,
		url: PropTypes.string.isRequired
	};

	static defaultProps = {
		...Image.defaultProps
	};

	render() {
		return (
			<Image
				{...this.props}
				source={{uri: this.props.url}}
			/>
		);
	}
}
