import React, {PropTypes} from 'react';
import {View, StyleSheet} from 'react-native';
import BaseDrawerLayout from '../../layouts/BaseDrawerLayout';
import AuthWebViewConnected from './AuthWebView.connected';

export const Auth = ({kind}) => (
	<BaseDrawerLayout>
		<View style={styles.container}>
			<AuthWebViewConnected kind={kind}/>
		</View>
	</BaseDrawerLayout>
);

Auth.propTypes = {
	kind: PropTypes.oneOf(['fb']),
};

Auth.defaultProps = {
	kind: 'fb',
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%'
	}
});

export default Auth;
