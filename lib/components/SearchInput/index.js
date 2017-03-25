"use strict";
import React, {Component, PropTypes} from 'react';
import {StyleSheet, View} from 'react-native';
import TextInput from '../TextInput';


/**
 * Расширенный инпут с иконками для поиска
 */
export default class SearchInput extends Component {
    static propTypes = {
        placeholder: PropTypes.string,
        onChangeText: PropTypes.func,
        onSubmit: PropTypes.func,
        onClear: PropTypes.func,
        style: PropTypes.object
    };

    static defaultProps = {
        placeholder: '',
        style: {},
        onChangeText: () => {},
        onSubmit: () => {},
        onClear: () => {}
    };

    render() {
        return (
            <View>
                <Icon />
                <TextInput {...this.props}/>
                <Icon />
            </View>
        );
    }
}
