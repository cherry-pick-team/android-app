import {connect} from 'react-redux';
import Settings from './Settings';
import {logout} from '../../actions/user';
import {push} from '../../actions/router';

function mapStateToProps(state) {
	return {
		isAuth: state.user.isAuth,
		credentials: state.user.credentials,
	};
}

export const SettingsConnected = connect(mapStateToProps, {logout, push})(Settings);

export default SettingsConnected;
