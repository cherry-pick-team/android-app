"use strict";
import React, {PropTypes, Component} from 'react';
import {StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import BaseDrawerLayout from '../BaseDrawerLayout';


class VoiceSearch extends Component {

	static propTypes = {
		search: PropTypes.func
	};

	render() {
		return (
			<BaseDrawerLayout>

			</BaseDrawerLayout>
		);
	}
}

const styles = StyleSheet.create({
	scroll: {
		flexDirection: 'column',
		height: '100%',
		width: '100%'
	},
	animationToogler: {
		flexDirection: 'row',
		alignItems: 'center',
		width: '100%'
	},
	caption: {
		marginLeft: 20
	},
	captionText: {
		fontSize: 18
	},
	switchStyles: {
		marginLeft: 20
	}
});

function mapDispatchToProps(dispatch) {
	return {}
}

function mapStateToProps (state) {
	return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(VoiceSearch)