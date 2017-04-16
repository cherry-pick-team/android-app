"use strict";
import React, {Component, PropTypes} from 'react';
import {TouchableNativeFeedback, View, StyleSheet} from 'react-native';
import Icon from '../Icon';
import ImageURL from '../ImageURL';

/**
 * Кнопка поигрывания песни с картинкой альбома на фоне
 */
export default class PlayButton extends Component {
	static propTypes = {
		albumImage: PropTypes.string.isRequired,
		onPress: PropTypes.func.isRequired
	};

	static defaultProps = {};

	render() {
		return (
			<TouchableNativeFeedback
				onPress={this.props.onPress}
				background={TouchableNativeFeedback.Ripple('gray', true)}
			>
				<View style={styles.container}>
					<View style={styles.image}>
						<ImageURL url={this.props.albumImage}/>
					</View>
					<View style={styles.button}>
						<Icon type="play-arrow" size={35}/>
					</View>
				</View>
			</TouchableNativeFeedback>
		);
	}
}

const styles = StyleSheet.create({
	container: {

	},
	image: {

	},
	button: {

	}
});