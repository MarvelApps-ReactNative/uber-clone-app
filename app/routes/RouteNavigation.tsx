import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AddCardViewModel,
  SearchResultViewModel,
  AddPaymentViewModel,
  CashPayViewModel,
  ChooseRideViewModel,
  ConfirmRideViewModel,
  EditAccountViewModel,
  HelpViewModel,
  HomeViewModel,
  LoginViewModel,
  MessagesViewModel,
  OnBoardingViewModel,
  PaymentOptionsViewModel,
  SearchViewModel,
  SettingsViewModel,
  SplashScreenViewModel,
  TripViewModal,
  UserprofileViewModel,
  WalletViewModel,
  TripDetailsViewModel,
  HelpWithATripModel,
  AccountModel,
  MoreModel,
  GuideModel,
  UberBusModel,
  SigningUpModel,
  AccessibilityModel,
  UberMoneyModel,
  PickupRideViewModel,
  StartTripViewModel,
  AlertMessageViewModel,
} from '../viewModel';

import {Screens} from '../config';
import {KeyboardAvoidingView} from 'react-native';

const Stack = createNativeStackNavigator();

const RouteNavigation = () => {
  return (
    <NavigationContainer>
      <KeyboardAvoidingView style={{flex: 1}}>
        <Stack.Navigator
          initialRouteName={Screens.SplashScreenViewModel}
          screenOptions={{headerShown: false}}>
          <Stack.Screen
            name={Screens.SplashScreenViewModel}
            component={SplashScreenViewModel}
          />
          <Stack.Screen
            name={Screens.OnBoardingViewModel}
            component={OnBoardingViewModel}
          />
          <Stack.Screen
            name={Screens.HomeViewModel}
            component={HomeViewModel}
          />
          <Stack.Screen
            name={Screens.UserprofileViewModel}
            component={UserprofileViewModel}
          />
          <Stack.Screen
            name={Screens.WalletViewModel}
            component={WalletViewModel}
          />
          <Stack.Screen
            name={Screens.HelpViewModel}
            component={HelpViewModel}
          />
          <Stack.Screen
            name={Screens.MessagesViewModel}
            component={MessagesViewModel}
          />
          <Stack.Screen
            name={Screens.SettingsViewModel}
            component={SettingsViewModel}
          />
          <Stack.Screen
            name={Screens.LoginViewModel}
            component={LoginViewModel}
          />
          <Stack.Screen
            name={Screens.EditAccountViewModel}
            component={EditAccountViewModel}
          />
          <Stack.Screen
            name={Screens.SearchViewModel}
            component={SearchViewModel}
          />
          <Stack.Screen
            name={Screens.TripViewModal}
            component={TripViewModal}
          />
          <Stack.Screen
            name={Screens.CashPayViewModel}
            component={CashPayViewModel}
          />
          <Stack.Screen
            name={Screens.PaymentOptionsViewModel}
            component={PaymentOptionsViewModel}
          />
          <Stack.Screen
            name={Screens.AddPaymentViewModel}
            component={AddPaymentViewModel}
          />
          <Stack.Screen
            name={Screens.AddCardViewModel}
            component={AddCardViewModel}
          />
          <Stack.Screen
            name={Screens.SearchResultViewModel}
            component={SearchResultViewModel}
          />
          <Stack.Screen
            name={Screens.ChooseRideViewModel}
            component={ChooseRideViewModel}
          />
          <Stack.Screen
            name={Screens.ConfirmRideViewModel}
            component={ConfirmRideViewModel}
          />

          <Stack.Screen
            name={Screens.StartTripViewModel}
            component={StartTripViewModel}
          />
          <Stack.Screen
            name={Screens.PickupRideViewModel}
            component={PickupRideViewModel}
          />

          <Stack.Screen
            name={Screens.TripViewDetails}
            component={TripDetailsViewModel}
          />
          <Stack.Screen
            name={Screens.HelpTripViewModel}
            component={HelpWithATripModel}
          />
          <Stack.Screen
            name={Screens.AccountHelpViewModel}
            component={AccountModel}
          />
          <Stack.Screen
            name={Screens.MoreScreenViewModel}
            component={MoreModel}
          />
          <Stack.Screen
            name={Screens.GuideScreenViewModel}
            component={GuideModel}
          />
          <Stack.Screen
            name={Screens.UberBusScreenViewModel}
            component={UberBusModel}
          />
          <Stack.Screen
            name={Screens.SigningUpScreenViewModel}
            component={SigningUpModel}
          />
          <Stack.Screen
            name={Screens.AccessibilityScreenViewModel}
            component={AccessibilityModel}
          />
          <Stack.Screen
            name={Screens.UberMoneyScreenViewModel}
            component={UberMoneyModel}
          />
          <Stack.Screen
            name={Screens.AlertMessageViewModel}
            component={AlertMessageViewModel}
          />
        </Stack.Navigator>
      </KeyboardAvoidingView>
    </NavigationContainer>
  );
};

export default RouteNavigation;
