import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {ToastAndroid} from 'react-native';
import {useDispatch} from 'react-redux';
import {SocialLogin} from '../config';
import {id} from '../config';
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
    webClientId: id.GOOGLE_WEB_CLIENT_ID,
    offlineAccess: true,
  });
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    dispatch(setEmail(userInfo.user.email));
    dispatch(setProfileImage(userInfo.user.photo));
    dispatch(setFirstName(userInfo.user.givenName));
    dispatch(setLastName(userInfo.user.familyName));
  } catch (error) {
    ToastAndroid.show(SocialLogin.SIGN_IN_CANCELLED, ToastAndroid.SHORT);
  }
};

const signOut = async () => {
  try {
    await GoogleSignin.signOut();
    dispatch(setEmail(''));
    dispatch(setProfileImage(''));
    dispatch(setFirstName(''));
    dispatch(setLastName(''));
  } catch (error) {}
};
export {GoogleLogIn, signOut};
