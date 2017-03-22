"use strict";
import React, {Component, PropTypes} from 'react';
import {View, Text} from 'react-native';

/**
 * Экран одной песни
 */
export default class Song extends Component {
	static propTypes = {
		song: PropTypes.object.isRequired,
		play: PropTypes.func.isRequired,
		toNext: PropTypes.func.isRequired,
		toPrev: PropTypes.func.isRequired,
		hasNext: PropTypes.bool.isRequired,
		hasPrev: PropTypes.bool.isRequired
	};

	render() {
		return (
			<View style={styles.container}>
				<Text> Song: {this.props.song.name} </Text>
			</View>
		);
	}
}

const styles = {
	container: {
		marginTop: 20,
		flexDirection: 'column',
	}
};
