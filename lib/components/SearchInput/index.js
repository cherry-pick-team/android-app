"use strict";
import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
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
        onClear: () => {}
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
                    <Icon type="search" size={30} />
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
        height: 40
    },

    input: {
        height: 40,
        borderColor: '#90A4AE',
        borderWidth: 1,
        fontSize: 20,
        alignSelf: 'center',
        paddingLeft: 35,
        paddingRight: 10,
        width: '100%'
    },

    searchIcon: {
        position: 'absolute',
        alignSelf: 'flex-end',
        marginLeft: 4
    }
});