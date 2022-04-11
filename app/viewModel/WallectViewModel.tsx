import React from 'react';
import {useSelector} from 'react-redux';
import {Screens} from '../config';
import Wallet from '../views/wallet';

interface WalletViewModelprops {
  navigation: any;
}
const WalletViewModel = (props: WalletViewModelprops) => {
  const {navigation} = props;
  const paymentsOption = useSelector((state: any) => state.paymentsOption);

  return (
    <Wallet
      {...{
        paymentsOption,
        onPressGoBack: () => navigation.goBack(),
        onPress: () => navigation.navigate(Screens.AddPaymentViewModel),
      }}
    />
  );
};

export default WalletViewModel;
