import {connect} from 'react-redux';
import Suggests from './Suggests';
import {search} from '../../actions/search';

const mapStateToProps = (state) => ({
	results: state.searchSuggests
});

export const SuggestsConnected = connect(mapStateToProps, {search})(Suggests);

export default SuggestsConnected;
