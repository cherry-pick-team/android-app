"use strict";
import React, {Component, PropTypes} from 'react';
import {View} from 'react-native';
import Song from '../Song';
import Swiper from '../Swiper';


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
	}

	_toPrev() {
	}

	onSwipeEnd() {

	}

	getSong(index) {
		if (index < 0 || index > this.props.songs.length - 1) {
			return;
		}

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
		return (
			<Swiper
				getElement={this.getSong.bind(this)}
				length={this.props.songs.length}
				scrollEnd={this.onSwipeEnd.bind(this)}
			    threshold={0.6}
			/>
		)
	}
}

const styles = {
	container: {},
	song: {}
};
