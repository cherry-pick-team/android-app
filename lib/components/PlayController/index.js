"use strict";
import React, {Component, PropTypes} from 'react';
import {View, Text} from 'react-native';
import RippleIcon from '../RippleIcon';
import ProgressLine from '../ProgressLine';


/**
 * Контролл с кнопками поигрывания музыки
 */
export default class PlayController extends Component {
	static propTypes = {};

	static defaultProps = {};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.playButton}>
					<RippleIcon type="play-arrow" size={35}/>
				</View>

				<ProgressLine
					width={0.5}
					progress={0.4}
				/>
				<View style={styles.progressTime}>
					<Text style={styles.progressTimeText}>
						{'3:15/4:25'}
					</Text>
				</View>
			</View>
		)
	}
}

const styles = {
	container: {
		width: '100%',
		height: 60,
		flexDirection: 'row',
		alignItems: 'center'
	},
	progressTimeText: {
		fontSize: 16
	},
	progressTime: {
		marginLeft: 10
	},
	playButton: {
		marginRight: 15
	}
};
