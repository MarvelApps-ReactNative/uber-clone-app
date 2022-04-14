import React from 'react';
import {useSelector} from 'react-redux';
import {profileList, Screens} from '../config';
import {UserProfile} from '../config/dummyData/UserProfile';
import {NavigationProp} from '../models';
import UserProfileScreen from '../views/userProfile/UserProfileScreen';

const UserProfileViewModel = (props: NavigationProp) => {
  const {navigation} = props;
  const profileUri = useSelector((state: any) => state.profileImage);
  const accountDetails = useSelector((state: any) => state.accountDetails);
  return (
    <UserProfileScreen
      {...{
        navigation,
        profileList,
        profileUri,
        accountDetails,
        UserProfile,
        onPressHomeScreen: () => navigation.navigate(Screens.HomeViewModel),
        onPressEditAccount: () =>
          navigation.navigate(Screens.EditAccountViewModel),
      }}
    />
  );
};
export default UserProfileViewModel;
