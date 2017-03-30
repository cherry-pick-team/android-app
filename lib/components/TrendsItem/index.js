"use strict";
import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Card from '../Card';
import Icon from '../Icon';
import {textColor} from '../../shared/vars';
import LikeButton from '../LikeButton';
import CoversList from '../CoversList';


/**
 * Элемент списка трендовых песен
 */
export default class TrendsItem extends Component {
	static propTypes = {
		query: PropTypes.string,
		songsCovers: PropTypes.arrayOf(PropTypes.string),
		place: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		onPress: PropTypes.string,
		style: PropTypes.object
	};

	static defaultProps = {
		style: {},
	};

	render() {
		return (
			<Card onPress={this.props.onPress} style={styles.card}>
				<CoversList songsCovers={this.props.songsCovers} />
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
	}
});