"use strict";
import React, {Component, PropTypes} from 'react';
import {View, Text} from 'react-native';
import PlayButton from '../../containers/PlayButtonSearch';
import PlayProgress from '../../containers/ProgressLineSearch';
import SeekController from '../../containers/SeekController';


function convertToMinutes(value) {
	let minutes = Math.trunc((value) / 60);
	let seconds = Math.trunc((value) % 60);

	if (seconds < 10) {
		seconds = '0' + seconds;
	}
	return `${minutes}:${seconds}`
}

/**
 * Контролл с кнопками поигрывания музыки
 */
const PlayController = ({song, progress}) => (
	<View style={styles.container}>
		<View style={styles.progressLine}>
			<PlayProgress
				width={1}
				songId={song.mongoId}
			/>
		</View>
		<View style={styles.mainMenu}>
			<View style={styles.leftMenu}>
				<View style={styles.playButton}>
					<PlayButton
						albumImage={song.album.cover_url}
						isPlaying={song.isPlaying}
						songId={song.mongoId}
					/>
				</View>
				<View style={styles.middleMenu}>
					<View style={styles.title}>
						<Text>
							{song.info.title}
						</Text>
						<Text>
							{'by ' + song.info.singers[0].name}
						</Text>
					</View>
					<View style={styles.seekControls}>
						<SeekController
							chunks={song.chunks}
						/>
					</View>
				</View>
			</View>
			<View style={styles.rightMenu}>
				<View style={styles.progressTime}>
					<Text style={styles.progressTimeText}>
						{convertToMinutes(song.duration * progress) + ' / ' + convertToMinutes(song.duration)}
					</Text>
				</View>
				<View style={styles.settings}>
				</View>
			</View>
		</View>
	</View>
);


PlayController.propTypes = {
	song: PropTypes.object.isRequired
};

export default PlayController;

const styles = {
	container: {
		width: '100%',
		height: '100%',
		flexDirection: 'column',
		alignItems: 'center'
	},
	progressTimeText: {
		fontSize: 16
	},
	progressLine: {
		flexDirection: 'column',
		alignItems: 'center'
	},
	progressTime: {
		marginLeft: 10
	},
	playButton: {
		marginRight: 10,
		marginLeft: 10,
		height: '80%'
	},
	mainMenu: {
		width: '100%',
		flexDirection: 'row'
	},
	leftMenu: {
		alignSelf: 'flex-start',
		width: '70%',
		height: '100%',
		flexDirection: 'row'
	},
	rightMenu: {
		alignSelf: 'flex-end',
		width: '30%',
		height: '100%'
	},
	middleMenu: {
		height: '100%',
		width: '100%',
		flexDirection: 'column',
	},
	seekControls: {
		flex: 2,
		width: '100%'
	},
	title: {
		flex: 1
	}
};
