"use strict";
import React, {Component, PropTypes} from 'react';
import {ScrollView, StyleSheet, View, RefreshControl, Text} from 'react-native';
import Drawer from '../../components/Drawer'
import Header from '../../components/Header';
import Search from '../../containers/Search';
import Trends from '../../components/Trends';
import {connect} from 'react-redux';
import {startFetchTrends} from '../../actions/trends';


class History extends Component {

	static propTypes = {
		history: PropTypes.object,
		fetchHistory: PropTypes.func
	};

	constructor(props) {
		super(props);
		this.state = {isDrawerOpen: false};
	}

	openControlPanel = () => {
		this._drawer.open()
	};

	render() {
		return (
			<Drawer ref={(ref) => this._drawer = ref}>
				<Header onMenuClick = {() => this.openControlPanel()} />
				<ScrollView
					style={styles.container}
					refreshControl={
						<RefreshControl
							refreshing={this.props.trends.isLoading}
							onRefresh={this.props.fetchTrends}
						/>
					}
				>
					<Text> History </Text>
				</ScrollView>
			</Drawer>
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
		fetchHistory: () => {dispatch(startFetchTrends())}
	})
}

function mapStateToProps (state) {
	return {
		history: state.history
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(History)