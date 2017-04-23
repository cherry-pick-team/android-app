"use strict";
import React, {Component, PropTypes} from 'react';
import {View, Text} from 'react-native';
import LyricsLines from '../LyricsLines';
import PlayController from '../PlayController';


/**
 * Экран одной песни
 */
export default class Song extends Component {
	static propTypes = {
		songId: PropTypes.string.isRequired,
		song: PropTypes.object.isRequired
	};

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.lyrics}>
					<LyricsLines song={this.props.song}/>
				</View>
				<View style={styles.control}>
					<PlayController song={this.props.song}/>
				</View>
			</View>
		);
	}
}

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
