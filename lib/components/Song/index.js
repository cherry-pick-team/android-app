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
		song: PropTypes.object.isRequired
	};

	render() {
		return (
			<View style={styles.container}>
				<LyricsLines song={this.props.song}/>
			</View>
		);
	}
}

const styles = {
	container: {
		width: '100%',
		height: '100%',
		backgroundColor: 'white'
	}
};
