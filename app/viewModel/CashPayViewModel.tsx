import React from 'react';
import {NavigationProp} from '../models';
import CashPayScreen from '../views/cashPay/CashPayScreen';

const CashPayViewModel = (props: NavigationProp) => {
  const {navigation} = props;

  return (
    <CashPayScreen
      {...{
        navigation,
      }}
    />
  );
};

export default CashPayViewModel;
