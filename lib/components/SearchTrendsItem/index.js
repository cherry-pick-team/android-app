"use strict";
import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, Text, TouchableNativeFeedback} from 'react-native';
import {textColor} from '../../shared/vars';


/**
 * Элемент списка трендовых песен
 */
export default class SearchTrendsItem extends Component {
	static propTypes = {
		trend: PropTypes.string,
		onPress: PropTypes.func,
		style: PropTypes.object,
		place: PropTypes.number,
		count: PropTypes.number
	};

	static defaultProps = {
		style: {},
		onPress: () => {
		}
	};


	render() {
		return (
			<TouchableNativeFeedback onPress={() => this.props.onPress(this.props.trend)}>
				<View
					style={styles.container}
				>
					<View style={styles.place}>
						<Text style={styles.placeText}>
							{this.props.place}
						</Text>
					</View>
					<View style={styles.query}>
						<Text style={styles.queryText}>
							{this.props.trend}
						</Text>
						<Text style={styles.totalText}>
							{`${this.props.count} запросов`}
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
		paddingLeft: 5,
		paddingRight: 5,
		height: 80,
		flexDirection: 'row',
		alignItems: 'center'
	},
	place: {
		marginRight: 40,
		marginLeft: 30,
		width: 55,
		height: 55,
		borderRadius: 50,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		elevation: 4,
		backgroundColor: '#E0E0E0'
	},
	placeText: {
		fontSize: 26,
		color: textColor
	},
	queryText: {
		fontSize: 22,
		color: '#E0E0E0'
	},
	totalText: {
		fontSize: 16,
		color: '#E0E0E0'
	}
});
