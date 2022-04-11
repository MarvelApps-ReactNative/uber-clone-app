import {ActionsConstants} from '../../config';

const setFirstName = (payload: string | null) => {
  return {
    type: ActionsConstants.SET_ACCOUNT_FNAME,
    payload: payload,
  };
};

const setLastName = (payload: string | null) => {
  return {
    type: ActionsConstants.SET_ACCOUNT_LNAME,
    payload: payload,
  };
};

const setNumber = (payload: string) => {
  return {
    type: ActionsConstants.SET_ACCOUNT_NUMBER,
    payload: payload,
  };
};

const setEmail = (payload: string) => {
  return {
    type: ActionsConstants.SET_ACCOUNT_EMAIL,
    payload: payload,
  };
};

const setPassword = (payload: string) => {
  return {
    type: ActionsConstants.SET_ACCOUNT_PASSWORD,
    payload: payload,
  };
};

const setCountryCode = (payload: string) => {
  return {
    type: ActionsConstants.SET_ACCOUNT_COUNTRY_CODE,
    payload: payload,
  };
};

const setFlag = (payload: string) => {
  return {
    type: ActionsConstants.SET_FLAG,
    payload: payload,
  };
};

export {
  setFirstName,
  setLastName,
  setNumber,
  setEmail,
  setPassword,
  setCountryCode,
  setFlag,
};
