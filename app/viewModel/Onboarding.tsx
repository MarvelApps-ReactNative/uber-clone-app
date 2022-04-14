import React from 'react';
import {Screens} from '../config';
import {NavigationProp} from '../models';
import Onboardingscreen from '../views/onBoarding/Onboardingscreen';

const OnBoardingViewModel = (props: NavigationProp) => {
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
