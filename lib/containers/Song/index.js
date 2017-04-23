"use strict";
import {connect} from 'react-redux';
import Song from '../../components/Song';
import {selectSongById} from '../../reducers/songs';


const mapStateToProps = (state, ownProps) => ({
	song: selectSongById(state, ownProps.songId)
});

export default connect(mapStateToProps)(Song);
