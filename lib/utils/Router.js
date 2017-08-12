"use strict";
import React, {Component, PropTypes} from 'react';
import {BackAndroid, View} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';
import Main from '../layouts/Main'
import History from '../layouts/History'
import Settings from '../layouts/Settings/Settings.connected'
import VoiceSearch from '../layouts/VoiceSearch'
import SearchResults from '../layouts/SearchResults'
import LoadingScreen from '../layouts/LoadingScreen'
import Suggests from '../components/Suggests/Suggests.connected'
import NotFound from '../components/NotFound/NotFound.connected'
import Auth from '../components/Auth/Auth'
import LikeSongs from '../components/LikeSongs/LikedSongs.connected'
import {setNavigator} from './RouterMiddleware';
import {connect} from 'react-redux';
import {populate} from '../actions/persist';
import SplashScreen from 'react-native-splash-screen';


class Router extends Component {
	static PropTypes = {
		populate: PropTypes.func.isRequired
	};

	componentDidMount() {
		this.props.populate();
		SplashScreen.hide();
	}

	navigatorRenderScene(route, navigator) {
		setNavigator(navigator);
		this._initBackButton(navigator);

		switch (route.id) {
			case 'main':
				return (<Main navigator={navigator}/>);
			case 'history':
				return (<History navigator={navigator}/>);
			case 'settings':
				return (<Settings navigator={navigator}/>);
			case 'search-results':
				return (<SearchResults navigator={navigator}/>);
			case 'search-loader':
				return (<LoadingScreen navigator={navigator}/>);
			case 'voice-search':
				return (<VoiceSearch navigator={navigator}/>);
			case 'suggests':
				return (<Suggests navigator={navigator}/>);
			case 'not-found':
				return (<NotFound navigator={navigator}/>);
			case 'auth':
				return (<Auth navigator={navigator}/>);
			case 'liked':
				return (<LikeSongs navigator={navigator}/>);
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