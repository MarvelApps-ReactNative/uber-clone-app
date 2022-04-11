import {ActionsConstants} from '../../config';

const setDateScheduleRide = (payload: string | undefined) => {
  return {
    type: ActionsConstants.SET_DATE,
    payload: payload,
  };
};

const setTimeScheduleRide = (payload: string | undefined) => {
  return {
    type: ActionsConstants.SET_TIME,
    payload: payload,
  };
};

export {setDateScheduleRide, setTimeScheduleRide};
