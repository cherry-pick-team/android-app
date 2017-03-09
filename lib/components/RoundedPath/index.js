"use strict";
import React, {Component, PropTypes} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Svg, {Line} from 'react-native-svg';


/**
 * Элемент списка с уровнями на главном экране.
 */
export default class LevelsItem extends Component {
	static propTypes = {
		width: PropTypes.number.isRequired,
		height: PropTypes.number.isRequired,
		startPoint: PropTypes.object.isRequired,
		endPoint: PropTypes.object.isRequired,
		style: PropTypes.oneOfType([
			React.PropTypes.object,
			React.PropTypes.number,
		])
	};

	static defaultProps = {
		style: {}
	};

	render() {
		//@todo catculate path patrs here and create array for rendering
		// alert(JSON.stringify(this.props))
		return (
			<View style={[styles.container, this.props.style]}>
				<Svg width={this.props.width} height={this.props.height}>
					<Line
						x1={this.props.startPoint.x}
						y1={this.props.startPoint.y}
						x2={this.props.endPoint.x}
						y2={this.props.startPoint.y}
						stroke="grey"
						strokeWidth="1"/>
					<Line
						x1={this.props.endPoint.x}
						y1={this.props.startPoint.y}
						x2={this.props.endPoint.x}
						y2={this.props.endPoint.y}
						stroke="grey"
						strokeWidth="1"/>
				</Svg>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {

	},
	svg: {

	}
});
