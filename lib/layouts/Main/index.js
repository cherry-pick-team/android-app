"use strict";
import React, {Component, PropTypes} from 'react';
import {ScrollView, StyleSheet, View, RefreshControl, Text} from 'react-native';
import BaseDrawerLayout from '../BaseDrawerLayout';
import Search from '../../containers/Search';
import Trends from '../../components/Trends';
import Icon from '../../components/Icon';
import {connect} from 'react-redux';
import {startFetchTrends} from '../../actions/trends';
import {accentColor, textColor} from '../../shared/vars';


class Main extends Component {

	static propTypes = {
		trends: PropTypes.object,
		fetchTrends: PropTypes.func
	};

	render() {
		return (
			<BaseDrawerLayout>
				<ScrollView
					style={styles.container}
					refreshControl={
						<RefreshControl
							refreshing={this.props.trends.isLoading}
							onRefresh={this.props.fetchTrends}
						/>
					}
				>
					<View style={styles.search}>
						<Search />
					</View>
					<View style={styles.trends}>
						<View style={styles.title}>
							<Icon type="whatshot" size={30} color={accentColor}/>
							<Text style={styles.titleText}> Тренды </Text>
						</View>
						<Trends getTrends={this.props.fetchTrends} trends={this.props.trends}/>
					</View>
				</ScrollView>
			</BaseDrawerLayout>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column'
	},
	title: {
		alignSelf: 'flex-start',
		margin: 10,
		flexDirection: "row",
		alignItems: "center"
	},
	titleText: {
		fontSize: 25,
		color: textColor
	},
	search: {
		marginTop: 10
	},
	trends: {
		marginTop: 50
	}
});

function mapDispatchToProps(dispatch) {
	return({
		fetchTrends: () => {dispatch(startFetchTrends())}
	})
}

function mapStateToProps (state) {
	return {
		trends: state.trends
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)