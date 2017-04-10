"use strict";
import React, {Component, PropTypes} from 'react';
import {View} from 'react-native';


/**
 * Свайпер с поддержкой lazyload
 */
export default class Swiper extends Component {
	static propTypes = {
		/** В этой функци нужно вернуть массив [prev, current, next] или [prev current] или [current] */
		getElements: PropTypes.func.isRequired,
		scrollEnd: PropTypes.func,
		index: PropTypes.number
	};

	static defaultProps = {
		index: 0,
		scrollEnd: () => {}
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View>
				{[1,2,3,4].map(() => (
					<View style={{width: 200, height: '100%', backgroundColor: 'gray'}}> </View>
				))}
			</View>
		)
	}
}

const styles = {
	container: {},
	song: {}
};
