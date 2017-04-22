"use strict";
import React, {PureComponent, PropTypes} from 'react';
import {View} from 'react-native';
import Swiper from 'react-native-swiper'


/**
 * Экран с результатами поиска
 */
export default class SearchResults extends PureComponent {
	static propTypes = {
		songs: PropTypes.array.isRequired
	};

	render() {
		return (
			<View style={styles.song}>
				<Swiper
					loadMinimal
					loadMinimalSize={1}
					style={styles.swiper}
					loop={false}
				>
					{this.props.songs.map((song) => (
						<Song song={song}/>
					))}
				</Swiper>
			</View>
		)
	}
}

const styles = {
	container: {},
	song: {
		width: '100%',
		height: '100%'
	},
	swiper: {}
};
