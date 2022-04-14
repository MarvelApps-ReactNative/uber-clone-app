import React from 'react';
import {useDispatch} from 'react-redux';
import {setPaymentIcons, setPaymentMethods} from '../redux/actions';
import {paymentMethods} from '../config/dummyData/PaymentMethod';
import {NavigationProp} from '../models';
import {ScreenConstant} from '../config';
import AddPaymentScreen from '../views/addPayment/AddPaymentScreen';

const AddPaymentViewModel = (props: NavigationProp) => {
  const {navigation} = props;

  const dispatch = useDispatch();
  const dispatchReduxData = (props: string | undefined, type: string) => {
    if (type === ScreenConstant.addPayment.LABEL) {
      dispatch(setPaymentMethods(props));
    }
    if (type === ScreenConstant.addPayment.ICON) {
      dispatch(setPaymentIcons(props));
    }
    navigation.goBack();
  };
  return (
    <AddPaymentScreen
      {...{
        navigation,
        dispatchReduxData,
        paymentMethods,
      }}
    />
  );
};

export default AddPaymentViewModel;
