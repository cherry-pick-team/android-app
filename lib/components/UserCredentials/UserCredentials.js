import React, {PropTypes} from 'react';
import {View, StyleSheet, Text, Image, TouchableWithoutFeedback} from 'react-native';
import Icon from '../Icon';
import {textColor} from '../../shared/vars';

export const UserCredentials = ({credentials, logout, push}) => (
	<View style={styles.container}>
		<View style={styles.userInfo}>
			<View style={styles.avatarWrapper}>
				<Image style={styles.avatar} source={{uri: credentials.avatar_url}}/>
			</View>
			<View style={styles.rightColumn}>
				<Text style={styles.usernameText}>
					{credentials.name}
				</Text>
				<View style={styles.logoutButton}>
					<TouchableWithoutFeedback onPress={logout}>
						<View>
							<Text style={styles.logoutButtonText}>
								Выйти
							</Text>
						</View>
					</TouchableWithoutFeedback>
				</View>
			</View>
		</View>
		<View style={styles.settings}>
			<TouchableWithoutFeedback onPress={() => push('search-history')}>
				<View style={styles.history}>
					<View>
						<Icon type="history" color={textColor} size={40}/>
					</View>
					<Text style={styles.settingsText}>
						История поиска
					</Text>
				</View>
			</TouchableWithoutFeedback>
		</View>
	</View>
);

UserCredentials.propTypes = {
	credentials: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		alignItems: 'center',
		width: '80%',
		marginTop: '10%'
	},
	usernameText: {
		fontSize: 20,
		color: 'white',
		fontWeight: '200'
	},
	avatar: {
		width: 50,
		height: 50,
		borderRadius: 25
	},
	userInfo: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'rgba(1,1,1,0)'
	},
	settings: {
		width: '100%',
		backgroundColor: 'rgba(255,255,255,0.7)',
		borderRadius: 10,
		marginTop: 10,
		padding: 10
	},
	history: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	avatarWrapper: {
		marginRight: 30
	},
	rightColumn: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	logoutButton: {
		width: '100%',
		flexDirection: 'row',
		marginTop: 30
	},
	logoutButtonText: {
		color: 'white',
		fontWeight: '200',
		fontSize: 18
	},
	switchWrapper: {
		marginBottom: 15,
		marginTop: 15
	},
	settingsText: {
		fontSize: 18
	}
});

export default UserCredentials;
