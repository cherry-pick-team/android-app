"use strict";
import React, {Component, PropTypes} from 'react';
import {View, Text} from 'react-native';
import Card from '../Card';
import PlayController from '../PlayController';


/**
 * Экран одной песни
 */
export default class Song extends Component {
	static propTypes = {
		song: PropTypes.object.isRequired,
		play: PropTypes.func.isRequired,
		stop: PropTypes.func.isRequired,
		toNext: PropTypes.func.isRequired,
		toPrev: PropTypes.func.isRequired,
		hasNext: PropTypes.bool.isRequired,
		hasPrev: PropTypes.bool.isRequired
	};

	render() {
		return (
			<View style={styles.container}>
				<Card style={styles.card}>
					<Text> Song {this.props.song.song.title} </Text>
					<View style={styles.playController}>
						<PlayController
							play={(chunkHandler) => {this.props.play(this.props.song.song.uuid, chunkHandler)}}
							next={this.props.toNext}
							prev={this.props.toPrev}
							stop={this.props.stop}
						/>
					</View>
				</Card>
			</View>
		);
	}
}

const styles = {
	container: {
		margin: 10,
		flexDirection: 'column',
	},
	card: {
		width: '100%',
		height: 250,
		backgroundColor: '#FF7043',
		flexDirection: 'column',
		justifyContent: 'flex-end'
	},
	playController: {
		marginTop: 10
	}
};
