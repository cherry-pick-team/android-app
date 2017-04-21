"use strict";
import React, {Component, PropTypes} from 'react';
import {Alert, TouchableWithoutFeedback, View, StyleSheet} from 'react-native';
import RippleIcon from '../RippleIcon';


export default class SeekController extends Component {
	static propTypes = {
		chunks: PropTypes.array.isRequired,
		seek: PropTypes.func.isRequired
	};

	static defaultProps = {};

	constructor(props) {
		super(props);

		this.state = {
			currentChunk: -1
		};
	}

	_onPressNext() {
		const chunkStart = this._getChunkStart(this.state.currentChunk + 1);

		if (chunkStart != null) {
			this.props.seek(chunkStart / 1000);
			this.setState({
				currentChunk: this.state.currentChunk + 1
			})
		}
	}

	_onPressPrev() {
		const chunkStart = this._getChunkStart(this.state.currentChunk - 1);

		if (chunkStart != null) {
			this.props.seek(chunkStart / 1000);
			this.setState({
				currentChunk: this.state.currentChunk - 1
			})
		}
	}

	_getChunkStart(index) {
		if (index >= this.props.chunks.length || index < 0) {
			return null;
		}

		return this.props.chunks[index][0];
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.icon}>
					<RippleIcon
						onPress={this._onPressPrev.bind(this)}
						type="step-backward"
						from="FontAwesome"
						size={30}
					/>
				</View>
				<View style={styles.icon}>
					<RippleIcon
						onPress={this._onPressNext.bind(this)}
						type="step-forward"
						from="FontAwesome"
						size={30}
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'flex-start',
	},
	icon: {
		borderRadius: 5,
		marginLeft: 5,
		marginRight: 5,
		backgroundColor: 'white'
	}
});