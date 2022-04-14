import {ActionsConstants} from '../../config';

const initialState = {
  first_name: 'John',
  last_name: 'Doe',
  number: '87XXXXXXXX',
  email: '',
  password: '******',
  country_code: '',
  flag: 'IN',
};

const accountDetails = (
  state = initialState,
  action: {type: string; payload: string | undefined},
) => {
  switch (action.type) {
    case ActionsConstants.SET_ACCOUNT_FNAME:
      return {...state, first_name: action.payload};
    case ActionsConstants.SET_ACCOUNT_LNAME:
      return {...state, last_name: action.payload};
    case ActionsConstants.SET_ACCOUNT_NUMBER:
      return {...state, number: action.payload};
    case ActionsConstants.SET_ACCOUNT_EMAIL:
      return {...state, email: action.payload};
    case ActionsConstants.SET_ACCOUNT_PASSWORD:
      return {...state, password: action.payload};
    case ActionsConstants.SET_ACCOUNT_COUNTRY_CODE:
      return {...state, country_code: action.payload};
    case ActionsConstants.SET_FLAG:
      return {...state, flag: action.payload};
  }
  return state;
};

export default accountDetails;
