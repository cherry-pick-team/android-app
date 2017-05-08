import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import Router from './lib/utils/Router';
import { ThemeProvider } from 'react-native-material-ui';
import { Provider } from 'react-redux';
import { configureStore } from './lib/store';

export default class Root extends Component {

	render() {
		return (
			<Provider store={configureStore()}>
				<ThemeProvider>
					<Router/>
				</ThemeProvider>
			</Provider>
		);
	}
}

AppRegistry.registerComponent('mobileApp', () => Root);
