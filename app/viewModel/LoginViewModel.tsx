import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Screens} from '../config';
import LoginScreen from '../views/login';

interface LoginViewModelprops {
  navigation: any;
}
const LoginViewModel = (props: LoginViewModelprops) => {
  const {navigation} = props;

  const UserLogin = useSelector((state: any) => state.accountDetails);

  useEffect(() => {
    if (UserLogin.email || UserLogin === 'email') {
      navigation.replace(Screens.HomeViewModel);
    }
  }, [UserLogin]);

  return (
    <LoginScreen
      {...{
        navigation,
        HomeScreen: () => navigation.replace(Screens.HomeViewModel),
      }}
    />
  );
};

export default LoginViewModel;
