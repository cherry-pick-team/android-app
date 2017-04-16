"use strict";
import React, {Component, PropTypes} from 'react';
import {View, Text, ScrollView} from 'react-native';


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
			<ScrollView style={styles.container}>
				<View style={{height: 80, width: '100%'}}/>
				{Object.entries(this.props.song.timestamp_lyrics).map(([timestamp, line], index) => (
					<Text key={index} style={styles.line}>
						{line}
					</Text>
				))}
			</ScrollView>
		)
	}
}

const styles = {
	container: {
		height: '100%',
		backgroundColor: 'white',
		paddingLeft: 10,
		paddingRight: 10
	},
	linesGroup: {},
	line: {}
};
