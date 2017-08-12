import {connect} from 'react-redux';
import LikeButton from './LikeButton.layout';
import {likeSong} from '../../actions/songs';

export const LikeButtonConnected = connect(null, {like: likeSong})(LikeButton);

export default LikeButtonConnected;
