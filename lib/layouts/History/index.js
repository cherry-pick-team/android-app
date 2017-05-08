"use strict";
import React, {Component, PropTypes} from 'react';
import {StyleSheet, Text, View, TouchableNativeFeedback} from 'react-native';
import {connect} from 'react-redux';
import BaseDrawerLayout from '../BaseDrawerLayout';
import SearchHistory from '../../containers/SearchHistory';
import Icon from '../../components/Icon';
import {search} from '../../actions/search';
import {deleteAll} from '../../actions/history';
import {clear} from '../../actions/persist';
import {push} from '../../actions/router';


class History extends Component {

	static propTypes = {
		history: PropTypes.array.isRequired,
		onPress: PropTypes.func.isRequired,
		deleteAll: PropTypes.func.isRequired
	};

	getHeaderTitle() {
		return (
			<View style={styles.headerTitleContainer}>
				<View style={styles.headerTitle}>
					<Icon type="history" size={35} color="white"/>
					<Text style={styles.headerTitleText}>
						История
					</Text>
				</View>
				<TouchableNativeFeedback
					onPress={this.props.deleteAll}
					style={styles.clearAll}
				>
					<Text style={styles.clearAllText}>
						Удалить все
					</Text>
				</TouchableNativeFeedback>
			</View>
		);
	}

	render() {
		return (
			<BaseDrawerLayout headerChildren={this.getHeaderTitle()}>
				<SearchHistory history={this.props.history}/>
			</BaseDrawerLayout>
		);
	}
}

const styles = StyleSheet.create({
	headerTitleText: {
		fontSize: 18,
		color: 'white',
		marginLeft: 15
	},
	headerTitle: {
		flex: 3,
		flexDirection: 'row',
		alignItems: 'center'
	},
	headerTitleContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		width: '100%'
	},
	clearAllText: {
		color: 'white',
		paddingRight: 60
	},
	clearAll: {
		flex: 1,
		paddingRight: 40
	}
});

function mapStateToProps(state) {
	return {
		history: state.searchHistory
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onPress: (query) => {
			dispatch(search(query));
		},
		deleteAll: () => {
			dispatch(deleteAll());
			dispatch(clear('searchHistory'));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(History)