import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet} from 'react-native';
import FacebookAuthButtonConnected from '../FacebookButton/FacebookButton.connected';
import {textColor} from '../../shared/vars';

export const Empty = ({isAuth}) => (
	<View style={styles.container}>
		<Text style={styles.text}>
			Все понравившиеся Вам песни будут отображаться тут
		</Text>
		{!isAuth && <FacebookAuthButtonConnected/>}
	</View>
);

Empty.propTypes = {
	isAuth: PropTypes.bool.isRequired,
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: '10%',
	},
	text: {
		marginTop: '10%',
		marginBottom: '10%',
		color: textColor,
		fontSize: 20,
		textAlign: 'center',
	}
});

export default Empty;
