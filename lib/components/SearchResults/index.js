"use strict";
import React, {PropTypes} from 'react';
import {View} from 'react-native';
import Swiper from 'react-native-swiper'
import Song from '../Song';


/**
 * Экран с результатами поиска
 */
const SearchResults = ({songs, isAuth}) => (
	<View style={styles.song}>
		<Swiper
			loadMinimal
			loadMinimalSize={1}
			style={styles.swiper}
			loop={false}
			showsPagination={false}
		>
			{songs.map((song, index) => (
				<Song song={song} key={index} isAuth={isAuth}/>
			))}
		</Swiper>
	</View>
);

SearchResults.propTypes = {
	songs: PropTypes.array.isRequired,
	isAuth: PropTypes.bool.isRequired,
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
