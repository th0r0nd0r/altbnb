import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import SpotErrorsReducer from './spot_errors_reducer';
import BookingErrorsReducer from './booking_errors_reducer';

export default combineReducers({
  session: SessionErrorsReducer,
  spot: SpotErrorsReducer,
  booking: BookingErrorsReducer
});
