import React, {PropTypes} from 'react';
import Icon from '../Icon';


export const LikeButton = ({like, songId, isLiked}) => {
	return (
		<Icon
			onPress={!isLiked ? like.bind(null, songId) : () => {}}
			type={isLiked ? 'heart' : 'heart-o'}
			from="FontAwesome"
			size={40}
			color="#FF0045"
		/>
	);
};

LikeButton.propTypes = {
	like: PropTypes.func.isRequired,
	songId: PropTypes.number.isRequired,
	isLiked: PropTypes.bool.isRequired
};

export default LikeButton;
