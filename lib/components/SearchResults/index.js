"use strict";
import React, {Component, PropTypes} from 'react';
import {View} from 'react-native';
import Song from '../Song';
import Swiper from 'react-native-swiper';


/**
 * Экран с результатами поиска
 */
export default class SearchResults extends Component {
	static propTypes = {
		songs: PropTypes.array.isRequired
	};

	constructor(props) {
		super(props);
		this.state = {
			currentIndex: 0,
			currentSong: 0
		}
	}

	_toNext() {
		this._swiper.scrollBy(1);
	}

	_toPrev() {
		this._swiper.scrollBy(-1);
	}

	_getSong(index) {
		const hasNext = index < this.props.songs.length - 1;
		const hasPrev = index > 0;
		return (
			<Song
				key={index}
				song={this.props.songs[index]}
				hasNext={hasNext}
				hasPrev={hasPrev}
				toNext={hasNext ? this._toNext.bind(this) : () => {}}
				toPrev={hasPrev ? this._toPrev.bind(this) : () => {}}
			/>
		)
	}

	render() {

		if (this.props.songs.length === 1) {
			return (
				<View style={styles.container}>
					{this._getCurrentSong()}
				</View>
			)
		} else {
			return (
				<Swiper
					style={styles.container}
					showsPagination={false}
					loop={false}
					index={0}
					ref={(swiper) => { this._swiper = swiper; }}
				>
					{this.props.songs.map((song, index) => this._getSong(index))}
				</Swiper>
			)
		}
	}
}

const styles = {
	container: {

	},
	song: {

	}
};
