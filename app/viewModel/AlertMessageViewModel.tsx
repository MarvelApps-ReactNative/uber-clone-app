import React from 'react';
import {Screens} from '../config';
import AlertScreen from '../views/alertMessage';

interface AlertMessageProps {
  navigation: any;
}

const AlertMessageViewModel = (props: AlertMessageProps) => {
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
