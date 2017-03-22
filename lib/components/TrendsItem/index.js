"use strict";
import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Card from '../Card';
import Icon from '../Icon';
import {accentColor, textColor} from '../../shared/vars';


/**
 * Элемент списка трендовых песен
 */
export default class TrendsItem extends Component {
	static propTypes = {
		songName: PropTypes.string,
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
				<View style={styles.cover} />
				{/*<Text> {this.props.place + '. ' + this.props.songName} </Text>*/}
				<View style={styles.controlLine}>
					<View style={styles.icon}>
						<Icon type="heart" from="FontAwesome" size={25} color={accentColor}/>
					</View>
					<View style={styles.icon}>
						<Icon type="share-alt" from="FontAwesome" size={25} color={textColor}/>
					</View>
				</View>
			</Card>
		);
	}
}

const COVER_HEIGHT = 260;

const styles = StyleSheet.create({
	card: {
		marginTop: 20

	},
	cover: {
		backgroundColor: '#80CBC4',
		height: COVER_HEIGHT
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