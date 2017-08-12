import {connect} from 'react-redux';
import Link from './Link';
import {push} from '../../actions/router';

const mapDispatchToProps = (dispatch) => ({
	onPress: (route) => {
		push(route)
	}
});

export const LinkConnected = connect(null, mapDispatchToProps)(Link);

export default LinkConnected;
