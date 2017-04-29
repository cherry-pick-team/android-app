"use strict";
import React, {Component, PropTypes} from 'react';
import {View} from 'react-native';


/**
 * Контроллер проигрывания песни для отрывка текста
 */
const PlayController = ({song}) => (
	<View style={styles.container}>

	</View>
);

PlayController.propTypes = {
	songId: PropTypes.string.isRequired,
	chunkId: PropTypes.number.isRequired,
	duration: PropTypes.number.isRequired
};


const styles = {
	container: {
		height: '100%',
		backgroundColor: 'white'
	}
};

export default PlayController;
