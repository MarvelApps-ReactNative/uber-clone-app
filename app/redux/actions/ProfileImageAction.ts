import {ActionsConstants} from '../../config';

const setProfileImage = (payload: string | undefined | null) => {
  return {
    type: ActionsConstants.SET_PROFILE_IMAGE,
    payload: payload,
  };
};

const removeProfileImage = (payload: string | undefined) => {
  return {
    type: ActionsConstants.REMOVE_PROFILE_IMAGE,
    payload: payload,
  };
};

export {setProfileImage, removeProfileImage};
