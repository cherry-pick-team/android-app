import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {WebView, StyleSheet, View, Text} from 'react-native';

export default class AuthWebView extends Component {
	static propTypes = {
		kind: PropTypes.oneOf(['fb']),
		login: PropTypes.func.isRequired
	};

	constructor(props) {
		super(props);

		this.state = {
			isLoaded: false,
			isFinished: false
		}
	}

	onLoad() {
		this.setState({isLoaded: true});
	}

	onNavigationStateChange({url}) {
		if (this.checkUrl(url)) {
			const token = this.getToken(url);
			this.setState({isFinished: true});
			this.props.login({token, type: this.props.kind});
		}
	}

	checkUrl(url) {
		return /^shozasong:\/\//.test(url);
	}

	getToken(url) {
		const result = /api_token=(.*)/.exec(url);
		return result[1];
	}

	getUrl() {
		return `https://zsong.ru/auth/${this.props.kind}/redirect?mobile=1`;
	}

	render() {
		return (
			<View style={styles.container}>
				{
					!this.state.isFinished &&
					<WebView
						style={styles.container}
						source={{uri: this.getUrl()}}
						onNavigationStateChange={this.onNavigationStateChange.bind(this)}
						onLoad={this.onLoad.bind(this)}
					/>
				}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%'
	},
	spinner: {},
	wrapper: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},
	loadingText: {
		fontSize: 20,
		textAlign: 'center',
	}
});
