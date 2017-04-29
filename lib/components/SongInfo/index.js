"use strict";
import React, {Component, PropTypes} from 'react';
import {View, Text} from 'react-native';
import ImageURL from '../ImageURL';


/**
 * Компонент информации о песне
 */
const SongInfo = ({song}) => {debugger; return (
	<View style={styles.container}>
		<View style={styles.cover}>
			<ImageURL style={styles.coverImage} url={song.album.cover_url}/>
		</View>
		<View style={styles.title}>
			<View style={styles.artist}>
				<Text style={styles.artistText}>
					{song.info.singers[0].name}
				</Text>
			</View>
			<View style={styles.album}>
				<Text style={styles.albumText}>
					{song.album.name}
				</Text>
			</View>
		</View>
		<View style={styles.settings}>
		</View>
	</View>
)};

SongInfo.propTypes = {
	song: PropTypes.object.isRequired
};

export default SongInfo;

const styles = {
	container: {
		width: '100%',
		height: '100%',
		flexDirection: 'row',
		justifyContent: 'center'
	},
	cover: {
		flex: 2,
		flexDirection: 'row'
	},
	coverImage: {
		width: 100,
		height: 100
	},
	title: {
		flex: 3,
		flexDirection: 'column'
	},
	settings: {
		flex: 1.5,
		backgroundColor: 'green'
	}
};
