import React from 'react';
import {useDispatch} from 'react-redux';
import {setPaymentIcons, setPaymentMethods} from '../redux/actions';
import {paymentMethods} from '../config/dummyData/PaymentMethod';
import AddPaymentScreen from '../views/addPayment';

interface AddPaymentViewModelprops {
  navigation: any;
}

const AddPaymentViewModel = (props: AddPaymentViewModelprops) => {
  const {navigation} = props;

  const dispatch = useDispatch();
  const dispatchReduxData = (props: string | undefined, type: string) => {
    if (type === 'label') {
      dispatch(setPaymentMethods(props));
    }
    if (type === 'icon') {
      dispatch(setPaymentIcons(props));
    }
    navigation.goBack();
  };
  return (
    <AddPaymentScreen
      {...{
        navigation,
        dispatchReduxData,
        paymentMethods
      }}
    />
  );
};

export default AddPaymentViewModel;
