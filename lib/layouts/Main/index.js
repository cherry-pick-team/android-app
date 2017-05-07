"use strict";
import React, {Component, PropTypes} from 'react';
import {ScrollView, StyleSheet, View, RefreshControl, Text} from 'react-native';
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
					<View style={styles.logo}>
						<Text style={styles.logoText}>
							{'ShoZaSong'}
						</Text>
					</View>
					<View style={styles.search}>
						<Search/>
					</View>
					<View style={styles.trends}>
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
		marginTop: 20,
		marginBottom: 10
	},
	trends: {
		marginTop: 20
	},
	logo: {
		flexDirection: 'column',
		alignItems: 'center',
		paddingTop: 20
	},
	logoText: {
		fontSize: 48,
		fontWeight: '100',
		color: textColor,
		fontFamily: 'sans-serif-light'
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