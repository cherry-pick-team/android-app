import React, {PropTypes} from 'react';
import {View} from 'react-native';


export default class CoversList {
    static propTypes = {
        ...View.propTypes,
        songsCovers: PropTypes.arrayOf(PropTypes.string).isRequired
    };

    static defaultProps = {
        ...View.defaultProps
    };

    render() {
        return (
            <View style={[styles.container, this.props.style]}>

            </View>
        )
    }

}

const styles = {
    container: {
        backgroundColor: '#80CBC4',
        height: 200
    }
};
