import {ActionsConstants} from '../../config';

const intialState = {
  date: '',
  time: '',
};

const scheduleRide = (
  state = intialState,
  action: {type: string; payload: string | undefined},
) => {
  switch (action.type) {
    case ActionsConstants.SET_DATE:
      return {...state, date: action.payload};
    case ActionsConstants.SET_TIME:
      return {...state, time: action.payload};
  }
  return state;
};

export default scheduleRide;
