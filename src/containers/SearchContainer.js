import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';

var mapStateToProps = (state) => ({ value: state.value });

var mapDispatchToProps = (dispatch) => {
  return {
    handleVideoSearch: () => dispatch({ type: 'HANDLE_VIDEO_SEARCH' })
  };
};

var SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default SearchContainer;
