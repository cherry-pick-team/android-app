"use strict";
import React, {Component, PropTypes} from 'react';
import {TouchableWithoutFeedback, View, StyleSheet} from 'react-native';
import RippleIcon from '../RippleIcon';
import {MKSpinner} from 'react-native-material-kit';

/**
 * Кнопка поигрывания песни с картинкой альбома на фоне
 */
export default class PlayButton extends Component {
	static propTypes = {
		play: PropTypes.func.isRequired,
		pause: PropTypes.func.isRequired,
		playingChunk: PropTypes.bool,
		songId: PropTypes.string.isRequired,
		chunkIndex: PropTypes.number
	};

	static defaultProps = {
		isPlaying: false,
		chunkIndex: 0
	};

	constructor(props) {
		super(props);

		this.state = {
			isLoading: false
		}
	}

	componentWillReceiveProps(nextProps) {
		// todo
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
		//todo
	}

	render() {
		return (
			<TouchableWithoutFeedback onPress={this._onPress.bind(this)}>
				<View style={styles.container}>
					<View style={styles.button}>
						<RippleIcon type={this.props.isPlaying ? 'pause' : 'play-arrow'} size={45}/>
					</View>
					<View>
						{this.state.isLoading && !this.props.isPlaying ? this._getSpinner() : null}
					</View>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		borderWidth: 0.5,
		borderRadius: 50
	}
});