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
		onPress: PropTypes.func.isRequired,
		songId: PropTypes.string.isRequired,
		chunkIndex: PropTypes.number,
		size: PropTypes.number,
		color: PropTypes.string,
		isPlaying: PropTypes.bool.isRequired,
		isLoading: PropTypes.bool.isRequired
	};

	static defaultProps = {
		isPlaying: false,
		chunkIndex: 0,
		size: 40,
		color: 'black'
	};

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

	render() {
		return (
			<TouchableNativeFeedback onPress={this.props.onPress}>
				<View style={styles.container}>
					<View style={[styles.button, {borderRadius: this.props.size}]}>
						<Icon
							from="FontAwesome"
							type={this.props.isPlaying || this.props.isLoading ? 'pause' : 'play-circle'}
							size={this.props.isPlaying || this.props.isLoading ? this.props.size / 2 : this.props.size}
							color={this.props.color}
						/>
					</View>
					<View style={styles.spinner}>
						{this.props.isLoading && !this.props.isPlaying ? this._getSpinner() : null}
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
		width: 60
	},
	spinner: {
		position: 'absolute'
	}
});