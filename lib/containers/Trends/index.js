"use strict";
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Card from '../../components/Card';
import {textColor} from '../../shared/vars';
import {connect} from 'react-redux';
import TrendsItem from '../../components/TrendsItem';


/**
 * Список трендовых песен
 */
class Trends extends Component {
	render() {
		return (
			<Card style={styles.container}>
				<View>
					<Text style={styles.title}>
						Тренды
					</Text>
					<View>
						{this.state.trends.map((trend) => (
							<TrendsItem
								key={trend.place + trend.songName}
								place={trend.place}
								songName={trend.songName}
							/>
						))}
					</View>
				</View>
			</Card>
		);
	}
}

const styles = {
	container: {
		marginTop: 20,
		flexDirection: 'column',
	},
	title: {
		fontSize: 25,
		color: textColor,
		alignSelf: 'flex-start',
		margin: 10
	}
};

function mapStateToProps (state) {
	return {
		trends: state.trends
	}
}

export default connect(mapStateToProps)(Trends)
