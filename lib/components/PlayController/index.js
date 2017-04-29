"use strict";
import React, {Component, PropTypes} from 'react';
import {View} from 'react-native';
import Slider from 'react-native-slider';
import PlayButton from '../../containers/PlayButton';
import RippleIcon from '../RippleIcon';


/**
 * Контроллер проигрывания песни для отрывка текста
 */
const PlayController = ({songId, chunkIndex, duration}) => (
	<View style={styles.container}>
		<View style={styles.playButton}>
			<View style={styles.buttonPrev}>
				<RippleIcon type={'step-backward'} from="FontAwesome" size={30}/>
			</View>
			<PlayButton
				songId={songId}
				chunkIndex={chunkIndex}
			/>
			<View style={styles.buttonNext}>
				<RippleIcon type={'step-forward'} from="FontAwesome" size={30}/>
			</View>
		</View>

		<View style={styles.sliderContainer}>
			<Slider
				value={0.6}
				onValueChange={() => {
				}}
				thumbStyle={styles.sliderThumb}
				minimumTrackTintColor='#1fb28a'
				maximumTrackTintColor='#d3d3d3'
				thumbTintColor='#1a9274'
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
		flexDirection: 'row',
		justifyContent: 'center'
	},
	sliderContainer: {
		height: '100%',
		flex: 1
	},
	playButton: {
		height: '100%',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center'
	},
	sliderThumb: {
		width: 15,
		height: 15,
		/** Костыль из https://github.com/jeanregisser/react-native-slider/issues/63 */
		top: 22
	},
	buttonNext: {
		borderRadius: 50,
		padding: 5
	},
	buttonPrev: {
		borderRadius: 50,
		padding: 5
	}
};

export default PlayController;
