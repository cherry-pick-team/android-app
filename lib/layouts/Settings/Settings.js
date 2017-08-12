"use strict";
import React, {Component, PropTypes} from 'react';
import {StyleSheet, Text, ScrollView, View} from 'react-native';
import {connect} from 'react-redux';
import BaseDrawerLayout from '../BaseDrawerLayout';
import {MKSwitch} from 'react-native-material-kit';
import UserCredentials from '../../components/UserCredentials/UserCredentials';
import AuthButtons from '../../components/Auth/AuthButtons';


class Settings extends Component {

	static propTypes = {
		history: PropTypes.object,
		fetchHistory: PropTypes.func,
		logout: PropTypes.func.isRequired,
		push: PropTypes.func.isRequired,
		credentials: PropTypes.object.isRequired,
		isAuth: PropTypes.bool.isRequired,
	};

	render() {
		const {credentials, logout, push, isAuth} = this.props;
		return (
			<BaseDrawerLayout>
				<ScrollView style={styles.scroll}>
					<View style={styles.socials}>
						{isAuth
							? <UserCredentials credentials={credentials} logout={logout} push={push}/>
							: <AuthButtons/>
						}
					</View>
					<View style={styles.animationToogler}>
						<View style={styles.caption}>
							<Text style={styles.captionText}>
								Режим экономия энергии
							</Text>
						</View>
						<MKSwitch
							style={styles.switchStyles}
							onColor="#999"
							thumbOnColor="#6A83FC"
							rippleColor="rgba(106, 131, 100, 0.2)"
							checked
						/>
					</View>
				</ScrollView>
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
		justifyContent: 'center',
		width: '100%'
	},
	socials: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
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

export default connect(mapStateToProps, mapDispatchToProps)(Settings)