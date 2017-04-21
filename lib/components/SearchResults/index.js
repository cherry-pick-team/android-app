"use strict";
import React, {Component, PropTypes} from 'react';
import {View} from 'react-native';
import Song from '../Song';
import Swiper from '../Swiper';
import PlayController from '../PlayController';


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
			currentSong: 0
		}
	}

	onSwipeEnd(index) {
		this.setState({currentSong: index});
	}

	getSong(index) {
		if (index < 0 || index > this.props.songs.length - 1) {
			return;
		}

		return (
			<Song
				key={index}
				song={this.props.songs[index]}
			/>
		)
	}

	render() {
		return (
				<View style={styles.song}>
					<Swiper
						getElement={this.getSong.bind(this)}
						length={this.props.songs.length}
						scrollEnd={this.onSwipeEnd.bind(this)}
						threshold={0.6}
					/>
				</View>
		)
	}
}

const styles = {
	container: {},
	song: {
		width: '100%',
		height: '100%'
	}
};
