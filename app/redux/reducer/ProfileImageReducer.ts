import {ActionsConstants} from '../../config';
let initialState = '';

const profileImage = (
  state = initialState,
  action: {type: string; payload: string},
) => {
  if (action.type === ActionsConstants.SET_PROFILE_IMAGE) {
    return (state = action.payload);
  }
  return state;
};

export default profileImage;
