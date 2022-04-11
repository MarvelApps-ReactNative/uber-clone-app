import React from 'react';
import {Screens} from '../config';
import ChooseRide from '../views/chooseRide';

interface ChooseRideViewModelprops {
  navigation: any;
}
const ChooseRideViewModel = (props: ChooseRideViewModelprops) => {
  const {navigation} = props;

  return (
    <ChooseRide
      {...{
        navigation,
        PaymentOptionScreen: () =>
          navigation.navigate(Screens.PaymentOptionsViewModel),
      }}
    />
  );
};

export default ChooseRideViewModel;
