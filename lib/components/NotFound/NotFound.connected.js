import {connect} from 'react-redux';
import NotFound from './NotFound';
import {push} from '../../actions/router';

export const NotFoundConnected = connect(null, {push})(NotFound);

export default NotFoundConnected;
