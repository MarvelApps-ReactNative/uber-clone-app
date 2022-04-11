import {ActionsConstants} from '../../config';

const setCash = (payload: string | number | undefined) => {
  return {
    type: ActionsConstants.SET_CASH,
    payload: payload,
  };
};

const setPaymentMethods = (payload: string | undefined) => {
  return {
    type: ActionsConstants.SET_PAYMENT_METHODS,
    payload: payload,
  };
};

const setPaymentIcons = (payload: string | undefined) => {
  return {
    type: ActionsConstants.SET_PATMENT_ICON,
    payload: payload,
  };
};

export {setCash, setPaymentMethods, setPaymentIcons};
