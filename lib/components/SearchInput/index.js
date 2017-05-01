"use strict";
import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, TextInput, Dimensions} from 'react-native';
import Icon from '../Icon';


/**
 * Расширенный инпут с иконками для поиска
 */
export default class SearchInput extends Component {
	static propTypes = {
		...TextInput.propTypes,
		placeholder: PropTypes.string,
		onChangeText: PropTypes.func,
		onSubmitEditing: PropTypes.func,
		onClear: PropTypes.func,
	};

	static defaultProps = {
		...TextInput.defaultProps,
		placeholder: '',
		onClear: () => {
		}
	};

	constructor(props) {
		super(props);
		this.state = {
			text: props.placeholder
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.searchIcon}>
					<Icon
						type="search"
						size={35}
					    color="#6e6e6e"
					/>
				</View>
				<TextInput
					style={[styles.input, this.props.style]}
					onChangeText={(text) => {
						this.setState({text});
						this.props.onChangeText(text);
					}}
					onSubmitEditing={this.props.onSubmit}
					value={this.state.text}
					underlineColorAndroid="rgba(0,0,0,0)"
					returnKeyType="search"
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		height: 55
	},

	input: {
		height: 55,
		borderColor: '#D7D7D7',
		borderWidth: 0.5,
		fontSize: 26,
		alignSelf: 'center',
		paddingLeft: 40,
		paddingRight: 10,
		textAlignVertical: 'bottom',
		elevation: 7,
		backgroundColor: 'white'
	},

	searchIcon: {
		position: 'absolute',
		marginLeft: 4,
		top: 6,
		elevation: 11
	}
});