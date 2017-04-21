"use strict";
import React, {Component, PropTypes} from 'react';
import {Alert, TouchableWithoutFeedback, View, StyleSheet, DeviceEventEmitter, NativeModules} from 'react-native';
import Icon from '../Icon';
import ImageURL from '../ImageURL';
import {MKSpinner} from 'react-native-material-kit';

/**
 * Кнопка поигрывания песни с картинкой альбома на фоне
 */
export default class PlayButton extends Component {
	static propTypes = {
		songId: PropTypes.number.isRequired,
		albumImage: PropTypes.string.isRequired,
		play: PropTypes.func.isRequired,
		pause: PropTypes.func.isRequired,
		isPlaying: PropTypes.bool,
		mongoId: PropTypes.string.isRequired,
		duration: PropTypes.number
	};

	static defaultProps = {
		isPlaying: false,
		duration: 20
	};

	constructor(props) {
		super(props);

		this.state = {
			isLoading: false
		}
	}

	_getButton() {
		return (
			<Icon type={this.props.isPlaying ? 'pause' : 'play-arrow'} size={40}/>
		);
	}

	componentWillReceiveProps(nextProps) {
		if (!this.props.isPlaying && nextProps.isPlaying) {
			this.setState({isLoading: false});
		}
	}

	_getSpinner() {
		return (
			<MKSpinner
				strokeColor="green"
				style={{
					width: 40,
					height: 40
				}}
			/>
		);
	}

	_onPress() {
		if (this.props.isPlaying) {
			this.props.pause(this.props.mongoId);
		} else {
			this.props.play(this.props.mongoId, this.props.duration);
			this.setState({isLoading: true});
		}
	}

	render() {
		return (
			<TouchableWithoutFeedback onPress={this._onPress.bind(this)}>
				<View style={styles.container}>
					<ImageURL
						url={this.props.albumImage}
						style={styles.image}
					/>
					<View style={styles.button}>
						{this.state.isLoading && !this.props.isPlaying ? this._getSpinner() : this._getButton()}
					</View>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		height: '60%',
		width: 70
	},
	image: {
		width: '100%',
		height: '100%'
	},
	button: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	}
});