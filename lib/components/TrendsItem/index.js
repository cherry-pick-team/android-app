"use strict";
import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Card from '../Card';
import Icon from '../Icon';
import {textColor} from '../../shared/vars';
import LikeButton from '../LikeButton';
import ImageURL from '../ImageURL';
import PlayController from '../../containers/PlayController';


/**
 * Элемент списка трендовых песен
 */
export default class TrendsItem extends Component {
	static propTypes = {
		trend: PropTypes.object,
		onPress: PropTypes.string,
		style: PropTypes.object
	};

	static defaultProps = {
		style: {},
	};

	render() {
		return (
			<Card onPress={this.props.onPress} style={styles.card}>
				<ImageURL
					url={'https://placeholdit.imgix.net/~text?txtsize=28&txt=300%C3%97300&w=300&h=300'}
					style={styles.cover}
				/>
				<View style={styles.titleContainer}>
					<Text style={styles.songName}>
						{'Song name'}
					</Text>
				</View>
				<View style={styles.controlLine}>
					<View style={styles.icon}>
						<LikeButton />
					</View>
					<View style={styles.icon}>
						<Icon type="share-alt" from="FontAwesome" size={25} color={textColor}/>
					</View>
				</View>
			</Card>
		);
	}
}


const styles = StyleSheet.create({
	card: {
		marginTop: 20

	},
	controlLine: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end'
	},
	icon: {
		margin: 5,
		paddingLeft: 10
	},
	cover: {
		flexGrow: 1,
		height: 200
	},
	titleContainer: {
		position: 'absolute',
		height: 40,
		left: 0,
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft: 10,
		bottom: 0
	},
	songName: {
		color: textColor,
		fontSize: 18,
		marginLeft: 15
	}
});