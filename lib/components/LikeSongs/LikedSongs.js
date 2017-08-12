import React, {Component, PropTypes} from 'react';
import {Text, StyleSheet} from 'react-native';
import LikedSongsList from './LikedSongsList';
import BaseDrawerLayout from '../../layouts/BaseDrawerLayout';
import Empty from './Empty';

export default class LikedSongs extends Component {
	static propTypes = {
		songs: PropTypes.array,
		deleteEntry: PropTypes.func,
		updateLikedSongs: PropTypes.func.isRequired,
		isAuth: PropTypes.bool.isRequired,
	};

	static defaultProps = {
		songs: [],
		deleteEntry: () => {
		},
	};

	componentDidMount() {
		this.props.updateLikedSongs();
	}

	getContent() {
		if (this.props.songs.length !== 0) {
			return <LikedSongsList songs={this.props.songs} deleteEntry={this.props.deleteEntry}/>;
		} else {
			return <Empty isAuth={this.props.isAuth}/>;
		}
	}

	render() {
		return (
			<BaseDrawerLayout headerChildren={<Text style={styles.titleText}> Любимые песни </Text>}>
				{this.getContent()}
			</BaseDrawerLayout >
		)
	}
}

const styles = StyleSheet.create({
	titleText: {
		fontSize: 20,
		fontWeight: '300',
		color: 'white',
		textAlign: 'center'
	},
});
