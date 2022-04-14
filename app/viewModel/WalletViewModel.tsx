import React from 'react';
import {useSelector} from 'react-redux';
import {Screens} from '../config';
import {NavigationProp} from '../models';
import WalletScreen from '../views/wallet/WalletScreen';

const WalletViewModel = (props: NavigationProp) => {
  const {navigation} = props;
  const paymentsOption = useSelector((state: any) => state.paymentsOption);

  return (
    <WalletScreen
      {...{
        paymentsOption,
        onPressGoBack: () => navigation.goBack(),
        onPress: () => navigation.navigate(Screens.AddPaymentViewModel),
      }}
    />
  );
};

export default WalletViewModel;
