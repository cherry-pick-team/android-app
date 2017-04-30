"use strict";
import React, {PureComponent, PropTypes} from 'react';
import {View} from 'react-native';
import Swiper from 'react-native-swiper'
import Song from '../Song';


/**
 * Экран с результатами поиска
 */
const SearchResults = ({songs}) => (
	<View style={styles.song}>
		<Swiper
			loadMinimal
			loadMinimalSize={1}
			style={styles.swiper}
			loop={false}
			showsPagination={false}
		>
			{songs.map((song, index) => (
				<Song song={song} key={index}/>
			))}
		</Swiper>
	</View>
);

SearchResults.propTypes = {
	songs: PropTypes.array.isRequired
};

export default SearchResults;

const styles = {
	container: {},
	song: {
		width: '100%',
		height: '100%'
	},
	swiper: {}
};
