"use strict";
import React, {Component, PropTypes} from 'react';
import {View, Text} from 'react-native';
import PlayButton from '../PlayButton';
import PlayProgress from '../../containers/PlayProgress';


/**
 * Контролл с кнопками поигрывания музыки
 */
export default class PlayController extends Component {
	static propTypes = {
		song: PropTypes.object.isRequired,
		progress: PropTypes.number.isRequired,
		isPlaying: PropTypes.bool.isRequired
	};

	static defaultProps = {};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.progressLine}>
					<PlayProgress width={1}/>
				</View>
				<View style={styles.mainMenu}>
					<View style={styles.leftMenu}>
						<View style={styles.playButton}>
							<PlayButton
								albumImage={this.props.song.song.album.cover_url}
							    isPlaying={this.props.isPlaying}
							/>
						</View>
						<View style={styles.title}>
						</View>
					</View>
					<View style={styles.rightMenu}>
						<View style={styles.progressTime}>
							<Text style={styles.progressTimeText}>
								{'3:15/4:25'}
							</Text>
						</View>
						<View style={styles.settings}>
						</View>
					</View>
				</View>
			</View>
		)
	}
}

const styles = {
	container: {
		width: '100%',
		height: '100%',
		flexDirection: 'column',
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
	},
	mainMenu: {
		width: '100%',
		flexDirection: 'row'
	},
	leftMenu: {
		alignSelf: 'flex-start',
		width: '70%'
	},
	rightMenu: {
		alignSelf: 'flex-end',
		width: '30%'
	}
};
