import React from 'react';
import {Screens} from '../config';
import Onboardingscreen from '../views/onBoarding';

interface OnBoardingViewModelprops {
  navigation: any;
}
const OnBoardingViewModel = (props: OnBoardingViewModelprops) => {
  const {navigation} = props;

  return (
    <Onboardingscreen
      {...{
        navigation,
        LoginScreen: () => navigation.replace(Screens.LoginViewModel),
      }}
    />
  );
};

export default OnBoardingViewModel;
