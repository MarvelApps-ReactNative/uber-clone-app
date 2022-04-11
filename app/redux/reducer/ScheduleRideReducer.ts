import {ActionsConstants} from '../../config';

const intialState = {
  date: '',
  time: '',
};

const scheduleRide = (
  state = intialState,
  action: {type: string; payload: string | undefined},
) => {
  if (action.type === ActionsConstants.SET_DATE) {
    return {...state, date: action.payload};
  } else if (action.type === ActionsConstants.SET_TIME) {
    return {...state, time: action.payload};
  }
  return state;
};

export default scheduleRide;
