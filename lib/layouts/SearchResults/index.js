"use strict";
import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {connect} from 'react-redux';
import {headerPrimary, headerSecondary} from '../../shared/vars';
import Icon from '../../components/Icon';
import SearchResults from '../../containers/SearchResults';
import LoadingScreen from '../../components/LoadingScreen';


class SearchResultsLayout extends Component {
	static propTypes = {
		isLoaded: PropTypes.bool.isReqired,
		query: PropTypes.string.isReqired
	};

	render() {
		return (
			<View style={styles.wrapper}>
				<View style={styles.container}>
					{this.props.isLoaded ? <SearchResults /> : <LoadingScreen />}
				</View>
				<View style={styles.header}>

					<View style={styles.icon}>
						<Icon
							st
							from="FontAwesome"
							type="angle-left"
							size={35}
							color={headerSecondary}
						/>
					</View>
					<View style={styles.headerTitle}>
						<Text style={styles.headerTitleText}>
							{this.props.query}
						</Text>
					</View>
				</View>
				<View style={styles.rotatedBackground}/>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	container: {},
	wrapper: {
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		backgroundColor: 'white'
	},
	header: {
		position: 'absolute',
		width: '100%',
		top: 0,
		height: 100,
		elevation: 15,
		flexDirection: 'row'
	},
	rotatedBackground: {
		position: 'absolute',
		backgroundColor: headerPrimary,
		height: 200,
		width: '200%',
		top: -110,
		opacity: 0.7,
		left: -20,
		elevation: 10,
		transform: [
			{rotateZ: '7deg'},
		],
		zIndex: 2
	},
	headerTitle: {},
	headerTitleText: {
		fontSize: 30
	},
	icon: {
		paddingTop: 7,
		paddingLeft: 15
	}
});

function mapStateToProps(state) {
	return {
		isLoaded: state.searchResults.isLoaded,
		query: state.searchResults.query
	}
}

export default connect(mapStateToProps, {})(SearchResultsLayout)