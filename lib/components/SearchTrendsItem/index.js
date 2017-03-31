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
export default class SearchTrendsItem extends Component {
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
				<CoversList songs={this.props.trend.songs} />

				<View style={styles.titleContainer}>
					<Icon type="search" from="FontAwesome" size={15} color={textColor}/>
					<Text style={styles.title}>
						{this.props.trend.query}
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
	titleContainer: {
		position: 'absolute',
		height: 40,
		left: 0,
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft: 10,
		bottom: 0
	},
	title: {
		color: textColor,
		fontSize: 18,
		marginLeft: 15
	}
});