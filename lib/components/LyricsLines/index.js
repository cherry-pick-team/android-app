"use strict";
import React, {Component, PropTypes} from 'react';
import {View, Text, ScrollView, TouchableNativeFeedback} from 'react-native';
import PlayController from '../PlayController';
import {textColor} from '../../shared/vars';


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
export default class LyricsLines extends Component {
	static propTypes = {
		song: PropTypes.object.isRequired
	};

	constructor(props) {
		super(props);

		this.state = {
			currentChunk: 0,
		};
	}

	setCurrentChunk(index) {
		this.setState({currentChunk: index});
	}

	render() {
		return (
			<ScrollView style={styles.container}>
				<View style={{height: 80, width: '100%'}}/>
				{this.props.song.chunks.map(([start, end], index) => (
					<TouchableNativeFeedback onPress={() => this.setCurrentChunk(index)} key={index}>
						<View style={[styles.line, this.state.currentChunk === index ? styles.lineActive : null]}>
							{selectLines(this.props.song.lyrics, start)}
							<View style={styles.playControl}>
								<PlayController
									songId={this.props.song.mongoId}
									duration={end - start}
									chunkIndex={this.state.currentChunk}
									isActive={this.state.currentChunk === index}
								/>
							</View>
						</View>
					</TouchableNativeFeedback>
				))}
			</ScrollView>
		)
	}
}


const styles = {
	container: {
		height: '100%',
		backgroundColor: '#FFFAFF'
	},
	line: {
		flexDirection: 'column',
		marginBottom: 60,
		marginLeft: 10,
		marginRight: 10,
		backgroundColor: 'white',
		paddingTop: 10,
		borderRadius: 2
	},
	lineActive: {
		elevation: 10,
	},
	lineText: {
		fontSize: 18,
		paddingBottom: 5,
		paddingLeft: 10,
		paddingRight: 10,
		color: textColor
	},
	playControl: {
		height: 60,
		width: '100%',
		marginTop: 10
	}
};
