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
 * Элемент списка со статистиков на главном экране
 */
export default class StatsItem extends Component {
	static propTypes = {
		type: PropTypes.oneOf(['history', 'music', 'animals']).isRequired,
		questions: PropTypes.number.isRequired,
		style: PropTypes.oneOfType([
			React.PropTypes.object,
			React.PropTypes.number,
		])
	};

	static defaultProps = {
		style: {}
	};

	render() {
		return (
			<View style={[styles.container, this.props.style]}>
				<RoundedCard style={{backgroundColor: typesToColors[this.props.type]}} radius={21}>
					<Text>  </Text>
				</RoundedCard>
				<Text> { this.props.questions + ' вопросов' } </Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center'
	}
});
