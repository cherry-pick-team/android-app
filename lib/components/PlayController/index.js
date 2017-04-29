"use strict";
import React, {Component, PropTypes} from 'react';
import {View, Text} from 'react-native';


/**
 * Контролл с кнопками поигрывания музыки
 */
const PlayController = ({song, progress}) => (
	<View style={styles.container}>

	</View>
);


PlayController.propTypes = {
	song: PropTypes.object.isRequired
};

const styles = {
	container: {
		width: '100%',
		height: '100%',
		flexDirection: 'column',
		alignItems: 'center'
	}
};

export default PlayController;
