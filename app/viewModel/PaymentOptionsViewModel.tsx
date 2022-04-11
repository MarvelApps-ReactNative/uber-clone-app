import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {Screens} from '../config';
import PaymentOptionsScreen from '../views/paymentOption';

interface PaymentOptionsViewModelprops {
  navigation: any;
}
const PaymentOptionsViewModel = (props: PaymentOptionsViewModelprops) => {
  const {navigation} = props;
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const paymentsOption = useSelector((state: any) => state.paymentsOption);

  return (
    <PaymentOptionsScreen
      {...{
        navigation,
        isEnabled,
        setIsEnabled,
        toggleSwitch,
        paymentsOption,
        GoBack: () => navigation.goBack(),
        AddPayment: () => navigation.navigate(Screens.AddPaymentViewModel),
      }}
    />
  );
};

export default PaymentOptionsViewModel;
