import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import VoiceRecordButton from '../../components/VoiceRecordButton/VoiceSearchButton.connected';
import BaseDrawerLayout from '../BaseDrawerLayout';
import {primaryColor} from '../../shared/vars';

export const VoiceSearch = () => (
	<BaseDrawerLayout headerChildren={<Text style={styles.titleText}> Голосовой поиск </Text>} hasShadow={false}>
		<View style={styles.container}>
			<View style={styles.recordButton}>
				<VoiceRecordButton/>
			</View>
			<View style={styles.description}>
				<Text style={styles.descriptionText}>
					Нажмите и произнесите фразу из песни
				</Text>
			</View>
		</View>
	</BaseDrawerLayout>
);

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-around',
		backgroundColor: primaryColor,
	},
	description: {
		width: '100%',
		backgroundColor: 'rgba(0,0,0,0)',
		marginBottom: 60
	},
	descriptionText: {
		fontSize: 20,
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
	recordButton: {
		height: '50%',
		width: '100%',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 20
	}
});

export default VoiceSearch;
