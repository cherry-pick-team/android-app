import {connect} from 'react-redux';
import LikedSongs from './LikedSongs';
import {deleteEntry} from '../../actions/history';
import {persist} from '../../actions/persist'
import {fetchLikedSongs} from '../../actions/songs'

const mapStateToProps = (state) => ({
	songs: state.likedSongs,
	isAuth: state.user.isAuth
});

function mapDispatchToProps(dispatch) {
	return {
		deleteEntry: (id) => {
			dispatch(deleteEntry(id));
			dispatch(persist('likedSongs'));
		},
		updateLikedSongs: () => {
			dispatch(fetchLikedSongs());
		}
	}
}

export const LikedSongsConnected = connect(mapStateToProps, mapDispatchToProps)(LikedSongs);

export default LikedSongsConnected;
