import React from 'react';
import {Screens} from '../config';
import {NavigationProp} from '../models';
import ChooseRideScreen from '../views/chooseRide/ChooseRideScreen';

const ChooseRideViewModel = (props: NavigationProp) => {
  const {navigation} = props;

  return (
    <ChooseRideScreen
      {...{
        navigation,
        PaymentOptionScreen: () =>
          navigation.navigate(Screens.PaymentOptionsViewModel),
      }}
    />
  );
};

export default ChooseRideViewModel;
