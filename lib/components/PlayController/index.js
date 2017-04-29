"use strict";
import React, {Component, PropTypes} from 'react';
import {View} from 'react-native';
import Slider from 'react-native-slider';
import PlayButton from '../../containers/PlayButton';


/**
 * Контроллер проигрывания песни для отрывка текста
 */
const PlayController = ({songId, chunkIndex, duration}) => (
	<View style={styles.container}>
		<View style={styles.playButton}>
			<PlayButton
				mongoId={songId}
				chunkIndex={chunkIndex}
			/>
		</View>

		<View style={styles.sliderContainer}>
			<Slider
				value={0.6}
				onValueChange={() => {}}
			/>
		</View>
	</View>
);

PlayController.propTypes = {
	songId: PropTypes.string.isRequired,
	chunkIndex: PropTypes.number.isRequired,
	duration: PropTypes.number.isRequired
};


const styles = {
	container: {
		height: '100%',
		backgroundColor: 'white',
		flexDirection: 'row',
		alignItems: 'center'
	},
	sliderContainer: {

	},
	playButton: {

	}
};

export default PlayController;
