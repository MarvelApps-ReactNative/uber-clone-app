import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {useDispatch} from 'react-redux';
import {
  setEmail,
  setFirstName,
  setLastName,
  setProfileImage,
} from '../redux/actions';

const dispatch = useDispatch();

const GoogleLogIn = async () => {
  GoogleSignin.configure({
    scopes: [],
    webClientId:
      '84689585798-tfra7o78iod6iri5equj2vuj597k58lo.apps.googleusercontent.com',
    offlineAccess: true,
  });
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.log('userinfo=>', userInfo);
    dispatch(setEmail(userInfo.user.email));
    dispatch(setProfileImage(userInfo.user.photo));
    dispatch(setFirstName(userInfo.user.givenName));
    dispatch(setLastName(userInfo.user.familyName));
  } catch (error) {
    console.log(error);
    if (error === statusCodes.SIGN_IN_CANCELLED) {
    } else if (error === statusCodes.IN_PROGRESS) {
    } else if (error === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    } else {
      // console.log('err');
    }
  }
};

const signOut = async () => {
  try {
    await GoogleSignin.signOut();
    dispatch(setEmail(''));
    dispatch(setProfileImage(''));
    dispatch(setFirstName(''));
    dispatch(setLastName(''));
    console.log('Sign Out');
  } catch (error) {
    console.error(error);
  }
};
export {GoogleLogIn, signOut};
