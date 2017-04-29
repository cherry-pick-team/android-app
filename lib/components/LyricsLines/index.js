"use strict";
import React, {Component, PropTypes} from 'react';
import {View, Text, ScrollView} from 'react-native';
import PlayController from '../PlayController';


const selectLines = (lyrics, start) => {
	const linesStarts = Object.keys(lyrics);

	const currentLineIndex = linesStarts.indexOf(start.toString());

	return linesStarts.filter((ts, index) => {
		return index <= currentLineIndex + 1 && index >= currentLineIndex - 1;
	}).map((line, index) => (
		<Text key={index} style={styles.lineText}>
			{lyrics[line]}
		</Text>
	));
};

/**
 * Компонет со строчками из песни
 */
const LyricsLines = ({song}) => (
	<ScrollView style={styles.container}>
		<View style={{height: 80, width: '100%'}}/>
		{song.chunks.map(([start, end], index) => (
			<View style={styles.line} key={index}>
				{selectLines(song.lyrics, start)}
				<View style={styles.playControl}>
					<PlayController
						songId={song.mongoId}
						duration={end - start}
						chunkId={index}
					/>
				</View>
			</View>
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
		flexDirection: 'column'
	},
	lineText: {
		fontSize: 18,
		paddingBottom: 5
	},
	playControl: {
		height: 40,
		width: '100%'
	}
};

export default LyricsLines;
