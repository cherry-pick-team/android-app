"use strict";
import React, {Component, PropTypes} from 'react';
import {View, Text, ScrollView, TouchableWithoutFeedback} from 'react-native';
import Timer from 'react-timer-mixin';
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
		Timer.requestAnimationFrame(() => {
			this.setState({currentChunk: index});
		});
	}

	onNext() {
		let nextIndex = this.state.currentChunk;

		if (this.state.currentChunk < this.props.song.chunks.length - 1) {
			nextIndex += 1;
		}

		Timer.requestAnimationFrame(() => {
			this.setState({currentChunk: nextIndex});
		});
	}

	onPrev() {
		let nextIndex = this.state.currentChunk;

		if (this.state.currentChunk > 0) {
			nextIndex -= 1;
		}

		Timer.requestAnimationFrame(() => {
			this.setState({currentChunk: nextIndex});
		});
	}

	getStartBefore(start) {
		const linesStarts = Object.keys(this.props.song.lyrics);
		const currentLineIndex = linesStarts.indexOf(start.toString());

		return currentLineIndex > 0 ? linesStarts[currentLineIndex - 1] : linesStarts[currentLineIndex];
	}

	getEndAfter(end) {
		const linesStarts = Object.keys(this.props.song.lyrics);
		const nextLineIndex = linesStarts.indexOf(end.toString());

		return nextLineIndex < linesStarts.length - 1 ? linesStarts[nextLineIndex + 1] : linesStarts[nextLineIndex];
	}

	renderLine(start, end, index) {
		return (
			<View style={[styles.line, this.state.currentChunk === index ? styles.lineActive : null]} key={index}>
				{selectLines(this.props.song.lyrics, start)}
				<View style={styles.playControl}>
					<PlayController
						songId={this.props.song.mongoId}
						chunkIndex={this.state.currentChunk}
						progress={this.props.song.progress}
						from={parseInt(this.getStartBefore(start), 10)}
						to={parseInt(this.getEndAfter(end), 10)}
						isActive={this.state.currentChunk === index}
						onNext={this.onNext.bind(this)}
						onPrev={this.onPrev.bind(this)}
					/>
				</View>
			</View>
		);
	}

	renderLineTouchable(start, end, index) {
		return (
			<TouchableWithoutFeedback onPress={() => this.setCurrentChunk(index)} key={index}>
				{this.renderLine(start, end, index)}
			</TouchableWithoutFeedback>
		);
	}

	render() {
		return (
			<ScrollView style={styles.container}>
				<View style={{height: 80, width: '100%'}}/>
				{this.props.song.chunks.map(([start, end], index) => {
					return this.state.currentChunk === index ?
						this.renderLine(start, end, index) :
						this.renderLineTouchable(start, end, index);
				})}
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
