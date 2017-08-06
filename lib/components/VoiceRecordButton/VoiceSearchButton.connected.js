import {connect} from 'react-redux';
import Search from './VoiceRecordButton';
import {voiceSearch} from '../../actions/search';

export default connect(null, {search: voiceSearch})(Search)
