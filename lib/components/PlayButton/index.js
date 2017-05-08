"use strict";
import React, {Component, PropTypes} from 'react';
import {TouchableNativeFeedback, View, StyleSheet} from 'react-native';
import Icon from '../Icon';
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
		chunkIndex: PropTypes.number,
		size: PropTypes.number,
		color: PropTypes.string,
		isPlaying: PropTypes.bool.isRequired
	};

	static defaultProps = {
		isPlaying: false,
		chunkIndex: 0,
		size: 40,
		color: 'black'
	};

	constructor(props) {
		super(props);

		this.state = {
			isLoading: false
		}
	}

	componentWillReceiveProps(nextProps) {
		if (!this.props.isPlaying && nextProps.isPlaying) {
			this.setState({isLoading: false});
		}
	}

	_getSpinner() {
		return (
			<MKSpinner
				strokeColor="white"
				style={{
					width: this.props.size,
					height: this.props.size
				}}
			/>
		);
	}

	_onPress() {
		if (this.props.isPlaying || this.state.isLoading ) {
			this.setState({isLoading: false}, () => {
				this.props.pause(this.props.songId);
			});
		} else {
			this.setState({isLoading: true}, () => {
				this.props.play(this.props.songId, this.props.chunkIndex);
			});
		}
	}

	render() {
		return (
			<TouchableNativeFeedback onPress={this._onPress.bind(this)}>
				<View style={styles.container}>
					<View style={[styles.button, {borderRadius: this.props.size}]}>
						<Icon
							from="FontAwesome"
							type={this.props.isPlaying || this.state.isLoading ? 'pause' : 'play-circle'}
							size={this.props.isPlaying || this.state.isLoading ? this.props.size / 2  : this.props.size}
							color={this.props.color}
						/>
					</View>
					<View style={styles.spinner}>
						{this.state.isLoading && !this.props.isPlaying ? this._getSpinner() : null}
					</View>
				</View>
			</TouchableNativeFeedback>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		width: 40
	},
	spinner: {
		position: 'absolute'
	}
});