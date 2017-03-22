"use strict";
import React, {Component, PropTypes} from 'react';
import {ScrollView, StyleSheet, View, RefreshControl} from 'react-native';
import BaseDrawerLayout from '../BaseDrawerLayout';
import Trends from '../../containers/Trends';
import {connect} from 'react-redux';
import {startFetchTrends} from '../../actions/trends';


class TrendsLayout extends Component {

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
					<View style={styles.trends}>
						<Trends />
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
	search: {
		marginTop: 10
	},
	trends: {
		marginTop: 10
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

export default connect(mapStateToProps, mapDispatchToProps)(TrendsLayout)