import React from 'react';
import {View, Image, Dimensions, ViewPropTypes} from 'react-native';
import WaveImage from './Waves.png';

const IMAGE_RATIO = 720 / 1188;

export const Wave = (props) => {
	const {width} = Dimensions.get('window');

	return (
		<View {...props}>
			<Image
				source={WaveImage}
				style={{
					width,
					height: width / IMAGE_RATIO
				}}
				resizeMode="contain"
			/>
		</View>
	)
};

Wave.propTypes = {
	...ViewPropTypes
};

export default Wave;
