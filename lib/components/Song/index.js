"use strict";
import React, {Component, PropTypes} from 'react';
import {View, Text} from 'react-native';
import LyricsLines from '../LyricsLines';
import Card from '../Card';
import PlayController from '../../containers/PlayController';
import ImageURL from '../ImageURL';


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
		debugger;
		return (
			<View style={styles.container}>
				<Card style={styles.card}>

					<ImageURL
						style={styles.cover}
						url={this.props.song.album.cover_url}
					/>

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
	},
	cover: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0
	}
};