import {connect} from 'react-redux';
import AuthWebView from '../../components/Auth/AuthWebView';
import {login} from '../../actions/user';

export const AuthWebViewConnected = connect(null, {login})(AuthWebView);

export default AuthWebViewConnected;
