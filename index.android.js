import React, { Component } from 'react';
import {AppRegistry, Navigator} from 'react-native';
import Router from './lib/utils/Router';


export default class Root extends Component {
	render() {
		return (
			<Navigator
				initialRoute={{id: 'main'}}
				renderScene={Router}
			/>
		);
	}
}

AppRegistry.registerComponent('mobileApp', () => Root);
