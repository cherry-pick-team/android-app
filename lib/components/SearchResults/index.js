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
		next: PropTypes.func.isRequired,
		play: PropTypes.func.isRequired
	};

	constructor(props) {
		super(props);
		this.state = {
			currentIndex: 0
		}
	}

	_toNext() {
		this._swiper.scrollBy(1)
	}

	_toPrev() {
		this._swiper.scrollBy(-1)
	}

	_getCurrentSong() {
		const hasNext = this.props.nextSong !== null;
		const hasPrev = this.props.prevSong !== null;
		return (
			<Song
				song={this.props.currentSong}
				hasNext={hasNext}
				hasPrev={hasPrev}
				toNext={hasNext ? this._toNext.bind(this) : () => {}}
				toPrev={hasPrev ? this._toPrev.bind(this) : () => {}}
				play={this.props.play}
			/>
		)
	}

	_getPrevSong() {
		if (!this.props.prevSong) {
			return;
		}
		const hasPrev = this.props.prevSong ? this.props.prevSong.prevSong !== null : false;
		return (
			<Song
				song={this.props.prevSong}
				hasNext={true}
				hasPrev={hasPrev}
				toNext={this._toNext.bind(this)}
				toPrev={hasPrev ? this._toPrev.bind(this) : () => {}}
				play={this.props.play}
			/>
		)
	}

	_getNextSong() {
		if (!this.props.nextSong) {
			return;
		}
		const hasNext = this.props.nextSong ? this.props.nextSong.nextSong !== null : false;
		return (
			<Song
				song={this.props.nextSong}
				hasNext={hasNext}
				hasPrev={true}
				toNext={hasNext ? this._toNext.bind(this) : () => {}}
				toPrev={this._toPrev.bind(this)}
				play={this.props.play}
			/>
		)
	}

	_onMomentumScrollEnd(e, state) {
		this.setState({currentIndex: state.index});

		if (state.index > this.state.currentIndex) {
			this.props.next()
		} else {
			this.props.prev()
		}
	}

	render() {
		if (!this.props.nextSong && !this.props.prevSong) {
			return (
				<View style={styles.container}>
					{this._getCurrentSong()}
				</View>
			)
		}

		if (this.props.nextSong && !this.props.prevSong) {
			return (
				<Swiper
					style={styles.container}
					showsPagination={false}
					loop={false}
					onMomentumScrollEnd={this._onMomentumScrollEnd.bind(this)}
					ref={(swiper) => { this._swiper = swiper; }}
				>
					{this._getCurrentSong()}
					{this._getNextSong()}
				</Swiper>
			)
		}

		if (!this.props.nextSong && this.props.prevSong) {
			return (
				<Swiper
					style={styles.container}
					showsPagination={false}
					loop={false}
					index={1}
					onMomentumScrollEnd ={this._onMomentumScrollEnd.bind(this)}
					ref={(swiper) => { this._swiper = swiper; }}
				>
					{this._getPrevSong()}
					{this._getCurrentSong()}
				</Swiper>
			)
		}

		if (this.props.nextSong && this.props.prevSong) {
			return (
				<Swiper
					style={styles.container}
					showsPagination={false}
					loop={false}
					index={1}
					onMomentumScrollEnd ={this._onMomentumScrollEnd.bind(this)}
					ref={(swiper) => { this._swiper = swiper; }}
				>
					{this._getPrevSong()}
					{this._getCurrentSong()}
					{this._getNextSong()}
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
