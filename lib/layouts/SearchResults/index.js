"use strict";
import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, Text, Animated} from 'react-native';
import {connect} from 'react-redux';
import SearchResults from '../../containers/SearchResults';
import LoadingScreen from '../../components/LoadingScreen';
import Header from '../../components/Header';
import {back} from '../../actions/router';


class SearchResultsLayout extends Component {
	static propTypes = {
		isLoaded: PropTypes.bool.isRequired,
		query: PropTypes.string.isRequired,
		back: PropTypes.func.isRequired
	};

	constructor(props) {
		super(props);

		this.state = {
			isLoaded: false,
			opacity: new Animated.Value(0)
		};
	}

	componentWillReceiveProps(nextProps) {
		if (!this.props.isLoaded && nextProps.isLoaded) {
			this.startOpacityAnimation();
		}
	}

	startOpacityAnimation() {
		return Animated.timing(
			this.state.opacity,
			{
				toValue: 1,
				duration: 500
			}
		).start()
	}

	getResults() {
		return (
			<Animated.View style={[styles.wrapper, {opacity: this.state.opacity}]}>
				<Header
					iconType="angle-down"
					iconFrom="FontAwesome"
					iconColor="#FFFAFF"
					onMenuClick={this.props.back}
					style={styles.header}
					textColor="#E0E0E0"
				>
					<Text style={styles.headerTitleText}>
						{this.props.query}
					</Text>
				</Header>
				<View style={styles.container}>
					<SearchResults />
				</View>
			</Animated.View>
		);
	}

	render() {
		return (
			<View style={styles.layout}>
				{this.props.isLoaded ? this.getResults() : <LoadingScreen isLoaded={this.state.isLoaded}/>}
			</View>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		height: '100%',
		width: '100%'
	},
	wrapper: {
		height: '100%',
		width: '100%',
		backgroundColor: 'white',
		zIndex: 100,
		elevation: 10
	},
	header: {
		position: 'absolute'
	},
	headerTitleText: {
		color: 'white',
		fontSize: 18
	}
});

function mapStateToProps(state) {
	return {
		isLoaded: state.searchResults.isLoaded,
		query: state.searchResults.query
	}
}

export default connect(mapStateToProps, {back})(SearchResultsLayout)