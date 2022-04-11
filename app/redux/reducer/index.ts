import {combineReducers} from 'redux';
import scheduleRide from './ScheduleRideReducer';
import profileImage from './ProfileImageReducer';
import accountDetails from './AccountDetailsReducer';
import rideInfo from './RideInfoRedux';
import paymentsOption from './PaymentOptionsReducer';

const RootReducer = combineReducers({
  scheduleRide: scheduleRide,
  profileImage: profileImage,
  accountDetails: accountDetails,
  rideInfo: rideInfo,
  paymentsOption: paymentsOption,
});

export default RootReducer;
