"use strict";
import React, {Component} from 'react';
import {Navigator} from 'react-native';
import Main from '../layouts/Main'
import History from '../layouts/History'
import Trends from '../layouts/Trends'
import Settings from '../layouts/Settings'
import SearchResults from '../layouts/SearchResults'
import {setNavigator} from './RouterMiddleware';


export default class Router extends Component {
	navigatorRenderScene(route, navigator) {
		setNavigator(navigator);
		switch (route.id) {
			case 'main':
				return (<Main navigator={navigator}/>);
			case 'history':
				return (<History navigator={navigator}/>);
			case 'trends':
				return (<Trends navigator={navigator}/>);
			case 'settings':
				return (<Settings navigator={navigator}/>);
			case 'search-results':
				return (<SearchResults navigator={navigator}/>);
		}
	}

	render() {
		return (
			<Navigator
				initialRoute={{id: 'main'}}
				renderScene={this.navigatorRenderScene}/>
		);
	}
}