import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import FacebookAuthButton from '../FacebookButton/FacebookButton.connected';

/**
 * Список кнопок авторизации,
 * показывается если юзер не авторизован
 * @constructor
 */
export const AuthButtons = () => (
	<View style={styles.container}>
		<View style={styles.title}>
			<Text style={styles.titleText}>
				Вход через социальные сети
			</Text>
		</View>
		<View style={styles.buttons}>
			<FacebookAuthButton/>
		</View>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		alignItems: 'center',
		borderRadius: 10,
		width: '90%',
		marginTop: '10%',
		padding: 10
	},
	titleText: {
		fontWeight: '300',
		fontSize: 20,
		textAlign: 'center'
	},
	title: {
		marginBottom: 30,
		marginTop: 30
	},
	buttons: {
		marginBottom: 60
	}
});

export default AuthButtons;
