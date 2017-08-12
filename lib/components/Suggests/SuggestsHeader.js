import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {primaryColor} from '../../shared/vars';

/**
 * Шапка для Suggests
 * @constructor
 */
export const SuggestsHeader = () => (
	<View style={styles.container}>
		<Text style={styles.title}>
			Возможно Вы искали
		</Text>
	</View>
);

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 60,
		backgroundColor: primaryColor,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		paddingLeft: 20
	},
	title: {
		color: 'white',
		fontSize: 20,
		fontWeight: '400'
	}
});

export default SuggestsHeader;
