import React from 'react';
import PropTypes from 'prop-types';
import {TouchableWithoutFeedback, TouchableOpacity} from 'react-native';


/**
 * Обертка которая позволяет по нажатию перейти на другой роут
 * @constructor
 */
export const Link = ({hasFeedback, to, onPress, children}) => {
	if (hasFeedback) {
		return (
			<TouchableOpacity onPress={onPress.bind(null, to)}>
				{children}
			</TouchableOpacity>
		);
	} else {
		return (
			<TouchableWithoutFeedback onPress={onPress.bind(null, to)}>
				{children}
			</TouchableWithoutFeedback>
		);
	}
};

Link.propTypes = {
	/** Должна ли быть анимация при нажатии */
	hasFeedback: PropTypes.bool,
	/** Роут на который нужно перейти */
	to: PropTypes.string.isRequired,
	/** Обрабатывает нажатие (определяется в *.connected.js) */
	onPress: PropTypes.func.isRequired,
};

Link.defaultProps = {
	hasFeedback: false,
	type: 'push'
};

export default Link;
