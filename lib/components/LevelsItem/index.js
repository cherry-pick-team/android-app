"use strict";
import React, {Component, PropTypes} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {historyColor, animalsColor, musicColor} from '../../shared/vars';
import RoundedCard from '../RoundedCard';


const typesToColors = {
	history: historyColor,
	animals: animalsColor,
	music: musicColor
};

/**
 * Элемент списка с уровнями на главном экране.
 */
export default class LevelsItem extends Component {
	static propTypes = {
		levelConfig: PropTypes.object.isRequired,
		align: PropTypes.oneOf('left', 'right'),
		style: PropTypes.oneOfType([
			React.PropTypes.object,
			React.PropTypes.number,
		])
	};

	static defaultProps = {
		style: {}
	};

	render() {
		let alignSelf;
		if (this.props.align === 'left') {
			alignSelf = 'flex-start';
		} else {
			alignSelf = 'flex-end'
		}
		return (
			<View style={[styles.container, this.props.style]}>
				<RoundedCard radius={80} style={{backgroundColor: this.props.levelConfig.color, alignSelf}}>
					<Text> </Text>
				</RoundedCard>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		margin: 10
	}
});
