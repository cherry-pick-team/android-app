"use strict";
import React, {Component, PropTypes} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import LevelsItem from '../../components/LevelsItem';
import {historyColor, animalsColor, musicColor} from '../../shared/vars';


export default class LevelsList extends Component {
	static propTypes = {
		style: PropTypes.oneOfType([
			React.PropTypes.object,
			React.PropTypes.number,
		])
	};

	static defaultProps = {
		style: {}
	};

	render() {
		const levels = [
			{
				name: 'Уровень 1',
				color: '#86c351',
				progress: 1
			},
			{
				name: 'Уровень 2',
				color: '#2d3e47',
				progress: 0
			},
			{
				name: 'Уровень 3',
				color: '#673AB7',
				progress: 0
			},
		];
		return (
			<View style={[styles.container, this.props.style]}>
				{levels.map((config, index) => (
					<LevelsItem
						key={config.name}
						levelConfig={config}
						align={index % 2 === 0 ? 'right': 'left'}
						noPath={index === levels.length - 1}/>
				))}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
	}
});
