"use strict";
import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, Text, TouchableNativeFeedback} from 'react-native';
import Icon from '../Icon';
import {greenColor, textColor} from '../../shared/vars';


/**
 * Элемент списка трендовых песен
 */
export default class SearchTrendsItem extends Component {
	static propTypes = {
		trend: PropTypes.string,
		onPress: PropTypes.func,
		style: PropTypes.object,
		place: PropTypes.number
	};

	static defaultProps = {
		style: {},
		onPress: () => {
		}
	};

	getColorByPlace(place) {
		switch (place) {
			case 1:
				return '#FFEB3B';
			case 2:
				return '#4FC3F7';
			case 3:
				return '#FF7043';
			default:
				return '#E0E0E0';
		}
	}

	render() {
		return (
			<TouchableNativeFeedback onPress={() => this.props.onPress(this.props.trend)}>
				<View
					style={styles.container}
				>
					<View style={[styles.place, {backgroundColor: this.getColorByPlace(this.props.place)}]}>
						<Text style={styles.placeText}>
							{this.props.place}
						</Text>
					</View>
					<View>
						<Text style={styles.queryText}>
							{this.props.trend}
						</Text>
					</View>
				</View>
			</TouchableNativeFeedback>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		marginTop: 20,
		paddingLeft: 20,
		paddingRight: 20,
		height: 60,
		flexDirection: 'row',
		alignItems: 'center'
	},
	query: {
		fontSize: 18,
		color: textColor
	},
	place: {
		marginRight: 40,
		marginLeft: 30,
		width: 40,
		height: 40,
		borderRadius: 50,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		elevation: 8
	},
	placeText: {
		fontSize: 18
	},
	queryText: {
		fontSize: 18
	}
});
