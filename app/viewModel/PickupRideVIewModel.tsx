import React, {useState} from 'react';
import {Animated} from 'react-native';
import {useSelector} from 'react-redux';
import {bottomsheetPanResponder} from '../common';
import {Screens} from '../config';
import {rideInfoDataType} from '../models';
import {RideInformation} from '../config/dummyData/RiderInformation';
import PickRideScreen from '../views/pickupRide';

interface PickupRideViewModelprops {
  navigation: any;
}
type rideInfoType = {
  rideInfo: rideInfoDataType;
};

const PickupRideViewModel = (props: PickupRideViewModelprops) => {
  const {navigation} = props;
  const rideInfostate = useSelector((state: rideInfoType) => state.rideInfo);

  const [rideInfo, setRideInfo] = useState(RideInformation);

  const destination = 'New Delhi Railway Station';
  const paytm = 'Paytm';
  const dropdown = '6:32pm dropoff';

  const viewPosition = new Animated.Value(400);
  const panResponder = bottomsheetPanResponder(viewPosition);
  return (
    <PickRideScreen
      {...{
        navigation,
        rideInfo,
        destination,
        paytm,
        dropdown,
        panResponder,
        viewPosition,
        rideInfostate,
        navigateToHome: () => navigation.navigate(Screens.HomeViewModel),
        PaymentOption: () =>
          navigation.navigate(Screens.PaymentOptionsViewModel),
      }}
    />
  );
};

export default PickupRideViewModel;
