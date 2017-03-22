"use strict";
import React, {Component, PropTypes} from 'react';
import {View, Text} from 'react-native';
import Song from '../Song';
import Swiper from 'react-native-swiper';


/**
 * Экран с результатами поиска
 */
export default class SearchResults extends Component {
	static propTypes = {
		currentSong: PropTypes.object.isRequired,
		prevSong: PropTypes.oneOfType([PropTypes.object, PropTypes.null]),
		nextSong: PropTypes.oneOfType([PropTypes.object, PropTypes.null]),
		prev: PropTypes.func.isRequired,
		next: PropTypes.func.isRequired
	};

	_getCurrentSong() {
		const hasNext = this.props.nextSong !== null;
		const hasPrev = this.props.prevSong !== null;
		return (
			<Song
				song={this.props.currentSong}
				hasNext={hasNext}
				hasPrev={hasPrev}
				toNext={hasNext ? this.props.next : () => {}}
				toPrev={hasPrev ? this.props.prev : () => {}}
			/>
		)
	}

	_getPrevSong() {
		const hasPrev = this.props.prevSong ? this.props.prevSong.prevSong !== null : false;
		return (
			<Song
				song={this.props.currentSong}
				hasNext={true}
				hasPrev={hasPrev}
				toNext={this.props.next}
				toPrev={hasPrev ? this.props.prev : () => {}}
			/>
		)
	}

	_getNextSong() {
		const hasNext = this.props.nextSong ? this.props.nextSong.nextSong !== null : false;
		return (
			<Song
				song={this.props.currentSong}
				hasNext={hasNext}
				hasPrev={true}
				toNext={hasNext ? this.props.next : () => {}}
				toPrev={this.props.prev}
			/>
		)
	}


	render() {
		return (
			<Swiper style={styles.container}>
				<View style={styles.song}>
					{this._getPrevSong()}
				</View>
				<View style={styles.song}>
					{this._getCurrentSong()}
				</View>
				<View style={styles.song}>
					{this._getNextSong()}
				</View>
			</Swiper>
		);
	}
}

const styles = {
	container: {

	},
	song: {

	}
};
