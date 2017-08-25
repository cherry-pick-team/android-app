"use strict";
import React, {Component, PropTypes} from 'react';
import {View, Text, ScrollView, TouchableWithoutFeedback} from 'react-native';
import Timer from 'react-timer-mixin';
import PlayController from '../PlayController/PlayController.conected';
import {textColor} from '../../shared/vars';


/**
 * Компонет со строчками из песни
 */
export default class LyricsLines extends Component {
	static propTypes = {
		song: PropTypes.object.isRequired,
		playingSongId: PropTypes.string,
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


	renderLine(index) {
		const chunk = this.props.song.chunks[index];

		return (
			<View style={[styles.line, this.state.currentChunk === index ? styles.lineActive : null]} key={index}>
				{chunk.lyrics.map((line, lineIndex) => (
					<Text key={lineIndex} style={styles.lineText}>
						{line}
					</Text>
				))}
				<View style={styles.playControl}>
					<PlayController
						songId={this.props.song.mongoId}
						chunkIndex={this.state.currentChunk}
						progress={this.props.song.progress}
						from={chunk.start}
						to={chunk.end}
						isActive={this.state.currentChunk === index}
						onNext={this.onNext.bind(this)}
						onPrev={this.onPrev.bind(this)}
					/>
				</View>
			</View>
		);
	}

	renderLineTouchable(index) {
		return (
			<TouchableWithoutFeedback onPress={() => this.setCurrentChunk(index)} key={index}>
				{this.renderLine(index)}
			</TouchableWithoutFeedback>
		);
	}

	render() {
		return (
			<ScrollView style={styles.container}>
				<View style={{height: 80, width: '100%'}}/>
				{this.props.song.chunks.map((chunk, index) => {
					return this.state.currentChunk === index ?
						this.renderLine(index) :
						this.renderLineTouchable(index);
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
