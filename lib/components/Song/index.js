"use strict";
import React, {Component, PropTypes} from 'react';
import {View, Text} from 'react-native';
import LyricsLines from '../LyricsLines';
import Card from '../Card';
import PlayController from '../../containers/PlayController';


/**
 * Экран одной песни
 */
export default class Song extends Component {
	static propTypes = {
		song: PropTypes.object.isRequired,
		toNext: PropTypes.func.isRequired,
		toPrev: PropTypes.func.isRequired,
		hasNext: PropTypes.bool.isRequired,
		hasPrev: PropTypes.bool.isRequired
	};

	render() {
		return (
			<View style={styles.container}>
				<Card style={styles.card}>
					<View style={styles.songName}>
						<Text style={styles.songNameText}>
							{this.props.song.song.title} by {this.props.song.song.singers[0].name}
						</Text>
					</View>

					<View style={styles.playController}>
						<PlayController
							next={this.props.toNext}
							prev={this.props.toPrev}
							songId={this.props.song.song.id}
							hasNext={this.props.hasNext}
							hasPrev={this.props.hasPrev}
						/>
					</View>
				</Card>

				<LyricsLines lines={this.props.song.pieces}/>
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
		height: 300,
		backgroundColor: '#FF7043',
		flexDirection: 'column',
		justifyContent: 'flex-end'
	},
	songName: {
		height: 50,
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'black',
		opacity: 0.5,
		paddingLeft: 10
	},
	songNameText: {
		color: 'white',
		fontSize: 18
	}
};
