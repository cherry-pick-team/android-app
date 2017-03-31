"use strict";
import React, {Component, PropTypes} from 'react';
import {View, Text} from 'react-native';
import RippleIcon from '../RippleIcon';
import Spinner from '../Spinner';


/**
 * Контролл с кнопками поигрывания музыки
 */
export default class PlayController extends Component {
	static propTypes = {
		songId: PropTypes.string.isRequired,
		play: PropTypes.func.isRequired,
		next: PropTypes.func,
		prev: PropTypes.func,
		stop: PropTypes.func.isRequired,
		hasPrev: PropTypes.bool,
		hasNext: PropTypes.bool,
		isSmall: PropTypes.bool
	};

	static defaultProps = {
		hasPrev: true,
		hasNext: true,
		isSmall: false,
		next: () => {},
		prev: () => {}
	};

	constructor(props) {
		super(props);
		this.state = {
			showLoader: false,
			isPlaying: false
		};
	}

	_handlePlay() {
		this.setState({
			showLoader: !this.state.isPlaying,
			isPlaying: !this.state.isPlaying
		});

		if (this.state.isPlaying) {
			this.props.stop()
		} else {
			this.props.play(this.props.songId, this._handleChunk.bind(this))
		}
	}

	_handleChunk() {
		this.setState({
			showLoader: false
		});
	}

	render() {
		if (this.props.isSmall) {
			return (
				<View style={styles.containerSmall}>
					<RippleIcon
						type={this.state.isPlaying ? 'pause' : 'play-arrow'}
						size={35}
						onPress={this._handlePlay.bind(this)}
					/>
				</View>
			)
		} else {
			return (
				<View style={styles.container}>
					{this.state.showLoader ? (<Spinner style={styles.spinner}/>) : null}
					<View style={styles.icons}>
						<RippleIcon
							type="skip-previous"
							size={45}
							onPress={this.props.prev}
							color={this.props.hasPrev ? 'black' : 'grey'}
							rippleColor={this.props.hasPrev ? null : 'grey'}
						/>
						<View style={styles.playButton}>
							<RippleIcon
								type={this.state.isPlaying ? 'pause' : 'play-arrow'}
								size={75}
								onPress={this._handlePlay.bind(this)}
							/>
						</View>
						<RippleIcon
							type="skip-next"
							size={45}
							onPress={this.props.next}
							color={this.props.hasNext ? 'black' : 'grey'}
							rippleColor={this.props.hasNext ? null : 'grey'}
						/>
					</View>
				</View>
			)
		}
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
	containerSmall: {
		flexDirection: 'row',
		justifyContent: 'center',
		backgroundColor: 'white',
		borderRadius: 35
	},
	icons: {
		height: 100,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'center'
	},
	playButton: {
		borderRadius: 75,
		marginLeft: 15,
		marginRight: 15
	},
	spinner: {
		position: 'absolute',
		width: 80,
		height: 80,
		justifyContent: 'center',
		alignSelf: 'center'
	}
};
