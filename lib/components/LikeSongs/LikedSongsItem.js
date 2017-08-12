import React, {PropTypes} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {textColor} from '../../shared/vars';

export const LikedSongsItem = ({author, title, preview}) => (
	<View style={styles.container}>
		<View style={styles.preview}>
			<Image style={styles.previewImage} source={{uri: preview}}/>
		</View>
		<View style={styles.description}>
			<Text style={styles.text}>
				{author}
			</Text>
			<Text style={styles.text}>
				{title}
			</Text>
		</View>
	</View>
);

LikedSongsItem.propTypes = {
	author: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	preview: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
	container: {
		height: 100,
		width: '100%',
		backgroundColor: 'white',
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: '#e0e0e0',
		borderRightWidth: 1,
		borderRightColor: '#e0e0e0'
	},
	previewImage: {
		width: 60,
		height: 60,
		borderRadius: 30
	},
	preview: {
		flex: 1,
		paddingLeft: 15
	},
	description: {
		flex: 3,
		flexDirection: 'column',
		justifyContent: 'space-around',
	},
	text: {
		fontSize: 20,
		color: textColor,
	}
});

export default LikedSongsItem;
