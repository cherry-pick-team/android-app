"use strict";
import React, {Component, PropTypes} from 'react';
import {View, Text} from 'react-native';
import LyricsLines from '../LyricsLines';


/**
 * Экран одной песни
 */
const Song = ({song}) => (
	<View style={styles.container}>
		<View style={styles.lyrics}>
			<LyricsLines song={this.props.song}/>
		</View>
	</View>
);

Song.propTypes = {
	songId: PropTypes.string.isRequired,
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
