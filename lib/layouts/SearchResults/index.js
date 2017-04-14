"use strict";
import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {connect} from 'react-redux';
import {headerPrimary, textColor} from '../../shared/vars';
import Icon from '../../components/Icon';
import SearchResults from '../../containers/SearchResults';
import LoadingScreen from '../../components/LoadingScreen';


class SearchResultsLayout extends Component {
	static propTypes = {
		isLoaded: PropTypes.bool.isRequired,
		query: PropTypes.string.isRequired
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
							color={textColor}
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
		height: '100%',
		width: '100%',
		backgroundColor: 'white'
	},
	header: {
		position: 'absolute',
		width: '100%',
		top: 0,
		height: 55,
		elevation: 15,
		flexDirection: 'row',
		alignItems: 'center'
	},
	rotatedBackground: {
		position: 'absolute',
		backgroundColor: headerPrimary,
		height: 200,
		width: '200%',
		top: -110,
		opacity: 0.7,
		left: -20,
		elevation: 5,
		transform: [
			{rotateZ: '7deg'},
		]
	},
	headerTitle: {
		paddingLeft: 35,
		elevation: 20,
		zIndex: 100,
		maxWidth: '60%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	headerTitleText: {
		fontSize: 18,
		elevation: 15,
		color: textColor,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	icon: {
		paddingLeft: 15,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	}
});

function mapStateToProps(state) {
	debugger;
	return {
		isLoaded: state.searchResults.isLoaded,
		query: state.searchResults.query
	}
}

export default connect(mapStateToProps, {})(SearchResultsLayout)