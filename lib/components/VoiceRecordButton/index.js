import React, {Component} from 'react';
import {View, StyleSheet, TouchableWithoutFeedback, Image, Animated, PermissionsAndroid, Platform} from 'react-native';
import BorderImage from './Borders.png';
import Icon from '../Icon';
import {AudioRecorder, AudioUtils} from 'react-native-audio';
import {primaryColor} from '../../shared/vars';

const RADIUS_MIN = 80;
const RADIUS_MAX = 120;

export default class VoiceRecordButton extends Component {
	constructor(props) {
		super(props);

		this.state = {
			radius: new Animated.Value(RADIUS_MIN),
			hasPermission: false
		}
	}

	prepareRecordingPath() {
		this.audioPath = AudioUtils.DocumentDirectoryPath + '/voice-search.aac';
		AudioRecorder.prepareRecordingAtPath(this.audioPath, {
			SampleRate: 22050,
			Channels: 1,
			AudioQuality: "Low",
			AudioEncoding: "aac",
			AudioEncodingBitRate: 32000
		});
	}

	componentDidMount() {
		this._checkPermission().then((hasPermission) => {
			this.setState({ hasPermission });

			if (!hasPermission) return;

			this.prepareRecordingPath(this.state.audioPath);

			AudioRecorder.onProgress = (data) => {
				this.setState({currentTime: Math.floor(data.currentTime)});
			};

			AudioRecorder.onFinished = this.recodeFinish.bind(this);
		});
	}

	_checkPermission() {
		if (Platform.OS !== 'android') {
			return Promise.resolve(true);
		}

		const rationale = {
			'title': 'Резрешить запись аудио',
			'message': 'ShoZaSong запрашивает доступ к микрофону.'
		};

		return PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.RECORD_AUDIO, rationale)
			.then((result) => {
			console.log('perm: ' + result);
				return (result === true || result === PermissionsAndroid.RESULTS.GRANTED);
			});
	}

	recodeFinish() {
		this.props.search('/voice-search.aac');
	}

	animateButtonExpand() {
		return new Promise((res) => {
			Animated.spring(
				this.state.radius,
				{toValue: RADIUS_MAX}
			).start(res)
		});
	}

	animateButtonCollapse() {
		return new Promise((res) => {
			Animated.spring(
				this.state.radius,
				{toValue: RADIUS_MIN}
			).start(res)
		});
	}

	async handleRelease() {
		this.animateButtonCollapse();
		console.log('stop');
		try {
			await AudioRecorder.stopRecording();
		} catch (err) {
			console.log(err);
		}
	}

	async handlePress() {
		this.animateButtonExpand();
		console.log('start');
		try {
			await AudioRecorder.startRecording();
		} catch (err) {
			console.log(err);
		}
	}

	render() {
		const sizeAnimation = this.state.radius.interpolate({
			inputRange: [RADIUS_MIN, RADIUS_MAX],
			outputRange: [2 * RADIUS_MIN, 2 * RADIUS_MAX],
		});

		return (
			<View style={styles.container}>
				<View style={styles.image}>
					<Image
						style={styles.border}
						source={BorderImage}
						resizeMode="contain"
					/>
				</View>
				<View style={styles.buttonWrapper}>
					<TouchableWithoutFeedback
						onLongPress={this.handlePress.bind(this)}
						onPressOut={this.handleRelease.bind(this)}
					>
						<Animated.View style={[
							styles.button,
							{
								width: sizeAnimation,
								height: sizeAnimation,
								borderRadius: this.state.radius
							}
						]}/>
					</TouchableWithoutFeedback>
				</View>
				<TouchableWithoutFeedback
					onLongPress={this.handlePress.bind(this)}
					onPressOut={this.handleRelease.bind(this)}
				>
					<View>
						<Icon
							type="microphone"
							from="FontAwesome"
							color="white"
						    size={60}
						/>
					</View>
				</TouchableWithoutFeedback>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		height: '100%',
		width: '100%',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},
	image: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0
	},
	icon: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},
	border: {
		height: '100%',
		width: '100%'
	},
	button: {
		backgroundColor: primaryColor,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},
	buttonWrapper: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
