"use strict";
import React, {Component, PropTypes} from 'react';
import {View} from 'react-native';
import Song from '../Song';
import Swiper from 'react-native-swiper';
import {LazyloadScrollView, LazyloadView} from 'react-native-lazyload';


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
		// return (
		// 	<Song
		// 		key={index}
		// 		song={this.props.songs[index]}
		// 		hasNext={hasNext}
		// 		hasPrev={hasPrev}
		// 		toNext={hasNext ? this._toNext.bind(this) : () => {}}
		// 		toPrev={hasPrev ? this._toPrev.bind(this) : () => {}}
		// 	/>
		// )
		return (
			<LazyloadView
				key={index}
				style={{width: 50, height: '100%', backgroundColor: 'gray', margin: 10}}
				name="search-swiper"
				horizontal={true}
			>

			</LazyloadView>
		)
	}

	render() {
		return (
			<LazyloadScrollView
				style={styles.container}
				name="search-swiper"
				horizontal={true}
			>
				{this.props.songs.map((song, index) => this._getSong(index))}
			</LazyloadScrollView>
		)
	}
}

const styles = {
	container: {},
	song: {}
};
