import React, {useState} from 'react';
import {Animated} from 'react-native';
import {NavigationProp} from '../models';
import {bottomsheetPanResponder} from '../common';
import {Screens} from '../config';
import {RideInformation} from '../config/dummyData/RiderInformation';
import StartTripScreen from '../views/startTrip/StartTripScreen';

const StartTripViewModel = (props: NavigationProp) => {
  const {navigation} = props;

  const [rideInfo, setRideInfo] = useState(RideInformation);
  const destination = 'New Delhi Railway Station';
  const dropdown = '6:32 pm Drop off';
  const tipsData = [20, 40, 50];

  const viewPosition = new Animated.Value(200);
  const panResponder = bottomsheetPanResponder(viewPosition);

  return (
    <StartTripScreen
      {...{
        navigation,
        rideInfo,
        destination,
        dropdown,
        panResponder,
        viewPosition,
        tipsData,
        onPressPaymentOption: () =>
          navigation.navigate(Screens.PaymentOptionsViewModel),
      }}
    />
  );
};

export default StartTripViewModel;
