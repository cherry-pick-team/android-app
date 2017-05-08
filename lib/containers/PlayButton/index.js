"use strict";
import {connect} from 'react-redux';
import PlayButton from '../../components/PlayButton';
import {play, pause} from '../../actions/songs';
import {selectSongById} from '../../reducers/songs';

const mapStateToProps = (state, ownProps) => ({
	isPlaying: selectSongById(state, ownProps.songId).playingChunk === ownProps.chunkIndex
});

export default connect(mapStateToProps, {play, pause})(PlayButton)
