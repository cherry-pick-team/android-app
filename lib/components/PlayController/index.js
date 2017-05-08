"use strict";
import React, {PropTypes, Component} from 'react';
import {View, TouchableNativeFeedback} from 'react-native';
import Slider from 'react-native-slider';
import PlayButton from '../../containers/PlayButton';
import Icon from '../Icon';
import {primaryColor} from '../../shared/vars';

/**
 * Контроллер проигрывания песни для отрывка текста
 */
export default class PlayController extends Component {
	static propTypes = {
		songId: PropTypes.string.isRequired,
		chunkIndex: PropTypes.number.isRequired,
		duration: PropTypes.number.isRequired,
		isActive: PropTypes.bool,
		onNext: PropTypes.func.isRequired,
		onPrev: PropTypes.func.isRequired
	};

	shouldComponentUpdate(nextProps) {
		return nextProps.isActive !== this.props.isActive;
	}

	render() {
		console.log('render');
		const {songId, chunkIndex, duration, isActive, onNext, onPrev, setActive} = this.props;
		return (
			<View>
				<View style={[styles.container, {
					backgroundColor: isActive ? primaryColor : null
				}]}>
					<View style={styles.playButton}>
						<TouchableNativeFeedback onPress={isActive ? onPrev : null}>
							<View style={[styles.buttonPrev, {backgroundColor: isActive ? primaryColor : null}]}>
								<Icon
									type="previous"
									from="Foundation"
									size={30}
									color={isActive ? 'white' : '#9E9E9E'}
								/>
							</View>
						</TouchableNativeFeedback>
						<PlayButton
							songId={songId}
							chunkIndex={chunkIndex}
							color={isActive ? 'white' : '#9E9E9E'}
						/>
						<TouchableNativeFeedback onPress={isActive ? onNext : null}>
							<View style={[styles.buttonNext, {backgroundColor: isActive ? primaryColor : null}]}>
								<Icon
									type="next"
									from="Foundation"
									size={30}
									color={isActive ? 'white' : '#9E9E9E'}
								/>
							</View>
						</TouchableNativeFeedback>
					</View>
					{isActive &&
					<View style={styles.shareButton}>
						<Icon type="share" from="FontAwesome" size={27} color={'white'}/>
					</View>
					}
				</View>
				<View style={styles.sliderContainer}>
					{isActive &&
					<Slider
						value={0.6}
						onValueChange={() => {
							// todo
						}}
						thumbStyle={styles.sliderThumb}
						minimumTrackTintColor="#f44336"
						maximumTrackTintColor="#FFFAFF"
						thumbTintColor="#f44336"
					/>
					}
				</View>
			</View>
		)
	}
}

const styles = {
	container: {
		height: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
		borderRadius: 2
	},
	sliderContainer: {
		height: '100%',
		width: '100%',
		position: 'absolute',
		top: -20,
		zIndex: 100
	},
	playButton: {
		height: '100%',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center'
	},
	shareButton: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		paddingRight: 20,
		position: 'absolute',
		right: 0,
		height: '100%'
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
		width: 70,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonPrev: {
		borderRadius: 50,
		width: 70,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	}
};
