"use strict";
import React, {PropTypes} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Wave from '../Wave';
import LikeButton from '../LikeButton/LikeButton';


/**
 * Компонент информации о песне
 */
export const SongInfo = ({song, isAuth}) => {
	return (
		<View style={{width: '100%', height: '100%'}}>
			<Wave style={styles.wave}/>
			<View style={styles.container}>
				<View style={styles.cover}>
					<Image style={styles.coverImage} source={{uri: song.album.cover_url}}/>
				</View>
				<View style={styles.title}>
					<View style={styles.artist}>
						<Text style={styles.artistText}>
							{song.info.singers[0].name}
						</Text>
					</View>
					<View style={styles.album}>
						<Text style={styles.albumText}>
							{song.info.title}
						</Text>
					</View>
				</View>
				<View style={styles.settings}>
					{ isAuth && <LikeButton isLiked={song.like} songId={song.id}/> }
				</View>
			</View>
		</View>
	);
};

SongInfo.propTypes = {
	song: PropTypes.object.isRequired,
	isAuth: PropTypes.bool.isRequired,
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 120,
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 60,
		zIndex: 101,
	},
	cover: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 5,
		marginLeft: 5
	},
	coverImage: {
		width: 80,
		height: 80,
		borderRadius: 40
	},
	title: {
		flex: 2,
		flexDirection: 'column',
		padding: 10,
		marginLeft: 15
	},
	settings: {
		flex: 1,
		padding: 10,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},
	artistText: {
		fontSize: 20,
		color: 'white'
	},
	albumText: {
		color: 'white'
	},
	wave: {
		position: 'absolute',
		top: -3
	}
});

export default SongInfo;
