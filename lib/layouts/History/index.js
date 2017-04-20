"use strict";
import React, {Component, PropTypes} from 'react';
import {StyleSheet, Text, ScrollView, View, TouchableNativeFeedback} from 'react-native';
import {connect} from 'react-redux';
import BaseDrawerLayout from '../BaseDrawerLayout';
import Icon from '../../components/Icon';
import {search} from '../../actions/search';
import {push} from '../../actions/router';


class History extends Component {

	static propTypes = {
		history: PropTypes.array.isRequired,
		onPress: PropTypes.func.isRequired
	};

	convertToReadable(timestamp) {
		const date = new Date(timestamp);
		let month = date.getMonth() + 1;
		month = month < 10 ? '0' + month : month;

		return `${date.getDate()}.${month}.${date.getFullYear()}`;
	}

	render() {
		return (
			<BaseDrawerLayout>
				<ScrollView style={styles.scroll}>
					{this.props.history.map((entry, index) => (
						<TouchableNativeFeedback onPress={() => this.props.onPress(entry.query)}>
							<View key={index} style={styles.listItem}>
								<View style={styles.icon}>
									<Icon type="search" size={35}/>
								</View>
								<View style={styles.underlined}>
									<View style={styles.query}>
										<Text>
											{entry.query}
										</Text>
									</View>
									<View style={styles.date}>
										<Text>
											{this.convertToReadable(entry.ts)}
										</Text>
									</View>
								</View>
							</View>
						</TouchableNativeFeedback>
					))}
				</ScrollView>
			</BaseDrawerLayout>
		);
	}
}

const styles = StyleSheet.create({
	scroll: {
		flexDirection: 'column',
		paddingTop: 70,
		paddingLeft: 10,
		paddingRight: 10
	},
	listItem: {
		height: 50,
		flexDirection: 'row',
		justifyContent: 'center'
	},
	icon: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	query: {
		flex: 3,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		paddingLeft: 20
	},
	date: {
		flex: 1.5,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	underlined: {
		borderBottomWidth: 0.5,
		borderColor: 'gray',
		flex: 4,
		flexDirection: 'row',
		justifyContent: 'center'
	}
});


function mapStateToProps(state) {
	return {
		history: state.searchHistory.entries
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onPress: (query) => {
			dispatch(search(query));
			dispatch(push('search-results'));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(History)