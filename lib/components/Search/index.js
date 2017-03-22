"use strict";
import React, {Component, PropTypes} from 'react';
import {View, Text} from 'react-native';
import Button from '../../components/Button';
import {textColor} from '../../shared/vars';
import TextInput from '../../components/TextInput';
import {primalColor} from '../../shared/vars';


export default class Search extends Component {
	static propTypes = {
		search: PropTypes.func.isRequired
	};

	constructor(props) {
		super(props);
		this.state = {
			searchQuery: ''
		}
	}

	handleClick() {
		if (this.state.searchQuery) {
			this.props.search(this.state.searchQuery);
		}
	}

	changeText(text) {
		this.setState({searchQuery: text})
	}

	handleSubmit() {
		if (this.state.searchQuery) {
			this.props.search(this.state.searchQuery);
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<View>
					<Text style={styles.title}>
						Введите фразу
					</Text>
					<TextInput
						onChangeText={this.changeText.bind(this)}
						onSubmit={this.handleSubmit.bind(this)}
						style={styles.searchInput}
					/>
					<Button
						raised
						text="Искать"
						style={styles.searchButton}
						onPress={this.handleClick.bind(this)}
					/>
				</View>
			</View>
		);
	}
}

const styles = {
	container: {
		marginTop: 20,
		flexDirection: 'column',
	},
	title: {
		fontSize: 25,
		color: textColor,
		alignSelf: 'center',
		marginTop: 10
	},
	searchInput: {
		alignSelf: 'center',
		width: 300,
		marginTop: 20,
		marginBottom: 10,
	},
	searchButton: {
		container: {
			alignSelf: 'center',
			width: 100,
			marginTop: 20,
			marginBottom: 10,
			backgroundColor: primalColor
		},
		text: {
			color: 'white'
		}
	}
};
