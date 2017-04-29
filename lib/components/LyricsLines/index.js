"use strict";
import React, {Component, PropTypes} from 'react';
import {View, Text, ScrollView} from 'react-native';


const getLineStyle = (start) => {
	const isSelected = this.props.song.chunks.filter(([chunkStart, chunkEnd]) => {
			return start >= chunkStart && start < chunkEnd;
		}).length !== 0;

	if (isSelected) {
		return {
			color: 'red'
		}
	}

	return null;
};

/**
 * Компонет со строчками из песни
 */
const LyricsLines = ({song}) => (
	<ScrollView style={styles.container}>
		<View style={{height: 80, width: '100%'}}/>
		{Object.entries(song.lyrics).map(([timestamp, line], index) => (
			<Text key={index} style={[styles.line, getLineStyle(timestamp)]}>
				{line}
			</Text>
		))}
	</ScrollView>
);

LyricsLines.propTypes = {
	song: PropTypes.object.isRequired
};


const styles = {
	container: {
		height: '100%',
		backgroundColor: 'white',
		paddingLeft: 10,
		paddingRight: 10
	},
	line: {
		fontSize: 18,
		paddingBottom: 20
	}
};

export default LyricsLines;
