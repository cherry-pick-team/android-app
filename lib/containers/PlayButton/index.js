"use strict";
import {connect} from 'react-redux';
import PlayButton from '../../components/PlayButton';
import {play, pause} from '../../actions/songs';


export default connect(null, {play, pause})(PlayButton)
