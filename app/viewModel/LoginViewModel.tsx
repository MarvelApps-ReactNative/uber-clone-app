import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {ScreenConstant, Screens} from '../config';
import {NavigationProp} from '../models';
import LoginScreen from '../views/login/LoginScreen';

const LoginViewModel = (props: NavigationProp) => {
  const {navigation} = props;

  const UserLogin = useSelector((state: any) => state.accountDetails);

  useEffect(() => {
    if (UserLogin.email || UserLogin === ScreenConstant.login.EMAIL) {
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
