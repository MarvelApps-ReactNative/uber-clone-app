import {ActionsConstants, Icon} from '../../config';

const intialState = {
  cash: 0.0,
  enablePayment: 'Cash',
  enablePaymentIcon: Icon.CASH,
};

const paymentsOption = (
  state = intialState,
  action: {type: string; payload: string | number | undefined},
) => {
  if (action.type === ActionsConstants.SET_CASH) {
    return {...state, cash: action.payload};
  } else if (action.type === ActionsConstants.SET_PAYMENT_METHODS) {
    return {...state, enablePayment: action.payload};
  } else if (action.type === ActionsConstants.SET_PATMENT_ICON) {
    return {...state, enablePaymentIcon: action.payload};
  }
  return state;
};

export default paymentsOption;
