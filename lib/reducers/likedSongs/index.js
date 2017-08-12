import {FETCH_LIKED_SONGS_SUCCESS} from '../../actions/songs';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_LIKED_SONGS_SUCCESS:
			return [...action.payload];

		default:
			return state;
	}
}
