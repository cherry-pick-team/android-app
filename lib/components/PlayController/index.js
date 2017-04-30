"use strict";
import React, {PropTypes} from 'react';
import {View} from 'react-native';
import Slider from 'react-native-slider';
import PlayButton from '../../containers/PlayButton';
import RippleIcon from '../RippleIcon';
import {accentColor, textColor} from '../../shared/vars';

/**
 * Контроллер проигрывания песни для отрывка текста
 */
const PlayController = ({songId, chunkIndex, duration, isActive}) => (
	<View>
		<View style={[styles.container, {
			backgroundColor: isActive ? accentColor : 'white'
		}]}>
			<View style={styles.playButton}>
				<View style={styles.buttonPrev}>
					<RippleIcon type="previous" from="Foundation" size={30} color={isActive ? 'white' : textColor}/>
				</View>
				<PlayButton
					songId={songId}
					chunkIndex={chunkIndex}
					color={isActive ? 'white' : textColor}
				/>
				<View style={styles.buttonNext}>
					<RippleIcon type="next" from="Foundation" size={30} color={isActive ? 'white' : textColor}/>
				</View>
			</View>
		</View>
		<View style={styles.sliderContainer}>
			<Slider
				value={0.6}
				onValueChange={() => {
				}}
				thumbStyle={styles.sliderThumb}
				minimumTrackTintColor='#F4511E'
				maximumTrackTintColor='#E0E0E0'
				thumbTintColor='#BF360C'
			/>
		</View>
	</View>
);

PlayController.propTypes = {
	songId: PropTypes.string.isRequired,
	chunkIndex: PropTypes.number.isRequired,
	duration: PropTypes.number.isRequired,
	isActive: PropTypes.bool
};


const styles = {
	container: {
		height: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
	},
	sliderContainer: {
		height: '100%',
		width: '100%',
		position: 'absolute',
		top: -22,
		zIndex: 100
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
		padding: 5,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonPrev: {
		borderRadius: 50,
		padding: 5,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	}
};

export default PlayController;
