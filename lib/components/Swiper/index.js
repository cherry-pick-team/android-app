"use strict";
import React, {Component, PropTypes} from 'react';
import {View, Animated, PanResponder, Dimensions, Text} from 'react-native';


/**
 * Свайпер с поддержкой lazyload
 */
export default class Swiper extends Component {
	static propTypes = {
		/** В этой функци нужно вернуть элемент по его индексу */
		getElement: PropTypes.func.isRequired,
		length: PropTypes.number,
		scrollEnd: PropTypes.func,
		threshold: PropTypes.number,
	};

	static defaultProps = {
		scrollEnd: () => {
		},
		threshold: 0.5,
		length: 10
	};

	constructor(props) {
		super(props);

		this.state = {
			pan: new Animated.ValueXY(),
			index: 0
		};

		this.panMover = Animated.event([{
			dx: this.state.pan.x,
		}]);

		this.panResponder = PanResponder.create({
			onStartShouldSetPanResponder: () => true,
			onPanResponderMove: this._onMove.bind(this),
			onPanResponderGrant: this._onGrant.bind(this),
			onPanResponderRelease: this._onRelease.bind(this)
		});
	}

	_onGrant() {
		this.state.pan.setOffset({
			x: -1 * this.state.index * this._getWidth(),
			y: 0,
		});
		this.state.pan.setValue({x: 0, y: 0});
	}

	_onMove(event, gesture) {
		if (gesture.dx < 0 && this.state.index === this.props.length - 1) {
			// Последняя вьюшка вправо больше не свайпаем
			return;
		}

		if (gesture.dx > 0 && this.state.index === 0) {
			// Первая вьюшка влево больше не свайпаем
			return;
		}

		return this.panMover(gesture);
	}

	_onRelease(event, gesture) {
		if (gesture.dx < 0 && this.state.index === this.props.length - 1) {
			// Последняя вьюшка вправо больше не свайпаем
			return;
		}

		if (gesture.dx > 0 && this.state.index === 0) {
			// Первая вьюшка влево больше не свайпаем
			return;
		}

		const width = this._getWidth();
		let index = this.state.index;

		if (Math.abs(gesture.dx) > width * this.props.threshold) {
			index = gesture.dx / Math.abs(gesture.dx) > 0 ? index - 1 : index + 1;
			this.animateTo(index);
			this.setState({index});
			this.props.scrollEnd(index);
		} else {
			this.animateTo(index)
		}
	}

	animateTo(index) {
		if (index > this.props.length - 1 || index < 0) {
			return;
		}

		const width = this._getWidth();

		Animated.spring(
			this.state.pan,
			{
				toValue: {
					x: -1 * (index - this.state.index) * width,
					y: 0
				}
			}
		).start();
	}

	_getWidth() {
		return Dimensions.get('window').width;
	}

	_getElementByIndex(index) {
		if (index < 0 || index >= this.props.length - 1) {
			return;
		}

		let color = index % 2 === 0 ? 'red': 'green';

		return (
			<View style={{width: '100%', height: '100%', backgroundColor: color}}>
				<Text> {index} </Text>
			</View>
		)
	}

	_getLeftMargin() {
		if (this.state.index > 0) {
			return (this.state.index - 1) * this._getWidth();
		}
		return 0;
	}

	render() {
		return (
			<Animated.View
				{...this.panResponder.panHandlers}
				style={[this.state.pan.getLayout(), styles.container]}
			>
				<View style={{
					marginLeft: this._getLeftMargin()
				}} />

				{this.props.getElement(this.state.index - 1)}
				{this.props.getElement(this.state.index)}
				{this.props.getElement(this.state.index + 1)}

			</Animated.View>
		)
	}
}

const styles = {
	container: {
		flexDirection: 'row'
	},
	song: {}
};
