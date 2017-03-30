"use strict";
import React, {Component, PropTypes} from 'react';
import {View, Text} from 'react-native';
import Card from '../Card';
import {textColor} from '../../shared/vars';


/**
 * Компонет со строчками из песни
 */
export default class LyricsLines extends Component {
	static propTypes = {
		...View.propTypes,
		lines: PropTypes.array.isRequired
	};

	static defaultProps = {
		...View.defaultProps
	};

	render() {
		return (
			<Card style={styles.container}>
				{this.props.lines.map((line, index) => (
					<Text key={index} style={styles.line}> {line.lines} </Text>
				))}
			</Card>
		)
	}
}

const styles = {
	container: {
		height: 200,
		backgroundColor: 'white',
		marginTop: 30,
		padding: 20
	},
	line: {
		color: textColor,
		fontSize: 18,
		paddingTop: 15
	}
};
