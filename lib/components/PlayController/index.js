"use strict";
import React, {PropTypes, Component} from 'react';
import {View, TouchableNativeFeedback} from 'react-native';
import AnimatedProgress from '../AnimatedProgress';
import PlayButton from '../../components/PlayButton';
import Icon from '../Icon';
import {primaryColor} from '../../shared/vars';

import {play, pause, askStatus, subscribe} from '../../services/streaming';

/**
 * Контроллер проигрывания песни для отрывка текста
 */
export default class PlayController extends Component {
	static propTypes = {
		songId: PropTypes.string.isRequired,
		chunkIndex: PropTypes.number.isRequired,
		from: PropTypes.number.isRequired,
		to: PropTypes.number.isRequired,
		isActive: PropTypes.bool,
		onNext: PropTypes.func.isRequired,
		onPrev: PropTypes.func.isRequired
	};

	constructor(props) {
		super(props);

		this.state = {
			isPlaying: false,
			isLoading: false
		}
	}

	componentDidMount() {
		this.unsubscribe = subscribe(this.handleEvent.bind(this));
	}

	componentWillUnmount() {
		this.unsubscribe();
		this.stopStatusCheck();
	}

	handleEvent(event) {
		if (!this.props.isActive) {
			return;
		}

		if (event.type === 'music_start') {
			if (this.progress) {
				this.progress.startAnimation();
			}
			requestAnimationFrame(() => {
				this.setState({
					isPlaying: true,
					isLoading: false
				});
			});
		}

		if ((event.type === 'music_status' && !event.isPlaying) || event.type === 'music_pause') {
			if (this.progress) {
				this.progress.stopAnimation();
			}
			requestAnimationFrame(() => {
				this.setState({
					isPlaying: false,
					isLoading: false
				});
			});
		}

		if (event.type === 'music_status' && event.isPlaying) {
			//todo
		}
	}

	startStatusCheck() {
		this.statusInterval = setInterval(askStatus, 500);
	}

	stopStatusCheck() {
		clearInterval(this.statusInterval);
		this.statusInterval = null;
	}

	onPress() {
		if (!this.props.isActive) {
			return;
		}

		if (this.state.isPlaying || this.state.isLoading) {
			pause();
			this.stopStatusCheck();
			requestAnimationFrame(() => {
				this.setState({
					isPlaying: false,
					isLoading: false
				});
			});
		} else {
			play({
				id: this.props.songId,
				from: this.props.from,
				to: this.props.to
			});
			requestAnimationFrame(() => {
				this.setState({
					isPlaying: false,
					isLoading: true
				});
			});
			this.startStatusCheck();
		}
	}

	render() {
		const {songId, chunkIndex, isActive, onNext, onPrev} = this.props;

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
							onPress={this.onPress.bind(this)}
							isLoading={this.state.isLoading}
							isPlaying={this.state.isPlaying}
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
