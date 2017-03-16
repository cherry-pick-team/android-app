"use strict";
import React, {Component, PropTypes} from 'react';
import {ScrollView, StyleSheet, View, RefreshControl} from 'react-native';
import Drawer from 'react-native-drawer'
import Header from '../../components/Header';
import DrawerPanel from '../DrawerPanel';
import Search from '../Search';
import Trends from '../../components/Trends';
import {connect} from 'react-redux';
import {startFetchTrends} from '../../actions/trends';


class Main extends Component {

	static propTypes = {
		trends: PropTypes.object,
		fetchTrends: PropTypes.func
	};

	openControlPanel = () => {
		this._drawer.open()
	};

	render() {
		return (
			<Drawer
				ref={(ref) => this._drawer = ref}
				content={<DrawerPanel />}
				tapToClose={true}
				openDrawerOffset={0.2}
				styles={drawerStyle}
				elevation={10}
				type="overlay"
			>

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
					<View style={styles.search}>
						<Search />
					</View>
					<View style={styles.trends}>
						<Trends getTrends={this.props.fetchTrends} trends={this.props.trends}/>
					</View>
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

const drawerStyle = {
	drawer: {
		shadowColor: '#000000',
		shadowRadius: 20,
		backgroundColor: '#F5F5F5'
	}
};

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