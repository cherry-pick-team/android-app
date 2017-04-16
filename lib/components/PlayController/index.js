"use strict";
import React, {Component, PropTypes} from 'react';
import {View, Text} from 'react-native';
import PlayButton from '../../containers/PlayButton';
import PlayProgress from '../../containers/ProgressLineSearch';


/**
 * Контролл с кнопками поигрывания музыки
 */
export default class PlayController extends Component {
	static propTypes = {
		song: PropTypes.object.isRequired
	};

	static defaultProps = {};

	_convertToMinutes() {
		let minutes = Math.trunc((this.props.song.song.duration * this.props.song.song.progress) / 60);
		let seconds = Math.trunc((this.props.song.song.duration * this.props.song.song.progress) % 60);

		if (seconds < 10) {
			seconds = '0' + seconds;
		}
		return `${minutes}:${seconds}`
	}

	render() {
		debugger;
		return (
			<View style={styles.container}>
				<View style={styles.progressLine}>
					<PlayProgress
						width={1}
						songId={this.props.song.song.id}
					    progress={this.props.song.song.progress}
					/>
				</View>
				<View style={styles.mainMenu}>
					<View style={styles.leftMenu}>
						<View style={styles.playButton}>
							<PlayButton
								albumImage={this.props.song.album.cover_url}
								isPlaying={this.props.song.song.isPlaying}
								songId={this.props.song.song.id}
							/>
						</View>
						<View style={styles.title}>
							<Text>
								{this.props.song.song.title}
							</Text>
							<Text>
								{'by ' + this.props.song.song.singers[0].name}
							</Text>
						</View>
					</View>
					<View style={styles.rightMenu}>
						<View style={styles.progressTime}>
							<Text style={styles.progressTimeText}>
								{this._convertToMinutes()}
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
	progressLine: {
		flexDirection: 'column',
		alignItems: 'center'
	},
	progressTime: {
		marginLeft: 10
	},
	playButton: {
		marginRight: 10,
		marginLeft: 10,
		height: '80%'
	},
	mainMenu: {
		width: '100%',
		flexDirection: 'row'
	},
	leftMenu: {
		alignSelf: 'flex-start',
		width: '70%',
		height: '100%',
		flexDirection: 'row'
	},
	rightMenu: {
		alignSelf: 'flex-end',
		width: '30%',
		height: '100%'
	}
};
