import {ActionsConstants} from '../../config';

const setOriginName = (payload: any) => {
  return {
    type: ActionsConstants.SET_ORIGIN_NAME,
    payload: payload,
  };
};

const setDestinationName = (payload: any) => {
  return {
    type: ActionsConstants.SET_DESTINATION_NAME,
    payload: payload,
  };
};

const setOriginCoord = (payload: any) => {
  return {
    type: ActionsConstants.SET_ORIGIN_COORD,
    payload: payload,
  };
};

const setDestinationCoord = (payload: any) => {
  return {
    type: ActionsConstants.SET_DESTINATION_COORD,
    payload: payload,
  };
};

export {setOriginName, setDestinationName, setOriginCoord, setDestinationCoord};
