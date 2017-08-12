import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, ListView, ScrollView} from 'react-native';
import LikedSongsItem from './LikedSongsItem';

export default class SearchHistoryList extends Component {
	static propTypes = {
		songs: PropTypes.array.isRequired,
		deleteEntry: PropTypes.func.isRequired,
	};

	constructor(props) {
		super(props);

		this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	}

	render() {
		const {songs} = this.props;

		return (
			<View style={styles.container}>
				<ScrollView/>
					{songs.map((entry, secId) => (
						<LikedSongsItem
							key={secId}
							author={entry.author}
							title={entry.title}
							preview={entry.album.cover_url}
						/>
					))}
				<ScrollView/>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingBottom: 160,
	},
	rightRow: {
		position: 'absolute',
		right: 0,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#F40011',
		flex: 1,
		width: 100,
		height: '100%',
		flexDirection: 'row'
	}
});
