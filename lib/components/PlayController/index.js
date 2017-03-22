"use strict";
import React, {Component, PropTypes} from 'react';
import {View, Text} from 'react-native';
import RippleIcon from '../RippleIcon';

/**
 * Контролл с кнопками поигрывания музыки
 */
export default class PlayController extends Component {
	static propTypes = {
		play: PropTypes.func.isRequired,
		next: PropTypes.func.isRequired,
		prev: PropTypes.func.isRequired
	};

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.icons}>
					<RippleIcon type="skip-previous" size={45} onPress={this.props.prev} />
					<View style={styles.playButton}>
						<RippleIcon type="play-arrow" size={75} onPress={this.props.play} />
					</View>
					<RippleIcon type="skip-next" size={45} onPress={this.props.next} />
				</View>
			</View>
		);
	}
}

const styles = {
	container: {
		width: '100%',
		height: 100,
		flexDirection: 'row',
		justifyContent: 'center',
		backgroundColor: 'white'
	},
	icons: {
		height: 100,
		flexDirection: 'row',
		alignItems: 'center'
	},
	playButton: {
		borderRadius: 75,
		borderColor: 'black',
		borderWidth: 1,
		marginLeft: 15,
		marginRight: 15
	}
};
