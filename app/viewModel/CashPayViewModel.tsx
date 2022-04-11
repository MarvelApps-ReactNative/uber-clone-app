import React from 'react';
import CashPay from '../views/cashPay';

interface CashPayViewModelprops {
  navigation: any;
}
const CashPayViewModel = (props: CashPayViewModelprops) => {
  const {navigation} = props;

  return (
    <CashPay
      {...{
        navigation,
      }}
    />
  );
};

export default CashPayViewModel;
