import {ActionsConstants} from '../../config';

const initialState = {
  originName: '',
  destinationName: '',
  originCoord: {},
  destinationCoord: {},
};

const rideInfo = (
  state = initialState,
  action: {type: string; payload: any},
) => {
  if (action.type === ActionsConstants.SET_ORIGIN_NAME) {
    return {...state, originName: action.payload};
  } else if (action.type === ActionsConstants.SET_DESTINATION_NAME) {
    return {...state, destinationName: action.payload};
  } else if (action.type === ActionsConstants.SET_ORIGIN_COORD) {
    return {...state, originCoord: action.payload};
  } else if (action.type === ActionsConstants.SET_DESTINATION_COORD) {
    return {...state, destinationCoord: action.payload};
  }
  return state;
};

export default rideInfo;
