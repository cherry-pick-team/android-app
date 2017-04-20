"use strict";
import React, {Component, PropTypes} from 'react';
import {Navigator, BackAndroid} from 'react-native';
import Main from '../layouts/Main'
import History from '../layouts/History'
import Trends from '../layouts/Trends'
import Settings from '../layouts/Settings'
import SearchResults from '../layouts/SearchResults'
import {setNavigator} from './RouterMiddleware';
import {connect} from 'react-redux';
import {populate} from '../actions/persist';


class Router extends Component {
	static PropTypes = {
		populate: PropTypes.func.isRequired
	};

	componentDidMount() {
		this.props.populate()
	}

	navigatorRenderScene(route, navigator) {
		setNavigator(navigator);
		this._initBackButton(navigator);

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

	_initBackButton(navigator) {
		if (!this.isBackButtonInit) {
			BackAndroid.addEventListener('hardwareBackPress', () => {
				if (navigator && navigator.getCurrentRoutes().length > 1) {
					navigator.pop();
					return true;
				}
				return false;
			});
			this.isBackButtonInit = true;
		}
	}

	_configureScene(route) {
		const CustomFloatFromBottom = Navigator.SceneConfigs.FloatFromBottom;
		CustomFloatFromBottom.gestures.pop.edgeHitWidth = 80;

		switch (route.id) {
			case 'search-results':
				return Navigator.SceneConfigs.FloatFromBottom;
			default:
				return Navigator.SceneConfigs.PushFromRight;
		}
	}

	render() {
		return (
			<Navigator
				initialRoute={{id: 'main'}}
				renderScene={this.navigatorRenderScene.bind(this)}
				configureScene={ this._configureScene.bind(this) }
			>
			</Navigator>
		);
	}
}


export default connect(null, {populate})(Router)