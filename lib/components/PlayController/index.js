"use strict";
import React, {PropTypes} from 'react';
import {View} from 'react-native';
import Slider from 'react-native-slider';
import PlayButton from '../../containers/PlayButton';
import RippleIcon from '../RippleIcon';
import {textColor} from '../../shared/vars';

/**
 * Контроллер проигрывания песни для отрывка текста
 */
const PlayController = ({songId, chunkIndex, duration, isActive}) => (
	<View>
		<View style={[styles.container, {
			backgroundColor: isActive ? '#31B7D8' : 'white'
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
			<View style={styles.shareButton}>
				<RippleIcon type="share" from="Foundation" size={35} color={isActive ? 'white' : textColor}/>
			</View>
		</View>
		<View style={styles.sliderContainer}>
			<Slider
				value={0.6}
				onValueChange={() => {
				}}
				thumbStyle={styles.sliderThumb}
				minimumTrackTintColor='#FF00A5'
				maximumTrackTintColor='#FFFAFF'
				thumbTintColor='#13FFB6'
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
		justifyContent: 'center',
	},
	shareButton: {

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
		alignItems: 'center',
		marginLeft: 15
	},
	buttonPrev: {
		borderRadius: 50,
		padding: 5,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 15
	}
};

export default PlayController;
