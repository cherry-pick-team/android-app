"use strict";
import {connect} from 'react-redux';
import ProgressLine from '../../components/ProgressLine';
import {seek} from '../../actions/songs';


export default connect(null, {seek})(ProgressLine)
