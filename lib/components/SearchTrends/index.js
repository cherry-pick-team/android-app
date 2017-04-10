"use strict";
import React, {Component, PropTypes} from 'react';
import {View, Text} from 'react-native';
import Wave from '../Wave';
import TrendsItem from '../../containers/SearchTrendsItem';


/**
 * Список трендовых песен
 */
export default class SearchTrends extends Component {
	static propTypes = {
		trends: PropTypes.object,
		getTrends: PropTypes.func.isRequired
	};

	constructor(props) {
		super(props);
		// Если тренды не загружены загружаем их
		if (!props.trends.isLoaded) {
			props.getTrends();
		}
	}

	/**
	 * Создает список трендов
	 * @param trends - массив трендов
	 */
	getTrendsList(trends) {
		return trends.map((trend, index) => (
			<TrendsItem
				key={index}
				trend={trend}
				place={index + 1}
			/>
		));
	}

	render() {
		return (
			<View style={styles.container}>
				<Wave style={styles.wave}/>
				<View style={styles.list}>
					{this.getTrendsList(this.props.trends.entries)}
				</View>
			</View>
		);
	}
}

const styles = {
	spinner: {
		width: 50,
		height: 50,
		alignSelf: 'center',
		marginTop: 20,
		marginBottom: 40
	},
	list: {
		flexDirection: 'column',
		backgroundColor: '#b9feb2',
		marginTop: 10,
		minHeight: 300
	},
	wave: {
		position: 'absolute',
		top: -100
	}
};
