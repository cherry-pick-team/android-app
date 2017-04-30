"use strict";
import React, {Component, PropTypes} from 'react';
import {ScrollView, StyleSheet, View, RefreshControl, StatusBar} from 'react-native';
import BaseDrawerLayout from '../BaseDrawerLayout';
import Search from '../../containers/Search';
import SearchTrends from '../../containers/SearchTrends';
import {connect} from 'react-redux';
import {startFetchTrends} from '../../actions/trends';
import {textColor} from '../../shared/vars';


class Main extends Component {

	static propTypes = {
		trends: PropTypes.object,
		onRefresh: PropTypes.func
	};

	render() {
		return (
			<BaseDrawerLayout>
				<ScrollView
					style={styles.container}
					refreshControl={
						<RefreshControl
							refreshing={false}
							onRefresh={this.props.onRefresh}
						/>
					}
				>
					<View style={styles.search}>
						<Search />
					</View>
					<View style={styles.trends}>
						<View style={styles.title}>
						</View>
						<SearchTrends/>
					</View>
				</ScrollView>
			</BaseDrawerLayout>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		height: '100%',
		width: '100%'
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
		marginTop: 150,
		marginBottom: 50
	},
	trends: {
		marginTop: 50
	}
});

function mapDispatchToProps(dispatch) {
	return ({
		onRefresh: () => {
			dispatch(startFetchTrends())
		}
	})
}

function mapStateToProps(state) {
	return {
		trends: state.trends
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)