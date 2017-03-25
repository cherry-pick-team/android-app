"use strict";
import React, {Component, PropTypes} from 'react';
import RippleIcon from '../RippleIcon';
import {accentColor} from '../../shared/vars';


/**
 * Кнопка лайка
 */
export default class LikeButton extends Component {
    static propTypes = {
        size: PropTypes.number,
        onPress: PropTypes.func,
        isLiked: PropTypes.bool
    };

    static defaultProps = {
        onPress: () => {},
        isLiked: false,
        size: 25
    };

    render() {
        return (
            <RippleIcon
                type={this.props.isLiked ? 'heart' : 'heart-o'}
                from="FontAwesome"
                size={this.props.size}
                color={accentColor}
                rippleColor={accentColor}
            />
        );
    }
}
