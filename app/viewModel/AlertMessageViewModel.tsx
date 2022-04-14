import React from 'react';
import {Screens} from '../config';
import {NavigationProp} from '../models';
import AlertScreen from '../views/alertMessage/AlertScreen';

const AlertMessageViewModel = (props: NavigationProp) => {
  const {navigation} = props;
  return (
    <AlertScreen
      {...{
        navigation,
        onPressButton: () => navigation.navigate(Screens.HomeViewModel),
      }}
    />
  );
};

export default AlertMessageViewModel;
