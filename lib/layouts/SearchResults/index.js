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

	componentDidMount() {
		this.checkLoaded()
	}

	checkLoaded() {
		const interval = setInterval(async () => {
			if (this.props.isLoaded) {
				clearInterval(interval);
				this.setState({
					isLoaded: true
				});
				await this.startOpacityAnimation();
			}
		}, 1000);
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
					iconType="angle-up"
					iconFrom="FontAwesome"
					onMenuClick={this.props.back}
					title={this.props.query}
					style={styles.header}
				/>
				<View style={styles.container}>
					<SearchResults />
				</View>
			</Animated.View>
		);
	}

	getLoader() {
		return (
			<LoadingScreen isLoaded={this.state.isLoaded}/>
		);
	}

	render() {
		return (
			<View style={styles.layout}>
				<LoadingScreen isLoaded={this.state.isLoaded}/>
				{this.props.isLoaded ? this.getResults() : null}
			</View>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		height: '100%',
		width: '100%',
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
	layout: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0
	}
});

function mapStateToProps(state) {
	return {
		isLoaded: state.searchResults.isLoaded,
		query: state.searchResults.query
	}
}

export default connect(mapStateToProps, {back})(SearchResultsLayout)