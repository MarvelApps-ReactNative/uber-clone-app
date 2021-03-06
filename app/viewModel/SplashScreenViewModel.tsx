import React, {memo, useEffect, useState} from 'react';
import {Screens} from '../config';
import {NavigationProp} from '../models';
import SplashScreen from '../views/splashScreen/SplashScreen';

const SplashScreenViewModel = (props: NavigationProp) => {
  const {navigation} = props;
  const [authLoaded, setAuthLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAuthLoaded(true);
    }, 4000);
  }, []);

  useEffect(() => {
    if (authLoaded) {
      navigation.replace(Screens.OnBoardingViewModel);
    }
  }, [authLoaded, navigation]);

  return (
    <SplashScreen
      {...{
        navigation,
      }}
    />
  );
};
export default memo(SplashScreenViewModel);
