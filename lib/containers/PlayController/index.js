"use strict";
import {connect} from 'react-redux';
import PlayController from '../../components/PlayController';
import {play, stop} from '../../actions/songs';


export default connect(() => ({}), {play, stop})(PlayController)
