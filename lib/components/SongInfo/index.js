"use strict";
import React, {PropTypes} from 'react';
import {View, Text} from 'react-native';
import ImageURL from '../ImageURL';
import {primaryColor} from '../../shared/vars';


/**
 * Компонент информации о песне
 */
const SongInfo = ({song}) => (
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
);

SongInfo.propTypes = {
	song: PropTypes.object.isRequired
};

export default SongInfo;

const styles = {
	container: {
		width: '100%',
		height: 100,
		flexDirection: 'row',
		justifyContent: 'center',
		backgroundColor: primaryColor,
		marginTop: 15
	},
	cover: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	coverImage: {
		width: 100,
		height: 100
	},
	title: {
		flex: 2,
		flexDirection: 'column',
		padding: 10,
	},
	settings: {
		flex: 1,
		padding: 10,
	},
	artistText: {
		fontSize: 20
	}
};
