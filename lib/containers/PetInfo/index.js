"use strict";
import React, {Component, PropTypes} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import RoundedCard from '../../components/RoundedCard';
import {historyColor, animalsColor, musicColor} from '../../shared/vars';
import StatsItem from '../../components/StatsItem';


export default class PetInfo extends Component {
	static propTypes = {
		style: PropTypes.oneOfType([
			React.PropTypes.object,
			React.PropTypes.number,
		])

	};

	static defaultProps = {
		style: {}
	};

	render() {
		return (
			<View style={[styles.container, this.props.style]}>
				<RoundedCard radius={120} style={styles.avatar}>
					<Text>Avatar</Text>
				</RoundedCard>
				<View style={styles.stats}>
					{['history', 'music', 'animals'].map((type) => (
						<StatsItem key={type} type={type} questions={5} style={styles.statsItem}/>
					))}
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
	},
	avatar: {
		position: 'absolute',
		left: -40,
		backgroundColor: historyColor,
		opacity: 0.84
	},
	stats: {
		alignSelf: 'flex-end',
		marginRight: 20
	},
	statsItem: {
		marginTop: 10
	}
});
