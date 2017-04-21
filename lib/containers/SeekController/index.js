"use strict";
import {connect} from 'react-redux';
import SeekController from '../../components/SeekController';
import {seek} from '../../actions/songs';


export default connect(null, {seek})(SeekController)
