import React, { Component } from 'react';
import {AppRegistry, Navigator} from 'react-native';
import Router from './lib/utils/Router';
import { ThemeProvider } from 'react-native-material-ui';


export default class Root extends Component {
	render() {
		return (
			<ThemeProvider>
				<Navigator
					initialRoute={{id: 'main'}}
					renderScene={Router}
				/>
			</ThemeProvider>
		);
	}
}

AppRegistry.registerComponent('mobileApp', () => Root);
