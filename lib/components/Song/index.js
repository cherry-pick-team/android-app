"use strict";
import React, {Component, PropTypes} from 'react';
import {View, Text} from 'react-native';
import LyricsLines from '../LyricsLines';
import SongInfo from '../SongInfo';


/**
 * Экран одной песни
 */
const Song = ({song}) => (
	<View style={styles.container}>
		<View style={styles.lyrics}>
			<LyricsLines song={song}/>
		</View>
		<View>
			<SongInfo song={song}/>
		</View>
	</View>
);

Song.propTypes = {
	song: PropTypes.object.isRequired
};

export default Song;

const styles = {
	container: {
		width: '100%',
		height: '100%',
		backgroundColor: 'white'
	},
	control: {
		height: '30%'
	},
	lyrics: {
		height: '70%'

	}
};
