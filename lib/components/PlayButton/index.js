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
		songId: PropTypes.string.isRequired,
		albumImage: PropTypes.string.isRequired,
		onPress: PropTypes.func.isRequired
	};

	static defaultProps = {};

	render() {
		return (
			<View style={styles.container}>
				<View>
					<ImageURL
						url={this.props.albumImage}
						style={styles.image}
					/>
				</View>
				<View style={styles.button}>
					<Icon type="play-arrow" size={40}/>
				</View>
			</View>
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