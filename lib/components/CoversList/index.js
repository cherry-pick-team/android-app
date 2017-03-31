import React, {PropTypes, Component} from 'react';
import {View} from 'react-native';
import ImageURL from '../ImageURL';


export default class CoversList extends Component {
	static propTypes = {
		...View.propTypes,
		songs: PropTypes.arrayOf(PropTypes.object)
	};

	static defaultProps = {
		...View.defaultProps
	};

	render() {
		return (
			<View style={[styles.container, this.props.style]}>
				{this.props.songs.slice(0, 3).map((song, index) => (
					<ImageURL
						key={index}
						url={song.album.cover_url}
						style={styles.cover}
					/>
				))}
			</View>
		)
	}

}

const styles = {
	container: {
		height: 200,
		flexDirection: 'row',
		alignItems: 'stretch'
	},
	cover: {
		flexGrow: 1,
		height: '100%'
	}
};
