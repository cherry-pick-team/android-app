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
		return (
			<View style={styles.container}>
				<LyricsLines song={this.props.song} />
			</View>
		);
	}
}

const styles = {
	container: {

		backgroundColor: 'white'
	}
};
