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
		song: PropTypes.object.isRequired
	};

	static defaultProps = {
		...View.defaultProps
	};

	render() {
		return (
			<View style={styles.container}>
				{this.props.song.pieces.map((piece) => (
					<View style={styles.linesGroup}>
						{piece.lines.map((line) => (
							<Text style={styles.line}>
								{line}
							</Text>
						))}
					</View>
				))}
			</View>
		)
	}
}

const styles = {
	container: {
		height: '60%',
		backgroundColor: 'white',
		marginTop: 30,
		padding: 20
	},
	linesGroup: {},
	line: {}
};
