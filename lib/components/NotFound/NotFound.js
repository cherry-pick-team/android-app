"use strict";
import React, {Component, PropTypes} from 'react';
import {View, Text, TouchableNativeFeedback} from 'react-native';
import Icon from '../../components/Icon';
import BaseDrawerLayout from '../../layouts/BaseDrawerLayout';
import {primaryColor, textColor} from '../../shared/vars';


/**
 * Экран загрузки чего-либо
 */
export default class LoadingScreen extends Component {
	static propTypes = {
		push: PropTypes.func.isRequired,
	};

	render() {
		return (
			<BaseDrawerLayout headerChildren={<Text style={styles.titleText}> Результаты поиска </Text>}>
				<View style={styles.container}>
					<Icon type="search" size={80} color={primaryColor}/>
					<Text style={styles.captionText}>
						{'Ничего не нашлось'}
					</Text>
					<TouchableNativeFeedback onPress={() => this.props.push('voice-search')}>
						<View style={styles.button}>
							<Text style={styles.buttonText}>
								{'Голосовой поиск'}
							</Text>
						</View>
					</TouchableNativeFeedback>
				</View>
			</BaseDrawerLayout>
		);
	}
}

const styles = {
	container: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height: '100%',
		backgroundColor: 'white',
	},
	captionText: {
		fontSize: 20,
		color: textColor,
		paddingBottom: 80,
	},
	button: {
		width: '40%',
		backgroundColor: primaryColor,
		borderRadius: 4,
		padding: 15,
		elevation: 6,
	},
	buttonText: {
		fontSize: 18,
		fontWeight: '300',
		color: 'white',
		textAlign: 'center'
	},
	titleText: {
		fontSize: 20,
		fontWeight: '300',
		color: 'white',
		textAlign: 'center'
	},
};
