import SpotIndex from './spot_index';

import { connect } from 'react-redux';
import { getSpots } from '../../actions/spot_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    spots: Object.values(state.entities.spots),
    searchSpots: ownProps.searchSpots
  };
};

const mapDispatchToProps = (dispatch) => {
  return ({
    getSpots: () => dispatch(getSpots())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotIndex);
