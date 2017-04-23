"use strict";
import React, {Component, PropTypes} from 'react';
import {View, Text} from 'react-native';
import Spinner from '../Spinner';
import TrendsItem from '../TrendsItem';


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

	render() {
		return (
			<View style={styles.list}>
				{this.props.trends.map((trend, index) => (
					<TrendsItem
						key={index}
						trend={trend}
					/>
				))}
			</View>
		);
	}
}

const styles = {
	container: {
		marginTop: 10,
		flexDirection: 'column',
	},
	list: {
		margin: 10,
		marginTop: 10,
		flexDirection: 'column'
	}
};
