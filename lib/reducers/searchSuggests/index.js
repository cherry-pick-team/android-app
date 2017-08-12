import {SUGGESTS_CLEAR, SUGGESTS_SET} from '../../actions/suggests';

export default function(state = [], action) {
	switch (action.type) {
		case SUGGESTS_SET:
			return [...action.payload];

		case SUGGESTS_CLEAR:
			return [];

		default:
			return state;
	}
}
