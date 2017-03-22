"use strict";
import React, {Component, PropTypes} from 'react';
import {StyleSheet, TextInput} from 'react-native';

/**
 * Базовый тектовый инпут
 * используется в поиске
 */
export default class CustomTextInput extends Component {
	static propTypes = {
		placeholder: PropTypes.string,
		onChangeText: PropTypes.func,
		onSubmit: PropTypes.func,
		style: PropTypes.object
	};

	static defaultProps = {
		placeholder: '',
		style: {},
		onChangeText: () => {},
		onSubmit: () => {}
	};

	constructor(props) {
		super(props);
		this.state = { text: props.placeholder };
	}

	render() {
		return (
			<TextInput
				style={[
					{
						height: 40,
						borderColor: '#90A4AE',
						borderWidth: 1,
						fontSize: 18
					},
					this.props.style
				]}
				onChangeText={(text) => {
					this.setState({text});
					this.props.onChangeText(text);
				}}
				onSubmitEditing={this.props.onSubmit}
				value={this.state.text}
				underlineColorAndroid='rgba(0,0,0,0)'
			/>
		);
	}
}
