import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createSpot, clearErrors } from '../../actions/spot_actions';
import SpotForm from './spot_form';

const mapStateToProps = (state, { location }) => ({
  lat: new URLSearchParams(location.search).get("lat"),
  lng: new URLSearchParams(location.search).get("lng"),
  spots: Object.values(state.entities.spots),
  currentUser: state.session.currentUser,
  errors: state.errors.spot
});

const mapDispatchToProps = dispatch => ({
  createSpot: spot => dispatch(createSpot(spot)),
  clearErrors: () => dispatch(clearErrors())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotForm));
