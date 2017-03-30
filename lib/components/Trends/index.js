"use strict";
import React, {Component, PropTypes} from 'react';
import {View, Text} from 'react-native';
import Card from '../Card';
import Spinner from '../Spinner';
import {textColor} from '../../shared/vars';
import TrendsItem from '../TrendsItem';
import Icon from "../Icon";
import {accentColor} from '../../shared/vars';


/**
 * Список трендовых песен
 */
export default class Trends extends Component {
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
		return trends.map((trend) => (
			<TrendsItem
				key={trend.place + trend.songName}
				place={trend.place}
				query={trend.query}
				songsCovers={trend.covers}
			/>
		));
	}

	/**
	 * Создает спинер во время загрузки трендов
	 */
	getLoadingSpinner() {
		return (
			<Spinner style={styles.spinner} strokeColor="#FF7043" />
		);
	}

	render() {
		return (
			<View style={styles.list}>
				{!this.props.trends.isLoaded ?
					this.getLoadingSpinner() : this.getTrendsList(this.props.trends.entries)}
			</View>
		);
	}
}

const styles = {
	container: {
		marginTop: 10,
		flexDirection: 'column',
	},
	spinner: {
		width: 50,
		height: 50,
		alignSelf: 'center',
		marginTop: 20,
		marginBottom: 40
	},
	list: {
		margin: 10,
		marginTop: 10,
		flexDirection: 'column'
	}
};
