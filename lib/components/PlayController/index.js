"use strict";
import React, {PropTypes, Component} from 'react';
import {View, TouchableNativeFeedback} from 'react-native';
import AnimatedProgress from '../AnimatedProgress';
import PlayButton from '../../components/PlayButton';
import Icon from '../Icon';
import Sound from 'react-native-sound';
import {primaryColor} from '../../shared/vars';

const getSongUrl = (id, from, to) => `https://zsong.ru/crop/get_song/?id=${id}&from_ms=${from}&to_ms=${to}`;

/**
 * Контроллер проигрывания песни для отрывка текста
 */
export default class PlayController extends Component {
	static propTypes = {
		onPrev: PropTypes.func.isRequired,
		onNext: PropTypes.func.isRequired,
		play: PropTypes.func.isRequired,
		stop: PropTypes.func.isRequired,
		songId: PropTypes.string.isRequired,
		playingSongId: PropTypes.string,
		from: PropTypes.number.isRequired,
		to: PropTypes.number.isRequired,
		isActive: PropTypes.bool.isRequired
	};

	constructor(props) {
		super(props);
		this.state = {
			isPlaying: false,
			isLoading: false,
			hasError: false,
		}
	}
	componentWillReceiveProps(nextProps) {
		if (this.state.isPlaying && nextProps.playingSongId !== this.props.songId) {
			this.stop();
		}
	}

	load(callback) {
		this.setState({isLoading: true});
		this.sound = new Sound(
			getSongUrl(this.props.songId, this.props.from, this.props.to),
			null,
			(error) => {
				this.setState({isLoading: false});
				callback(error)
			},
		);
	}

	componentWillUnmount() {
		if (this.sound) {
			this.sound.release();
			this.sound = null;
		}
	};

	play() {
		this.sound.play(this.onEnd.bind(this));
		this.setState({isPlaying: true});
		this.props.play(this.props.songId);
	}

	onEnd() {
		this.setState({isPlaying: false});
		if (this.sound) {
			this.sound.release();
			this.sound = null;
		}
	}

	stop() {
		this.setState({isPlaying: false});
		if (this.sound) {
			this.sound.pause();
			this.sound.release();
			this.sound = null;
		}
	}

	handlePlay() {
		if (!this.props.isActive) {
			return;
		}
		if (this.state.isPlaying) {
			this.stop();
			this.props.stop();
			this.setState({isPlaying: false});
		} else {
			if (this.sound) {
				this.play();
			} else {
				this.load((error) => {
					if (error) {
						return;
					}
					this.play();
				})
			}
		}
	}

	handleNext() {
		if (!this.props.isActive) {
			return;
		}
		if (this.state.isPlaying) {
			this.stop();
			this.props.stop();
			this.setState({isPlaying: false});
		}
		this.props.onNext();
	}

	handlePrev() {
		if (!this.props.isActive) {
			return;
		}
		if (this.state.isPlaying) {
			this.stop();
			this.props.stop();
			this.setState({isPlaying: false});
		}
		this.props.onPrev();
	}

	getPlayIcon() {
		if (this.state.isLoading) {
			return (
				<Spinner
					type="Arc"
					color={primaryColor}
					size={40}
				/>
			);
		} else {
			return (
				<TouchableIcon
					onPress={this.handlePlay.bind(this)}
					type={this.state.isPlaying ? 'pause' : 'play-arrow'}
					size={40}
					color={primaryColor}
				/>
			);
		}
	}


	render() {
		const {songId, chunkIndex, isActive} = this.props;

		return (
			<View>
				<View style={[styles.container, {
					backgroundColor: isActive ? primaryColor : null
				}]}>
					<View style={styles.playButton}>
						<TouchableNativeFeedback onPress={isActive ? this.handlePrev : null}>
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
							songId ={songId}
							chunkIndex={chunkIndex}
							color={isActive ? 'white' : '#9E9E9E'}
							onPress={this.handlePlay.bind(this)}
							isLoading={this.state.isLoading}
							isPlaying={this.state.isPlaying}
						/>
						<TouchableNativeFeedback onPress={isActive ? this.handleNext : null}>
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
				</View>
				<View style={styles.sliderContainer}>
					{isActive &&
					<AnimatedProgress
						ref={(ref) => this.progress = ref}
						color="#f44336"
						duration={this.props.to - this.props.from}
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
		width: '100%',
		position: 'absolute',
		top: -5,
		zIndex: 50
	},
	playButton: {
		height: '100%',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		zIndex: 100
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
