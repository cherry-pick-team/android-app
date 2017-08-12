"use strict";
import React, {PropTypes} from 'react';
import {View} from 'react-native';
import LyricsLines from '../LyricsLines';
import SongInfo from '../SongInfo';


/**
 * Экран одной песни
 */
const Song = ({song, isAuth}) => (
	<View style={styles.container}>
		<View style={styles.lyrics}>
			<LyricsLines song={song}/>
		</View>
		<View style={styles.songInfo}>
			<SongInfo song={song} isAuth={isAuth}/>
		</View>
	</View>
);

Song.propTypes = {
	song: PropTypes.object.isRequired,
	isAuth: PropTypes.bool.isRequired,
};

export default Song;

const styles = {
	container: {
		width: '100%',
		height: '100%',
		backgroundColor: 'white'
	},
	lyrics: {
		height: '100%',
		paddingBottom: 140
	},
	songInfo: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		height: '25%',
		width: '100%',
	}
};
