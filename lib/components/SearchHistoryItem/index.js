import React, {PropTypes} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ImageURL from '../ImageURL';
import {textColor} from '../../shared/vars';
import RippleIcon from '../RippleIcon';

const formatTime = (timestamp) => {
	const date = new Date(timestamp);
	let month = date.getMonth() + 1;
	month = month < 10 ? '0' + month : month;

	return `${date.getDate()}.${month}.${date.getFullYear()}`;
};

export const SearchHistoryItem = ({query, ts, preview, isFavourite}) => (
	<View style={styles.container}>
		<View style={styles.preview}>
			<ImageURL style={styles.previewImage} url={preview}/>
		</View>
		<View style={styles.description}>
			<View style={styles.query}>
				<Text style={styles.queryText}>
					{query}
				</Text>
			</View>
			<View style={styles.time}>
				<Text style={styles.timeText}>
					{formatTime(ts)}
				</Text>
			</View>
		</View>
		<View style={styles.favourite}>
			<RippleIcon
				type={isFavourite ? 'start' : 'star-o'}
				from="FontAwesome"
				size={35}
				color="#FFAF00"
				rippleColor="#FFAF00"
			/>
		</View>
	</View>
);

SearchHistoryItem.propTypes = {
	query: PropTypes.string.isRequired,
	ts: PropTypes.number.isRequired,
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
		borderRadius: 60
	},
	preview: {
		flex: 1,
		paddingLeft: 15
	},
	description: {
		flex: 3
	},
	queryText: {
		fontSize: 20,
		fontWeight: '500',
		color: textColor
	},
	favourite: {
		position: 'absolute',
		bottom: 15,
		right: 15
	}
});

export default SearchHistoryItem;
