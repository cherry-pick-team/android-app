"use strict";
import React, {Component, PropTypes} from 'react';
import {StyleSheet, Text, ScrollView, View} from 'react-native';
import {connect} from 'react-redux';
import BaseDrawerLayout from '../BaseDrawerLayout';
import Icon from '../../components/Icon';


class History extends Component {

	static propTypes = {
		history: PropTypes.array.isRequired,
	};

	convertToReadable() {
		return '20.04.17';
	}

	render() {
		return (
			<BaseDrawerLayout>
				<ScrollView style={styles.scroll}>
					{this.props.history.map((entry, index) => (
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
		flex: 1,
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

export default connect(mapStateToProps, null)(History)