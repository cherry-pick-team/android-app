"use strict";
import React, {PropTypes} from 'react';
import {View, Text, Image} from 'react-native';
import ImageURL from '../ImageURL';
import waveImage from './wave.png';
import LikeButton from '../LikeButton';
import RippleIcon from '../RippleIcon';


/**
 * Компонент информации о песне
 */
const SongInfo = ({song}) => (
	<View>
		<View>
			<Image source={waveImage} style={styles.wave}/>
		</View>
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
				<View style={styles.options}>
					<RippleIcon from="FontAwesome" type="info-circle" size={30} color="#1E1B18"/>
				</View>
				<View style={styles.like}>
					<LikeButton songId={song.mongoId}/>
				</View>
			</View>
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
		marginTop: 15,
		zIndex: 101
	},
	cover: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 5
	},
	coverImage: {
		width: 80,
		height: 80
	},
	title: {
		flex: 2,
		flexDirection: 'column',
		padding: 10,
		marginLeft: 25
	},
	settings: {
		flex: 1,
		padding: 10,
		flexDirection: 'column',
		alignItems: 'center'
	},
	artistText: {
		fontSize: 20,
		color: '#1E1B18'
	},
	albumText: {
		color: '#1E1B18'
	},
	wave: {
		position: 'absolute',
		top: -120,
		zIndex: 100
	},
	options: {
		marginBottom: 15
	}
};
