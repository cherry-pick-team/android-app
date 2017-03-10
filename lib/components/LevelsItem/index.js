"use strict";
import React, {Component, PropTypes} from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import {historyColor, animalsColor, musicColor} from '../../shared/vars';
import RoundedCard from '../RoundedCard';
import RoundedPath from '../RoundedPath';


const typesToColors = {
	history: historyColor,
	animals: animalsColor,
	music: musicColor
};

const RADIUS = 80;
const MARGIN = 10;

/**
 * Элемент списка с уровнями на главном экране.
 */
export default class LevelsItem extends Component {
	static propTypes = {
		levelConfig: PropTypes.object.isRequired,
		height: PropTypes.number,
		align: PropTypes.oneOf('left', 'right'),
		noPath: PropTypes.bool,
		style: PropTypes.oneOfType([
			React.PropTypes.object,
			React.PropTypes.number,
		])
	};

	static defaultProps = {
		style: {},
		height: 220,
		noPath: false
	};

	render() {
		const {width} = Dimensions.get('window');

		let alignSelf;
		let pathStart;
		let pathEnd;
		if (this.props.align === 'left') {
			alignSelf = 'flex-start';
			pathStart = {
				x: 2 * RADIUS,
				y: RADIUS
			};
			pathEnd = {
				x: width - RADIUS - 2 * MARGIN,
				y: this.props.height
			}
		} else {
			alignSelf = 'flex-end';
			pathStart = {
				x: width - 2 * RADIUS - 2 * MARGIN,
				y: RADIUS
			};
			pathEnd = {
				x: RADIUS,
				y: this.props.height
			}
		}

		let progressPath;
		if (!this.props.noPath) {
			progressPath = (<RoundedPath
				startPoint={pathStart}
				endPoint={pathEnd}
				width={width}
				height={this.props.height}
				style={styles.svg}
				progress={this.props.levelConfig.progress}
				color={this.props.levelConfig.color}/>);
		}

		return (
			<View style={[styles.container, this.props.style, {height: this.props.height}]}>
				<RoundedCard radius={RADIUS} style={{backgroundColor: this.props.levelConfig.color, alignSelf}}>
					<Text> </Text>
				</RoundedCard>
				{ progressPath }
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		marginLeft: MARGIN,
		marginRight: MARGIN
	},
	svg: {
		position: 'absolute'
	}
});
