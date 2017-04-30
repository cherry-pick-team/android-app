"use strict";
import React, {Component, PropTypes} from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FoundationIcon from 'react-native-vector-icons/Foundation';


/**
 * Компоненты иконки, умеет рисовать
 * иконки из пакета react-native-vector-icons
 */
export default class Icon extends Component {
	static propTypes = {
		type: PropTypes.string.isRequired,
		color: PropTypes.string,
		from: PropTypes.string,
		size: PropTypes.number.isRequired
	};

	static defaultProps = {
		color: 'black',
		from: 'MaterialIcons'
	};

	render() {
		switch (this.props.from) {
			case 'MaterialIcons':
				return (<MaterialIcon name={this.props.type} size={this.props.size} color={this.props.color}/>);
			case 'FontAwesome':
				return (<FontAwesomeIcon name={this.props.type} size={this.props.size} color={this.props.color}/>);
			case 'Foundation':
				return (<FoundationIcon name={this.props.type} size={this.props.size} color={this.props.color}/>);
		}
	}
}
