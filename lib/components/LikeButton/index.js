"use strict";
import React, {Component, PropTypes} from 'react';
import {View} from 'react-native';
import RippleIcon from '../RippleIcon';
import {lightOrangeColor} from '../../shared/vars';


/**
 * Кнопка лайка
 */
export default class LikeButton extends Component {
	static propTypes = {
		size: PropTypes.number,
		onPress: PropTypes.func,
		songId: PropTypes.string.isRequired,
		isLiked: PropTypes.bool,
		color: PropTypes.string
	};

	static defaultProps = {
		onPress: () => {
		},
		isLiked: false,
		size: 35,
		color: '#FF00A5'
	};

	render() {
		return (<View/> )
		// return (
		// 	<RippleIcon
		// 		type={this.props.isLiked ? 'heart' : 'heart-o'}
		// 		from="FontAwesome"
		// 		size={this.props.size}
		// 		color={this.props.color}
		// 		rippleColor={this.props.color}
		// 	/>
		// );
	}
}
