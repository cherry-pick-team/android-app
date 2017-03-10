"use strict";
import React, {Component, PropTypes} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Svg, {Line, Circle, Path} from 'react-native-svg';


function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
	const angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

	return {
		x: centerX + (radius * Math.cos(angleInRadians)),
		y: centerY + (radius * Math.sin(angleInRadians))
	};
}

function describeArc(x, y, radius, startAngle, endAngle){

	const start = polarToCartesian(x, y, radius, endAngle);
	const end = polarToCartesian(x, y, radius, startAngle);

	const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

	const d = [
		"M", start.x, start.y,
		"A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
	].join(" ");

	return d;
}

/**
 * Элемент списка с уровнями на главном экране.
 */
export default class RoundedPath extends Component {
	static propTypes = {
		width: PropTypes.number.isRequired,
		height: PropTypes.number.isRequired,
		startPoint: PropTypes.object.isRequired,
		endPoint: PropTypes.object.isRequired,
		progress: PropTypes.number.isRequired,
		cornerRadius: PropTypes.number,
		color: PropTypes.string.isRequired,
		style: PropTypes.oneOfType([
			React.PropTypes.object,
			React.PropTypes.number,
		])
	};

	static defaultProps = {
		style: {},
		progress: 0,
		cornerRadius: 30
	};

	/**
	 * Возвращает маску с прогрессов уровня
	 * в виде значения для каждого копмонента в долях от его длины
	 * @param progress
	 * @returns {object}
	 */
	getProgressMask(progress = 0) {
		const direction = Math.sign(this.props.startPoint.x - this.props.endPoint.x);
		const firstLineLength = Math.abs(this.props.startPoint.x - this.props.endPoint.x - direction * this.props.cornerRadius);
		const secondLineLength = Math.abs(this.props.startPoint.y + this.props.cornerRadius - this.props.endPoint.y);
		const arcLength = Math.PI / 2 * this.props.cornerRadius;
		const fullLength = (firstLineLength + secondLineLength + arcLength) * progress;
		let firstLine, secondLine, arc, circlePosition;
		if (fullLength <= firstLineLength) {
			firstLine = fullLength / firstLineLength;
			secondLine = 0;
			arc = 0;
			circlePosition = {
				x: this.props.startPoint.x - direction * firstLineLength * firstLine,
				y: this.props.startPoint.y
			}
		} else if (fullLength > firstLineLength && fullLength <= firstLineLength + arcLength) {
			firstLine = 1;
			secondLine = 0;
			arc = (progress * (firstLineLength + secondLineLength + arcLength) - firstLineLength) / arcLength;
			let centerX = this.props.endPoint.x + direction * this.props.cornerRadius;
			let centerY = this.props.startPoint.y + this.props.cornerRadius;
			circlePosition = {
				x: centerX - this.props.cornerRadius * Math.sin(progress * Math.PI/2),
				y: centerY - this.props.cornerRadius * Math.cos(progress * Math.PI/2)
			}
		} else if (fullLength > firstLineLength + arcLength) {
			firstLine = 1;
			secondLine = (progress * (firstLineLength + arcLength + secondLineLength)
				- firstLineLength - arcLength) / secondLineLength;
			arc = 1;
			circlePosition = {
				x: this.props.endPoint.x,
				y: this.props.startPoint.y + this.props.cornerRadius  + secondLineLength * secondLine
			}
		}

		return {
			firstLine,
			secondLine,
			arc,
			circlePosition
		}
	}

	render() {
		//@todo catculate path patrs here and create array for rendering
		// This const indicate direction of horizontal line
		const direction = Math.sign(this.props.startPoint.x - this.props.endPoint.x);

		const arcStart = direction > 0 ? 270 : 0;
		const arcEnd = direction > 0 ? 0 : 90;

		const {firstLine, secondLine, arc, circlePosition} = this.getProgressMask(this.props.progress);

		const firstLineMaskEnd = this.props.startPoint.x +
			firstLine * (this.props.endPoint.x + direction * this.props.cornerRadius - this.props.startPoint.x);
		const secondLineMaskEnd = this.props.startPoint.y + this.props.cornerRadius +
			secondLine * (this.props.endPoint.y - this.props.startPoint.y - this.props.cornerRadius);
		const arcMaskStart = direction > 0 ? 360 - arc * 90 : 0;
		const arcMaskEnd = direction > 0 ? 0 : 90 * arc;

		return (
			<View style={[styles.container, this.props.style]}>
				<Svg width={this.props.width} height={this.props.height}>
					<Line
						x1={this.props.startPoint.x}
						y1={this.props.startPoint.y}
						x2={this.props.endPoint.x + direction * this.props.cornerRadius}
						y2={this.props.startPoint.y}
						stroke="grey"
						strokeWidth="1"/>
					<Line
						x1={this.props.endPoint.x}
						y1={this.props.startPoint.y + this.props.cornerRadius}
						x2={this.props.endPoint.x}
						y2={this.props.endPoint.y}
						stroke="grey"
						strokeWidth="1"/>
					<Path
						d={describeArc(
							this.props.endPoint.x + direction * this.props.cornerRadius,
							this.props.startPoint.y + this.props.cornerRadius,
							this.props.cornerRadius,
							arcStart,
							arcEnd
						)}
						fill="none"
						stroke="grey"
					/>
					<Line
						x1={this.props.startPoint.x}
						y1={this.props.startPoint.y}
						x2={firstLineMaskEnd}
						y2={this.props.startPoint.y}
						stroke={this.props.color}
						strokeWidth="4"/>
					<Path
						d={describeArc(
							this.props.endPoint.x + direction * this.props.cornerRadius,
							this.props.startPoint.y + this.props.cornerRadius,
							this.props.cornerRadius,
							arcMaskStart,
							arcMaskEnd
						)}
						fill="none"
						strokeWidth="4"
						stroke={this.props.color}
					/>
					<Line
						x1={this.props.endPoint.x}
						y1={this.props.startPoint.y + this.props.cornerRadius}
						x2={this.props.endPoint.x}
						y2={secondLineMaskEnd}
						stroke={this.props.color}
						strokeWidth="4"/>
					<Circle
						cx={circlePosition.x}
						cy={circlePosition.y}
						r={this.props.progress === 0 || this.props.progress === 1 ? 0 : 8}
						fill={this.props.color}
					/>
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
