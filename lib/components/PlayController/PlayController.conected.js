"use strict";
import {connect} from 'react-redux';
import PlayController from '../PlayController';
import {play, stop} from '../../actions/songs';

const mapStateToProps = (state) => ({
	playingSongId: state.songs.playingSongId,
});

export default connect(mapStateToProps, {play, stop})(PlayController);
