import {AccessToken, LoginManager, Profile} from 'react-native-fbsdk-next';

const FacebookLogin = () => {
  LoginManager.logInWithPermissions(['public_profile', 'email']).then(
    function (result) {
      if (result.isCancelled) {
        console.log('==> Login cancelled');
      } else {
        console.log(
          '==> Login success with permissions: ',
          result.grantedPermissions?.toString(),
        );
        AccessToken.getCurrentAccessToken().then(data => {
          console.log(data);
        });
      }
    },
    function (error) {
      console.log('==> Login fail with error: ' + error);
    },
  );
};

export default FacebookLogin;
