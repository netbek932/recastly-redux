import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

var mapStateToProps = (state) => ({ currentVideo: state.currentVideo });

var mapDispatchToProps = (dispatch) => {
  return {
    handleVideoSearch: () => dispatch({ type: 'CHANGE_VIDEO' })
  };
};

var VideoPlayerContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default VideoPlayerContainer;
